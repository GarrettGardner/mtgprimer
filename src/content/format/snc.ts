import type { IFormatConfig } from "@/models";

const format: IFormatConfig = {
  code: "snc",
  name: "Streets of New Capenna",
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
    "snc-blitz": {
      name: "Mechanic: Blitz",
      icon: "fas fa-running",
    },
    "snc-casualty": {
      name: "Mechanic: Casualty",
      icon: "fas fa-dizzy",
      categories: {
        casualty: "",
        payoff: "Payoffs",
      },
    },
    "snc-shield": {
      name: "Mechanic: Shield Counter",
      icon: "fas fa-shield-alt",
    },
    "snc-hideaway": {
      name: "Mechanic: Hideaway",
      icon: "fas fa-eye-slash",
    },
    "snc-connive": {
      name: "Mechanic: Connive",
      icon: "fas fa-map",
      categories: {
        connive: "",
        payoff: "Payoffs",
      },
    },
    "snc-treasure": {
      name: "Theme: Treasure",
      icon: "fas fa-coins",
      categories: {
        treasure: "",
        payoff: "Payoff",
        opponent: "Opponent",
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
      guides: ["snc-blitz", "snc-casualty", "snc-shield", "snc-hideaway", "snc-connive", "snc-treasure"],
    },
  },
  cards: [
    {
      number: "1",
      name: "Angelic Observer",
      cost: ["5", "w"],
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
      name: "Backup Agent",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-citizen",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "3",
      name: "Ballroom Brawlers",
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
      ],
    },
    {
      number: "4",
      name: "Boon of Safety",
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
          guide: "snc-shield",
        },
      ],
    },
    {
      number: "5",
      name: "Brokers Initiate",
      cost: ["w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-citizen",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "6",
      name: "Buy Your Silence",
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
        {
          guide: "snc-treasure",
          categories: ["opponent"],
        },
      ],
    },
    {
      number: "7",
      name: "Celebrity Fencer",
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
      number: "8",
      name: "Citizen's Crowbar",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "disenchant",
        },
        {
          guide: "snc-citizen",
          categories: ["token"],
        },
      ],
    },
    {
      number: "9",
      name: "Dapper Shieldmate",
      cost: ["3", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-shield",
        },
      ],
    },
    {
      number: "10",
      name: "Depopulate",
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
          categories: ["normal"],
        },
      ],
    },
    {
      number: "11",
      name: "Elspeth Resplendent",
      cost: ["3", "w", "w"],
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
          guide: "snc-shield",
        },
      ],
    },
    {
      number: "12",
      name: "Extraction Specialist",
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
      number: "13",
      name: "Gathering Throng",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-citizen",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "14",
      name: "Giada, Font of Hope",
      cost: ["1", "w"],
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
      number: "15",
      name: "Halo Fountain",
      cost: ["2", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "snc-citizen",
          categories: ["token"],
        },
      ],
    },
    {
      number: "16",
      name: "Hold for Ransom",
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
      number: "17",
      name: "Illuminator Virtuoso",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-connive",
          categories: ["connive"],
        },
      ],
    },
    {
      number: "18",
      name: "Inspiring Overseer",
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
      number: "19",
      name: "Kill Shot",
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
      number: "20",
      name: "Knockout Blow",
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
          cost: ["w"],
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
      number: "21",
      name: "Mage's Attendant",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "counterspell",
        },
      ],
    },
    {
      number: "22",
      name: "Mysterious Limousine",
      cost: ["3", "w", "w"],
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
      number: "23",
      name: "Patch Up",
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
      number: "24",
      name: "Rabble Rousing",
      cost: ["4", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "snc-citizen",
          categories: ["token"],
        },
        {
          guide: "snc-hideaway",
        },
      ],
    },
    {
      number: "25",
      name: "Raffine's Guidance",
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
      number: "26",
      name: "Raffine's Informant",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-connive",
          categories: ["connive"],
        },
      ],
    },
    {
      number: "27",
      name: "Refuse to Yield",
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
      number: "28",
      name: "Revelation of Power",
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
      number: "29",
      name: "Rumor Gatherer",
      cost: ["1", "w", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "30",
      name: "Sanctuary Warden",
      cost: ["4", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-citizen",
          categories: ["token"],
        },
        {
          guide: "snc-shield",
        },
      ],
    },
    {
      number: "31",
      name: "Sky Crier",
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
          guide: "snc-citizen",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "32",
      name: "Speakeasy Server",
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
          guide: "snc-citizen",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "33",
      name: "Swooping Protector",
      cost: ["3", "w"],
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
          guide: "snc-citizen",
          categories: ["creature"],
        },
        {
          guide: "snc-shield",
        },
      ],
    },
    {
      number: "34",
      name: "All-Seeing Arbiter",
      cost: ["4", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-connive",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "35",
      name: "Backstreet Bruiser",
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
      number: "36",
      name: "Brokers Veteran",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-shield",
        },
      ],
    },
    {
      number: "37",
      name: "Case the Joint",
      cost: ["3", "u"],
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
      number: "38",
      name: "Cut Your Losses",
      cost: ["4", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mill",
          categories: ["mill"],
        },
        {
          guide: "snc-casualty",
          categories: ["casualty"],
        },
      ],
    },
    {
      number: "39",
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
      number: "40",
      name: "Echo Inspector",
      cost: ["3", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-connive",
          categories: ["connive"],
        },
      ],
    },
    {
      number: "41",
      name: "Errant, Street Artist",
      cost: ["u"],
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
          guide: "haste",
        },
      ],
    },
    {
      number: "42",
      name: "Even the Score",
      cost: ["x", "u", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["other"],
          cost: ["x"],
        },
      ],
    },
    {
      number: "43",
      name: "Expendable Lackey",
      cost: ["u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-citizen",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "44",
      name: "Faerie Vandal",
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
          guide: "snc-connive",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "45",
      name: "Hypnotic Grifter",
      cost: ["u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-connive",
          categories: ["connive"],
        },
      ],
    },
    {
      number: "46",
      name: "Ledger Shredder",
      cost: ["1", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-connive",
          categories: ["connive"],
        },
      ],
    },
    {
      number: "47",
      name: "A Little Chat",
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
          guide: "snc-casualty",
          categories: ["casualty"],
        },
      ],
    },
    {
      number: "48",
      name: "Majestic Metamorphosis",
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
    },
    {
      number: "49",
      name: "Make Disappear",
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
          guide: "snc-casualty",
          categories: ["casualty"],
        },
      ],
    },
    {
      number: "50",
      name: "Obscura Initiate",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-citizen",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "51",
      name: "An Offer You Can't Refuse",
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
          guide: "snc-treasure",
          categories: ["opponent"],
        },
      ],
    },
    {
      number: "52",
      name: "Out of the Way",
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
          cost: ["1", "u"],
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
      number: "53",
      name: "Psionic Snoop",
      cost: ["2", "u"],
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
          guide: "snc-connive",
          categories: ["connive"],
        },
      ],
    },
    {
      number: "54",
      name: "Psychic Pickpocket",
      cost: ["4", "u"],
      rarity: "u",
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
          guide: "snc-connive",
          categories: ["connive"],
        },
      ],
    },
    {
      number: "55",
      name: "Public Enemy",
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
      number: "56",
      name: "Reservoir Kraken",
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
      number: "57",
      name: "Rooftop Nuisance",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "snc-casualty",
          categories: ["casualty"],
        },
      ],
    },
    {
      number: "58",
      name: "Run Out of Town",
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
      number: "59",
      name: "Security Bypass",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "snc-connive",
          categories: ["connive"],
        },
      ],
    },
    {
      number: "60",
      name: "Sewer Crocodile",
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
      number: "61",
      name: "Sleep with the Fishes",
      cost: ["2", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "62",
      name: "Slip Out the Back",
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
      ],
    },
    {
      number: "63",
      name: "Undercover Operative",
      cost: ["2", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-shield",
        },
      ],
    },
    {
      number: "64",
      name: "Wingshield Agent",
      cost: ["2", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-shield",
        },
      ],
    },
    {
      number: "65",
      name: "Wiretapping",
      cost: ["4", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "snc-hideaway",
        },
      ],
    },
    {
      number: "66",
      name: "Witness Protection",
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
      number: "67",
      name: "Angel of Suffering",
      cost: ["3", "b", "b"],
      rarity: "m",
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
      number: "68",
      name: "Body Launderer",
      cost: ["2", "b", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-connive",
          categories: ["connive"],
        },
      ],
    },
    {
      number: "69",
      name: "Cemetery Tampering",
      cost: ["2", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "snc-hideaway",
        },
      ],
    },
    {
      number: "70",
      name: "Corrupt Court Official",
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
      ],
    },
    {
      number: "71",
      name: "Crooked Custodian",
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
      number: "72",
      name: "Cut of the Profits",
      cost: ["x", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "snc-casualty",
          categories: ["casualty"],
        },
      ],
    },
    {
      number: "73",
      name: "Cutthroat Contender",
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
      number: "74",
      name: "Deal Gone Bad",
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
        {
          guide: "mill",
          categories: ["mill"],
        },
      ],
    },
    {
      number: "75",
      name: "Demon's Due",
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
      number: "76",
      name: "Dig Up the Body",
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
          guide: "mill",
          categories: ["self"],
        },
        {
          guide: "snc-casualty",
          categories: ["casualty"],
        },
      ],
    },
    {
      number: "77",
      name: "Dusk Mangler",
      cost: ["5", "b", "b"],
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
          guide: "discard",
        },
      ],
    },
    {
      number: "78",
      name: "Extract the Truth",
      cost: ["1", "b"],
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
          guide: "disenchant",
        },
      ],
    },
    {
      number: "79",
      name: "Fake Your Own Death",
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
          guide: "snc-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "80",
      name: "Girder Goons",
      cost: ["4", "b"],
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
          guide: "snc-blitz",
        },
      ],
    },
    {
      number: "81",
      name: "Graveyard Shift",
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
      number: "82",
      name: "Grisly Sigil",
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
          guide: "lifegain",
        },
        {
          guide: "ping",
        },
        {
          guide: "snc-casualty",
          categories: ["casualty"],
        },
      ],
    },
    {
      number: "83",
      name: "Illicit Shipment",
      cost: ["3", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "snc-casualty",
          categories: ["casualty"],
        },
      ],
    },
    {
      number: "84",
      name: "Incriminate",
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
      ],
    },
    {
      number: "85",
      name: "Join the Maestros",
      cost: ["4", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "snc-casualty",
          categories: ["casualty"],
        },
      ],
    },
    {
      number: "86",
      name: "Maestros Initiate",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-citizen",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "87",
      name: "Midnight Assassin",
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
      number: "88",
      name: "Murder",
      cost: ["1", "b", "b"],
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
      number: "89",
      name: "Night Clubber",
      cost: ["1", "b", "b"],
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
          categories: ["conditional"],
        },
        {
          guide: "haste",
        },
        {
          guide: "snc-blitz",
        },
      ],
    },
    {
      number: "90",
      name: "Raffine's Silencer",
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
          guide: "snc-connive",
          categories: ["connive"],
        },
      ],
    },
    {
      number: "91",
      name: "Revel Ruiner",
      cost: ["3", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-connive",
          categories: ["connive"],
        },
      ],
    },
    {
      number: "92",
      name: "Rogues' Gallery",
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
      number: "93",
      name: "Sanguine Spy",
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
      ],
    },
    {
      number: "94",
      name: "Shadow of Mortality",
      cost: ["13", "b", "b"],
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
      name: "Shakedown Heavy",
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
      number: "96",
      name: "Tavern Swindler",
      cost: ["1", "b"],
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
      number: "97",
      name: "Tenacious Underdog",
      cost: ["1", "b"],
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
          guide: "snc-blitz",
        },
      ],
    },
    {
      number: "98",
      name: "Vampire Scrivener",
      cost: ["4", "b"],
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
      name: "Whack",
      cost: ["3", "b"],
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
      number: "100",
      name: "Antagonize",
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
      number: "101",
      name: "Arcane Bombardment",
      cost: ["4", "r", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "102",
      name: "Big Score",
      cost: ["3", "r"],
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
          guide: "snc-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "103",
      name: "Call In a Professional",
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
      number: "104",
      name: "Daring Escape",
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
      number: "105",
      name: "Devilish Valet",
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
      number: "106",
      name: "Exhibition Magician",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-treasure",
          categories: ["treasure"],
        },
        {
          guide: "snc-citizen",
          categories: ["token"],
        },
      ],
    },
    {
      number: "107",
      name: "Glittering Stockpile",
      cost: ["2", "r"],
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
          guide: "snc-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "108",
      name: "Goldhound",
      cost: ["r"],
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
          guide: "snc-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "109",
      name: "Hoard Hauler",
      cost: ["3", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "snc-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "110",
      name: "Involuntary Employment",
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
        {
          guide: "snc-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "111",
      name: "Jackhammer",
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
      number: "112",
      name: "Jaxis, the Troublemaker",
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
          guide: "snc-blitz",
        },
      ],
    },
    {
      number: "113",
      name: "Light 'Em Up",
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
          guide: "snc-casualty",
          categories: ["casualty"],
        },
      ],
    },
    {
      number: "114",
      name: "Mayhem Patrol",
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
        {
          guide: "snc-blitz",
        },
      ],
    },
    {
      number: "115",
      name: "Plasma Jockey",
      cost: ["3", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "falter",
        },
        {
          guide: "haste",
        },
        {
          guide: "snc-blitz",
        },
      ],
    },
    {
      number: "116",
      name: "Professional Face-Breaker",
      cost: ["2", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-treasure",
          categories: ["treasure", "payoff"],
        },
      ],
    },
    {
      number: "117",
      name: "Pugnacious Pugilist",
      cost: ["3", "r", "r"],
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
          guide: "haste",
        },
        {
          guide: "snc-blitz",
        },
      ],
    },
    {
      number: "118",
      name: "Pyre-Sledge Arsonist",
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
          guide: "snc-treasure",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "119",
      name: "Ready to Rumble",
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
        {
          guide: "disenchant",
        },
      ],
    },
    {
      number: "120",
      name: "Riveteers Initiate",
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
        {
          guide: "snc-citizen",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "121",
      name: "Riveteers Requisitioner",
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
          guide: "snc-blitz",
        },
        {
          guide: "snc-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "122",
      name: "Rob the Archives",
      cost: ["1", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "snc-casualty",
          categories: ["casualty"],
        },
      ],
    },
    {
      number: "123",
      name: "Sizzling Soloist",
      cost: ["3", "r"],
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
          guide: "snc-citizen",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "124",
      name: "Sticky Fingers",
      cost: ["r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "125",
      name: "Strangle",
      cost: ["r"],
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
      number: "126",
      name: "Structural Assault",
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
          categories: ["conditional"],
        },
        {
          guide: "disenchant",
        },
      ],
    },
    {
      number: "127",
      name: "Torch Breath",
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
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "128",
      name: "Unlucky Witness",
      cost: ["r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-citizen",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "129",
      name: "Urabrask, Heretic Praetor",
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
      ],
    },
    {
      number: "130",
      name: "Widespread Thieving",
      cost: ["2", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "snc-treasure",
          categories: ["treasure"],
        },
        {
          guide: "snc-hideaway",
        },
      ],
    },
    {
      number: "131",
      name: "Witty Roastmaster",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-citizen",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "132",
      name: "Wrecking Crew",
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
      number: "133",
      name: "Attended Socialite",
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
      number: "134",
      name: "Bootleggers' Stash",
      cost: ["5", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "snc-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "135",
      name: "Bouncer's Beatdown",
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
          cost: ["g"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "136",
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
      number: "137",
      name: "Cabaretti Initiate",
      cost: ["g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-citizen",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "138",
      name: "Caldaia Strongarm",
      cost: ["4", "g"],
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
          guide: "snc-blitz",
        },
      ],
    },
    {
      number: "139",
      name: "Capenna Express",
      cost: ["3", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "snc-treasure",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "140",
      name: "Civic Gardener",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-citizen",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "141",
      name: "Cleanup Crew",
      cost: ["4", "g", "g"],
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
          guide: "lifegain",
        },
        {
          guide: "snc-citizen",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "142",
      name: "Courier's Briefcase",
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
          guide: "snc-citizen",
          categories: ["token"],
        },
        {
          guide: "snc-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "143",
      name: "Elegant Entourage",
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
      number: "144",
      name: "Evolving Door",
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
      number: "145",
      name: "Fight Rigging",
      cost: ["2", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "snc-hideaway",
        },
      ],
    },
    {
      number: "146",
      name: "For the Family",
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
      number: "147",
      name: "Freelance Muscle",
      cost: ["4", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "148",
      name: "Gala Greeters",
      cost: ["1", "g"],
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
          guide: "snc-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "149",
      name: "Glittermonger",
      cost: ["3", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "150",
      name: "High-Rise Sawjack",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-citizen",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "151",
      name: "Jewel Thief",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "152",
      name: "Luxurious Libation",
      cost: ["x", "g"],
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
          guide: "snc-citizen",
          categories: ["token"],
        },
      ],
    },
    {
      number: "153",
      name: "Most Wanted",
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
          guide: "snc-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "154",
      name: "Prizefight",
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
          guide: "snc-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "155",
      name: "Rhox Pummeler",
      cost: ["5", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-shield",
        },
      ],
    },
    {
      number: "156",
      name: "Riveteers Decoy",
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
        {
          guide: "snc-blitz",
        },
      ],
    },
    {
      number: "157",
      name: "Social Climber",
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
      number: "158",
      name: "Take to the Streets",
      cost: ["4", "g"],
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
      number: "159",
      name: "Titan of Industry",
      cost: ["4", "g", "g", "g"],
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
        {
          guide: "snc-shield",
        },
      ],
    },
    {
      number: "160",
      name: "Topiary Stomper",
      cost: ["1", "g", "g"],
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
      number: "161",
      name: "Venom Connoisseur",
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
      number: "162",
      name: "Vivien on the Hunt",
      cost: ["4", "g", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mill",
          categories: ["self"],
        },
      ],
    },
    {
      number: "163",
      name: "Voice of the Vermin",
      cost: ["3", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-citizen",
          categories: ["creature"],
        },
        {
          guide: "snc-shield",
        },
      ],
    },
    {
      number: "164",
      name: "Warm Welcome",
      cost: ["2", "g"],
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
          guide: "snc-citizen",
          categories: ["token"],
        },
      ],
    },
    {
      number: "165",
      name: "Workshop Warchief",
      cost: ["3", "g", "g"],
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
          guide: "snc-blitz",
        },
      ],
    },
    {
      number: "166",
      name: "Aven Heartstabber",
      cost: ["u", "b"],
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
      number: "167",
      name: "Black Market Tycoon",
      cost: ["r", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "168",
      name: "Body Dropper",
      cost: ["b", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-casualty",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "169",
      name: "Brazen Upstart",
      cost: ["r", "g", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "170",
      name: "Brokers Ascendancy",
      cost: ["g", "w", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "171",
      name: "Brokers Charm",
      cost: ["g", "w", "u"],
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
      number: "172",
      name: "Cabaretti Ascendancy",
      cost: ["r", "g", "w"],
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
      number: "173",
      name: "Cabaretti Charm",
      cost: ["r", "g", "w"],
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
          guide: "masspump",
        },
        {
          guide: "snc-citizen",
          categories: ["token"],
        },
      ],
    },
    {
      number: "174",
      name: "Celestial Regulator",
      cost: ["1", "w", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "175",
      name: "Ceremonial Groundbreaker",
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
      number: "176",
      name: "Civil Servant",
      cost: ["g", "w"],
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
          guide: "snc-citizen",
          categories: ["creature", "payoff"],
        },
      ],
    },
    {
      number: "177",
      name: "Cormela, Glamour Thief",
      cost: ["1", "u", "b", "r"],
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
          guide: "ramp",
        },
      ],
    },
    {
      number: "178",
      name: "Corpse Appraiser",
      cost: ["u", "b", "r"],
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
      name: "Corpse Explosion",
      cost: ["1", "b", "r"],
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
          categories: ["normal"],
        },
      ],
    },
    {
      number: "180",
      name: "Crew Captain",
      cost: ["b", "r", "g"],
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
      number: "181",
      name: "Darling of the Masses",
      cost: ["2", "g", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-citizen",
          categories: ["creature", "payoff", "token"],
        },
      ],
    },
    {
      number: "182",
      name: "Disciplined Duelist",
      cost: ["g", "w", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-citizen",
          categories: ["creature"],
        },
        {
          guide: "snc-shield",
        },
      ],
    },
    {
      number: "183",
      name: "Endless Detour",
      cost: ["g", "w", "u"],
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
      number: "184",
      name: "Evelyn, the Covetous",
      cost: ["2", "ub", "b", "br"],
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
      number: "185",
      name: "Exotic Pets",
      cost: ["1", "w", "u"],
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
      number: "186",
      name: "Falco Spara, Pactweaver",
      cost: ["1", "g", "w", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-shield",
        },
      ],
    },
    {
      number: "187",
      name: "Fatal Grudge",
      cost: ["b", "r"],
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
      number: "188",
      name: "Fleetfoot Dancer",
      cost: ["1", "r", "g", "w"],
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
      ],
    },
    {
      number: "189",
      name: "Forge Boss",
      cost: ["2", "b", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-casualty",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "190",
      name: "Glamorous Outlaw",
      cost: ["3", "u", "b", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          categories: ["other"],
          cost: ["2"],
        },
        {
          guide: "fixing",
        },
      ],
    },
    {
      number: "191",
      name: "Hostile Takeover",
      cost: ["2", "u", "b", "r"],
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
          categories: ["normal"],
        },
      ],
    },
    {
      number: "192",
      name: "Incandescent Aria",
      cost: ["r", "g", "w"],
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
          categories: ["normal"],
        },
      ],
    },
    {
      number: "193",
      name: "Jetmir, Nexus of Revels",
      cost: ["1", "r", "g", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "194",
      name: "Jetmir's Fixer",
      cost: ["r", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "195",
      name: "Jinnie Fay, Jetmir's Second",
      cost: ["rg", "g", "gw"],
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
      number: "196",
      name: "Lagrella, the Magpie",
      cost: ["g", "w", "u"],
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
      number: "197",
      name: "Lord Xander, the Collector",
      cost: ["4", "u", "b", "r"],
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
          guide: "mill",
          categories: ["mill"],
        },
      ],
    },
    {
      number: "198",
      name: "Maestros Ascendancy",
      cost: ["u", "b", "r"],
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
      number: "199",
      name: "Maestros Charm",
      cost: ["u", "b", "r"],
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
      ],
    },
    {
      number: "200",
      name: "Maestros Diabolist",
      cost: ["u", "b", "r"],
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
          guide: "ping",
        },
      ],
    },
    {
      number: "201",
      name: "Masked Bandits",
      cost: ["3", "b", "r", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          categories: ["other"],
          cost: ["2"],
        },
        {
          guide: "fixing",
        },
      ],
    },
    {
      number: "202",
      name: "Meeting of the Five",
      cost: ["3", "w", "u", "b", "r", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "203",
      name: "Metropolis Angel",
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
      number: "204",
      name: "Mr. Orfeo, the Boulder",
      cost: ["1", "b", "r", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "205",
      name: "Nimble Larcenist",
      cost: ["w", "u", "b"],
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
      number: "206",
      name: "Ob Nixilis, the Adversary",
      cost: ["1", "b", "r"],
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
          guide: "lifegain",
        },
        {
          guide: "ping",
        },
        {
          guide: "snc-casualty",
          categories: ["casualty"],
        },
      ],
    },
    {
      number: "207",
      name: "Obscura Ascendancy",
      cost: ["w", "u", "b"],
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
      number: "208",
      name: "Obscura Charm",
      cost: ["w", "u", "b"],
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
      number: "209",
      name: "Obscura Interceptor",
      cost: ["1", "w", "u", "b"],
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
          guide: "snc-connive",
          categories: ["connive"],
        },
      ],
    },
    {
      number: "210",
      name: "Ognis, the Dragon's Lash",
      cost: ["1", "br", "r", "rg"],
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
          guide: "snc-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "211",
      name: "Park Heights Pegasus",
      cost: ["g", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "212",
      name: "Queza, Augur of Agonies",
      cost: ["1", "w", "u", "b"],
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
      number: "213",
      name: "Raffine, Scheming Seer",
      cost: ["w", "u", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-connive",
          categories: ["connive"],
        },
      ],
    },
    {
      number: "214",
      name: "Rakish Revelers",
      cost: ["2", "r", "g", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          categories: ["other"],
          cost: ["2"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "snc-citizen",
          categories: ["token"],
        },
      ],
    },
    {
      number: "215",
      name: "Rigo, Streetwise Mentor",
      cost: ["gw", "w", "wu"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-citizen",
          categories: ["creature"],
        },
        {
          guide: "snc-shield",
        },
      ],
    },
    {
      number: "216",
      name: "Riveteers Ascendancy",
      cost: ["b", "r", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "snc-casualty",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "217",
      name: "Riveteers Charm",
      cost: ["b", "r", "g"],
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
      number: "218",
      name: "Rocco, Cabaretti Caterer",
      cost: ["x", "r", "g", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "219",
      name: "Scheming Fence",
      cost: ["w", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-citizen",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "220",
      name: "Security Rhox",
      cost: ["2", "r", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-treasure",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "221",
      name: "Shattered Seraph",
      cost: ["4", "w", "u", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          categories: ["other"],
          cost: ["2"],
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
      number: "222",
      name: "Snooping Newsie",
      cost: ["u", "b"],
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
      number: "223",
      name: "Soul of Emancipation",
      cost: ["4", "g", "w", "u"],
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
      number: "224",
      name: "Spara's Adjudicators",
      cost: ["2", "g", "w", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          categories: ["other"],
          cost: ["2"],
        },
        {
          guide: "removal",
          categories: ["temporary"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "snc-citizen",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "225",
      name: "Stimulus Package",
      cost: ["2", "r", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "snc-treasure",
          categories: ["treasure", "payoff"],
        },
        {
          guide: "snc-citizen",
          categories: ["token"],
        },
      ],
    },
    {
      number: "226",
      name: "Syndicate Infiltrator",
      cost: ["2", "u", "b"],
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
      name: "Tainted Indulgence",
      cost: ["u", "b"],
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
      number: "228",
      name: "Toluz, Clever Conductor",
      cost: ["wu", "u", "ub"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-connive",
          categories: ["connive", "payoff"],
        },
      ],
    },
    {
      number: "229",
      name: "Unleash the Inferno",
      cost: ["1", "b", "r", "g"],
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
      number: "230",
      name: "Void Rend",
      cost: ["w", "u", "b"],
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
      number: "231",
      name: "Ziatora, the Incinerator",
      cost: ["3", "b", "r", "g"],
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
          guide: "snc-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "232",
      name: "Ziatora's Envoy",
      cost: ["1", "b", "r", "g"],
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
          guide: "snc-blitz",
        },
      ],
    },
    {
      number: "233",
      name: "Arc Spitter",
      cost: ["1"],
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
      number: "234",
      name: "Brass Knuckles",
      cost: ["4"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "235",
      name: "Cement Shoes",
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
      number: "236",
      name: "Chrome Cat",
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
      number: "237",
      name: "Getaway Car",
      cost: ["3"],
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
      number: "238",
      name: "Gilded Pinions",
      cost: ["2"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "snc-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "239",
      name: "Halo Scarab",
      cost: ["2"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "snc-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "240",
      name: "Luxior, Giada's Gift",
      cost: ["1"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "241",
      name: "Ominous Parcel",
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
        {
          guide: "fixing",
        },
      ],
    },
    {
      number: "242",
      name: "Paragon of Modernity",
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
      number: "243",
      name: "Quick-Draw Dagger",
      cost: ["3"],
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
      number: "244",
      name: "Scuttling Butler",
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
      number: "245",
      name: "Suspicious Bookcase",
      cost: ["2"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "246",
      name: "Unlicensed Hearse",
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
      number: "247",
      name: "Botanical Plaza",
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
      name: "Brokers Hideout",
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
      number: "249",
      name: "Cabaretti Courtyard",
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
      name: "Jetmir's Garden",
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
      name: "Maestros Theater",
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
      number: "252",
      name: "Obscura Storefront",
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
      name: "Racers' Ring",
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
      name: "Raffine's Tower",
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
      name: "Riveteers Overlook",
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
      name: "Skybridge Towers",
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
      name: "Spara's Headquarters",
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
      name: "Tramway Station",
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
      name: "Waterfront District",
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
      name: "Xander's Lounge",
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
      name: "Ziatora's Proving Ground",
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
