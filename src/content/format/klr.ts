import type { IFormatConfig } from "@/models";

const format: IFormatConfig = {
  code: "klr",
  name: "Kaladesh Remastered",
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
    "klr-vehicles": {
      name: "Mechanic: Vehicles",
      icon: "fas fa-car",
      categories: {
        payoffs: "Vehicle Payoffs",
        all: "All Vehicles",
      },
    },
    "klr-energy": {
      name: "Mechanic: Energy",
      icon: "fas fa-burn",
    },
    "klr-fabricate": {
      name: "Mechanic: Fabricate/Servos",
      icon: "fas fa-robot",
      categories: {
        all: "All Fabricate Cards",
        servo: "Servo Cards",
      },
    },
    "klr-revolt": {
      name: "Mechanic: Revolt",
      icon: "fas fa-fist-raised",
      categories: {
        all: "All Revolt Cards",
        sacrifice: "Cheap Sacrifice Abilities (1 mana or less)",
      },
    },
    "klr-improvise": {
      name: "Mechanic: Improvise",
      icon: "fas fa-glasses",
      categories: {
        all: "All Improvise Cards",
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
      guides: ["klr-vehicles", "klr-energy", "klr-fabricate", "klr-revolt", "klr-improvise"],
    },
  },
  cards: [
    {
      number: "1",
      name: "Aerial Responder",
      cost: ["1", "w", "w"],
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
      number: "2",
      name: "Aeronaut Admiral",
      cost: ["3", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-vehicles",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "3",
      name: "Aether Inspector",
      cost: ["3", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-energy",
        },
        {
          guide: "klr-fabricate",
          categories: ["servo"],
        },
      ],
    },
    {
      number: "4",
      name: "Aetherstorm Roc",
      cost: ["2", "w", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "5",
      name: "Airdrop Aeronauts",
      cost: ["3", "w", "w"],
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
          guide: "klr-revolt",
          categories: ["all"],
        },
      ],
    },
    {
      number: "6",
      name: "Alley Evasion",
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
      number: "7",
      name: "Angel of Invention",
      cost: ["3", "w", "w"],
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
          guide: "klr-fabricate",
          categories: ["all"],
        },
      ],
    },
    {
      number: "8",
      name: "Audacious Infiltrator",
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
      number: "9",
      name: "Authority of the Consuls",
      cost: ["w"],
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
      number: "10",
      name: "Aviary Mechanic",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "bounce",
        },
      ],
    },
    {
      number: "11",
      name: "Built to Last",
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
      number: "12",
      name: "Cataclysmic Gearhulk",
      cost: ["3", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
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
      number: "13",
      name: "Conviction",
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
      number: "14",
      name: "Countless Gears Renegade",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-fabricate",
          categories: ["servo"],
        },
        {
          guide: "klr-revolt",
          categories: ["all"],
        },
      ],
    },
    {
      number: "15",
      name: "Dawnfeather Eagle",
      cost: ["4", "w"],
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
      number: "16",
      name: "Eddytrail Hawk",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "17",
      name: "Fairgrounds Warden",
      cost: ["2", "w"],
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
      ],
    },
    {
      number: "18",
      name: "Fragmentize",
      cost: ["w"],
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
      ],
    },
    {
      number: "19",
      name: "Fumigate",
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
          guide: "lifegain",
        },
      ],
    },
    {
      number: "20",
      name: "Gearshift Ace",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-vehicles",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "21",
      name: "Glint-Sleeve Artisan",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-fabricate",
          categories: ["all"],
        },
      ],
    },
    {
      number: "22",
      name: "Herald of the Fair",
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
      number: "23",
      name: "Impeccable Timing",
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
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "24",
      name: "Inspired Charge",
      cost: ["2", "w", "w"],
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
      number: "25",
      name: "Master Trinketeer",
      cost: ["2", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-fabricate",
          categories: ["servo"],
        },
      ],
    },
    {
      number: "26",
      name: "Propeller Pioneer",
      cost: ["3", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-fabricate",
          categories: ["all"],
        },
      ],
    },
    {
      number: "27",
      name: "Refurbish",
      cost: ["3", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "28",
      name: "Restoration Specialist",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-revolt",
          categories: ["sacrifice"],
        },
      ],
    },
    {
      number: "29",
      name: "Revoke Privileges",
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
      number: "30",
      name: "Servo Exhibition",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "klr-fabricate",
          categories: ["servo"],
        },
      ],
    },
    {
      number: "31",
      name: "Skywhaler's Shot",
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
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "32",
      name: "Sram, Senior Edificer",
      cost: ["1", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-vehicles",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "33",
      name: "Sram's Expertise",
      cost: ["2", "w", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "klr-fabricate",
          categories: ["servo"],
        },
      ],
    },
    {
      number: "34",
      name: "Thopter Arrest",
      cost: ["2", "w"],
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
      ],
    },
    {
      number: "35",
      name: "Toolcraft Exemplar",
      cost: ["w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "36",
      name: "Visionary Augmenter",
      cost: ["2", "w", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-fabricate",
          categories: ["all"],
        },
      ],
    },
    {
      number: "37",
      name: "Wispweaver Angel",
      cost: ["4", "w", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "38",
      name: "Aether Meltdown",
      cost: ["1", "u"],
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
          categories: ["other"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "39",
      name: "Aether Swooper",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-energy",
        },
        {
          guide: "klr-fabricate",
          categories: ["servo"],
        },
      ],
    },
    {
      number: "40",
      name: "Aether Theorist",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "bounce",
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "41",
      name: "Aether Tradewinds",
      cost: ["2", "u"],
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
      ],
    },
    {
      number: "42",
      name: "Baral, Chief of Compliance",
      cost: ["1", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "43",
      name: "Baral's Expertise",
      cost: ["3", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
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
      number: "44",
      name: "Ceremonious Rejection",
      cost: ["u"],
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
      number: "45",
      name: "Confiscation Coup",
      cost: ["3", "u", "u"],
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
          guide: "mindcontrol",
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "46",
      name: "Disallow",
      cost: ["1", "u", "u"],
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
      number: "47",
      name: "Era of Innovation",
      cost: ["1", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "48",
      name: "Gearseeker Serpent",
      cost: ["5", "u", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "49",
      name: "Glimmer of Genius",
      cost: ["3", "u"],
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
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "50",
      name: "Glint-Nest Crane",
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
      number: "51",
      name: "Hinterland Drake",
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
      number: "52",
      name: "Ice Over",
      cost: ["1", "u"],
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
      number: "53",
      name: "Illusionist's Stratagem",
      cost: ["3", "u"],
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
      number: "54",
      name: "Leave in the Dust",
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
          guide: "removal",
          categories: ["bounce"],
        },
        {
          guide: "bounce",
        },
      ],
    },
    {
      number: "55",
      name: "Malfunction",
      cost: ["3", "u"],
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
      number: "56",
      name: "Metallic Rebuke",
      cost: ["2", "u"],
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
          guide: "klr-improvise",
          categories: ["all"],
        },
      ],
    },
    {
      number: "57",
      name: "Metallurgic Summonings",
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
      number: "58",
      name: "Minister of Inquiries",
      cost: ["u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mill",
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "59",
      name: "Nimble Innovator",
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
      number: "60",
      name: "Padeem, Consul of Innovation",
      cost: ["3", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "61",
      name: "Paradoxical Outcome",
      cost: ["3", "u"],
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
          guide: "bounce",
        },
      ],
    },
    {
      number: "62",
      name: "Revolutionary Rebuff",
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
      number: "63",
      name: "Select for Inspection",
      cost: ["u"],
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
      number: "64",
      name: "Shielded Aether Thief",
      cost: ["1", "u"],
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
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "65",
      name: "Shipwreck Moray",
      cost: ["3", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "66",
      name: "Shrewd Negotiation",
      cost: ["4", "u"],
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
          guide: "mindcontrol",
        },
      ],
    },
    {
      number: "67",
      name: "Skyship Plunderer",
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
      number: "68",
      name: "Tezzeret's Ambition",
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
      number: "69",
      name: "Thriving Turtle",
      cost: ["u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "70",
      name: "Torrential Gearhulk",
      cost: ["4", "u", "u"],
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
      number: "71",
      name: "Trophy Mage",
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
      number: "72",
      name: "Weldfast Wingsmith",
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
      number: "73",
      name: "Wind-Kin Raiders",
      cost: ["4", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-improvise",
          categories: ["all"],
        },
      ],
    },
    {
      number: "74",
      name: "Whir of Invention",
      cost: ["x", "u", "u", "u"],
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
          guide: "klr-improvise",
          categories: ["all"],
        },
      ],
    },
    {
      number: "75",
      name: "Aether Poisoner",
      cost: ["1", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-energy",
        },
        {
          guide: "klr-fabricate",
          categories: ["servo"],
        },
      ],
    },
    {
      number: "76",
      name: "Aetherborn Marauder",
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
      ],
    },
    {
      number: "77",
      name: "Alley Strangler",
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
      number: "78",
      name: "Daring Demolition",
      cost: ["2", "b", "b"],
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
      number: "79",
      name: "Defiant Salvager",
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
      number: "80",
      name: "Demon of Dark Schemes",
      cost: ["3", "b", "b", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "removal",
          categories: ["boardwipe"],
        },
        {
          guide: "boardwipe",
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "81",
      name: "Die Young",
      cost: ["1", "b"],
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
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "82",
      name: "Embraal Bruiser",
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
      number: "83",
      name: "Essence Extraction",
      cost: ["1", "b", "b"],
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
        {
          guide: "lifegain",
        },
      ],
    },
    {
      number: "84",
      name: "Fatal Push",
      cost: ["b"],
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
        {
          guide: "klr-revolt",
          categories: ["all"],
        },
      ],
    },
    {
      number: "85",
      name: "Fen Hauler",
      cost: ["6", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-improvise",
          categories: ["all"],
        },
      ],
    },
    {
      number: "86",
      name: "Fortuitous Find",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "87",
      name: "Foundry Hornet",
      cost: ["3", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
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
      number: "88",
      name: "Foundry Screecher",
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
      number: "89",
      name: "Fourth Bridge Prowler",
      cost: ["b"],
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
      ],
    },
    {
      number: "90",
      name: "Fretwork Colony",
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
      number: "91",
      name: "Gifted Aetherborn",
      cost: ["b", "b"],
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
      number: "92",
      name: "Glint-Sleeve Siphoner",
      cost: ["1", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "93",
      name: "Gonti, Lord of Luxury",
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
      number: "94",
      name: "Herald of Anguish",
      cost: ["5", "b", "b"],
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
          guide: "klr-improvise",
          categories: ["all"],
        },
      ],
    },
    {
      number: "95",
      name: "Live Fast",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "96",
      name: "Lost Legacy",
      cost: ["1", "b", "b"],
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
      name: "Make Obsolete",
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
          guide: "removal",
          categories: ["boardwipe"],
        },
        {
          guide: "boardwipe",
        },
        {
          guide: "ping",
        },
      ],
    },
    {
      number: "98",
      name: "Marionette Master",
      cost: ["4", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-fabricate",
          categories: ["all"],
        },
      ],
    },
    {
      number: "99",
      name: "Maulfist Squad",
      cost: ["3", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-fabricate",
          categories: ["all"],
        },
      ],
    },
    {
      number: "100",
      name: "Midnight Oil",
      cost: ["2", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "101",
      name: "Mind Rot",
      cost: ["2", "b"],
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
      number: "102",
      name: "Night Market Aeronaut",
      cost: ["3", "b"],
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
          guide: "klr-revolt",
          categories: ["all"],
        },
      ],
    },
    {
      number: "103",
      name: "Night Market Lookout",
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
      number: "104",
      name: "Noxious Gearhulk",
      cost: ["4", "b", "b"],
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
          guide: "lifegain",
        },
      ],
    },
    {
      number: "105",
      name: "Rush of Vitality",
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
          guide: "lifegain",
        },
      ],
    },
    {
      number: "106",
      name: "Sly Requisitioner",
      cost: ["4", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-fabricate",
          categories: ["servo"],
        },
        {
          guide: "klr-improvise",
          categories: ["all"],
        },
      ],
    },
    {
      number: "107",
      name: "Subtle Strike",
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
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "ping",
        },
      ],
    },
    {
      number: "108",
      name: "Underhanded Designs",
      cost: ["1", "b"],
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
      ],
    },
    {
      number: "109",
      name: "Vengeful Rebel",
      cost: ["2", "b"],
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
          guide: "klr-revolt",
          categories: ["all"],
        },
      ],
    },
    {
      number: "110",
      name: "Weaponcraft Enthusiast",
      cost: ["2", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-fabricate",
          categories: ["all"],
        },
      ],
    },
    {
      number: "111",
      name: "Yahenni, Undying Partisan",
      cost: ["2", "b"],
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
          guide: "klr-revolt",
          categories: ["sacrifice"],
        },
      ],
    },
    {
      number: "112",
      name: "Yahenni's Expertise",
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
      number: "113",
      name: "Aether Chaser",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-energy",
        },
        {
          guide: "klr-fabricate",
          categories: ["servo"],
        },
      ],
    },
    {
      number: "114",
      name: "Aethertorch Renegade",
      cost: ["2", "r"],
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
          guide: "ping",
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "115",
      name: "Built to Smash",
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
      number: "116",
      name: "Cathartic Reunion",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "117",
      name: "Chandra, Torch of Defiance",
      cost: ["2", "r", "r"],
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
      number: "118",
      name: "Chandra's Pyrohelix",
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
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "ping",
        },
      ],
    },
    {
      number: "119",
      name: "Chandra's Revolution",
      cost: ["3", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "120",
      name: "Combustible Gearhulk",
      cost: ["4", "r", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "121",
      name: "Destructive Tampering",
      cost: ["2", "r"],
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
          guide: "falter",
        },
      ],
    },
    {
      number: "122",
      name: "Enraged Giant",
      cost: ["5", "r"],
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
          guide: "klr-improvise",
          categories: ["all"],
        },
      ],
    },
    {
      number: "123",
      name: "Fateful Showdown",
      cost: ["2", "r", "r"],
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
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "124",
      name: "Freejam Regent",
      cost: ["4", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-improvise",
          categories: ["all"],
        },
      ],
    },
    {
      number: "125",
      name: "Frontline Rebel",
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
      number: "126",
      name: "Furious Reprisal",
      cost: ["3", "r"],
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
      ],
    },
    {
      number: "127",
      name: "Harnessed Lightning",
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
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "128",
      name: "Hijack",
      cost: ["1", "r", "r"],
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
      number: "129",
      name: "Hungry Flames",
      cost: ["2", "r"],
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
      number: "130",
      name: "Indomitable Creativity",
      cost: ["x", "r", "r", "r"],
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
        {
          guide: "disenchant",
        },
      ],
    },
    {
      number: "131",
      name: "Inventor's Apprentice",
      cost: ["r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "132",
      name: "Invigorated Rampage",
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
      number: "133",
      name: "Kari Zev, Skyship Raider",
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
      ],
    },
    {
      number: "134",
      name: "Kari Zev's Expertise",
      cost: ["1", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "threaten",
        },
      ],
    },
    {
      number: "135",
      name: "Lathnu Sailback",
      cost: ["4", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "136",
      name: "Pia Nalaar",
      cost: ["2", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-revolt",
          categories: ["sacrifice"],
        },
      ],
    },
    {
      number: "137",
      name: "Precise Strike",
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
      number: "138",
      name: "Quicksmith Genius",
      cost: ["2", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "139",
      name: "Quicksmith Rebel",
      cost: ["3", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "140",
      name: "Ravenous Intruder",
      cost: ["1", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-revolt",
          categories: ["sacrifice"],
        },
      ],
    },
    {
      number: "141",
      name: "Reckless Fireweaver",
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
      name: "Ruinous Gremlin",
      cost: ["r"],
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
          guide: "disenchant",
        },
      ],
    },
    {
      number: "143",
      name: "Salivating Gremlins",
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
      number: "144",
      name: "Scrapper Champion",
      cost: ["3", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "145",
      name: "Siege Modification",
      cost: ["1", "r", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "klr-vehicles",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "146",
      name: "Skyship Stalker",
      cost: ["2", "r", "r"],
      rarity: "r",
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
      number: "147",
      name: "Speedway Fanatic",
      cost: ["1", "r"],
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
          guide: "klr-vehicles",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "148",
      name: "Spireside Infiltrator",
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
      number: "149",
      name: "Sweatworks Brawler",
      cost: ["3", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-improvise",
          categories: ["all"],
        },
      ],
    },
    {
      number: "150",
      name: "Welding Sparks",
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
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "151",
      name: "Appetite for the Unnatural",
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
        {
          guide: "lifegain",
        },
      ],
    },
    {
      number: "152",
      name: "Arborback Stomper",
      cost: ["3", "g", "g"],
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
      number: "153",
      name: "Armorcraft Judge",
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
      number: "154",
      name: "Attune with Aether",
      cost: ["g"],
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
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "155",
      name: "Blossoming Defense",
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
      ],
    },
    {
      number: "156",
      name: "Bristling Hydra",
      cost: ["2", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "157",
      name: "Commencement of Festivities",
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
          guide: "fog",
        },
      ],
    },
    {
      number: "158",
      name: "Creeping Mold",
      cost: ["2", "g", "g"],
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
      number: "159",
      name: "Druid of the Cowl",
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
      ],
    },
    {
      number: "160",
      name: "Greenbelt Rampager",
      cost: ["g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "161",
      name: "Heroic Intervention",
      cost: ["1", "g"],
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
      ],
    },
    {
      number: "162",
      name: "Highspire Artisan",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-energy",
        },
        {
          guide: "klr-fabricate",
          categories: ["all"],
        },
      ],
    },
    {
      number: "163",
      name: "Highspire Infusion",
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
      number: "164",
      name: "Hunt the Weak",
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
      ],
    },
    {
      number: "165",
      name: "Kujar Seedsculptor",
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
      number: "166",
      name: "Lifecraft Cavalry",
      cost: ["4", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-revolt",
          categories: ["all"],
        },
      ],
    },
    {
      number: "167",
      name: "Longtusk Cub",
      cost: ["1", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "168",
      name: "Maulfist Revolutionary",
      cost: ["1", "g", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "169",
      name: "Monstrous Onslaught",
      cost: ["3", "g", "g"],
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
      ],
    },
    {
      number: "170",
      name: "Narnam Renegade",
      cost: ["g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-revolt",
          categories: ["all"],
        },
      ],
    },
    {
      number: "171",
      name: "Nature's Way",
      cost: ["1", "g"],
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
      ],
    },
    {
      number: "172",
      name: "Nissa, Vital Force",
      cost: ["3", "g", "g"],
      rarity: "m",
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
      number: "173",
      name: "Ornamental Courage",
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
      number: "174",
      name: "Oviya Pashiri, Sage Lifecrafter",
      cost: ["g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-fabricate",
          categories: ["servo"],
        },
      ],
    },
    {
      number: "175",
      name: "Peema Aether-Seer",
      cost: ["3", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "176",
      name: "Peema Outrider",
      cost: ["2", "g", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-fabricate",
          categories: ["all"],
        },
      ],
    },
    {
      number: "177",
      name: "Ridgescale Tusker",
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
      number: "178",
      name: "Riparian Tiger",
      cost: ["3", "g", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "179",
      name: "Rishkar, Peema Renegade",
      cost: ["2", "g"],
      rarity: "r",
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
      number: "180",
      name: "Rishkar's Expertise",
      cost: ["4", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "181",
      name: "Sage of Shaila's Claim",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "182",
      name: "Servant of the Conduit",
      cost: ["1", "g"],
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
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "183",
      name: "Thriving Rhino",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "184",
      name: "Unbridled Growth",
      cost: ["g"],
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
          guide: "klr-revolt",
          categories: ["sacrifice"],
        },
      ],
    },
    {
      number: "185",
      name: "Verdurous Gearhulk",
      cost: ["3", "g", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "186",
      name: "Wild Wanderer",
      cost: ["3", "g"],
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
      number: "187",
      name: "Wildest Dreams",
      cost: ["x", "x", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "188",
      name: "Ajani Unyielding",
      cost: ["4", "g", "w"],
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
        {
          guide: "lifegain",
        },
      ],
    },
    {
      number: "189",
      name: "Cloudblazer",
      cost: ["3", "w", "u"],
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
      number: "190",
      name: "Contraband Kingpin",
      cost: ["u", "b"],
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
      number: "191",
      name: "Dark Intimations",
      cost: ["2", "u", "b", "r"],
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
          guide: "discard",
        },
      ],
    },
    {
      number: "192",
      name: "Depala, Pilot Exemplar",
      cost: ["1", "r", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-vehicles",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "193",
      name: "Dovin Baan",
      cost: ["2", "w", "u"],
      rarity: "m",
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
          guide: "lifegain",
        },
      ],
    },
    {
      number: "194",
      name: "Empyreal Voyager",
      cost: ["1", "g", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "195",
      name: "Engineered Might",
      cost: ["3", "g", "w"],
      rarity: "u",
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
      number: "196",
      name: "Hazardous Conditions",
      cost: ["2", "b", "g"],
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
      ],
    },
    {
      number: "197",
      name: "Hidden Stockpile",
      cost: ["w", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "klr-fabricate",
          categories: ["servo"],
        },
        {
          guide: "klr-revolt",
          categories: ["all", "sacrifice"],
        },
      ],
    },
    {
      number: "198",
      name: "Kambal, Consul of Allocation",
      cost: ["1", "w", "b"],
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
      number: "199",
      name: "Maverick Thopterist",
      cost: ["3", "u", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-improvise",
          categories: ["all"],
        },
      ],
    },
    {
      number: "200",
      name: "Oath of Ajani",
      cost: ["g", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "201",
      name: "Outland Boar",
      cost: ["2", "r", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "202",
      name: "Rashmi, Eternities Crafter",
      cost: ["2", "g", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "203",
      name: "Renegade Rallier",
      cost: ["1", "g", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-revolt",
          categories: ["all"],
        },
      ],
    },
    {
      number: "205",
      name: "Renegade Wheelsmith",
      cost: ["1", "r", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "206",
      name: "Restoration Gearsmith",
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
      number: "207",
      name: "Rogue Refiner",
      cost: ["1", "g", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "208",
      name: "Saheeli Rai",
      cost: ["1", "u", "r"],
      rarity: "m",
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
      number: "209",
      name: "Spire Patrol",
      cost: ["2", "w", "u"],
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
      name: "Tezzeret the Schemer",
      cost: ["2", "u", "b"],
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
        {
          guide: "fixing",
        },
        {
          guide: "ramp",
        },
      ],
    },
    {
      number: "211",
      name: "Tezzeret's Touch",
      cost: ["1", "u", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "212",
      name: "Unlicensed Disintegration",
      cost: ["1", "b", "r"],
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
      number: "213",
      name: "Veteran Motorist",
      cost: ["r", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-vehicles",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "214",
      name: "Voltaic Brawler",
      cost: ["r", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "215",
      name: "Weldfast Engineer",
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
      number: "216",
      name: "Whirler Virtuoso",
      cost: ["1", "u", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "217",
      name: "Winding Constrictor",
      cost: ["b", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "218",
      name: "Aetherflux Reservoir",
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
      number: "219",
      name: "Aethersphere Harvester",
      cost: ["3"],
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
          guide: "klr-vehicles",
          categories: ["all"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "220",
      name: "Aetherworks Marvel",
      cost: ["4"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "221",
      name: "Animation Module",
      cost: ["1"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "klr-fabricate",
          categories: ["servo"],
        },
      ],
    },
    {
      number: "222",
      name: "Ballista Charger",
      cost: ["5"],
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
          guide: "ping",
        },
        {
          guide: "klr-vehicles",
          categories: ["all"],
        },
      ],
    },
    {
      number: "223",
      name: "Barricade Breaker",
      cost: ["7"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-improvise",
          categories: ["all"],
        },
      ],
    },
    {
      number: "224",
      name: "Bastion Mastodon",
      cost: ["5"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "225",
      name: "Bomat Bazaar Barge",
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
          guide: "klr-vehicles",
          categories: ["all"],
        },
      ],
    },
    {
      number: "226",
      name: "Bomat Courier",
      cost: ["1"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-revolt",
          categories: ["sacrifice"],
        },
      ],
    },
    {
      number: "227",
      name: "Chief of the Foundry",
      cost: ["3"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "228",
      name: "Cogworker's Puzzleknot",
      cost: ["2"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "klr-fabricate",
          categories: ["servo"],
        },
      ],
    },
    {
      number: "229",
      name: "Consulate Skygate",
      cost: ["2"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "230",
      name: "Consulate Turret",
      cost: ["3"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "231",
      name: "Cultivator's Caravan",
      cost: ["3"],
      rarity: "r",
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
          guide: "klr-vehicles",
          categories: ["all"],
        },
      ],
    },
    {
      number: "232",
      name: "Daredevil Dragster",
      cost: ["3"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "klr-vehicles",
          categories: ["all"],
        },
      ],
    },
    {
      number: "233",
      name: "Decoction Module",
      cost: ["2"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "234",
      name: "Demolition Stomper",
      cost: ["6"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "klr-vehicles",
          categories: ["all"],
        },
      ],
    },
    {
      number: "235",
      name: "Dukhara Peafowl",
      cost: ["4"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "236",
      name: "Dynavolt Tower",
      cost: ["3"],
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
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "237",
      name: "Eager Construct",
      cost: ["2"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "238",
      name: "Electrostatic Pummeler",
      cost: ["3"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "239",
      name: "Fabrication Module",
      cost: ["3"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "240",
      name: "Filigree Familiar",
      cost: ["3"],
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
      name: "Fireforger's Puzzleknot",
      cost: ["2"],
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
          guide: "ping",
        },
      ],
    },
    {
      number: "242",
      name: "Foundry Inspector",
      cost: ["3"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "243",
      name: "Heart of Kiran",
      cost: ["2"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "klr-vehicles",
          categories: ["all"],
        },
      ],
    },
    {
      number: "244",
      name: "Hope of Ghirapur",
      cost: ["1"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-revolt",
          categories: ["sacrifice"],
        },
      ],
    },
    {
      number: "245",
      name: "Implement of Examination",
      cost: ["3"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "klr-revolt",
          categories: ["sacrifice"],
        },
      ],
    },
    {
      number: "246",
      name: "Implement of Malice",
      cost: ["2"],
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
          guide: "klr-revolt",
          categories: ["sacrifice"],
        },
      ],
    },
    {
      number: "247",
      name: "Inventor's Goggles",
      cost: ["1"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "248",
      name: "Irontread Crusher",
      cost: ["4"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "klr-vehicles",
          categories: ["all"],
        },
      ],
    },
    {
      number: "249",
      name: "Key to the City",
      cost: ["2"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "250",
      name: "Lifecrafter's Bestiary",
      cost: ["3"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "251",
      name: "Merchant's Dockhand",
      cost: ["1"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "252",
      name: "Metallic Mimic",
      cost: ["2"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "253",
      name: "Metalwork Colossus",
      cost: ["11"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "klr-revolt",
          categories: ["sacrifice"],
        },
      ],
    },
    {
      number: "254",
      name: "Mobile Garrison",
      cost: ["3"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "klr-vehicles",
          categories: ["all"],
        },
      ],
    },
    {
      number: "255",
      name: "Narnam Cobra",
      cost: ["2"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "256",
      name: "Ornithopter",
      cost: ["0"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "257",
      name: "Ovalchase Dragster",
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
          guide: "klr-vehicles",
          categories: ["all"],
        },
      ],
    },
    {
      number: "258",
      name: "Pacification Array",
      cost: ["1"],
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
      ],
    },
    {
      number: "259",
      name: "Panharmonicon",
      cost: ["4"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "260",
      name: "Paradox Engine",
      cost: ["5"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "261",
      name: "Peacewalker Colossus",
      cost: ["3"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "klr-vehicles",
          categories: ["all"],
        },
      ],
    },
    {
      number: "262",
      name: "Pendulum of Patterns",
      cost: ["2"],
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
      number: "263",
      name: "Planar Bridge",
      cost: ["6"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "264",
      name: "Prakhata Pillar-Bug",
      cost: ["3"],
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
      number: "265",
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
      number: "266",
      name: "Renegade Map",
      cost: ["1"],
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
          guide: "klr-revolt",
          categories: ["sacrifice"],
        },
      ],
    },
    {
      number: "267",
      name: "Reservoir Walker",
      cost: ["5"],
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
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "268",
      name: "Scrap Trawler",
      cost: ["3"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "269",
      name: "Scrapheap Scrounger",
      cost: ["2"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "270",
      name: "Sculpting Steel",
      cost: ["3"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "271",
      name: "Self-Assembler",
      cost: ["5"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "272",
      name: "Servo Schematic",
      cost: ["2"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "klr-fabricate",
          categories: ["servo"],
        },
      ],
    },
    {
      number: "273",
      name: "Sky Skiff",
      cost: ["2"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "klr-vehicles",
          categories: ["all"],
        },
      ],
    },
    {
      number: "274",
      name: "Skysovereign, Consul Flagship",
      cost: ["5"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "klr-vehicles",
          categories: ["all"],
        },
      ],
    },
    {
      number: "275",
      name: "Universal Solvent",
      cost: ["1"],
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
      number: "276",
      name: "Untethered Express",
      cost: ["4"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "klr-vehicles",
          categories: ["all"],
        },
      ],
    },
    {
      number: "277",
      name: "Weldfast Monitor",
      cost: ["3"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "278",
      name: "Whirlermaker",
      cost: ["3"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "279",
      name: "Workshop Assistant",
      cost: ["3"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "280",
      name: "Woodweaver's Puzzleknot",
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
      number: "281",
      name: "Aether Hub",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "klr-energy",
        },
      ],
    },
    {
      number: "282",
      name: "Blooming Marsh",
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
      number: "283",
      name: "Botanical Sanctum",
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
      number: "284",
      name: "Concealed Courtyard",
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
      number: "285",
      name: "Inspiring Vantage",
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
      number: "286",
      name: "Inventors' Fair",
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
      number: "287",
      name: "Spire of Industry",
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
      number: "288",
      name: "Spirebluff Canal",
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
