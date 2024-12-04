"use client";

import { ChangeEvent, useEffect, useState } from "react";

import type { IFilterOptions, IFilters, TColor, TGrouping, TOrdering, TRarity, TView } from "@/models";
import { Icon } from "@/components/common";
import { decodeHash, encodeHash } from "@/utils";

import styles from "./filter-bar.module.scss";

export const FilterBar = (props: { code: string; defaultFilters: IFilters; options: IFilterOptions }) => {
  const [filters, setFilters] = useState(props.defaultFilters);

  useEffect(() => {
    setFilters(decodeHash(props.defaultFilters, document.location.hash));
  }, [props.defaultFilters]);

  useEffect(() => {
    document.location.hash = encodeHash(props.defaultFilters, filters);
  }, [props.defaultFilters, filters]);

  const changeFilterCheckbox = (
    e: ChangeEvent<HTMLInputElement>,
    filterKey: "colors" | "rarities" | "sets" | "categories",
  ) => {
    const checked = e.target.checked;
    const filter = filters[filterKey];
    const value = e.target.value;
    if (Array.isArray(filter)) {
      if (checked) {
        // @ts-expect-error TODO: Fix keying
        filter.push(value);
      } else {
        // @ts-expect-error TODO: Fix keying
        filter.splice(filter.indexOf(value), 1);
      }
    }

    setFilters({
      ...filters,
      [filterKey]: filter,
    });
  };

  const changeFilterSelect = (e: ChangeEvent<HTMLSelectElement>, filterKey: "grouping" | "ordering" | "view") => {
    setFilters({
      ...filters,
      [filterKey]: e.target.value,
    });
  };

  return (
    <div className={styles.filterBar}>
      <div>
        <p>Colors Available</p>
        <div className="filter">
          {Object.keys(props.options.colors)
            .filter((slug) => slug !== "m")
            .map((slug, key) => (
              <div className="checkbox color" key={key}>
                <input
                  type="checkbox"
                  value={slug}
                  id={`color-${slug}`}
                  onChange={(e) => changeFilterCheckbox(e, "colors")}
                  checked={filters.colors.includes(slug as TColor)}
                />
                <label htmlFor={`color-${slug}`} title={props.options.colors[slug as TColor]}>
                  <Icon type="mana" slug={slug} />
                </label>
              </div>
            ))}
        </div>
      </div>
      <div>
        <p>Rarities</p>
        <div className="filter">
          {Object.keys(props.options.rarities).map((slug, key) => (
            <div className="checkbox rarity" key={key}>
              <input
                type="checkbox"
                id={`rarity-${slug}`}
                value={slug}
                onChange={(e) => changeFilterCheckbox(e, "rarities")}
                checked={filters.rarities.includes(slug as TRarity)}
              />
              <label htmlFor={`rarity-${slug}`} title={props.options.rarities[slug as TRarity]}>
                <Icon type="set" slug={props.code} slugSecondary={slug} />
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p>View</p>
        <div className="dropdown">
          <select value={filters.view} onChange={(e) => changeFilterSelect(e, "view")}>
            {Object.keys(props.options.views).map((slug, key) => (
              <option key={key} value={slug}>
                {props.options.views[slug as TView]}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <p>Grouping</p>
        <div className="dropdown">
          <select value={filters.grouping} onChange={(e) => changeFilterSelect(e, "grouping")}>
            {Object.keys(props.options.groupings).map((slug, key) => (
              <option key={key} value={slug}>
                {props.options.groupings[slug as TGrouping]}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <p>Ordering</p>
        <div className="dropdown">
          <select value={filters.ordering} onChange={(e) => changeFilterSelect(e, "ordering")}>
            {Object.keys(props.options.orderings).map((slug, key) => (
              <option key={key} value={slug}>
                {props.options.orderings[slug as TOrdering]}
              </option>
            ))}
          </select>
        </div>
      </div>
      {Object.keys(props.options.sets).length > 1 && (
        <div>
          <p>Sets</p>
          <div className="filter">
            {Object.keys(props.options.sets).map((slug, key) => (
              <div className="checkbox set" key={key}>
                <input
                  type="checkbox"
                  id={`set-${slug}`}
                  value={slug}
                  onChange={(e) => changeFilterCheckbox(e, "sets")}
                  checked={filters.sets.includes(slug)}
                />
                <label htmlFor={`set-${slug}`} title={props.options.sets[slug]}>
                  <Icon type="set" slug={slug} slugSecondary="c" />
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
      {Object.keys(props.options.categories).length > 1 && (
        <div>
          <p>Categories</p>
          <div className="filter">
            {Object.keys(props.options.categories).map((slug, key) => (
              <div className="checkbox category" key={key}>
                <input
                  type="checkbox"
                  id={`category-${slug}`}
                  value={slug}
                  onChange={(e) => changeFilterCheckbox(e, "categories")}
                  checked={filters.categories.includes(slug)}
                />
                <label htmlFor={`category-${slug}`} title={props.options.categories[slug]}>
                  {props.options.categories[slug]}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
