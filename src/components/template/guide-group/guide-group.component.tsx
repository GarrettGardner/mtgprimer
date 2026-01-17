"use client";

import type { ITemplateGuideGroup } from "@/models";

import {
  FilterBar,
  JumpSearch,
  PageHeader,
  TableOfContents,
} from "@/components/layout";
import { CardGroups, Icon } from "@/components/common";

import styles from "./guide-group.module.scss";
import { FiltersProvider } from "@/components/provider/FiltersProvider";

export const TemplateGuideGroup = (props: {
  template: ITemplateGuideGroup;
}) => {
  return (
    <>
      <PageHeader
        title={props.template.title}
        icon={props.template.icon}
        formatName={props.template.formatName}
        description={props.template.description}
      />
      <JumpSearch guides={props.template.guides} />
      <section className={styles.guideGroupTop}>
        <h3>Table of Contents</h3>
        <TableOfContents guides={props.template.guides} />
      </section>
      <FiltersProvider filter={props.template.filter}>
        {props.template.guides.map((guide) => (
          <div className={styles.guideGroup} key={guide.key}>
            <a id={guide.key} className="anchor">
              {guide.name}
            </a>
            <h3>
              <span className="icon">
                <Icon slug={guide.icon ?? "fas fa-gift"} />
              </span>
              <span className="text">
                <span className="name">{guide.name}</span>
                {guide.description && (
                  <span className="description">{guide.description}</span>
                )}
              </span>
            </h3>
            <CardGroups guide={guide} />
          </div>
        ))}
        <FilterBar hideCategories={true} />
      </FiltersProvider>
    </>
  );
};
