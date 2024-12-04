"use client";

import type { ITemplateGuide } from "@/models";
import { CardGroups } from "@/components/common";
import { FilterBar, PageHeader } from "@/components/layout";

export const TemplateGuide = (props: { template: ITemplateGuide }) => {
  return (
    <>
      <PageHeader
        title={props.template.title}
        icon={props.template.icon}
        formatName={props.template.formatName}
        description={props.template.description}
      />
      <CardGroups
        guide={props.template.guide}
        defaultFilters={props.template.defaultFilters}
        options={props.template.options}
      />
      <FilterBar
        code={props.template.formatCode}
        defaultFilters={props.template.defaultFilters}
        options={props.template.options}
      />
    </>
  );
};
