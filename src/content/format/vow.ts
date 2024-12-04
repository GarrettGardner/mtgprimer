import type { IFormatConfig } from "@/models";

const format: IFormatConfig = {
  code: "vow",
  name: "Innistrad: Crimson Vow",
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
    "vow-dfc": {
      name: "Mechanic: Double Faced Cards",
      icon: "fas fa-history",
    },
    "vow-day-night": {
      name: "Mechanic: Day/Night",
      icon: "fas fa-cloud-moon",
      categories: {
        "daybound-nightbound": "Daybound/Nightbound",
        other: "Other Day/Night Cards",
      },
    },
    "vow-disturb": {
      name: "Mechanic: Disturb",
      icon: "fas fa-ghost",
      categories: {
        disturb: "Disturb",
        payoff: "Payoffs/Similar Cards",
        hate: "Hate Cards",
      },
    },
    "vow-training": {
      name: "Mechanic: Training",
      icon: "fas fa-dumbbell",
    },
    "vow-blood": {
      name: "Mechanic: Blood Tokens",
      icon: "fas fa-tint",
      categories: {
        token: "Blood Token Generators",
        payoff: "Blood Token Payoffs",
      },
    },
    "vow-exploit": {
      name: "Mechanic: Exploit",
      icon: "fas fa-skull-crossbones",
      categories: {
        exploit: "Exploit Cards",
        enabler: "Exploit Enablers",
      },
    },
    "vow-vampire": {
      name: "Theme: Vampire Tribal",
      icon: "fas fa-wine-bottle",
      categories: {
        vampire: "All Vampires",
        payoff: "Vampire Payoffs",
        hate: "Vampire Hate Cards",
      },
    },
    "vow-human": {
      name: "Theme: Human Tribal",
      icon: "fas fa-user",
      categories: {
        human: "All Humans",
        payoff: "Human Payoffs",
        hate: "Human Hate Cards",
      },
    },
    "vow-zombie": {
      name: "Theme: Zombie Tribal",
      icon: "fas fa-biohazard",
      categories: {
        zombie: "All Zombies",
        payoff: "Zombie Payoffs",
        hate: "Zombie Hate Cards",
      },
    },
    "vow-toughness": {
      name: "Theme: Toughness",
      icon: "fas fa-tree",
      categories: {
        toughness: "High Toughness Cards",
        payoff: "Toughness Payoffs",
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
        "vow-dfc",
        "vow-day-night",
        "vow-disturb",
        "vow-training",
        "vow-blood",
        "vow-exploit",
        "vow-vampire",
        "vow-human",
        "vow-zombie",
        "vow-toughness",
      ],
    },
  },
  cards: [
    {
      number: "1",
      name: "Adamant Will",
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
      number: "2",
      name: "Angelic Quartermaster",
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
      number: "3",
      name: "Arm the Cathars",
      cost: ["1", "w", "w"],
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
      number: "4",
      name: "Bride's Gown",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "5",
      name: "By Invitation Only",
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
          categories: ["normal"],
        },
      ],
    },
    {
      number: "6",
      name: "Cemetery Protector",
      cost: ["2", "w", "w"],
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
        {
          guide: "vow-disturb",
          categories: ["hate"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "7",
      name: "Circle of Confinement",
      cost: ["1", "w"],
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
          guide: "vow-vampire",
          categories: ["hate"],
        },
      ],
    },
    {
      number: "8",
      name: "Dawnhart Geist",
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
      ],
    },
    {
      number: "9",
      name: "Distracting Geist // Clever Distraction",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-disturb",
          categories: ["disturb"],
        },
      ],
    },
    {
      number: "10",
      name: "Drogskol Infantry // Drogskol Armaments",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-disturb",
          categories: ["disturb"],
        },
      ],
    },
    {
      number: "11",
      name: "Estwald Shieldbasher",
      cost: ["3", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "12",
      name: "Faithbound Judge // Sinner's Judgment",
      cost: ["1", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-disturb",
          categories: ["disturb"],
        },
      ],
    },
    {
      number: "13",
      name: "Fierce Retribution",
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
      number: "14",
      name: "Fleeting Spirit",
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
      number: "15",
      name: "Gryff Rider",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-training",
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "16",
      name: "Gryffwing Cavalry",
      cost: ["3", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-training",
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "17",
      name: "Hallowed Haunting",
      cost: ["2", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "18",
      name: "Heron of Hope",
      cost: ["3", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain", "payoff"],
        },
      ],
    },
    {
      number: "19",
      name: "Heron-Blessed Geist",
      cost: ["4", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-disturb",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "20",
      name: "Hopeful Initiate",
      cost: ["w"],
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
          guide: "vow-training",
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "21",
      name: "Katilda, Dawnhart Martyr // Katilda's Rising Dawn",
      cost: ["1", "w", "w"],
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
          guide: "vow-disturb",
          categories: ["disturb"],
        },
        {
          guide: "vow-vampire",
          categories: ["hate"],
        },
      ],
    },
    {
      number: "22",
      name: "Kindly Ancestor // Ancestor's Embrace",
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
          guide: "vow-disturb",
          categories: ["disturb"],
        },
      ],
    },
    {
      number: "23",
      name: "Lantern Flare",
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
      number: "24",
      name: "Militia Rallier",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "25",
      name: "Nebelgast Beguiler",
      cost: ["4", "w"],
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
      number: "26",
      name: "Nurturing Presence",
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
      number: "27",
      name: "Ollenbock Escort",
      cost: ["w"],
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
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "28",
      name: "Panicked Bystander // Cackling Culprit",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain", "payoff"],
        },
        {
          guide: "vow-dfc",
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "29",
      name: "Parish-Blade Trainee",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-training",
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "30",
      name: "Piercing Light",
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
      ],
    },
    {
      number: "31",
      name: "Radiant Grace // Radiant Restraints",
      cost: ["w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "vow-dfc",
        },
      ],
    },
    {
      number: "32",
      name: "Resistance Squad",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-human",
          categories: ["human", "payoff"],
        },
      ],
    },
    {
      number: "33",
      name: "Sanctify",
      cost: ["1", "w"],
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
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "34",
      name: "Savior of Ollenbock",
      cost: ["1", "w", "w"],
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
          guide: "vow-training",
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "35",
      name: "Sigarda's Imprisonment",
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
        {
          guide: "vow-blood",
          categories: ["token"],
        },
      ],
    },
    {
      number: "36",
      name: "Sigarda's Summons",
      cost: ["4", "w", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "37",
      name: "Supernatural Rescue",
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
      ],
    },
    {
      number: "38",
      name: "Thalia, Guardian of Thraben",
      cost: ["1", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "39",
      name: "Traveling Minister",
      cost: ["w"],
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
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "40",
      name: "Twinblade Geist // Twinblade Invocation",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-disturb",
          categories: ["disturb"],
        },
      ],
    },
    {
      number: "41",
      name: "Unholy Officiant",
      cost: ["w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "42",
      name: "Valorous Stance",
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
      number: "43",
      name: "Vampire Slayer",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-vampire",
          categories: ["hate"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "44",
      name: "Voice of the Blessed",
      cost: ["w", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "45",
      name: "Wedding Announcement // Wedding Festivity",
      cost: ["2", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "vow-dfc",
        },
      ],
    },
    {
      number: "46",
      name: "Welcoming Vampire",
      cost: ["2", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "47",
      name: "Alchemist's Retrieval",
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
      number: "48",
      name: "Binding Geist // Spectral Binding",
      cost: ["2", "u"],
      rarity: "c",
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
          guide: "vow-disturb",
          categories: ["disturb"],
        },
      ],
    },
    {
      number: "49",
      name: "Biolume Egg // Biolume Serpent",
      cost: ["2", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-exploit",
          categories: ["enabler"],
        },
        {
          guide: "vow-dfc",
        },
      ],
    },
    {
      number: "50",
      name: "Cemetery Illuminator",
      cost: ["1", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-disturb",
          categories: ["hate"],
        },
      ],
    },
    {
      number: "51",
      name: "Chill of the Grave",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["1", "u"],
          categories: ["board"],
        },
        {
          guide: "removal",
          categories: ["temporary"],
        },
        {
          guide: "vow-zombie",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "52",
      name: "Cobbled Lancer",
      cost: ["u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-zombie",
          categories: ["zombie"],
        },
      ],
    },
    {
      number: "53",
      name: "Consuming Tide",
      cost: ["2", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["bounce", "boardwipe"],
        },
        {
          guide: "boardwipe",
          categories: ["conditional"],
        },
        {
          guide: "bounce",
        },
      ],
    },
    {
      number: "54",
      name: "Cradle of Safety",
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
      number: "55",
      name: "Cruel Witness",
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
      number: "56",
      name: "Diver Skaab",
      cost: ["3", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-zombie",
          categories: ["zombie"],
        },
        {
          guide: "vow-exploit",
          categories: ["exploit"],
        },
      ],
    },
    {
      number: "57",
      name: "Dreadlight Monstrosity",
      cost: ["4", "u", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "58",
      name: "Dreamshackle Geist",
      cost: ["1", "u", "u"],
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
      number: "59",
      name: "Fear of Death",
      cost: ["1", "u"],
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
          guide: "mill",
          categories: ["self"],
        },
      ],
    },
    {
      number: "60",
      name: "Geistlight Snare",
      cost: ["2", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["u"],
          categories: ["counterspell"],
        },
        {
          guide: "counterspell",
        },
      ],
    },
    {
      number: "61",
      name: "Geralf, Visionary Stitcher",
      cost: ["2", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
        {
          guide: "vow-zombie",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "62",
      name: "Gutter Skulker // Gutter Shortcut",
      cost: ["3", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-disturb",
          categories: ["disturb"],
        },
      ],
    },
    {
      number: "63",
      name: "Hullbreaker Horror",
      cost: ["5", "u", "u"],
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
      number: "64",
      name: "Inspired Idea",
      cost: ["2", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "65",
      name: "Jacob Hauken, Inspector // Hauken's Insight",
      cost: ["1", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-dfc",
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "66",
      name: "Lantern Bearer // Lanterns' Lift",
      cost: ["u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-disturb",
          categories: ["disturb"],
        },
      ],
    },
    {
      number: "67",
      name: "Lunar Rejection",
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
          categories: ["bounce"],
        },
        {
          guide: "bounce",
        },
      ],
    },
    {
      number: "68",
      name: "Mirrorhall Mimic // Ghastly Mimicry",
      cost: ["3", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-disturb",
          categories: ["disturb"],
        },
      ],
    },
    {
      number: "69",
      name: "Mischievous Catgeist // Catlike Curiosity",
      cost: ["1", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-disturb",
          categories: ["disturb"],
        },
      ],
    },
    {
      number: "70",
      name: "Necroduality",
      cost: ["3", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "vow-zombie",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "71",
      name: "Overcharged Amalgam",
      cost: ["2", "u", "u"],
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
        {
          guide: "vow-zombie",
          categories: ["zombie"],
        },
        {
          guide: "vow-exploit",
          categories: ["exploit"],
        },
      ],
    },
    {
      number: "72",
      name: "Patchwork Crawler",
      cost: ["1", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-zombie",
          categories: ["zombie"],
        },
      ],
    },
    {
      number: "73",
      name: "Repository Skaab",
      cost: ["3", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-zombie",
          categories: ["zombie"],
        },
        {
          guide: "vow-exploit",
          categories: ["exploit"],
        },
      ],
    },
    {
      number: "74",
      name: "Scattered Thoughts",
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
        {
          guide: "mill",
          categories: ["self"],
        },
      ],
    },
    {
      number: "75",
      name: "Screaming Swarm",
      cost: ["5", "u"],
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
      ],
    },
    {
      number: "76",
      name: "Selhoff Entomber",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-zombie",
          categories: ["zombie"],
        },
      ],
    },
    {
      number: "77",
      name: "Serpentine Ambush",
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
      name: "Skywarp Skaab",
      cost: ["3", "u", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-zombie",
          categories: ["zombie"],
        },
      ],
    },
    {
      number: "79",
      name: "Soulcipher Board // Cipherbound Spirit",
      cost: ["1", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-dfc",
        },
      ],
    },
    {
      number: "80",
      name: "Steelclad Spirit",
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
      number: "81",
      name: "Stitched Assistant",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-zombie",
          categories: ["zombie"],
        },
        {
          guide: "vow-exploit",
          categories: ["exploit"],
        },
      ],
    },
    {
      number: "82",
      name: "Stormchaser Drake",
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
      number: "83",
      name: "Syncopate",
      cost: ["x", "u"],
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
      number: "84",
      name: "Syphon Essence",
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
          guide: "vow-blood",
          categories: ["token"],
        },
      ],
    },
    {
      number: "85",
      name: "Thirst for Discovery",
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
      name: "Wanderlight Spirit",
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
      number: "87",
      name: "Wash Away",
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
      number: "88",
      name: "Whispering Wizard",
      cost: ["3", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "89",
      name: "Winged Portent",
      cost: ["1", "u", "u"],
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
      number: "90",
      name: "Witness the Future",
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
      number: "91",
      name: "Wretched Throng",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-zombie",
          categories: ["zombie"],
        },
      ],
    },
    {
      number: "92",
      name: "Aim for the Head",
      cost: ["2", "b"],
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
          guide: "discard",
        },
        {
          guide: "vow-zombie",
          categories: ["hate"],
        },
      ],
    },
    {
      number: "93",
      name: "Archghoul of Thraben",
      cost: ["2", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-zombie",
          categories: ["zombie"],
        },
        {
          guide: "vow-zombie",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "94",
      name: "Bleed Dry",
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
          categories: ["removal"],
        },
      ],
    },
    {
      number: "95",
      name: "Blood Fountain",
      cost: ["b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "vow-blood",
          categories: ["token"],
        },
      ],
    },
    {
      number: "96",
      name: "Bloodcrazed Socialite",
      cost: ["3", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
        {
          guide: "vow-blood",
          categories: ["token", "payoff"],
        },
      ],
    },
    {
      number: "97",
      name: "Bloodsworn Squire // Bloodsworn Knight",
      cost: ["3", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-dfc",
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "98",
      name: "Bloodvial Purveyor",
      cost: ["2", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-blood",
          categories: ["payoff"],
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "99",
      name: "Catapult Fodder // Catapult Captain",
      cost: ["2", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-dfc",
        },
        {
          guide: "vow-toughness",
          categories: ["payoff"],
        },
        {
          guide: "vow-zombie",
          categories: ["zombie"],
        },
      ],
    },
    {
      number: "100",
      name: "Cemetery Desecrator",
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
          guide: "vow-disturb",
          categories: ["hate"],
        },
        {
          guide: "vow-zombie",
          categories: ["zombie"],
        },
      ],
    },
    {
      number: "101",
      name: "Concealing Curtains // Revealing Eye",
      cost: ["b"],
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
          guide: "vow-dfc",
        },
      ],
    },
    {
      number: "102",
      name: "Courier Bat",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "103",
      name: "Demonic Bargain",
      cost: ["2", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "104",
      name: "Desperate Farmer // Depraved Harvester",
      cost: ["2", "b"],
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
          guide: "vow-dfc",
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "105",
      name: "Diregraf Scavenger",
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
          guide: "vow-disturb",
          categories: ["hate"],
        },
        {
          guide: "vow-zombie",
          categories: ["zombie"],
        },
      ],
    },
    {
      number: "106",
      name: "Doomed Dissenter",
      cost: ["1", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
        {
          guide: "vow-zombie",
          categories: ["zombie"],
        },
        {
          guide: "vow-exploit",
          categories: ["enabler"],
        },
      ],
    },
    {
      number: "107",
      name: "Dread Fugue",
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
      number: "108",
      name: "Dreadfeast Demon",
      cost: ["5", "b", "b"],
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
      name: "Dying to Serve",
      cost: ["2", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "vow-zombie",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "110",
      name: "Edgar's Awakening",
      cost: ["3", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "111",
      name: "Falkenrath Forebear",
      cost: ["2", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-blood",
          categories: ["token", "payoff"],
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "112",
      name: "Fell Stinger",
      cost: ["2", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-zombie",
          categories: ["zombie"],
        },
        {
          guide: "vow-exploit",
          categories: ["exploit"],
        },
      ],
    },
    {
      number: "113",
      name: "Gift of Fangs",
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
          guide: "vow-vampire",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "114",
      name: "Gluttonous Guest",
      cost: ["2", "b"],
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
          guide: "vow-blood",
          categories: ["token", "payoff"],
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
        {
          guide: "vow-toughness",
          categories: ["toughness"],
        },
      ],
    },
    {
      number: "115",
      name: "Graf Reaver",
      cost: ["1", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-zombie",
          categories: ["zombie"],
        },
        {
          guide: "vow-exploit",
          categories: ["exploit"],
        },
      ],
    },
    {
      number: "116",
      name: "Grisly Ritual",
      cost: ["5", "b"],
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
          guide: "vow-blood",
          categories: ["token"],
        },
      ],
    },
    {
      number: "117",
      name: "Groom's Finery",
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
      number: "118",
      name: "Headless Rider",
      cost: ["2", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-exploit",
          categories: ["enabler"],
        },
        {
          guide: "vow-zombie",
          categories: ["zombie", "payoff"],
        },
      ],
    },
    {
      number: "119",
      name: "Henrika Domnathi // Henrika, Infernal Seer",
      cost: ["2", "b", "b"],
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
          guide: "vow-dfc",
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "120",
      name: "Hero's Downfall",
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
      ],
    },
    {
      number: "121",
      name: "Innocent Traveler // Malicious Invader",
      cost: ["2", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-dfc",
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
        {
          guide: "vow-human",
          categories: ["human", "hate"],
        },
      ],
    },
    {
      number: "122",
      name: "Mindleech Ghoul",
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
          guide: "vow-zombie",
          categories: ["zombie"],
        },
        {
          guide: "vow-exploit",
          categories: ["exploit"],
        },
      ],
    },
    {
      number: "123",
      name: "Parasitic Grasp",
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
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "vow-human",
          categories: ["hate"],
        },
      ],
    },
    {
      number: "124",
      name: "Path of Peril",
      cost: ["1", "b", "b"],
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
      number: "125",
      name: "Persistent Specimen",
      cost: ["b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-exploit",
          categories: ["enabler"],
        },
      ],
    },
    {
      number: "126",
      name: "Pointed Discussion",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "vow-blood",
          categories: ["token"],
        },
      ],
    },
    {
      number: "127",
      name: "Ragged Recluse // Odious Witch",
      cost: ["1", "b"],
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
          guide: "vow-dfc",
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "128",
      name: "Restless Bloodseeker // Bloodsoaked Reveler",
      cost: ["1", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain", "payoff"],
        },
        {
          guide: "vow-dfc",
        },
        {
          guide: "vow-blood",
          categories: ["token"],
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "129",
      name: "Rot-Tide Gargantua",
      cost: ["3", "b", "b"],
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
          guide: "vow-zombie",
          categories: ["zombie"],
        },
        {
          guide: "vow-exploit",
          categories: ["exploit"],
        },
      ],
    },
    {
      number: "130",
      name: "Skulking Killer",
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
      ],
    },
    {
      number: "131",
      name: "Sorin the Mirthless",
      cost: ["2", "b", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "132",
      name: "Toxrill, the Corrosive",
      cost: ["5", "b", "b"],
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
      ],
    },
    {
      number: "133",
      name: "Undead Butler",
      cost: ["1", "b"],
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
        {
          guide: "vow-zombie",
          categories: ["zombie"],
        },
      ],
    },
    {
      number: "134",
      name: "Undying Malice",
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
      number: "135",
      name: "Unhallowed Phalanx",
      cost: ["4", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-toughness",
          categories: ["toughness"],
        },
        {
          guide: "vow-zombie",
          categories: ["zombie"],
        },
      ],
    },
    {
      number: "136",
      name: "Vampire's Kiss",
      cost: ["1", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "vow-blood",
          categories: ["token"],
        },
      ],
    },
    {
      number: "137",
      name: "Voldaren Bloodcaster // Bloodbat Summoner",
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
          guide: "vow-dfc",
        },
        {
          guide: "vow-blood",
          categories: ["token", "payoff"],
        },
      ],
    },
    {
      number: "138",
      name: "Wedding Security",
      cost: ["3", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-blood",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "139",
      name: "Abrade",
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
      ],
    },
    {
      number: "140",
      name: "Alchemist's Gambit",
      cost: ["1", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "141",
      name: "Alluring Suitor // Deadly Dancer",
      cost: ["2", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-dfc",
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "142",
      name: "Ancestral Anger",
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
      number: "143",
      name: "Ballista Watcher // Ballista Wielder",
      cost: ["2", "r", "r"],
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
          guide: "vow-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "144",
      name: "Belligerent Guest",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-blood",
          categories: ["token"],
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "145",
      name: "Blood Hypnotist",
      cost: ["2", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-blood",
          categories: ["payoff"],
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "146",
      name: "Blood Petal Celebrant",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
        {
          guide: "vow-blood",
          categories: ["token"],
        },
      ],
    },
    {
      number: "147",
      name: "Bloody Betrayal",
      cost: ["2", "r"],
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
        {
          guide: "vow-blood",
          categories: ["token"],
        },
      ],
    },
    {
      number: "148",
      name: "Cemetery Gatekeeper",
      cost: ["1", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-disturb",
          categories: ["hate"],
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "149",
      name: "Chandra, Dressed to Kill",
      cost: ["1", "r", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "150",
      name: "Change of Fortune",
      cost: ["3", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "151",
      name: "Creepy Puppeteer",
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
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "152",
      name: "Curse of Hospitality",
      cost: ["2", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "153",
      name: "Daybreak Combatants",
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
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "154",
      name: "Dominating Vampire",
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
          guide: "threaten",
        },
        {
          guide: "vow-vampire",
          categories: ["vampire", "payoff"],
        },
      ],
    },
    {
      number: "155",
      name: "End the Festivities",
      cost: ["r"],
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
          guide: "ping",
        },
      ],
    },
    {
      number: "156",
      name: "Falkenrath Celebrants",
      cost: ["4", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
        {
          guide: "vow-blood",
          categories: ["token"],
        },
      ],
    },
    {
      number: "157",
      name: "Fearful Villager // Fearsome Werewolf",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "158",
      name: "Flame-Blessed Bolt",
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
      number: "159",
      name: "Frenzied Devils",
      cost: ["4", "r"],
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
      number: "160",
      name: "Honeymoon Hearse",
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
      number: "161",
      name: "Hungry Ridgewolf",
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
      number: "162",
      name: "Ill-Tempered Loner // Howlpack Avenger",
      cost: ["2", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "163",
      name: "Into the Night",
      cost: ["3", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "vow-day-night",
          categories: ["other"],
        },
      ],
    },
    {
      number: "164",
      name: "Kessig Flamebreather",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "165",
      name: "Kessig Wolfrider",
      cost: ["r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "166",
      name: "Lacerate Flesh",
      cost: ["4", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "vow-blood",
          categories: ["token"],
        },
      ],
    },
    {
      number: "167",
      name: "Lambholt Raconteur // Lambholt Ravager",
      cost: ["3", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "168",
      name: "Lightning Wolf",
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
      number: "169",
      name: "Magma Pummeler",
      cost: ["x", "r", "r"],
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
      name: "Manaform Hellkite",
      cost: ["2", "r", "r"],
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
      number: "171",
      name: "Markov Retribution",
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
          guide: "masspump",
        },
        {
          guide: "vow-vampire",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "172",
      name: "Olivia's Attendants",
      cost: ["4", "r", "r"],
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
        {
          guide: "vow-blood",
          categories: ["token"],
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "173",
      name: "Pyre Spawn",
      cost: ["4", "r", "r"],
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
      number: "174",
      name: "Reckless Impulse",
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
      number: "175",
      name: "Rending Flame",
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
      number: "176",
      name: "Runebound Wolf",
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
      number: "177",
      name: "Sanguine Statuette",
      cost: ["1", "r"],
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
          guide: "vow-blood",
          categories: ["token", "payoff"],
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "178",
      name: "Stensia Uprising",
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
        {
          guide: "vow-human",
          categories: ["human"],
        },
        {
          guide: "vow-exploit",
          categories: ["enabler"],
        },
      ],
    },
    {
      number: "179",
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
      number: "180",
      name: "Vampires' Vengeance",
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
          categories: ["boardwipe"],
        },
        {
          guide: "boardwipe",
          categories: ["conditional"],
        },
        {
          guide: "vow-blood",
          categories: ["token"],
        },
        {
          guide: "vow-vampire",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "181",
      name: "Volatile Arsonist // Dire-Strain Anarchist",
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
        {
          guide: "haste",
        },
        {
          guide: "ping",
        },
        {
          guide: "vow-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "182",
      name: "Voldaren Epicure",
      cost: ["r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-blood",
          categories: ["token"],
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "183",
      name: "Voltaic Visionary // Volt-Charged Berserker",
      cost: ["1", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-dfc",
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "184",
      name: "Weary Prisoner // Wrathful Jailbreaker",
      cost: ["3", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "185",
      name: "Apprentice Sharpshooter",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-training",
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
        {
          guide: "vow-toughness",
          categories: ["toughness"],
        },
      ],
    },
    {
      number: "186",
      name: "Ascendant Packleader",
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
      number: "187",
      name: "Avabruck Caretaker // Hollowhenge Huntmaster",
      cost: ["4", "g", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "188",
      name: "Bramble Armor",
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
      number: "189",
      name: "Bramble Wurm",
      cost: ["6", "g"],
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
      number: "190",
      name: "Cartographer's Survey",
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
      ],
    },
    {
      number: "191",
      name: "Cemetery Prowler",
      cost: ["1", "g", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-disturb",
          categories: ["hate"],
        },
      ],
    },
    {
      number: "192",
      name: "Cloaked Cadet",
      cost: ["4", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-training",
        },
        {
          guide: "vow-human",
          categories: ["human", "payoff"],
        },
      ],
    },
    {
      number: "193",
      name: "Crawling Infestation",
      cost: ["2", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mill",
          categories: ["self"],
        },
        {
          guide: "vow-exploit",
          categories: ["enabler"],
        },
      ],
    },
    {
      number: "194",
      name: "Crushing Canopy",
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
      number: "195",
      name: "Cultivator Colossus",
      cost: ["4", "g", "g", "g"],
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
      number: "196",
      name: "Dawnhart Disciple",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-human",
          categories: ["human", "payoff"],
        },
      ],
    },
    {
      number: "197",
      name: "Dig Up",
      cost: ["g"],
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
      number: "198",
      name: "Dormant Grove // Gnarled Grovestrider",
      cost: ["3", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-dfc",
        },
        {
          guide: "vow-toughness",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "199",
      name: "Flourishing Hunter",
      cost: ["4", "g", "g"],
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
          guide: "vow-toughness",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "200",
      name: "Glorious Sunrise",
      cost: ["3", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "masspump",
        },
        {
          guide: "ramp",
        },
      ],
    },
    {
      number: "201",
      name: "Hamlet Vanguard",
      cost: ["2", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-human",
          categories: ["human", "payoff"],
        },
      ],
    },
    {
      number: "202",
      name: "Hiveheart Shaman",
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
          guide: "ramp",
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "203",
      name: "Hookhand Mariner // Riphook Raider",
      cost: ["3", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "204",
      name: "Howling Moon",
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
      number: "205",
      name: "Howlpack Piper // Wildsong Howler",
      cost: ["3", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "206",
      name: "Infestation Expert // Infested Werewolf",
      cost: ["4", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
        {
          guide: "vow-exploit",
          categories: ["enabler"],
        },
      ],
    },
    {
      number: "207",
      name: "Laid to Rest",
      cost: ["3", "g"],
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
        {
          guide: "vow-human",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "208",
      name: "Massive Might",
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
      number: "209",
      name: "Moldgraf Millipede",
      cost: ["4", "g"],
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
      number: "210",
      name: "Mulch",
      cost: ["1", "g"],
      rarity: "c",
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
      number: "211",
      name: "Nature's Embrace",
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
      number: "212",
      name: "Oakshade Stalker // Moonlit Ambusher",
      cost: ["2", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          categories: ["board"],
          cost: ["4", "g"],
        },
        {
          guide: "vow-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "213",
      name: "Packsong Pup",
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
      ],
    },
    {
      number: "214",
      name: "Reclusive Taxidermist",
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
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "215",
      name: "Retrieve",
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
      number: "216",
      name: "Rural Recruit",
      cost: ["3", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-training",
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "217",
      name: "Sawblade Slinger",
      cost: ["3", "g"],
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
          guide: "vow-human",
          categories: ["human"],
        },
        {
          guide: "vow-zombie",
          categories: ["hate"],
        },
      ],
    },
    {
      number: "218",
      name: "Sheltering Boughs",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "vow-toughness",
          categories: ["toughness"],
        },
      ],
    },
    {
      number: "219",
      name: "Snarling Wolf",
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
      number: "220",
      name: "Spiked Ripsaw",
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
      number: "221",
      name: "Splendid Reclamation",
      cost: ["3", "g"],
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
      number: "222",
      name: "Spore Crawler",
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
      number: "223",
      name: "Sporeback Wolf",
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
      number: "224",
      name: "Toxic Scorpion",
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
      number: "225",
      name: "Ulvenwald Oddity // Ulvenwald Behemoth",
      cost: ["2", "g", "g"],
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
          guide: "vow-dfc",
        },
      ],
    },
    {
      number: "226",
      name: "Weaver of Blossoms // Blossom-Clad Werewolf",
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
        {
          guide: "vow-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "227",
      name: "Witch's Web",
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
      number: "228",
      name: "Wolf Strike",
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
          guide: "vow-day-night",
          categories: ["other"],
        },
      ],
    },
    {
      number: "229",
      name: "Wolfkin Outcast // Wedding Crasher",
      cost: ["5", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "230",
      name: "Ancient Lumberknot",
      cost: ["2", "b", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-toughness",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "231",
      name: "Anje, Maid of Dishonor",
      cost: ["2", "b", "r"],
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
          guide: "vow-blood",
          categories: ["token", "payoff"],
        },
        {
          guide: "vow-vampire",
          categories: ["vampire", "payoff"],
        },
      ],
    },
    {
      number: "232",
      name: "Bloodtithe Harvester",
      cost: ["b", "r"],
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
          guide: "vow-blood",
          categories: ["token", "payoff"],
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "233",
      name: "Brine Comber // Brinebound Gift",
      cost: ["1", "w", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-disturb",
          categories: ["disturb"],
        },
      ],
    },
    {
      number: "234",
      name: "Child of the Pack // Savage Packmate",
      cost: ["2", "r", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "235",
      name: "Dorothea, Vengeful Victim // Dorothea's Retribution",
      cost: ["w", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-disturb",
          categories: ["disturb"],
        },
      ],
    },
    {
      number: "236",
      name: "Edgar, Charmed Groom // Edgar Markov's Coffin",
      cost: ["2", "w", "b"],
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
          guide: "vow-dfc",
        },
        {
          guide: "vow-vampire",
          categories: ["vampire", "payoff"],
        },
      ],
    },
    {
      number: "237",
      name: "Eruth, Tormented Prophet",
      cost: ["1", "u", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "238",
      name: "Grolnok, the Omnivore",
      cost: ["2", "g", "u"],
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
      number: "239",
      name: "Halana and Alena, Partners",
      cost: ["2", "r", "g"],
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
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "240",
      name: "Kaya, Geist Hunter",
      cost: ["1", "w", "b"],
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
      name: "Markov Purifier",
      cost: ["1", "w", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain", "payoff"],
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "242",
      name: "Markov Waltzer",
      cost: ["2", "r", "w"],
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
          guide: "vow-vampire",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "243",
      name: "Odric, Blood-Cursed",
      cost: ["1", "r", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-blood",
          categories: ["token"],
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "244",
      name: "Old Rutstein",
      cost: ["1", "b", "g"],
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
          guide: "vow-blood",
          categories: ["token"],
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "245",
      name: "Olivia, Crimson Bride",
      cost: ["4", "b", "r"],
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
          guide: "vow-vampire",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "246",
      name: "Runo Stromkirk // Krothuss, Lord of the Deep",
      cost: ["1", "u", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-dfc",
        },
        {
          guide: "vow-vampire",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "247",
      name: "Sigardian Paladin",
      cost: ["2", "g", "w"],
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
          guide: "vow-human",
          categories: ["human"],
        },
      ],
    },
    {
      number: "248",
      name: "Skull Skaab",
      cost: ["u", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-zombie",
          categories: ["zombie"],
        },
        {
          guide: "vow-exploit",
          categories: ["exploit"],
        },
      ],
    },
    {
      number: "249",
      name: "Torens, Fist of the Angels",
      cost: ["1", "g", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-training",
        },
        {
          guide: "vow-human",
          categories: ["human"],
        },
        {
          guide: "vow-exploit",
          categories: ["enabler"],
        },
      ],
    },
    {
      number: "250",
      name: "Vilespawn Spider",
      cost: ["g", "u"],
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
      number: "251",
      name: "Wandering Mind",
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
      number: "252",
      name: "Blood Servitor",
      cost: ["3"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "vow-blood",
          categories: ["token"],
        },
      ],
    },
    {
      number: "253",
      name: "Boarded Window",
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
      number: "254",
      name: "Ceremonial Knife",
      cost: ["1"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "vow-blood",
          categories: ["token"],
        },
      ],
    },
    {
      number: "255",
      name: "Dollhouse of Horrors",
      cost: ["5"],
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
      number: "256",
      name: "Foreboding Statue // Forsaken Thresher",
      cost: ["3"],
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
          guide: "vow-dfc",
        },
      ],
    },
    {
      number: "257",
      name: "Honored Heirloom",
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
      number: "258",
      name: "Investigator's Journal",
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
      number: "259",
      name: "Lantern of the Lost",
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
      number: "260",
      name: "Wedding Invitation",
      cost: ["2"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "vow-vampire",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "261",
      name: "Deathcap Glade",
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
      number: "262",
      name: "Dreamroot Cascade",
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
      number: "263",
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
      number: "264",
      name: "Shattered Sanctum",
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
      number: "265",
      name: "Stormcarved Coast",
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
      name: "Sundown Pass",
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
      name: "Voldaren Estate",
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
          guide: "vow-blood",
          categories: ["token"],
        },
        {
          guide: "vow-vampire",
          categories: ["payoff"],
        },
      ],
    },
  ],
};

export default format;
