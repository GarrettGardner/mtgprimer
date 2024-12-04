export type TRarity = "m" | "r" | "u" | "c";
export type TColor = "c" | "w" | "u" | "b" | "r" | "g" | "m";
export type TView = "card" | "text" | "stack";
export type TGrouping = "none" | "mv" | "color" | "rarity" | "category";
export type TOrdering = "number" | "mv" | "color" | "rarity" | "name";

export interface IGuide {
  key: string;
  name: string;
  description?: string;
  code: string;
  icon?: string;
  cards: ICard[];
  categories?: Record<string, string>;
  // options instead?
}

export interface ICard {
  number: string;
  name: string;
  cost: string[];
  rarity: TRarity;
  code: string;
  color: string;
  colorsRequired: string[];
  mv: number;
  isFlippable?: boolean;
  isFlipped?: boolean;
  isRotatable?: boolean;
  categories: string[];
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

export interface IFilters {
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
