"use client";

import { MouseEvent } from "react";
import type { IGuide } from "@/models";
import { Icon } from "@/components/common";

import styles from "./table-of-contents.module.scss";

export const TableOfContents = (props: { guides: IGuide[] }) => {
  const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const anchor = e.currentTarget.getAttribute("href")?.split("#").join("");
    if (anchor) document.getElementById(anchor)?.scrollIntoView();
  };

  return (
    <section className={styles.tableOfContents}>
      <h3>Table of Contents</h3>
      <div className="links">
        {props.guides.map((guide, key) => (
          <a
            className="link"
            href={`#${guide.key}`}
            key={key}
            onClick={(e) => handleAnchorClick(e)}
          >
            <div className="icon">
              <Icon slug={guide.icon ?? "fas fa-gift"} />
            </div>
            <p>{guide.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};
