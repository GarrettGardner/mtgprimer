import type { IFilterOptions, IFilters, IGuide, TPageConfigTemplate } from "@/models";

export interface IPageTemplateMenuPage {
  path: string;
  icon: string;
  title: string;
  image: string;
}

export interface IPageTemplateMenu {
  formatCode: string;
  home: IPageTemplateMenuPage;
  pages: IPageTemplateMenuPage[];
}

export interface IPageTemplate {
  path: string;
  template: TPageConfigTemplate;
  backgroundImage: string;
  backgroundCaption: string;
  icon: string;
  title: string;
  titleFull: string;
  description: string;
}

export interface IPageTemplateHome extends IPageTemplate {
  template: "home";
  latestFormats: IPageTemplateInfo[];
}

export interface IPageTemplateNotFound extends IPageTemplate {
  template: "not-found";
}

export interface IPageTemplateDirectory extends IPageTemplate {
  template: "directory";
  directory: IPageTemplateInfo[];
}

export interface IPageTemplateInfo extends IPageTemplate {
  template: "info";
  formatCode: string;
  formatName: string;
  releaseDate: string;
  menu?: IPageTemplateMenu;
}

export interface IPageTemplateGuide extends IPageTemplate {
  template: "guide";
  formatCode: string;
  formatName: string;
  defaultFilters: IFilters;
  options: IFilterOptions;
  guide: IGuide;
  menu?: IPageTemplateMenu;
}

export interface IPageTemplateGuideGroup extends IPageTemplate {
  template: "guide-group";
  formatCode: string;
  formatName: string;
  defaultFilters: IFilters;
  options: IFilterOptions;
  guides: IGuide[];
  menu?: IPageTemplateMenu;
}

export type TPageTemplate =
  | IPageTemplateHome
  | IPageTemplateNotFound
  | IPageTemplateDirectory
  | IPageTemplateInfo
  | IPageTemplateGuide
  | IPageTemplateGuideGroup;

export const isPageTemplateInfo = (pageTemplate: TPageTemplate): pageTemplate is IPageTemplateInfo =>
  (pageTemplate as IPageTemplateInfo).template === "info";

export const isPageTemplateGuide = (pageTemplate: TPageTemplate): pageTemplate is IPageTemplateGuide =>
  (pageTemplate as IPageTemplateGuide).template === "guide";

export const isPageTemplateGuideGroup = (pageTemplate: TPageTemplate): pageTemplate is IPageTemplateGuideGroup =>
  (pageTemplate as IPageTemplateGuideGroup).template === "guide-group";
