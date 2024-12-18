import type { TRarity, TGrouping, TOrdering, TLayout } from "@/models";

export interface IGuideConfig {
  code?: string;
  formatName?: string;
  includeFormats?: (string | { code: string; min: number; max: number })[];
  name?: string;
  description?: string;
  icon?: string;
  sets?: Record<string, string>;
  defaultGrouping?: TGrouping;
  defaultOrdering?: TOrdering;
  categories?: Record<string, string>;
  cards: Record<string, Partial<ICardConfig>>;
}

export interface ICardConfig {
  number: string;
  code?: string;
  cost: string[];
  rarity: TRarity;
  layout: TLayout;
  isTransformed?: boolean;
  categories?: string[];
}

export type TPageConfigTemplate =
  | "home"
  | "not-found"
  | "directory"
  | "info"
  | "guide"
  | "guide-group";

export interface IPageConfig {
  slug: string;
  preset?: string;
  backgroundImage?: string;
  backgroundCaption?: string;
  isMenuHome?: boolean;
  icon?: string;
  title?: string;
  description?: string;
  pages?: TPageConfig[];
}

export interface IPageConfigStatic extends IPageConfig {
  template: "home" | "not-found" | "directory";
}

export interface IPageConfigInfo extends IPageConfig {
  template: "info";
  formatCode: string;
  releaseDate: string;
}

export interface IPageConfigGuide extends IPageConfig {
  template: "guide";
  guide: string;
}

export interface IPageConfigGuideGroup extends IPageConfig {
  template: "guide-group";
  defaultGrouping?: TGrouping;
  defaultOrdering?: TOrdering;
  guides: string[];
}

export type TPageConfig =
  | IPageConfigStatic
  | IPageConfigInfo
  | IPageConfigGuide
  | IPageConfigGuideGroup;
