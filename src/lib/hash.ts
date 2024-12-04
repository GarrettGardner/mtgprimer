import type { TColor, IFilters, TGrouping, TRarity, TOrdering, TView } from "@/models";
import { DEFAULT_FILTER_OPTIONS } from "@/constants";

export const encodeHash = (defaultFilters: IFilters, filters: IFilters) => {
  let hash = "";

  Object.keys(filters).map((slug) => {
    const key = slug as keyof IFilters;
    if (filters[key] && defaultFilters[key]) {
      if (typeof filters[key] === "string" && filters[key] !== defaultFilters[key]) {
        hash += `${hash ? "&" : ""}${key}:${filters[key]}`;
      } else if (Array.isArray(filters[key]) && filters[key].length) {
        hash += `${hash ? "&" : ""}${key}:${filters[key].join("+")}`;
      }
    }
  });

  return hash ? encodeURIComponent(`filters:${hash}`) : "";
};

export const decodeHash = (defaultFilters: IFilters, hash: string) => {
  const filters = structuredClone(defaultFilters);

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
              filters[key] = value as TGrouping;
            }
            break;
          case "ordering":
            if (value in DEFAULT_FILTER_OPTIONS.orderings) {
              // TODO: Remove as
              filters[key] = value as TOrdering;
            }
            break;
          case "view":
            if (value in DEFAULT_FILTER_OPTIONS.views) {
              // TODO: Remove as
              filters[key] = value as TView;
            }
            break;
          case "colors":
            // TODO: Remove as
            filters[key] = value.split("+").filter((item) => item in DEFAULT_FILTER_OPTIONS.colors) as TColor[];
            break;
          case "rarities":
            // TODO: Remove as
            filters[key] = value.split("+").filter((item) => item in DEFAULT_FILTER_OPTIONS.rarities) as TRarity[];
            break;
          case "sets":
          case "categories":
            filters[key] = value.split("+");
            break;
        }
      }
    });
  }
  return filters;
};
