export type TRarity = "m" | "r" | "u" | "c";
export type TColor = "c" | "w" | "u" | "b" | "r" | "g" | "m";
export type TView = "card" | "text" | "stack";
export type TGrouping = "none" | "mv" | "color" | "rarity" | "category";
export type TOrdering = "number" | "mv" | "color" | "rarity" | "name";
export type TLayout =
  | "normal"
  | "split"
  | "aftermath"
  | "flip"
  | "transform"
  | "modal_dfc"
  | "meld"
  | "adventure"
  | "battle";

export interface ICard {
  number: string;
  name: string;
  cost: string[];
  rarity: TRarity;
  code: string;
  color: string;
  colorsRequired: string[];
  mv: number;
  layout?: TLayout;
  isTransformed?: boolean;
  categories: string[];
}

export interface IGuide {
  key: string;
  code: string;
  formatName: string;
  name: string;
  description?: string;
  icon?: string;
  cards: ICard[];
}

export interface IFilter {
  options: IFilterOptions;
  defaultSelections: IFilterSelections;
}

export interface IFilterOptions {
  groupings: Record<TGrouping, string>;
  orderings: Record<TOrdering, string>;
  views: Record<TView, string>;
  colors: Record<TColor, string>;
  rarities: Record<TRarity, string>;
  sets: Record<string, string>;
  categories: Record<string, string>;
}

export interface IFilterSelections {
  grouping: TGrouping;
  ordering: TOrdering;
  view: TView;
  colors: TColor[];
  rarities: TRarity[];
  sets: string[];
  categories: string[];
}

export interface ICardGroup {
  key: string;
  icon?: string;
  header?: string;
  cards: ICard[];
}
