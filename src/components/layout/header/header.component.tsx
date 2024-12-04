"use client";

import Link from "next/link";

import { Icon, Logo } from "@/components/common";
import { useLocalToggle } from "@/hooks";

import styles from "./header.module.scss";

export const Header = () => {
  const [isMenuMobileOpen, toggleIsMenuMobileOpen] = useLocalToggle(
    "MENU_MOBILE_OPEN",
    "menuMobileOpen",
  );

  return (
    <header className={styles.header}>
      <div className="logo">
        <Link href="/" title="MTG Primer">
          <Logo />
        </Link>
        <button
          className="toggle"
          onClick={() => toggleIsMenuMobileOpen()}
          title="Toggle Menu"
        >
          {isMenuMobileOpen ? (
            <span className="close">
              <Icon slug="fas fa-times" />
              <span className="screen-reader-text">Close Menu</span>
            </span>
          ) : (
            <span className="open">
              <Icon slug="fas fa-bars" />
              <span className="screen-reader-text">Open Menu</span>
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
