"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { IPageTemplateGuideGroup, IPageTemplateGuide, IPageTemplateInfo } from "@/models";
import { Icon, Logo } from "@/components/common";
import { useCollapsedMenu } from "@/hooks";

import styles from "./menu.module.scss";

export const Menu = (props: { pageTemplate: IPageTemplateInfo | IPageTemplateGuide | IPageTemplateGuideGroup }) => {
  const pathname = usePathname();
  const { collapsed, toggleCollapse } = useCollapsedMenu();

  return (
    <aside className={styles.menu}>
      <button className={styles.collapser} title="Collapse Menu" onClick={() => toggleCollapse()}>
        <span className="screen-reader-text">Toggle Menu Collapse</span>
        {collapsed ? <Icon slug="fas fa-arrow-right" /> : <Icon slug="fas fa-arrow-left" />}
      </button>
      <div className={styles.logoWrap}>
        <Link href="/">
          <Logo class={collapsed ? "small" : ""} />
        </Link>
      </div>
      <div className={styles.content}>
        <div>
          <Link className={styles.format} href={props.pageTemplate.menu?.home?.path ?? "/"}>
            <Icon type="set" slug={props.pageTemplate.menu?.formatCode} slugSecondary="c" />
          </Link>
          <nav>
            <ul>
              <li>
                <Link
                  href={props.pageTemplate.menu?.home?.path ?? "/"}
                  className={pathname === props.pageTemplate.menu?.home?.path ? "current" : ""}
                  title={props.pageTemplate.menu?.home?.title}
                >
                  <span aria-hidden="true">
                    <Icon type="set" slug={props.pageTemplate.formatCode} slugSecondary="c" />
                  </span>
                  <p>Format Information</p>
                </Link>
              </li>
              {props.pageTemplate?.menu?.pages &&
                props.pageTemplate.menu.pages.map((menuPage, key) => {
                  return (
                    <li key={key}>
                      <Link
                        href={menuPage.path}
                        className={pathname === menuPage.path ? "current" : ""}
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
      <Link className={styles.directory} href="/directory" title="Format Directory">
        <span>
          <Icon slug="fas fa-compass" />
        </span>
        <p>Format Directory</p>
      </Link>
    </aside>
  );
};
