import type {
  ICard,
  ICardConfig,
  TTemplate,
  TPageConfig,
  ITemplateMenu,
  TColor,
  IGuideConfig,
  IGuide,
  IFilter,
  IFilterSelections,
} from "@/models";
import { DEFAULT_FILTER_OPTIONS, DEFAULT_FILTER_SELECTIONS } from "@/constants";
import { PRESET } from "@/content/global";

export const generatePages = async (pageConfig: TPageConfig) => {
  const _guideConfigsMemo: Record<string, IGuideConfig> = {};

  const _start = async (pageConfig: TPageConfig) => {
    let pages = await _parsePageConfig(pageConfig);
    pages.forEach((_, key) => {
      if (pages[key]?.type === "directory") {
        pages[key].directory = pages.filter(
          (pageInner) => pageInner.type === "info",
        );
      }
    });
    return pages;
  };

  const _parsePageConfig = async (
    pageConfig: TPageConfig,
    parentTemplate?: TTemplate,
  ): Promise<TTemplate[]> => {
    const preset = pageConfig.preset ? PRESET[pageConfig.preset] : undefined;

    let path = parentTemplate?.path ?? "/";
    if (pageConfig.slug) {
      path += path.slice(-1) === "/" ? pageConfig.slug : `/${pageConfig.slug}`;
    }

    const type = pageConfig.template;
    const backgroundImage =
      (pageConfig.backgroundImage &&
        `https://s3-us-west-2.amazonaws.com/mtgprimer/splash/${pageConfig.backgroundImage}.jpg`) ??
      parentTemplate?.backgroundImage ??
      "";
    const backgroundCaption =
      (pageConfig.backgroundCaption &&
        `Illustrated by ${pageConfig.backgroundCaption}`) ??
      parentTemplate?.backgroundCaption ??
      "";
    const title = pageConfig.title ?? preset?.NAME ?? "";
    const description =
      pageConfig.description ?? preset?.DESCRIPTION ?? "Page was not found.";
    const icon = pageConfig.icon ?? preset?.ICON ?? parentTemplate?.icon ?? "";

    const titleFull = `${title ? `${title} | ` : ""}MTG Primer${
      title ? "" : ` | Strategy Guides for Limited Magic: The Gathering`
    }`;

    const template: Partial<TTemplate> = {
      path,
      type,
      backgroundImage,
      backgroundCaption,
      icon,
      title,
      titleFull,
      description,
    };

    switch (template.type) {
      case "info":
      case "guide":
      case "guide-group":
        const formatCode =
          pageConfig.template === "info"
            ? pageConfig.formatCode
            : parentTemplate?.type === "info"
              ? parentTemplate.formatCode
              : "";
        if (!formatCode) {
          return [];
        }

        const guideGalleryData = await _parseGuideConfig(formatCode, "gallery");
        if (!guideGalleryData) {
          return [];
        }

        const formatName = guideGalleryData.guide.formatName;
        template.formatName = formatName;
        template.formatCode = formatCode;
        template.titleFull = `${formatName}: ${titleFull}`;
        template.description = description.replaceAll(
          "%formatName",
          formatName,
        );

        switch (template.type) {
          case "info":
            if (pageConfig.template === "info") {
              template.releaseDate = pageConfig.releaseDate;
            }
            break;
          case "guide":
            if (pageConfig.template === "guide") {
              const guideData = await _parseGuideConfig(
                formatCode,
                pageConfig.guide,
              );
              template.guide = guideData?.guide;
              template.filter = guideData?.filter;
            }
            break;
          case "guide-group":
            if (pageConfig.template === "guide-group") {
              const guideGroupData = await _parseGuideGroupConfig(
                formatCode,
                pageConfig.guides,
                {
                  grouping: pageConfig.defaultGrouping,
                  ordering: pageConfig.defaultOrdering,
                },
              );
              if (!guideGroupData) {
                return [];
              }
              template.guides = guideGroupData.guides;
              template.filter = guideGroupData.filter;
            }
            break;
        }
        break;
    }

    let subTemplates: TTemplate[] = [];
    if (pageConfig.pages) {
      for (const currentPageConfig of pageConfig.pages) {
        subTemplates = subTemplates.concat(
          await _parsePageConfig(currentPageConfig, template as TTemplate),
        );
      }
    }

    let menu: ITemplateMenu | undefined;
    if (pageConfig.template === "info") {
      menu = {
        formatCode: pageConfig.formatCode,
        home: {
          path,
          icon,
          title,
          image: backgroundImage,
        },
        pages:
          subTemplates.map((page) => ({
            path: page.path,
            icon: page.icon,
            title: page.title,
            image: page.backgroundImage,
          })) ?? [],
      };
      if (template.type === "info") {
        template.menu = menu;
      }
    }

    if (menu) {
      subTemplates = subTemplates.map((subTemplate) => ({
        ...subTemplate,
        menu,
      }));
    }

    if (template.type === "home") {
      template.latestFormats = subTemplates
        .filter((page) => page.type === "info")
        .slice(0, 3);
    }

    if (template.type === "directory") {
      template.directory = [];
    }

    if (template.type === "info") {
      template.guidePages = subTemplates.filter(
        (pageInner) =>
          pageInner.type === "guide" || pageInner.type === "guide-group",
      );
    }

    return [template as TTemplate, ...subTemplates];
  };

  const _loadGuideJson = async (formatCode: string, guideFile: string) => {
    if (_guideConfigsMemo[guideFile]) {
      return _guideConfigsMemo[guideFile];
    }
    let guideConfig: IGuideConfig | undefined;
    try {
      guideConfig = (
        await import(`@/content/guides/${formatCode}/${guideFile}.json`)
      )?.default;
    } catch (e: unknown) {
      if (formatCode === guideFile) {
        console.error(e);
      }
      // TODO: Just skipping if it's not found and its not the gallery file
    }
    if (guideConfig) _guideConfigsMemo[guideFile] = guideConfig;
    return guideConfig;
  };

  const _parseGuideConfig = async (
    formatCode: string,
    guideKey: string,
  ): Promise<{ guide: IGuide; filter: IFilter } | undefined> => {
    const guideFile =
      guideKey === "gallery" ? formatCode : `${formatCode}-${guideKey}`;
    const preset = PRESET[`guide-${guideKey}`];

    let guideConfig = await _loadGuideJson(formatCode, guideFile);
    if (!guideConfig) return;

    let guideConfigGallery =
      guideKey !== "gallery"
        ? await _loadGuideJson(formatCode, formatCode)
        : undefined;

    let formatName =
      guideConfigGallery?.formatName ?? guideConfig.formatName ?? formatCode;
    const name = guideConfig.name ?? preset?.NAME ?? guideKey;
    const description = guideConfig.description ?? preset?.DESCRIPTION;
    const icon = guideConfig.icon ?? preset?.ICON;
    const tags = preset?.TAGS;
    let sets = {
      [formatCode]: formatName,
      ...guideConfigGallery?.sets,
      ...guideConfig.sets,
    };
    let cards = Object.keys(guideConfig.cards).map((cardName) =>
      _mergeCards([
        {
          code:
            guideConfig.cards[cardName]?.code ??
            guideConfigGallery?.cards?.[cardName]?.code ??
            guideConfig.code ??
            formatCode,
        },
        _parseCardConfig(cardName, guideConfig.cards[cardName]),
        _parseCardConfig(cardName, guideConfigGallery?.cards[cardName]),
      ]),
    );

    const includeFormats =
      guideConfig.includeFormats ?? guideConfigGallery?.includeFormats;
    if (includeFormats) {
      for (const subFormat of includeFormats) {
        let subGuideCode: string | undefined;
        if (typeof subFormat === "string") {
          subGuideCode = subFormat;
        } else {
          subGuideCode = subFormat.code;
        }
        const subGuideData = await _parseGuideConfig(subGuideCode, guideKey);
        if (!subGuideData) continue;

        cards = cards.concat(
          subGuideData.guide.cards
            .map((card) => ({
              ...card,
              set: subGuideCode,
            }))
            .filter((card) => {
              if (typeof subFormat === "object") {
                if (!!subFormat.min && parseInt(card.number) < subFormat.min) {
                  return false;
                }
                if (!!subFormat.max && parseInt(card.number) > subFormat.max) {
                  return false;
                }
              }
              return true;
            }),
        );

        sets[subGuideCode] = subGuideData.guide.name;
      }
    }

    const filter = {
      options: {
        ...structuredClone(DEFAULT_FILTER_OPTIONS),
        sets,
        categories: guideConfig.categories ?? {},
      },
      defaultSelections: {
        ...structuredClone(DEFAULT_FILTER_SELECTIONS),
        grouping:
          guideConfig.defaultGrouping ?? DEFAULT_FILTER_SELECTIONS.grouping,
        ordering:
          guideConfig.defaultOrdering ?? DEFAULT_FILTER_SELECTIONS.ordering,
      },
    };

    return {
      guide: {
        key: guideKey,
        code: formatCode,
        formatName,
        name,
        description,
        icon,
        tags,
        cards,
      },
      filter,
    };
  };

  const _parseGuideGroupConfig = async (
    formatCode: string,
    guideKeys: string[],
    defaultSelections?: Partial<IFilterSelections>,
  ) => {
    const guidesData = (
      await Promise.all(
        guideKeys.map(
          async (guideKey) => await _parseGuideConfig(formatCode, guideKey),
        ),
      )
    ).filter((guide) => !!guide);

    const guides = guidesData.map((guideData) => guideData.guide);

    const filter = {
      options: {
        ...structuredClone(DEFAULT_FILTER_OPTIONS),
        sets: guidesData.reduce(
          (acc, guideData) => ({
            ...acc,
            ...guideData.filter.options.sets,
          }),
          {},
        ),
        categories: guidesData.reduce(
          (acc, guideData) => ({
            ...acc,
            ...guideData.filter.options.categories,
          }),
          {},
        ),
      },
      defaultSelections: {
        ...structuredClone(DEFAULT_FILTER_SELECTIONS),
        ...defaultSelections,
      },
    };

    return {
      guides,
      filter,
    };
  };

  const _mergeCards = (cards: Partial<ICard>[]): ICard => ({
    number: cards.find((card) => !!card.number)?.number ?? "000",
    name: cards.find((card) => !!card.number)?.name ?? "Card Name",
    cost: cards.find((card) => !!card.cost)?.cost ?? [],
    rarity: cards.find((card) => !!card.rarity)?.rarity ?? "c",
    code: cards.find((card) => !!card.code)?.code ?? "exa",
    color: cards.find((card) => !!card.color)?.color ?? "c",
    colorsRequired:
      cards.find((card) => !!card.colorsRequired)?.colorsRequired ?? [],
    mv: cards.find((card) => !!card.mv || card.mv === 0)?.mv ?? 0,
    layout: cards.find((card) => !!card.layout)?.layout,
    isTransformed: cards.find((card) => !!card.isTransformed)?.isTransformed,
    // TODO: Add cost override
    // isCostOverride: cards.filter((card) => !!card.cost)?.length > 1,
    categories: cards.find((card) => !!card.categories)?.categories ?? [],
  });

  const _parseCardConfig = (
    cardName: string,
    cardConfig?: Partial<ICardConfig>,
  ): Partial<ICard> => {
    const number = cardConfig?.number?.padStart(3, "0");
    const name = cardName;
    const cost = cardConfig?.cost;
    const rarity = cardConfig?.rarity;
    const code = cardConfig?.code;
    let color: TColor | undefined;
    let colorsRequired: string[] | undefined = undefined;
    let mv: number | undefined;
    const layout = cardConfig?.layout;
    const isTransformed = cardConfig?.isTransformed;
    const categories = cardConfig?.categories ?? [];

    if (cost) {
      colorsRequired = [];
      mv = 0;
      cost.forEach((costItem) => {
        if (!colorsRequired) {
          colorsRequired = [];
        }
        if (!mv) {
          mv = 0;
        }
        if (
          [
            "wu",
            "uw",
            "wb",
            "bw",
            "wr",
            "rw",
            "wg",
            "gw",
            "ub",
            "bu",
            "ur",
            "ru",
            "ug",
            "gu",
            "br",
            "rb",
            "bg",
            "gb",
            "rg",
            "gr",
          ].find((symbol) => symbol === costItem)
        ) {
          if (!colorsRequired.includes(costItem)) {
            colorsRequired.push(costItem);
          }
          mv++;
        } else if (costItem.search(/p/g) > -1) {
          // Do nothing
        } else if (
          ["2w", "2u", "2b", "2r", "2g"].find((symbol) => symbol === costItem)
        ) {
          mv++;
        } else if (
          ["w", "u", "b", "r", "g", "c"].find((symbol) => symbol === costItem)
        ) {
          if (!colorsRequired.includes(costItem)) {
            colorsRequired.push(costItem);
          }
          mv++;
        } else {
          if (parseInt(costItem) > 0) {
            mv += parseInt(costItem);
          }
        }
      });

      if (!colorsRequired.length) {
        color = "c";
      } else if (
        colorsRequired.length === 1 &&
        colorsRequired[0].length === 1
      ) {
        color = colorsRequired[0] as TColor;
      } else {
        color = "m";
      }
    }

    return {
      number,
      name,
      cost,
      layout,
      rarity,
      color,
      code,
      colorsRequired,
      mv,
      isTransformed,
      categories,
    };
  };

  return _start(pageConfig);
};
