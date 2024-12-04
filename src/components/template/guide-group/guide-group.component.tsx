"use client";

import type { IPageTemplateGuideGroup } from "@/models";

import { FilterBar, PageHeader } from "@/components/layout";
import { CardGroups, Icon } from "@/components/common";

import styles from "./guide-group.module.scss";

export const TemplateGuideGroup = (props: { pageTemplate: IPageTemplateGuideGroup }) => {
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
      {props.pageTemplate.guides.map((guide, key) => (
        <div className={styles.guideGroup} key={key}>
          <h3>
            <span className="icon">
              <Icon slug={guide.icon ?? "fas fa-gift"} />
            </span>
            <span className="text">
              <span className="name">{guide.name}</span>
              {guide.description && <span className="description">{guide.description}</span>}
            </span>
          </h3>
          <CardGroups guide={guide} defaultFilters={props.pageTemplate.defaultFilters} />
        </div>
      ))}
    </>
  );
};
