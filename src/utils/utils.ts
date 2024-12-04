import type {
  ICard,
  ICardConfig,
  IFormatConfig,
  TPageTemplate,
  TPageConfig,
  IPageTemplateMenu,
  TColor,
  IFilters,
  IFilterOptions,
  TGrouping,
  TRarity,
  TOrdering,
  TView,
  ICardGroup,
} from "@/models";
import { DEFAULT_FILTER_OPTIONS, DEFAULT_FILTERS } from "@/constants";
import { PAGE_CONFIG_PRESET, PAGE_HOME_CONFIG, PRESET } from "@/content/global";

let PAGE_LIST: TPageTemplate[] = [];

export const generatePages = async (
  pageConfig: TPageConfig,
  parentPageTemplate?: TPageTemplate | undefined,
): Promise<TPageTemplate[]> => {
  const preset = PAGE_CONFIG_PRESET.find((pageConfigPreset) => pageConfigPreset.slug === pageConfig.preset);

  // Default page values
  let path = parentPageTemplate?.path ?? "/";
  if (pageConfig.slug) {
    path += path.slice(-1) === "/" ? pageConfig.slug : `/${pageConfig.slug}`;
  }
  const template = pageConfig.template;
  const backgroundImage =
    (pageConfig.backgroundImage &&
      `https://s3-us-west-2.amazonaws.com/mtgprimer/splash/${pageConfig.backgroundImage}.jpg`) ??
    parentPageTemplate?.backgroundImage ??
    "default image";
  const backgroundCaption =
    (pageConfig.backgroundCaption && `Illustrated by ${pageConfig.backgroundCaption}`) ??
    parentPageTemplate?.backgroundCaption ??
    "Default Caption";
  const title = pageConfig.title ?? preset?.title ?? "";
  const description = pageConfig.description ?? preset?.description ?? "Page was not found.";
  const icon = pageConfig.icon ?? preset?.icon ?? parentPageTemplate?.icon ?? "";

  const titleFull = `${title ? `${title} | ` : ""}MTG Primer${
    title ? "" : ` | Strategy Guides for Limited Magic: The Gathering`
  }`;

  const pageTemplate: Partial<TPageTemplate> = {
    path,
    template,
    backgroundImage,
    backgroundCaption,
    icon,
    title,
    titleFull,
    description,
  };

  switch (pageTemplate.template) {
    case "info":
    case "guide":
    case "guide-group":
      let formatCode: string | undefined;
      if (pageConfig.template === "info") {
        formatCode = pageConfig.formatCode;
      } else if (parentPageTemplate?.template === "info") {
        formatCode = parentPageTemplate.formatCode;
      }
      if (!formatCode) {
        return [];
      }
      const format = await loadFormat(formatCode);
      if (!format) {
        return [];
      }
      const formatName = format.name;
      pageTemplate.formatName = formatName;
      pageTemplate.formatCode = formatCode;
      pageTemplate.titleFull = `${formatName}: ${titleFull}`;
      pageTemplate.description = description.replaceAll("%formatName", formatName);

      switch (pageTemplate.template) {
        case "info":
          if (pageConfig.template === "info") {
            pageTemplate.releaseDate = pageConfig.releaseDate;
          }
          break;
        case "guide":
          if (pageConfig.template === "guide") {
            const guideData = getGuide(format, pageConfig.guide);
            if (!guideData) {
              return [];
            }
            pageTemplate.defaultFilters = guideData.defaultFilters;
            pageTemplate.options = guideData.options;
            pageTemplate.guide = guideData.guide;
          }
          break;
        case "guide-group":
          if (pageConfig.template === "guide-group") {
            const guideGroupData = getGuideGroup(format, pageConfig.guideGroup);
            if (!guideGroupData) {
              return [];
            }
            pageTemplate.defaultFilters = guideGroupData.defaultFilters;
            pageTemplate.options = guideGroupData.options;
            pageTemplate.guides = guideGroupData.guides;
          }
          break;
      }
      break;
  }

  let subPageTemplates: TPageTemplate[] = [];
  if (pageConfig.pages) {
    for (const currentPageConfig of pageConfig.pages) {
      subPageTemplates = subPageTemplates.concat(await generatePages(currentPageConfig, pageTemplate as TPageTemplate));
    }
  }

  // Load menu details
  let menu: IPageTemplateMenu | undefined;
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
        subPageTemplates.map((page) => ({
          path: page.path,
          icon: page.icon,
          title: page.title,
          image: page.backgroundImage,
        })) ?? [],
    };
    if (pageTemplate.template === "info") {
      pageTemplate.menu = menu;
    }
  }

  if (menu) {
    subPageTemplates = subPageTemplates.map((subPageTemplate) => ({
      ...subPageTemplate,
      menu,
    }));
  }

  if (pageTemplate.template === "home") {
    pageTemplate.latestFormats = subPageTemplates.filter((page) => page.template === "info").slice(0, 3);
  }

  if (pageTemplate.template === "directory") {
    pageTemplate.directory = [];
  }

  return [pageTemplate as TPageTemplate, ...subPageTemplates];
};

