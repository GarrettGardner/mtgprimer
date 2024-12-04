import type { ICard, ICardConfig, IFormatConfig, TTemplate, TPageConfig, ITemplateMenu, TColor } from "@/models";
import { DEFAULT_FILTER_OPTIONS, DEFAULT_FILTERS } from "@/constants";
import { PRESET } from "@/content/global";

export const generatePages = async (pageConfig: TPageConfig) => {
  let pages = await _parsePageConfig(pageConfig);
  pages.forEach((_, key) => {
    if (pages[key]?.type === "directory") {
      pages[key].directory = pages.filter((pageInner) => pageInner.type === "info");
    }
  });
  return pages;
};

const _parsePageConfig = async (
  pageConfig: TPageConfig,
  parentTemplate?: TTemplate | undefined,
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
    "default image";
  const backgroundCaption =
    (pageConfig.backgroundCaption && `Illustrated by ${pageConfig.backgroundCaption}`) ??
    parentTemplate?.backgroundCaption ??
    "";
  const title = pageConfig.title ?? preset?.NAME ?? "";
  const description = pageConfig.description ?? preset?.DESCRIPTION ?? "Page was not found.";
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
      let formatCode: string | undefined;
      if (pageConfig.template === "info") {
        formatCode = pageConfig.formatCode;
      } else if (parentTemplate?.type === "info") {
        formatCode = parentTemplate.formatCode;
      }
      if (!formatCode) {
        return [];
      }
      const format = await _parseFormatConfig(formatCode);
      if (!format) {
        return [];
      }
      const formatName = format.name;
      template.formatName = formatName;
      template.formatCode = formatCode;
      template.titleFull = `${formatName}: ${titleFull}`;
      template.description = description.replaceAll("%formatName", formatName);

      switch (template.type) {
        case "info":
          if (pageConfig.template === "info") {
            template.releaseDate = pageConfig.releaseDate;
          }
          break;
        case "guide":
          if (pageConfig.template === "guide") {
            const guideData = _parseGuideConfig(format, pageConfig.guide);
            if (!guideData) {
              return [];
            }
            template.defaultFilters = guideData.defaultFilters;
            template.options = guideData.options;
            template.guide = guideData.guide;
          }
          break;
        case "guide-group":
          if (pageConfig.template === "guide-group") {
            const guideGroupData = _parseGuideGroupConfig(format, pageConfig.guideGroup);
            if (!guideGroupData) {
              return [];
            }
            template.defaultFilters = { ...structuredClone(DEFAULT_FILTERS), ...guideGroupData.defaultFilters };
            template.options = guideGroupData.options;
            template.guides = guideGroupData.guides;
          }
          break;
      }
      break;
  }

  let subTemplates: TTemplate[] = [];
  if (pageConfig.pages) {
    for (const currentPageConfig of pageConfig.pages) {
      subTemplates = subTemplates.concat(await _parsePageConfig(currentPageConfig, template as TTemplate));
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
    template.latestFormats = subTemplates.filter((page) => page.type === "info").slice(0, 3);
  }

  if (template.type === "directory") {
    template.directory = [];
  }

  return [template as TTemplate, ...subTemplates];
};

const _parseFormatConfig = async (formatCode: string) => {
  let format: IFormatConfig | undefined;
  try {
    format = (await import(`@/content/format/${formatCode}`)).default;
  } catch (e: unknown) {
    console.error(e);
  }
  if (!format) {
    return;
  }
  const sets = { [format.code]: format.name };
  let cards = format.cards.map((card) => ({
    ...card,
    code: format.code,
  }));

  if (format.includeFormats) {
    for (const subFormatCode of format?.includeFormats) {
      let subFormat: IFormatConfig | undefined;
      try {
        subFormat = (await import(`@/content/format/${subFormatCode}`)).default;
      } catch (e: unknown) {
        console.error(e);
      }
      if (!subFormat) {
        continue;
      }
      cards = cards.concat(
        subFormat.cards.map((card) => ({
          ...card,
          code: subFormat.code,
        })),
      );

      sets[subFormat.code] = subFormat.name;
    }
  }

  return {
    code: format.code,
    name: format.name,
    guides: { ...format.guides },
    guideGroups: { ...format.guideGroups },
    sets,
    cards,
  };
};

