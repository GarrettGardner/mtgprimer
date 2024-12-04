import { useState, useEffect } from "react";

import type { ICard, ICardGroup, IFilters, IGuide } from "@/models";
import { applyFilters, decodeHash } from "@/utils";

export const useFilters = (cards: ICard[], defaultFilters: IFilters) => {
  const [filters, setFilters] = useState<IFilters>(defaultFilters);
  const [groups, setGroups] = useState<ICardGroup[]>([]);

  useEffect(() => {
    const hashChange = () => {
      setFilters(decodeHash(defaultFilters, document.location.hash));
    };

    hashChange();
    window.addEventListener("hashchange", hashChange);

    return () => {
      window.removeEventListener("hashchange", hashChange);
    };
  }, [defaultFilters]);

  useEffect(() => {
    setGroups(applyFilters(cards, filters));
  }, [filters, cards]);

  return { filters, groups };
};
