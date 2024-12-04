import type { TRarity, TGrouping, TOrdering } from "@/models";

export interface IFormatConfig {
  code: string;
  name: string;
  includeFormats?: string[];
  guides?: Record<string, IGuideConfig>;
  guideGroups?: Record<string, IGuideGroupConfig>;
  cards: ICardConfig[];
  sets?: Record<string, string>;
}

export interface IGuideConfig {
  name?: string;
  description?: string;
  icon?: string;
  defaultGrouping?: TGrouping;
  defaultOrdering?: TOrdering;
  categories?: Record<string, string>;
}

export interface IGuideGroupConfig extends IGuideConfig {
  guides: string[];
}

export interface ICardConfig {
  number: string;
  name: string;
  code?: string;
  cost: string[];
  rarity: TRarity;
  isFlippable?: boolean;
  isFlipped?: boolean;
  isRotatable?: boolean;
  guides: {
    guide: string;
    cost?: string[];
    categories?: string[];
  }[];

  // TODO: guides: Record<string, {cost?: string[]; categories?: string[]}>;
}

export type TPageConfigTemplate = "home" | "not-found" | "directory" | "info" | "guide" | "guide-group";

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
  guideGroup: string;
}

export type TPageConfig = IPageConfigStatic | IPageConfigInfo | IPageConfigGuide | IPageConfigGuideGroup;
