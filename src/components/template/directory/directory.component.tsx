"use client";

import Link from "next/link";

import type { ITemplateDirectory } from "@/models";
import { CircleLink, Container, Logo } from "@/components/common";

import styles from "./directory.module.scss";

export const TemplateDirectory = (props: { template: ITemplateDirectory }) => {
  return (
    <section className={styles.directory}>
      <Container>
        <Link href="/">
          <div className="logo">
            <Logo />
          </div>
        </Link>
        <p>Format Directory</p>
        <ul>
          {props.template.directory.map((format, key) => (
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