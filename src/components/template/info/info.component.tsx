import { CircleLink } from "@/components/common";
import { PageHeader } from "@/components/layout";
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
      <ul>
        {props.template?.menu?.pages.map((page, key) => (
          <li key={key}>
            <CircleLink href={page.path} title={page.title} iconSlug={page.icon} image={page.image} />
          </li>
        ))}
      </ul>
    </section>
  );
};
