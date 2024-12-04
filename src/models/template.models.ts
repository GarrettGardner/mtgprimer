import type { IFilterOptions, IFilters, IGuide, TPageConfigTemplate } from "@/models";

export interface ITemplateMenuPage {
  path: string;
  icon: string;
  title: string;
  image: string;
}

export interface ITemplateMenu {
  formatCode: string;
  home: ITemplateMenuPage;
  pages: ITemplateMenuPage[];
}

export interface ITemplate {
  path: string;
  type: TPageConfigTemplate;
  backgroundImage: string;
  backgroundCaption: string;
  icon: string;
  title: string;
  titleFull: string;
  description: string;
}

export interface ITemplateHome extends ITemplate {
  type: "home";
  latestFormats: ITemplateInfo[];
}

export interface ITemplateNotFound extends ITemplate {
  type: "not-found";
}

export interface ITemplateDirectory extends ITemplate {
  type: "directory";
  directory: ITemplateInfo[];
}

export interface ITemplateInfo extends ITemplate {
  type: "info";
  formatCode: string;
  formatName: string;
  releaseDate: string;
  menu?: ITemplateMenu;
}

export interface ITemplateGuide extends ITemplate {
  type: "guide";
  formatCode: string;
  formatName: string;
  defaultFilters: IFilters;
  options: IFilterOptions;
  guide: IGuide;
  menu?: ITemplateMenu;
}

export interface ITemplateGuideGroup extends ITemplate {
  type: "guide-group";
  formatCode: string;
  formatName: string;
  defaultFilters: IFilters;
  options: IFilterOptions;
  guides: IGuide[];
  menu?: ITemplateMenu;
}

export type TTemplate =
  | ITemplateHome
  | ITemplateNotFound
  | ITemplateDirectory
  | ITemplateInfo
  | ITemplateGuide
  | ITemplateGuideGroup;
