import type { ICard, TColor, IFilters, IFilterOptions, TGrouping, ICardGroup } from "@/models";

export const applyFilters = (cards: ICard[], filters: IFilters, options: IFilterOptions) => {
  cards = _filterCards(cards, filters, options);

  cards = _orderCards(cards, filters, options);

  return _groupCards(filters.grouping, cards, options);
};

const _filterCards = (cards: ICard[], filters: IFilters, options: IFilterOptions) => {
  return cards.filter((card) => {
    if (
      filters.colors.length &&
      !card.colorsRequired.reduce(
        (acc, colorRequired) =>
          acc &&
          colorRequired
            .split("")
            .reduce(
              (accParts, colorRequiredPart) => accParts || filters.colors.includes(colorRequiredPart as TColor),
              false,
            ),
        true,
      )
    ) {
      return false;
    }

    if (filters.rarities.length && !filters.rarities.includes(card.rarity)) {
      return false;
    }

    if (filters.sets.length && !filters.sets.includes(card.code)) {
      return false;
    }

    if (
      filters.categories.length &&
      !card.categories.reduce((acc, category) => acc || filters.categories.includes(category), false)
    ) {
      return false;
    }

    return true;
  });
};

const _orderCards = (cards: ICard[], filters: IFilters, options: IFilterOptions) => {
  const orderOrdering = ["name", "mv", "number", "color", "rarity"].filter((ordering) => ordering !== filters.ordering);
  orderOrdering.push(filters.ordering);

  const orderColor = ["c", "w", "u", "b", "r", "g", "m"];
  const orderRarity = ["c", "u", "r", "m"];
  orderOrdering.forEach((ordering) => {
    cards.sort((a, b) => {
      switch (ordering) {
        case "mv":
          return a.mv - b.mv;
        case "color":
          return orderColor.indexOf(a.color) - orderColor.indexOf(b.color);
        case "rarity":
          return orderRarity.indexOf(a.rarity) - orderRarity.indexOf(b.rarity);
        case "number":
          return parseInt(a.number) - parseInt(b.number);
        case "name":
          return a.name.localeCompare(b.name);
      }
      return 0;
    });
  });

  return cards;
};

const _groupCards = (grouping: TGrouping, cards: ICard[], options: IFilterOptions) => {
  const orders = {
    color: Object.keys(options.colors),
    rarity: Object.keys(options.rarities),
    categories: Object.keys(options.categories),
  };

  if (grouping === "none") {
    return [{ key: "all", cards }];
  }

  let groupingKey: keyof ICard = grouping === "category" ? "categories" : grouping;

  return cards
    .reduce<ICardGroup[]>((groups, card) => {
      (Array.isArray(card[groupingKey]) && card[groupingKey].length > 0
        ? card[groupingKey]
        : [card[groupingKey] ?? ""]
      ).forEach((key) => {
        key = String(key);
        const index = groups.findIndex((group) => group.key === key);
        if (index > -1) {
          groups[index].cards.push(card);
        } else {
          groups.push({
            key,
            icon: grouping,
            header: key,
            cards: [card],
          });
        }
      });

      return groups;
    }, [])
    .sort((a, b) => {
      if (!a.header || !b.header) {
        return 0;
      }
      if (groupingKey === "color" || groupingKey === "rarity" || groupingKey === "categories") {
        return orders[groupingKey].indexOf(a.header) - orders[groupingKey].indexOf(b.header);
      }
      return parseInt(a.header) - parseInt(b.header);
    });
};
