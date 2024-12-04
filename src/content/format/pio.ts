import type { IFormatConfig } from "@/models";

const format: IFormatConfig = {
  code: "pio",
  name: "Pioneer Masters",
  includeFormats: ["pio-pla", "pio-spe", "pio-dev"],
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
      name: "Instants Guide",
      defaultGrouping: "mv",
      defaultOrdering: "rarity",
      categories: {
        board: "Board",
        counterspell: "Counterspell",
        other: "Other",
      },
    },
    bounce: {
      categories: {
        self: "Self Only",
      },
    },
    counterspell: {},
    damage: {},
    destruction: {},
    discard: {},
    disenchant: {},
    disruption: {},
    draw: {},
    equipment: {
      categories: {
        synergy: "Synergy",
      },
    },
    evasion: {
      categories: {
        granted: "Granted",
      },
    },
    falter: {},
    fixing: {},
    flying: {
      categories: {
        granted: "Granted",
      },
    },
    fog: {},
    haste: {
      categories: {
        granted: "Granted",
      },
    },
    lifegain: {
      categories: {
        granted: "synergy",
      },
    },
    lockdown: {},
    masspump: {},
    mill: {
      categories: {
        self: "Self Only",
      },
    },
    mindcontrol: {},
    ping: {},
    ramp: {},
    reach: {},
    reanimate: {},
    shrink: {},
    threaten: {},
    trample: {},
    wrath: {
      categories: {
        conditional: "Conditional",
      },
    },
  },
  guideGroups: {
    removal: {
      name: "Removal",
      defaultGrouping: "category",
      defaultOrdering: "number",
      guides: ["bounce", "destruction", "disruption", "lockdown", "mindcontrol", "ping", "shrink", "threaten", "wrath"],
    },
    effects: {
      name: "Effect-o-pedia",
      defaultGrouping: "category",
      defaultOrdering: "number",
      guides: [
        "bounce",
        "counterspell",
        "damage",
        "destruction",
        "discard",
        "disenchant",
        "disruption",
        "draw",
        "equipment",
        "evasion",
        "falter",
        "fixing",
        "flying",
        "fog",
        "haste",
        "lifegain",
        "lockdown",
        "masspump",
        "mill",
        "mindcontrol",
        "ping",
        "ramp",
        "reach",
        "reanimate",
        "shrink",
        "threaten",
        "trample",
        "wrath",
      ],
    },
  },
  cards: [
    {
      number: "1",
      name: "Bane of Bala Ged",
      cost: ["7"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "2",
      name: "Scion of Ugin",
      cost: ["6"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
      ],
    },
    {
      number: "3",
      name: "Void Winnower",
      cost: ["9"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "4",
      name: "Archangel of Thune",
      cost: ["3", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
        {
          guide: "lifegain",
        },
      ],
    },
    {
      number: "5",
      name: "Archway Angel",
      cost: ["5", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
        {
          guide: "lifegain",
          categories: ["synergy"],
        },
      ],
    },
    {
      number: "6",
      name: "Ardenvale Tactician // Dizzying Swoop (Ardenvale Tactician)",
      cost: ["1", "w", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
      ],
    },
    {
      number: "6",
      name: "Ardenvale Tactician // Dizzying Swoop (Dizzying Swoop)",
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
          guide: "disruption",
        },
      ],
    },
    {
      number: "7",
      name: "Artful Maneuver",
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
      ],
    },
    {
      number: "8",
      name: "Celestial Archon",
      cost: ["3", "w", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
      ],
    },
    {
      number: "9",
      name: "Chained to the Rocks",
      cost: ["w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "destruction",
        },
      ],
    },
    {
      number: "10",
      name: "Compulsory Rest",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "lifegain",
          categories: ["synergy"],
        },
        {
          guide: "lockdown",
        },
      ],
    },
    {
      number: "11",
      name: "Dictate of Heliod",
      cost: ["3", "w", "w"],
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
          guide: "masspump",
        },
      ],
    },
    {
      number: "12",
      name: "Extricator of Sin // Extricator of Flesh (Extricator of Sin)",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
      isFlippable: true,
    },
    {
      number: "12",
      name: "Extricator of Sin // Extricator of Flesh (Extricator of Flesh)",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
      isFlippable: true,
      isFlipped: true,
    },
    {
      number: "13",
      name: "Ghostblade Eidolon",
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
      number: "14",
      name: "Gideon, Ally of Zendikar",
      cost: ["2", "w", "w"],
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
      number: "15",
      name: "Heliod's Pilgrim",
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
      number: "16",
      name: "Hero of Iroas",
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
      number: "17",
      name: "Hopeful Eidolon",
      cost: ["w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
          categories: ["synergy"],
        },
      ],
    },
    {
      number: "18",
      name: "Imposing Sovereign",
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
      number: "19",
      name: "Kabira Takedown // Kabira Plateau (Kabira Takedown)",
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
          guide: "destruction",
        },
      ],
      isFlippable: true,
    },
    {
      number: "19",
      name: "Kabira Takedown // Kabira Plateau (Kabira Plateau)",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
      ],
      isFlippable: true,
      isFlipped: true,
    },
    {
      number: "20",
      name: "Keening Apparition",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "disenchant",
        },
      ],
    },
    {
      number: "21",
      name: "Knight of the White Orchid",
      cost: ["w", "w"],
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
      number: "22",
      name: "Knightly Valor",
      cost: ["4", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "23",
      name: "Kytheon, Hero of Akros // Gideon, Battle-Forged (Kytheon, Hero of Akros)",
      cost: ["w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
      isFlippable: true,
    },
    {
      number: "23",
      name: "Kytheon, Hero of Akros // Gideon, Battle-Forged (Gideon, Battle-Forged)",
      cost: [],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "disruption",
        },
      ],
      isFlippable: true,
      isFlipped: true,
    },
    {
      number: "24",
      name: "Lagonna-Band Trailblazer",
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
      number: "25",
      name: "Linvala, the Preserver",
      cost: ["4", "w", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
        {
          guide: "lifegain",
          categories: ["synergy"],
        },
      ],
    },
    {
      number: "26",
      name: "Lotus-Eye Mystics",
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
      number: "27",
      name: "Mentor of the Meek",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "draw",
        },
      ],
    },
    {
      number: "28",
      name: "Phalanx Leader",
      cost: ["w", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "29",
      name: "Phalanx Tactics",
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
      ],
    },
    {
      number: "30",
      name: "Secure the Wastes",
      cost: ["x", "w"],
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
      number: "31",
      name: "Sejiri Shelter // Sejiri Glacier (Sejiri Shelter)",
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
      ],
      isFlippable: true,
    },
    {
      number: "31",
      name: "Sejiri Shelter // Sejiri Glacier (Sejiri Glacier)",
      cost: [],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
      ],
      isFlippable: true,
      isFlipped: true,
    },
    {
      number: "32",
      name: "Silence",
      cost: ["w"],
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
      number: "33",
      name: "Silkwrap",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "destruction",
        },
      ],
    },
    {
      number: "34",
      name: "Sphere of Safety",
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
      number: "35",
      name: "Spirit of the Labyrinth",
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
      number: "36",
      name: "Starfield of Nyx",
      cost: ["4", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "reanimate",
        },
      ],
    },
    {
      number: "37",
      name: "Stasis Snare",
      cost: ["1", "w", "w"],
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
          guide: "destruction",
        },
      ],
    },
    {
      number: "38",
      name: "Steward of Solidarity",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "protection",
        },
      ],
    },
    {
      number: "39",
      name: "Swift Reckoning",
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
          guide: "destruction",
        },
        {
          guide: "disruption",
        },
      ],
    },
    {
      number: "40",
      name: "Syndicate Messenger",
      cost: ["3", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
      ],
    },
    {
      number: "41",
      name: "Triplicate Spirits",
      cost: ["4", "w", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "42",
      name: "War Oracle",
      cost: ["2", "w", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
          categories: ["synergy"],
        },
      ],
    },
    {
      number: "43",
      name: "Aetherling",
      cost: ["4", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "evasion",
        },
      ],
    },
    {
      number: "44",
      name: "Anchor to the Aether",
      cost: ["2", "u"],
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
      name: "Aqueous Form",
      cost: ["u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "evasion",
          categories: ["granted"],
        },
      ],
    },
    {
      number: "46",
      name: "Artisan of Forms",
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
      number: "47",
      name: "Bident of Thassa",
      cost: ["2", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "draw",
        },
      ],
    },
    {
      number: "48",
      name: "Brineborn Cutthroat",
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
      ],
    },
    {
      number: "49",
      name: "Chasm Skulker",
      cost: ["2", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "evasion",
        },
      ],
    },
    {
      number: "50",
      name: "Cloudfin Raptor",
      cost: ["u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
      ],
    },
    {
      number: "51",
      name: "Consider",
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
          guide: "draw",
        },
      ],
    },
    {
      number: "52",
      name: "Crush of Tentacles",
      cost: ["4", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "53",
      name: "Day's Undoing",
      cost: ["2", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "discard",
        },
        {
          guide: "draw",
        },
      ],
    },
    {
      number: "54",
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
      number: "55",
      name: "Fallaji Archaeologist",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mill",
        },
      ],
    },
    {
      number: "56",
      name: "Guild Summit",
      cost: ["2", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "draw",
        },
      ],
    },
    {
      number: "57",
      name: "Gust of Wind",
      cost: ["3", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "bounce",
        },
        {
          guide: "draw",
        },
      ],
    },
    {
      number: "58",
      name: "Illusory Angel",
      cost: ["2", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
      ],
    },
    {
      number: "59",
      name: "Ingenious Skaab",
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
      number: "60",
      name: "Jace, Vryn's Prodigy // Jace, Telepath Unbound (Jace, Vryn's Prodigy)",
      cost: ["1", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "draw",
        },
      ],
      isFlippable: true,
    },
    {
      number: "60",
      name: "Jace, Vryn's Prodigy // Jace, Telepath Unbound (Jace, Telepath Unbound)",
      cost: [],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mill",
        },
        {
          guide: "shrink",
        },
      ],
      isFlippable: true,
      isFlipped: true,
    },
    {
      number: "61",
      name: "Jhessian Thief",
      cost: ["2", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "draw",
        },
      ],
    },
    {
      number: "62",
      name: "Jwari Disruption // Jwari Ruins (Jwari Disruption)",
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
      isFlippable: true,
    },
    {
      number: "62",
      name: "Jwari Disruption // Jwari Ruins (Jwari Ruins)",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
      ],
      isFlippable: true,
      isFlipped: true,
    },
    {
      number: "63",
      name: "Master of Waves",
      cost: ["3", "u"],
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
          guide: "protection",
        },
      ],
    },
    {
      number: "64",
      name: "Mizzium Skin",
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
          guide: "protection",
        },
      ],
    },
    {
      number: "65",
      name: "Murmuring Mystic",
      cost: ["3", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
      ],
    },
    {
      number: "66",
      name: "Niblis of Frost",
      cost: ["2", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "disruption",
        },
        {
          guide: "flying",
        },
      ],
    },
    {
      number: "67",
      name: "Nimbus Naiad",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
      ],
    },
    {
      number: "68",
      name: "Opal Lake Gatekeepers",
      cost: ["3", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "draw",
        },
      ],
    },
    {
      number: "69",
      name: "Quicken",
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
          guide: "draw",
        },
      ],
    },
    {
      number: "70",
      name: "Rapid Hybridization",
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
          guide: "destruction",
        },
      ],
    },
    {
      number: "71",
      name: "Scatter to the Winds",
      cost: ["1", "u", "u"],
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
          guide: "haste",
          categories: ["granted"],
        },
      ],
    },
    {
      number: "72",
      name: "Shipbreaker Kraken",
      cost: ["4", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "disruption",
        },
      ],
    },
    {
      number: "73",
      name: "Sight Beyond Sight",
      cost: ["3", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "74",
      name: "Silundi Vision // Silundi Isle (Silundi Vision)",
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
      ],
      isFlippable: true,
    },
    {
      number: "74",
      name: "Silundi Vision // Silundi Isle (Silundi Isle)",
      cost: [],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
      ],
      isFlippable: true,
      isFlipped: true,
    },
    {
      number: "75",
      name: "Stormtide Leviathan",
      cost: ["5", "u", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "evasion",
        },
        {
          guide: "flying",
        },
      ],
    },
    {
      number: "76",
      name: "Tah-Crop Skirmisher",
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
      number: "77",
      name: "Temporal Trespass",
      cost: ["8", "u", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "78",
      name: "Tidebinder Mage",
      cost: ["u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "disruption",
        },
      ],
    },
    {
      number: "79",
      name: "Treasure Cruise",
      cost: ["7", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "draw",
        },
      ],
    },
    {
      number: "80",
      name: "Windrider Patrol",
      cost: ["3", "u", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
      ],
    },
    {
      number: "81",
      name: "Zephyr Winder",
      cost: ["1", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "destruction",
        },
        {
          guide: "flying",
        },
      ],
    },
    {
      number: "82",
      name: "Baleful Eidolon",
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
      number: "83",
      name: "Basilica Screecher",
      cost: ["1", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "damage",
        },
        {
          guide: "flying",
        },
        {
          guide: "lifegain",
        },
      ],
    },
    {
      number: "84",
      name: "Behold the Beyond",
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
      number: "85",
      name: "Blackbloom Rogue // Blackbloom Bog (Blackbloom Rogue)",
      cost: ["2", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "evasion",
        },
      ],
      isFlippable: true,
    },
    {
      number: "85",
      name: "Blackbloom Rogue // Blackbloom Bog (Blackbloom Bog)",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
      ],
      isFlippable: true,
      isFlipped: true,
    },
    {
      number: "86",
      name: "Blood Scrivener",
      cost: ["1", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "draw",
        },
      ],
    },
    {
      number: "87",
      name: "Cruel Revival",
      cost: ["4", "b"],
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
          guide: "destruction",
        },
      ],
    },
    {
      number: "88",
      name: "Crypt Incursion",
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
          guide: "lifegain",
          categories: ["synergy"],
        },
      ],
    },
    {
      number: "89",
      name: "Dark Deal",
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
        {
          guide: "draw",
        },
      ],
    },
    {
      number: "90",
      name: "Devour Flesh",
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
          categories: ["synergy"],
        },
      ],
    },
    {
      number: "91",
      name: "Dictate of Erebos",
      cost: ["3", "b", "b"],
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
      number: "92",
      name: "Dreadhound",
      cost: ["4", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "damage",
        },
        {
          guide: "mill",
        },
      ],
    },
    {
      number: "93",
      name: "Fell Stinger",
      cost: ["2", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "damage",
        },
        {
          guide: "draw",
        },
      ],
    },
    {
      number: "94",
      name: "Gurmag Angler",
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
      number: "95",
      name: "Lifebane Zombie",
      cost: ["1", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "evasion",
        },
      ],
    },
    {
      number: "96",
      name: "Liliana, Heretical Healer // Liliana, Defiant Necromancer (Liliana, Heretical Healer)",
      cost: ["1", "b", "b"],
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
      isFlippable: true,
    },
    {
      number: "96",
      name: "Liliana, Heretical Healer // Liliana, Defiant Necromancer (Liliana, Defiant Necromancer)",
      cost: [],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "discard",
        },
        {
          guide: "reanimate",
        },
      ],
      isFlippable: true,
      isFlipped: true,
    },
    {
      number: "97",
      name: "Nantuko Husk",
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
      number: "98",
      name: "Nighthowler",
      cost: ["1", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "99",
      name: "Ob Nixilis Reignited",
      cost: ["3", "b", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "damage",
        },
        {
          guide: "destruction",
        },
        {
          guide: "draw",
        },
      ],
    },
    {
      number: "100",
      name: "Ob Nixilis's Cruelty",
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
          guide: "destruction",
        },
        {
          guide: "shrink",
        },
      ],
    },
    {
      number: "101",
      name: "Painful Truths",
      cost: ["2", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "draw",
        },
      ],
    },
    {
      number: "102",
      name: "Pelakka Predation // Pelakka Caverns (Pelakka Predation)",
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
      isFlippable: true,
    },
    {
      number: "102",
      name: "Pelakka Predation // Pelakka Caverns (Pelakka Caverns)",
      cost: [],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
      ],
      isFlippable: true,
      isFlipped: true,
    },
    {
      number: "103",
      name: "Priest of the Blood Rite",
      cost: ["3", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
      ],
    },
    {
      number: "104",
      name: "Read the Bones",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "draw",
        },
      ],
    },
    {
      number: "105",
      name: "Rescue from the Underworld",
      cost: ["4", "b"],
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
      number: "106",
      name: "Returned Centaur",
      cost: ["3", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mill",
        },
      ],
    },
    {
      number: "107",
      name: "Sanitarium Skeleton",
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
      number: "108",
      name: "Sidisi, Undead Vizier",
      cost: ["3", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "109",
      name: "Silumgar Butcher",
      cost: ["4", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "destruction",
        },
        {
          guide: "shrink",
        },
      ],
    },
    {
      number: "110",
      name: "Soulflayer",
      cost: ["4", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
        {
          guide: "haste",
        },
        {
          guide: "lifegain",
          categories: ["synergy"],
        },
        {
          guide: "protection",
        },
        {
          guide: "reach",
        },
        {
          guide: "trample",
        },
      ],
    },
    {
      number: "111",
      name: "Stab Wound",
      cost: ["2", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "damage",
        },
        {
          guide: "destruction",
        },
        {
          guide: "shrink",
        },
      ],
    },
    {
      number: "112",
      name: "Supernatural Stamina",
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
      ],
    },
    {
      number: "113",
      name: "Tasigur, the Golden Fang",
      cost: ["5", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mill",
        },
      ],
    },
    {
      number: "114",
      name: "Tormented Hero",
      cost: ["b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "damage",
        },
        {
          guide: "lifegain",
        },
      ],
    },
    {
      number: "115",
      name: "Ubul Sar Gatekeepers",
      cost: ["3", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "destruction",
        },
        {
          guide: "shrink",
        },
      ],
    },
    {
      number: "116",
      name: "Ultimate Price",
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
          guide: "destruction",
        },
      ],
    },
    {
      number: "117",
      name: "Undead Butler",
      cost: ["1", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mill",
        },
      ],
    },
    {
      number: "118",
      name: "Urborg, Tomb of Yawgmoth",
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
      number: "119",
      name: "Whip of Erebos",
      cost: ["2", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "haste",
          categories: ["granted"],
        },
        {
          guide: "lifegain",
          categories: ["synergy"],
        },
        {
          guide: "reanimate",
        },
      ],
    },
    {
      number: "120",
      name: "Xathrid Necromancer",
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
      number: "121",
      name: "Zulaport Cutthroat",
      cost: ["1", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "damage",
        },
        {
          guide: "lifegain",
        },
      ],
    },
    {
      number: "122",
      name: "Akoum Warrior // Akoum Teeth (Akoum Warrior)",
      cost: ["5", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "trample",
        },
      ],
      isFlippable: true,
    },
    {
      number: "122",
      name: "Akoum Warrior // Akoum Teeth (Akoum Teeth)",
      cost: [],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
      ],
      isFlippable: true,
      isFlipped: true,
    },
    {
      number: "123",
      name: "Akroan Crusader",
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
      number: "124",
      name: "Bloodfire Enforcers",
      cost: ["3", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "trample",
        },
      ],
    },
    {
      number: "125",
      name: "Boulder Salvo",
      cost: ["4", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "destruction",
        },
      ],
    },
    {
      number: "126",
      name: "Boundary Lands Ranger",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "draw",
        },
      ],
    },
    {
      number: "127",
      name: "Burning Anger",
      cost: ["4", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "damage",
        },
      ],
    },
    {
      number: "128",
      name: "Chandra, Flamecaller",
      cost: ["4", "r", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "draw",
        },
        {
          guide: "haste",
          categories: ["granted"],
        },
        {
          guide: "wrath",
        },
      ],
    },
    {
      number: "129",
      name: "Coordinated Assault",
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
      ],
    },
    {
      number: "130",
      name: "Draconic Roar",
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
          guide: "destruction",
        },
      ],
    },
    {
      number: "131",
      name: "Dragon Mantle",
      cost: ["r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "draw",
        },
      ],
    },
    {
      number: "132",
      name: "Dragon-Style Twins",
      cost: ["3", "r", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "133",
      name: "Exquisite Firecraft",
      cost: ["1", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "damage",
        },
      ],
    },
    {
      number: "134",
      name: "Fall of the Hammer",
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
          guide: "destruction",
        },
      ],
    },
    {
      number: "135",
      name: "Fight with Fire",
      cost: ["2", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "damage",
        },
        {
          guide: "destruction",
        },
      ],
    },
    {
      number: "136",
      name: "Furious Rise",
      cost: ["2", "r"],
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
      name: "Gates Ablaze",
      cost: ["2", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "wrath",
        },
      ],
    },
    {
      number: "138",
      name: "Ghirapur Gearcrafter",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
      ],
    },
    {
      number: "139",
      name: "Goblin Rabblemaster",
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
      number: "140",
      name: "Heart-Piercer Manticore",
      cost: ["2", "r", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "damage",
        },
      ],
    },
    {
      number: "141",
      name: "Humble Defector",
      cost: ["1", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "draw",
        },
      ],
    },
    {
      number: "142",
      name: "Kozilek's Return",
      cost: ["2", "r"],
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
          guide: "wrath",
        },
      ],
    },
    {
      number: "143",
      name: "Labyrinth Champion",
      cost: ["3", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "damage",
        },
      ],
    },
    {
      number: "144",
      name: "Legion Loyalist",
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
        {
          guide: "trample",
        },
      ],
    },
    {
      number: "145",
      name: "Makindi Sliderunner",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "trample",
        },
      ],
    },
    {
      number: "146",
      name: "Mogis's Warhound",
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
      number: "147",
      name: "Monastery Swiftspear",
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
      number: "148",
      name: "Oath of Chandra",
      cost: ["1", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "destruction",
        },
      ],
    },
    {
      number: "149",
      name: "Ordeal of Purphoros",
      cost: ["1", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "damage",
        },
      ],
    },
    {
      number: "150",
      name: "Outpost Siege",
      cost: ["3", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "damage",
        },
        {
          guide: "ping",
        },
      ],
    },
    {
      number: "151",
      name: "Pia and Kiran Nalaar",
      cost: ["2", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "damage",
        },
        {
          guide: "flying",
        },
      ],
    },
    {
      number: "152",
      name: "Purphoros's Emissary",
      cost: ["3", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "evasion",
        },
      ],
    },
    {
      number: "153",
      name: "Rimrock Knight // Boulder Rush (Rimrock Knight)",
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
      number: "153",
      name: "Rimrock Knight // Boulder Rush (Boulder Rush)",
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
      number: "154",
      name: "Scab-Clan Berserker",
      cost: ["1", "r", "r"],
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
      number: "155",
      name: "Scourge of Valkas",
      cost: ["2", "r", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "damage",
        },
        {
          guide: "flying",
        },
      ],
    },
    {
      number: "156",
      name: "Scytheclaw Raptor",
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
      number: "157",
      name: "Stormbreath Dragon",
      cost: ["3", "r", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
        {
          guide: "haste",
        },
      ],
    },
    {
      number: "158",
      name: "Valakut Awakening // Valakut Stoneforge (Valakut Awakening)",
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
          guide: "draw",
        },
      ],
      isFlippable: true,
    },
    {
      number: "158",
      name: "Valakut Awakening // Valakut Stoneforge (Valakut Stoneforge)",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
      ],
      isFlippable: true,
      isFlipped: true,
    },
    {
      number: "159",
      name: "Wild Slash",
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
          guide: "damage",
        },
      ],
    },
    {
      number: "160",
      name: "Witch's Mark",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "damage",
        },
        {
          guide: "draw",
        },
      ],
    },
    {
      number: "161",
      name: "Zurgo Bellstriker",
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
      number: "162",
      name: "Alpha Authority",
      cost: ["1", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "evasion",
          categories: ["granted"],
        },
        {
          guide: "protection",
        },
      ],
    },
    {
      number: "163",
      name: "Aspect of Hydra",
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
          guide: "protection",
        },
      ],
    },
    {
      number: "164",
      name: "Audacity",
      cost: ["g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "draw",
        },
        {
          guide: "trample",
          categories: ["granted"],
        },
      ],
    },
    {
      number: "165",
      name: "Bala Ged Recovery // Bala Ged Sanctuary (Bala Ged Recovery)",
      cost: ["2", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
      isFlippable: true,
    },
    {
      number: "165",
      name: "Bala Ged Recovery // Bala Ged Sanctuary (Bala Ged Sanctuary)",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
      ],
      isFlippable: true,
      isFlipped: true,
    },
    {
      number: "166",
      name: "Bassara Tower Archer",
      cost: ["g", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "protection",
          categories: ["granted"],
        },
        {
          guide: "reach",
        },
      ],
    },
    {
      number: "167",
      name: "Boon Satyr",
      cost: ["1", "g", "g"],
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
      number: "168",
      name: "Clear Shot",
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
          guide: "destruction",
        },
      ],
    },
    {
      number: "169",
      name: "Commune with the Gods",
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
      number: "170",
      name: "Conclave Naturalists",
      cost: ["4", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "disenchant",
        },
      ],
    },
    {
      number: "171",
      name: "Courier's Briefcase",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "draw",
        },
      ],
    },
    {
      number: "172",
      name: "District Guide",
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
      name: "Experiment One",
      cost: ["g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "174",
      name: "Gatebreaker Ram",
      cost: ["2", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "trample",
        },
      ],
    },
    {
      number: "175",
      name: "Gladecover Scout",
      cost: ["g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "protection",
        },
      ],
    },
    {
      number: "176",
      name: "Gnarlback Rhino",
      cost: ["2", "g", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "draw",
        },
        {
          guide: "trample",
        },
      ],
    },
    {
      number: "177",
      name: "Goreclaw, Terror of Qal Sisma",
      cost: ["3", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "trample",
        },
      ],
    },
    {
      number: "178",
      name: "Hero of Leina Tower",
      cost: ["g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "179",
      name: "Honored Hydra",
      cost: ["5", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "trample",
        },
      ],
    },
    {
      number: "180",
      name: "Hornet Nest",
      cost: ["2", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
      ],
    },
    {
      number: "181",
      name: "Khalni Ambush // Khalni Territory (Khalni Ambush)",
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
          guide: "destruction",
        },
      ],
      isFlippable: true,
    },
    {
      number: "181",
      name: "Khalni Ambush // Khalni Territory (Khalni Territory)",
      cost: [],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
      ],
      isFlippable: true,
      isFlipped: true,
    },
    {
      number: "182",
      name: "Kraul Harpooner",
      cost: ["1", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
        {
          guide: "reach",
        },
      ],
    },
    {
      number: "183",
      name: "Leafcrown Dryad",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "reach",
        },
      ],
    },
    {
      number: "184",
      name: "Mistcutter Hydra",
      cost: ["x", "g"],
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
      number: "185",
      name: "Nemesis of Mortals",
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
      number: "186",
      name: "Nessian Asp",
      cost: ["4", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "reach",
        },
      ],
    },
    {
      number: "187",
      name: "Nissa, Vastwood Seer // Nissa, Sage Animist (Nissa, Vastwood Seer)",
      cost: ["2", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
      isFlippable: true,
    },
    {
      number: "187",
      name: "Nissa, Vastwood Seer // Nissa, Sage Animist (Nissa, Sage Animist)",
      cost: [],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
      isFlippable: true,
      isFlipped: true,
    },
    {
      number: "188",
      name: "Nissa, Voice of Zendikar",
      cost: ["1", "g", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "draw",
        },
        {
          guide: "lifegain",
          categories: ["synergy"],
        },
      ],
    },
    {
      number: "189",
      name: "Oath of Nissa",
      cost: ["g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "190",
      name: "Polukranos, World Eater",
      cost: ["2", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "destruction",
        },
      ],
    },
    {
      number: "191",
      name: "Pulse of Murasa",
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
          guide: "lifegain",
          categories: ["synergy"],
        },
      ],
    },
    {
      number: "192",
      name: "Savage Punch",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "destruction",
        },
      ],
    },
    {
      number: "193",
      name: "Seed Guardian",
      cost: ["2", "g", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "reach",
        },
      ],
    },
    {
      number: "194",
      name: "Shamanic Revelation",
      cost: ["3", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "draw",
        },
        {
          guide: "lifegain",
          categories: ["synergy"],
        },
      ],
    },
    {
      number: "195",
      name: "Skylasher",
      cost: ["1", "g"],
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
          guide: "reach",
        },
      ],
    },
    {
      number: "196",
      name: "Sylvan Caryatid",
      cost: ["1", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "protection",
          categories: ["granted"],
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
      number: "197",
      name: "Sylvan Primordial",
      cost: ["5", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "disenchant",
        },
        {
          guide: "reach",
        },
      ],
    },
    {
      number: "198",
      name: "Unravel the Aether",
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
      number: "199",
      name: "Voyaging Satyr",
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
      number: "200",
      name: "Whisperwood Elemental",
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
      number: "201",
      name: "Woodland Wanderer",
      cost: ["3", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "trample",
        },
      ],
    },
    {
      number: "202",
      name: "Anax and Cymede",
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
          guide: "trample",
        },
      ],
    },
    {
      number: "203",
      name: "Ashen Rider",
      cost: ["4", "w", "w", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
      ],
    },
    {
      number: "204",
      name: "Assemble the Legion",
      cost: ["3", "r", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "haste",
          categories: ["granted"],
        },
      ],
    },
    {
      number: "205",
      name: "Azorius Charm",
      cost: ["w", "u"],
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
          guide: "draw",
        },
        {
          guide: "lifegain",
          categories: ["synergy"],
        },
      ],
    },
    {
      number: "206",
      name: "Blood Baron of Vizkopa",
      cost: ["3", "w", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
        {
          guide: "lifegain",
          categories: ["synergy"],
        },
      ],
    },
    {
      number: "207",
      name: "Bloodtithe Harvester",
      cost: ["b", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "destruction",
        },
        {
          guide: "draw",
        },
        {
          guide: "shrink",
        },
      ],
    },
    {
      number: "208",
      name: "Boros Reckoner",
      cost: ["rw", "rw", "rw"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "damage",
        },
      ],
    },
    {
      number: "209",
      name: "Bring to Light",
      cost: ["3", "g", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "210",
      name: "Cartel Aristocrat",
      cost: ["w", "b"],
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
      name: "Catacomb Sifter",
      cost: ["1", "b", "g"],
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
      number: "212",
      name: "Chromanticore",
      cost: ["w", "u", "b", "r", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
        {
          guide: "lifegain",
          categories: ["synergy"],
        },
        {
          guide: "trample",
        },
      ],
    },
    {
      number: "213",
      name: "Counterflux",
      cost: ["u", "u", "r"],
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
      number: "214",
      name: "Destructive Revelry",
      cost: ["r", "g"],
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
          guide: "disenchant",
        },
      ],
    },
    {
      number: "215",
      name: "Dinrova Horror",
      cost: ["4", "u", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "bounce",
        },
        {
          guide: "discard",
        },
      ],
    },
    {
      number: "216",
      name: "Dragonlord Atarka",
      cost: ["5", "r", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "damage",
        },
        {
          guide: "destruction",
        },
        {
          guide: "flying",
        },
        {
          guide: "trample",
        },
      ],
    },
    {
      number: "217",
      name: "Dragonlord Dromoka",
      cost: ["4", "g", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
        {
          guide: "lifegain",
          categories: ["synergy"],
        },
      ],
    },
    {
      number: "218",
      name: "Dragonlord Kolaghan",
      cost: ["4", "b", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "damage",
        },
        {
          guide: "flying",
        },
        {
          guide: "haste",
        },
      ],
    },
    {
      number: "219",
      name: "Dragonlord Ojutai",
      cost: ["3", "w", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
        {
          guide: "protection",
          categories: ["granted"],
        },
      ],
    },
    {
      number: "220",
      name: "Dragonlord Silumgar",
      cost: ["4", "u", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
        {
          guide: "mindcontrol",
        },
      ],
    },
    {
      number: "221",
      name: "Dreadbore",
      cost: ["b", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "destruction",
        },
      ],
    },
    {
      number: "222",
      name: "Dreg Mangler",
      cost: ["1", "b", "g"],
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
      number: "223",
      name: "Epic Experiment",
      cost: ["x", "u", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "224",
      name: "Fleecemane Lion",
      cost: ["g", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "protection",
        },
      ],
    },
    {
      number: "225",
      name: "Garruk, Apex Predator",
      cost: ["5", "b", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "destruction",
        },
        {
          guide: "lifegain",
        },
        {
          guide: "trample",
          categories: ["granted"],
        },
      ],
    },
    {
      number: "226",
      name: "Ghor-Clan Rampager",
      cost: ["2", "r", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "trample",
        },
      ],
    },
    {
      number: "227",
      name: "Imperious Oligarch",
      cost: ["w", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
      ],
    },
    {
      number: "228",
      name: "Kiora's Follower",
      cost: ["g", "u"],
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
      number: "229",
      name: "Lotleth Troll",
      cost: ["b", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "trample",
        },
      ],
    },
    {
      number: "230",
      name: "Loxodon Smiter",
      cost: ["1", "g", "w"],
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
      name: "Lyev Skyknight",
      cost: ["1", "w", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
      ],
    },
    {
      number: "232",
      name: "Martial Glory",
      cost: ["r", "w"],
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
      number: "233",
      name: "Medomai the Ageless",
      cost: ["4", "w", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
      ],
    },
    {
      number: "234",
      name: "Nivix Cyclops",
      cost: ["1", "u", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "235",
      name: "Notion Thief",
      cost: ["2", "u", "b"],
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
          guide: "draw",
        },
      ],
    },
    {
      number: "236",
      name: "Nyx Weaver",
      cost: ["1", "b", "g"],
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
          guide: "reach",
        },
      ],
    },
    {
      number: "237",
      name: "Possessed Skaab",
      cost: ["3", "u", "b"],
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
      name: "Progenitor Mimic",
      cost: ["4", "g", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "239",
      name: "Ruric Thar, the Unbowed",
      cost: ["4", "r", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "reach",
        },
      ],
    },
    {
      number: "240",
      name: "Selesnya Charm",
      cost: ["g", "w"],
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
          guide: "destruction",
        },
        {
          guide: "trample",
          categories: ["granted"],
        },
      ],
    },
    {
      number: "241",
      name: "Sin Collector",
      cost: ["1", "w", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "242",
      name: "Sire of Insanity",
      cost: ["4", "b", "r"],
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
      number: "243",
      name: "Skyrider Elf",
      cost: ["x", "g", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
      ],
    },
    {
      number: "244",
      name: "Steam Augury",
      cost: ["2", "u", "r"],
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
      number: "245",
      name: "Stormchaser Mage",
      cost: ["u", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
        {
          guide: "haste",
        },
      ],
    },
    {
      number: "246",
      name: "Swift Warkite",
      cost: ["4", "b", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "flying",
        },
        {
          guide: "haste",
        },
      ],
    },
    {
      number: "247",
      name: "Tenth District Legionnaire",
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
      ],
    },
    {
      number: "248",
      name: "Thunderclap Wyvern",
      cost: ["2", "w", "u"],
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
          guide: "flying",
        },
        {
          guide: "masspump",
        },
      ],
    },
    {
      number: "249",
      name: "Tomebound Lich",
      cost: ["1", "u", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "draw",
        },
        {
          guide: "lifegain",
        },
      ],
    },
    {
      number: "250",
      name: "Unflinching Courage",
      cost: ["1", "g", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "lifegain",
          categories: ["synergy"],
        },
        {
          guide: "trample",
          categories: ["granted"],
        },
      ],
    },
    {
      number: "251",
      name: "Urban Evolution",
      cost: ["3", "g", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "draw",
        },
        {
          guide: "ramp",
        },
      ],
    },
    {
      number: "252",
      name: "Zendikar Incarnate",
      cost: ["2", "r", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "253",
      name: "Crackdown Construct",
      cost: ["4"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "254",
      name: "Darksteel Ingot",
      cost: ["3"],
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
      number: "255",
      name: "Gate Colossus",
      cost: ["8"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "evasion",
        },
      ],
    },
    {
      number: "256",
      name: "Halo Scarab",
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
      number: "257",
      name: "Pilgrim's Eye",
      cost: ["3"],
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
          guide: "flying",
        },
      ],
    },
    {
      number: "258",
      name: "Azorius Guildgate",
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
      name: "Boros Guildgate",
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
      number: "260",
      name: "Dimir Guildgate",
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
      number: "262",
      name: "Gateway Plaza",
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
      number: "263",
      name: "Golgari Guildgate",
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
      number: "264",
      name: "Gruul Guildgate",
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
      number: "265",
      name: "Haven of the Spirit Dragon",
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
      number: "266",
      name: "Hissing Quagmire",
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
      number: "267",
      name: "Izzet Guildgate",
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
      number: "268",
      name: "Lumbering Falls",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "protection",
        },
        {
          guide: "fixing",
        },
      ],
    },
    {
      number: "269",
      name: "Maze's End",
      cost: [],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["land"],
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
      number: "270",
      name: "Needle Spires",
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
      number: "271",
      name: "Orzhov Guildgate",
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
      number: "272",
      name: "Rakdos Guildgate",
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
      number: "273",
      name: "Rogue's Passage",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "evasion",
          categories: ["granted"],
        },
      ],
    },
    {
      number: "274",
      name: "Selesnya Guildgate",
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
      number: "275",
      name: "Shambling Vent",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "lifegain",
          categories: ["synergy"],
        },
        {
          guide: "fixing",
        },
      ],
    },
    {
      number: "276",
      name: "Simic Guildgate",
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
      number: "277",
      name: "Spawning Bed",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "ramp",
        },
      ],
    },
    {
      number: "278",
      name: "Wandering Fumarole",
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
