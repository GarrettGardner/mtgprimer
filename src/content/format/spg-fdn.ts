import type { IFormatConfig } from "@/models";

const format: IFormatConfig = {
  code: "spg",
  name: "Special Guests (Foundation)",
  cards: [
    {
      number: "74",
      name: "Condemn",
      cost: ["w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["board"],
        },
      ],
    },
    {
      number: "75",
      name: "Sphinx's Tutelage",
      cost: ["2", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "76",
      name: "Grim Tutor",
      cost: ["1", "b", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "77",
      name: "Embercleave",
      cost: ["4", "r", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["r", "r"],
          categories: ["board"],
        },
      ],
    },
    {
      number: "78",
      name: "Goblin Bushwhacker",
      cost: ["r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "79",
      name: "Bloom Tender",
      cost: ["1", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "80",
      name: "Paradise Druid",
      cost: ["1", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "81",
      name: "Akroma's Memorial",
      cost: ["7"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "82",
      name: "Temporal Manipulation",
      cost: ["3", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "83",
      name: "Fiend Artisan",
      cost: ["bg", "bg"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
  ],
};

export default format;
