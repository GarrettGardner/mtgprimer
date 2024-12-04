import type { IFormatConfig } from "@/models";

const format: IFormatConfig = {
  code: "znr",
  name: "Zendikar Rising",
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
    "znr-landfall": {
      name: "Mechanic: Landfall",
      icon: "fas fa-globe-americas",
      categories: {
        enablers: "Landfall Enablers",
        triggers: "Landfall Triggers",
      },
    },
    "znr-mdfc": {
      name: "Mechanic: Modal Double-Faced Cards",
      icon: "fas fa-mountain",
      categories: {
        synergy: "Synergy Cards",
        all: "All MDFCs",
      },
    },
    "znr-kicker": {
      name: "Mechanic: Kicker",
      icon: "fas fa-search-plus",
      categories: {
        payoffs: "Kicker Payoffs",
        all: "All Kicker Cards",
      },
    },
    "znr-counters": {
      name: "Theme: +1/+1 Counters",
      icon: "fas fa-dumbbell",
      categories: {
        payoffs: "+1/+1 Counter Payoffs",
        enablers: "+1/+1 Counter Enablers",
      },
    },
    "znr-party": {
      name: "Mechanic: Party",
      icon: "fas fa-birthday-cake",
      categories: {
        enablers: "Party Enablers",
        payoffs: "Party Payoffs",
      },
    },
    "znr-clerics": {
      name: "Theme: Clerics",
      icon: "fas fa-heartbeat",
      categories: {
        payoffs: "Cleric Payoffs",
        all: "All Clerics",
      },
    },
    "znr-lifegain": {
      name: "Theme: Life Gain",
      icon: "fas fa-medkit",
      categories: {
        payoffs: "Lifegain Payoffs",
        enablers: "Lifegain Enablers",
      },
    },
    "znr-rogues": {
      name: "Theme: Rogues",
      icon: "fas fa-user-secret",
      categories: {
        payoffs: "Rogue Payoffs",
        all: "All Rogues",
      },
    },
    "znr-mill": {
      name: "Theme: Mill (8 Cards)",
      icon: "fas fa-head-side-virus",
      categories: {
        payoffs: "Mill (8 Card) Payoffs",
        enablers: "Mill Enablers",
      },
    },
    "znr-warriors": {
      name: "Theme: Warriors",
      icon: "fas fa-shield-alt",
      categories: {
        payoffs: "Warrior Payoffs",
        all: "All Warriors",
      },
    },
    "znr-equipment": {
      name: "Theme: Equipment",
      icon: "fas fa-shield-alt",
      categories: {
        payoffs: "Equipment Payoffs",
        all: "All Equipment",
      },
    },
    "znr-wizards": {
      name: "Theme: Wizards",
      icon: "fas fa-hat-wizard",
      categories: {
        payoffs: "Wizard Payoffs",
        all: "All Wizards",
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
        other: "Other",
      },
      guides: ["bounce", "destruction", "disruption", "lockdown", "mindcontrol", "ping", "shrink", "threaten", "wrath"],
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
        "znr-landfall",
        "znr-mdfc",
        "znr-kicker",
        "znr-counters",
        "znr-party",
        "znr-clerics",
        "znr-lifegain",
        "znr-rogues",
        "znr-mill",
        "znr-warriors",
        "znr-equipment",
        "znr-wizards",
      ],
    },
  },
  cards: [
    {
      number: "1",
      name: "Allied Assault",
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
          guide: "znr-party",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "2",
      name: "Angel of Destiny",
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
          guide: "znr-clerics",
          categories: ["all"],
        },
        {
          guide: "znr-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "3",
      name: "Angelheart Protector",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-clerics",
          categories: ["all"],
        },
      ],
    },
    {
      number: "4",
      name: "Archon of Emeria",
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
      number: "5",
      name: "Archpriest of Iona",
      cost: ["w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
        {
          guide: "znr-clerics",
          categories: ["all"],
        },
      ],
    },
    {
      number: "6",
      name: "Attended Healer",
      cost: ["3", "w"],
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
          guide: "znr-clerics",
          categories: ["payoffs"],
        },
        {
          guide: "znr-clerics",
          categories: ["all"],
        },
        {
          guide: "znr-lifegain",
          categories: ["payoffs"],
        },
        {
          guide: "znr-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "7",
      name: "Canyon Jerboa",
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
          guide: "znr-landfall",
          categories: ["triggers"],
        },
      ],
    },
    {
      number: "8",
      name: "Cliffhaven Sell-Sword",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
      ],
    },
    {
      number: "9",
      name: "Dauntless Unity",
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
          guide: "masspump",
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
      ],
    },
    {
      number: "10",
      name: "Disenchant",
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
          categories: ["other"],
        },
        {
          guide: "disenchant",
        },
      ],
    },
    {
      number: "11",
      name: "Emeria Captain",
      cost: ["3", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
      ],
    },
    {
      number: "12",
      name: "Emeria's Call // Emeria, Shattered Skyclave",
      cost: ["4", "w", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell", "land"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
      ],
    },
    {
      number: "13",
      name: "Expedition Healer",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-clerics",
          categories: ["payoffs"],
        },
        {
          guide: "znr-clerics",
          categories: ["all"],
        },
      ],
    },
    {
      number: "14",
      name: "Farsight Adept",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-wizards",
          categories: ["all"],
        },
      ],
    },
    {
      number: "15",
      name: "Fearless Fledgling",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-landfall",
          categories: ["triggers"],
        },
      ],
    },
    {
      number: "16",
      name: "Felidar Retreat",
      cost: ["3", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "znr-landfall",
          categories: ["triggers"],
        },
      ],
    },
    {
      number: "17",
      name: "Journey to Oblivion",
      cost: ["4", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          cost: ["w"],
          categories: ["removal"],
        },
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "18",
      name: "Kabira Outrider",
      cost: ["3", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
      ],
    },
    {
      number: "19",
      name: "Kabira Takedown // Kabira Plateau",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell", "land"],
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
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "20",
      name: "Kitesail Cleric",
      cost: ["w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
        {
          guide: "znr-clerics",
          categories: ["all"],
        },
      ],
    },
    {
      number: "21",
      name: "Kor Blademaster",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-warriors",
          categories: ["payoffs", "all"],
        },
        {
          guide: "znr-equipment",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "22",
      name: "Kor Celebrant",
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
          guide: "znr-clerics",
          categories: ["all"],
        },
        {
          guide: "znr-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "23",
      name: "Legion Angel",
      cost: ["2", "w", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
      ],
    },
    {
      number: "24",
      name: "Luminarch Aspirant",
      cost: ["1", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-clerics",
          categories: ["all"],
        },
      ],
    },
    {
      number: "25",
      name: "Makindi Ox",
      cost: ["4", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-landfall",
          categories: ["triggers"],
        },
      ],
    },
    {
      number: "26",
      name: "Makindi Stampede // Makindi Mesas",
      cost: ["3", "w", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell", "land"],
        },
        {
          guide: "masspump",
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "27",
      name: "Maul of the Skyclaves",
      cost: ["2", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "znr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "28",
      name: "Mesa Lynx",
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
      number: "29",
      name: "Nahiri's Binding",
      cost: ["1", "w", "w"],
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
      name: "Ondu Inversion // Ondu Skyruins",
      cost: ["6", "w", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell", "land"],
        },
        {
          guide: "removal",
          categories: ["wrath"],
        },
        {
          guide: "wrath",
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "31",
      name: "Paired Tactician",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-warriors",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "32",
      name: "Practiced Tactics",
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
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "33",
      name: "Pressure Point",
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
          categories: ["temporary"],
        },
      ],
    },
    {
      number: "34",
      name: "Prowling Felidar",
      cost: ["3", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-landfall",
          categories: ["triggers"],
        },
      ],
    },
    {
      number: "35",
      name: "Resolute Strike",
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
          guide: "znr-warriors",
          categories: ["payoffs"],
        },
        {
          guide: "znr-equipment",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "36",
      name: "Sea Gate Banneret",
      cost: ["w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "masspump",
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
      ],
    },
    {
      number: "37",
      name: "Sejiri Shelter // Sejiri Glacier",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell", "land"],
        },
        {
          guide: "instants",
          categories: ["board"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "38",
      name: "Shepherd of Heroes",
      cost: ["4", "w"],
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
          guide: "znr-party",
          categories: ["payoffs"],
        },
        {
          guide: "znr-clerics",
          categories: ["all"],
        },
        {
          guide: "znr-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "39",
      name: "Skyclave Apparition",
      cost: ["1", "w", "w"],
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
      number: "40",
      name: "Skyclave Cleric // Skyclave Basilica",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature", "land"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
        {
          guide: "znr-clerics",
          categories: ["all"],
        },
        {
          guide: "znr-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "41",
      name: "Squad Commander",
      cost: ["3", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "masspump",
        },
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
      ],
    },
    {
      number: "42",
      name: "Smite the Monstrous",
      cost: ["3", "w"],
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
      number: "43",
      name: "Tazeem Raptor",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-mdfc",
          categories: ["synergy"],
        },
      ],
    },
    {
      number: "44",
      name: "Tazri, Beacon of Unity",
      cost: ["4", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
      ],
    },
    {
      number: "45",
      name: "Anticognition",
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
        {
          guide: "znr-mill",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "46",
      name: "Beyeen Veil // Beyeen Coast",
      cost: ["1", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "instants",
          categories: ["spell", "board"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "47",
      name: "Bubble Snare",
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
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
      ],
    },
    {
      number: "48",
      name: "Cascade Seer",
      cost: ["3", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
        {
          guide: "znr-wizards",
          categories: ["all"],
        },
      ],
    },
    {
      number: "49",
      name: "Charix, the Raging Isle",
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
      number: "50",
      name: "Chilling Trap",
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
          guide: "znr-wizards",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "51",
      name: "Cleric of Chill Depths",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-clerics",
          categories: ["all"],
        },
      ],
    },
    {
      number: "52",
      name: "Concerted Defense",
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
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "53",
      name: "Confounding Conundrum",
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
      number: "54",
      name: "Coralhelm Chronicler",
      cost: ["2", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
        {
          guide: "znr-wizards",
          categories: ["all"],
        },
      ],
    },
    {
      number: "55",
      name: "Cunning Geysermage",
      cost: ["2", "u"],
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
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
        {
          guide: "znr-wizards",
          categories: ["all"],
        },
      ],
    },
    {
      number: "56",
      name: "Deliberate",
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
      ],
    },
    {
      number: "57",
      name: "Expedition Diviner",
      cost: ["3", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-wizards",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "58",
      name: "Field Research",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
      ],
    },
    {
      number: "59",
      name: "Glacial Grasp",
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
        {
          guide: "mill",
        },
        {
          guide: "znr-mill",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "60",
      name: "Glasspool Mimic // Glasspool Shore",
      cost: ["2", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature", "land"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
        {
          guide: "znr-rogues",
          categories: ["all"],
        },
      ],
    },
    {
      number: "61",
      name: "Inscription of Insight",
      cost: ["3", "u"],
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
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
      ],
    },
    {
      number: "62",
      name: "Into the Roil",
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
          categories: ["bounce"],
        },
        {
          guide: "bounce",
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
      ],
    },
    {
      number: "63",
      name: "Jace, Mirror Mage",
      cost: ["1", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
      ],
    },
    {
      number: "64",
      name: "Jwari Disruption // Jwari Ruins",
      cost: ["1", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell", "land"],
        },
        {
          guide: "instants",
          categories: ["counterspell"],
        },
        {
          guide: "counterspell",
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "65",
      name: "Living Tempest",
      cost: ["4", "u"],
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
      number: "66",
      name: "Lullmage's Domination",
      cost: ["x", "u", "u", "u"],
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
        {
          guide: "znr-mill",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "67",
      name: "Maddening Cacophony",
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
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
        {
          guide: "znr-mill",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "68",
      name: "Master of Winds",
      cost: ["2", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-wizards",
          categories: ["all"],
        },
      ],
    },
    {
      number: "69",
      name: "Merfolk Falconer",
      cost: ["3", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-kicker",
          categories: ["payoffs"],
        },
        {
          guide: "znr-wizards",
          categories: ["all"],
        },
      ],
    },
    {
      number: "70",
      name: "Merfolk Windrobber",
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
          guide: "znr-rogues",
          categories: ["all"],
        },
        {
          guide: "znr-mill",
          categories: ["payoffs", "enablers"],
        },
      ],
    },
    {
      number: "71",
      name: "Negate",
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
      number: "72",
      name: "Nimble Trapfinder",
      cost: ["1", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
        {
          guide: "znr-rogues",
          categories: ["all"],
        },
      ],
    },
    {
      number: "73",
      name: "Risen Riptide",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-kicker",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "74",
      name: "Roost of Drakes",
      cost: ["u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "znr-kicker",
          categories: ["payoffs"],
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
      ],
    },
    {
      number: "75",
      name: "Ruin Crab",
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
          guide: "znr-landfall",
          categories: ["triggers"],
        },
        {
          guide: "znr-mill",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "76",
      name: "Sea Gate Restoration // Sea Gate, Reborn",
      cost: ["4", "u", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell", "land"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "77",
      name: "Sea Gate Stormcaller",
      cost: ["1", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
        {
          guide: "znr-wizards",
          categories: ["all"],
        },
      ],
    },
    {
      number: "78",
      name: "Seafloor Stalker",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
        {
          guide: "znr-rogues",
          categories: ["all"],
        },
      ],
    },
    {
      number: "79",
      name: "Shell Shield",
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
          guide: "znr-kicker",
          categories: ["all"],
        },
      ],
    },
    {
      number: "80",
      name: "Silundi Vision // Silundi Isle",
      cost: ["2", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell", "land"],
        },
        {
          guide: "instants",
          categories: ["other"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "81",
      name: "Skyclave Plunder",
      cost: ["4", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "82",
      name: "Skyclave Squid",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-landfall",
          categories: ["triggers"],
        },
      ],
    },
    {
      number: "83",
      name: "Sure-Footed Infiltrator",
      cost: ["3", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-rogues",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "84",
      name: "Tazeem Roilmage",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
        {
          guide: "znr-wizards",
          categories: ["all"],
        },
      ],
    },
    {
      number: "85",
      name: "Thieving Skydiver",
      cost: ["1", "u"],
      rarity: "r",
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
          guide: "mindcontrol",
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
        {
          guide: "znr-rogues",
          categories: ["all"],
        },
      ],
    },
    {
      number: "86",
      name: "Umara Wizard // Umara Skyfalls",
      cost: ["4", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature", "land"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
        {
          guide: "znr-wizards",
          categories: ["all"],
        },
      ],
    },
    {
      number: "87",
      name: "Windrider Wizard",
      cost: ["2", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-wizards",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "88",
      name: "Zulaport Duelist",
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
        {
          guide: "znr-rogues",
          categories: ["all"],
        },
        {
          guide: "znr-mill",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "89",
      name: "Acquisitions Expert",
      cost: ["1", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "discard",
        },
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
        {
          guide: "znr-rogues",
          categories: ["all"],
        },
      ],
    },
    {
      number: "90",
      name: "Agadeem's Awakening // Agadeem, the Undercrypt",
      cost: ["x", "b", "b", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell", "land"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "91",
      name: "Blackbloom Rogue // Blackbloom Bog",
      cost: ["2", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature", "land"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
        {
          guide: "znr-rogues",
          categories: ["all"],
        },
        {
          guide: "znr-mill",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "92",
      name: "Blood Beckoning",
      cost: ["b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
      ],
    },
    {
      number: "93",
      name: "Blood Price",
      cost: ["3", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "94",
      name: "Bloodchief's Thirst",
      cost: ["b"],
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
          guide: "znr-kicker",
          categories: ["all"],
        },
      ],
    },
    {
      number: "95",
      name: "Coveted Prize",
      cost: ["4", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "96",
      name: "Deadly Alliance",
      cost: ["4", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["b"],
          categories: ["board"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "97",
      name: "Demon's Disciple",
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
          guide: "znr-clerics",
          categories: ["all"],
        },
      ],
    },
    {
      number: "98",
      name: "Drana, the Last Bloodchief",
      cost: ["3", "b", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-clerics",
          categories: ["all"],
        },
        {
          guide: "znr-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "99",
      name: "Drana's Silencer",
      cost: ["5", "b"],
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
          guide: "znr-party",
          categories: ["payoffs"],
        },
        {
          guide: "znr-rogues",
          categories: ["all"],
        },
      ],
    },
    {
      number: "100",
      name: "Dreadwurm",
      cost: ["4", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-landfall",
          categories: ["triggers"],
        },
      ],
    },
    {
      number: "101",
      name: "Expedition Skulker",
      cost: ["1", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-rogues",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "102",
      name: "Feed the Swarm",
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
          guide: "disenchant",
        },
      ],
    },
    {
      number: "103",
      name: "Ghastly Gloomhunter",
      cost: ["1", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
        {
          guide: "znr-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "104",
      name: "Guul Draz Mucklord",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "105",
      name: "Hagra Constrictor",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-counters",
          categories: ["payoffs", "enablers"],
        },
      ],
    },
    {
      number: "106",
      name: "Hagra Mauling // Hagra Broodpit",
      cost: ["2", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell", "land"],
        },
        {
          guide: "instants",
          cost: ["1", "b", "b"],
          categories: ["board"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "107",
      name: "Highborn Vampire",
      cost: ["3", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
      ],
    },
    {
      number: "108",
      name: "Inscription of Ruin",
      cost: ["2", "b"],
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
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
      ],
    },
    {
      number: "109",
      name: "Lithoform Blight",
      cost: ["1", "b"],
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
      number: "110",
      name: "Malakir Blood-Priest",
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
          guide: "znr-party",
          categories: ["payoffs"],
        },
        {
          guide: "znr-clerics",
          categories: ["all"],
        },
        {
          guide: "znr-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "111",
      name: "Malakir Rebirth // Malakir Mire",
      cost: ["b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell", "land"],
        },
        {
          guide: "instants",
          categories: ["board"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "112",
      name: "Marauding Blight-Priest",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-clerics",
          categories: ["all"],
        },
        {
          guide: "znr-lifegain",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "113",
      name: "Mind Carver",
      cost: ["b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "znr-mill",
          categories: ["payoffs"],
        },
        {
          guide: "znr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "114",
      name: "Mind Drain",
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
        {
          guide: "lifegain",
        },
        {
          guide: "mill",
        },
        {
          guide: "znr-lifegain",
          categories: ["enablers"],
        },
        {
          guide: "znr-mill",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "115",
      name: "Nighthawk Scavenger",
      cost: ["1", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-rogues",
          categories: ["all"],
        },
      ],
    },
    {
      number: "116",
      name: "Nimana Skitter-Sneak",
      cost: ["3", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-rogues",
          categories: ["all"],
        },
        {
          guide: "znr-mill",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "117",
      name: "Nimana Skydancer",
      cost: ["2", "b"],
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
          guide: "mill",
        },
        {
          guide: "znr-rogues",
          categories: ["all"],
        },
        {
          guide: "znr-mill",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "118",
      name: "Nullpriest of Oblivion",
      cost: ["1", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
        {
          guide: "znr-clerics",
          categories: ["all"],
        },
      ],
    },
    {
      number: "119",
      name: "Oblivion's Hunger",
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
          guide: "znr-counters",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "120",
      name: "Pelakka Predation // Pelakka Caverns",
      cost: ["2", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell", "land"],
        },
        {
          guide: "discard",
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "121",
      name: "Scion of the Swarm",
      cost: ["3", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-clerics",
          categories: ["all"],
        },
        {
          guide: "znr-lifegain",
          categories: ["payoffs"],
        },
        {
          guide: "znr-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "122",
      name: "Scourge of the Skyclaves",
      cost: ["1", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
      ],
    },
    {
      number: "123",
      name: "Shadow Stinger",
      cost: ["2", "b"],
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
          guide: "znr-rogues",
          categories: ["payoffs", "all"],
        },
        {
          guide: "znr-mill",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "124",
      name: "Shadows' Verdict",
      cost: ["3", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["wrath"],
        },
        {
          guide: "wrath",
        },
      ],
    },
    {
      number: "125",
      name: "Skyclave Shade",
      cost: ["1", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-landfall",
          categories: ["triggers"],
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
        {
          guide: "znr-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "126",
      name: "Skyclave Shadowcat",
      cost: ["3", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-counters",
          categories: ["payoffs", "enablers"],
        },
      ],
    },
    {
      number: "127",
      name: "Soul Shatter",
      cost: ["2", "b"],
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
      number: "128",
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
        {
          guide: "znr-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "129",
      name: "Taborax, Hope's Demise",
      cost: ["2", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-clerics",
          categories: ["payoffs"],
        },
        {
          guide: "znr-clerics",
          categories: ["all"],
        },
        {
          guide: "znr-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "130",
      name: "Thwart the Grave",
      cost: ["4", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "131",
      name: "Vanquish the Weak",
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
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "132",
      name: "Zof Consumption // Zof Bloodbog",
      cost: ["4", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell", "land"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
        {
          guide: "znr-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "133",
      name: "Akoum Hellhound",
      cost: ["r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-landfall",
          categories: ["triggers"],
        },
      ],
    },
    {
      number: "134",
      name: "Akoum Warrior // Akoum Teeth",
      cost: ["5", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature", "land"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
      ],
    },
    {
      number: "135",
      name: "Ardent Electromancer",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
        {
          guide: "znr-wizards",
          categories: ["all"],
        },
      ],
    },
    {
      number: "136",
      name: "Cinderclasm",
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
          categories: ["wrath"],
        },
        {
          guide: "wrath",
        },
        {
          guide: "ping",
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
      ],
    },
    {
      number: "137",
      name: "Cleansing Wildfire",
      cost: ["1", "r"],
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
        {
          guide: "fixing",
        },
        {
          guide: "znr-landfall",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "138",
      name: "Expedition Champion",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-warriors",
          categories: ["payoffs"],
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
      ],
    },
    {
      number: "139",
      name: "Fireblade Charger",
      cost: ["r"],
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
          guide: "ping",
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
        {
          guide: "znr-equipment",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "140",
      name: "Fissure Wizard",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-wizards",
          categories: ["all"],
        },
      ],
    },
    {
      number: "141",
      name: "Goma Fada Vanguard",
      cost: ["1", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-warriors",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "142",
      name: "Grotag Bug-Catcher",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
      ],
    },
    {
      number: "143",
      name: "Grotag Night-Runner",
      cost: ["2", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-rogues",
          categories: ["all"],
        },
      ],
    },
    {
      number: "144",
      name: "Inordinate Rage",
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
      number: "145",
      name: "Kargan Intimidator",
      cost: ["1", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "falter",
        },
        {
          guide: "znr-warriors",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "146",
      name: "Kazuul's Fury // Kazuul's Cliffs",
      cost: ["2", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell", "land"],
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
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "147",
      name: "Leyline Tyrant",
      cost: ["2", "r", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "148",
      name: "Magmatic Channeler",
      cost: ["1", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-wizards",
          categories: ["all"],
        },
      ],
    },
    {
      number: "149",
      name: "Molten Blast",
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
        {
          guide: "disenchant",
        },
      ],
    },
    {
      number: "150",
      name: "Moraug, Fury of Akoum",
      cost: ["4", "r", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-landfall",
          categories: ["triggers"],
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
      ],
    },
    {
      number: "151",
      name: "Nahiri's Lithoforming",
      cost: ["x", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "znr-landfall",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "152",
      name: "Pyroclastic Hellion",
      cost: ["4", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-mdfc",
          categories: ["synergy"],
        },
      ],
    },
    {
      number: "153",
      name: "Relic Robber",
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
          guide: "znr-rogues",
          categories: ["all"],
        },
      ],
    },
    {
      number: "154",
      name: "Rockslide Sorcerer",
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
          guide: "ping",
        },
        {
          guide: "znr-wizards",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "155",
      name: "Roil Eruption",
      cost: ["1", "r"],
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
          guide: "znr-kicker",
          categories: ["all"],
        },
      ],
    },
    {
      number: "156",
      name: "Roiling Vortex",
      cost: ["1", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "157",
      name: "Scavenged Blade",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "znr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "158",
      name: "Scorch Rider",
      cost: ["3", "r"],
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
          guide: "znr-kicker",
          categories: ["all"],
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
      ],
    },
    {
      number: "159",
      name: "Shatterskull Charger",
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
          guide: "znr-kicker",
          categories: ["all"],
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
        {
          guide: "znr-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "160",
      name: "Shatterskull Minotaur",
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
          guide: "znr-party",
          categories: ["payoffs"],
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
      ],
    },
    {
      number: "161",
      name: "Shatterskull Smashing // Shatterskull, the Hammer Pass",
      cost: ["x", "r", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell", "land"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "162",
      name: "Sizzling Barrage",
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
      number: "163",
      name: "Skyclave Geopede",
      cost: ["2", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-landfall",
          categories: ["triggers"],
        },
      ],
    },
    {
      number: "164",
      name: "Sneaking Guide",
      cost: ["r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-rogues",
          categories: ["all"],
        },
      ],
    },
    {
      number: "165",
      name: "Song-Mad Treachery // Song-Mad Ruins",
      cost: ["3", "r", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell", "land"],
        },
        {
          guide: "haste",
        },
        {
          guide: "threaten",
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "166",
      name: "Spikefield Hazard // Spikefield Cave",
      cost: ["r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell", "land"],
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
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "167",
      name: "Spitfire Lagac",
      cost: ["3", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-landfall",
          categories: ["triggers"],
        },
      ],
    },
    {
      number: "168",
      name: "Synchronized Spellcraft",
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
          guide: "znr-party",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "169",
      name: "Teeterpeak Ambusher",
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
      number: "170",
      name: "Thundering Rebuke",
      cost: ["1", "r"],
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
      number: "171",
      name: "Thundering Sparkmage",
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
          guide: "znr-party",
          categories: ["payoffs"],
        },
        {
          guide: "znr-wizards",
          categories: ["all"],
        },
      ],
    },
    {
      number: "172",
      name: "Tormenting Voice",
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
      number: "173",
      name: "Tuktuk Rubblefort",
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
      number: "174",
      name: "Valakut Awakening // Valakut Stoneforge",
      cost: ["2", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell", "land"],
        },
        {
          guide: "instants",
          categories: ["board"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "175",
      name: "Valakut Exploration",
      cost: ["2", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "znr-landfall",
          categories: ["triggers"],
        },
      ],
    },
    {
      number: "176",
      name: "Wayward Guide-Beast",
      cost: ["r"],
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
      number: "177",
      name: "Adventure Awaits",
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
      number: "178",
      name: "Ancient Greenwarden",
      cost: ["4", "g", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-landfall",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "179",
      name: "Ashaya, Soul of the Wild",
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
      name: "Bala Ged Recovery // Bala Ged Sanctuary",
      cost: ["2", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell", "land"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "181",
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
      number: "182",
      name: "Canopy Baloth",
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
      number: "183",
      name: "Cragplate Baloth",
      cost: ["5", "g", "g"],
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
          guide: "znr-kicker",
          categories: ["all"],
        },
        {
          guide: "znr-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "184",
      name: "Dauntless Survivor",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
        {
          guide: "znr-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "185",
      name: "Gnarlid Colony",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
        {
          guide: "znr-counters",
          categories: ["payoffs", "enablers"],
        },
      ],
    },
    {
      number: "186",
      name: "Inscription of Abundance",
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
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
        {
          guide: "znr-lifegain",
          categories: ["enablers"],
        },
        {
          guide: "znr-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "187",
      name: "Iridescent Hornbeetle",
      cost: ["4", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-counters",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "188",
      name: "Joraga Visionary",
      cost: ["3", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-wizards",
          categories: ["all"],
        },
      ],
    },
    {
      number: "189",
      name: "Kazandu Mammoth // Kazandu Valley",
      cost: ["1", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature", "land"],
        },
        {
          guide: "znr-landfall",
          categories: ["triggers"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "190",
      name: "Kazandu Nectarpot",
      cost: ["1", "g"],
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
          guide: "znr-landfall",
          categories: ["triggers"],
        },
        {
          guide: "znr-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "191",
      name: "Kazandu Stomper",
      cost: ["5", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-mdfc",
          categories: ["synergy"],
        },
      ],
    },
    {
      number: "192",
      name: "Khalni Ambush // Khalni Territory",
      cost: ["2", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell", "land"],
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
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "193",
      name: "Lotus Cobra",
      cost: ["1", "g"],
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
          guide: "znr-landfall",
          categories: ["triggers"],
        },
      ],
    },
    {
      number: "194",
      name: "Might of Murasa",
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
          guide: "znr-kicker",
          categories: ["all"],
        },
      ],
    },
    {
      number: "195",
      name: "Murasa Brute",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
      ],
    },
    {
      number: "196",
      name: "Murasa Sproutling",
      cost: ["2", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-kicker",
          categories: ["payoffs"],
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
      ],
    },
    {
      number: "197",
      name: "Nissa's Zendikon",
      cost: ["3", "g"],
      rarity: "c",
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
      number: "198",
      name: "Oran-Rief Ooze",
      cost: ["2", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-counters",
          categories: ["payoffs", "enablers"],
        },
      ],
    },
    {
      number: "199",
      name: "Rabid Bite",
      cost: ["1", "g"],
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
      number: "200",
      name: "Reclaim the Wastes",
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
          guide: "znr-kicker",
          categories: ["all"],
        },
      ],
    },
    {
      number: "201",
      name: "Roiling Regrowth",
      cost: ["2", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["board", "other"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "ramp",
        },
        {
          guide: "znr-landfall",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "202",
      name: "Scale the Heights",
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
          guide: "ramp",
        },
        {
          guide: "znr-landfall",
          categories: ["enablers"],
        },
        {
          guide: "znr-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "203",
      name: "Scute Swarm",
      cost: ["2", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-landfall",
          categories: ["triggers"],
        },
      ],
    },
    {
      number: "204",
      name: "Skyclave Pick-Axe",
      cost: ["g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "znr-landfall",
          categories: ["triggers"],
        },
        {
          guide: "znr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "205",
      name: "Springmantle Cleric",
      cost: ["4", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-clerics",
          categories: ["all"],
        },
      ],
    },
    {
      number: "206",
      name: "Strength of Solidarity",
      cost: ["g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "207",
      name: "Swarm Shambler",
      cost: ["g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "208",
      name: "Tajuru Blightblade",
      cost: ["g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-rogues",
          categories: ["all"],
        },
      ],
    },
    {
      number: "209",
      name: "Tajuru Paragon",
      cost: ["1", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
        {
          guide: "znr-party",
          categories: ["enablers"],
        },
        {
          guide: "znr-clerics",
          categories: ["all"],
        },
        {
          guide: "znr-rogues",
          categories: ["all"],
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
        {
          guide: "znr-wizards",
          categories: ["all"],
        },
      ],
    },
    {
      number: "210",
      name: "Tajuru Snarecaster",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-rogues",
          categories: ["all"],
        },
      ],
    },
    {
      number: "211",
      name: "Tangled Florahedron // Tangled Vale",
      cost: ["1", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature", "land"],
        },
        {
          guide: "ramp",
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "212",
      name: "Taunting Arbormage",
      cost: ["2", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "falter",
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
        {
          guide: "znr-wizards",
          categories: ["all"],
        },
      ],
    },
    {
      number: "213",
      name: "Territorial Scythecat",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-landfall",
          categories: ["triggers"],
        },
        {
          guide: "znr-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "214",
      name: "Turntimber Ascetic",
      cost: ["4", "g"],
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
          guide: "znr-clerics",
          categories: ["all"],
        },
        {
          guide: "znr-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "215",
      name: "Turntimber Symbiosis // Turntimber, Serpentine Wood",
      cost: ["4", "g", "g", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell", "land"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
        {
          guide: "znr-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "216",
      name: "Vastwood Fortification // Vastwood Thicket",
      cost: ["g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell", "land"],
        },
        {
          guide: "instants",
          categories: ["board"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
        {
          guide: "znr-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "217",
      name: "Vastwood Surge",
      cost: ["3", "g"],
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
          guide: "znr-landfall",
          categories: ["enablers"],
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
        {
          guide: "znr-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "218",
      name: "Veteran Adventurer",
      cost: ["5", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-party",
          categories: ["enablers"],
        },
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
        {
          guide: "znr-clerics",
          categories: ["all"],
        },
        {
          guide: "znr-rogues",
          categories: ["all"],
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
        {
          guide: "znr-wizards",
          categories: ["all"],
        },
      ],
    },
    {
      number: "219",
      name: "Vine Gecko",
      cost: ["1", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-kicker",
          categories: ["payoffs"],
        },
        {
          guide: "znr-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "220",
      name: "Akiri, Fearless Voyager",
      cost: ["1", "r", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
        {
          guide: "znr-equipment",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "221",
      name: "Brushfire Elemental",
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
          guide: "znr-landfall",
          categories: ["triggers"],
        },
      ],
    },
    {
      number: "222",
      name: "Cleric of Life's Bond",
      cost: ["w", "b"],
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
          guide: "znr-clerics",
          categories: ["payoffs"],
        },
        {
          guide: "znr-clerics",
          categories: ["all"],
        },
        {
          guide: "znr-lifegain",
          categories: ["payoffs"],
        },
        {
          guide: "znr-lifegain",
          categories: ["enablers"],
        },
        {
          guide: "znr-lifegain",
          categories: ["enablers"],
        },
        {
          guide: "znr-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "223",
      name: "Grakmaw, Skyclave Ravager",
      cost: ["1", "b", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-counters",
          categories: ["payoffs", "enablers"],
        },
      ],
    },
    {
      number: "224",
      name: "Kargan Warleader",
      cost: ["1", "r", "w"],
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
          guide: "znr-warriors",
          categories: ["all", "payoffs"],
        },
      ],
    },
    {
      number: "225",
      name: "Kaza, Roil Chaser",
      cost: ["u", "r"],
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
          guide: "znr-wizards",
          categories: ["all"],
        },
      ],
    },
    {
      number: "226",
      name: "Linvala, Shield of Sea Gate",
      cost: ["1", "w", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
        {
          guide: "znr-wizards",
          categories: ["all"],
        },
      ],
    },
    {
      number: "227",
      name: "Lullmage's Familiar",
      cost: ["1", "g", "u"],
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
          guide: "ramp",
        },
        {
          guide: "znr-kicker",
          categories: ["payoffs"],
        },
        {
          guide: "znr-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "228",
      name: "Moss-Pit Skeleton",
      cost: ["b", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
        {
          guide: "znr-counters",
          categories: ["payoffs", "enablers"],
        },
      ],
    },
    {
      number: "229",
      name: "Murasa Rootgrazer",
      cost: ["g", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ramp",
        },
        {
          guide: "znr-landfall",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "230",
      name: "Nahiri, Heir of the Ancients",
      cost: ["2", "r", "w"],
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
          guide: "znr-equipment",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "231",
      name: "Nissa of Shadowed Boughs",
      cost: ["2", "b", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "haste",
        },
        {
          guide: "znr-landfall",
          categories: ["triggers"],
        },
        {
          guide: "znr-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "232",
      name: "Omnath, Locus of Creation",
      cost: ["r", "g", "w", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-landfall",
          categories: ["triggers"],
        },
      ],
    },
    {
      number: "233",
      name: "Orah, Skyclave Hierophant",
      cost: ["2", "w", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-clerics",
          categories: ["payoffs"],
        },
        {
          guide: "znr-clerics",
          categories: ["all"],
        },
      ],
    },
    {
      number: "234",
      name: "Phylath, World Sculptor",
      cost: ["4", "r", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-landfall",
          categories: ["triggers"],
        },
        {
          guide: "znr-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "235",
      name: "Ravager's Mace",
      cost: ["1", "b", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
        {
          guide: "znr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "236",
      name: "Soaring Thought-Thief",
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
        {
          guide: "masspump",
        },
        {
          guide: "mill",
        },
        {
          guide: "znr-mill",
          categories: ["payoffs"],
        },
        {
          guide: "znr-rogues",
          categories: ["payoffs", "all"],
        },
        {
          guide: "znr-mill",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "237",
      name: "Spoils of Adventure",
      cost: ["4", "w", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["w", "u"],
          categories: ["other"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
        {
          guide: "znr-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "238",
      name: "Umara Mystic",
      cost: ["1", "u", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-wizards",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "239",
      name: "Verazol, the Split Current",
      cost: ["x", "g", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-kicker",
          categories: ["payoffs"],
        },
        {
          guide: "znr-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "240",
      name: "Yasharn, Implacable Earth",
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
      number: "241",
      name: "Zagras, Thief of Heartbeats",
      cost: ["4", "b", "r"],
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
          guide: "znr-party",
          categories: ["payoffs"],
        },
        {
          guide: "znr-rogues",
          categories: ["all"],
        },
      ],
    },
    {
      number: "242",
      name: "Zareth San, the Trickster",
      cost: ["3", "u", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          cost: ["2", "u", "b"],
          categories: ["board"],
        },
        {
          guide: "znr-rogues",
          categories: ["payoffs", "all"],
        },
      ],
    },
    {
      number: "243",
      name: "Cliffhaven Kitesail",
      cost: ["1"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "znr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "244",
      name: "Forsaken Monument",
      cost: ["5"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "masspump",
        },
        {
          guide: "znr-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "245",
      name: "Lithoform Engine",
      cost: ["4"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "246",
      name: "Myriad Construct",
      cost: ["4"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
        {
          guide: "znr-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "247",
      name: "Relic Amulet",
      cost: ["2"],
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
          guide: "znr-wizards",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "248",
      name: "Relic Axe",
      cost: ["2"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "znr-warriors",
          categories: ["payoffs"],
        },
        {
          guide: "znr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "249",
      name: "Relic Golem",
      cost: ["3"],
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
          guide: "znr-mill",
          categories: ["payoffs"],
        },
        {
          guide: "znr-mill",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "250",
      name: "Relic Vial",
      cost: ["3"],
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
          guide: "znr-clerics",
          categories: ["payoffs"],
        },
        {
          guide: "znr-lifegain",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "251",
      name: "Sea Gate Colossus",
      cost: ["7"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-party",
          categories: ["payoffs"],
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
      ],
    },
    {
      number: "252",
      name: "Skyclave Relic",
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
          guide: "znr-kicker",
          categories: ["all"],
        },
      ],
    },
    {
      number: "253",
      name: "Skyclave Sentinel",
      cost: ["3"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "znr-kicker",
          categories: ["all"],
        },
        {
          guide: "znr-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "254",
      name: "Spare Supplies",
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
      number: "255",
      name: "Stonework Packbeast",
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
          guide: "znr-party",
          categories: ["enablers"],
        },
        {
          guide: "znr-clerics",
          categories: ["all"],
        },
        {
          guide: "znr-rogues",
          categories: ["all"],
        },
        {
          guide: "znr-warriors",
          categories: ["all"],
        },
        {
          guide: "znr-wizards",
          categories: ["all"],
        },
      ],
    },
    {
      number: "256",
      name: "Utility Knife",
      cost: ["1"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "znr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "257",
      name: "Base Camp",
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
          guide: "znr-party",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "258",
      name: "Branchloft Pathway // Boulderloft Pathway",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "259",
      name: "Brightclimb Pathway // Grimclimb Pathway",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "260",
      name: "Clearwater Pathway // Murkwater Pathway",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "261",
      name: "Cragcrown Pathway // Timbercrown Pathway",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "262",
      name: "Crawling Barrens",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "znr-counters",
          categories: ["enablers"],
        },
      ],
    },
    {
      number: "263",
      name: "Needleverge Pathway // Pillarverge Pathway",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "264",
      name: "Riverglide Pathway // Lavaglide Pathway",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "znr-mdfc",
          categories: ["all"],
        },
      ],
    },
    {
      number: "265",
      name: "Throne of Makindi",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "znr-kicker",
          categories: ["payoffs"],
        },
      ],
    },
  ],
};

export default format;
