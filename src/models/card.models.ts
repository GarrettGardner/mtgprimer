export type TRarity = "m" | "r" | "u" | "c";
export type TColor = "c" | "w" | "u" | "b" | "r" | "g" | "m";
export type TView = "card" | "text" | "stack";
export type TGrouping = "none" | "mv" | "color" | "rarity" | "category";
export type TOrdering = "number" | "mv" | "color" | "rarity" | "name";

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

export interface IGuide {
  name: string;
  description?: string;
  code: string;
  icon?: string;
  cards: ICard[];
  categories?: { [key: string]: string };
}

export interface IFilterOptions {
  groupings: { [key in TGrouping]: string };
  orderings: { [key in TOrdering]: string };
  views: { [key in TView]: string };
  colors: { [key in TColor]: string };
  rarities: { [key in TRarity]: string };
  sets: { [key: string]: string };
  categories: { [key: string]: string };
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
  icon?: string;
  header?: string;
  cards: ICard[];
}
