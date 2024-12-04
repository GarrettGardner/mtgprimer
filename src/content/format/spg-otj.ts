import type { IFormatConfig } from "@/models";

const format: IFormatConfig = {
  code: "spg",
  name: "Special Guests (OTJ)",
  cards: [
    {
      number: "29",
      name: "Stoneforge Mystic",
      cost: ["1", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "30",
      name: "Brazen Borrower // Petty Theft (Brazen Borrower)",
      cost: ["1", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          categories: ["board"],
        },
      ],
    },
    {
      number: "30",
      name: "Brazen Borrower // Petty Theft (Petty Theft)",
      cost: ["1", "u"],
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
      number: "31",
      name: "Desertion",
      cost: ["3", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["counterspell"],
        },
      ],
    },
    {
      number: "32",
      name: "Morbid Opportunist",
      cost: ["2", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "33",
      name: "Port Razer",
      cost: ["3", "r", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "34",
      name: "Scapeshift",
      cost: ["2", "g", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "35",
      name: "Mystic Snake",
      cost: ["1", "g", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          categories: ["board", "counterspell"],
        },
      ],
    },
    {
      number: "36",
      name: "Notion Thief",
      cost: ["2", "u", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          categories: ["board"],
        },
      ],
    },
    {
      number: "37",
      name: "Desert",
      cost: [],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
      ],
    },
    {
      number: "38",
      name: "Prismatic Vista",
      cost: [],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
      ],
    },
  ],
};

export default format;