const _parseGuideConfig = (format: IFormatConfig, guideKey: string) => {
  const guideConfig = format.guides?.[guideKey];
  if (!guideConfig) {
    return;
  }

  return {
    defaultFilters: {
      ...structuredClone(DEFAULT_FILTERS),
      grouping: guideConfig.defaultGrouping ?? DEFAULT_FILTERS.grouping,
      ordering: guideConfig.defaultOrdering ?? DEFAULT_FILTERS.ordering,
    },
    options: {
      ...structuredClone(DEFAULT_FILTER_OPTIONS),
      sets: format.sets ?? {},
      categories: guideConfig.categories ?? {},
    },
    guide: {
      key: guideKey,
      code: format.code,
      name: guideConfig.name ?? "Guide Name",
      cards: _parseGuideCardConfig(format, guideKey),
    },
  };
};

const _parseGuideGroupConfig = (format: IFormatConfig, slug: string) => {
  const guideGroup = format.guideGroups?.[slug];
  const guides = format.guides;
  if (!guideGroup || !guides) {
    return;
  }

  return {
    defaultFilters: {
      ...structuredClone(DEFAULT_FILTERS),
      grouping: guideGroup.defaultGrouping ?? DEFAULT_FILTERS.grouping,
      ordering: guideGroup.defaultOrdering ?? DEFAULT_FILTERS.ordering,
    },
    options: {
      ...structuredClone(DEFAULT_FILTER_OPTIONS),
      sets: format.sets ?? {},
    },
    // TODO: Check why array check is necessary
    guides: Array.isArray(guideGroup.guides)
      ? guideGroup.guides.map((guideKey) => ({
          key: guideKey,
          code: format.code,
          description: guides[guideKey]?.description ?? PRESET[`guide-${guideKey}`]?.DESCRIPTION,
          icon: guides[guideKey]?.icon ?? PRESET[`guide-${guideKey}`]?.ICON,
          name: guides[guideKey]?.name ?? PRESET[`guide-${guideKey}`]?.NAME ?? "Guide",
          cards: _parseGuideCardConfig(format, guideKey),
          categories: guides[guideKey]?.categories,
        }))
      : [],
  };
};

const _parseGuideCardConfig = (format: IFormatConfig, guideKey: string) => {
  return format.cards.reduce<ICard[]>((current, cardConfig) => {
    if (cardConfig.guides.find((currGuide) => currGuide.guide === guideKey)) {
      current.push(_parseCardConfig(cardConfig, guideKey));
    }
    return current;
  }, []);
};

const _parseCardConfig = (cardConfig: ICardConfig, guideKey: string): ICard => {
  const cardGuideOverrides = cardConfig.guides.find((guide) => guide.guide === guideKey);

  const number = cardConfig.number.padStart(3, "0");
  const name = cardConfig.name;
  const cost = cardGuideOverrides?.cost ?? cardConfig.cost;
  const rarity = cardConfig.rarity;
  const code = cardConfig.code ?? "exa";
  let color: TColor = "c";
  const colorsRequired: string[] = [];
  let mv = 0;
  const isFlippable = cardConfig.isFlippable;
  const isFlipped = cardConfig.isFlipped;
  const isRotatable = cardConfig.isRotatable;
  const categories = cardGuideOverrides?.categories ?? [];

  cost.forEach((costItem) => {
    switch (costItem) {
      case "wu":
      case "uw":
      case "wb":
      case "bw":
      case "wr":
      case "rw":
      case "wg":
      case "gw":
      case "ub":
      case "bu":
      case "ur":
      case "ru":
      case "ug":
      case "gu":
      case "br":
      case "rb":
      case "bg":
      case "gb":
      case "rg":
      case "gr":
        if (!colorsRequired.includes(costItem)) {
          colorsRequired.push(costItem);
        }
        mv++;
        break;
      case "wp":
      case "up":
      case "bp":
      case "rp":
      case "gp":
        break;
      case "2w":
      case "2u":
      case "2b":
      case "2r":
      case "2g":
        mv++;
        break;
      case "w":
      case "u":
      case "b":
      case "r":
      case "g":
      case "c":
        if (!colorsRequired.includes(costItem)) {
          colorsRequired.push(costItem);
        }
        mv++;
        break;
      default:
        if (parseInt(costItem) > 0) {
          mv += parseInt(costItem);
        }
        break;
    }
  });

  if (!colorsRequired.length) {
    color = "c";
  } else if (colorsRequired.length === 1 && colorsRequired[0].length === 1) {
    color = colorsRequired[0] as TColor;
  } else {
    color = "m";
  }

  return {
    number,
    name,
    cost,
    rarity,
    color,
    code,
    colorsRequired,
    mv,
    isFlippable,
    isFlipped,
    isRotatable,
    categories,
  };
};
