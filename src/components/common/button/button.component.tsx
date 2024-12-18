import { ReactNode } from "react";
import Link from "next/link";

import styles from "./button.module.scss";

export const Button = (props: {
  href: string;
  classes?: string;
  children: ReactNode;
}) => {
  return (
    <Link
      href={props.href}
      className={`${styles.button}${props.classes ? ` ${props.classes}` : ""}`}
    >
      {props.children}
    </Link>
  );
};
