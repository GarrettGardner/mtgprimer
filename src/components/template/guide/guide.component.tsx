"use client";

import type { ITemplateGuide } from "@/models";
import { CardGroups } from "@/components/common";
import { FilterBar, PageHeader } from "@/components/layout";
import { FiltersProvider } from "@/components/provider/FiltersProvider";

export const TemplateGuide = (props: { template: ITemplateGuide }) => {
  return (
    <>
      <PageHeader
        title={props.template.title}
        icon={props.template.icon}
        formatName={props.template.formatName}
        description={props.template.description}
      />
      <FiltersProvider filter={props.template.filter}>
        <CardGroups guide={props.template.guide} />
        <FilterBar />
      </FiltersProvider>
    </>
  );
};
