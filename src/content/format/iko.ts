import type { IFormatConfig } from "@/models";

const format: IFormatConfig = {
  code: "iko",
  name: "Ikoria: Land of the Behemoths",
  guides: {
    full: {
      name: "Full Guide",
      defaultGrouping: "mv",
      defaultOrdering: "color",
      categories: {
        creature: "Creature",
        spell: "Spell",
        land: "Land",
      },
    },
    instants: {
      name: "Instants Guide",
      defaultGrouping: "mv",
      defaultOrdering: "color",
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
    "iko-cycling": {
      name: "Mechanic: Cycling",
      icon: "fas fa-random",
      categories: {
        cycling: "All Cycling Cards",
        payoff: "Payoffs",
      },
    },
    "iko-mutate": {
      name: "Mechanic: Mutate",
      icon: "fas fa-otter",
      categories: {
        mutate: "All Mutate Cards",
        payoff: "Payoffs",
      },
    },
    "iko-companion": {
      name: "Mechanic: Companion",
      icon: "fas fa-paw",
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
      guides: ["iko-cycling", "iko-mutate", "iko-companion"],
    },
  },
  cards: [
    {
      number: "1",
      name: "Adaptive Shimmerer",
      cost: ["5"],
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
      number: "2",
      name: "Farfinder",
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
      ],
    },
    {
      number: "3",
      name: "Mysterious Egg",
      cost: ["1"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-mutate",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "4",
      name: "Blade Banish",
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
      number: "5",
      name: "Checkpoint Officer",
      cost: ["1", "w"],
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
      number: "6",
      name: "Coordinated Charge",
      cost: ["4", "w"],
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
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "7",
      name: "Cubwarden",
      cost: ["3", "w"],
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
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "8",
      name: "Daysquad Marshal",
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
      number: "9",
      name: "Divine Arrow",
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
      number: "10",
      name: "Drannith Healer",
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
        {
          guide: "iko-cycling",
          categories: ["cycling", "payoff"],
        },
      ],
    },
    {
      number: "11",
      name: "Drannith Magistrate",
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
      number: "12",
      name: "Fight as One",
      cost: ["w"],
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
      number: "13",
      name: "Flourishing Fox",
      cost: ["w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-cycling",
          categories: ["cycling", "payoff"],
        },
      ],
    },
    {
      number: "14",
      name: "Garrison Cat",
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
      number: "15",
      name: "Helica Glider",
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
      name: "Huntmaster Liger",
      cost: ["3", "w"],
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
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "17",
      name: "Imposing Vantasaur",
      cost: ["5", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "18",
      name: "Keensight Mentor",
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
      number: "19",
      name: "Lavabrink Venturer",
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
      number: "20",
      name: "Light of Hope",
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
        {
          guide: "lifegain",
        },
      ],
    },
    {
      number: "21",
      name: "Luminous Broodmoth",
      cost: ["2", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "22",
      name: "Majestic Auricorn",
      cost: ["4", "w"],
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
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "23",
      name: "Maned Serval",
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
      number: "24",
      name: "Mythos of Snapdax",
      cost: ["2", "w", "w"],
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
      number: "25",
      name: "Pacifism",
      cost: ["1", "w"],
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
      number: "26",
      name: "Patagia Tiger",
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
      number: "27",
      name: "Perimeter Sergeant",
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
      number: "28",
      name: "Sanctuary Lockdown",
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
      number: "29",
      name: "Savai Sabertooth",
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
      number: "30",
      name: "Snare Tactician",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-cycling",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "31",
      name: "Solid Footing",
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
      number: "32",
      name: "Splendor Mare",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          cost: ["1", "w"],
          guide: "instants",
          categories: ["board"],
        },
        {
          guide: "lifegain",
        },
        {
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "33",
      name: "Spontaneous Flight",
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
      number: "34",
      name: "Stormwild Capridor",
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
      number: "35",
      name: "Swallow Whole",
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
      number: "36",
      name: "Valiant Rescuer",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-cycling",
          categories: ["cycling", "payoff"],
        },
      ],
    },
    {
      number: "37",
      name: "Vulpikeet",
      cost: ["3", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "38",
      name: "Will of the All-Hunter",
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
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "39",
      name: "Aegis Turtle",
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
      number: "40",
      name: "Anticipate",
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
      number: "41",
      name: "Archipelagore",
      cost: ["5", "u", "u"],
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
        {
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "42",
      name: "Avian Oddity",
      cost: ["3", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          cost: ["2", "u"],
          guide: "instants",
          categories: ["board"],
        },
        {
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "43",
      name: "Boon of the Wish-Giver",
      cost: ["4", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "44",
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
      number: "45",
      name: "Convolute",
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
      ],
    },
    {
      number: "46",
      name: "Crystacean",
      cost: ["3", "u"],
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
      number: "47",
      name: "Dreamtail Heron",
      cost: ["4", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "48",
      name: "Escape Protocol",
      cost: ["1", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "iko-cycling",
          categories: ["payoff"],
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
      name: "Facet Reader",
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
      number: "51",
      name: "Frost Lynx",
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
      number: "52",
      name: "Frostveil Ambush",
      cost: ["3", "u", "u"],
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
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "53",
      name: "Glimmerbell",
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
      name: "Gust of Wind",
      cost: ["3", "u"],
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
      number: "55",
      name: "Hampering Snare",
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
        {
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "56",
      name: "Keep Safe",
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
      name: "Mystic Subdual",
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
      ],
    },
    {
      number: "58",
      name: "Mythos of Illuna",
      cost: ["2", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "59",
      name: "Neutralize",
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
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "60",
      name: "Of One Mind",
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
      number: "61",
      name: "Ominous Seas",
      cost: ["1", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "iko-cycling",
          categories: ["cycling", "payoff"],
        },
      ],
    },
    {
      number: "62",
      name: "Phase Dolphin",
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
      name: "Pollywog Symbiote",
      cost: ["1", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-mutate",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "64",
      name: "Pouncing Shoreshark",
      cost: ["4", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          cost: ["3", "u"],
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
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "65",
      name: "Reconnaissance Mission",
      cost: ["2", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "66",
      name: "Sea-Dasher Octopus",
      cost: ["1", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          cost: ["1", "u"],
          guide: "instants",
          categories: ["board"],
        },
        {
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "67",
      name: "Shark Typhoon",
      cost: ["5", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          cost: ["x", "1", "u"],
          guide: "instants",
          categories: ["board"],
        },
        {
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "68",
      name: "Startling Development",
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
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "69",
      name: "Thieving Otter",
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
      number: "70",
      name: "Voracious Greatshark",
      cost: ["3", "u", "u"],
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
      number: "71",
      name: "Wingfold Pteron",
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
      number: "72",
      name: "Wingspan Mentor",
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
      number: "73",
      name: "Bastion of Remembrance",
      cost: ["2", "b"],
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
      number: "74",
      name: "Blitz Leech",
      cost: ["5", "b"],
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
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "75",
      name: "Blood Curdle",
      cost: ["3", "b"],
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
      number: "76",
      name: "Boot Nipper",
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
      number: "77",
      name: "Bushmeat Poacher",
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
      number: "78",
      name: "Call of the Death-Dweller",
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
      number: "79",
      name: "Cavern Whisperer",
      cost: ["4", "b"],
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
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "80",
      name: "Chittering Harvester",
      cost: ["5", "b"],
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
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "81",
      name: "Corpse Churn",
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
      number: "82",
      name: "Dark Bargain",
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
      number: "83",
      name: "Dead Weight",
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
      name: "Dirge Bat",
      cost: ["2", "b", "b"],
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
        {
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "85",
      name: "Durable Coilbug",
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
      number: "86",
      name: "Duskfang Mentor",
      cost: ["2", "b"],
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
      number: "87",
      name: "Easy Prey",
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
        {
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "88",
      name: "Extinction Event",
      cost: ["3", "b"],
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
      number: "89",
      name: "Gloom Pangolin",
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
      number: "90",
      name: "Grimdancer",
      cost: ["1", "b", "b"],
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
      number: "91",
      name: "Heartless Act",
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
      number: "92",
      name: "Hunted Nightmare",
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
      number: "93",
      name: "Insatiable Hemophage",
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
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "94",
      name: "Lurking Deadeye",
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
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "95",
      name: "Memory Leak",
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
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "96",
      name: "Mutual Destruction",
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
      number: "97",
      name: "Mythos of Nethroi",
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
        {
          guide: "disenchant",
        },
      ],
    },
    {
      number: "98",
      name: "Nightsquad Commando",
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
      number: "99",
      name: "Serrated Scorpion",
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
      ],
    },
    {
      number: "100",
      name: "Suffocating Fumes",
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
          categories: ["removal", "boardwipe"],
        },
        {
          guide: "boardwipe",
        },
        {
          guide: "ping",
        },
        {
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "101",
      name: "Unbreakable Bond",
      cost: ["4", "b"],
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
      number: "102",
      name: "Unexpected Fangs",
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
      number: "103",
      name: "Unlikely Aid",
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
      number: "104",
      name: "Void Beckoner",
      cost: ["6", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          cost: ["2", "b"],
          guide: "instants",
          categories: ["board"],
        },
        {
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "105",
      name: "Whisper Squad",
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
      number: "106",
      name: "Zagoth Mamba",
      cost: ["b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-mutate",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "107",
      name: "Blazing Volley",
      cost: ["r"],
      rarity: "c",
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
          guide: "ping",
        },
      ],
    },
    {
      number: "108",
      name: "Blisterspit Gremlin",
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
      number: "109",
      name: "Blitz of the Thunder-Raptor",
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
      number: "110",
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
      number: "111",
      name: "Clash of Titans",
      cost: ["3", "r", "r"],
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
      number: "112",
      name: "Cloudpiercer",
      cost: ["4", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "113",
      name: "Drannith Stinger",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-cycling",
          categories: ["cycling", "payoff"],
        },
      ],
    },
    {
      number: "114",
      name: "Everquill Phoenix",
      cost: ["2", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "115",
      name: "Ferocious Tigorilla",
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
      number: "116",
      name: "Fire Prophecy",
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
      number: "117",
      name: "Flame Spill",
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
      number: "118",
      name: "Footfall Crater",
      cost: ["r"],
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
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "119",
      name: "Forbidden Friendship",
      cost: ["1", "r"],
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
      number: "120",
      name: "Frenzied Raptor",
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
      number: "121",
      name: "Frillscare Mentor",
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
      number: "122",
      name: "Go for Blood",
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
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "123",
      name: "Heightened Reflexes",
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
      number: "124",
      name: "Lava Serpent",
      cost: ["5", "r"],
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
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "125",
      name: "Lukka, Coppercoat Outcast",
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
      number: "126",
      name: "Momentum Rumbler",
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
      number: "127",
      name: "Mythos of Vadrok",
      cost: ["2", "r", "r"],
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
      number: "128",
      name: "Porcuparrot",
      cost: ["3", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ping",
        },
        {
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "129",
      name: "Prickly Marmoset",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-cycling",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "130",
      name: "Pyroceratops",
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
      number: "131",
      name: "Raking Claws",
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
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "132",
      name: "Reptilian Reflection",
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
          guide: "iko-cycling",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "133",
      name: "Rooting Moloch",
      cost: ["4", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-cycling",
          categories: ["cycling", "payoff"],
        },
      ],
    },
    {
      number: "134",
      name: "Rumbling Rockslide",
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
      ],
    },
    {
      number: "135",
      name: "Sanctuary Smasher",
      cost: ["4", "r", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          cost: ["2", "r"],
          guide: "instants",
          categories: ["board"],
        },
        {
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "136",
      name: "Shredded Sails",
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
          guide: "disenchant",
        },
        {
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "137",
      name: "Spelleater Wolverine",
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
      number: "138",
      name: "Tentative Connection",
      cost: ["3", "r"],
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
      number: "139",
      name: "Unpredictable Cyclone",
      cost: ["3", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "iko-cycling",
          categories: ["cycling", "payoff"],
        },
      ],
    },
    {
      number: "140",
      name: "Weaponize the Monsters",
      cost: ["r"],
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
      number: "141",
      name: "Yidaro, Wandering Monster",
      cost: ["5", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          cost: ["1", "r"],
          guide: "instants",
          categories: ["board"],
        },
        {
          guide: "haste",
        },
        {
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "142",
      name: "Adventurous Impulse",
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
      number: "143",
      name: "Almighty Brushwagg",
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
      number: "144",
      name: "Auspicious Starrix",
      cost: ["4", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "145",
      name: "Barrier Breach",
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
          guide: "disenchant",
        },
        {
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "146",
      name: "Bristling Boar",
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
      number: "147",
      name: "Charge of the Forever-Beast",
      cost: ["2", "g"],
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
      number: "148",
      name: "Colossification",
      cost: ["5", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "149",
      name: "Essence Symbiote",
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
          guide: "iko-mutate",
          categories: ["payoffs"],
        },
      ],
    },
    {
      number: "150",
      name: "Excavation Mole",
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
      number: "151",
      name: "Exuberant Wolfbear",
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
      number: "152",
      name: "Fertilid",
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
      number: "153",
      name: "Flycatcher Giraffid",
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
      number: "154",
      name: "Fully Grown",
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
      ],
    },
    {
      number: "155",
      name: "Gemrazer",
      cost: ["3", "g"],
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
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "156",
      name: "Glowstone Recluse",
      cost: ["2", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "157",
      name: "Greater Sandwurm",
      cost: ["5", "g", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "158",
      name: "Honey Mammoth",
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
      number: "159",
      name: "Hornbash Mentor",
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
      number: "160",
      name: "Humble Naturalist",
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
      number: "161",
      name: "Ivy Elemental",
      cost: ["x", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "162",
      name: "Kogla, the Titan Ape",
      cost: ["3", "g", "g", "g"],
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
      number: "163",
      name: "Lead the Stampede",
      cost: ["2", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "164",
      name: "Migration Path",
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
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "165",
      name: "Migratory Greathorn",
      cost: ["3", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "166",
      name: "Monstrous Step",
      cost: ["4", "g"],
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
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "167",
      name: "Mosscoat Goriak",
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
      number: "168",
      name: "Mythos of Brokkos",
      cost: ["2", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "169",
      name: "Plummet",
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
      number: "170",
      name: "Ram Through",
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
      number: "171",
      name: "Sudden Spinnerets",
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
      number: "172",
      name: "Survivors' Bond",
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
      number: "173",
      name: "Thwart the Enemy",
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
          guide: "fog",
        },
      ],
    },
    {
      number: "174",
      name: "Titanoth Rex",
      cost: ["7", "g", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          cost: ["1", "g"],
          guide: "instants",
          categories: ["board"],
        },
        {
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "175",
      name: "Vivien, Monsters' Advocate",
      cost: ["3", "g", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "176",
      name: "Wilt",
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
          guide: "disenchant",
        },
        {
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "177",
      name: "Back for More",
      cost: ["4", "b", "g"],
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
      number: "178",
      name: "Boneyard Lurker",
      cost: ["2", "b", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "179",
      name: "Brokkos, Apex of Forever",
      cost: ["2", "b", "g", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "180",
      name: "Channeled Force",
      cost: ["2", "u", "r"],
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
      number: "181",
      name: "Chevill, Bane of Monsters",
      cost: ["b", "g"],
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
      number: "182",
      name: "Death's Oasis",
      cost: ["w", "b", "g"],
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
      number: "183",
      name: "Dire Tactics",
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
          categories: ["removal"],
        },
      ],
    },
    {
      number: "184",
      name: "Eerie Ultimatum",
      cost: ["w", "w", "b", "b", "b", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "185",
      name: "Emergent Ultimatum",
      cost: ["b", "b", "g", "g", "g", "u", "u"],
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
      name: "Frondland Felidar",
      cost: ["2", "g", "w"],
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
      number: "187",
      name: "General Kudro of Drannith",
      cost: ["1", "w", "b"],
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
      number: "188",
      name: "General's Enforcer",
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
      number: "189",
      name: "Genesis Ultimatum",
      cost: ["g", "g", "u", "u", "u", "r", "r"],
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
      name: "Illuna, Apex of Wishes",
      cost: ["2", "g", "u", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "191",
      name: "Inspired Ultimatum",
      cost: ["u", "u", "r", "r", "r", "w", "w"],
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
          guide: "lifegain",
        },
      ],
    },
    {
      number: "192",
      name: "Kinnan, Bonder Prodigy",
      cost: ["g", "u"],
      rarity: "m",
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
      number: "193",
      name: "Labyrinth Raptor",
      cost: ["b", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "194",
      name: "Lore Drakkis",
      cost: ["1", "u", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "195",
      name: "Narset of the Ancient Way",
      cost: ["1", "u", "r", "w"],
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
      number: "196",
      name: "Necropanther",
      cost: ["1", "w", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "197",
      name: "Nethroi, Apex of Death",
      cost: ["2", "w", "b", "g"],
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
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "198",
      name: "Offspring's Revenge",
      cost: ["2", "r", "w", "b"],
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
      number: "199",
      name: "Parcelbeast",
      cost: ["2", "g", "u"],
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
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "200",
      name: "Primal Empathy",
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
      number: "201",
      name: "Quartzwood Crasher",
      cost: ["2", "r", "r", "g"],
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
      name: "Regal Leosaur",
      cost: ["r", "w"],
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
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "203",
      name: "Rielle, the Everwise",
      cost: ["1", "u", "r"],
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
      name: "Ruinous Ultimatum",
      cost: ["r", "r", "w", "w", "w", "b", "b"],
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
      number: "205",
      name: "Savai Thundermane",
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
          guide: "lifegain",
        },
        {
          guide: "iko-cycling",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "206",
      name: "Skull Prophet",
      cost: ["b", "g"],
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
      number: "207",
      name: "Skycat Sovereign",
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
      number: "208",
      name: "Slitherwisp",
      cost: ["u", "b", "b"],
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
      number: "209",
      name: "Snapdax, Apex of the Hunt",
      cost: ["1", "r", "w", "b"],
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
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "210",
      name: "Song of Creation",
      cost: ["1", "g", "u", "r"],
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
      number: "211",
      name: "Sprite Dragon",
      cost: ["u", "r"],
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
      number: "212",
      name: "Titans' Nest",
      cost: ["1", "b", "g", "u"],
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
      number: "213",
      name: "Trumpeting Gnarr",
      cost: ["1", "g", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "214",
      name: "Vadrok, Apex of Thunder",
      cost: ["u", "r", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-mutate",
          categories: ["mutate"],
        },
      ],
    },
    {
      number: "215",
      name: "Whirlwind of Thought",
      cost: ["1", "u", "r", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "216",
      name: "Winota, Joiner of Forces",
      cost: ["2", "r", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "217",
      name: "Zenith Flare",
      cost: ["2", "r", "w"],
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
        {
          guide: "iko-cycling",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "218",
      name: "Alert Heedbonder",
      cost: ["1", "gw", "gw"],
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
      number: "219",
      name: "Cunning Nightbonder",
      cost: ["ub", "ub"],
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
      number: "220",
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
    {
      number: "221",
      name: "Gyruda, Doom of Depths",
      cost: ["4", "ub", "ub"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-companion",
        },
      ],
    },
    {
      number: "222",
      name: "Jegantha, the Wellspring",
      cost: ["4", "rg"],
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
          guide: "iko-companion",
        },
      ],
    },
    {
      number: "223",
      name: "Jubilant Skybonder",
      cost: ["1", "wu", "wu"],
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
      name: "Kaheera, the Orphanguard",
      cost: ["1", "gw", "gw"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-companion",
        },
      ],
    },
    {
      number: "225",
      name: "Keruga, the Macrosage",
      cost: ["3", "gu", "gu"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "226",
      name: "Lurrus of the Dream-Den",
      cost: ["1", "wb", "wb"],
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
          guide: "iko-companion",
        },
      ],
    },
    {
      number: "227",
      name: "Lutri, the Spellchaser",
      cost: ["1", "ur", "ur"],
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
          guide: "iko-companion",
        },
      ],
    },
    {
      number: "228",
      name: "Obosh, the Preypiercer",
      cost: ["3", "br", "br"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-companion",
        },
      ],
    },
    {
      number: "229",
      name: "Proud Wildbonder",
      cost: ["2", "rg", "rg"],
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
      name: "Sonorous Howlbonder",
      cost: ["1", "br", "br"],
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
      name: "Umori, the Collector",
      cost: ["2", "bg", "bg"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-companion",
        },
      ],
    },
    {
      number: "232",
      name: "Yorion, Sky Nomad",
      cost: ["3", "wu", "wu"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-companion",
        },
      ],
    },
    {
      number: "233",
      name: "Zirda, the Dawnwaker",
      cost: ["1", "rw", "rw"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "iko-companion",
        },
      ],
    },
    {
      number: "234",
      name: "Crystalline Giant",
      cost: ["3"],
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
      number: "235",
      name: "Indatha Crystal",
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
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "236",
      name: "Ketria Crystal",
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
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "237",
      name: "The Ozolith",
      cost: ["1"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "238",
      name: "Raugrin Crystal",
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
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "239",
      name: "Savai Crystal",
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
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "240",
      name: "Sleeper Dart",
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
      number: "241",
      name: "Springjaw Trap",
      cost: ["1"],
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
      number: "242",
      name: "Zagoth Crystal",
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
          guide: "iko-cycling",
          categories: ["cycling"],
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
          guide: "lifegain",
        },
        {
          guide: "fixing",
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
          guide: "lifegain",
        },
        {
          guide: "fixing",
        },
      ],
    },
    {
      number: "245",
      name: "Bonders' Enclave",
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
      number: "246",
      name: "Dismal Backwater",
      cost: [],
      rarity: "c",
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
      number: "247",
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
      number: "248",
      name: "Indatha Triome",
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
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "249",
      name: "Jungle Hollow",
      cost: [],
      rarity: "c",
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
      number: "250",
      name: "Ketria Triome",
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
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "251",
      name: "Raugrin Triome",
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
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "252",
      name: "Rugged Highlands",
      cost: [],
      rarity: "c",
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
      number: "253",
      name: "Savai Triome",
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
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
    {
      number: "254",
      name: "Scoured Barrens",
      cost: [],
      rarity: "c",
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
      number: "255",
      name: "Swiftwater Cliffs",
      cost: [],
      rarity: "c",
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
      number: "256",
      name: "Thornwood Falls",
      cost: [],
      rarity: "c",
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
      number: "257",
      name: "Tranquil Cove",
      cost: [],
      rarity: "c",
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
      number: "258",
      name: "Wind-Scarred Crag",
      cost: [],
      rarity: "c",
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
      number: "259",
      name: "Zagoth Triome",
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
          guide: "iko-cycling",
          categories: ["cycling"],
        },
      ],
    },
  ],
};

export default format;
