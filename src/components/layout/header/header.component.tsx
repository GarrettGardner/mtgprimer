"use client";

import Link from "next/link";

import { Icon, Logo } from "@/components/common";

import styles from "./header.module.scss";
import { useCollapsedMenu } from "@/hooks";

export const Header = () => {
  const { toggleCollapse } = useCollapsedMenu();

  return (
    <header className={styles.header}>
      <div className="logo">
        <Link href="/" title="MTG Primer">
          <Logo />
        </Link>
        <button className="toggle" onClick={() => toggleCollapse()} title="Toggle Menu">
          <span className="open">
            <Icon slug="fas fa-bars" />
            <span className="screen-reader-text">Open Menu</span>
          </span>
          <span className="close">
            <Icon slug="fas fa-times" />
            <span className="screen-reader-text">Close Menu</span>
          </span>
        </button>
      </div>
    </header>
  );
};
