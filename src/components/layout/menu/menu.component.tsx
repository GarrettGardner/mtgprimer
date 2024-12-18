"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type {
  ITemplateGuideGroup,
  ITemplateGuide,
  ITemplateInfo,
} from "@/models";
import { Icon, Logo } from "@/components/common";
import { useLocalToggle } from "@/hooks";

import styles from "./menu.module.scss";

export const Menu = (props: {
  template: ITemplateInfo | ITemplateGuide | ITemplateGuideGroup;
}) => {
  const pathname = usePathname();
  const [isMenuCollapsed, toggleIsMenuCollapsed] = useLocalToggle(
    "MENU_COLLAPSED",
    "menuCollapsed",
  );

  return (
    <aside className={styles.menu}>
      <button
        className={styles.collapser}
        title="Collapse Menu"
        onClick={() => toggleIsMenuCollapsed()}
      >
        <span className="screen-reader-text">Toggle Menu Collapse</span>
        {isMenuCollapsed ? (
          <Icon slug="fas fa-arrow-right" />
        ) : (
          <Icon slug="fas fa-arrow-left" />
        )}
      </button>
      <div className={styles.logoWrap}>
        <Link href="/">
          <Logo class={isMenuCollapsed ? "small" : ""} />
        </Link>
      </div>
      <div className={styles.content}>
        <div>
          <Link
            className={styles.format}
            href={props.template.menu?.home?.path ?? "/"}
          >
            <Icon
              type="set"
              slug={props.template.menu?.formatCode}
              slugSecondary="c"
            />
          </Link>
          <nav>
            <ul>
              <li>
                <Link
                  href={props.template.menu?.home?.path ?? "/"}
                  className={
                    pathname === `${props.template.menu?.home?.path}/`
                      ? "current"
                      : ""
                  }
                  title={props.template.menu?.home?.title}
                >
                  <span aria-hidden="true">
                    <Icon
                      type="set"
                      slug={props.template.formatCode}
                      slugSecondary="c"
                    />
                  </span>
                  <p>Format Information</p>
                </Link>
              </li>
              {props.template?.menu?.pages &&
                props.template.menu.pages.map((menuPage, key) => {
                  return (
                    <li key={key}>
                      <Link
                        href={menuPage.path}
                        className={
                          pathname === `${menuPage.path}/` ? "current" : ""
                        }
                        title={menuPage?.title}
                      >
                        <span aria-hidden="true">
                          <Icon slug={menuPage?.icon} />
                        </span>
                        <p>{menuPage?.title}</p>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
      </div>
      <Link
        className={styles.directory}
        href="/directory"
        title="Format Directory"
      >
        <span>
          <Icon slug="fas fa-compass" />
        </span>
        <p>Format Directory</p>
      </Link>
    </aside>
  );
};
