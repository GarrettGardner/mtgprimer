import { Button, CircleLink } from "@/components/common";
import { PageHeader } from "@/components/layout";
import type { IPageTemplateInfo } from "@/models";

import styles from "./info.module.scss";

export const TemplateInfo = (props: { pageTemplate: IPageTemplateInfo }) => {
  return (
    <section className={styles.info}>
      <PageHeader
        title={props.pageTemplate.title}
        formatName={props.pageTemplate.formatName}
        description={props.pageTemplate.description}
        icon={props.pageTemplate.icon}
      />
      <ul>
        {props.pageTemplate?.menu?.pages.map((page, key) => (
          <li key={key}>
            <CircleLink href={page.path} title={page.title} iconSlug={page.icon} image={page.image} />
          </li>
        ))}
      </ul>
    </section>
  );
};
