import { useState, useEffect } from "react";

import type { ICard, ICardGroup, IFilterOptions, IFilters } from "@/models";
import { applyFilters, decodeHash } from "@/lib";

export const useFilters = (cards: ICard[], defaultFilters: IFilters, options: IFilterOptions) => {
  const [filters, setFilters] = useState<IFilters>(defaultFilters);
  const [groups, setGroups] = useState<ICardGroup[]>([]);

  useEffect(() => {
    const hashChange = () => {
      setFilters(decodeHash(defaultFilters, window.location.hash));
    };

    hashChange();
    window.addEventListener("hashchange", hashChange);

    return () => {
      window.removeEventListener("hashchange", hashChange);
    };
  }, [defaultFilters]);

  useEffect(() => {
    setGroups(applyFilters(cards, filters, options));
  }, [filters, cards, options]);

  return { filters, groups };
};
