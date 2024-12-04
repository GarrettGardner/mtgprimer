"use client";

import { MouseEvent } from "react";
import type { IGuide } from "@/models";
import { Button, Icon } from "@/components/common";

import styles from "./table-of-contents.module.scss";

export const TableOfContents = (props: { guides: IGuide[]; path?: string }) => {
  const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!props.path) {
      e.preventDefault();
      const anchor = e.currentTarget.getAttribute("href")?.split("#").join("");
      if (anchor) document.getElementById(anchor)?.scrollIntoView();
    }
  };

  return (
    <ul className={styles.tableOfContents}>
      {props.guides.map((guide) => (
        <li key={guide.key}>
          <Button
            href={`${props.path ?? ""}#${guide.key}`}
            size="sm"
            icon={guide.icon ?? "fas fa-gift"}
            onClick={handleAnchorClick}
          >
            {guide.name}
          </Button>
        </li>
      ))}
    </ul>
  );
};
