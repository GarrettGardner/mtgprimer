import { ReactNode } from "react";
import Link from "next/link";

import styles from "./button.module.scss";

export const Button = (props: { href: string; children: ReactNode }) => {
  return (
    <Link href={props.href} className={styles.button}>
      {props.children}
    </Link>
  );
};
