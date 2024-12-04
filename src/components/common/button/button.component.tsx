import { MouseEvent, ReactNode } from "react";
import Link from "next/link";

import { Icon } from "@/components/common";

import styles from "./button.module.scss";

export const Button = (props: {
  href: string;
  size?: "sm" | "md" | "lg";
  icon?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  children: ReactNode;
}) => {
  return (
    <Link
      href={props.href}
      className={`${styles.button}${props.size ? ` size-${props.size}` : ""}`}
      onClick={props.onClick}
    >
      {props.icon && (
        <span className="icon">
          <Icon slug={props.icon} />
        </span>
      )}
      <span className="text">{props.children}</span>
    </Link>
  );
};
