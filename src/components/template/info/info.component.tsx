import { Button } from "@/components/common";
import { PageHeader, TableOfContents } from "@/components/layout";
import type { ITemplateInfo } from "@/models";

import styles from "./info.module.scss";

export const TemplateInfo = (props: { template: ITemplateInfo }) => {
  return (
    <section className={styles.info}>
      <PageHeader
        title={props.template.title}
        formatName={props.template.formatName}
        description={props.template.description}
        icon={props.template.icon}
      />
      <div className="content">
        <h2>Table of Contents</h2>
        <ul>
          {props.template.guidePages?.map((page, key) => (
            <li key={key}>
              <Button href={page.path} icon={page.icon} size="md">
                {page.title}
              </Button>
              {page.type === "guide-group" && (
                <TableOfContents guides={page.guides} path={page.path} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
