"use client";

import { useLocalToggle } from "@/hooks";

import styles from "./mask.module.scss";

export const Mask = () => {
  const [isMenuMobileOpen, toggleIsMenuMobileOpen] = useLocalToggle(
    "MENU_MOBILE_OPEN",
    "menuMobileOpen",
  );

  return (
    <div className={styles.mask} onClick={() => toggleIsMenuMobileOpen()}></div>
  );
};
