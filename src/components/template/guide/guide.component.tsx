"use client";

import type { ITemplateGuide } from "@/models";
import { CardGroups } from "@/components/common";
import { FilterBar, PageHeader } from "@/components/layout";

export const TemplateGuide = (props: { template: ITemplateGuide }) => {
  return (
    <>
      {/*<pre>{JSON.stringify(props.template, null, 2)}</pre>*/}
      <PageHeader
        title={props.template.title}
        icon={props.template.icon}
        formatName={props.template.formatName}
        description={props.template.description}
      />
      <CardGroups guide={props.template.guide} filter={props.template.filter} />
      <FilterBar filter={props.template.filter} />
    </>
  );
};
