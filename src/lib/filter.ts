import type {
  ICard,
  TColor,
  IFilter,
  ICardGroup,
  IFilterSelections,
} from "@/models";

export const applyFilters = (
  cards: ICard[],
  filter: IFilter,
  selections: IFilterSelections,
) => _groupCards(_orderCards(_filterCards({ cards, filter, selections })));

const _filterCards = (props: {
  cards: ICard[];
  filter: IFilter;
  selections: IFilterSelections;
}) => {
  const filter = props.filter;
  const selections = props.selections;

  return {
    cards: props.cards.filter((card) => {
      if (
        selections.colors.length &&
        !card.colorsRequired.reduce(
          (acc, colorRequired) =>
            acc &&
            colorRequired
              .split("")
              .reduce(
                (accParts, colorRequiredPart) =>
                  accParts ||
                  selections.colors.includes(colorRequiredPart as TColor),
                false,
              ),
          true,
        )
      ) {
        return false;
      }

      if (
        selections.rarities.length &&
        !selections.rarities.includes(card.rarity)
      ) {
        return false;
      }

      if (selections.sets.length && !selections.sets.includes(card.code)) {
        return false;
      }

      if (
        selections.categories.length &&
        !card.categories.reduce(
          (acc, category) => acc || selections.categories.includes(category),
          false,
        )
      ) {
        return false;
      }

      return true;
    }),
    filter,
    selections,
  };
};

const _orderCards = (props: {
  cards: ICard[];
  filter: IFilter;
  selections: IFilterSelections;
}) => {
  const cards = props.cards;
  const filter = props.filter;
  const selections = props.selections;
  const options = props.filter.options;

  const orderOrdering = ["name", "mv", "number", "color", "rarity"].filter(
    (ordering) => ordering !== selections.ordering,
  );
  orderOrdering.push(selections.ordering);

  const orders = {
    color: Object.keys(options.colors),
    rarity: Object.keys(options.rarities),
  };

  orderOrdering.forEach((ordering) => {
    cards.sort((a, b) => {
      switch (ordering) {
        case "mv":
          return a.mv - b.mv;
        case "color":
          return orders.color.indexOf(a.color) - orders.color.indexOf(b.color);
        case "rarity":
          return (
            orders.rarity.indexOf(a.rarity) - orders.rarity.indexOf(b.rarity)
          );
        case "number":
          return parseInt(a.number) - parseInt(b.number);
        case "name":
          return a.name.localeCompare(b.name);
      }
      return 0;
    });
  });

  return {
    cards,
    filter,
    selections,
  };
};

const _groupCards = (props: {
  cards: ICard[];
  filter: IFilter;
  selections: IFilterSelections;
}) => {
  const cards = props.cards;
  const selections = props.selections;
  const options = props.filter.options;

  const orders = {
    color: Object.keys(options.colors),
    rarity: Object.keys(options.rarities),
    categories: Object.keys(options.categories),
  };

  if (selections.grouping === "none") {
    return [{ key: "all", cards }];
  }

  let groupingKey: keyof ICard =
    selections.grouping === "category" ? "categories" : selections.grouping;

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
            icon: selections.grouping,
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
      if (
        groupingKey === "color" ||
        groupingKey === "rarity" ||
        groupingKey === "categories"
      ) {
        return (
          orders[groupingKey].indexOf(a.header) -
          orders[groupingKey].indexOf(b.header)
        );
      }
      return parseInt(a.header) - parseInt(b.header);
    });
};
