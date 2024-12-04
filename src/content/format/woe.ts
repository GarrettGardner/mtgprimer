import type { IFormatConfig } from "@/models";

const format: IFormatConfig = {
  code: "woe",
  name: "Wilds of Eldraine",
  includeFormats: ["wot"],
  guides: {
    full: {
      name: "Full Guide",
      defaultGrouping: "none",
      defaultOrdering: "number",
      categories: {
        creature: "Creature",
        spell: "Spell",
        land: "Land",
      },
    },
    instants: {
      name: "Instants Guide",
      defaultGrouping: "mv",
      defaultOrdering: "rarity",
      categories: {
        board: "Board",
        counterspell: "Counterspell",
        other: "Other",
      },
    },
    bounce: {},
    counterspell: {},
    discard: {},
    disenchant: {},
    falter: {},
    fixing: {},
    fog: {},
    haste: {},
    lifegain: {},
    ramp: {},
    masspump: {},
    ping: {},
    mill: {},
    mindcontrol: {},
    threaten: {},
    wrath: {},
    "woe-bargain": {
      name: "Bargain",
      categories: {
        default: "",
      },
    },
    "woe-celebration": {
      name: "Celebration",
      categories: {
        default: "",
      },
    },
    "woe-role": {
      name: "Role",
      categories: {
        default: "",
      },
    },
    "woe-food": {
      name: "Food",
      categories: {
        default: "",
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
      guides: ["woe-bargain", "woe-celebration", "woe-role", "woe-food"],
    },
  },
  cards: [
    {
      number: "1",
      name: "Archon of the Wild Rose",
      cost: ["2", "w", "w"],
      rarity: "r",
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
      number: "2",
      name: "Archon's Glory",
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
        {
          guide: "lifegain",
        },
        {
          guide: "woe-bargain",
        },
      ],
    },
    {
      number: "3",
      name: "Armory Mice",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "woe-celebration",
        },
      ],
    },
    {
      number: "4",
      name: "Besotted Knight (Besotted Knight // Betroth the Beast)",
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
      number: "4",
      name: "Betroth the Beast (Besotted Knight // Betroth the Beast)",
      cost: ["w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "5",
      name: "Break the Spell",
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
        {
          guide: "disenchant",
        },
      ],
    },
    {
      number: "6",
      name: "Charmed Clothier",
      cost: ["4", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "7",
      name: "Cheeky House-Mouse (Cheeky House-Mouse // Squeak By)",
      cost: ["w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "7",
      name: "Squeak By (Cheeky House-Mouse // Squeak By)",
      cost: ["w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "8",
      name: "Cooped Up",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "9",
      name: "Cursed Courtier",
      cost: ["2", "w"],
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
          guide: "woe-role",
        },
      ],
    },
    {
      number: "10",
      name: "Discerning Financier",
      cost: ["2", "w"],
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
          guide: "ramp",
        },
      ],
    },
    {
      number: "11",
      name: "Dutiful Griffin",
      cost: ["3", "w", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "12",
      name: "Eerie Interference",
      cost: ["2", "w"],
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
          guide: "fog",
        },
      ],
    },
    {
      number: "13",
      name: "Expel the Interlopers",
      cost: ["3", "w", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["boardwipe"],
        },
        {
          guide: "boardwipe",
        },
      ],
    },
    {
      number: "14",
      name: "Frostbridge Guard",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "interaction",
          categories: ["temporary"],
        },
      ],
    },
    {
      number: "15",
      name: "Gallant Pie-Wielder",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "woe-celebration",
        },
      ],
    },
    {
      number: "16",
      name: "Glass Casket",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "17",
      name: "Hopeful Vigil",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "18",
      name: "Kellan's Lightblades",
      cost: ["1", "w"],
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
          guide: "interaction",
          categories: ["removal"],
        },
        {
          guide: "woe-bargain",
        },
      ],
    },
    {
      number: "19",
      name: "Knight of Doves",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "20",
      name: "Moment of Valor",
      cost: ["2", "w"],
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
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "21",
      name: "Moonshaker Cavalry",
      cost: ["5", "w", "w", "w"],
      rarity: "m",
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
      number: "22",
      name: "Plunge into Winter",
      cost: ["1", "w"],
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
          guide: "interaction",
          categories: ["temporary"],
        },
      ],
    },
    {
      number: "23",
      name: "The Princess Takes Flight",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "24",
      name: "Protective Parents",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "25",
      name: "Regal Bunnicorn",
      cost: ["1", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "26",
      name: "Return Triumphant",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "27",
      name: "Rimefur Reindeer",
      cost: ["3", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "interaction",
          categories: ["temporary"],
        },
      ],
    },
    {
      number: "28",
      name: "Savior of the Sleeping",
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
      number: "29",
      name: "Slumbering Keepguard",
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
      number: "30",
      name: "Solitary Sanctuary",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["temporary"],
        },
      ],
    },
    {
      number: "31",
      name: "Spellbook Vendor",
      cost: ["1", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "32",
      name: "Stockpiling Celebrant",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "interaction",
          categories: ["bounce"],
        },
      ],
    },
    {
      number: "33",
      name: "Stroke of Midnight",
      cost: ["2", "w"],
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
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "34",
      name: "A Tale for the Ages",
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
      ],
    },
    {
      number: "35",
      name: "Three Blind Mice",
      cost: ["2", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "masspump",
        },
      ],
    },
    {
      number: "36",
      name: "Tuinvale Guide",
      cost: ["3", "w"],
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
          guide: "woe-celebration",
        },
      ],
    },
    {
      number: "37",
      name: "Unassuming Sage",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "38",
      name: "Virtue of Loyalty (Virtue of Loyalty // Ardenvale Fealty)",
      cost: ["3", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "masspump",
        },
      ],
    },
    {
      number: "38",
      name: "Ardenvale Fealty (Virtue of Loyalty // Ardenvale Fealty)",
      cost: ["1", "w"],
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
      number: "39",
      name: "Werefox Bodyguard",
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
          guide: "lifegain",
        },
        {
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "40",
      name: "Aquatic Alchemist (Aquatic Alchemist // Bubble Up)",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "40",
      name: "Bubble Up (Aquatic Alchemist // Bubble Up)",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "41",
      name: "Archive Dragon",
      cost: ["4", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "42",
      name: "Asinine Antics",
      cost: ["2", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["board"],
          cost: ["4", "u", "u"],
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "43",
      name: "Beluna's Gatekeeper (Beluna's Gatekeeper // Entry Denied)",
      cost: ["5", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "43",
      name: "Entry Denied (Beluna's Gatekeeper // Entry Denied)",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["bounce"],
        },
        {
          guide: "bounce",
        },
      ],
    },
    {
      number: "44",
      name: "Bitter Chill",
      cost: ["1", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "45",
      name: "Chancellor of Tales",
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
      number: "46",
      name: "Diminisher Witch",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "woe-bargain",
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "47",
      name: "Disdainful Stroke",
      cost: ["1", "u"],
      rarity: "u",
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
      number: "48",
      name: "Extraordinary Journey",
      cost: ["x", "x", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["temporary"],
        },
      ],
    },
    {
      number: "49",
      name: "Farsight Ritual",
      cost: ["2", "u", "u"],
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
          guide: "woe-bargain",
        },
      ],
    },
    {
      number: "50",
      name: "Freeze in Place",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["temporary"],
        },
      ],
    },
    {
      number: "51",
      name: "Gadwick's First Duel",
      cost: ["1", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "52",
      name: "Galvanic Giant (Galvanic Giant // Storm Reading)",
      cost: ["3", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "interaction",
          categories: ["temporary"],
        },
      ],
    },
    {
      number: "52",
      name: "Storm Reading (Galvanic Giant // Storm Reading)",
      cost: ["5", "u", "u"],
      rarity: "u",
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
      number: "53",
      name: "Horned Loch-Whale (Horned Loch-Whale // Lagoon Breach)",
      cost: ["4", "u", "u"],
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
      ],
    },
    {
      number: "53",
      name: "Lagoon Breach (Horned Loch-Whale // Lagoon Breach)",
      cost: ["1", "u"],
      rarity: "r",
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
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "54",
      name: "Ice Out",
      cost: ["1", "u", "u"],
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
        {
          guide: "woe-bargain",
        },
      ],
    },
    {
      number: "55",
      name: "Icewrought Sentry",
      cost: ["2", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "interaction",
          categories: ["temporary"],
        },
      ],
    },
    {
      number: "56",
      name: "Ingenious Prodigy",
      cost: ["x", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "57",
      name: "Into the Fae Court",
      cost: ["3", "u", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "58",
      name: "Johann's Stopgap",
      cost: ["3", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["bounce"],
        },
        {
          guide: "bounce",
        },
        {
          guide: "woe-bargain",
        },
      ],
    },
    {
      number: "59",
      name: "Living Lectern",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "60",
      name: "Merfolk Coralsmith",
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
      number: "61",
      name: "Misleading Motes",
      cost: ["3", "u"],
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
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "62",
      name: "Mocking Sprite",
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
      number: "63",
      name: "Obyra's Attendants (Obyra's Attendants // Desperate Parry)",
      cost: ["4", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "63",
      name: "Desperate Parry (Obyra's Attendants // Desperate Parry)",
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
      ],
    },
    {
      number: "64",
      name: "Picklock Prankster (Picklock Prankster // Free the Fae)",
      cost: ["1", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "64",
      name: "Free the Fae (Picklock Prankster // Free the Fae)",
      cost: ["1", "u"],
      rarity: "u",
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
          guide: "mill",
        },
      ],
    },
    {
      number: "65",
      name: "Quick Study",
      cost: ["2", "u"],
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
      number: "66",
      name: "Sleep-Cursed Faerie",
      cost: ["u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "67",
      name: "Sleight of Hand",
      cost: ["u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "68",
      name: "Snaremaster Sprite",
      cost: ["u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "interaction",
          categories: ["temporary"],
        },
      ],
    },
    {
      number: "69",
      name: "Spell Stutter",
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
      number: "70",
      name: "Splashy Spellcaster",
      cost: ["3", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "71",
      name: "Stormkeld Prowler",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "72",
      name: "Succumb to the Cold",
      cost: ["2", "u"],
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
          guide: "interaction",
          categories: ["temporary"],
        },
      ],
    },
    {
      number: "73",
      name: "Talion's Messenger",
      cost: ["2", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "74",
      name: "Tenacious Tomeseeker",
      cost: ["2", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "woe-bargain",
        },
      ],
    },
    {
      number: "75",
      name: "Vantress Transmuter (Vantress Transmuter // Croaking Curse)",
      cost: ["3", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "75",
      name: "Croaking Curse (Vantress Transmuter // Croaking Curse)",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["temporary"],
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "76",
      name: "Virtue of Knowledge (Virtue of Knowledge // Vantress Visions)",
      cost: ["4", "u"],
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
      name: "Vantress Visions (Virtue of Knowledge // Vantress Visions)",
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
      number: "77",
      name: "Water Wings",
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
      ],
    },
    {
      number: "78",
      name: "Ashiok, Wicked Manipulator",
      cost: ["3", "b", "b"],
      rarity: "m",
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
      number: "79",
      name: "Ashiok's Reaper",
      cost: ["3", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "80",
      name: "Back for Seconds",
      cost: ["2", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "woe-bargain",
        },
      ],
    },
    {
      number: "81",
      name: "Barrow Naughty",
      cost: ["1", "b"],
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
      number: "82",
      name: "Beseech the Mirror",
      cost: ["1", "b", "b", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "woe-bargain",
        },
      ],
    },
    {
      number: "83",
      name: "Candy Grapple",
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
        {
          guide: "interaction",
          categories: ["removal"],
        },
        {
          guide: "woe-bargain",
        },
      ],
    },
    {
      number: "84",
      name: "Conceited Witch (Conceited Witch // Price of Beauty)",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "84",
      name: "Price of Beauty (Conceited Witch // Price of Beauty)",
      cost: ["b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "85",
      name: "Dream Spoilers",
      cost: ["3", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "interaction",
          categories: ["removal"],
        },
        {
          guide: "ping",
        },
      ],
    },
    {
      number: "86",
      name: "Ego Drain",
      cost: ["b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "discard",
        },
      ],
    },
    {
      number: "87",
      name: "The End",
      cost: ["2", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["board"],
          cost: ["b", "b"],
        },
        {
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "88",
      name: "Eriette's Whisper",
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
          guide: "woe-role",
        },
      ],
    },
    {
      number: "89",
      name: "Faerie Dreamthief",
      cost: ["b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "90",
      name: "Faerie Fencing",
      cost: ["x", "b"],
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
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "91",
      name: "Feed the Cauldron",
      cost: ["2", "b"],
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
          guide: "interaction",
          categories: ["removal"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "woe-food",
        },
      ],
    },
    {
      number: "92",
      name: "Fell Horseman (Fell Horseman // Deathly Ride)",
      cost: ["3", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "92",
      name: "Deathly Ride (Fell Horseman // Deathly Ride)",
      cost: ["1", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "93",
      name: "Gumdrop Poisoner (Gumdrop Poisoner // Tempt with Treats)",
      cost: ["2", "b"],
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
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "93",
      name: "Tempt with Treats (Gumdrop Poisoner // Tempt with Treats)",
      cost: ["b"],
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
          guide: "woe-food",
        },
      ],
    },
    {
      number: "94",
      name: "High Fae Negotiator",
      cost: ["3", "b", "b"],
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
          guide: "woe-bargain",
        },
      ],
    },
    {
      number: "95",
      name: "Hopeless Nightmare",
      cost: ["b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "discard",
        },
      ],
    },
    {
      number: "96",
      name: "Lich-Knights' Conquest",
      cost: ["4", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "97",
      name: "Lord Skitter, Sewer King",
      cost: ["2", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "98",
      name: "Lord Skitter's Blessing",
      cost: ["1", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "99",
      name: "Lord Skitter's Butcher",
      cost: ["2", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "falter",
        },
      ],
    },
    {
      number: "100",
      name: "Mintstrosity",
      cost: ["1", "b"],
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
          guide: "woe-food",
        },
      ],
    },
    {
      number: "101",
      name: "Not Dead After All",
      cost: ["b"],
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
          guide: "woe-role",
        },
      ],
    },
    {
      number: "102",
      name: "Rankle's Prank",
      cost: ["2", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["removal"],
        },
        {
          guide: "discard",
        },
      ],
    },
    {
      number: "103",
      name: "Rat Out",
      cost: ["b"],
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
          guide: "interaction",
          categories: ["removal"],
        },
        {
          guide: "ping",
        },
      ],
    },
    {
      number: "104",
      name: "Rowan's Grim Search",
      cost: ["2", "b"],
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
          guide: "woe-bargain",
        },
      ],
    },
    {
      number: "105",
      name: "Scream Puff",
      cost: ["4", "b"],
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
          guide: "woe-food",
        },
      ],
    },
    {
      number: "106",
      name: "Shatter the Oath",
      cost: ["3", "b", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["removal"],
        },
        {
          guide: "disenchant",
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "107",
      name: "Specter of Mortality",
      cost: ["3", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "interaction",
          categories: ["boardwipe"],
        },
        {
          guide: "boardwipe",
        },
      ],
    },
    {
      number: "108",
      name: "Spiteful Hexmage",
      cost: ["b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "109",
      name: "Stingblade Assassin",
      cost: ["3", "b"],
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
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "110",
      name: "Sugar Rush",
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
      number: "111",
      name: "Sweettooth Witch",
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
          guide: "woe-food",
        },
      ],
    },
    {
      number: "112",
      name: "Taken by Nightmares",
      cost: ["2", "b", "b"],
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
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "113",
      name: "Tangled Colony",
      cost: ["1", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "114",
      name: "Twisted Sewer-Witch",
      cost: ["3", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "115",
      name: "Virtue of Persistence (Virtue of Persistence // Locthwain Scorn)",
      cost: ["5", "b", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "115",
      name: "Locthwain Scorn (Virtue of Persistence // Locthwain Scorn)",
      cost: ["1", "b"],
      rarity: "m",
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
      number: "116",
      name: "Voracious Vermin",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "117",
      name: "Warehouse Tabby",
      cost: ["b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "118",
      name: "Wicked Visitor",
      cost: ["1", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "119",
      name: "The Witch's Vanity",
      cost: ["1", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["removal"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "woe-food",
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "120",
      name: "Belligerent of the Ball",
      cost: ["2", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "woe-celebration",
        },
      ],
    },
    {
      number: "121",
      name: "Bellowing Bruiser (Bellowing Bruiser // Beat a Path)",
      cost: ["4", "r"],
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
      number: "121",
      name: "Beat a Path (Bellowing Bruiser // Beat a Path)",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "falter",
        },
      ],
    },
    {
      number: "122",
      name: "Bespoke Battlegarb",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "woe-celebration",
        },
      ],
    },
    {
      number: "123",
      name: "Boundary Lands Ranger",
      cost: ["1", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "124",
      name: "Charming Scoundrel",
      cost: ["1", "r"],
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
          guide: "woe-role",
        },
      ],
    },
    {
      number: "125",
      name: "Cut In",
      cost: ["3", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["removal"],
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "126",
      name: "Edgewall Pack",
      cost: ["3", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "127",
      name: "Embereth Veteran",
      cost: ["r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "128",
      name: "Flick a Coin",
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
          guide: "interaction",
          categories: ["removal"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "ramp",
        },
        {
          guide: "ping",
        },
      ],
    },
    {
      number: "129",
      name: "Food Fight",
      cost: ["1", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["removal"],
        },
        {
          guide: "woe-food",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "130",
      name: "Frantic Firebolt",
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
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "131",
      name: "Gnawing Crescendo",
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
          guide: "masspump",
        },
      ],
    },
    {
      number: "132",
      name: "Goddric, Cloaked Reveler",
      cost: ["1", "r", "r"],
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
          guide: "woe-celebration",
        },
      ],
    },
    {
      number: "133",
      name: "Grabby Giant (Grabby Giant // That's Mine)",
      cost: ["3", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "133",
      name: "That's Mine (Grabby Giant // That's Mine)",
      cost: ["1", "r"],
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
      number: "134",
      name: "Grand Ball Guest",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "woe-celebration",
        },
      ],
    },
    {
      number: "135",
      name: "Harried Spearguard",
      cost: ["r"],
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
      number: "136",
      name: "Hearth Elemental (Hearth Elemental // Stoke Genius)",
      cost: ["5", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "136",
      name: "Stoke Genius (Hearth Elemental // Stoke Genius)",
      cost: ["1", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "137",
      name: "Imodane, the Pyrohammer",
      cost: ["2", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "138",
      name: "Kindled Heroism",
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
      ],
    },
    {
      number: "139",
      name: "Korvold and the Noble Thief",
      cost: ["3", "r"],
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
      ],
    },
    {
      number: "140",
      name: "Merry Bards",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "141",
      name: "Minecart Daredevil (Minecart Daredevil // Ride the Rails)",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "141",
      name: "Ride the Rails (Minecart Daredevil // Ride the Rails)",
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
      number: "142",
      name: "Monstrous Rage",
      cost: ["r"],
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
          guide: "woe-role",
        },
      ],
    },
    {
      number: "143",
      name: "Raging Battle Mouse",
      cost: ["1", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "woe-celebration",
        },
      ],
    },
    {
      number: "144",
      name: "Ratcatcher Trainee (Ratcatcher Trainee // Pest Problem)",
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
      number: "144",
      name: "Pest Problem (Ratcatcher Trainee // Pest Problem)",
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
      ],
    },
    {
      number: "145",
      name: "Realm-Scorcher Hellkite",
      cost: ["4", "r", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "interaction",
          categories: ["removal"],
        },
        {
          guide: "haste",
        },
        {
          guide: "ping",
        },
        {
          guide: "woe-bargain",
        },
      ],
    },
    {
      number: "146",
      name: "Redcap Gutter-Dweller",
      cost: ["2", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "147",
      name: "Redcap Thief",
      cost: ["2", "r"],
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
      ],
    },
    {
      number: "148",
      name: "Rotisserie Elemental",
      cost: ["r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "149",
      name: "Skewer Slinger",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ping",
        },
      ],
    },
    {
      number: "150",
      name: "Song of Totentanz",
      cost: ["x", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "haste",
        },
      ],
    },
    {
      number: "151",
      name: "Stonesplitter Bolt",
      cost: ["x", "r"],
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
          guide: "interaction",
          categories: ["removal"],
        },
        {
          guide: "woe-bargain",
        },
      ],
    },
    {
      number: "152",
      name: "Tattered Ratter",
      cost: ["1", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "153",
      name: "Torch the Tower",
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
          guide: "interaction",
          categories: ["removal"],
        },
        {
          guide: "woe-bargain",
        },
      ],
    },
    {
      number: "154",
      name: "Twisted Fealty",
      cost: ["2", "r"],
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
          guide: "threaten",
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "155",
      name: "Two-Headed Hunter (Two-Headed Hunter // Twice the Rage)",
      cost: ["4", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "155",
      name: "Twice the Rage (Two-Headed Hunter // Twice the Rage)",
      cost: ["1", "r"],
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
      ],
    },
    {
      number: "156",
      name: "Unruly Catapult",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "157",
      name: "Virtue of Courage (Virtue of Courage // Embereth Blaze)",
      cost: ["3", "r", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "157",
      name: "Embereth Blaze (Virtue of Courage // Embereth Blaze)",
      cost: ["1", "r"],
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
        {
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "158",
      name: "Witch's Mark",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "159",
      name: "Witchstalker Frenzy",
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
          cost: ["r"],
        },
        {
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "160",
      name: "Agatha's Champion",
      cost: ["4", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "interaction",
          categories: ["removal"],
        },
        {
          guide: "woe-bargain",
        },
      ],
    },
    {
      number: "161",
      name: "Beanstalk Wurm (Beanstalk Wurm // Plant Beans)",
      cost: ["4", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ramp",
        },
      ],
    },
    {
      number: "161",
      name: "Plant Beans (Beanstalk Wurm // Plant Beans)",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "162",
      name: "Bestial Bloodline",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "163",
      name: "Blossoming Tortoise",
      cost: ["2", "g", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "masspump",
        },
        {
          guide: "mill",
        },
      ],
    },
    {
      number: "164",
      name: "Bramble Familiar (Bramble Familiar // Fetch Quest)",
      cost: ["1", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "interaction",
          categories: ["bounce"],
        },
        {
          guide: "ramp",
        },
      ],
    },
    {
      number: "164",
      name: "Fetch Quest (Bramble Familiar // Fetch Quest)",
      cost: ["5", "g", "g"],
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
      number: "165",
      name: "Brave the Wilds",
      cost: ["g"],
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
          guide: "fixing",
        },
        {
          guide: "woe-bargain",
        },
      ],
    },
    {
      number: "166",
      name: "Commune with Nature",
      cost: ["g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "167",
      name: "Curse of the Werefox",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["removal"],
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "168",
      name: "Elvish Archivist",
      cost: ["1", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "169",
      name: "Feral Encounter",
      cost: ["g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "170",
      name: "Ferocious Werefox (Ferocious Werefox // Guard Change)",
      cost: ["3", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "170",
      name: "Guard Change (Ferocious Werefox // Guard Change)",
      cost: ["1", "g"],
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
          guide: "woe-role",
        },
      ],
    },
    {
      number: "171",
      name: "Graceful Takedown",
      cost: ["1", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "172",
      name: "Gruff Triplets",
      cost: ["3", "g", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "173",
      name: "Hamlet Glutton",
      cost: ["5", "g", "g"],
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
          guide: "woe-bargain",
        },
      ],
    },
    {
      number: "174",
      name: "Hollow Scavenger (Hollow Scavenger // Bakery Raid)",
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
      number: "174",
      name: "Bakery Raid (Hollow Scavenger // Bakery Raid)",
      cost: ["g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "woe-food",
        },
      ],
    },
    {
      number: "175",
      name: "Howling Galefang",
      cost: ["2", "g", "g"],
      rarity: "u",
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
      number: "176",
      name: "The Huntsman's Redemption",
      cost: ["2", "g"],
      rarity: "r",
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
      number: "177",
      name: "Leaping Ambush",
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
      number: "178",
      name: "Night of the Sweets' Revenge",
      cost: ["3", "g"],
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
        {
          guide: "masspump",
        },
        {
          guide: "woe-food",
        },
      ],
    },
    {
      number: "179",
      name: "Redtooth Genealogist",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "180",
      name: "Redtooth Vanguard",
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
      number: "181",
      name: "Return from the Wilds",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "fixing",
        },
        {
          guide: "woe-food",
        },
      ],
    },
    {
      number: "182",
      name: "Rootrider Faun",
      cost: ["1", "g"],
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
      ],
    },
    {
      number: "183",
      name: "Royal Treatment",
      cost: ["g"],
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
          guide: "woe-role",
        },
      ],
    },
    {
      number: "184",
      name: "Sentinel of Lost Lore",
      cost: ["1", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "185",
      name: "Skybeast Tracker",
      cost: ["3", "g"],
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
          guide: "woe-food",
        },
      ],
    },
    {
      number: "186",
      name: "Spider Food",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "disenchant",
        },
        {
          guide: "lifegain",
        },
        {
          guide: "woe-food",
        },
      ],
    },
    {
      number: "187",
      name: "Stormkeld Vanguard (Stormkeld Vanguard // Bear Down)",
      cost: ["4", "g", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "187",
      name: "Bear Down (Stormkeld Vanguard // Bear Down)",
      cost: ["1", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["removal"],
        },
        {
          guide: "disenchant",
        },
      ],
    },
    {
      number: "188",
      name: "Tanglespan Lookout",
      cost: ["2", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "189",
      name: "Territorial Witchstalker",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "190",
      name: "Thunderous Debut",
      cost: ["6", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "woe-bargain",
        },
      ],
    },
    {
      number: "191",
      name: "Titanic Growth",
      cost: ["1", "g"],
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
      number: "192",
      name: "Toadstool Admirer",
      cost: ["g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "193",
      name: "Tough Cookie",
      cost: ["1", "g"],
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
          guide: "woe-food",
          categories: ["default", "payoff"],
        },
      ],
    },
    {
      number: "194",
      name: "Troublemaker Ouphe",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "disenchant",
        },
        {
          guide: "woe-bargain",
        },
      ],
    },
    {
      number: "195",
      name: "Up the Beanstalk",
      cost: ["1", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "196",
      name: "Verdant Outrider",
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
      number: "197",
      name: "Virtue of Strength (Virtue of Strength // Garenbrig Growth)",
      cost: ["5", "g", "g"],
      rarity: "m",
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
      number: "197",
      name: "Garenbrig Growth (Virtue of Strength // Garenbrig Growth)",
      cost: ["g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "198",
      name: "Welcome to Sweettooth",
      cost: ["1", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "woe-food",
        },
      ],
    },
    {
      number: "199",
      name: "Agatha of the Vile Cauldron",
      cost: ["r", "g"],
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
          guide: "masspump",
        },
      ],
    },
    {
      number: "200",
      name: "The Apprentice's Folly",
      cost: ["2", "u", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "haste",
        },
      ],
    },
    {
      number: "201",
      name: "Ash, Party Crasher",
      cost: ["r", "w"],
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
          guide: "woe-celebration",
        },
      ],
    },
    {
      number: "202",
      name: "Eriette of the Charmed Apple",
      cost: ["1", "w", "b"],
      rarity: "m",
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
      number: "203",
      name: "Faunsbane Troll",
      cost: ["2", "b", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "interaction",
          categories: ["removal"],
        },
        {
          guide: "woe-role",
        },
      ],
    },
    {
      number: "204",
      name: "The Goose Mother",
      cost: ["x", "g", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "woe-food",
          categories: ["default", "payoff"],
        },
      ],
    },
    {
      number: "205",
      name: "Greta, Sweettooth Scourge",
      cost: ["1", "b", "g"],
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
          guide: "woe-food",
          categories: ["default", "payoff"],
        },
      ],
    },
    {
      number: "206",
      name: "Hylda of the Icy Crown",
      cost: ["2", "w", "u"],
      rarity: "m",
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
      number: "207",
      name: "Johann, Apprentice Sorcerer",
      cost: ["2", "u", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "208",
      name: "Likeness Looter",
      cost: ["u", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "209",
      name: "Neva, Stalked by Nightmares",
      cost: ["2", "w", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "210",
      name: "Obyra, Dreaming Duelist",
      cost: ["u", "b"],
      rarity: "u",
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
      number: "211",
      name: "Rowan, Scion of War",
      cost: ["1", "b", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "212",
      name: "Ruby, Daring Tracker",
      cost: ["r", "g"],
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
          guide: "fixing",
        },
        {
          guide: "ramp",
        },
      ],
    },
    {
      number: "213",
      name: "Sharae of Numbing Depths",
      cost: ["2", "w", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "interaction",
          categories: ["temporary"],
        },
      ],
    },
    {
      number: "214",
      name: "Syr Armont, the Redeemer",
      cost: ["3", "g", "w"],
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
          guide: "woe-role",
        },
      ],
    },
    {
      number: "215",
      name: "Talion, the Kindly Lord",
      cost: ["2", "u", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "216",
      name: "Totentanz, Swarm Piper",
      cost: ["1", "b", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "217",
      name: "Troyan, Gutsy Explorer",
      cost: ["1", "g", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ramp",
        },
      ],
    },
    {
      number: "218",
      name: "Will, Scion of Peace",
      cost: ["1", "w", "u"],
      rarity: "m",
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
      number: "219",
      name: "Yenna, Redtooth Regent",
      cost: ["2", "g", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "220",
      name: "Beluna Grandsquall (Beluna Grandsquall // Seek Thrills)",
      cost: ["g", "u", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "220",
      name: "Seek Thrills (Beluna Grandsquall // Seek Thrills)",
      cost: ["2", "g", "u", "r"],
      rarity: "m",
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
          guide: "mill",
        },
      ],
    },
    {
      number: "221",
      name: "Callous Sell-Sword (Callous Sell-Sword // Burn Together)",
      cost: ["1", "b"],
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
      name: "Burn Together (Callous Sell-Sword // Burn Together)",
      cost: ["r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "222",
      name: "Cruel Somnophage (Cruel Somnophage // Can't Wake Up)",
      cost: ["1", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "222",
      name: "Can't Wake Up (Cruel Somnophage // Can't Wake Up)",
      cost: ["1", "u"],
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
      number: "223",
      name: "Decadent Dragon (Decadent Dragon // Expensive Taste)",
      cost: ["2", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "223",
      name: "Expensive Taste (Decadent Dragon // Expensive Taste)",
      cost: ["2", "b"],
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
      ],
    },
    {
      number: "224",
      name: "Devouring Sugarmaw (Devouring Sugarmaw // Have for Dinner)",
      cost: ["2", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "224",
      name: "Have for Dinner (Devouring Sugarmaw // Have for Dinner)",
      cost: ["1", "w"],
      rarity: "r",
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
          guide: "woe-food",
        },
      ],
    },
    {
      number: "225",
      name: "Elusive Otter (Elusive Otter // Grove's Bounty)",
      cost: ["u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "225",
      name: "Grove's Bounty (Elusive Otter // Grove's Bounty)",
      cost: ["x", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "226",
      name: "Frolicking Familiar (Frolicking Familiar // Blow Off Steam)",
      cost: ["2", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "226",
      name: "Blow Off Steam (Frolicking Familiar // Blow Off Steam)",
      cost: ["r"],
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
          guide: "interaction",
          categories: ["removal"],
        },
        {
          guide: "ping",
        },
      ],
    },
    {
      number: "227",
      name: "Gingerbread Hunter (Gingerbread Hunter // Puny Snack)",
      cost: ["4", "g"],
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
          guide: "woe-food",
        },
      ],
    },
    {
      number: "227",
      name: "Puny Snack (Gingerbread Hunter // Puny Snack)",
      cost: ["2", "b"],
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
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "228",
      name: "Heartflame Duelist (Heartflame Duelist // Heartflame Slash)",
      cost: ["1", "w"],
      rarity: "r",
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
      number: "228",
      name: "Heartflame Slash (Heartflame Duelist // Heartflame Slash)",
      cost: ["2", "r"],
      rarity: "r",
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
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "229",
      name: "Imodane's Recruiter (Imodane's Recruiter // Train Troops)",
      cost: ["2", "r"],
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
      ],
    },
    {
      number: "229",
      name: "Train Troops (Imodane's Recruiter // Train Troops)",
      cost: ["4", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "230",
      name: "Kellan, the Fae-Blooded (Kellan, the Fae-Blooded // Birthright Boon)",
      cost: ["2", "r"],
      rarity: "m",
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
      number: "230",
      name: "Birthright Boon (Kellan, the Fae-Blooded // Birthright Boon)",
      cost: ["1", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "231",
      name: "Mosswood Dreadknight (Mosswood Dreadknight // Dread Whispers)",
      cost: ["1", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "231",
      name: "Dread Whispers (Mosswood Dreadknight // Dread Whispers)",
      cost: ["1", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "232",
      name: "Picnic Ruiner (Picnic Ruiner // Stolen Goodies)",
      cost: ["1", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "232",
      name: "Stolen Goodies (Picnic Ruiner // Stolen Goodies)",
      cost: ["3", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "233",
      name: "Pollen-Shield Hare (Pollen-Shield Hare // Hare Raising)",
      cost: ["1", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "233",
      name: "Hare Raising (Pollen-Shield Hare // Hare Raising)",
      cost: ["g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "masspump",
        },
      ],
    },
    {
      number: "234",
      name: "Questing Druid (Questing Druid // Seek the Beast)",
      cost: ["1", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "234",
      name: "Seek the Beast (Questing Druid // Seek the Beast)",
      cost: ["1", "r"],
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
      ],
    },
    {
      number: "235",
      name: "Scalding Viper (Scalding Viper // Steam Clean)",
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
      number: "235",
      name: "Steam Clean (Scalding Viper // Steam Clean)",
      cost: ["1", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["bounce"],
        },
        {
          guide: "bounce",
        },
      ],
    },
    {
      number: "236",
      name: "Shrouded Shepherd (Shrouded Shepherd // Cleave Shadows)",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "236",
      name: "Cleave Shadows (Shrouded Shepherd // Cleave Shadows)",
      cost: ["1", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "ping",
        },
        {
          guide: "removal",
          categories: ["boardwipe"],
        },
        {
          guide: "boardwipe",
          categories: ["conditional"],
        },
      ],
    },
    {
      number: "237",
      name: "Spellscorn Coven (Spellscorn Coven // Take It Back)",
      cost: ["3", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "discard",
        },
      ],
    },
    {
      number: "237",
      name: "Take It Back (Spellscorn Coven // Take It Back)",
      cost: ["2", "u"],
      rarity: "u",
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
      number: "238",
      name: "Tempest Hart (Tempest Hart // Scan the Clouds)",
      cost: ["3", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "238",
      name: "Scan the Clouds (Tempest Hart // Scan the Clouds)",
      cost: ["1", "u"],
      rarity: "u",
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
      number: "239",
      name: "Threadbind Clique (Threadbind Clique // Rip the Seams)",
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
      number: "239",
      name: "Rip the Seams (Threadbind Clique // Rip the Seams)",
      cost: ["2", "w"],
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
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "240",
      name: "Twining Twins (Twining Twins // Swift Spiral)",
      cost: ["2", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "240",
      name: "Swift Spiral (Twining Twins // Swift Spiral)",
      cost: ["1", "w"],
      rarity: "r",
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
          guide: "interaction",
          categories: ["temporary"],
        },
      ],
    },
    {
      number: "241",
      name: "Woodland Acolyte (Woodland Acolyte // Mend the Wilds)",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "241",
      name: "Mend the Wilds (Woodland Acolyte // Mend the Wilds)",
      cost: ["g"],
      rarity: "u",
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
      number: "242",
      name: "Agatha's Soul Cauldron",
      cost: ["2"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "243",
      name: "Candy Trail",
      cost: ["1"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "woe-food",
        },
      ],
    },
    {
      number: "244",
      name: "Collector's Vault",
      cost: ["2"],
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
      ],
    },
    {
      number: "245",
      name: "Eriette's Tempting Apple",
      cost: ["4"],
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
          guide: "lifegain",
        },
        {
          guide: "threaten",
        },
        {
          guide: "woe-food",
        },
      ],
    },
    {
      number: "246",
      name: "Gingerbrute",
      cost: ["1"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "haste",
        },
        {
          guide: "lifegain",
        },
        {
          guide: "woe-food",
        },
      ],
    },
    {
      number: "247",
      name: "Hylda's Crown of Winter",
      cost: ["3"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["temporary"],
        },
      ],
    },
    {
      number: "248",
      name: "The Irencrag",
      cost: ["2"],
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
      number: "249",
      name: "Prophetic Prism",
      cost: ["2"],
      rarity: "c",
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
      number: "250",
      name: "Scarecrow Guide",
      cost: ["2"],
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
      ],
    },
    {
      number: "251",
      name: "Soul-Guide Lantern",
      cost: ["1"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "252",
      name: "Syr Ginger, the Meal Ender",
      cost: ["2"],
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
          guide: "lifegain",
        },
        {
          guide: "woe-food",
        },
      ],
    },
    {
      number: "253",
      name: "Three Bowls of Porridge",
      cost: ["2"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "interaction",
          categories: ["removal", "temporary"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "woe-food",
        },
      ],
    },
    {
      number: "254",
      name: "Crystal Grotto",
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
      ],
    },
    {
      number: "255",
      name: "Edgewall Inn",
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
      number: "256",
      name: "Evolving Wilds",
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
      ],
    },
    {
      number: "257",
      name: "Restless Bivouac",
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
    {
      number: "258",
      name: "Restless Cottage",
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
          guide: "woe-food",
        },
      ],
    },
    {
      number: "259",
      name: "Restless Fortress",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "fixing",
        },
      ],
    },
    {
      number: "260",
      name: "Restless Spire",
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
    {
      number: "261",
      name: "Restless Vinestalk",
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
