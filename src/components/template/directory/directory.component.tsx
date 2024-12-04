"use client";

import type { IPageTemplateDirectory } from "@/models";
import { CircleLink, Container, Logo } from "@/components/common";

import styles from "./directory.module.scss";

export const TemplateDirectory = (props: { pageTemplate: IPageTemplateDirectory }) => {
  return (
    <section className={styles.directory}>
      <Container>
        <div className="logo">
          <Logo />
        </div>
        <p>Format Directory</p>
        <ul>
          {props.pageTemplate.directory.map((format, key) => (
            <li key={key}>
              <CircleLink
                href={format.menu?.home.path ?? "/"}
                image={format.backgroundImage}
                iconType="set"
                iconSlug={format.formatCode}
                title={format.formatName}
                subtitle={format.releaseDate}
                additionalClasses="sm"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
