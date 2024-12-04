import type { IFormatConfig } from "@/models";

const format: IFormatConfig = {
  code: "m21",
  name: "Core Set 2021",
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
    "m21-4power": {
      name: "Theme: 4+ Power",
      icon: "fas fa-truck-monster",
      categories: {
        payoffs: "4+ Power Payoffs",
      },
    },
    "m21-carddraw": {
      name: "Theme: Card Draw",
      icon: "fas fa-sd-card",
      categories: {
        payoffs: "Card Draw Payoffs",
        enablers: "Card Draw Enablers",
      },
    },
    "m21-counters": {
      name: "Theme: +1/+1 Counters",
      icon: "fas fa-dumbbell",
      categories: {
        payoffs: "+1/+1 Counter Payoffs",
        enablers: "+1/+1 Counter Enablers",
      },
    },
    "m21-lifegain": {
      name: "Theme: Lifegain",
      icon: "fas fa-medkit",
      categories: {
        payoffs: "Lifegain Payoffs",
        enablers: "Lifegain Enablers",
      },
    },
    "m21-noncombat": {
      name: "Theme: Non-Combat Damage",
      icon: "fas fa-magic",
      categories: {
        payoffs: "Non-Combat Damage Payoffs",
        enablers: "Non-Combat Damage Enablers",
      },
    },
    "m21-sacrifice": {
      name: "Theme: Sacrifice",
      icon: "fas fa-utensils",
      categories: {
        payoffs: "Sacrifice Payoffs",
        enablers: "Sacrifice Enablers",
      },
    },
    "m21-spells": {
      name: "Theme: Spells",
      icon: "fas fa-hat-wizard",
      categories: {
        payoffs: "Spell Payoffs",
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
        "m21-4power",
        "m21-carddraw",
        "m21-counters",
        "m21-lifegain",
        "m21-noncombat",
        "m21-sacrifice",
        "m21-spells",
      ],
    },
  },
  cards: [
    {
      number: "1",
      name: "Ugin, the Spirit Dragon",
      cost: ["8"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["removal", "boardwipe"],
        },
        {
          guide: "boardwipe",
        },
        {
          guide: "m21-noncombat",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "2",
      name: "Alpine Watchdog",
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
      number: "3",
      name: "Angelic Ascension",
      cost: ["1", "w"],
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
      number: "4",
      name: "Anointed Chorister",
      cost: ["w"],
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
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "5",
      name: "Aven Gagglemaster",
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
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "6",
      name: "Baneslayer Angel",
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
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "7",
      name: "Basri Ket",
      cost: ["1", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "m21-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "8",
      name: "Basri's Acolyte",
      cost: ["2", "w", "w"],
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
          guide: "m21-counters",
          categories: ["enablers"],
        },
        {
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "9",
      name: "Basri's Lieutenant",
      cost: ["3", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-counters",
          categories: ["payoffs", "enablers"],
        },
      ],
    },
    {
      number: "10",
      name: "Basri's Solidarity",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "masspump",
        },
        {
          guide: "m21-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "11",
      name: "Celestial Enforcer",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "removal",
          categories: ["temporary"],
        },
      ],
    },
    {
      number: "12",
      name: "Concordia Pegasus",
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
      number: "13",
      name: "Containment Priest",
      cost: ["1", "w"],
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
      number: "14",
      name: "Daybreak Charger",
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
      number: "15",
      name: "Defiant Strike",
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
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "16",
      name: "Dub",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "17",
      name: "Faith's Fetters",
      cost: ["3", "w"],
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
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "18",
      name: "Falconer Adept",
      cost: ["3", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "19",
      name: "Feat of Resistance",
      cost: ["1", "w"],
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
          guide: "m21-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "20",
      name: "Gale Swooper",
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
      number: "21",
      name: "Glorious Anthem",
      cost: ["1", "w", "w"],
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
      number: "22",
      name: "Griffin Aerie",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "m21-lifegain",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "23",
      name: "Idol of Endurance",
      cost: ["2", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "24",
      name: "Legion's Judgment",
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
      number: "25",
      name: "Light of Promise",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "m21-lifegain",
          categories: ["payoffs"],
        },
        {
          guide: "m21-counters",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "26",
      name: "Makeshift Battalion",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "27",
      name: "Mangara, the Diplomat",
      cost: ["3", "w"],
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
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
        {
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "28",
      name: "Nine Lives",
      cost: ["1", "w", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "29",
      name: "Pack Leader",
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
      number: "30",
      name: "Rambunctious Mutt",
      cost: ["3", "w", "w"],
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
      number: "31",
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
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
        {
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "32",
      name: "Runed Halo",
      cost: ["w", "w"],
      rarity: "r",
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
      number: "33",
      name: "Sanctum of Tranquil Light",
      cost: ["w"],
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
      number: "34",
      name: "Seasoned Hallowblade",
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
      number: "35",
      name: "Secure the Scene",
      cost: ["4", "w"],
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
      number: "36",
      name: "Selfless Savior",
      cost: ["w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-sacrifice",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "37",
      name: "Siege Striker",
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
      number: "38",
      name: "Speaker of the Heavens",
      cost: ["w"],
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
          guide: "m21-lifegain",
          categories: ["enablers", "payoffs"],
        },
      ],
    },
    {
      number: "39",
      name: "Staunch Shieldmate",
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
      number: "40",
      name: "Swift Response",
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
      number: "41",
      name: "Tempered Veteran",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-counters",
          categories: ["enablers", "payoffs"],
        },
      ],
    },
    {
      number: "42",
      name: "Valorous Steed",
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
      number: "43",
      name: "Vryn Wingmare",
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
      number: "44",
      name: "Warded Battlements",
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
      number: "45",
      name: "Barrin, Tolarian Archmage",
      cost: ["1", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "bounce",
        },
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "46",
      name: "Cancel",
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
      ],
    },
    {
      number: "47",
      name: "Capture Sphere",
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
          categories: ["removal"],
        },
      ],
    },
    {
      number: "48",
      name: "Discontinuity",
      cost: ["3", "u", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["1", "u"],
          categories: ["board", "counterspell"],
        },
        {
          guide: "counterspell",
        },
      ],
    },
    {
      number: "49",
      name: "Enthralling Hold",
      cost: ["3", "u", "u"],
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
      number: "50",
      name: "Frantic Inventory",
      cost: ["1", "u"],
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
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
        {
          guide: "m21-spells",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "51",
      name: "Frost Breath",
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
          categories: ["temporary"],
        },
      ],
    },
    {
      number: "52",
      name: "Ghostly Pilferer",
      cost: ["1", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "53",
      name: "Jeskai Elder",
      cost: ["1", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
        {
          guide: "m21-spells",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "54",
      name: "Keen Glidemaster",
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
      number: "55",
      name: "Library Larcenist",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "56",
      name: "Lofty Denial",
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
      number: "57",
      name: "Miscast",
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
      number: "58",
      name: "Mistral Singer",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-spells",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "59",
      name: "Opt",
      cost: ["u"],
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
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "60",
      name: "Pursued Whale",
      cost: ["5", "u", "u"],
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
      name: "Rain of Revelation",
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
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "62",
      name: "Read the Tides",
      cost: ["5", "u"],
      rarity: "c",
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
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "63",
      name: "Rewind",
      cost: ["2", "u", "u"],
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
      number: "64",
      name: "Riddleform",
      cost: ["1", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "m21-spells",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "65",
      name: "Roaming Ghostlight",
      cost: ["3", "u", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
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
      number: "66",
      name: "Rookie Mistake",
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
      ],
    },
    {
      number: "67",
      name: "Rousing Read",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "68",
      name: "Sanctum of Calm Waters",
      cost: ["3", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "69",
      name: "See the Truth",
      cost: ["1", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "70",
      name: "Shacklegeist",
      cost: ["1", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "removal",
          categories: ["temporary"],
        },
      ],
    },
    {
      number: "71",
      name: "Shipwreck Dowser",
      cost: ["3", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-spells",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "72",
      name: "Spined Megalodon",
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
      number: "73",
      name: "Stormwing Entity",
      cost: ["3", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-spells",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "74",
      name: "Sublime Epiphany",
      cost: ["4", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["board", "counterspell"],
        },
        {
          guide: "removal",
          categories: ["bounce"],
        },
        {
          guide: "bounce",
        },
        {
          guide: "counterspell",
        },
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "75",
      name: "Teferi, Master of Time",
      cost: ["2", "u", "u"],
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
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "76",
      name: "Teferi's Ageless Insight",
      cost: ["2", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "m21-carddraw",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "77",
      name: "Teferi's Protege",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "78",
      name: "Teferi's Tutelage",
      cost: ["2", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mill",
        },
        {
          guide: "m21-carddraw",
          categories: ["enablers", "payoffs"],
        },
      ],
    },
    {
      number: "79",
      name: "Tide Skimmer",
      cost: ["3", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "80",
      name: "Tolarian Kraken",
      cost: ["4", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-carddraw",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "81",
      name: "Tome Anima",
      cost: ["3", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-carddraw",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "82",
      name: "Unsubstantiate",
      cost: ["1", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["board", "counterspell"],
        },
        {
          guide: "removal",
          categories: ["bounce"],
        },
        {
          guide: "bounce",
        },
        {
          guide: "counterspell",
        },
      ],
    },
    {
      number: "83",
      name: "Vodalian Arcanist",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-spells",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "84",
      name: "Waker of Waves",
      cost: ["5", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "85",
      name: "Wall of Runes",
      cost: ["u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "86",
      name: "Wishcoin Crab",
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
      number: "87",
      name: "Alchemist's Gift",
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
          guide: "lifegain",
        },
        {
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "88",
      name: "Archfiend's Vessel",
      cost: ["b"],
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
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "89",
      name: "Bad Deal",
      cost: ["4", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
        {
          guide: "discard",
        },
      ],
    },
    {
      number: "90",
      name: "Blood Glutton",
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
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "91",
      name: "Caged Zombie",
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
      number: "92",
      name: "Carrion Grub",
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
      number: "93",
      name: "Crypt Lurker",
      cost: ["3", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-sacrifice",
          categories: ["enablers"],
        },
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "94",
      name: "Deathbloom Thallid",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-sacrifice",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "95",
      name: "Demonic Embrace",
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
      number: "96",
      name: "Duress",
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
      number: "97",
      name: "Eliminate",
      cost: ["1", "b"],
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
      number: "98",
      name: "Fetid Imp",
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
      number: "99",
      name: "Finishing Blow",
      cost: ["4", "b"],
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
      number: "100",
      name: "Gloom Sower",
      cost: ["5", "b", "b"],
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
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "101",
      name: "Goremand",
      cost: ["4", "b", "b"],
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
          guide: "m21-sacrifice",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "102",
      name: "Grasp of Darkness",
      cost: ["b", "b"],
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
      number: "103",
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
      number: "104",
      name: "Hooded Blightfang",
      cost: ["2", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "105",
      name: "Infernal Scarring",
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
      number: "106",
      name: "Kaervek, the Spiteful",
      cost: ["2", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "removal",
          categories: ["removal", "boardwipe"],
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
      number: "107",
      name: "Kitesail Freebooter",
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
      number: "108",
      name: "Liliana, Waker of the Dead",
      cost: ["2", "b", "b"],
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
          guide: "discard",
        },
      ],
    },
    {
      number: "109",
      name: "Liliana's Devotee",
      cost: ["2", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "110",
      name: "Liliana's Standard Bearer",
      cost: ["2", "b"],
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
          guide: "m21-sacrifice",
          categories: ["payoffs"],
        },
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "111",
      name: "Liliana's Steward",
      cost: ["b"],
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
          guide: "m21-sacrifice",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "112",
      name: "Malefic Scythe",
      cost: ["1", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "113",
      name: "Masked Blackguard",
      cost: ["1", "b"],
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
      number: "114",
      name: "Massacre Wurm",
      cost: ["3", "b", "b", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "removal",
          categories: ["removal", "boardwipe"],
        },
        {
          guide: "boardwipe",
        },
      ],
    },
    {
      number: "115",
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
      number: "116",
      name: "Necromentia",
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
      number: "117",
      name: "Peer into the Abyss",
      cost: ["4", "b", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "118",
      name: "Pestilent Haze",
      cost: ["1", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["removal", "boardwipe"],
        },
        {
          guide: "boardwipe",
        },
      ],
    },
    {
      number: "119",
      name: "Rise Again",
      cost: ["4", "b"],
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
      name: "Sanctum of Stone Fangs",
      cost: ["1", "b"],
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
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "121",
      name: "Sanguine Indulgence",
      cost: ["3", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "m21-lifegain",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "122",
      name: "Silversmote Ghoul",
      cost: ["2", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-lifegain",
          categories: ["payoffs"],
        },
        {
          guide: "m21-sacrifice",
          categories: ["enablers"],
        },
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "123",
      name: "Skeleton Archer",
      cost: ["3", "b"],
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
          guide: "m21-noncombat",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "124",
      name: "Tavern Swindler",
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
      number: "125",
      name: "Thieves' Guild Enforcer",
      cost: ["b"],
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
          guide: "mill",
        },
      ],
    },
    {
      number: "126",
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
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
        {
          guide: "m21-sacrifice",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "127",
      name: "Vito, Thorn of the Dusk Rose",
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
          guide: "m21-lifegain",
          categories: ["payoffs", "enablers"],
        },
      ],
    },
    {
      number: "128",
      name: "Walking Corpse",
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
      number: "129",
      name: "Witch's Cauldron",
      cost: ["b"],
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
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
        {
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
        {
          guide: "m21-sacrifice",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "130",
      name: "Battle-Rattle Shaman",
      cost: ["3", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "131",
      name: "Bolt Hound",
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
      ],
    },
    {
      number: "132",
      name: "Bone Pit Brute",
      cost: ["4", "r", "r"],
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
      name: "Brash Taunter",
      cost: ["4", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-noncombat",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "134",
      name: "Burn Bright",
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
      number: "135",
      name: "Chandra, Heart of Fire",
      cost: ["3", "r", "r"],
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
          guide: "m21-noncombat",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "136",
      name: "Chandra's Incinerator",
      cost: ["5", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-noncombat",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "137",
      name: "Chandra's Magmutt",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-noncombat",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "138",
      name: "Chandra's Pyreling",
      cost: ["1", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-noncombat",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "139",
      name: "Conspicuous Snoop",
      cost: ["r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "140",
      name: "Crash Through",
      cost: ["r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "141",
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
      number: "142",
      name: "Double Vision",
      cost: ["3", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "m21-spells",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "143",
      name: "Fiery Emancipation",
      cost: ["3", "r", "r", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "144",
      name: "Furious Rise",
      cost: ["2", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "m21-4power",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "145",
      name: "Furor of the Bitten",
      cost: ["r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "146",
      name: "Gadrak, the Crown-Scourge",
      cost: ["2", "r"],
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
      name: "Goblin Arsonist",
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
          guide: "ping",
        },
        {
          guide: "m21-noncombat",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "148",
      name: "Goblin Wizardry",
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
          guide: "m21-spells",
          categories: ["payoffs"],
        },
        {
          guide: "m21-tribal",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "149",
      name: "Havoc Jester",
      cost: ["4", "r"],
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
          guide: "m21-noncombat",
          categories: ["enablers"],
        },
        {
          guide: "m21-sacrifice",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "150",
      name: "Heartfire Immolator",
      cost: ["1", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-sacrifice",
          categories: ["enablers"],
        },
        {
          guide: "m21-spells",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "151",
      name: "Hellkite Punisher",
      cost: ["5", "r", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "152",
      name: "Hobblefiend",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-counters",
          categories: ["payoffs"],
        },
        {
          guide: "m21-sacrifice",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "153",
      name: "Igneous Cur",
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
      number: "154",
      name: "Kinetic Augur",
      cost: ["3", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-spells",
          categories: ["payoffs"],
        },
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "155",
      name: "Onakke Ogre",
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
      number: "156",
      name: "Pitchburn Devils",
      cost: ["4", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-noncombat",
          categories: ["enablers"],
        },
        {
          guide: "m21-sacrifice",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "157",
      name: "Sanctum of Shattered Heights",
      cost: ["2", "r"],
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
          guide: "m21-noncombat",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "158",
      name: "Scorching Dragonfire",
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
      ],
    },
    {
      number: "159",
      name: "Shock",
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
          guide: "m21-noncombat",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "160",
      name: "Soul Sear",
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
      ],
    },
    {
      number: "161",
      name: "Spellgorger Weird",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-counters",
          categories: ["payoffs"],
        },
        {
          guide: "m21-spells",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "162",
      name: "Subira, Tulzidi Caravanner",
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
      ],
    },
    {
      number: "163",
      name: "Sure Strike",
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
      number: "164",
      name: "Terror of the Peaks",
      cost: ["3", "r", "r"],
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
      ],
    },
    {
      number: "165",
      name: "Thrill of Possibility",
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
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "166",
      name: "Traitorous Greed",
      cost: ["3", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "threaten",
        },
        {
          guide: "m21-sacrifice",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "167",
      name: "Transmogrify",
      cost: ["3", "r"],
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
      ],
    },
    {
      number: "168",
      name: "Turn to Slag",
      cost: ["3", "r", "r"],
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
      number: "169",
      name: "Turret Ogre",
      cost: ["3", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-4power",
          categories: ["payoffs"],
        },
        {
          guide: "m21-noncombat",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "170",
      name: "Unleash Fury",
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
      number: "171",
      name: "Volcanic Geyser",
      cost: ["x", "r", "r"],
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
          guide: "m21-noncombat",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "172",
      name: "Volcanic Salvo",
      cost: ["10", "r", "r"],
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
      ],
    },
    {
      number: "173",
      name: "Azusa, Lost but Seeking",
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
      number: "174",
      name: "Burlfist Oak",
      cost: ["2", "g", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-carddraw",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "175",
      name: "Canopy Stalker",
      cost: ["3", "g"],
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
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "176",
      name: "Colossal Dreadmaw",
      cost: ["4", "g", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "177",
      name: "Cultivate",
      cost: ["2", "g"],
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
      number: "178",
      name: "Drowsing Tyrannodon",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-counters",
          categories: ["payoffs"],
        },
        {
          guide: "m21-4power",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "179",
      name: "Elder Gargaroth",
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
      number: "180",
      name: "Feline Sovereign",
      cost: ["2", "g"],
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
        {
          guide: "disenchant",
        },
      ],
    },
    {
      number: "181",
      name: "Fierce Empath",
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
      number: "182",
      name: "Fungal Rebirth",
      cost: ["2", "g"],
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
          guide: "m21-sacrifice",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "183",
      name: "Garruk, Unleashed",
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
      number: "184",
      name: "Garruk's Gorehorn",
      cost: ["4", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "185",
      name: "Garruk's Harbinger",
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
      number: "186",
      name: "Garruk's Uprising",
      cost: ["2", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "m21-4power",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "187",
      name: "Gnarled Sage",
      cost: ["3", "g", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-carddraw",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "188",
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
      number: "189",
      name: "Hunter's Edge",
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
          guide: "m21-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "190",
      name: "Invigorating Surge",
      cost: ["2", "g"],
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
          guide: "m21-counters",
          categories: ["enablers", "payoffs"],
        },
      ],
    },
    {
      number: "191",
      name: "Jolrael, Mwonvuli Recluse",
      cost: ["1", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-carddraw",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "192",
      name: "Life Goes On",
      cost: ["g"],
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
        {
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "193",
      name: "Llanowar Visionary",
      cost: ["2", "g"],
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
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "194",
      name: "Ornery Dilophosaur",
      cost: ["3", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-4power",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "195",
      name: "Portcullis Vine",
      cost: ["g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
        {
          guide: "m21-sacrifice",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "196",
      name: "Pridemalkin",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-counters",
          categories: ["enablers", "payoffs"],
        },
      ],
    },
    {
      number: "197",
      name: "Primal Might",
      cost: ["x", "g"],
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
      ],
    },
    {
      number: "198",
      name: "Quirion Dryad",
      cost: ["1", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "199",
      name: "Ranger's Guile",
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
      number: "200",
      name: "Return to Nature",
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
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "disenchant",
        },
      ],
    },
    {
      number: "201",
      name: "Run Afoul",
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
        {
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "202",
      name: "Sabertooth Mauler",
      cost: ["3", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "203",
      name: "Sanctum of Fruitful Harvest",
      cost: ["2", "g"],
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
      number: "204",
      name: "Scavenging Ooze",
      cost: ["1", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-counters",
          categories: ["enablers"],
        },
        {
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "205",
      name: "Setessan Training",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "206",
      name: "Skyway Sniper",
      cost: ["g"],
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
      ],
    },
    {
      number: "207",
      name: "Snarespinner",
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
      number: "208",
      name: "Sporeweb Weaver",
      cost: ["2", "g"],
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
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "209",
      name: "Thrashing Brontodon",
      cost: ["1", "g", "g"],
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
          guide: "disenchant",
        },
        {
          guide: "m21-sacrifice",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "210",
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
      number: "211",
      name: "Track Down",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "212",
      name: "Trufflesnout",
      cost: ["2", "g"],
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
          guide: "m21-counters",
          categories: ["enablers"],
        },
        {
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "213",
      name: "Warden of the Woods",
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
      number: "214",
      name: "Wildwood Scourge",
      cost: ["x", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-counters",
          categories: ["enablers", "payoffs"],
        },
      ],
    },
    {
      number: "215",
      name: "Alpine Houndmaster",
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
      number: "216",
      name: "Conclave Mentor",
      cost: ["g", "w"],
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
          guide: "m21-counters",
          categories: ["enablers", "payoffs"],
        },
        {
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "217",
      name: "Dire Fleet Warmonger",
      cost: ["1", "b", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-sacrifice",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "218",
      name: "Experimental Overload",
      cost: ["2", "u", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "m21-spells",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "219",
      name: "Indulging Patrician",
      cost: ["1", "w", "b"],
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
          guide: "m21-lifegain",
          categories: ["payoffs", "enablers"],
        },
      ],
    },
    {
      number: "220",
      name: "Leafkin Avenger",
      cost: ["2", "r", "g"],
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
      number: "221",
      name: "Lorescale Coatl",
      cost: ["1", "g", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-counters",
          categories: ["enablers"],
        },
        {
          guide: "m21-carddraw",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "222",
      name: "Niambi, Esteemed Speaker",
      cost: ["w", "u"],
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
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "223",
      name: "Obsessive Stitcher",
      cost: ["1", "u", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "224",
      name: "Radha, Heart of Keld",
      cost: ["1", "r", "g"],
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
      name: "Sanctum of All",
      cost: ["w", "u", "b", "r", "g"],
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
      name: "Twinblade Assassins",
      cost: ["3", "b", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-sacrifice",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "227",
      name: "Watcher of the Spheres",
      cost: ["w", "u"],
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
      name: "Chromatic Orrery",
      cost: ["7"],
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
      ],
    },
    {
      number: "229",
      name: "Chrome Replicator",
      cost: ["5"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "230",
      name: "Epitaph Golem",
      cost: ["5"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "231",
      name: "Forgotten Sentinel",
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
      number: "232",
      name: "Mazemind Tome",
      cost: ["2"],
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
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "233",
      name: "Meteorite",
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
          guide: "fixing",
        },
        {
          guide: "ramp",
        },
        {
          guide: "m21-noncombat",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "234",
      name: "Palladium Myr",
      cost: ["3"],
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
      number: "235",
      name: "Prismite",
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
      ],
    },
    {
      number: "236",
      name: "Short Sword",
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
      number: "237",
      name: "Silent Dart",
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
      number: "238",
      name: "Skyscanner",
      cost: ["3"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "239",
      name: "Solemn Simulacrum",
      cost: ["4"],
      rarity: "r",
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
          guide: "m21-carddraw",
          categories: ["enablers"],
        },
        {
          guide: "m21-sacrifice",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "240",
      name: "Sparkhunter Masticore",
      cost: ["3"],
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
      number: "241",
      name: "Tormod's Crypt",
      cost: ["0"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "242",
      name: "Animal Sanctuary",
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
      number: "243",
      name: "Bloodfell Caves",
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
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "244",
      name: "Blossoming Sands",
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
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "245",
      name: "Dismal Backwater",
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
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "246",
      name: "Fabled Passage",
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
          guide: "m21-sacrifice",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "247",
      name: "Jungle Hollow",
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
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "248",
      name: "Radiant Fountain",
      cost: [],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "249",
      name: "Rugged Highlands",
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
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "250",
      name: "Scoured Barrens",
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
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "251",
      name: "Swiftwater Cliffs",
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
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "252",
      name: "Temple of Epiphany",
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
      number: "253",
      name: "Temple of Malady",
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
      number: "254",
      name: "Temple of Mystery",
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
      number: "255",
      name: "Temple of Silence",
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
      number: "256",
      name: "Temple of Triumph",
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
      number: "257",
      name: "Thornwood Falls",
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
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "258",
      name: "Tranquil Cove",
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
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "259",
      name: "Wind-Scarred Crag",
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
          guide: "m21-lifegain",
          categories: ["enablers"],
        },
      ],
    },
  ],
};

export default format;
