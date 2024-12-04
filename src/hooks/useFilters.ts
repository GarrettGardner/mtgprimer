import { useState, useEffect } from "react";

import type { ICard, ICardGroup, IFilter, IFilterSelections } from "@/models";
import { applyFilters, decodeHash } from "@/lib";

export const useFilters = (cards: ICard[], filter: IFilter) => {
  const [filterSelections, setFilterSelections] = useState<IFilterSelections>(
    filter.defaultSelections,
  );
  const [groups, setGroups] = useState<ICardGroup[]>([]);

  useEffect(() => {
    const hashChange = () => {
      setFilterSelections(
        decodeHash(filter.defaultSelections, window.location.hash),
      );
    };

    hashChange();
    window.addEventListener("hashchange", hashChange);

    return () => window.removeEventListener("hashchange", hashChange);
  }, [filter]);

  useEffect(() => {
    setGroups(applyFilters(cards, filter, filterSelections));
  }, [cards, filter, filterSelections]);

  return { filterSelections, groups };
};
