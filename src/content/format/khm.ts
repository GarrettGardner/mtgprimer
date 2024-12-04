import type { IFormatConfig } from "@/models";

const format: IFormatConfig = {
  code: "khm",
  name: "Kaldheim",
  guides: {
    full: {
      name: "Full Card Gallery",
      defaultGrouping: "none",
      defaultOrdering: "number",
      categories: {
        creature: "Creature",
        spell: "Spell",
        land: "Land",
      },
    },
    instants: {
      name: "Instants",
      defaultGrouping: "mv",
      defaultOrdering: "rarity",
      categories: {
        board: "Board",
        counterspell: "Counterspell",
        foretell: "Foretell",
        other: "Other",
      },
    },

    bounce: {},
    counterspell: {},
    discard: {},
    disenchant: {},
    falter: {},
    fog: {},
    haste: {},
    lifegain: {},
    fixing: {},
    ramp: {},
    masspump: {},
    ping: {},
    mill: {},
    mindcontrol: {},
    threaten: {},
    wrath: {},
    "khm-boast": {
      name: "Mechanic: Boast",
      icon: "fas fa-fist-raised",
      categories: {
        payoffs: "Boast Payoffs",
        all: "All Boast Cards",
      },
    },
    "khm-foretell": {
      name: "Mechanic: Foretell",
      icon: "fas fa-eye",
      categories: {
        payoffs: "Foretell Payoffs",
        all: "All Foretell Cards",
      },
    },
    "khm-mdfc": {
      name: "Mechanic: Modal Double-Faced Cards",
      icon: "fas fa-angle-double-right",
    },
    "khm-snow": {
      name: "Mechanic: Snow",
      icon: "fas fa-snowflake",
      categories: {
        payoffs: "Snow Payoffs",
        all: "All Snow Cards",
        hate: "Snow Hate Cards",
      },
    },
    "khm-changeling": {
      name: "Theme: Changeling",
      icon: "fas fa-person-booth",
      categories: {
        payoffs: "Creature Type Payoffs",
        all: "All Changelings",
      },
    },
    "khm-elves": {
      name: "Theme: Elves",
      icon: "fas fa-moon",
      categories: {
        payoffs: "Elf Payoffs",
        all: "All Elves",
      },
    },
    "khm-giants": {
      name: "Theme: Giants",
      icon: "fas fa-search-plus",
      categories: {
        payoffs: "Giant Payoffs",
        all: "All Giants",
      },
    },
    "khm-equipment": {
      name: "Theme: Equipment",
      icon: "fas fa-shield-alt",
      categories: {
        payoffs: "Equipment Payoffs",
        all: "All Equipment",
      },
    },
    "khm-secondspell": {
      name: "Theme: Second Spell",
      icon: "fas fa-angle-double-up",
      categories: {
        payoffs: "Second Spell Payoffs",
      },
    },
  },
  guideGroups: {
    removal: {
      name: "Removal Guide",
      defaultGrouping: "category",
      defaultOrdering: "number",
      categories: {
        removal: "Removal",
        bounce: "Bounce",
        temporary: "Temporary",
        boardwipe: "Board Wipe",
        other: "Other",
      },
      guides: [],
    },
    effects: {
      name: "Effect-o-pedia",
      defaultGrouping: "category",
      defaultOrdering: "number",
      guides: [
        "bounce",
        "counterspell",
        "discard",
        "disenchant",
        "falter",
        "fixing",
        "fog",
        "haste",
        "lifegain",
        "ramp",
        "masspump",
        "mill",
        "mindcontrol",
        "threaten",
        "wrath",
      ],
    },
    themes: {
      name: "Themes & Mechanics",
      defaultGrouping: "category",
      defaultOrdering: "number",
      guides: [
        "khm-boast",
        "khm-foretell",
        "khm-mdfc",
        "khm-snow",
        "khm-changeling",
        "khm-elves",
        "khm-giants",
        "khm-equipment",
        "khm-secondspell",
      ],
    },
  },
  cards: [
    {
      number: "1",
      name: "Axgard Braggart",
      cost: ["3", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-boast",
          categories: ["all"],
        },
      ],
    },
    {
      number: "2",
      name: "Battershield Warrior",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "masspump",
        },
        {
          guide: "khm-boast",
          categories: ["all"],
        },
      ],
    },
    {
      number: "3",
      name: "Battlefield Raptor",
      cost: ["w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "4",
      name: "Beskir Shieldmate",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "5",
      name: "Bound in Gold",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "6",
      name: "Clarion Spirit",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-secondspell",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "7",
      name: "Codespell Cleric",
      cost: ["w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-secondspell",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "8",
      name: "Divine Gambit",
      cost: ["w", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "disenchant",
        },
      ],
    },
    {
      number: "9",
      name: "Doomskar",
      cost: ["3", "w", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["boardwipe"],
        },
        {
          guide: "boardwipe",
        },
        {
          guide: "khm-foretell",
          cost: ["1", "w", "w"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "10",
      name: "Doomskar Oracle",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "khm-foretell",
          cost: ["w"],
          categories: ["all"],
        },
        {
          guide: "khm-secondspell",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "11",
      name: "Giant Ox",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "12",
      name: "Glorious Protector",
      cost: ["2", "w", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          cost: ["2", "w"],
          categories: ["board", "foretell"],
        },
        {
          guide: "khm-foretell",
          cost: ["2", "w"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "13",
      name: "Gods' Hall Guardian",
      cost: ["5", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-foretell",
          cost: ["3", "w"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "14",
      name: "Goldmaw Champion",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-boast",
          categories: ["all"],
        },
      ],
    },
    {
      number: "15",
      name: "Halvar, God of Battle // Sword of the Realms",
      cost: ["2", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-mdfc",
        },
        {
          guide: "khm-equipment",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "16",
      name: "Invoke the Divine",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["other"],
        },
        {
          guide: "disenchant",
        },
        {
          guide: "lifegain",
        },
      ],
    },
    {
      number: "17",
      name: "Iron Verdict",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["w"],
          categories: ["board", "foretell"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "khm-foretell",
          cost: ["w"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "18",
      name: "Kaya's Onslaught",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["w"],
          categories: ["board", "foretell"],
        },
        {
          guide: "khm-foretell",
          cost: ["w"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "19",
      name: "Master Skald",
      cost: ["4", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "20",
      name: "Rally the Ranks",
      cost: ["1", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "masspump",
        },
        {
          guide: "khm-changeling",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "21",
      name: "Reidane, God of the Worthy // Valkmira, Protector's Shield",
      cost: ["2", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-mdfc",
        },
        {
          guide: "khm-snow",
          categories: ["hate"],
        },
      ],
    },
    {
      number: "22",
      name: "Resplendent Marshal",
      cost: ["1", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-changeling",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "23",
      name: "Revitalize",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["other"],
        },
        {
          guide: "lifegain",
        },
      ],
    },
    {
      number: "24",
      name: "Righteous Valkyrie",
      cost: ["2", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "masspump",
        },
      ],
    },
    {
      number: "25",
      name: "Rune of Sustenance",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "khm-equipment",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "26",
      name: "Runeforge Champion",
      cost: ["2", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "27",
      name: "Search for Glory",
      cost: ["2", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "28",
      name: "Shepherd of the Cosmos",
      cost: ["4", "w", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-foretell",
          cost: ["3", "w"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "29",
      name: "Sigrid, God-Favored",
      cost: ["1", "w", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          categories: ["board"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "30",
      name: "Spectral Steel",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-equipment",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "31",
      name: "Stalwart Valkyrie",
      cost: ["3", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "32",
      name: "Starnheim Courser",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "33",
      name: "Starnheim Unleashed",
      cost: ["2", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-foretell",
          cost: ["x", "x", "w"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "34",
      name: "Story Seeker",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
        },
      ],
    },
    {
      number: "35",
      name: "Usher of the Fallen",
      cost: ["w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-boast",
          categories: ["all"],
        },
      ],
    },
    {
      number: "36",
      name: "Valkyrie's Sword",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-equipment",
          categories: ["all"],
        },
      ],
    },
    {
      number: "37",
      name: "Valor of the Worthy",
      cost: ["w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "38",
      name: "Warhorn Blast",
      cost: ["4", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["2", "w"],
          categories: ["board", "foretell"],
        },
        {
          guide: "masspump",
        },
        {
          guide: "khm-foretell",
          cost: ["2", "w"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "39",
      name: "Wings of the Cosmos",
      cost: ["w"],
      rarity: "c",
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
      number: "40",
      name: "Alrund, God of the Cosmos // Hakka, Whispering Raven",
      cost: ["3", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-mdfc",
        },
      ],
    },
    {
      number: "41",
      name: "Alrund's Epiphany",
      cost: ["5", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-foretell",
          cost: ["4", "u", "u"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "42",
      name: "Annul",
      cost: ["u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["counterspell"],
        },
        {
          guide: "counterspell",
        },
      ],
    },
    {
      number: "43",
      name: "Ascendant Spirit",
      cost: ["u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "44",
      name: "Augury Raven",
      cost: ["3", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-foretell",
          cost: ["1", "u"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "45",
      name: "Avalanche Caller",
      cost: ["1", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "haste",
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "46",
      name: "Behold the Multiverse",
      cost: ["3", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["1", "u"],
          categories: ["other", "foretell"],
        },
        {
          guide: "khm-foretell",
          cost: ["1", "u"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "47",
      name: "Berg Strider",
      cost: ["4", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-snow",
          categories: ["payoffs", "all"],
        },
        {
          guide: "khm-giants",
          categories: ["all"],
        },
      ],
    },
    {
      number: "48",
      name: "Bind the Monster",
      cost: ["u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "49",
      name: "Brinebarrow Intruder",
      cost: ["u"],
      rarity: "c",
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
      number: "50",
      name: "Cosima, God of the Voyage // The Omenkeel",
      cost: ["2", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-mdfc",
        },
      ],
    },
    {
      number: "51",
      name: "Cosmos Charger",
      cost: ["3", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          cost: ["2", "u"],
          categories: ["board", "foretell"],
        },
        {
          guide: "khm-foretell",
          cost: ["2", "u"],
          categories: ["all"],
        },
        {
          guide: "khm-foretell",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "52",
      name: "Cyclone Summoner",
      cost: ["5", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "removal",
          categories: ["bounce", "boardwipe"],
        },
        {
          guide: "boardwipe",
        },
        {
          guide: "bounce",
        },
        {
          guide: "khm-giants",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "53",
      name: "Depart the Realm",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["u"],
          categories: ["board", "foretell"],
        },
        {
          guide: "bounce",
        },
        {
          guide: "khm-foretell",
          cost: ["u"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "54",
      name: "Disdainful Stroke",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["counterspell"],
        },
        {
          guide: "counterspell",
        },
      ],
    },
    {
      number: "55",
      name: "Draugr Thought-Thief",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "56",
      name: "Frost Augur",
      cost: ["u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "57",
      name: "Frostpeak Yeti",
      cost: ["3", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "58",
      name: "Frostpyre Arcanist",
      cost: ["4", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-giants",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "59",
      name: "Giant's Amulet",
      cost: ["u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-giants",
          categories: ["all"],
        },
        {
          guide: "khm-equipment",
          categories: ["all"],
        },
      ],
    },
    {
      number: "60",
      name: "Glimpse the Cosmos",
      cost: ["1", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-giants",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "61",
      name: "Graven Lore",
      cost: ["3", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["other"],
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "62",
      name: "Icebind Pillar",
      cost: ["2", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["temporary"],
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "63",
      name: "Icebreaker Kraken",
      cost: ["10", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "64",
      name: "Inga Rune-Eyes",
      cost: ["3", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "65",
      name: "Karfell Harbinger",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ramp",
        },
        {
          guide: "khm-foretell",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "66",
      name: "Littjara Kinseekers",
      cost: ["3", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-changeling",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "67",
      name: "Mists of Littjara",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["board"],
        },
        {
          guide: "removal",
          categories: ["other"],
        },
      ],
    },
    {
      number: "68",
      name: "Mistwalker",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-changeling",
          categories: ["all"],
        },
      ],
    },
    {
      number: "69",
      name: "Mystic Reflection",
      cost: ["1", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["u"],
          categories: ["board", "foretell"],
        },
        {
          guide: "khm-foretell",
          cost: ["u"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "70",
      name: "Orvar, the All-Form",
      cost: ["3", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-changeling",
          categories: ["all"],
        },
      ],
    },
    {
      number: "71",
      name: "Pilfering Hawk",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "72",
      name: "Ravenform",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "disenchant",
        },
        {
          guide: "khm-foretell",
          cost: ["u"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "73",
      name: "Reflections of Littjara",
      cost: ["4", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-changeling",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "74",
      name: "Run Ashore",
      cost: ["4", "u", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["board"],
        },
        {
          guide: "removal",
          categories: ["bounce"],
        },
        {
          guide: "bounce",
        },
      ],
    },
    {
      number: "75",
      name: "Rune of Flight",
      cost: ["1", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-equipment",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "76",
      name: "Saw It Coming",
      cost: ["1", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["1", "u"],
          categories: ["counterspell", "foretell"],
        },
        {
          guide: "counterspell",
        },
        {
          guide: "khm-foretell",
          cost: ["1", "u"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "77",
      name: "Strategic Planning",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "78",
      name: "Undersea Invader",
      cost: ["4", "u", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          categories: ["board"],
        },
        {
          guide: "khm-giants",
          categories: ["all"],
        },
      ],
    },
    {
      number: "79",
      name: "Blood on the Snow",
      cost: ["4", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["boardwipe"],
        },
        {
          guide: "boardwipe",
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "80",
      name: "Bloodsky Berserker",
      cost: ["1", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-secondspell",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "81",
      name: "Burning-Rune Demon",
      cost: ["4", "b", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "82",
      name: "Crippling Fear",
      cost: ["2", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["boardwipe"],
        },
        {
          guide: "boardwipe",
        },
      ],
    },
    {
      number: "83",
      name: "Deathknell Berserker",
      cost: ["1", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-elves",
          categories: ["all"],
        },
      ],
    },
    {
      number: "84",
      name: "Demonic Gifts",
      cost: ["1", "b"],
      rarity: "c",
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
      number: "85",
      name: "Dogged Pursuit",
      cost: ["3", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "lifegain",
        },
      ],
    },
    {
      number: "86",
      name: "Draugr Necromancer",
      cost: ["3", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "87",
      name: "Draugr Recruiter",
      cost: ["3", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-boast",
          categories: ["all"],
        },
      ],
    },
    {
      number: "88",
      name: "Draugr's Helm",
      cost: ["1", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-equipment",
          categories: ["all"],
        },
      ],
    },
    {
      number: "89",
      name: "Dread Rider",
      cost: ["5", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "90",
      name: "Dream Devourer",
      cost: ["1", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-foretell",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "91",
      name: "Duskwielder",
      cost: ["b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "khm-boast",
          categories: ["all"],
        },
        {
          guide: "khm-elves",
          categories: ["all"],
        },
      ],
    },
    {
      number: "92",
      name: "Egon, God of Death // Throne of Death",
      cost: ["2", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-mdfc",
        },
      ],
    },
    {
      number: "93",
      name: "Elderfang Disciple",
      cost: ["1", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "discard",
        },
        {
          guide: "khm-elves",
          categories: ["all"],
        },
      ],
    },
    {
      number: "94",
      name: "Eradicator Valkyrie",
      cost: ["2", "b", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "khm-boast",
          categories: ["all"],
        },
      ],
    },
    {
      number: "95",
      name: "Feed the Serpent",
      cost: ["2", "b", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["board"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "96",
      name: "Grim Draugr",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "97",
      name: "Hailstorm Valkyrie",
      cost: ["3", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "98",
      name: "Haunting Voyage",
      cost: ["4", "b", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-foretell",
          cost: ["5", "b", "b"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "99",
      name: "Infernal Pet",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-secondspell",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "100",
      name: "Jarl of the Forsaken",
      cost: ["3", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          cost: ["1", "b"],
          categories: ["board", "foretell"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "khm-foretell",
          cost: ["1", "b"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "101",
      name: "Karfell Kennel-Master",
      cost: ["4", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "masspump",
        },
      ],
    },
    {
      number: "102",
      name: "Koma's Faithful",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "mill",
        },
        {
          guide: "khm-elves",
          categories: ["all"],
        },
      ],
    },
    {
      number: "103",
      name: "Poison the Cup",
      cost: ["1", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["1", "b"],
          categories: ["board", "foretell"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "khm-foretell",
          cost: ["1", "b"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "104",
      name: "Priest of the Haunted Edge",
      cost: ["1", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "105",
      name: "Raise the Draugr",
      cost: ["1", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["other"],
        },
      ],
    },
    {
      number: "106",
      name: "Return Upon the Tide",
      cost: ["4", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-foretell",
          cost: ["3", "b"],
          categories: ["all"],
        },
        {
          guide: "khm-elves",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "107",
      name: "Rise of the Dread Marn",
      cost: ["2", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["b"],
          categories: ["board", "foretell"],
        },
        {
          guide: "khm-foretell",
          cost: ["b"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "108",
      name: "Rune of Mortality",
      cost: ["1", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-equipment",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "109",
      name: "Skemfar Avenger",
      cost: ["1", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-elves",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "110",
      name: "Skemfar Shadowsage",
      cost: ["3", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "khm-changeling",
          categories: ["payoffs"],
        },
        {
          guide: "khm-elves",
          categories: ["all"],
        },
      ],
    },
    {
      number: "111",
      name: "Skull Raid",
      cost: ["3", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "discard",
        },
        {
          guide: "khm-foretell",
          cost: ["1", "b"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "112",
      name: "Tergrid, God of Fright // Tergrid's Lantern",
      cost: ["3", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-mdfc",
        },
      ],
    },
    {
      number: "113",
      name: "Tergrid's Shadow",
      cost: ["3", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["2", "b", "b"],
          categories: ["board", "foretell"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "khm-foretell",
          cost: ["2", "b", "b"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "114",
      name: "Valki, God of Lies // Tibalt, Cosmic Impostor",
      cost: ["1", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "discard",
        },
        {
          guide: "khm-mdfc",
        },
      ],
    },
    {
      number: "115",
      name: "Varragoth, Bloodsky Sire",
      cost: ["2", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-boast",
          categories: ["all"],
        },
      ],
    },
    {
      number: "116",
      name: "Vengeful Reaper",
      cost: ["3", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "haste",
        },
        {
          guide: "khm-foretell",
          cost: ["1", "b"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "117",
      name: "Village Rites",
      cost: ["b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["other"],
        },
      ],
    },
    {
      number: "118",
      name: "Weigh Down",
      cost: ["b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "119",
      name: "Withercrown",
      cost: ["1", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["other"],
        },
      ],
    },
    {
      number: "120",
      name: "Arni Brokenbrow",
      cost: ["2", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "haste",
        },
        {
          guide: "khm-boast",
          categories: ["all"],
        },
      ],
    },
    {
      number: "121",
      name: "Axgard Cavalry",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "haste",
        },
      ],
    },
    {
      number: "122",
      name: "Basalt Ravager",
      cost: ["3", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "khm-changeling",
          categories: ["payoffs"],
        },
        {
          guide: "khm-giants",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "123",
      name: "Birgi, God of Storytelling // Harnfel, Horn of Bounty",
      cost: ["2", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ramp",
        },
        {
          guide: "khm-boast",
          categories: ["payoffs"],
        },
        {
          guide: "khm-mdfc",
        },
      ],
    },
    {
      number: "124",
      name: "Breakneck Berserker",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "haste",
        },
      ],
    },
    {
      number: "125",
      name: "Calamity Bearer",
      cost: ["2", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-giants",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "126",
      name: "Cinderheart Giant",
      cost: ["5", "r", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "khm-giants",
          categories: ["all"],
        },
      ],
    },
    {
      number: "127",
      name: "Craven Hulk",
      cost: ["3", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-giants",
          categories: ["all"],
        },
      ],
    },
    {
      number: "128",
      name: "Crush the Weak",
      cost: ["2", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["boardwipe"],
        },
        {
          guide: "boardwipe",
        },
        {
          guide: "khm-foretell",
          cost: ["r"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "129",
      name: "Demon Bolt",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["r"],
          categories: ["board", "foretell"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "khm-foretell",
          cost: ["r"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "130",
      name: "Doomskar Titan",
      cost: ["4", "r", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "haste",
        },
        {
          guide: "masspump",
        },
        {
          guide: "khm-foretell",
          cost: ["4", "r"],
          categories: ["all"],
        },
        {
          guide: "khm-giants",
          categories: ["all"],
        },
      ],
    },
    {
      number: "131",
      name: "Dragonkin Berserker",
      cost: ["1", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-boast",
          categories: ["payoffs"],
        },
        {
          guide: "khm-boast",
          categories: ["all"],
        },
      ],
    },
    {
      number: "132",
      name: "Dual Strike",
      cost: ["r", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["r"],
          categories: ["board", "foretell"],
        },
        {
          guide: "khm-foretell",
          cost: ["r"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "133",
      name: "Dwarven Hammer",
      cost: ["2", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-equipment",
          categories: ["all"],
        },
      ],
    },
    {
      number: "134",
      name: "Dwarven Reinforcements",
      cost: ["3", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-foretell",
          cost: ["1", "r"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "135",
      name: "Fearless Liberator",
      cost: ["1", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-boast",
          categories: ["all"],
        },
      ],
    },
    {
      number: "136",
      name: "Fearless Pup",
      cost: ["r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-boast",
          categories: ["all"],
        },
      ],
    },
    {
      number: "137",
      name: "Frenzied Raider",
      cost: ["1", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-boast",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "138",
      name: "Frost Bite",
      cost: ["r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["board"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "139",
      name: "Goldspan Dragon",
      cost: ["3", "r", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "haste",
        },
        {
          guide: "fixing",
        },
        {
          guide: "ramp",
        },
      ],
    },
    {
      number: "140",
      name: "Hagi Mob",
      cost: ["4", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "ping",
        },
        {
          guide: "khm-boast",
          categories: ["all"],
        },
      ],
    },
    {
      number: "141",
      name: "Immersturm Raider",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "142",
      name: "Magda, Brazen Outlaw",
      cost: ["1", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "143",
      name: "Open the Omenpaths",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["board"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "ramp",
        },
        {
          guide: "masspump",
        },
      ],
    },
    {
      number: "144",
      name: "Provoke the Trolls",
      cost: ["3", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["board"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "145",
      name: "Quakebringer",
      cost: ["3", "r", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-foretell",
          cost: ["2", "r", "r"],
          categories: ["all"],
        },
        {
          guide: "khm-giants",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "146",
      name: "Reckless Crew",
      cost: ["3", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-equipment",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "147",
      name: "Run Amok",
      cost: ["1", "r"],
      rarity: "c",
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
      number: "148",
      name: "Rune of Speed",
      cost: ["1", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "haste",
        },
        {
          guide: "khm-equipment",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "149",
      name: "Seize the Spoils",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "ramp",
        },
      ],
    },
    {
      number: "150",
      name: "Shackles of Treachery",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "haste",
        },
        {
          guide: "threaten",
        },
      ],
    },
    {
      number: "151",
      name: "Smashing Success",
      cost: ["3", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["board"],
        },
        {
          guide: "disenchant",
        },
      ],
    },
    {
      number: "152",
      name: "Squash",
      cost: ["4", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["board"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "khm-giants",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "153",
      name: "Tibalt's Trickery",
      cost: ["1", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["counterspell"],
        },
        {
          guide: "counterspell",
        },
      ],
    },
    {
      number: "154",
      name: "Toralf, God of Fury // Toralf's Hammer",
      cost: ["2", "r", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "khm-mdfc",
        },
        {
          guide: "khm-equipment",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "155",
      name: "Tormentor's Helm",
      cost: ["r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-equipment",
          categories: ["all"],
        },
      ],
    },
    {
      number: "156",
      name: "Tundra Fumarole",
      cost: ["1", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "ramp",
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "157",
      name: "Tuskeri Firewalker",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-boast",
          categories: ["all"],
        },
      ],
    },
    {
      number: "158",
      name: "Vault Robber",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "159",
      name: "Arachnoform",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-changeling",
          categories: ["all"],
        },
      ],
    },
    {
      number: "160",
      name: "Battle Mammoth",
      cost: ["3", "g", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-foretell",
          cost: ["2", "g", "g"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "161",
      name: "Blessing of Frost",
      cost: ["3", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "162",
      name: "Blizzard Brawl",
      cost: ["g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "163",
      name: "Boreal Outrider",
      cost: ["2", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
        {
          guide: "khm-elves",
          categories: ["all"],
        },
      ],
    },
    {
      number: "164",
      name: "Broken Wings",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["board"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "disenchant",
        },
      ],
    },
    {
      number: "165",
      name: "Elderleaf Mentor",
      cost: ["3", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-elves",
          categories: ["all"],
        },
      ],
    },
    {
      number: "166",
      name: "Elven Bow",
      cost: ["g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-elves",
          categories: ["all"],
        },
        {
          guide: "khm-equipment",
          categories: ["all"],
        },
      ],
    },
    {
      number: "167",
      name: "Elvish Warmaster",
      cost: ["1", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-elves",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "168",
      name: "Esika, God of the Tree // The Prismatic Bridge",
      cost: ["1", "g", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "ramp",
        },
        {
          guide: "khm-mdfc",
        },
      ],
    },
    {
      number: "169",
      name: "Esika's Chariot",
      cost: ["3", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "170",
      name: "Fynn, the Fangbearer",
      cost: ["1", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "171",
      name: "Glittering Frost",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "ramp",
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "172",
      name: "Gnottvold Recluse",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "173",
      name: "Grizzled Outrider",
      cost: ["4", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-elves",
          categories: ["all"],
        },
      ],
    },
    {
      number: "174",
      name: "Guardian Gladewalker",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-changeling",
          categories: ["all"],
        },
      ],
    },
    {
      number: "175",
      name: "Horizon Seeker",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-boast",
          categories: ["all"],
        },
        {
          guide: "fixing",
        },
      ],
    },
    {
      number: "176",
      name: "Icehide Troll",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "177",
      name: "In Search of Greatness",
      cost: ["g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "178",
      name: "Jaspera Sentinel",
      cost: ["g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "ramp",
        },
        {
          guide: "khm-elves",
          categories: ["all"],
        },
      ],
    },
    {
      number: "179",
      name: "Jorn, God of Winter // Kaldring, the Rimestaff",
      cost: ["2", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-mdfc",
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "180",
      name: "King Harald's Revenge",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "181",
      name: "Kolvori, God of Kinship // The Ringhart Crest",
      cost: ["2", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ramp",
        },
        {
          guide: "khm-mdfc",
        },
      ],
    },
    {
      number: "182",
      name: "Littjara Glade-Warden",
      cost: ["3", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-changeling",
          categories: ["all"],
        },
      ],
    },
    {
      number: "183",
      name: "Mammoth Growth",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["g"],
          categories: ["board", "foretell"],
        },
        {
          guide: "khm-foretell",
          cost: ["g"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "184",
      name: "Masked Vandal",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "removal",
          categories: ["other"],
        },
        {
          guide: "disenchant",
        },
        {
          guide: "khm-changeling",
          categories: ["all"],
        },
      ],
    },
    {
      number: "185",
      name: "Old-Growth Troll",
      cost: ["g", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "186",
      name: "Path to the World Tree",
      cost: ["1", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "fixing",
        },
      ],
    },
    {
      number: "187",
      name: "Ravenous Lindwurm",
      cost: ["4", "g", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
        },
      ],
    },
    {
      number: "188",
      name: "Realmwalker",
      cost: ["2", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-changeling",
          categories: ["all"],
        },
      ],
    },
    {
      number: "189",
      name: "Rootless Yew",
      cost: ["3", "g", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "190",
      name: "Roots of Wisdom",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-elves",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "191",
      name: "Rune of Might",
      cost: ["1", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-equipment",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "192",
      name: "Sarulf's Packmate",
      cost: ["3", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-foretell",
          cost: ["1", "g"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "193",
      name: "Sculptor of Winter",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ramp",
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
        {
          guide: "khm-elves",
          categories: ["all"],
        },
      ],
    },
    {
      number: "194",
      name: "Snakeskin Veil",
      cost: ["g"],
      rarity: "c",
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
      number: "195",
      name: "Spirit of the Aldergard",
      cost: ["3", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "196",
      name: "Struggle for Skemfar",
      cost: ["3", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "khm-foretell",
          cost: ["g"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "197",
      name: "Toski, Bearer of Secrets",
      cost: ["3", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "198",
      name: "Tyvar Kell",
      cost: ["2", "g", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "ramp",
        },
        {
          guide: "khm-elves",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "199",
      name: "Vorinclex, Monstrous Raider",
      cost: ["4", "g", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "haste",
        },
      ],
    },
    {
      number: "200",
      name: "Aegar, the Freezing Flame",
      cost: ["1", "u", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-giants",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "201",
      name: "Arni Slays the Troll",
      cost: ["r", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "ramp",
        },
      ],
    },
    {
      number: "202",
      name: "Ascent of the Worthy",
      cost: ["1", "w", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "203",
      name: "Battle for Bretagard",
      cost: ["1", "g", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-elves",
          categories: ["all"],
        },
      ],
    },
    {
      number: "204",
      name: "Battle of Frost and Fire",
      cost: ["3", "u", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["boardwipe"],
        },
        {
          guide: "boardwipe",
        },
        {
          guide: "khm-giants",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "205",
      name: "The Bears of Littjara",
      cost: ["1", "g", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-changeling",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "206",
      name: "Binding the Old Gods",
      cost: ["2", "b", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "ramp",
        },
      ],
    },
    {
      number: "207",
      name: "The Bloodsky Massacre",
      cost: ["1", "b", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "ramp",
        },
      ],
    },
    {
      number: "208",
      name: "Fall of the Impostor",
      cost: ["1", "g", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "209",
      name: "Firja, Judge of Valor",
      cost: ["2", "w", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "khm-secondspell",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "210",
      name: "Firja's Retribution",
      cost: ["1", "w", "w", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "211",
      name: "Forging the Tyrite Sword",
      cost: ["1", "r", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-equipment",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "212",
      name: "Harald, King of Skemfar",
      cost: ["1", "b", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-elves",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "213",
      name: "Harald Unites the Elves",
      cost: ["2", "b", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-elves",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "214",
      name: "Immersturm Predator",
      cost: ["2", "b", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "215",
      name: "Invasion of the Giants",
      cost: ["u", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-giants",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "216",
      name: "Kardur, Doomscourge",
      cost: ["2", "b", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
        },
      ],
    },
    {
      number: "217",
      name: "Kardur's Vicious Return",
      cost: ["2", "b", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "discard",
        },
        {
          guide: "haste",
        },
      ],
    },
    {
      number: "218",
      name: "Kaya the Inexorable",
      cost: ["3", "w", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "219",
      name: "King Narfi's Betrayal",
      cost: ["1", "u", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mill",
        },
      ],
    },
    {
      number: "220",
      name: "Koll, the Forgemaster",
      cost: ["r", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "221",
      name: "Koma, Cosmos Serpent",
      cost: ["3", "g", "g", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "222",
      name: "Maja, Bretagard Protector",
      cost: ["2", "g", "w", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "223",
      name: "Moritte of the Frost",
      cost: ["2", "g", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
        {
          guide: "khm-changeling",
          categories: ["all"],
        },
      ],
    },
    {
      number: "224",
      name: "Narfi, Betrayer King",
      cost: ["3", "u", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "225",
      name: "Niko Aris",
      cost: ["x", "w", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "226",
      name: "Niko Defies Destiny",
      cost: ["1", "w", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "ramp",
        },
      ],
    },
    {
      number: "227",
      name: "The Raven's Warning",
      cost: ["1", "w", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "228",
      name: "Sarulf, Realm Eater",
      cost: ["1", "b", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "229",
      name: "Showdown of the Skalds",
      cost: ["2", "r", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "230",
      name: "Svella, Ice Shaper",
      cost: ["1", "r", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "231",
      name: "The Three Seasons",
      cost: ["g", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "232",
      name: "The Trickster-God's Heist",
      cost: ["2", "u", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "mindcontrol",
        },
      ],
    },
    {
      number: "233",
      name: "Vega, the Watcher",
      cost: ["1", "w", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-foretell",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "234",
      name: "Waking the Trolls",
      cost: ["4", "r", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "ramp",
        },
      ],
    },
    {
      number: "235",
      name: "Bloodline Pretender",
      cost: ["3"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-changeling",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "236",
      name: "Colossal Plow",
      cost: ["2"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "ramp",
        },
      ],
    },
    {
      number: "237",
      name: "Cosmos Elixir",
      cost: ["4"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "lifegain",
        },
      ],
    },
    {
      number: "238",
      name: "Funeral Longboat",
      cost: ["2"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "239",
      name: "Goldvein Pick",
      cost: ["2"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-equipment",
          categories: ["all"],
        },
      ],
    },
    {
      number: "240",
      name: "Maskwood Nexus",
      cost: ["4"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-changeling",
          categories: ["all"],
        },
      ],
    },
    {
      number: "241",
      name: "Pyre of Heroes",
      cost: ["2"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-changeling",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "242",
      name: "Raiders' Karve",
      cost: ["3"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "ramp",
        },
      ],
    },
    {
      number: "243",
      name: "Raven Wings",
      cost: ["2"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-equipment",
          categories: ["all"],
        },
      ],
    },
    {
      number: "244",
      name: "Replicating Ring",
      cost: ["3"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "ramp",
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "245",
      name: "Runed Crown",
      cost: ["3"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "khm-equipment",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "246",
      name: "Scorn Effigy",
      cost: ["3"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "khm-foretell",
          cost: ["0"],
          categories: ["all"],
        },
      ],
    },
    {
      number: "247",
      name: "Weathered Runestone",
      cost: ["2"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "248",
      name: "Alpine Meadow",
      cost: [],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "249",
      name: "Arctic Treeline",
      cost: [],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "250",
      name: "Axgard Armory",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "khm-equipment",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "251",
      name: "Barkchannel Pathway // Tidechannel Pathway",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "khm-mdfc",
        },
      ],
    },
    {
      number: "252",
      name: "Blightstep Pathway // Searstep Pathway",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "khm-mdfc",
        },
      ],
    },
    {
      number: "253",
      name: "Bretagard Stronghold",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "lifegain",
        },
      ],
    },
    {
      number: "254",
      name: "Darkbore Pathway // Slitherbore Pathway",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "khm-mdfc",
        },
      ],
    },
    {
      number: "255",
      name: "Faceless Haven",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "khm-snow",
          categories: ["payoffs"],
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
        {
          guide: "khm-changeling",
          categories: ["all"],
        },
      ],
    },
    {
      number: "256",
      name: "Gates of Istfell",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "lifegain",
        },
      ],
    },
    {
      number: "257",
      name: "Glacial Floodplain",
      cost: [],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "258",
      name: "Gnottvold Slumbermound",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
      ],
    },
    {
      number: "259",
      name: "Great Hall of Starnheim",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
      ],
    },
    {
      number: "260",
      name: "Hengegate Pathway // Mistgate Pathway",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "khm-mdfc",
        },
      ],
    },
    {
      number: "261",
      name: "Highland Forest",
      cost: [],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "262",
      name: "Ice Tunnel",
      cost: [],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "263",
      name: "Immersturm Skullcairn",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "discard",
        },
      ],
    },
    {
      number: "264",
      name: "Littjara Mirrorlake",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
      ],
    },
    {
      number: "265",
      name: "Port of Karfell",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
      ],
    },
    {
      number: "266",
      name: "Rimewood Falls",
      cost: [],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "267",
      name: "Shimmerdrift Vale",
      cost: [],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "268",
      name: "Skemfar Elderhall",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "khm-elves",
          categories: ["all"],
        },
      ],
    },
    {
      number: "269",
      name: "Snowfield Sinkhole",
      cost: [],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "270",
      name: "Sulfurous Mire",
      cost: [],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "271",
      name: "Surtland Frostpyre",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "removal",
          categories: ["boardwipe"],
        },
        {
          guide: "boardwipe",
        },
      ],
    },
    {
      number: "272",
      name: "Tyrite Sanctum",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
      ],
    },
    {
      number: "273",
      name: "Volatile Fjord",
      cost: [],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "274",
      name: "Woodland Chasm",
      cost: [],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "khm-snow",
          categories: ["all"],
        },
      ],
    },
    {
      number: "275",
      name: "The World Tree",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "fixing",
        },
      ],
    },
  ],
};

export default format;
