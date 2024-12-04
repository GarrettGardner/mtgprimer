import { ReactNode } from "react";

import styles from "./container.module.scss";

export const Container = (props: { children?: ReactNode }) => {
  return <div className={styles.container}>{props.children}</div>;
};
