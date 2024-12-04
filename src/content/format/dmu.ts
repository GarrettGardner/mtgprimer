import type { IFormatConfig } from "@/models";

const format: IFormatConfig = {
  code: "dmu",
  name: "Dominaria United",
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
    "dmu-defender": {
      name: "Theme: Defender",
      icon: "fas fa-shield-alt",
    },
    "dmu-domain": {
      name: "Mechanic: Domain",
      icon: "fas fa-map",
    },
    "dmu-enlist": {
      name: "Mechanic: Enlist",
      icon: "fas fa-fist-raised",
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
      guides: ["dmu-defender", "dmu-domain", "dmu-enlist"],
    },
  },
  cards: [
    {
      number: "1",
      name: "Karn, Living Legacy",
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
      number: "2",
      name: "Anointed Peacekeeper",
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
      number: "3",
      name: "Archangel of Wrath",
      cost: ["2", "w", "w"],
      rarity: "r",
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
          guide: "lifegain",
        },
      ],
    },
    {
      number: "4",
      name: "Argivian Cavalier",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-enlist",
        },
      ],
    },
    {
      number: "5",
      name: "Argivian Phalanx",
      cost: ["5", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "6",
      name: "Artillery Blast",
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
        {
          guide: "dmu-domain",
        },
      ],
    },
    {
      number: "7",
      name: "Benalish Faithbonder",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-enlist",
        },
      ],
    },
    {
      number: "8",
      name: "Benalish Sleeper",
      cost: ["1", "w"],
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
      ],
    },
    {
      number: "9",
      name: "Captain's Call",
      cost: ["3", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "10",
      name: "Charismatic Vanguard",
      cost: ["2", "w"],
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
      number: "11",
      name: "Citizen's Arrest",
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
      number: "12",
      name: "Cleaving Skyrider",
      cost: ["2", "w"],
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
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "13",
      name: "Clockwork Drawbridge",
      cost: ["w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-defender",
        },
      ],
    },
    {
      number: "14",
      name: "Coalition Skyknight",
      cost: ["3", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-enlist",
        },
      ],
    },
    {
      number: "15",
      name: "Danitha, Benalia's Hope",
      cost: ["4", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "16",
      name: "Defiler of Faith",
      cost: ["3", "w", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "17",
      name: "Destroy Evil",
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
        {
          guide: "disenchant",
        },
      ],
    },
    {
      number: "18",
      name: "Griffin Protector",
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
      number: "19",
      name: "Guardian of New Benalia",
      cost: ["1", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-enlist",
        },
      ],
    },
    {
      number: "20",
      name: "Heroic Charge",
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
      number: "21",
      name: "Join Forces",
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
      ],
    },
    {
      number: "22",
      name: "Juniper Order Rootweaver",
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
      number: "23",
      name: "Knight of Dawn's Light",
      cost: ["1", "w"],
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
      number: "24",
      name: "Leyline Binding",
      cost: ["5", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["w"],
          categories: ["board"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "dmu-domain",
        },
      ],
    },
    {
      number: "25",
      name: "Love Song of Night and Day",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "26",
      name: "Mesa Cavalier",
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
      ],
    },
    {
      number: "27",
      name: "Phyrexian Missionary",
      cost: ["1", "w"],
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
      number: "28",
      name: "Prayer of Binding",
      cost: ["3", "w"],
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
      number: "29",
      name: "Resolute Reinforcements",
      cost: ["1", "w"],
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
      number: "30",
      name: "Runic Shot",
      cost: ["w"],
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
      number: "31",
      name: "Samite Herbalist",
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
      number: "32",
      name: "Serra Paragon",
      cost: ["2", "w", "w"],
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
      number: "33",
      name: "Shalai's Acolyte",
      cost: ["4", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "34",
      name: "Stall for Time",
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
      ],
    },
    {
      number: "35",
      name: "Take Up the Shield",
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
          guide: "lifegain",
        },
      ],
    },
    {
      number: "36",
      name: "Temporary Lockdown",
      cost: ["1", "w", "w"],
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
          guide: "boardwipe",
          categories: ["conditional"],
        },
      ],
    },
    {
      number: "37",
      name: "Urza Assembles the Titans",
      cost: ["3", "w", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "38",
      name: "Valiant Veteran",
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
      number: "39",
      name: "Wingmantle Chaplain",
      cost: ["3", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-defender",
        },
      ],
    },
    {
      number: "40",
      name: "Academy Loremaster",
      cost: ["u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "41",
      name: "Academy Wall",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-defender",
        },
      ],
    },
    {
      number: "42",
      name: "Aether Channeler",
      cost: ["2", "u"],
      rarity: "r",
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
      number: "43",
      name: "Battlewing Mystic",
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
      number: "44",
      name: "Combat Research",
      cost: ["u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "45",
      name: "Coral Colony",
      cost: ["1", "u"],
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
          guide: "dmu-defender",
        },
      ],
    },
    {
      number: "46",
      name: "Defiler of Dreams",
      cost: ["3", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "47",
      name: "Djinn of the Fountain",
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
      number: "48",
      name: "Ertai's Scorn",
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
          categories: ["counterspell"],
        },
        {
          guide: "counterspell",
        },
      ],
    },
    {
      number: "49",
      name: "Essence Scatter",
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
      number: "50",
      name: "Founding the Third Path",
      cost: ["1", "u"],
      rarity: "u",
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
      number: "51",
      name: "Frostfist Strider",
      cost: ["3", "u", "u"],
      rarity: "u",
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
      number: "52",
      name: "Haughty Djinn",
      cost: ["1", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "53",
      name: "Haunting Figment",
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
      number: "54",
      name: "Impede Momentum",
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
      number: "55",
      name: "Impulse",
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
      number: "56",
      name: "Joint Exploration",
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
          guide: "ramp",
        },
      ],
    },
    {
      number: "57",
      name: "Micromancer",
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
      number: "58",
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
      number: "59",
      name: "The Phasing of Zhalfir",
      cost: ["2", "u", "u"],
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
      number: "60",
      name: "Phyrexian Espionage",
      cost: ["2", "u"],
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
      number: "61",
      name: "Pixie Illusionist",
      cost: ["u"],
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
      number: "62",
      name: "Protect the Negotiators",
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
          guide: "counterspell",
        },
      ],
    },
    {
      number: "63",
      name: "Rona's Vortex",
      cost: ["u"],
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
          categories: ["removal", "bounce"],
        },
        {
          guide: "bounce",
        },
      ],
    },
    {
      number: "64",
      name: "Shore Up",
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
      number: "65",
      name: "Silver Scrutiny",
      cost: ["x", "u", "u"],
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
      number: "66",
      name: "Soaring Drake",
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
      number: "67",
      name: "Sphinx of Clear Skies",
      cost: ["3", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-domain",
        },
      ],
    },
    {
      number: "68",
      name: "Talas Lookout",
      cost: ["2", "u", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "69",
      name: "Tidepool Turtle",
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
      number: "70",
      name: "Timely Interference",
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
      number: "71",
      name: "Tolarian Geyser",
      cost: ["2", "u"],
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
      ],
    },
    {
      number: "72",
      name: "Tolarian Terror",
      cost: ["6", "u"],
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
      name: "Vesuvan Duplimancy",
      cost: ["3", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "74",
      name: "Voda Sea Scavenger",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-domain",
        },
      ],
    },
    {
      number: "75",
      name: "Vodalian Hexcatcher",
      cost: ["1", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          categories: ["board", "counterspell"],
        },
        {
          guide: "counterspell",
        },
      ],
    },
    {
      number: "76",
      name: "Vodalian Mindsinger",
      cost: ["1", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mindcontrol",
        },
      ],
    },
    {
      number: "77",
      name: "Volshe Tideturner",
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
      number: "78",
      name: "Aggressive Sabotage",
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
      number: "79",
      name: "Balduvian Atrocity",
      cost: ["2", "b"],
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
      number: "80",
      name: "Battle-Rage Blessing",
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
      number: "81",
      name: "Battlefly Swarm",
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
      number: "82",
      name: "Blight Pile",
      cost: ["1", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-defender",
        },
      ],
    },
    {
      number: "83",
      name: "Bone Splinters",
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
      number: "84",
      name: "Braids, Arisen Nightmare",
      cost: ["1", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "85",
      name: "Braids's Frightful Return",
      cost: ["2", "b"],
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
      number: "86",
      name: "Choking Miasma",
      cost: ["1", "b", "b"],
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
          categories: ["conditional"],
        },
      ],
    },
    {
      number: "87",
      name: "The Cruelty of Gix",
      cost: ["3", "b", "b"],
      rarity: "r",
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
      number: "88",
      name: "Cult Conscript",
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
      number: "89",
      name: "Cut Down",
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
      ],
    },
    {
      number: "90",
      name: "Defiler of Flesh",
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
      number: "91",
      name: "Drag to the Bottom",
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
        {
          guide: "dmu-domain",
        },
      ],
    },
    {
      number: "92",
      name: "Eerie Soultender",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mill",
          categories: ["self"],
        },
      ],
    },
    {
      number: "93",
      name: "Evolved Sleeper",
      cost: ["b"],
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
      name: "Extinguish the Light",
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
          categories: ["boardwipe"],
        },
      ],
    },
    {
      number: "95",
      name: "Gibbering Barricade",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-defender",
        },
      ],
    },
    {
      number: "96",
      name: "Knight of Dusk's Shadow",
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
      number: "97",
      name: "Liliana of the Veil",
      cost: ["1", "b", "b"],
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
      number: "98",
      name: "Monstrous War-Leech",
      cost: ["3", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mill",
          categories: ["self"],
        },
      ],
    },
    {
      number: "99",
      name: "Phyrexian Rager",
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
      number: "100",
      name: "Phyrexian Vivisector",
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
      number: "101",
      name: "Phyrexian Warhorse",
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
      number: "102",
      name: "Pilfer",
      cost: ["1", "b"],
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
      number: "103",
      name: "The Raven Man",
      cost: ["1", "b"],
      rarity: "r",
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
      number: "104",
      name: "Sengir Connoisseur",
      cost: ["3", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "105",
      name: "Shadow Prophecy",
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
          guide: "dmu-domain",
        },
      ],
    },
    {
      number: "106",
      name: "Shadow-Rite Priest",
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
      number: "107",
      name: "Sheoldred, the Apocalypse",
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
      ],
    },
    {
      number: "108",
      name: "Sheoldred's Restoration",
      cost: ["3", "b"],
      rarity: "u",
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
      number: "109",
      name: "Splatter Goblin",
      cost: ["1", "b"],
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
      number: "110",
      name: "Stronghold Arena",
      cost: ["1", "b"],
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
      number: "111",
      name: "Tattered Apparition",
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
      number: "112",
      name: "Toxic Abomination",
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
      number: "113",
      name: "Tribute to Urborg",
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
      ],
    },
    {
      number: "114",
      name: "Urborg Repossession",
      cost: ["b"],
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
      number: "115",
      name: "Writhing Necromass",
      cost: ["6", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "116",
      name: "Balduvian Berserker",
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
          guide: "dmu-enlist",
        },
      ],
    },
    {
      number: "117",
      name: "Chaotic Transformation",
      cost: ["5", "r"],
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
          guide: "disenchant",
        },
      ],
    },
    {
      number: "118",
      name: "Coalition Warbrute",
      cost: ["3", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-enlist",
        },
      ],
    },
    {
      number: "119",
      name: "Defiler of Instinct",
      cost: ["2", "r", "r"],
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
          guide: "ping",
        },
      ],
    },
    {
      number: "120",
      name: "Dragon Whelp",
      cost: ["2", "r", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "121",
      name: "The Elder Dragon War",
      cost: ["2", "r", "r"],
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
          categories: ["conditional"],
        },
      ],
    },
    {
      number: "122",
      name: "Electrostatic Infantry",
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
      number: "123",
      name: "Fires of Victory",
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
      ],
    },
    {
      number: "124",
      name: "Flowstone Infusion",
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
      ],
    },
    {
      number: "125",
      name: "Flowstone Kavu",
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
      name: "Furious Bellow",
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
      number: "127",
      name: "Ghitu Amplifier",
      cost: ["1", "r"],
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
      number: "128",
      name: "Goblin Picker",
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
      number: "129",
      name: "Hammerhand",
      cost: ["r"],
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
          guide: "falter",
        },
      ],
    },
    {
      number: "130",
      name: "Hurler Cyclops",
      cost: ["3", "r", "r"],
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
      number: "131",
      name: "Hurloon Battle Hymn",
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
        {
          guide: "lifegain",
        },
      ],
    },
    {
      number: "132",
      name: "In Thrall to the Pit",
      cost: ["3", "r"],
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
          guide: "haste",
        },
        {
          guide: "threaten",
        },
      ],
    },
    {
      number: "133",
      name: "Jaya, Fiery Negotiator",
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
      number: "134",
      name: "Jaya's Firenado",
      cost: ["4", "r"],
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
      number: "135",
      name: "Keldon Flamesage",
      cost: ["2", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-enlist",
        },
      ],
    },
    {
      number: "136",
      name: "Keldon Strike Team",
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
      number: "137",
      name: "Lightning Strike",
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
      number: "138",
      name: "Meria's Outrider",
      cost: ["4", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-domain",
        },
      ],
    },
    {
      number: "139",
      name: "Molten Monstrosity",
      cost: ["7", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "140",
      name: "Phoenix Chick",
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
      ],
    },
    {
      number: "141",
      name: "Radha's Firebrand",
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
          guide: "dmu-domain",
        },
      ],
    },
    {
      number: "142",
      name: "Rundvelt Hordemaster",
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
      name: "Shivan Devastator",
      cost: ["x", "r"],
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
      number: "144",
      name: "Smash to Dust",
      cost: ["1", "r"],
      rarity: "c",
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
          categories: ["conditional"],
        },
        {
          guide: "disenchant",
        },
        {
          guide: "ping",
        },
      ],
    },
    {
      number: "145",
      name: "Sprouting Goblin",
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
      number: "146",
      name: "Squee, Dubious Monarch",
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
      number: "147",
      name: "Temporal Firestorm",
      cost: ["3", "r", "r"],
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
      number: "148",
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
          categories: ["board"],
        },
      ],
    },
    {
      number: "149",
      name: "Twinferno",
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
      number: "150",
      name: "Viashino Branchrider",
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
      number: "151",
      name: "Warhost's Frenzy",
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
      number: "152",
      name: "Yavimaya Steelcrusher",
      cost: ["1", "r"],
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
          guide: "dmu-enlist",
        },
      ],
    },
    {
      number: "153",
      name: "Yotia Declares War",
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
      number: "154",
      name: "Barkweave Crusher",
      cost: ["3", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-enlist",
        },
      ],
    },
    {
      number: "155",
      name: "Bite Down",
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
      ],
    },
    {
      number: "156",
      name: "Bog Badger",
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
      number: "157",
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
      number: "158",
      name: "Colossal Growth",
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
          guide: "haste",
        },
      ],
    },
    {
      number: "159",
      name: "Deathbloom Gardener",
      cost: ["2", "g"],
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
      number: "160",
      name: "Defiler of Vigor",
      cost: ["3", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "161",
      name: "Elfhame Wurm",
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
      number: "162",
      name: "Elvish Hydromancer",
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
      number: "163",
      name: "Floriferous Vinewall",
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
          guide: "dmu-defender",
        },
      ],
    },
    {
      number: "164",
      name: "Gaea's Might",
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
          guide: "dmu-domain",
        },
      ],
    },
    {
      number: "165",
      name: "Herd Migration",
      cost: ["6", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["1", "g"],
          categories: ["other"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "lifegain",
        },
        {
          guide: "dmu-domain",
        },
      ],
    },
    {
      number: "166",
      name: "Hexbane Tortoise",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-enlist",
        },
      ],
    },
    {
      number: "167",
      name: "Leaf-Crowned Visionary",
      cost: ["g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "168",
      name: "Linebreaker Baloth",
      cost: ["3", "g", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-enlist",
        },
      ],
    },
    {
      number: "169",
      name: "Llanowar Greenwidow",
      cost: ["2", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-domain",
        },
      ],
    },
    {
      number: "170",
      name: "Llanowar Loamspeaker",
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
      ],
    },
    {
      number: "171",
      name: "Llanowar Stalker",
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
      number: "172",
      name: "Magnigoth Sentry",
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
      number: "173",
      name: "Mossbeard Ancient",
      cost: ["5", "g", "g"],
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
      number: "174",
      name: "Nishoba Brawler",
      cost: ["1", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-domain",
        },
      ],
    },
    {
      number: "175",
      name: "Quirion Beastcaller",
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
      number: "176",
      name: "Scout the Wilderness",
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
      ],
    },
    {
      number: "177",
      name: "Silverback Elder",
      cost: ["2", "g", "g", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
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
      number: "178",
      name: "Slimefoot's Survey",
      cost: ["4", "g"],
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
          guide: "dmu-domain",
        },
      ],
    },
    {
      number: "179",
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
      number: "180",
      name: "Strength of the Coalition",
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
          guide: "masspump",
        },
      ],
    },
    {
      number: "181",
      name: "Sunbathing Rootwalla",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-domain",
        },
      ],
    },
    {
      number: "182",
      name: "Tail Swipe",
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
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "183",
      name: "Tear Asunder",
      cost: ["1", "g"],
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
          guide: "disenchant",
        },
      ],
    },
    {
      number: "184",
      name: "Territorial Maro",
      cost: ["4", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-domain",
        },
      ],
    },
    {
      number: "185",
      name: "Threats Undetected",
      cost: ["2", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "186",
      name: "Urborg Lhurgoyf",
      cost: ["1", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mill",
          categories: ["self"],
        },
      ],
    },
    {
      number: "187",
      name: "Vineshaper Prodigy",
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
      number: "188",
      name: "The Weatherseed Treaty",
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
        {
          guide: "dmu-domain",
        },
      ],
    },
    {
      number: "189",
      name: "The World Spell",
      cost: ["5", "g", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "190",
      name: "Yavimaya Iconoclast",
      cost: ["1", "g"],
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
      number: "191",
      name: "Yavimaya Sojourner",
      cost: ["7", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-domain",
        },
      ],
    },
    {
      number: "192",
      name: "Ajani, Sleeper Agent",
      cost: ["1", "g", "gwp", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "193",
      name: "Aron, Benalia's Ruin",
      cost: ["w", "w", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "194",
      name: "Astor, Bearer of Blades",
      cost: ["2", "r", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "195",
      name: "Baird, Argivian Recruiter",
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
      number: "196",
      name: "Balmor, Battlemage Captain",
      cost: ["u", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "197",
      name: "Bortuk Bonerattle",
      cost: ["4", "b", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-domain",
        },
      ],
    },
    {
      number: "198",
      name: "Elas il-Kor, Sadistic Pilgrim",
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
      ],
    },
    {
      number: "199",
      name: "Ertai Resurrected",
      cost: ["2", "u", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          categories: ["board", "counterspell"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "counterspell",
        },
      ],
    },
    {
      number: "200",
      name: "Garna, Bloodfist of Keld",
      cost: ["1", "b", "r", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "201",
      name: "Ivy, Gleeful Spellthief",
      cost: ["g", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "202",
      name: "Jhoira, Ageless Innovator",
      cost: ["u", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "203",
      name: "Jodah, the Unifier",
      cost: ["w", "u", "b", "r", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "204",
      name: "King Darien XLVIII",
      cost: ["1", "g", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "205",
      name: "Lagomos, Hand of Hatred",
      cost: ["1", "b", "r"],
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
      number: "206",
      name: "Meria, Scholar of Antiquity",
      cost: ["1", "r", "g"],
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
      number: "207",
      name: "Nael, Avizoa Aeronaut",
      cost: ["2", "g", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-domain",
        },
      ],
    },
    {
      number: "208",
      name: "Najal, the Storm Runner",
      cost: ["2", "u", "u", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "209",
      name: "Nemata, Primeval Warden",
      cost: ["2", "b", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "210",
      name: "Queen Allenal of Ruadach",
      cost: ["g", "w", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "211",
      name: "Radha, Coalition Warlord",
      cost: ["2", "r", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-domain",
        },
      ],
    },
    {
      number: "212",
      name: "Raff, Weatherlight Stalwart",
      cost: ["w", "u"],
      rarity: "u",
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
      number: "213",
      name: "Ratadrabik of Urborg",
      cost: ["2", "w", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "214",
      name: "Rith, Liberated Primeval",
      cost: ["2", "r", "g", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "215",
      name: "Rivaz of the Claw",
      cost: ["1", "b", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "216",
      name: "Rona, Sheoldred's Faithful",
      cost: ["1", "u", "b", "b"],
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
      name: "Rulik Mons, Warren Chief",
      cost: ["1", "r", "g", "g"],
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
      name: "Shanna, Purifying Blade",
      cost: ["g", "w", "u"],
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
      name: "Sol'Kanar the Tainted",
      cost: ["2", "u", "b", "r"],
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
      number: "220",
      name: "Soul of Windgrace",
      cost: ["1", "b", "r", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "221",
      name: "Stenn, Paranoid Partisan",
      cost: ["w", "u"],
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
      name: "Tatyova, Steward of Tides",
      cost: ["g", "g", "u"],
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
      name: "Tori D'Avenant, Fury Rider",
      cost: ["1", "r", "r", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "224",
      name: "Tura Kenner\u00fcd, Skyknight",
      cost: ["2", "w", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "225",
      name: "Uurg, Spawn of Turg",
      cost: ["b", "b", "g"],
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
      number: "226",
      name: "Vohar, Vodalian Desecrator",
      cost: ["u", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "227",
      name: "Zar Ojanen, Scion of Efrava",
      cost: ["3", "g", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-domain",
        },
      ],
    },
    {
      number: "228",
      name: "Zur, Eternal Schemer",
      cost: ["w", "u", "b"],
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
      number: "229",
      name: "Automatic Librarian",
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
      number: "230",
      name: "Golden Argosy",
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
      number: "231",
      name: "Hero's Heirloom",
      cost: ["2"],
      rarity: "u",
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
      number: "232",
      name: "Inscribed Tablet",
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
      number: "233",
      name: "Jodah's Codex",
      cost: ["5"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "dmu-domain",
        },
      ],
    },
    {
      number: "234",
      name: "Karn's Sylex",
      cost: ["3"],
      rarity: "m",
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
      number: "235",
      name: "Meteorite",
      cost: ["5"],
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
          guide: "fixing",
        },
        {
          guide: "ramp",
        },
      ],
    },
    {
      number: "236",
      name: "Relic of Legends",
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
      ],
    },
    {
      number: "237",
      name: "Salvaged Manaworker",
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
      number: "238",
      name: "Shield-Wall Sentinel",
      cost: ["4"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "dmu-defender",
        },
      ],
    },
    {
      number: "239",
      name: "Timeless Lotus",
      cost: ["5"],
      rarity: "m",
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
      number: "240",
      name: "Vanquisher's Axe",
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
      number: "241",
      name: "Walking Bulwark",
      cost: ["1"],
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
          guide: "dmu-defender",
        },
      ],
    },
    {
      number: "242",
      name: "Weatherlight Compleated",
      cost: ["2"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "243",
      name: "Adarkar Wastes",
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
      number: "244",
      name: "Caves of Koilos",
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
      number: "245",
      name: "Contaminated Aquifer",
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
      number: "246",
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
      number: "247",
      name: "Geothermal Bog",
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
      number: "248",
      name: "Haunted Mire",
      cost: [],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
      ],
    },
    {
      number: "249",
      name: "Idyllic Beachfront",
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
      number: "250",
      name: "Karplusan Forest",
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
      number: "251",
      name: "Molten Tributary",
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
      number: "252",
      name: "Plaza of Heroes",
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
      name: "Radiant Grove",
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
      number: "254",
      name: "Sacred Peaks",
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
      name: "Shivan Reef",
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
      name: "Sulfurous Springs",
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
      name: "Sunlit Marsh",
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
      number: "258",
      name: "Tangled Islet",
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
      number: "259",
      name: "Thran Portal",
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
      number: "260",
      name: "Wooded Ridgeline",
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
      number: "261",
      name: "Yavimaya Coast",
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
