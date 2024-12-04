import type { TRarity, TGrouping, TOrdering } from "@/models";

export interface IFormatConfig {
  code: string;
  name: string;
  includeFormats?: string[];
  guides?: {
    [key: string]: IGuideConfig;
  };
  guideGroups?: {
    [key: string]: IGuideGroupConfig;
  };
  cards: ICardConfig[];
  sets?: {
    [key: string]: string;
  };
}

export interface IGuideConfig {
  name: string;
  defaultGrouping: TGrouping;
  defaultOrdering: TOrdering;
  categories: {
    [key: string]: string;
  };
}

export interface IGuideGroupConfig extends IGuideConfig {
  guides: {
    [key: string]: {
      name: string;
      description?: string;
      icon?: string;
      categories?: {
        [key: string]: string;
      };
    };
  };
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
    categories?: string[];
    cost?: string[];
  }[];
}

export type IPageConfigPresetOptions =
  | "info"
  | "guide-group-effects"
  | "guide-instants"
  | "guide-interaction"
  | "guide-gallery";

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
export interface IPageConfigPreset {
  slug: string;
  icon: string;
  title: string;
  description: string;
}

export type TPageConfig = IPageConfigStatic | IPageConfigInfo | IPageConfigGuide | IPageConfigGuideGroup;

export const isPageConfigInfo = (pageConfig: TPageConfig): pageConfig is IPageConfigInfo =>
  (pageConfig as IPageConfigInfo).template === "info";

export const isPageConfigGuide = (pageConfig: TPageConfig): pageConfig is IPageConfigGuide =>
  (pageConfig as IPageConfigGuide).template === "guide";

export const isPageConfigGuideGroup = (pageConfig: TPageConfig): pageConfig is IPageConfigGuideGroup =>
  (pageConfig as IPageConfigGuideGroup).template === "guide-group";
