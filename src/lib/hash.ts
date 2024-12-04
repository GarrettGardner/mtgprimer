import type {
  TColor,
  TGrouping,
  TRarity,
  TOrdering,
  TView,
  IFilterSelections,
} from "@/models";
import { DEFAULT_FILTER_OPTIONS } from "@/constants";

export const encodeHash = (
  defaultFilterSelections: IFilterSelections,
  filterSelections: IFilterSelections,
) => {
  let hash = "";

  Object.keys(filterSelections).map((slug) => {
    const key = slug as keyof IFilterSelections;
    if (filterSelections[key] && defaultFilterSelections[key]) {
      if (
        typeof filterSelections[key] === "string" &&
        filterSelections[key] !== defaultFilterSelections[key]
      ) {
        hash += `${hash ? "&" : ""}${key}:${filterSelections[key]}`;
      } else if (
        Array.isArray(filterSelections[key]) &&
        filterSelections[key].length
      ) {
        hash += `${hash ? "&" : ""}${key}:${filterSelections[key].join("+")}`;
      }
    }
  });

  return hash ? encodeURIComponent(`filters:${hash}`) : "";
};

export const decodeHash = (
  defaultFilterSelections: IFilterSelections,
  hash: string,
) => {
  const filterSelections = structuredClone(defaultFilterSelections);

  if (hash) {
    hash = decodeURIComponent(hash);
    hash = hash.slice(9);
    hash.split("&").forEach((item) => {
      const [key, value] = item.split(":");
      if (key && value) {
        switch (key) {
          case "grouping":
            if (value in DEFAULT_FILTER_OPTIONS.groupings) {
              // TODO: Remove as
              filterSelections[key] = value as TGrouping;
            }
            break;
          case "ordering":
            if (value in DEFAULT_FILTER_OPTIONS.orderings) {
              // TODO: Remove as
              filterSelections[key] = value as TOrdering;
            }
            break;
          case "view":
            if (value in DEFAULT_FILTER_OPTIONS.views) {
              // TODO: Remove as
              filterSelections[key] = value as TView;
            }
            break;
          case "colors":
            // TODO: Remove as
            filterSelections[key] = value
              .split("+")
              .filter(
                (item) => item in DEFAULT_FILTER_OPTIONS.colors,
              ) as TColor[];
            break;
          case "rarities":
            // TODO: Remove as
            filterSelections[key] = value
              .split("+")
              .filter(
                (item) => item in DEFAULT_FILTER_OPTIONS.rarities,
              ) as TRarity[];
            break;
          case "sets":
          case "categories":
            filterSelections[key] = value.split("+");
            break;
        }
      }
    });
  }
  return filterSelections;
};
