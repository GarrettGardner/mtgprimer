import type { IFilterOptions, IFilters } from "@/models";

export const DEFAULT_FILTER_OPTIONS: IFilterOptions = {
  colors: {
    c: "Colorless",
    w: "White",
    u: "Blue",
    b: "Black",
    r: "Red",
    g: "Green",
    m: "Multicolored",
  },
  rarities: {
    c: "Common",
    u: "Uncommon",
    r: "Rare",
    m: "Mythic",
  },
  groupings: {
    none: "None",
    mv: "Mana Value",
    color: "Color",
    rarity: "Rarity",
    category: "Category",
  },
  orderings: {
    number: "Number",
    mv: "Mana Value",
    color: "Color",
    rarity: "Rarity",
    name: "Name",
  },
  views: {
    card: "Card",
    text: "Text",
    stack: "Stack",
  },
  sets: {},
  categories: {},
};

export const DEFAULT_FILTERS: IFilters = {
  grouping: "mv",
  ordering: "rarity",
  view: "card",
  colors: [],
  rarities: [],
  sets: [],
  categories: [],
};
