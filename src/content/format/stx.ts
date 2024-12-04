import type { IFormatConfig } from "@/models";

const format: IFormatConfig = {
  code: "stx",
  name: "Strixhaven",
  includeFormats: ["sta"],
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
    "stx-learn-lesson": {
      name: "Mechanic: Learn/Lesson",
      icon: "fas fa-school",
      categories: {
        learn: "All Learn Cards",
        lesson: "All Lesson Cards",
      },
    },
    "stx-magecraft": {
      name: "Mechanic: Magecraft",
      icon: "fas fa-magic",
    },
    "stx-mdfc": {
      name: "Mechanic: Modal Double-Faced Cards",
      icon: "fas fa-check-double",
    },
    "stx-ward": {
      name: "Mechanic: Ward",
      icon: "fas fa-shield-alt",
    },
    "stx-mascot-tokens": {
      name: "Theme: Mascot Tokens/Tribal",
      icon: "fas fa-bullhorn",
      categories: {
        inkling: "Inkling Tokens/Payoffs",
        spirit: "Spirit Tokens/Tribal/Payoffs",
        elemental: "Elemental Tokens/Tribal/Payoffs",
        fractal: "Fractal Tokens/Payoffs",
        pest: "Pest Tokens/Tribal/Payoffs",
      },
    },
    "stx-lifegain-payoff": {
      name: "Theme: Lifegain Payoffs",
      icon: "fas fa-heartbeat",
    },
    "stx-8lands": {
      name: "Theme: 8+ Lands",
      icon: "fas fa-mountain",
    },
    "stx-graveyard": {
      name: "Theme: Graveyard",
      icon: "fas fa-book-dead",
      categories: {
        leave: "Payoffs for Leaving Graveyard",
        recursion: "Graveyard Recursion/Value",
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
        "stx-learn-lesson",
        "stx-magecraft",
        "stx-mdfc",
        "stx-ward",
        "stx-mascot-tokens",
        "stx-lifegain-payoff",
        "stx-8lands",
        "stx-graveyard",
      ],
    },
  },
  cards: [
    {
      number: "1",
      name: "Environmental Sciences",
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
        {
          guide: "fixing",
        },
        {
          guide: "stx-learn-lesson",
          categories: ["lesson"],
        },
      ],
    },
    {
      number: "2",
      name: "Expanded Anatomy",
      cost: ["3"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-learn-lesson",
          categories: ["lesson"],
        },
      ],
    },
    {
      number: "3",
      name: "Introduction to Annihilation",
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
          guide: "stx-learn-lesson",
          categories: ["lesson"],
        },
      ],
    },
    {
      number: "4",
      name: "Introduction to Prophecy",
      cost: ["3"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-learn-lesson",
          categories: ["lesson"],
        },
      ],
    },
    {
      number: "5",
      name: "Mascot Exhibition",
      cost: ["7"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-learn-lesson",
          categories: ["lesson"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["spirit", "inkling", "elemental"],
        },
      ],
    },
    {
      number: "6",
      name: "Wandering Archaic (Wandering Archaic // Explore the Vastlands)",
      cost: ["5"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mdfc",
        },
      ],
    },
    {
      number: "6",
      name: "Explore the Vastlands (Wandering Archaic // Explore the Vastlands)",
      cost: ["3"],
      rarity: "r",
      isFlippable: true,
      isFlipped: true,
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
      number: "7",
      name: "Academic Probation",
      cost: ["1", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-learn-lesson",
          categories: ["lesson"],
        },
      ],
    },
    {
      number: "8",
      name: "Ageless Guardian",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["spirit"],
        },
      ],
    },
    {
      number: "9",
      name: "Beaming Defiance",
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
      number: "10",
      name: "Clever Lumimancer",
      cost: ["w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-magecraft",
        },
      ],
    },
    {
      number: "11",
      name: "Combat Professor",
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
      number: "12",
      name: "Defend the Campus",
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
        {
          guide: "masspump",
        },
      ],
    },
    {
      number: "13",
      name: "Detention Vortex",
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
      number: "14",
      name: "Devastating Mastery",
      cost: ["2", "w", "w", "w", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          cost: ["2", "w", "w"],
          categories: ["boardwipe"],
        },
        {
          guide: "boardwipe",
        },
      ],
    },
    {
      number: "15",
      name: "Dueling Coach",
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
      number: "16",
      name: "Eager First-Year",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-magecraft",
        },
      ],
    },
    {
      number: "17",
      name: "Elite Spellbinder",
      cost: ["2", "w"],
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
      number: "18",
      name: "Expel",
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
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "19",
      name: "Guiding Voice",
      cost: ["w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-learn-lesson",
          categories: ["learn"],
        },
      ],
    },
    {
      number: "20",
      name: "Leonin Lightscribe",
      cost: ["1", "w"],
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
          guide: "stx-magecraft",
        },
      ],
    },
    {
      number: "21",
      name: "Mavinda, Students' Advocate",
      cost: ["2", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "22",
      name: "Pilgrim of the Ages",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["spirit"],
        },
        {
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "23",
      name: "Pillardrop Rescuer",
      cost: ["4", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["spirit"],
        },
        {
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "24",
      name: "Professor of Symbology",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-learn-lesson",
          categories: ["learn"],
        },
      ],
    },
    {
      number: "25",
      name: "Reduce to Memory",
      cost: ["1", "w", "w"],
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
          guide: "stx-learn-lesson",
          categories: ["lesson"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["spirit"],
        },
      ],
    },
    {
      number: "26",
      name: "Secret Rendezvous",
      cost: ["1", "w", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "27",
      name: "Semester's End",
      cost: ["3", "w"],
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
      number: "28",
      name: "Show of Confidence",
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
      number: "29",
      name: "Sparring Regimen",
      cost: ["2", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-learn-lesson",
          categories: ["learn"],
        },
      ],
    },
    {
      number: "30",
      name: "Star Pupil",
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
      number: "31",
      name: "Stonebinder's Familiar",
      cost: ["w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["spirit"],
        },
      ],
    },
    {
      number: "32",
      name: "Stonerise Spirit",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["spirit"],
        },
        {
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "33",
      name: "Strict Proctor",
      cost: ["1", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["spirit"],
        },
      ],
    },
    {
      number: "34",
      name: "Study Break",
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
          guide: "stx-learn-lesson",
          categories: ["learn"],
        },
      ],
    },
    {
      number: "35",
      name: "Thunderous Orator",
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
      number: "36",
      name: "Arcane Subtraction",
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
          guide: "stx-learn-lesson",
          categories: ["learn"],
        },
      ],
    },
    {
      number: "37",
      name: "Archmage Emeritus",
      cost: ["2", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-magecraft",
        },
      ],
    },
    {
      number: "38",
      name: "Burrog Befuddler",
      cost: ["1", "u"],
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
      number: "39",
      name: "Bury in Books",
      cost: ["4", "u"],
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
          guide: "instants",
          cost: ["2", "u"],
          categories: ["board"],
        },
        {
          guide: "bounce",
        },
      ],
    },
    {
      number: "40",
      name: "Curate",
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
      number: "41",
      name: "Divide by Zero",
      cost: ["2", "u"],
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
        {
          guide: "stx-learn-lesson",
          categories: ["learn"],
        },
      ],
    },
    {
      number: "42",
      name: "Dream Strix",
      cost: ["2", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-learn-lesson",
          categories: ["learn"],
        },
      ],
    },
    {
      number: "43",
      name: "Frost Trickster",
      cost: ["2", "u"],
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
      number: "44",
      name: "Ingenious Mastery",
      cost: ["x", "2", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "45",
      name: "Kelpie Guide",
      cost: ["2", "u"],
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
          guide: "stx-8lands",
        },
      ],
    },
    {
      number: "46",
      name: "Mentor's Guidance",
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
      number: "47",
      name: "Mercurial Transformation",
      cost: ["1", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-learn-lesson",
          categories: ["lesson"],
        },
      ],
    },
    {
      number: "48",
      name: "Multiple Choice",
      cost: ["x", "u"],
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
          guide: "stx-mascot-tokens",
          categories: ["elemental"],
        },
      ],
    },
    {
      number: "49",
      name: "Pop Quiz",
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
        {
          guide: "stx-learn-lesson",
          categories: ["learn"],
        },
      ],
    },
    {
      number: "50",
      name: "Reject",
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
      number: "51",
      name: "Resculpt",
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
          categories: ["removal"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["elemental"],
        },
      ],
    },
    {
      number: "52",
      name: "Serpentine Curve",
      cost: ["3", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["fractal"],
        },
      ],
    },
    {
      number: "53",
      name: "Snow Day",
      cost: ["4", "u", "u"],
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
      name: "Solve the Equation",
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
      number: "55",
      name: "Soothsayer Adept",
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
      number: "56",
      name: "Symmetry Sage",
      cost: ["u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-magecraft",
        },
      ],
    },
    {
      number: "57",
      name: "Teachings of the Archaics",
      cost: ["2", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-learn-lesson",
          categories: ["lesson"],
        },
      ],
    },
    {
      number: "58",
      name: "Tempted by the Oriq",
      cost: ["1", "u", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mindcontrol",
        },
      ],
    },
    {
      number: "59",
      name: "Test of Talents",
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
      number: "60",
      name: "Vortex Runner",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-8lands",
        },
      ],
    },
    {
      number: "61",
      name: "Waterfall Aerialist",
      cost: ["3", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-ward",
        },
      ],
    },
    {
      number: "62",
      name: "Wormhole Serpent",
      cost: ["4", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "63",
      name: "Arrogant Poet",
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
      number: "64",
      name: "Baleful Mastery",
      cost: ["3", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["1", "b"],
          categories: ["board"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "65",
      name: "Brackish Trudge",
      cost: ["2", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-lifegain-payoff",
        },
        {
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "66",
      name: "Callous Bloodmage",
      cost: ["2", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["pest"],
        },
      ],
    },
    {
      number: "67",
      name: "Confront the Past",
      cost: ["x", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-learn-lesson",
          categories: ["lesson"],
        },
      ],
    },
    {
      number: "68",
      name: "Crushing Disappointment",
      cost: ["3", "b"],
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
      number: "69",
      name: "Essence Infusion",
      cost: ["1", "b"],
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
      number: "70",
      name: "Eyetwitch",
      cost: ["b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-learn-lesson",
          categories: ["learn"],
        },
      ],
    },
    {
      number: "71",
      name: "Flunk",
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
      number: "72",
      name: "Go Blank",
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
      number: "73",
      name: "Hunt for Specimens",
      cost: ["1", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-learn-lesson",
          categories: ["learn"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["pest"],
        },
      ],
    },
    {
      number: "74",
      name: "Lash of Malice",
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
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "75",
      name: "Leech Fanatic",
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
      number: "76",
      name: "Mage Hunter",
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
      number: "77",
      name: "Mage Hunter's Onslaught",
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
      number: "78",
      name: "Necrotic Fumes",
      cost: ["1", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-learn-lesson",
          categories: ["lesson"],
        },
      ],
    },
    {
      number: "79",
      name: "Novice Dissector",
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
      number: "80",
      name: "Oriq Loremage",
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
      number: "81",
      name: "Plumb the Forbidden",
      cost: ["1", "b"],
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
      number: "82",
      name: "Poet's Quill",
      cost: ["1", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-learn-lesson",
          categories: ["learn"],
        },
      ],
    },
    {
      number: "83",
      name: "Professor Onyx",
      cost: ["4", "b", "b"],
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
        {
          guide: "lifegain",
        },
        {
          guide: "stx-magecraft",
        },
      ],
    },
    {
      number: "84",
      name: "Professor's Warning",
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
      number: "85",
      name: "Promising Duskmage",
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
      number: "86",
      name: "Sedgemoor Witch",
      cost: ["2", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-magecraft",
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["pest"],
        },
        {
          guide: "stx-ward",
        },
      ],
    },
    {
      number: "87",
      name: "Specter of the Fens",
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
      ],
    },
    {
      number: "88",
      name: "Tenured Inkcaster",
      cost: ["4", "b"],
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
      number: "89",
      name: "Umbral Juke",
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
          categories: ["removal"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["inkling"],
        },
      ],
    },
    {
      number: "90",
      name: "Unwilling Ingredient",
      cost: ["b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "91",
      name: "Academic Dispute",
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
          guide: "stx-learn-lesson",
          categories: ["learn"],
        },
      ],
    },
    {
      number: "92",
      name: "Ardent Dustspeaker",
      cost: ["4", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "93",
      name: "Blood Age General",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["spirit"],
        },
      ],
    },
    {
      number: "94",
      name: "Conspiracy Theorist",
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
      number: "95",
      name: "Crackle with Power",
      cost: ["x", "x", "x", "r", "r"],
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
      number: "96",
      name: "Draconic Intervention",
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
        },
      ],
    },
    {
      number: "97",
      name: "Dragon's Approach",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "98",
      name: "Efreet Flamepainter",
      cost: ["3", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "99",
      name: "Enthusiastic Study",
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
          guide: "stx-learn-lesson",
          categories: ["learn"],
        },
      ],
    },
    {
      number: "100",
      name: "Explosive Welcome",
      cost: ["7", "r"],
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
      number: "101",
      name: "Fervent Mastery",
      cost: ["3", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "102",
      name: "First Day of Class",
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
          guide: "haste",
        },
        {
          guide: "stx-learn-lesson",
          categories: ["learn"],
        },
      ],
    },
    {
      number: "103",
      name: "Fuming Effigy",
      cost: ["3", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["spirit"],
        },
        {
          guide: "stx-graveyard",
          categories: ["leave"],
        },
      ],
    },
    {
      number: "104",
      name: "Grinning Ignus",
      cost: ["2", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["elemental"],
        },
      ],
    },
    {
      number: "105",
      name: "Hall Monitor",
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
      number: "106",
      name: "Heated Debate",
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
      number: "107",
      name: "Igneous Inspiration",
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
          guide: "stx-learn-lesson",
          categories: ["learn"],
        },
      ],
    },
    {
      number: "108",
      name: "Illuminate History",
      cost: ["2", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-learn-lesson",
          categories: ["lesson"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["spirit"],
        },
      ],
    },
    {
      number: "109",
      name: "Illustrious Historian",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["spirit"],
        },
        {
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "110",
      name: "Mascot Interception",
      cost: ["3", "r"],
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
      ],
    },
    {
      number: "111",
      name: "Pigment Storm",
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
      number: "112",
      name: "Pillardrop Warden",
      cost: ["3", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["spirit"],
        },
        {
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "113",
      name: "Retriever Phoenix",
      cost: ["3", "r"],
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
          guide: "stx-learn-lesson",
          categories: ["learn"],
        },
      ],
    },
    {
      number: "114",
      name: "Start from Scratch",
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
          guide: "disenchant",
        },
        {
          guide: "ping",
        },
        {
          guide: "stx-learn-lesson",
          categories: ["lesson"],
        },
      ],
    },
    {
      number: "115",
      name: "Storm-Kiln Artist",
      cost: ["3", "r"],
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
          guide: "stx-magecraft",
        },
      ],
    },
    {
      number: "116",
      name: "Sudden Breakthrough",
      cost: ["1", "r"],
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
          guide: "instants",
          categories: ["board"],
        },
      ],
    },
    {
      number: "117",
      name: "Tome Shredder",
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
        {
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "118",
      name: "Twinscroll Shaman",
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
      number: "119",
      name: "Accomplished Alchemist",
      cost: ["3", "g"],
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
          guide: "stx-lifegain-payoff",
        },
      ],
    },
    {
      number: "120",
      name: "Basic Conjuration",
      cost: ["1", "g", "g"],
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
          guide: "stx-learn-lesson",
          categories: ["lesson"],
        },
      ],
    },
    {
      number: "121",
      name: "Bayou Groff",
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
      number: "122",
      name: "Big Play",
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
      number: "123",
      name: "Bookwurm",
      cost: ["7", "g"],
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
      number: "124",
      name: "Charge Through",
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
      number: "125",
      name: "Containment Breach",
      cost: ["2", "g"],
      rarity: "u",
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
          guide: "disenchant",
        },
        {
          guide: "stx-learn-lesson",
          categories: ["lesson"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["pest"],
        },
      ],
    },
    {
      number: "126",
      name: "Devouring Tendrils",
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
        {
          guide: "lifegain",
        },
      ],
    },
    {
      number: "127",
      name: "Dragonsguard Elite",
      cost: ["1", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-magecraft",
        },
      ],
    },
    {
      number: "128",
      name: "Ecological Appreciation",
      cost: ["x", "2", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "129",
      name: "Emergent Sequence",
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
        {
          guide: "ramp",
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["fractal"],
        },
      ],
    },
    {
      number: "130",
      name: "Exponential Growth",
      cost: ["x", "x", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "131",
      name: "Field Trip",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "ramp",
        },
        {
          guide: "stx-learn-lesson",
          categories: ["learn"],
        },
      ],
    },
    {
      number: "132",
      name: "Fortifying Draught",
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
          guide: "lifegain",
        },
        {
          guide: "stx-lifegain-payoff",
        },
      ],
    },
    {
      number: "133",
      name: "Gnarled Professor",
      cost: ["2", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-learn-lesson",
          categories: ["learn"],
        },
      ],
    },
    {
      number: "134",
      name: "Honor Troll",
      cost: ["2", "g"],
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
          guide: "stx-lifegain-payoff",
        },
      ],
    },
    {
      number: "135",
      name: "Karok Wrangler",
      cost: ["4", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-magecraft",
        },
      ],
    },
    {
      number: "136",
      name: "Leyline Invocation",
      cost: ["5", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["fractal"],
        },
      ],
    },
    {
      number: "137",
      name: "Mage Duel",
      cost: ["2", "g"],
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
      number: "138",
      name: "Master Symmetrist",
      cost: ["2", "g", "g"],
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
      name: "Overgrown Arch",
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
          guide: "stx-learn-lesson",
          categories: ["learn"],
        },
      ],
    },
    {
      number: "140",
      name: "Professor of Zoomancy",
      cost: ["3", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["pest"],
        },
      ],
    },
    {
      number: "141",
      name: "Reckless Amplimancer",
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
      number: "142",
      name: "Scurrid Colony",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-8lands",
        },
      ],
    },
    {
      number: "143",
      name: "Spined Karok",
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
      number: "144",
      name: "Springmane Cervin",
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
      ],
    },
    {
      number: "145",
      name: "Tangletrap",
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
      number: "146",
      name: "Verdant Mastery",
      cost: ["5", "g"],
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
      ],
    },
    {
      number: "147",
      name: "Augmenter Pugilist (Augmenter Pugilist // Echoing Equation)",
      cost: ["1", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mdfc",
        },
        {
          guide: "stx-8lands",
        },
      ],
    },
    {
      number: "147",
      name: "Echoing Equation (Augmenter Pugilist // Echoing Equation)",
      cost: ["3", "u", "u"],
      rarity: "r",
      isFlippable: true,
      isFlipped: true,
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "148",
      name: "Blex, Vexing Pest (Blex, Vexing Pest // Search for Blex)",
      cost: ["2", "g"],
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
          guide: "stx-mascot-tokens",
          categories: ["pest"],
        },
        {
          guide: "stx-mdfc",
        },
      ],
    },
    {
      number: "148",
      name: "Search for Blex (Blex, Vexing Pest // Search for Blex)",
      cost: ["2", "b", "b"],
      rarity: "m",
      isFlippable: true,
      isFlipped: true,
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "149",
      name: "Extus, Oriq Overlord (Extus, Oriq Overlord // Awaken the Blood Avatar)",
      cost: ["1", "w", "b", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-magecraft",
        },
        {
          guide: "stx-mdfc",
        },
      ],
    },
    {
      number: "149",
      name: "Awaken the Blood Avatar (Extus, Oriq Overlord // Awaken the Blood Avatar)",
      cost: ["6", "b", "r"],
      rarity: "m",
      isFlippable: true,
      isFlipped: true,
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
      number: "150",
      name: "Flamescroll Celebrant (Flamescroll Celebrant // Revel in Silence)",
      cost: ["1", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mdfc",
        },
      ],
    },
    {
      number: "150",
      name: "Revel in Silence (Flamescroll Celebrant // Revel in Silence)",
      cost: ["w", "w"],
      rarity: "r",
      isFlippable: true,
      isFlipped: true,
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
      number: "151",
      name: "Jadzi, Oracle of Arcavios (Jadzi, Oracle of Arcavios // Journey to the Oracle)",
      cost: ["6", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-magecraft",
        },
        {
          guide: "stx-mdfc",
        },
      ],
    },
    {
      number: "151",
      name: "Journey to the Oracle (Jadzi, Oracle of Arcavios // Journey to the Oracle)",
      cost: ["2", "g", "g"],
      rarity: "m",
      isFlippable: true,
      isFlipped: true,
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "152",
      name: "Kianne, Dean of Substance (Kianne, Dean of Substance // Imbraham, Dean of Theory)",
      cost: ["2", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["fractal"],
        },
        {
          guide: "stx-mdfc",
        },
      ],
    },
    {
      number: "152",
      name: "Imbraham, Dean of Theory (Kianne, Dean of Substance // Imbraham, Dean of Theory)",
      cost: ["2", "u", "u"],
      rarity: "r",
      isFlippable: true,
      isFlipped: true,
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "153",
      name: "Mila, Crafty Companion (Mila, Crafty Companion // Lukka, Wayward Bonder)",
      cost: ["1", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mdfc",
        },
      ],
    },
    {
      number: "153",
      name: "Lukka, Wayward Bonder (Mila, Crafty Companion // Lukka, Wayward Bonder)",
      cost: ["4", "r", "r"],
      rarity: "m",
      isFlippable: true,
      isFlipped: true,
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "haste",
        },
        {
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "154",
      name: "Pestilent Cauldron (Pestilent Cauldron // Restorative Burst)",
      cost: ["2", "b"],
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
          guide: "stx-mascot-tokens",
          categories: ["pest"],
        },
        {
          guide: "stx-mdfc",
        },
      ],
    },
    {
      number: "154",
      name: "Restorative Burst (Pestilent Cauldron // Restorative Burst)",
      cost: ["3", "g", "g"],
      rarity: "r",
      isFlippable: true,
      isFlipped: true,
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "155",
      name: "Plargg, Dean of Chaos (Plargg, Dean of Chaos // Augusta, Dean of Order)",
      cost: ["1", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mdfc",
        },
      ],
    },
    {
      number: "155",
      name: "Augusta, Dean of Order (Plargg, Dean of Chaos // Augusta, Dean of Order)",
      cost: ["2", "w"],
      rarity: "r",
      isFlippable: true,
      isFlipped: true,
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
      number: "156",
      name: "Rowan, Scholar of Sparks (Rowan, Scholar of Sparks // Will, Scholar of Frost)",
      cost: ["2", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-mdfc",
        },
      ],
    },
    {
      number: "156",
      name: "Will, Scholar of Frost (Rowan, Scholar of Sparks // Will, Scholar of Frost)",
      cost: ["4", "u"],
      rarity: "m",
      isFlippable: true,
      isFlipped: true,
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["elemental"],
        },
      ],
    },
    {
      number: "157",
      name: "Selfless Glyphweaver (Selfless Glyphweaver // Deadly Vanity)",
      cost: ["2", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mdfc",
        },
      ],
    },
    {
      number: "157",
      name: "Deadly Vanity (Selfless Glyphweaver // Deadly Vanity)",
      cost: ["5", "b", "b", "b"],
      rarity: "r",
      isFlippable: true,
      isFlipped: true,
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
      number: "158",
      name: "Shaile, Dean of Radiance (Shaile, Dean of Radiance // Embrose, Dean of Shadow)",
      cost: ["1", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mdfc",
        },
      ],
    },
    {
      number: "158",
      name: "Embrose, Dean of Shadow (Shaile, Dean of Radiance // Embrose, Dean of Shadow)",
      cost: ["2", "b", "b"],
      rarity: "r",
      isFlippable: true,
      isFlipped: true,
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "159",
      name: "Torrent Sculptor (Torrent Sculptor // Flamethrower Sonata)",
      cost: ["2", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mdfc",
        },
        {
          guide: "stx-ward",
        },
        {
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "159",
      name: "Flamethrower Sonata (Torrent Sculptor // Flamethrower Sonata)",
      cost: ["1", "r"],
      rarity: "r",
      isFlippable: true,
      isFlipped: true,
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
      number: "160",
      name: "Uvilda, Dean of Perfection (Uvilda, Dean of Perfection // Nassari, Dean of Expression)",
      cost: ["2", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mdfc",
        },
      ],
    },
    {
      number: "160",
      name: "Nassari, Dean of Expression (Uvilda, Dean of Perfection // Nassari, Dean of Expression)",
      cost: ["3", "r", "r"],
      rarity: "r",
      isFlippable: true,
      isFlipped: true,
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "161",
      name: "Valentin, Dean of the Vein (Valentin, Dean of the Vein // Lisette, Dean of the Root)",
      cost: ["b"],
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
          guide: "stx-mascot-tokens",
          categories: ["pest"],
        },
        {
          guide: "stx-mdfc",
        },
      ],
    },
    {
      number: "161",
      name: "Lisette, Dean of the Root (Valentin, Dean of the Vein // Lisette, Dean of the Root)",
      cost: ["2", "g", "g"],
      rarity: "r",
      isFlippable: true,
      isFlipped: true,
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-lifegain",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "162",
      name: "Aether Helix",
      cost: ["3", "g", "u"],
      rarity: "u",
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
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "163",
      name: "Beledros Witherbloom",
      cost: ["5", "b", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["pest"],
        },
      ],
    },
    {
      number: "164",
      name: "Biomathematician",
      cost: ["1", "g", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["fractal"],
        },
      ],
    },
    {
      number: "165",
      name: "Blade Historian",
      cost: ["rw", "rw", "rw", "rw"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "166",
      name: "Blood Researcher",
      cost: ["1", "b", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-lifegain-payoff",
        },
      ],
    },
    {
      number: "167",
      name: "Blot Out the Sky",
      cost: ["x", "w", "b"],
      rarity: "m",
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
          guide: "disenchant",
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["inkling"],
        },
      ],
    },
    {
      number: "168",
      name: "Body of Research",
      cost: ["g", "g", "g", "u", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["fractal"],
        },
      ],
    },
    {
      number: "169",
      name: "Closing Statement",
      cost: ["3", "w", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["1", "w", "b"],
          categories: ["board"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "170",
      name: "Cram Session",
      cost: ["1", "bg"],
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
          guide: "stx-learn-lesson",
          categories: ["learn"],
        },
      ],
    },
    {
      number: "171",
      name: "Creative Outburst",
      cost: ["3", "u", "u", "r", "r"],
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
          guide: "fixing",
        },
      ],
    },
    {
      number: "172",
      name: "Culling Ritual",
      cost: ["2", "b", "g"],
      rarity: "r",
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
      number: "173",
      name: "Culmination of Studies",
      cost: ["x", "u", "r"],
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
      number: "174",
      name: "Daemogoth Titan",
      cost: ["bg", "bg", "bg", "bg"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "175",
      name: "Daemogoth Woe-Eater",
      cost: ["1", "b", "bg", "g"],
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
          guide: "lifegain",
        },
      ],
    },
    {
      number: "176",
      name: "Deadly Brew",
      cost: ["b", "g"],
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
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "177",
      name: "Decisive Denial",
      cost: ["g", "u"],
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
          categories: ["removal"],
        },
        {
          guide: "counterspell",
        },
      ],
    },
    {
      number: "178",
      name: "Dina, Soul Steeper",
      cost: ["b", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-lifegain-payoff",
        },
      ],
    },
    {
      number: "179",
      name: "Double Major",
      cost: ["g", "u"],
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
      number: "180",
      name: "Dramatic Finale",
      cost: ["wb", "wb", "wb", "wb"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["inkling"],
        },
      ],
    },
    {
      number: "181",
      name: "Elemental Expressionist",
      cost: ["ur", "ur", "ur", "ur"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-magecraft",
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["elemental"],
        },
      ],
    },
    {
      number: "182",
      name: "Elemental Masterpiece",
      cost: ["5", "u", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["ur", "ur"],
          categories: ["other"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["elemental"],
        },
      ],
    },
    {
      number: "183",
      name: "Elemental Summoning",
      cost: ["3", "ur", "ur"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-learn-lesson",
          categories: ["lesson"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["elemental"],
        },
      ],
    },
    {
      number: "184",
      name: "Eureka Moment",
      cost: ["2", "g", "u"],
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
          guide: "ramp",
        },
      ],
    },
    {
      number: "185",
      name: "Exhilarating Elocution",
      cost: ["2", "w", "b"],
      rarity: "c",
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
      number: "186",
      name: "Expressive Iteration",
      cost: ["u", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "187",
      name: "Fractal Summoning",
      cost: ["x", "gu", "gu"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-learn-lesson",
          categories: ["lesson"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["fractal"],
        },
      ],
    },
    {
      number: "188",
      name: "Fracture",
      cost: ["w", "b"],
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
          guide: "disenchant",
        },
      ],
    },
    {
      number: "189",
      name: "Galazeth Prismari",
      cost: ["2", "u", "r"],
      rarity: "m",
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
      number: "190",
      name: "Golden Ratio",
      cost: ["1", "g", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "191",
      name: "Harness Infinity",
      cost: ["1", "b", "b", "b", "g", "g", "g"],
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
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "192",
      name: "Hofri Ghostforge",
      cost: ["3", "r", "w"],
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
          guide: "stx-mascot-tokens",
          categories: ["spirit"],
        },
      ],
    },
    {
      number: "193",
      name: "Humiliate",
      cost: ["w", "b"],
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
      number: "194",
      name: "Infuse with Vitality",
      cost: ["b", "g"],
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
      number: "195",
      name: "Inkling Summoning",
      cost: ["1", "wb", "wb"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-learn-lesson",
          categories: ["lesson"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["inkling"],
        },
      ],
    },
    {
      number: "196",
      name: "Kasmina, Enigma Sage",
      cost: ["1", "g", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["fractal"],
        },
      ],
    },
    {
      number: "197",
      name: "Killian, Ink Duelist",
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
      number: "198",
      name: "Lorehold Apprentice",
      cost: ["r", "w"],
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
          guide: "stx-magecraft",
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["spirit"],
        },
      ],
    },
    {
      number: "199",
      name: "Lorehold Command",
      cost: ["3", "r", "w"],
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
          guide: "haste",
        },
        {
          guide: "lifegain",
        },
        {
          guide: "masspump",
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["spirit"],
        },
      ],
    },
    {
      number: "200",
      name: "Lorehold Excavation",
      cost: ["r", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["spirit"],
        },
        {
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "201",
      name: "Lorehold Pledgemage",
      cost: ["1", "rw", "rw"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-magecraft",
        },
      ],
    },
    {
      number: "202",
      name: "Maelstrom Muse",
      cost: ["1", "u", "ur", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "203",
      name: "Magma Opus",
      cost: ["6", "u", "r"],
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
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["elemental"],
        },
      ],
    },
    {
      number: "204",
      name: "Make Your Mark",
      cost: ["rw"],
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
          guide: "stx-mascot-tokens",
          categories: ["spirit"],
        },
      ],
    },
    {
      number: "205",
      name: "Manifestation Sage",
      cost: ["gu", "gu", "gu", "gu"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["fractal"],
        },
      ],
    },
    {
      number: "206",
      name: "Moldering Karok",
      cost: ["2", "b", "g"],
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
      number: "207",
      name: "Mortality Spear",
      cost: ["2", "b", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["b", "g"],
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
          guide: "stx-lifegain-payoff",
        },
      ],
    },
    {
      number: "208",
      name: "Needlethorn Drake",
      cost: ["g", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "209",
      name: "Oggyar Battle-Seer",
      cost: ["3", "u", "r"],
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
      number: "210",
      name: "Owlin Shieldmage",
      cost: ["3", "w", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-ward",
        },
      ],
    },
    {
      number: "211",
      name: "Pest Summoning",
      cost: ["1", "bg", "bg"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-learn-lesson",
          categories: ["lesson"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["pest"],
        },
      ],
    },
    {
      number: "212",
      name: "Practical Research",
      cost: ["3", "u", "r"],
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
      number: "213",
      name: "Prismari Apprentice",
      cost: ["u", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-magecraft",
        },
      ],
    },
    {
      number: "214",
      name: "Prismari Command",
      cost: ["1", "u", "r"],
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
          guide: "disenchant",
        },
        {
          guide: "fixing",
        },
      ],
    },
    {
      number: "215",
      name: "Prismari Pledgemage",
      cost: ["ur", "ur"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-magecraft",
        },
      ],
    },
    {
      number: "216",
      name: "Quandrix Apprentice",
      cost: ["g", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-magecraft",
        },
      ],
    },
    {
      number: "217",
      name: "Quandrix Command",
      cost: ["1", "g", "u"],
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
      ],
    },
    {
      number: "218",
      name: "Quandrix Cultivator",
      cost: ["1", "g", "gu", "u"],
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
      number: "219",
      name: "Quandrix Pledgemage",
      cost: ["1", "gu", "gu"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-magecraft",
        },
      ],
    },
    {
      number: "220",
      name: "Quintorius, Field Historian",
      cost: ["3", "r", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["spirit"],
        },
        {
          guide: "stx-graveyard",
          categories: ["leave"],
        },
      ],
    },
    {
      number: "221",
      name: "Radiant Scrollwielder",
      cost: ["2", "r", "w"],
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
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "222",
      name: "Reconstruct History",
      cost: ["2", "r", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "223",
      name: "Relic Sloth",
      cost: ["3", "r", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "224",
      name: "Returned Pastcaller",
      cost: ["3", "r", "rw", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["spirit"],
        },
        {
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "225",
      name: "Rip Apart",
      cost: ["r", "w"],
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
      number: "226",
      name: "Rise of Extus",
      cost: ["4", "wb", "wb"],
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
          guide: "stx-learn-lesson",
          categories: ["learn"],
        },
      ],
    },
    {
      number: "227",
      name: "Rootha, Mercurial Artist",
      cost: ["1", "u", "r"],
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
      name: "Rushed Rebirth",
      cost: ["b", "g"],
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
      number: "229",
      name: "Shadewing Laureate",
      cost: ["w", "wb", "b"],
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
      name: "Shadrix Silverquill",
      cost: ["3", "w", "b"],
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
          guide: "stx-mascot-tokens",
          categories: ["inkling"],
        },
      ],
    },
    {
      number: "231",
      name: "Silverquill Apprentice",
      cost: ["w", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-magecraft",
        },
      ],
    },
    {
      number: "232",
      name: "Silverquill Command",
      cost: ["2", "w", "b"],
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
      number: "233",
      name: "Silverquill Pledgemage",
      cost: ["1", "wb", "wb"],
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
          guide: "stx-magecraft",
        },
      ],
    },
    {
      number: "234",
      name: "Silverquill Silencer",
      cost: ["w", "b"],
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
      name: "Spectacle Mage",
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
      number: "236",
      name: "Spirit Summoning",
      cost: ["1", "rw", "rw"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-learn-lesson",
          categories: ["lesson"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["spirit"],
        },
      ],
    },
    {
      number: "237",
      name: "Spiteful Squad",
      cost: ["2", "w", "b"],
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
      name: "Square Up",
      cost: ["1", "gu"],
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
      number: "239",
      name: "Stonebound Mentor",
      cost: ["1", "r", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["spirit"],
        },
        {
          guide: "stx-graveyard",
          categories: ["leave"],
        },
      ],
    },
    {
      number: "240",
      name: "Tanazir Quandrix",
      cost: ["3", "g", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "241",
      name: "Teach by Example",
      cost: ["ur", "ur"],
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
      number: "242",
      name: "Tend the Pests",
      cost: ["b", "g"],
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
          guide: "stx-mascot-tokens",
          categories: ["pest"],
        },
      ],
    },
    {
      number: "243",
      name: "Thrilling Discovery",
      cost: ["r", "w"],
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
      number: "244",
      name: "Vanishing Verse",
      cost: ["w", "b"],
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
      number: "245",
      name: "Velomachus Lorehold",
      cost: ["5", "r", "w"],
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
      number: "246",
      name: "Venerable Warsinger",
      cost: ["1", "r", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-mascot-tokens",
          categories: ["spirit"],
        },
        {
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "247",
      name: "Witherbloom Apprentice",
      cost: ["b", "g"],
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
          guide: "stx-magecraft",
        },
      ],
    },
    {
      number: "248",
      name: "Witherbloom Command",
      cost: ["b", "g"],
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
        {
          guide: "lifegain",
        },
        {
          guide: "mill",
        },
        {
          guide: "ping",
        },
      ],
    },
    {
      number: "249",
      name: "Witherbloom Pledgemage",
      cost: ["3", "bg", "bg"],
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
          guide: "stx-magecraft",
        },
      ],
    },
    {
      number: "250",
      name: "Zimone, Quandrix Prodigy",
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
        {
          guide: "stx-8lands",
        },
      ],
    },
    {
      number: "251",
      name: "Biblioplex Assistant",
      cost: ["4"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "252",
      name: "Campus Guide",
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
      number: "253",
      name: "Codie, Vociferous Codex",
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
      number: "254",
      name: "Cogwork Archivist",
      cost: ["6"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "stx-graveyard",
          categories: ["recursion"],
        },
      ],
    },
    {
      number: "255",
      name: "Excavated Wall",
      cost: ["1"],
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
      name: "Letter of Acceptance",
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
      ],
    },
    {
      number: "257",
      name: "Reflective Golem",
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
      number: "258",
      name: "Spell Satchel",
      cost: ["2"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "stx-magecraft",
        },
      ],
    },
    {
      number: "259",
      name: "Strixhaven Stadium",
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
      number: "260",
      name: "Team Pennant",
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
      number: "261",
      name: "Zephyr Boots",
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
      number: "262",
      name: "Access Tunnel",
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
      number: "263",
      name: "Archway Commons",
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
      name: "The Biblioplex",
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
      number: "265",
      name: "Frostboil Snarl",
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
      name: "Furycalm Snarl",
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
      name: "Hall of Oracles",
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
      number: "268",
      name: "Lorehold Campus",
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
      number: "269",
      name: "Necroblossom Snarl",
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
      number: "270",
      name: "Prismari Campus",
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
      number: "271",
      name: "Quandrix Campus",
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
      name: "Shineshadow Snarl",
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
      number: "273",
      name: "Silverquill Campus",
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
      number: "274",
      name: "Vineglimmer Snarl",
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
      number: "275",
      name: "Witherbloom Campus",
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
  ],
};

export default format;
