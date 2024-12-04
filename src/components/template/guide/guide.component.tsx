"use client";

import type { IPageTemplateGuide } from "@/models";
import { CardGroups } from "@/components/common";
import { FilterBar, PageHeader } from "@/components/layout";

export const TemplateGuide = (props: { pageTemplate: IPageTemplateGuide }) => {
  return (
    <>
      <PageHeader
        title={props.pageTemplate.title}
        icon={props.pageTemplate.icon}
        formatName={props.pageTemplate.formatName}
        description={props.pageTemplate.description}
      />
      <FilterBar
        code={props.pageTemplate.formatCode}
        defaultFilters={props.pageTemplate.defaultFilters}
        options={props.pageTemplate.options}
      />
      <CardGroups guide={props.pageTemplate.guide} defaultFilters={props.pageTemplate.defaultFilters} />
    </>
  );
};
