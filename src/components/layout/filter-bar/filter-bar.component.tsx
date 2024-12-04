"use client";

import { ChangeEvent, useEffect, useState } from "react";

import type { IFilterOptions, IFilters, TColor, TGrouping, TOrdering, TRarity, TView } from "@/models";
import { Icon } from "@/components/common";
import { decodeHash, encodeHash } from "@/lib";
import { useLocalToggle } from "@/hooks";

import styles from "./filter-bar.module.scss";

export const FilterBar = (props: { code: string; defaultFilters: IFilters; options: IFilterOptions }) => {
  const [isFilterMobileOpen, toggleIsFilterMobileOpen] = useLocalToggle("FILTER_MOBILE_OPEN", "isFilterMobileOpen");
  const [filters, setFilters] = useState(structuredClone(props.defaultFilters));

  useEffect(() => {
    setFilters(decodeHash(props.defaultFilters, window.location.hash));
  }, [props.defaultFilters]);

  useEffect(() => {
    window.location.hash = encodeHash(props.defaultFilters, filters);
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

  const resetFilters = () => {
    setFilters(structuredClone(props.defaultFilters));
  };

  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.filterBar}>
        <div className="bar">
          <div className="toggleMobile">
            <button onClick={() => toggleIsFilterMobileOpen()}>
              <Icon slug="fas fa-sliders" /> {isFilterMobileOpen ? "Close" : "Open"} Filters
            </button>
          </div>
          <div className="title">
            <h3>
              <Icon slug="fas fa-sliders" /> Filters
            </h3>
          </div>
          <div className="col isLeftmost">
            <div className="filter colors">
              {Object.keys(props.options.colors)
                .filter((slug) => slug !== "m")
                .map((slug, key) => (
                  <div className={`checkbox color color-${slug}`} key={key}>
                    <input
                      type="checkbox"
                      value={slug}
                      id={`color-${slug}`}
                      onChange={(e) => changeFilterCheckbox(e, "colors")}
                      checked={filters.colors.includes(slug as TColor)}
                    />
                    <label htmlFor={`color-${slug}`} title={props.options.colors[slug as TColor]}>
                      <Icon type="mana" slug={slug} />
                      {filters.colors.length > 0 && !filters.colors.includes(slug as TColor) && (
                        <span>
                          <Icon slug="fas fa-xmark" />
                        </span>
                      )}
                    </label>
                  </div>
                ))}
            </div>
            <p>Color</p>
          </div>
          <div className="col">
            <div className="filter rarities">
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
                    {filters.rarities.length > 0 && !filters.rarities.includes(slug as TRarity) && (
                      <span>
                        <Icon slug="fas fa-xmark" />
                      </span>
                    )}
                  </label>
                </div>
              ))}
            </div>
            <p>Rarity</p>
          </div>
          <div className="col">
            <div className="dropdownTall">
              <div className="dropdown">
                <select value={filters.view} onChange={(e) => changeFilterSelect(e, "view")}>
                  {Object.keys(props.options.views).map((slug, key) => (
                    <option key={key} value={slug}>
                      {props.options.views[slug as TView]}
                    </option>
                  ))}
                </select>
                <div className="selected">
                  <Icon type="view" slug={filters.view} />
                  {props.options.views[filters.view]}
                </div>
              </div>
            </div>
            <p>View</p>
          </div>
          <div className="col hasRows">
            <div className="row">
              <div className="dropdown">
                <select value={filters.grouping} onChange={(e) => changeFilterSelect(e, "grouping")}>
                  {Object.keys(props.options.groupings).map((slug, key) => (
                    <option key={key} value={slug}>
                      {props.options.groupings[slug as TGrouping]}
                    </option>
                  ))}
                </select>
                <div className="selected">{props.options.groupings[filters.grouping]}</div>
              </div>
              <p>Grouping</p>
            </div>
            <div className="row">
              <div className="dropdown">
                <select value={filters.ordering} onChange={(e) => changeFilterSelect(e, "ordering")}>
                  {Object.keys(props.options.orderings).map((slug, key) => (
                    <option key={key} value={slug}>
                      {props.options.orderings[slug as TOrdering]}
                    </option>
                  ))}
                </select>
                <div className="selected">{props.options.orderings[filters.ordering]}</div>
              </div>
              <p>Ordering</p>
            </div>
          </div>
          {Object.keys(props.options.sets).length > 1 && (
            <div className="col">
              <div className="filter sets">
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
                      {filters.sets.length > 0 && !filters.sets.includes(slug) && (
                        <span>
                          <Icon slug="fas fa-xmark" />
                        </span>
                      )}
                    </label>
                  </div>
                ))}
              </div>
              <p>Set</p>
            </div>
          )}
          {Object.keys(props.options.categories).length > 1 && (
            <div className="col isSkinny">
              <div className="filter categories">
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
              <p>Category</p>
            </div>
          )}
          <div className="actions">
            {/*<button onClick={() => minimize()}>
            <Icon slug="fas fa-minimize" /> Minimize
          </button>*/}
            <button onClick={() => resetFilters()}>
              <Icon slug="fas fa-arrow-rotate-left" /> Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
