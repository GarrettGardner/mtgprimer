"use client";

import { ChangeEvent, useEffect, useState } from "react";

import type {
  IFilter,
  TColor,
  TGrouping,
  TOrdering,
  TRarity,
  TView,
} from "@/models";
import { Icon } from "@/components/common";
import { decodeHash, encodeHash } from "@/lib";
import { useLocalToggle } from "@/hooks";

import styles from "./filter-bar.module.scss";

export const FilterBar = (props: {
  filter: IFilter;
  hideCategories?: boolean;
}) => {
  const [isFilterMobileOpen, toggleIsFilterMobileOpen] = useLocalToggle(
    "FILTER_MOBILE_OPEN",
    "isFilterMobileOpen",
  );
  const [filterSelections, setFilterSelections] = useState(
    structuredClone(props.filter.defaultSelections),
  );
  const options = props.filter.options;
  const code = Object.keys(props.filter.options.sets)?.[0] ?? "mtg";

  useEffect(() => {
    setFilterSelections(
      decodeHash(props.filter.defaultSelections, window.location.hash),
    );
  }, [props.filter.defaultSelections]);

  useEffect(() => {
    window.location.hash = encodeHash(
      props.filter.defaultSelections,
      filterSelections,
    );
  }, [props.filter.defaultSelections, filterSelections]);

  const changeFilterCheckbox = (
    e: ChangeEvent<HTMLInputElement>,
    filterKey: "colors" | "rarities" | "sets" | "categories",
  ) => {
    const checked = e.target.checked;
    const filterSelection = filterSelections[filterKey];
    const value = e.target.value;
    if (Array.isArray(filterSelection)) {
      if (checked) {
        // @ts-expect-error TODO: Fix keying
        filterSelection.push(value);
      } else {
        // @ts-expect-error TODO: Fix keying
        filterSelection.splice(filterSelection.indexOf(value), 1);
      }
    }

    setFilterSelections({
      ...filterSelections,
      [filterKey]: filterSelection,
    });
  };

  const changeFilterSelect = (
    e: ChangeEvent<HTMLSelectElement>,
    filterKey: "grouping" | "ordering" | "view",
  ) => {
    setFilterSelections({
      ...filterSelections,
      [filterKey]: e.target.value,
    });
  };

  const resetFilters = () => {
    setFilterSelections(structuredClone(props.filter.defaultSelections));
  };

  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.filterBar}>
        <div className="bar">
          <div className="toggleMobile">
            <button onClick={() => toggleIsFilterMobileOpen()}>
              <Icon slug="fas fa-sliders" />{" "}
              {isFilterMobileOpen ? "Close" : "Open"} Filters
            </button>
          </div>
          <div className="title">
            <h3>
              <Icon slug="fas fa-sliders" /> Filters
            </h3>
          </div>
          <div className="col isLeftmost">
            <div className="filter colors">
              {Object.keys(options.colors)
                .filter((slug) => slug !== "m")
                .map((slug, key) => (
                  <div className={`checkbox color color-${slug}`} key={key}>
                    <input
                      type="checkbox"
                      value={slug}
                      id={`color-${slug}`}
                      onChange={(e) => changeFilterCheckbox(e, "colors")}
                      checked={filterSelections.colors.includes(slug as TColor)}
                    />
                    <label
                      htmlFor={`color-${slug}`}
                      title={options.colors[slug as TColor]}
                    >
                      <Icon type="mana" slug={slug} />
                      {filterSelections.colors.length > 0 &&
                        !filterSelections.colors.includes(slug as TColor) && (
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
              {Object.keys(options.rarities).map((slug, key) => (
                <div className="checkbox rarity" key={key}>
                  <input
                    type="checkbox"
                    id={`rarity-${slug}`}
                    value={slug}
                    onChange={(e) => changeFilterCheckbox(e, "rarities")}
                    checked={filterSelections.rarities.includes(
                      slug as TRarity,
                    )}
                  />
                  <label
                    htmlFor={`rarity-${slug}`}
                    title={options.rarities[slug as TRarity]}
                  >
                    <Icon type="set" slug={code} slugSecondary={slug} />
                    {filterSelections.rarities.length > 0 &&
                      !filterSelections.rarities.includes(slug as TRarity) && (
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
                <select
                  value={filterSelections.view}
                  onChange={(e) => changeFilterSelect(e, "view")}
                >
                  {Object.keys(options.views).map((slug, key) => (
                    <option key={key} value={slug}>
                      {options.views[slug as TView]}
                    </option>
                  ))}
                </select>
                <div className="selected">
                  <Icon type="view" slug={filterSelections.view} />
                  {options.views[filterSelections.view]}
                </div>
              </div>
            </div>
            <p>View</p>
          </div>
          <div className="col hasRows">
            <div className="row">
              <div className="dropdown">
                <select
                  value={filterSelections.grouping}
                  onChange={(e) => changeFilterSelect(e, "grouping")}
                >
                  {Object.keys(options.groupings).map((slug, key) => (
                    <option key={key} value={slug}>
                      {options.groupings[slug as TGrouping]}
                    </option>
                  ))}
                </select>
                <div className="selected">
                  {options.groupings[filterSelections.grouping]}
                </div>
              </div>
              <p>Grouping</p>
            </div>
            <div className="row">
              <div className="dropdown">
                <select
                  value={filterSelections.ordering}
                  onChange={(e) => changeFilterSelect(e, "ordering")}
                >
                  {Object.keys(options.orderings).map((slug, key) => (
                    <option key={key} value={slug}>
                      {options.orderings[slug as TOrdering]}
                    </option>
                  ))}
                </select>
                <div className="selected">
                  {options.orderings[filterSelections.ordering]}
                </div>
              </div>
              <p>Ordering</p>
            </div>
          </div>
          {Object.keys(options.sets).length > 1 && (
            <div className="col">
              <div className="filter sets">
                {Object.keys(options.sets).map((slug, key) => (
                  <div className="checkbox set" key={key}>
                    <input
                      type="checkbox"
                      id={`set-${slug}`}
                      value={slug}
                      onChange={(e) => changeFilterCheckbox(e, "sets")}
                      checked={filterSelections.sets.includes(slug)}
                    />
                    <label htmlFor={`set-${slug}`} title={options.sets[slug]}>
                      <Icon type="set" slug={slug} slugSecondary="c" />
                      {filterSelections.sets.length > 0 &&
                        !filterSelections.sets.includes(slug) && (
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
          {!props.hideCategories &&
            Object.keys(options.categories).length > 1 &&
            Object.keys(options.categories).length < 4 && (
              <div className="col isSkinny">
                <div className="filter categories">
                  {Object.keys(options.categories).map((slug, key) => (
                    <div className="checkbox category" key={key}>
                      <input
                        type="checkbox"
                        id={`category-${slug}`}
                        value={slug}
                        onChange={(e) => changeFilterCheckbox(e, "categories")}
                        checked={filterSelections.categories.includes(slug)}
                      />
                      <label
                        htmlFor={`category-${slug}`}
                        title={options.categories[slug]}
                      >
                        {options.categories[slug]}
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
