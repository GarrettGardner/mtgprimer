"use client";

import type { ITemplateGuideGroup } from "@/models";

import { FilterBar, PageHeader } from "@/components/layout";
import { CardGroups, Icon } from "@/components/common";

import styles from "./guide-group.module.scss";

export const TemplateGuideGroup = (props: { template: ITemplateGuideGroup }) => {
  return (
    <>
      <PageHeader
        title={props.template.title}
        icon={props.template.icon}
        formatName={props.template.formatName}
        description={props.template.description}
      />
      {props.template.guides.map((guide, key) => (
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
          <CardGroups guide={guide} defaultFilters={props.template.defaultFilters} options={props.template.options} />
        </div>
      ))}
      <FilterBar
        code={props.template.formatCode}
        defaultFilters={props.template.defaultFilters}
        options={props.template.options}
      />
    </>
  );
};
