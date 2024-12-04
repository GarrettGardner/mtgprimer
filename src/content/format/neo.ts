import type { IFormatConfig } from "@/models";

const format: IFormatConfig = {
  code: "neo",
  name: "Kamigawa: Neon Dynasty",
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
    ninjutsu: {
      name: "Ninjutsu Guide",
      defaultGrouping: "mv",
      defaultOrdering: "color",
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
    "neo-saga": {
      name: "Mechanic: Double Faced Sagas",
      icon: "fas fa-landmark",
    },
    "neo-channel": {
      name: "Mechanic: Channel",
      icon: "fas fa-wind",
    },
    "neo-reconfigure": {
      name: "Mechanic: Reconfigure",
      icon: "fas fa-robot",
      categories: {
        reconfigure: "",
        payoff: "Payoffs",
      },
    },
    "neo-modified": {
      name: "Mechanic: Modified",
      icon: "fas fa-hat-cowboy",
      categories: {
        reconfigure: "",
        payoff: "Payoffs",
      },
    },
    "neo-ninjutsu": {
      name: "Mechanic: Ninjutsu",
      icon: "fas fa-user-ninja",
      categories: {
        ninjutsu: "",
        payoff: "Payoffs",
      },
    },
    "neo-samurai-warrior": {
      name: "Theme: Samurai/Warrior",
      icon: "fas fa-shield-alt",
      categories: {
        samurai: "Samurai Creatures",
        warrior: "Warrior Creatures",
        alone: "Attacks Alone",
      },
    },
    "neo-artifact-enchantment-creature": {
      name: "Theme: Artifact/Enchantment Creatures",
      icon: "fas fa-mug-hot",
      categories: {
        artifact: "Artifact Creatures",
        enchantment: "Enchantment Creatures",
      },
    },
    "neo-artifact-enchantment-payoff": {
      name: "Theme: Artifact/Enchantment Payoff",
      icon: "fas fa-money-bill",
      categories: {
        artifact: "Artifact Payoff",
        enchantment: "Enchantment Payoff",
        both: "Both Payoff",
      },
    },
    "neo-shrine": {
      name: "Theme: Shrines",
      icon: "fas fa-place-of-worship",
    },
    "neo-vehicle": {
      name: "Theme: Vehicles",
      icon: "fas fa-car",
      categories: {
        vehicle: "",
        payoff: "Payoff",
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
      categories: {},
      guides: [
        "neo-saga",
        "neo-channel",
        "neo-reconfigure",
        "neo-modified",
        "neo-ninjutsu",
        "neo-samurai-warrior",
        "neo-artifact-enchantment-creature",
        "neo-artifact-enchantment-payoff",
        "neo-shrine",
        "neo-vehicle",
      ],
    },
  },
  cards: [
    {
      number: "1",
      name: "Ancestral Katana",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["alone"],
        },
      ],
    },
    {
      number: "2",
      name: "Ao, the Dawn Sky",
      cost: ["3", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "3",
      name: "Banishing Slash",
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
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai"],
        },
      ],
    },
    {
      number: "4",
      name: "Befriending the Moths // Imperial Moth",
      cost: ["3", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-saga",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "5",
      name: "Blade-Blizzard Kitsune",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ninjutsu",
          cost: ["3", "w"],
        },
        {
          guide: "neo-ninjutsu",
          categories: ["ninjutsu"],
        },
      ],
    },
    {
      number: "6",
      name: "Born to Drive",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["2", "w"],
          categories: ["board"],
        },
        {
          guide: "neo-channel",
        },
        {
          guide: "neo-vehicle",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "7",
      name: "Brilliant Restoration",
      cost: ["3", "w", "w", "w", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "neo-artifact-enchantment-payoff",
          categories: ["both"],
        },
      ],
    },
    {
      number: "8",
      name: "Cloudsteel Kirin",
      cost: ["2", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-reconfigure",
          categories: ["reconfigure"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "9",
      name: "Dragonfly Suit",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "neo-vehicle",
          categories: ["vehicle"],
        },
      ],
    },
    {
      number: "10",
      name: "Eiganjo Exemplar",
      cost: ["w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai", "alone"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "11",
      name: "Era of Enlightenment // Hand of Enlightenment",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "neo-saga",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "12",
      name: "The Fall of Lord Konda // Fragment of Konda",
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
        {
          guide: "neo-saga",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "13",
      name: "Farewell",
      cost: ["4", "w", "w"],
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
        {
          guide: "disenchant",
        },
      ],
    },
    {
      number: "14",
      name: "Go-Shintai of Shared Purpose",
      cost: ["3", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
        {
          guide: "neo-shrine",
        },
      ],
    },
    {
      number: "15",
      name: "Golden-Tail Disciple",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "16",
      name: "Hotshot Mechanic",
      cost: ["w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
        {
          guide: "neo-vehicle",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "17",
      name: "Imperial Oath",
      cost: ["5", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai"],
        },
      ],
    },
    {
      number: "18",
      name: "Imperial Recovery Unit",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "neo-vehicle",
          categories: ["vehicle"],
        },
      ],
    },
    {
      number: "19",
      name: "Imperial Subduer",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai", "alone"],
        },
      ],
    },
    {
      number: "20",
      name: "Intercessor's Arrest",
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
      number: "21",
      name: "Invoke Justice",
      cost: ["1", "w", "w", "w", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "22",
      name: "Kitsune Ace",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-vehicle",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "23",
      name: "Kyodai, Soul of Kamigawa",
      cost: ["3", "w"],
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
      number: "24",
      name: "Light the Way",
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
          guide: "bounce",
        },
      ],
    },
    {
      number: "25",
      name: "Light-Paws, Emperor's Voice",
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
      name: "Lion Sash",
      cost: ["1", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-reconfigure",
          categories: ["reconfigure"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "27",
      name: "Lucky Offering",
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
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "28",
      name: "March of Otherworldly Light",
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
      number: "29",
      name: "Michiko's Reign of Truth // Portrait of Michiko",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-saga",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
        {
          guide: "neo-artifact-enchantment-payoff",
          categories: ["both"],
        },
      ],
    },
    {
      number: "30",
      name: "Mothrider Patrol",
      cost: ["w"],
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
        {
          guide: "neo-samurai-warrior",
          categories: ["warrior"],
        },
      ],
    },
    {
      number: "31",
      name: "Norika Yamazaki, the Poet",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai", "alone"],
        },
        {
          guide: "neo-artifact-enchantment-payoff",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "32",
      name: "Regent's Authority",
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
          guide: "neo-artifact-enchantment-payoff",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "33",
      name: "Repel the Vile",
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
      number: "34",
      name: "The Restoration of Eiganjo // Architect of Restoration",
      cost: ["2", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-saga",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "35",
      name: "Selfless Samurai",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai", "alone"],
        },
      ],
    },
    {
      number: "36",
      name: "Seven-Tail Mentor",
      cost: ["3", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai"],
        },
      ],
    },
    {
      number: "37",
      name: "Sky-Blessed Samurai",
      cost: ["6", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
        {
          guide: "neo-artifact-enchantment-payoff",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "38",
      name: "Spirited Companion",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "39",
      name: "Sunblade Samurai",
      cost: ["4", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          cost: ["2"],
          categories: ["other"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "fixing",
          categories: ["fixing"],
        },
        {
          guide: "neo-channel",
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "40",
      name: "Touch the Spirit Realm",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["1", "w"],
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
          guide: "neo-channel",
        },
      ],
    },
    {
      number: "41",
      name: "Wanderer's Intervention",
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
      number: "42",
      name: "The Wandering Emperor",
      cost: ["2", "w", "w"],
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
          guide: "lifegain",
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "43",
      name: "When We Were Young",
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
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "neo-artifact-enchantment-payoff",
          categories: ["both"],
        },
      ],
    },
    {
      number: "44",
      name: "Acquisition Octopus",
      cost: ["2", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-reconfigure",
          categories: ["reconfigure"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "45",
      name: "Anchor to Reality",
      cost: ["2", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "neo-vehicle",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "46",
      name: "Armguard Familiar",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-reconfigure",
          categories: ["reconfigure"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "47",
      name: "Awakened Awareness",
      cost: ["x", "u", "u"],
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
      ],
    },
    {
      number: "48",
      name: "Behold the Unspeakable // Vision of the Unspeakable",
      cost: ["3", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-saga",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "49",
      name: "Covert Technician",
      cost: ["2", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ninjutsu",
          cost: ["1", "u"],
        },
        {
          guide: "neo-ninjutsu",
          categories: ["ninjutsu"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "50",
      name: "Discover the Impossible",
      cost: ["2", "u"],
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
      number: "51",
      name: "Disruption Protocol",
      cost: ["u", "u"],
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
      number: "52",
      name: "Essence Capture",
      cost: ["u", "u"],
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
      number: "53",
      name: "Futurist Operative",
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
      number: "54",
      name: "Futurist Sentinel",
      cost: ["3", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "neo-vehicle",
          categories: ["vehicle"],
        },
      ],
    },
    {
      number: "55",
      name: "Go-Shintai of Lost Wisdom",
      cost: ["1", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mill",
          categories: ["both"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
        {
          guide: "neo-shrine",
        },
      ],
    },
    {
      number: "56",
      name: "Guardians of Oboro",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-modified",
          categories: ["payoff"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai"],
        },
      ],
    },
    {
      number: "57",
      name: "Inventive Iteration // Living Breakthrough",
      cost: ["3", "u"],
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
        {
          guide: "neo-saga",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "58",
      name: "Invoke the Winds",
      cost: ["1", "u", "u", "u", "u"],
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
      ],
    },
    {
      number: "59",
      name: "Jin-Gitaxias, Progress Tyrant",
      cost: ["5", "u", "u"],
      rarity: "m",
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
      number: "60",
      name: "Kairi, the Swirling Sky",
      cost: ["4", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "bounce",
        },
        {
          guide: "mill",
          categories: ["self"],
        },
      ],
    },
    {
      number: "61",
      name: "March of Swirling Mist",
      cost: ["x", "u"],
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
          categories: ["temporary"],
        },
      ],
    },
    {
      number: "62",
      name: "Mindlink Mech",
      cost: ["2", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "neo-vehicle",
          categories: ["vehicle"],
        },
      ],
    },
    {
      number: "63",
      name: "Mirrorshell Crab",
      cost: ["5", "u", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          cost: ["2", "u"],
          categories: ["counterspell"],
        },
        {
          guide: "counterspell",
        },
        {
          guide: "neo-channel",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "64",
      name: "Mnemonic Sphere",
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
          categories: ["other"],
        },
        {
          guide: "neo-channel",
        },
      ],
    },
    {
      number: "65",
      name: "Mobilizer Mech",
      cost: ["1", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "neo-vehicle",
          categories: ["vehicle", "payoff"],
        },
      ],
    },
    {
      number: "66",
      name: "The Modern Age // Vector Glider",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-saga",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "67",
      name: "Moon-Circuit Hacker",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ninjutsu",
          cost: ["u"],
        },
        {
          guide: "neo-ninjutsu",
          categories: ["ninjutsu"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "68",
      name: "Moonfolk Puzzlemaker",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "69",
      name: "Moonsnare Prototype",
      cost: ["u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["4", "u"],
          categories: ["board"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "ramp",
        },
        {
          guide: "neo-channel",
        },
      ],
    },
    {
      number: "70",
      name: "Moonsnare Specialist",
      cost: ["3", "u"],
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
          guide: "ninjutsu",
          cost: ["2", "u"],
        },
        {
          guide: "neo-ninjutsu",
          categories: ["ninjutsu"],
        },
      ],
    },
    {
      number: "71",
      name: "Network Disruptor",
      cost: ["u"],
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
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "72",
      name: "Planar Incision",
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
          categories: ["temporary"],
        },
      ],
    },
    {
      number: "73",
      name: "Prosperous Thief",
      cost: ["2", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "fixing",
          categories: ["extra"],
        },
        {
          guide: "ninjutsu",
          cost: ["1", "u"],
        },
        {
          guide: "neo-ninjutsu",
          categories: ["ninjutsu"],
        },
      ],
    },
    {
      number: "74",
      name: "The Reality Chip",
      cost: ["1", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-reconfigure",
          categories: ["reconfigure"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "75",
      name: "Reality Heist",
      cost: ["5", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["u", "u"],
          categories: ["board"],
        },
      ],
    },
    {
      number: "76",
      name: "Replication Specialist",
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
      number: "77",
      name: "Saiba Trespassers",
      cost: ["4", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          cost: ["3", "u"],
          categories: ["board"],
        },
        {
          guide: "removal",
          categories: ["temporary"],
        },
        {
          guide: "neo-channel",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "78",
      name: "Short Circuit",
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
      number: "79",
      name: "Skyswimmer Koi",
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
      number: "80",
      name: "Spell Pierce",
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
      number: "81",
      name: "Suit Up",
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
      number: "82",
      name: "Tameshi, Reality Architect",
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
      number: "83",
      name: "Tamiyo's Compleation",
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
      number: "84",
      name: "Tezzeret, Betrayer of Flesh",
      cost: ["2", "u", "u"],
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
      name: "Thirst for Knowledge",
      cost: ["2", "u"],
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
      number: "86",
      name: "Thousand-Faced Shadow",
      cost: ["u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ninjutsu",
          cost: ["2", "u", "u"],
        },
        {
          guide: "neo-ninjutsu",
          categories: ["ninjutsu"],
        },
      ],
    },
    {
      number: "87",
      name: "Assassin's Ink",
      cost: ["2", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["b", "b"],
          categories: ["board"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "neo-artifact-enchantment-payoff",
          categories: ["both"],
        },
      ],
    },
    {
      number: "88",
      name: "Biting-Palm Ninja",
      cost: ["2", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "discard",
        },
        {
          guide: "ninjutsu",
          cost: ["2", "b"],
        },
        {
          guide: "neo-ninjutsu",
          categories: ["ninjutsu"],
        },
      ],
    },
    {
      number: "89",
      name: "Blade of the Oni",
      cost: ["1", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-reconfigure",
          categories: ["reconfigure"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "90",
      name: "Chainflail Centipede",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-reconfigure",
          categories: ["reconfigure"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "91",
      name: "Clawing Torment",
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
        {
          guide: "ping",
        },
      ],
    },
    {
      number: "92",
      name: "Debt to the Kami",
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
      number: "93",
      name: "Dockside Chef",
      cost: ["b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "94",
      name: "Dokuchi Shadow-Walker",
      cost: ["4", "b", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ninjutsu",
          cost: ["3", "b"],
        },
        {
          guide: "neo-ninjutsu",
          categories: ["ninjutsu"],
        },
      ],
    },
    {
      number: "95",
      name: "Dokuchi Silencer",
      cost: ["1", "b"],
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
          guide: "ninjutsu",
          cost: ["1", "b"],
        },
        {
          guide: "neo-ninjutsu",
          categories: ["ninjutsu"],
        },
      ],
    },
    {
      number: "96",
      name: "Enormous Energy Blade",
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
      number: "97",
      name: "Go-Shintai of Hidden Cruelty",
      cost: ["3", "b"],
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
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
        {
          guide: "neo-shrine",
        },
      ],
    },
    {
      number: "98",
      name: "Gravelighter",
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
      ],
    },
    {
      number: "99",
      name: "Hidetsugu, Devouring Chaos",
      cost: ["3", "b"],
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
      number: "100",
      name: "Inkrise Infiltrator",
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
      name: "Invoke Despair",
      cost: ["1", "b", "b", "b", "b"],
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
      number: "102",
      name: "Junji, the Midnight Sky",
      cost: ["3", "b", "b"],
      rarity: "m",
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
      number: "103",
      name: "Kaito's Pursuit",
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
      number: "104",
      name: "Kami of Restless Shadows",
      cost: ["4", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "105",
      name: "Kami of Terrible Secrets",
      cost: ["3", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "neo-artifact-enchantment-payoff",
          categories: ["both"],
        },
      ],
    },
    {
      number: "106",
      name: "Leech Gauntlet",
      cost: ["1", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "neo-reconfigure",
          categories: ["reconfigure"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "107",
      name: "Lethal Exploit",
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
          guide: "neo-modified",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "108",
      name: "Life of Toshiro Umezawa // Memory of Toshiro",
      cost: ["1", "b"],
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
          categories: ["lifegain"],
        },
        {
          guide: "ramp",
        },
        {
          guide: "ping",
        },
        {
          guide: "neo-saga",
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "109",
      name: "The Long Reach of Night // Animus of Night's Reach",
      cost: ["3", "b"],
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
        {
          guide: "neo-saga",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "110",
      name: "Malicious Malfunction",
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
      number: "111",
      name: "March of Wretched Sorrow",
      cost: ["x", "b"],
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
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "112",
      name: "Mukotai Ambusher",
      cost: ["3", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "ninjutsu",
          cost: ["1", "b"],
        },
        {
          guide: "neo-ninjutsu",
          categories: ["ninjutsu"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "113",
      name: "Mukotai Soulripper",
      cost: ["1", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "neo-vehicle",
          categories: ["vehicle"],
        },
      ],
    },
    {
      number: "114",
      name: "Nashi, Moon Sage's Scion",
      cost: ["1", "b", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ninjutsu",
          cost: ["3", "b"],
        },
        {
          guide: "neo-ninjutsu",
          categories: ["ninjutsu"],
        },
      ],
    },
    {
      number: "115",
      name: "Nezumi Bladeblesser",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai"],
        },
        {
          guide: "neo-artifact-enchantment-payoff",
          categories: ["both"],
        },
      ],
    },
    {
      number: "116",
      name: "Nezumi Prowler",
      cost: ["1", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "ninjutsu",
          cost: ["1", "g"],
        },
        {
          guide: "neo-ninjutsu",
          categories: ["ninjutsu"],
        },
      ],
    },
    {
      number: "117",
      name: "Okiba Reckoner Raid // Nezumi Road Captain",
      cost: ["b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "neo-saga",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
        {
          guide: "neo-vehicle",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "118",
      name: "Okiba Salvage",
      cost: ["4", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "neo-artifact-enchantment-payoff",
          categories: ["both"],
        },
      ],
    },
    {
      number: "119",
      name: "Reckoner Shakedown",
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
      number: "120",
      name: "Reckoner's Bargain",
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
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "121",
      name: "Return to Action",
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
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "122",
      name: "Soul Transfer",
      cost: ["1", "b", "b"],
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
          guide: "neo-artifact-enchantment-payoff",
          categories: ["both"],
        },
      ],
    },
    {
      number: "123",
      name: "Tatsunari, Toad Rider",
      cost: ["2", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "neo-artifact-enchantment-payoff",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "124",
      name: "Tribute to Horobi // Echo of Death's Wail",
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
          guide: "mindcontrol",
        },
        {
          guide: "neo-saga",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "125",
      name: "Twisted Embrace",
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
      number: "126",
      name: "Undercity Scrounger",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "fixing",
          categories: ["extra"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "127",
      name: "Unforgiving One",
      cost: ["2", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-modified",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "128",
      name: "Virus Beetle",
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
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "129",
      name: "You Are Already Dead",
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
      number: "130",
      name: "Akki Ember-Keeper",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-modified",
          categories: ["payoff"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["warrior", "alone"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "131",
      name: "Akki Ronin",
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
      number: "132",
      name: "Akki War Paint",
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
      number: "133",
      name: "Ambitious Assault",
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
        {
          guide: "neo-modified",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "134",
      name: "Atsushi, the Blazing Sky",
      cost: ["2", "r", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "fixing",
          categories: ["extra"],
        },
      ],
    },
    {
      number: "135",
      name: "Bronzeplate Boar",
      cost: ["2", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-reconfigure",
          categories: ["reconfigure"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "136",
      name: "Crackling Emergence",
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
      number: "137",
      name: "Dragonspark Reactor",
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
      number: "138",
      name: "Experimental Synthesizer",
      cost: ["r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai"],
        },
      ],
    },
    {
      number: "139",
      name: "Explosive Entry",
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
          guide: "disenchant",
        },
      ],
    },
    {
      number: "140",
      name: "Explosive Singularity",
      cost: ["8", "r", "r"],
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
      number: "141",
      name: "Fable of the Mirror-Breaker // Reflection of Kiki-Jiki",
      cost: ["2", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "fixing",
          categories: ["extra"],
        },
        {
          guide: "neo-saga",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "142",
      name: "Flame Discharge",
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
        {
          guide: "neo-modified",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "143",
      name: "Gift of Wrath",
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
      number: "144",
      name: "Go-Shintai of Ancient Wars",
      cost: ["2", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
        {
          guide: "neo-shrine",
        },
      ],
    },
    {
      number: "145",
      name: "Goro-Goro, Disciple of Ryusei",
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
          guide: "neo-modified",
          categories: ["payoff"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai"],
        },
      ],
    },
    {
      number: "146",
      name: "Heiko Yamazaki, the General",
      cost: ["3", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai", "alone"],
        },
      ],
    },
    {
      number: "147",
      name: "Invoke Calamity",
      cost: ["1", "r", "r", "r", "r"],
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
      number: "148",
      name: "Ironhoof Boar",
      cost: ["5", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          cost: ["1", "r"],
          categories: ["board"],
        },
        {
          guide: "haste",
        },
        {
          guide: "neo-channel",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "149",
      name: "Kami of Industry",
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
      number: "150",
      name: "Kami's Flare",
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
          guide: "neo-modified",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "151",
      name: "Kindled Fury",
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
      number: "152",
      name: "Kumano Faces Kakkazan // Etching of Kumano",
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
          guide: "neo-saga",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "153",
      name: "Lizard Blades",
      cost: ["1", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-reconfigure",
          categories: ["reconfigure"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "154",
      name: "March of Reckless Joy",
      cost: ["x", "r"],
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
      number: "155",
      name: "Ogre-Head Helm",
      cost: ["1", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-reconfigure",
          categories: ["reconfigure"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "156",
      name: "Peerless Samurai",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai", "alone"],
        },
      ],
    },
    {
      number: "157",
      name: "Rabbit Battery",
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
          guide: "neo-reconfigure",
          categories: ["reconfigure"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "158",
      name: "Reinforced Ronin",
      cost: ["r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          cost: ["1", "r"],
          categories: ["other"],
        },
        {
          guide: "haste",
        },
        {
          guide: "neo-channel",
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "159",
      name: "Scrap Welder",
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
      number: "160",
      name: "Scrapyard Steelbreaker",
      cost: ["3", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["warrior"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "161",
      name: "Seismic Wave",
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
          categories: ["removal", "boardwipe"],
        },
        {
          guide: "boardwipe",
          categories: ["conditional"],
        },
        {
          guide: "ping",
        },
      ],
    },
    {
      number: "162",
      name: "The Shattered States Era // Nameless Conqueror",
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
        {
          guide: "masspump",
        },
        {
          guide: "threaten",
        },
        {
          guide: "neo-saga",
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "163",
      name: "Simian Sling",
      cost: ["r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-reconfigure",
          categories: ["reconfigure"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "164",
      name: "Sokenzan Smelter",
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
      ],
    },
    {
      number: "165",
      name: "Tempered in Solitude",
      cost: ["1", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["alone"],
        },
      ],
    },
    {
      number: "166",
      name: "Thundering Raiju",
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
        {
          guide: "neo-modified",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "167",
      name: "Towashi Songshaper",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "168",
      name: "Twinshot Sniper",
      cost: ["3", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          cost: ["1", "r"],
          categories: ["board"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "neo-channel",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "169",
      name: "Unstoppable Ogre",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["warrior"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "170",
      name: "Upriser Renegade",
      cost: ["1", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-modified",
          categories: ["payoff"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai"],
        },
      ],
    },
    {
      number: "171",
      name: "Voltage Surge",
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
      number: "172",
      name: "Azusa's Many Journeys // Likeness of the Seeker",
      cost: ["1", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "neo-saga",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "173",
      name: "Bamboo Grove Archer",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          cost: ["4", "g"],
          categories: ["board"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "neo-channel",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "174",
      name: "Bearer of Memory",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
        {
          guide: "neo-artifact-enchantment-payoff",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "175",
      name: "Blossom Prancer",
      cost: ["3", "g", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "176",
      name: "Boon of Boseiju",
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
      ],
    },
    {
      number: "177",
      name: "Boseiju Reaches Skyward // Branch of Boseiju",
      cost: ["3", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-saga",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "178",
      name: "Careful Cultivation",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["1", "g"],
          categories: ["board"],
        },
        {
          guide: "ramp",
        },
        {
          guide: "neo-channel",
        },
      ],
    },
    {
      number: "179",
      name: "Coiling Stalker",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ninjutsu",
          cost: ["1", "g"],
        },
        {
          guide: "neo-ninjutsu",
          categories: ["ninjutsu"],
        },
      ],
    },
    {
      number: "180",
      name: "Commune with Spirits",
      cost: ["g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "neo-artifact-enchantment-payoff",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "181",
      name: "The Dragon-Kami Reborn // Dragon-Kami's Egg",
      cost: ["2", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "neo-saga",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "182",
      name: "Fade into Antiquity",
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
        {
          guide: "disenchant",
        },
      ],
    },
    {
      number: "183",
      name: "Fang of Shigeki",
      cost: ["g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "184",
      name: "Favor of Jukai",
      cost: ["3", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["1", "g"],
          categories: ["board"],
        },
        {
          guide: "neo-channel",
        },
      ],
    },
    {
      number: "185",
      name: "Generous Visitor",
      cost: ["g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-artifact-enchantment-payoff",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "186",
      name: "Geothermal Kami",
      cost: ["3", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "neo-artifact-enchantment-payoff",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "187",
      name: "Go-Shintai of Boundless Vigor",
      cost: ["1", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
        {
          guide: "neo-shrine",
        },
      ],
    },
    {
      number: "188",
      name: "Grafted Growth",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "fixing",
          categories: ["fixing"],
        },
        {
          guide: "ramp",
        },
      ],
    },
    {
      number: "189",
      name: "Greater Tanuki",
      cost: ["4", "g", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          cost: ["2", "g"],
          categories: ["other"],
        },
        {
          guide: "fixing",
          categories: ["fixing"],
        },
        {
          guide: "ramp",
        },
        {
          guide: "neo-channel",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "190",
      name: "Harmonious Emergence",
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
      number: "191",
      name: "Heir of the Ancient Fang",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-modified",
          categories: ["payoff"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai"],
        },
      ],
    },
    {
      number: "192",
      name: "Historian's Wisdom",
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
      number: "193",
      name: "Invoke the Ancients",
      cost: ["1", "g", "g", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "194",
      name: "Jugan Defends the Temple // Remnant of the Rising Star",
      cost: ["2", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ramp",
        },
        {
          guide: "neo-saga",
        },
        {
          guide: "neo-modified",
          categories: ["payoff"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "195",
      name: "Jukai Preserver",
      cost: ["3", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          cost: ["2", "g"],
          categories: ["board"],
        },
        {
          guide: "neo-channel",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "196",
      name: "Jukai Trainee",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai"],
        },
      ],
    },
    {
      number: "197",
      name: "Kami of Transience",
      cost: ["1", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-artifact-enchantment-payoff",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "198",
      name: "Kappa Tech-Wrecker",
      cost: ["1", "g"],
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
          guide: "ninjutsu",
          cost: ["1", "g"],
        },
        {
          guide: "neo-ninjutsu",
          categories: ["ninjutsu"],
        },
      ],
    },
    {
      number: "199",
      name: "Kodama of the West Tree",
      cost: ["2", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "fixing",
          categories: ["extra"],
        },
        {
          guide: "ramp",
        },
        {
          guide: "neo-modified",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "200",
      name: "Kura, the Boundless Sky",
      cost: ["3", "g", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "fixing",
          categories: ["extra"],
        },
      ],
    },
    {
      number: "201",
      name: "March of Burgeoning Life",
      cost: ["x", "g"],
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
      number: "202",
      name: "Master's Rebuke",
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
      number: "203",
      name: "Orochi Merge-Keeper",
      cost: ["1", "g"],
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
          guide: "neo-modified",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "204",
      name: "Roaring Earth",
      cost: ["1", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["x", "g", "g"],
          categories: ["board"],
        },
        {
          guide: "haste",
        },
        {
          guide: "neo-channel",
        },
      ],
    },
    {
      number: "205",
      name: "Season of Renewal",
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
      ],
    },
    {
      number: "206",
      name: "Shigeki, Jukai Visionary",
      cost: ["1", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          cost: ["x", "x", "g", "g"],
          categories: ["other"],
        },
        {
          guide: "neo-channel",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "207",
      name: "Spinning Wheel Kick",
      cost: ["x", "x", "g", "g"],
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
      number: "208",
      name: "Spring-Leaf Avenger",
      cost: ["3", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ninjutsu",
          cost: ["3", "g"],
        },
        {
          guide: "neo-ninjutsu",
          categories: ["ninjutsu"],
        },
      ],
    },
    {
      number: "209",
      name: "Storyweave",
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
      ],
    },
    {
      number: "210",
      name: "Tales of Master Seshiro // Seshiro's Living Legacy",
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
          guide: "neo-saga",
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["warrior"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "211",
      name: "Tamiyo's Safekeeping",
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
          guide: "lifegain",
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "212",
      name: "Teachings of the Kirin // Kirin-Touched Orochi",
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
        {
          guide: "neo-saga",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "213",
      name: "Weaver of Harmony",
      cost: ["1", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
        {
          guide: "neo-artifact-enchantment-payoff",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "214",
      name: "Webspinner Cuff",
      cost: ["2", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-reconfigure",
          categories: ["reconfigure"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "215",
      name: "Asari Captain",
      cost: ["3", "r", "w"],
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
          guide: "neo-samurai-warrior",
          categories: ["samurai", "alone"],
        },
      ],
    },
    {
      number: "216",
      name: "Colossal Skyturtle",
      cost: ["4", "g", "g", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          cost: ["1", "u"],
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
          guide: "neo-channel",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "217",
      name: "Eiganjo Uprising",
      cost: ["x", "r", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "haste",
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai"],
        },
      ],
    },
    {
      number: "218",
      name: "Enthusiastic Mechanaut",
      cost: ["u", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
        {
          guide: "neo-artifact-enchantment-payoff",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "219",
      name: "Gloomshrieker",
      cost: ["1", "b", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "220",
      name: "Greasefang, Okiba Boss",
      cost: ["1", "w", "b"],
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
          guide: "neo-vehicle",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "221",
      name: "Hidetsugu Consumes All // Vessel of the All-Consuming",
      cost: ["1", "b", "r"],
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
          categories: ["conditional"],
        },
        {
          guide: "neo-saga",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "222",
      name: "Hinata, Dawn-Crowned",
      cost: ["1", "u", "r", "w"],
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
      name: "Invigorating Hot Spring",
      cost: ["1", "r", "g"],
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
          guide: "neo-modified",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "224",
      name: "Isshin, Two Heavens as One",
      cost: ["r", "w", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai"],
        },
      ],
    },
    {
      number: "225",
      name: "Jukai Naturalist",
      cost: ["g", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
        {
          guide: "neo-artifact-enchantment-payoff",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "226",
      name: "Kaito Shizuki",
      cost: ["1", "u", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "227",
      name: "The Kami War // O-Kagachi Made Manifest",
      cost: ["1", "w", "u", "b", "r", "g"],
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
          guide: "neo-saga",
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "228",
      name: "Kotose, the Silent Spider",
      cost: ["3", "u", "b"],
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
      name: "Naomi, Pillar of Order",
      cost: ["3", "w", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai"],
        },
        {
          guide: "neo-artifact-enchantment-payoff",
          categories: ["both"],
        },
      ],
    },
    {
      number: "230",
      name: "Oni-Cult Anvil",
      cost: ["b", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "231",
      name: "Prodigy's Prototype",
      cost: ["1", "w", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "neo-vehicle",
          categories: ["vehicle", "payoff"],
        },
      ],
    },
    {
      number: "232",
      name: "Raiyuu, Storm's Edge",
      cost: ["2", "r", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-samurai-warrior",
          categories: ["samurai", "alone"],
        },
      ],
    },
    {
      number: "233",
      name: "Risona, Asari Commander",
      cost: ["1", "r", "w"],
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
          guide: "neo-samurai-warrior",
          categories: ["samurai"],
        },
      ],
    },
    {
      number: "234",
      name: "Satoru Umezawa",
      cost: ["1", "u", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-ninjutsu",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "235",
      name: "Satsuki, the Living Lore",
      cost: ["g", "w"],
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
          guide: "neo-artifact-enchantment-payoff",
          categories: ["enchantment"],
        },
      ],
    },
    {
      number: "236",
      name: "Silver-Fur Master",
      cost: ["u", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ninjutsu",
          cost: ["u", "b"],
        },
        {
          guide: "neo-ninjutsu",
          categories: ["ninjutsu", "payoff"],
        },
      ],
    },
    {
      number: "237",
      name: "Spirit-Sister's Call",
      cost: ["3", "w", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "238",
      name: "Tamiyo, Compleated Sage",
      cost: ["2", "g", "gup", "u"],
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
      ],
    },
    {
      number: "239",
      name: "Automated Artificer",
      cost: ["2"],
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
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "240",
      name: "Bronze Cudgels",
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
      number: "241",
      name: "Brute Suit",
      cost: ["3"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "neo-vehicle",
          categories: ["vehicle"],
        },
      ],
    },
    {
      number: "242",
      name: "Circuit Mender",
      cost: ["3"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "243",
      name: "Containment Construct",
      cost: ["2"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "244",
      name: "Dramatist's Puppet",
      cost: ["4"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "245",
      name: "Eater of Virtue",
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
      number: "246",
      name: "Ecologist's Terrarium",
      cost: ["2"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "fixing",
          categories: ["fixing"],
        },
      ],
    },
    {
      number: "247",
      name: "High-Speed Hoverbike",
      cost: ["2"],
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
          categories: ["temporary"],
        },
        {
          guide: "neo-vehicle",
          categories: ["vehicle"],
        },
      ],
    },
    {
      number: "248",
      name: "Iron Apprentice",
      cost: ["1"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "249",
      name: "Mechtitan Core",
      cost: ["2"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "neo-vehicle",
          categories: ["vehicle"],
        },
      ],
    },
    {
      number: "250",
      name: "Mirror Box",
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
      name: "Network Terminal",
      cost: ["3"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "fixing",
          categories: ["fixing"],
        },
        {
          guide: "ramp",
        },
      ],
    },
    {
      number: "252",
      name: "Ninja's Kunai",
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
      number: "253",
      name: "Papercraft Decoy",
      cost: ["2"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "254",
      name: "Patchwork Automaton",
      cost: ["2"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "255",
      name: "Reckoner Bankbuster",
      cost: ["2"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "fixing",
          categories: ["extra"],
        },
        {
          guide: "neo-vehicle",
          categories: ["vehicle", "payoff"],
        },
      ],
    },
    {
      number: "256",
      name: "Reito Sentinel",
      cost: ["3"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mill",
          categories: ["both"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "257",
      name: "Runaway Trash-Bot",
      cost: ["3"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
        {
          guide: "neo-artifact-enchantment-payoff",
          categories: ["both"],
        },
      ],
    },
    {
      number: "258",
      name: "Searchlight Companion",
      cost: ["3"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "259",
      name: "Shrine Steward",
      cost: ["5"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
        {
          guide: "neo-shrine",
        },
      ],
    },
    {
      number: "260",
      name: "Surgehacker Mech",
      cost: ["4"],
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
          guide: "neo-vehicle",
          categories: ["vehicle", "payoff"],
        },
      ],
    },
    {
      number: "261",
      name: "Thundersteel Colossus",
      cost: ["7"],
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
          guide: "neo-vehicle",
          categories: ["vehicle"],
        },
      ],
    },
    {
      number: "262",
      name: "Towashi Guide-Bot",
      cost: ["4"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-modified",
          categories: ["payoff"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "263",
      name: "Walking Skyscraper",
      cost: ["8"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "neo-modified",
          categories: ["payoff"],
        },
        {
          guide: "neo-artifact-enchantment-creature",
          categories: ["artifact"],
        },
      ],
    },
    {
      number: "264",
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
          categories: ["lifegain"],
        },
        {
          guide: "fixing",
          categories: ["fixing"],
        },
      ],
    },
    {
      number: "265",
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
          categories: ["lifegain"],
        },
        {
          guide: "fixing",
          categories: ["fixing"],
        },
      ],
    },
    {
      number: "266",
      name: "Boseiju, Who Endures",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "instants",
          cost: ["g"],
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
          guide: "neo-channel",
        },
      ],
    },
    {
      number: "267",
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
          categories: ["lifegain"],
        },
        {
          guide: "fixing",
          categories: ["fixing"],
        },
      ],
    },
    {
      number: "268",
      name: "Eiganjo, Seat of the Empire",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
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
          guide: "neo-channel",
        },
      ],
    },
    {
      number: "269",
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
          categories: ["lifegain"],
        },
        {
          guide: "fixing",
          categories: ["fixing"],
        },
      ],
    },
    {
      number: "270",
      name: "Mech Hangar",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "fixing",
          categories: ["fixing"],
        },
        {
          guide: "neo-vehicle",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "271",
      name: "Otawara, Soaring City",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "instants",
          cost: ["u"],
          categories: ["board"],
        },
        {
          guide: "bounce",
        },
        {
          guide: "neo-channel",
        },
      ],
    },
    {
      number: "272",
      name: "Roadside Reliquary",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "neo-artifact-enchantment-payoff",
          categories: ["both"],
        },
      ],
    },
    {
      number: "273",
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
          categories: ["lifegain"],
        },
        {
          guide: "fixing",
          categories: ["fixing"],
        },
      ],
    },
    {
      number: "274",
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
          categories: ["lifegain"],
        },
        {
          guide: "fixing",
          categories: ["fixing"],
        },
      ],
    },
    {
      number: "275",
      name: "Secluded Courtyard",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "fixing",
          categories: ["fixing"],
        },
      ],
    },
    {
      number: "276",
      name: "Sokenzan, Crucible of Defiance",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "instants",
          cost: ["r"],
          categories: ["board"],
        },
        {
          guide: "haste",
        },
        {
          guide: "neo-channel",
        },
      ],
    },
    {
      number: "277",
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
          categories: ["lifegain"],
        },
        {
          guide: "fixing",
          categories: ["fixing"],
        },
      ],
    },
    {
      number: "278",
      name: "Takenuma, Abandoned Mire",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "instants",
          cost: ["b"],
          categories: ["board"],
        },
        {
          guide: "neo-channel",
        },
        {
          guide: "mill",
          categories: ["self"],
        },
      ],
    },
    {
      number: "279",
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
          categories: ["lifegain"],
        },
        {
          guide: "fixing",
          categories: ["fixing"],
        },
      ],
    },
    {
      number: "280",
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
          categories: ["lifegain"],
        },
        {
          guide: "fixing",
          categories: ["fixing"],
        },
      ],
    },
    {
      number: "281",
      name: "Uncharted Haven",
      cost: [],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "fixing",
          categories: ["fixing"],
        },
      ],
    },
    {
      number: "282",
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
          categories: ["lifegain"],
        },
        {
          guide: "fixing",
          categories: ["fixing"],
        },
      ],
    },
  ],
};

export default format;
