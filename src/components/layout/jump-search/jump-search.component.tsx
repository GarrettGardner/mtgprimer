"use client";

import { KeyboardEvent, MouseEvent, useEffect, useState } from "react";

import type { IGuide } from "@/models";
import { Icon } from "@/components/common";

import styles from "./jump-search.module.scss";

export const JumpSearch = (props: { guides: IGuide[] }) => {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState<IGuide[]>([]);

  useEffect(() => {
    setResults(
      searchText.length > 1
        ? props.guides.filter(
            (guide) =>
              guide.name.toLowerCase().search(searchText.toLowerCase()) > -1 ||
              !!guide.tags?.find(
                (tag) =>
                  tag.toLowerCase().search(searchText.toLowerCase()) > -1,
              ),
          )
        : [],
    );
  }, [searchText]);

  const resultText = (guide: IGuide, needle: string) => {
    needle = needle.toLowerCase();
    let input = guide.name;
    let output = <>{input}</>;
    const start = input.toLowerCase().indexOf(needle);
    if (start > -1) {
      const part = input.slice(start, start + needle.length);
      output = (
        <>
          {input
            .split(part)
            .flatMap((item) => [item, <strong>{part}</strong>])
            .slice(0, -1)}
        </>
      );
    } else {
      const tag = guide.tags?.find(
        (tag) => tag.toLowerCase().search(needle) > -1,
      );
      console.log(tag);
      if (tag) {
        const start = tag.toLowerCase().indexOf(needle);
        if (start > -1) {
          const part = tag.slice(start, start + needle.length);
          output = (
            <>
              {input}
              <span>
                (
                {tag
                  .split(part)
                  .flatMap((item) => [item, <strong>{part}</strong>])
                  .slice(0, -1)}
                )
              </span>
            </>
          );
        }
      }
    }
    return output;
  };

  const handleEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !!results?.[0]?.key)
      scrollToAnchor(results[0].key);
  };

  const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToAnchor(e.currentTarget.getAttribute("href")?.split("#").join(""));
  };

  const scrollToAnchor = (anchor?: string) => {
    if (anchor) {
      document.getElementById(anchor)?.scrollIntoView();
      setSearchText("");
    }
  };

  return (
    <div className={styles.jumpSearch}>
      <div className="box">
        <input
          type="search"
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => handleEnter(e)}
          value={searchText}
          placeholder="Jump to a guide..."
        />
        <button onClick={() => setSearchText("")} tabIndex={-1}>
          <span className="searchIcon">
            <Icon slug="fas fa-search" />
          </span>
          <span className="clearIcon">
            <Icon slug="fas fa-xmark" />
          </span>
          <span className="screen-reader-text">Search</span>
        </button>
        {results && (
          <ul className="results">
            {results.slice(0, 3).map((guide, key) => (
              <li key={guide.key}>
                <a
                  className="link"
                  href={`#${guide.key}`}
                  onClick={(e) => handleAnchorClick(e)}
                >
                  <div className="icon">
                    <Icon slug={guide.icon ?? "fas fa-gift"} />
                  </div>
                  <p>{resultText(guide, searchText)}</p>
                </a>
              </li>
            ))}
            {results.length > 3 && (
              <li>
                <span>. . .</span>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};
