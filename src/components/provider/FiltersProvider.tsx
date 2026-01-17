import { applyFilters, decodeHash, encodeHash } from "@/lib";
import type { ICard, IFilter, IFilterSelections } from "@/models";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { createContext, useContext } from "react";

type FiltersProviderType = {
  filterSelections: IFilterSelections;
  filter: IFilter;
  updateSelections: (n: IFilterSelections) => void;
  resetSelections: () => void;
};

const FiltersContext = createContext<FiltersProviderType | null>(null);

export const FiltersProvider = (props: {
  children: ReactNode;
  filter: IFilter;
}) => {
  const [filterSelections, setFilterSelections] = useState(
    structuredClone(props.filter.defaultSelections),
  );

  useEffect(() => {
    const onHashChange = () =>
      setFilterSelections(
        decodeHash(props.filter.defaultSelections, window.location.hash),
      );

    onHashChange();

    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  }, [props.filter.defaultSelections]);

  const updateSelections = (filterSelectionsNew: IFilterSelections) => {
    window.location.hash = encodeHash(
      props.filter.defaultSelections,
      filterSelectionsNew,
    );
  };

  const resetSelections = () => {
    window.location.hash = encodeHash(
      props.filter.defaultSelections,
      props.filter.defaultSelections,
    );
  };

  return (
    <FiltersContext.Provider
      value={{
        filterSelections,
        updateSelections,
        resetSelections,
        filter: props.filter,
      }}
    >
      {props.children}
    </FiltersContext.Provider>
  );
};

export const useFilters = (): FiltersProviderType => {
  const filters = useContext(FiltersContext);

  if (!filters)
    throw new Error("useFilters must be used within FiltersContext");

  return filters;
};

export const useGroups = (cards: ICard[]) => {
  const { filterSelections, filter } = useFilters();

  const groups = useMemo(
    () => applyFilters(cards, filter, filterSelections),
    [cards, filter, filterSelections],
  );

  return { groups };
};