export const parseCard = (cardConfig: ICardConfig, guideKey: string): ICard => {
  const guide = cardConfig.guides.find((guide) => guide.guide === guideKey);

  const number = cardConfig.number.padStart(3, "0");
  const name = cardConfig.name;
  const cost = guide?.cost ?? cardConfig.cost;
  const rarity = cardConfig.rarity;
  const code = cardConfig.code ?? "exa";
  let color: TColor = "c";
  const colorsRequired: string[] = [];
  let mv = 0;
  const isFlippable = cardConfig.isFlippable;
  const isFlipped = cardConfig.isFlipped;
  const isRotatable = cardConfig.isRotatable;
  const categories = guide?.categories ?? [];

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
        costItem.split("").forEach((costItemColor) => {
          if (!colorsRequired.includes(costItemColor)) {
            colorsRequired.push(costItemColor);
          }
        });
        mv++;
        break;
      case "wp":
      case "up":
      case "bp":
      case "rp":
      case "gp":
        if (!colorsRequired.includes(costItem.charAt(0))) {
          colorsRequired.push(costItem.charAt(0));
        }
        mv++;
        break;
      case "2w":
      case "2u":
      case "2b":
      case "2r":
      case "2g":
        if (!colorsRequired.includes(costItem.charAt(1))) {
          colorsRequired.push(costItem.charAt(1));
        }
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

export const loadFormat = async (formatCode: string) => {
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

export const getGuide = (format: IFormatConfig, guideKey: string) => {
  const guideConfig = format.guides?.[guideKey];
  if (!guideConfig) {
    return;
  }

  return {
    defaultFilters: getGuideFilters({
      grouping: guideConfig.defaultGrouping,
      ordering: guideConfig.defaultOrdering,
    }),
    options: getGuideOptions({
      sets: format.sets,
      categories: guideConfig.categories,
    }),
    guide: {
      code: format.code,
      name: guideConfig.name,
      cards: getGuideCards(format, guideKey),
    },
  };
};

export const getGuideFilters = (filters?: Partial<IFilters>) => ({
  ...DEFAULT_FILTERS,
  ...filters,
});

export const getGuideOptions = (options?: Partial<IFilterOptions>) => ({
  colors: { ...DEFAULT_FILTER_OPTIONS.colors },
  rarities: { ...DEFAULT_FILTER_OPTIONS.rarities },
  groupings: { ...DEFAULT_FILTER_OPTIONS.groupings },
  orderings: { ...DEFAULT_FILTER_OPTIONS.orderings },
  views: { ...DEFAULT_FILTER_OPTIONS.views },
  sets: options?.sets ?? {},
  categories: options?.categories ?? {},
});

export const getGuideCards = (format: IFormatConfig, guideKey: string) => {
  return format.cards.reduce<ICard[]>((current, cardConfig) => {
    if (cardConfig.guides.find((currGuide) => currGuide.guide === guideKey)) {
      current.push(parseCard(cardConfig, guideKey));
    }
    return current;
  }, []);
};

export const getGuideGroup = (format: IFormatConfig, slug: string) => {
  const guideGroup = format.guideGroups?.[slug];
  if (!guideGroup) {
    return;
  }

  return {
    defaultFilters: {
      ...DEFAULT_FILTERS,
      grouping: guideGroup.defaultGrouping,
      ordering: guideGroup.defaultOrdering,
    },
    options: getGuideOptions({ sets: format.sets }),
    guides: Object.keys(guideGroup.guides).map((guideKey) => ({
      code: format.code,
      description: guideGroup.guides[guideKey].description ?? PRESET.DESCRIPTION[`guide-${guideKey}`],
      icon: guideGroup.guides[guideKey].icon ?? PRESET.ICON[`guide-${guideKey}`],
      name: guideGroup.guides[guideKey].name,
      cards: getGuideCards(format, guideKey),
      categories: guideGroup.guides[guideKey].categories,
    })),
  };
};

export const loadPages = async () => {
  if (PAGE_LIST.length < 1) {
    PAGE_LIST = await generatePages(PAGE_HOME_CONFIG);
  }
};

export const getPage = async (pathParts: string[]) => {
  await loadPages();
  const path = `/${pathParts.join("/")}`;
  const page = PAGE_LIST.find((page) => page.path === path);
  if (page?.template === "directory") {
    page.directory = PAGE_LIST.filter((page) => page.template === "info");
  }

  return page;
};

export const getPaths = async () => {
  await loadPages();
  const list = PAGE_LIST.filter((page) => page.path !== "/").map((page) => {
    const path = page.path.split("/");
    path.shift();
    return {
      path,
    };
  });
  return list;
};

export const applyFilters = (cards: ICard[], filters: IFilters) => {
  cards = cards.filter((card) => {
    if (
      filters.colors.length &&
      !card.colorsRequired.reduce(
        (acc, colorRequired) =>
          acc &&
          colorRequired
            .split("")
            .reduce(
              (accParts, colorRequiredPart) => accParts && filters.colors.includes(colorRequiredPart as TColor),
              true,
            ),
        true,
      )
    ) {
      return false;
    }

    if (filters.rarities.length && !filters.rarities.includes(card.rarity)) {
      return false;
    }

    if (filters.sets.length && !filters.sets.includes(card.code)) {
      return false;
    }

    if (
      filters.categories.length &&
      !card.categories.reduce((acc, category) => acc && filters.categories.includes(category), true)
    ) {
      return false;
    }

    return true;
  });

  const orderOrdering = ["name", "mv", "number", "color", "rarity"].filter((ordering) => ordering !== filters.ordering);
  orderOrdering.push(filters.ordering);

  const orderColor = ["c", "w", "u", "b", "r", "g", "m"];
  const orderRarity = ["c", "u", "r", "m"];
  orderOrdering.forEach((ordering) => {
    cards.sort((a, b) => {
      switch (ordering) {
        case "mv":
          return a.mv - b.mv;
        case "color":
          return orderColor.indexOf(a.color) - orderColor.indexOf(b.color);
        case "rarity":
          return orderRarity.indexOf(a.rarity) - orderRarity.indexOf(b.rarity);
        case "number":
          return parseInt(a.number) - parseInt(b.number);
        case "name":
          return a.name.localeCompare(b.name);
      }
      return 0;
    });
  });

  let groups: ICardGroup[] = [];
  switch (filters.grouping) {
    case "mv":
      const mvGroups = Object.groupBy(cards, (card) => String(card.mv));
      Object.keys(mvGroups).map((key) => {
        if (mvGroups[key]) {
          groups.push({
            icon: "mv",
            header: key,
            cards: mvGroups[key],
          });
        }
      });
      break;
    case "color":
      const colorGroups = Object.groupBy(cards, (card) => String(card.color));
      Object.keys(colorGroups).map((key) => {
        if (colorGroups[key]) {
          groups.push({
            icon: "color",
            header: key,
            cards: colorGroups[key],
          });
        }
      });
      groups = groups.sort((a, b) => {
        if (!a.header || !b.header) {
          return 0;
        }
        return orderColor.indexOf(a.header) - orderColor.indexOf(b.header);
      });
      break;
    case "rarity":
      const rarityGroups = Object.groupBy(cards, (card) => String(card.rarity));
      Object.keys(rarityGroups).map((key) => {
        if (rarityGroups[key]) {
          groups.push({
            icon: "rarity",
            header: key,
            cards: rarityGroups[key],
          });
        }
      });
      groups = groups.sort((a, b) => {
        if (!a.header || !b.header) {
          return 0;
        }
        return orderRarity.indexOf(a.header) - orderRarity.indexOf(b.header);
      });
      break;
    case "category":
      const categoryGroups = Object.groupBy(cards, (card) => String(card.categories));
      Object.keys(categoryGroups).map((key) => {
        if (categoryGroups[key]) {
          groups.push({
            icon: "category",
            header: key,
            cards: categoryGroups[key],
          });
        }
      });
      break;
  }

  if (!groups.length) {
    groups = [{ cards }];
  }
  // console.log(groups);

  return groups;
};

export const encodeHash = (defaultFilters: IFilters, filters: IFilters) => {
  let hash = "";

  Object.keys(filters).map((slug) => {
    const key = slug as keyof IFilters;
    if (filters[key] && defaultFilters[key]) {
      if (typeof filters[key] === "string" && filters[key] !== defaultFilters[key]) {
        hash += `${hash ? "&" : ""}${key}:${filters[key]}`;
      } else if (Array.isArray(filters[key]) && filters[key].length) {
        hash += `${hash ? "&" : ""}${key}:${filters[key].join("+")}`;
      }
    }
  });

  return hash ? encodeURIComponent(`filters:${hash}`) : "";
};

export const decodeHash = (defaultFilters: IFilters, hash: string) => {
  const filters = {
    ...defaultFilters,
  };
  if (hash) {
    hash = decodeURIComponent(hash);
    hash = hash.slice(9);
    hash.split("&").forEach((item) => {
      const [key, value] = item.split(":");
      if (key && value) {
        switch (key) {
          case "grouping":
            if (value in DEFAULT_FILTER_OPTIONS.groupings) {
              // TODO: Remove as
              filters[key] = value as TGrouping;
            }
            break;
          case "ordering":
            if (value in DEFAULT_FILTER_OPTIONS.orderings) {
              // TODO: Remove as
              filters[key] = value as TOrdering;
            }
            break;
          case "view":
            if (value in DEFAULT_FILTER_OPTIONS.views) {
              // TODO: Remove as
              filters[key] = value as TView;
            }
            break;
          case "colors":
            // TODO: Remove as
            filters[key] = value.split("+").filter((item) => item in DEFAULT_FILTER_OPTIONS.colors) as TColor[];
            break;
          case "rarities":
            // TODO: Remove as
            filters[key] = value.split("+").filter((item) => item in DEFAULT_FILTER_OPTIONS.rarities) as TRarity[];
            break;
          case "sets":
          case "categories":
            // TODO: Remove as
            filters[key] = value.split("+");
            break;
        }
      }
    });
  }
  return filters;
};
