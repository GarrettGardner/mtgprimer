import type { IFormatConfig } from "@/models";

const format: IFormatConfig = {
  code: "mid",
  name: "Innistrad: Midnight Hunt",
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
    "mid-dfc": {
      name: "Mechanic: Double Faced Cards",
      icon: "fas fa-history",
    },
    "mid-day-night": {
      name: "Mechanic: Day/Night",
      icon: "fas fa-cloud-moon",
      categories: {
        "daybound-nightbound": "Daybound/Nightbound",
        switch: "Day/Night Switch Payoffs",
        night: "Night Enabler/Payoffs",
      },
    },
    "mid-werewolf": {
      name: "Theme: Wolves/Werewolves",
      icon: "fas fa-dog",
      categories: {
        all: "All Wolves/Werewolves",
        payoff: "Werewolf Payoffs",
        hate: "Werewolf Hate",
      },
    },
    "mid-disturb": {
      name: "Mechanic: Disturb",
      icon: "fas fa-ghost",
      categories: {
        disturb: "Disturb",
        payoff: "Payoffs",
        hate: "Hate Cards",
      },
    },
    "mid-flashback": {
      name: "Mechanic: Flashback",
      icon: "fas fa-hand-sparkles",
      categories: {
        flashback: "Flashback",
        payoff: "Payoffs",
        hate: "Hate Cards",
      },
    },
    "mid-decayed": {
      name: "Mechanic: Decayed/Zombies",
      icon: "fas fa-book-dead",
      categories: {
        decayed: "Decayed",
        payoff: "Zombie/Decayed Payoffs",
        sacrifice: "Sacrifice Outlets",
      },
    },
    "mid-coven": {
      name: "Mechanic: Coven",
      icon: "fas fa-broom",
      categories: {
        coven: "Coven",
        enabler: "Enablers",
      },
    },
    "mid-vampires": {
      name: "Theme: Vampires",
      icon: "fas fa-wine-bottle",
      categories: {
        vampire: "All Vampires",
        "vampire-payoff": "Vampire Payoffs",
        damage: "Damage Payoff",
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
        "mid-dfc",
        "mid-day-night",
        "mid-werewolf",
        "mid-disturb",
        "mid-flashback",
        "mid-decayed",
        "mid-coven",
        "mid-vampires",
      ],
    },
  },
  cards: [
    {
      number: "1",
      name: "Adeline, Resplendent Cathar",
      cost: ["1", "w", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "2",
      name: "Ambitious Farmhand // Seasoned Cathar",
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
          guide: "mid-dfc",
        },
        {
          guide: "mid-coven",
          categories: ["coven"],
        },
      ],
    },
    {
      number: "3",
      name: "Beloved Beggar // Generous Soul",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-disturb",
          categories: ["disturb"],
        },
        {
          guide: "mid-coven",
          categories: ["enabler"],
        },
      ],
    },
    {
      number: "4",
      name: "Bereaved Survivor // Dauntless Avenger",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-dfc",
        },
      ],
    },
    {
      number: "5",
      name: "Blessed Defiance",
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
          guide: "lifegain",
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "6",
      name: "Borrowed Time",
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
      number: "7",
      name: "Brutal Cathar // Moonrage Brute",
      cost: ["2", "w"],
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
          guide: "mid-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "mid-werewolf",
          categories: ["all"],
        },
      ],
    },
    {
      number: "8",
      name: "Candlegrove Witch",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-coven",
          categories: ["coven"],
        },
      ],
    },
    {
      number: "9",
      name: "Candletrap",
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
          guide: "mid-coven",
          categories: ["coven"],
        },
      ],
    },
    {
      number: "10",
      name: "Cathar Commando",
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
          guide: "disenchant",
        },
      ],
    },
    {
      number: "11",
      name: "Cathar's Call",
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
      number: "12",
      name: "Celestus Sanctifier",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-day-night",
          categories: ["switch"],
        },
      ],
    },
    {
      number: "13",
      name: "Chaplain of Alms // Chapel Shieldgeist",
      cost: ["w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-disturb",
          categories: ["disturb"],
        },
      ],
    },
    {
      number: "14",
      name: "Clarion Cathars",
      cost: ["3", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-coven",
          categories: ["enabler"],
        },
      ],
    },
    {
      number: "15",
      name: "Curse of Silence",
      cost: ["w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "16",
      name: "Duelcraft Trainer",
      cost: ["3", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-coven",
          categories: ["coven"],
        },
      ],
    },
    {
      number: "17",
      name: "Enduring Angel // Angelic Enforcer",
      cost: ["2", "w", "w", "w"],
      rarity: "m",
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
          guide: "mid-dfc",
        },
      ],
    },
    {
      number: "18",
      name: "Fateful Absence",
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
      ],
    },
    {
      number: "19",
      name: "Flare of Faith",
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
      number: "20",
      name: "Gavony Dawnguard",
      cost: ["1", "w", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-day-night",
          categories: ["switch"],
        },
      ],
    },
    {
      number: "21",
      name: "Gavony Silversmith",
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
      number: "22",
      name: "Gavony Trapper",
      cost: ["w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "removal",
          categories: ["tap"],
        },
        {
          guide: "mid-coven",
          categories: ["enabler"],
        },
      ],
    },
    {
      number: "23",
      name: "Hedgewitch's Mask",
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
      number: "24",
      name: "Homestead Courage",
      cost: ["w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "25",
      name: "Intrepid Adversary",
      cost: ["1", "w"],
      rarity: "m",
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
          guide: "masspump",
        },
      ],
    },
    {
      number: "26",
      name: "Loyal Gryff",
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
          guide: "bounce",
        },
      ],
    },
    {
      number: "27",
      name: "Lunarch Veteran // Luminous Phantom",
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
          guide: "mid-disturb",
          categories: ["disturb"],
        },
      ],
    },
    {
      number: "28",
      name: "Mourning Patrol // Morning Apparition",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-disturb",
          categories: ["disturb"],
        },
      ],
    },
    {
      number: "29",
      name: "Odric's Outrider",
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
      number: "30",
      name: "Ritual Guardian",
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
          guide: "mid-coven",
          categories: ["coven"],
        },
      ],
    },
    {
      number: "31",
      name: "Ritual of Hope",
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
          guide: "masspump",
        },
        {
          guide: "mid-coven",
          categories: ["coven"],
        },
      ],
    },
    {
      number: "32",
      name: "Search Party Captain",
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
      number: "33",
      name: "Sigarda's Splendor",
      cost: ["2", "w", "w"],
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
      ],
    },
    {
      number: "34",
      name: "Sigardian Savior",
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
      number: "35",
      name: "Soul-Guide Gryff",
      cost: ["4", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-disturb",
          categories: ["hate"],
        },
        {
          guide: "mid-flashback",
          categories: ["hate"],
        },
      ],
    },
    {
      number: "36",
      name: "Sungold Barrage",
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
        {
          guide: "mid-coven",
          categories: ["coven"],
        },
      ],
    },
    {
      number: "37",
      name: "Sungold Sentinel",
      cost: ["1", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-disturb",
          categories: ["hate"],
        },
        {
          guide: "mid-flashback",
          categories: ["hate"],
        },
      ],
    },
    {
      number: "38",
      name: "Sunset Revelry",
      cost: ["1", "w"],
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
      number: "39",
      name: "Thraben Exorcism",
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
        {
          guide: "mid-disturb",
          categories: ["hate"],
        },
      ],
    },
    {
      number: "40",
      name: "Unruly Mob",
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
      number: "41",
      name: "Vanquish the Horde",
      cost: ["6", "w", "w"],
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
      number: "42",
      name: "Baithook Angler // Hook-Haunt Drifter",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-disturb",
          categories: ["disturb"],
        },
      ],
    },
    {
      number: "43",
      name: "Component Collector",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-day-night",
          categories: ["switch"],
        },
      ],
    },
    {
      number: "44",
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
          guide: "mill",
          categories: ["self"],
        },
      ],
    },
    {
      number: "45",
      name: "Covetous Castaway // Ghostly Castigator",
      cost: ["1", "u"],
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
      number: "46",
      name: "Curse of Surveillance",
      cost: ["4", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "47",
      name: "Delver of Secrets // Insectile Aberration",
      cost: ["u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-dfc",
        },
      ],
    },
    {
      number: "48",
      name: "Devious Cover-Up",
      cost: ["2", "u", "u"],
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
      number: "49",
      name: "Dissipate",
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
      ],
    },
    {
      number: "50",
      name: "Drownyard Amalgam",
      cost: ["4", "u"],
      rarity: "c",
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
      number: "51",
      name: "Fading Hope",
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
          categories: ["bounce"],
        },
        {
          guide: "bounce",
        },
      ],
    },
    {
      number: "52",
      name: "Falcon Abomination",
      cost: ["2", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-decayed",
          categories: ["decayed"],
        },
      ],
    },
    {
      number: "53",
      name: "Firmament Sage",
      cost: ["3", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-day-night",
          categories: ["switch"],
        },
      ],
    },
    {
      number: "54",
      name: "Flip the Switch",
      cost: ["2", "u"],
      rarity: "c",
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
        {
          guide: "mid-decayed",
          categories: ["decayed"],
        },
      ],
    },
    {
      number: "55",
      name: "Galedrifter // Waildrifter",
      cost: ["3", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-disturb",
          categories: ["disturb"],
        },
      ],
    },
    {
      number: "56",
      name: "Geistwave",
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
      ],
    },
    {
      number: "57",
      name: "Grafted Identity",
      cost: ["2", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mindcontrol",
        },
        {
          guide: "mid-decayed",
          categories: ["sacrifice"],
        },
      ],
    },
    {
      number: "58",
      name: "Larder Zombie",
      cost: ["u"],
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
        {
          guide: "mid-decayed",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "59",
      name: "Lier, Disciple of the Drowned",
      cost: ["3", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-flashback",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "60",
      name: "Locked in the Cemetery",
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
      number: "61",
      name: "Malevolent Hermit // Benevolent Geist",
      cost: ["1", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "counterspell",
        },
        {
          guide: "mid-disturb",
          categories: ["disturb"],
        },
      ],
    },
    {
      number: "62",
      name: "Memory Deluge",
      cost: ["2", "u", "u"],
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
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "63",
      name: "Mysterious Tome // Chilling Chronicle",
      cost: ["2", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["tap"],
        },
        {
          guide: "mid-dfc",
        },
      ],
    },
    {
      number: "64",
      name: "Nebelgast Intruder",
      cost: ["2", "u"],
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
      number: "65",
      name: "Ominous Roost",
      cost: ["2", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mid-disturb",
          categories: ["payoff"],
        },
        {
          guide: "mid-flashback",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "66",
      name: "Organ Hoarder",
      cost: ["3", "u"],
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
      number: "67",
      name: "Otherworldly Gaze",
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
          guide: "mill",
          categories: ["self"],
        },
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "68",
      name: "Overwhelmed Archivist // Archive Haunt",
      cost: ["2", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-disturb",
          categories: ["disturb"],
        },
      ],
    },
    {
      number: "69",
      name: "Patrician Geist",
      cost: ["2", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-disturb",
          categories: ["payoff"],
        },
        {
          guide: "mid-flashback",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "70",
      name: "Phantom Carriage",
      cost: ["4", "u", "u"],
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
          guide: "mid-disturb",
          categories: ["payoff"],
        },
        {
          guide: "mid-flashback",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "71",
      name: "Poppet Stitcher // Poppet Factory",
      cost: ["2", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-dfc",
        },
        {
          guide: "mid-decayed",
          categories: ["decayed"],
        },
      ],
    },
    {
      number: "72",
      name: "Revenge of the Drowned",
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
        {
          guide: "mid-decayed",
          categories: ["decayed"],
        },
      ],
    },
    {
      number: "73",
      name: "Secrets of the Key",
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
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "74",
      name: "Shipwreck Sifters",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-disturb",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "75",
      name: "Skaab Wrangler",
      cost: ["1", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "removal",
          categories: ["tap"],
        },
        {
          guide: "mid-decayed",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "76",
      name: "Sludge Monster",
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
      number: "77",
      name: "Spectral Adversary",
      cost: ["1", "u"],
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
      number: "78",
      name: "Startle",
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
          guide: "mid-decayed",
          categories: ["decayed"],
        },
      ],
    },
    {
      number: "79",
      name: "Stormrider Spirit",
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
      number: "80",
      name: "Suspicious Stowaway // Seafaring Werewolf",
      cost: ["1", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "mid-werewolf",
          categories: ["all"],
        },
      ],
    },
    {
      number: "81",
      name: "Triskaidekaphile",
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
      number: "82",
      name: "Unblinking Observer",
      cost: ["1", "u"],
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
          guide: "mid-disturb",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "83",
      name: "Vivisection",
      cost: ["3", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mid-decayed",
          categories: ["sacrifice"],
        },
      ],
    },
    {
      number: "84",
      name: "Arrogant Outlaw",
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
          guide: "mid-vampires",
          categories: ["vampire", "damage"],
        },
      ],
    },
    {
      number: "85",
      name: "Baneblade Scoundrel // Baneclaw Marauder",
      cost: ["3", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "mid-werewolf",
          categories: ["all"],
        },
      ],
    },
    {
      number: "86",
      name: "Bat Whisperer",
      cost: ["3", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-vampires",
          categories: ["vampire", "damage"],
        },
      ],
    },
    {
      number: "87",
      name: "Bladebrand",
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
      number: "88",
      name: "Blood Pact",
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
      ],
    },
    {
      number: "89",
      name: "Bloodline Culling",
      cost: ["1", "b", "b"],
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
      number: "90",
      name: "Bloodtithe Collector",
      cost: ["4", "b"],
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
          guide: "mid-vampires",
          categories: ["vampire", "damage"],
        },
      ],
    },
    {
      number: "91",
      name: "Champion of the Perished",
      cost: ["b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-decayed",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "92",
      name: "Covert Cutpurse // Covetous Geist",
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
          guide: "mid-disturb",
          categories: ["disturb"],
        },
      ],
    },
    {
      number: "93",
      name: "Crawl from the Cellar",
      cost: ["b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
        {
          guide: "mid-decayed",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "94",
      name: "Curse of Leeches // Leeching Lurker",
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
          guide: "mid-day-night",
          categories: ["daybound-nightbound"],
        },
      ],
    },
    {
      number: "95",
      name: "Defenestrate",
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
      number: "96",
      name: "Diregraf Horde",
      cost: ["4", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "decayed",
          categories: ["decayed"],
        },
      ],
    },
    {
      number: "97",
      name: "Dreadhound",
      cost: ["4", "b", "b"],
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
      number: "98",
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
      number: "99",
      name: "Eaten Alive",
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
          guide: "mid-decayed",
          categories: ["sacrifice"],
        },
      ],
    },
    {
      number: "100",
      name: "Ecstatic Awakener // Awoken Demon",
      cost: ["b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-dfc",
        },
        {
          guide: "mid-decayed",
          categories: ["sacrifice"],
        },
      ],
    },
    {
      number: "101",
      name: "Foul Play",
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
      ],
    },
    {
      number: "102",
      name: "Ghoulish Procession",
      cost: ["1", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mid-decayed",
          categories: ["decayed"],
        },
      ],
    },
    {
      number: "103",
      name: "Gisa, Glorious Resurrector",
      cost: ["2", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-decayed",
          categories: ["decayed"],
        },
      ],
    },
    {
      number: "104",
      name: "Graveyard Trespasser // Graveyard Glutton",
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
          guide: "mid-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "mid-werewolf",
          categories: ["all"],
        },
        {
          guide: "mid-disturb",
          categories: ["hate"],
        },
        {
          guide: "mid-flashback",
          categories: ["hate"],
        },
      ],
    },
    {
      number: "105",
      name: "Heirloom Mirror // Inherited Fiend",
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
          guide: "mid-dfc",
        },
        {
          guide: "mid-disturb",
          categories: ["hate"],
        },
      ],
    },
    {
      number: "106",
      name: "Hobbling Zombie",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-decayed",
          categories: ["decayed"],
        },
      ],
    },
    {
      number: "107",
      name: "Infernal Grasp",
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
      number: "108",
      name: "Jadar, Ghoulcaller of Nephalia",
      cost: ["1", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-decayed",
          categories: ["decayed"],
        },
      ],
    },
    {
      number: "109",
      name: "Jerren, Corrupted Bishop // Ormendahl, the Corrupter",
      cost: ["2", "b"],
      rarity: "m",
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
          guide: "mid-dfc",
        },
      ],
    },
    {
      number: "110",
      name: "Lord of the Forsaken",
      cost: ["4", "b", "b"],
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
          guide: "mill",
          categories: ["both"],
        },
        {
          guide: "mid-disturb",
          categories: ["payoff"],
        },
        {
          guide: "mid-flashback",
          categories: ["payoff"],
        },
        {
          guide: "mid-decayed",
          categories: ["sacrifice"],
        },
      ],
    },
    {
      number: "111",
      name: "Mask of Griselbrand",
      cost: ["1", "b", "b"],
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
      ],
    },
    {
      number: "112",
      name: "The Meathook Massacre",
      cost: ["x", "b", "b"],
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
          categories: ["normal"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "113",
      name: "Morbid Opportunist",
      cost: ["2", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "114",
      name: "Morkrut Behemoth",
      cost: ["4", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-decayed",
          categories: ["sacrifice"],
        },
      ],
    },
    {
      number: "115",
      name: "Necrosynthesis",
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
      number: "116",
      name: "No Way Out",
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
          guide: "mid-decayed",
          categories: ["decayed"],
        },
      ],
    },
    {
      number: "117",
      name: "Novice Occultist",
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
      number: "118",
      name: "Olivia's Midnight Ambush",
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
          guide: "mid-day-night",
          categories: ["night"],
        },
      ],
    },
    {
      number: "119",
      name: "Rotten Reunion",
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
          guide: "mid-disturb",
          categories: ["hate"],
        },
        {
          guide: "mid-flashback",
          categories: ["flashback", "hate"],
        },
        {
          guide: "mid-decayed",
          categories: ["decayed"],
        },
      ],
    },
    {
      number: "120",
      name: "Shady Traveler // Stalking Predator",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "mid-werewolf",
          categories: ["all"],
        },
      ],
    },
    {
      number: "121",
      name: "Siege Zombie",
      cost: ["1", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-decayed",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "122",
      name: "Slaughter Specialist",
      cost: ["1", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-vampires",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "123",
      name: "Stromkirk Bloodthief",
      cost: ["2", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-vampires",
          categories: ["vampire", "vampire-payoff", "damage"],
        },
      ],
    },
    {
      number: "124",
      name: "Tainted Adversary",
      cost: ["1", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-decayed",
          categories: ["decayed"],
        },
      ],
    },
    {
      number: "125",
      name: "Vampire Interloper",
      cost: ["1", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-vampires",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "126",
      name: "Vengeful Strangler // Strangling Grasp",
      cost: ["1", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-dfc",
        },
      ],
    },
    {
      number: "127",
      name: "Abandon the Post",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "falter",
        },
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "128",
      name: "Ardent Elementalist",
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
      number: "129",
      name: "Bloodthirsty Adversary",
      cost: ["1", "r"],
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
          guide: "mid-vampires",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "130",
      name: "Brimstone Vandal",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-day-night",
          categories: ["switch"],
        },
      ],
    },
    {
      number: "131",
      name: "Burn Down the House",
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
          categories: ["normal"],
        },
        {
          guide: "ping",
        },
        {
          guide: "haste",
        },
      ],
    },
    {
      number: "132",
      name: "Burn the Accursed",
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
      ],
    },
    {
      number: "133",
      name: "Cathartic Pyre",
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
      number: "134",
      name: "Curse of Shaken Faith",
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
      number: "135",
      name: "Electric Revelation",
      cost: ["2", "r"],
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
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "136",
      name: "Falkenrath Perforator",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-vampires",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "137",
      name: "Falkenrath Pit Fighter",
      cost: ["r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-vampires",
          categories: ["vampire", "vampire-payoff", "damage"],
        },
      ],
    },
    {
      number: "138",
      name: "Famished Foragers",
      cost: ["3", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-vampires",
          categories: ["vampire", "damage"],
        },
      ],
    },
    {
      number: "139",
      name: "Fangblade Brigand // Fangblade Eviscerator",
      cost: ["3", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "mid-werewolf",
          categories: ["all"],
        },
      ],
    },
    {
      number: "140",
      name: "Festival Crasher",
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
      number: "141",
      name: "Flame Channeler // Embodiment of Flame",
      cost: ["1", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-dfc",
        },
      ],
    },
    {
      number: "142",
      name: "Geistflame Reservoir",
      cost: ["2", "r"],
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
      number: "143",
      name: "Harvesttide Infiltrator // Harvesttide Assailant",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "mid-werewolf",
          categories: ["all"],
        },
      ],
    },
    {
      number: "144",
      name: "Immolation",
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
      number: "145",
      name: "Lambholt Harrier",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-werewolf",
          categories: ["all"],
        },
      ],
    },
    {
      number: "146",
      name: "Light Up the Night",
      cost: ["x", "r"],
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
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "147",
      name: "Lunar Frenzy",
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
      ],
    },
    {
      number: "148",
      name: "Moonrager's Slash",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["r"],
          categories: ["board"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
        {
          guide: "mid-day-night",
          categories: ["night"],
        },
      ],
    },
    {
      number: "149",
      name: "Moonveil Regent",
      cost: ["3", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "150",
      name: "Mounted Dreadknight",
      cost: ["4", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-vampires",
          categories: ["vampire", "damage"],
        },
      ],
    },
    {
      number: "151",
      name: "Neonate's Rush",
      cost: ["2", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
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
          guide: "ping",
        },
        {
          guide: "mid-vampires",
          categories: ["vampire-payoff"],
        },
      ],
    },
    {
      number: "152",
      name: "Obsessive Astronomer",
      cost: ["1", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-day-night",
          categories: ["switch"],
        },
      ],
    },
    {
      number: "153",
      name: "Pack's Betrayal",
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
          guide: "threaten",
        },
        {
          guide: "haste",
        },
        {
          guide: "mid-werewolf",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "154",
      name: "Play with Fire",
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
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "155",
      name: "Purifying Dragon",
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
      number: "156",
      name: "Raze the Effigy",
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
          guide: "disenchant",
        },
      ],
    },
    {
      number: "157",
      name: "Reckless Stormseeker // Storm-Charged Slasher",
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
          guide: "mid-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "mid-werewolf",
          categories: ["all"],
        },
      ],
    },
    {
      number: "158",
      name: "Seize the Storm",
      cost: ["4", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "159",
      name: "Smoldering Egg // Ashmouth Dragon",
      cost: ["1", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-dfc",
        },
      ],
    },
    {
      number: "160",
      name: "Spellrune Painter // Spellrune Howler",
      cost: ["2", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "mid-werewolf",
          categories: ["all"],
        },
      ],
    },
    {
      number: "161",
      name: "Stolen Vitality",
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
      number: "162",
      name: "Sunstreak Phoenix",
      cost: ["2", "r", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-day-night",
          categories: ["switch"],
        },
      ],
    },
    {
      number: "163",
      name: "Tavern Ruffian // Tavern Smasher",
      cost: ["3", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "mid-werewolf",
          categories: ["all"],
        },
      ],
    },
    {
      number: "164",
      name: "Thermo-Alchemist",
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
      number: "165",
      name: "Village Watch // Village Reavers",
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
        {
          guide: "mid-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "mid-werewolf",
          categories: ["all", "payoff"],
        },
      ],
    },
    {
      number: "166",
      name: "Voldaren Ambusher",
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
          guide: "mid-vampires",
          categories: ["vampire", "vampire-payoff"],
        },
      ],
    },
    {
      number: "167",
      name: "Voldaren Stinger",
      cost: ["r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-vampires",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "168",
      name: "Augur of Autumn",
      cost: ["1", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-coven",
          categories: ["coven"],
        },
      ],
    },
    {
      number: "169",
      name: "Bird Admirer // Wing Shredder",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "mid-werewolf",
          categories: ["all"],
        },
      ],
    },
    {
      number: "170",
      name: "Bounding Wolf",
      cost: ["2", "g"],
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
          guide: "mid-werewolf",
          categories: ["all"],
        },
      ],
    },
    {
      number: "171",
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
      number: "172",
      name: "Briarbridge Tracker",
      cost: ["2", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "173",
      name: "Brood Weaver",
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
      number: "174",
      name: "Burly Breaker // Dire-Strain Demolisher",
      cost: ["3", "g", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "mid-werewolf",
          categories: ["all"],
        },
      ],
    },
    {
      number: "175",
      name: "Candlelit Cavalry",
      cost: ["4", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-coven",
          categories: ["coven"],
        },
      ],
    },
    {
      number: "176",
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
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "177",
      name: "Consuming Blob",
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
      number: "178",
      name: "Contortionist Troupe",
      cost: ["x", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-coven",
          categories: ["coven", "enabler"],
        },
      ],
    },
    {
      number: "179",
      name: "Dawnhart Mentor",
      cost: ["2", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-coven",
          categories: ["coven", "enabler"],
        },
      ],
    },
    {
      number: "180",
      name: "Dawnhart Rejuvenator",
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
          guide: "fixing",
        },
        {
          guide: "ramp",
        },
      ],
    },
    {
      number: "181",
      name: "Deathbonnet Sprout // Deathbonnet Hulk",
      cost: ["g"],
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
          guide: "mid-dfc",
        },
      ],
    },
    {
      number: "182",
      name: "Defend the Celestus",
      cost: ["2", "g", "g"],
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
        {
          guide: "mid-coven",
          categories: ["enabler"],
        },
      ],
    },
    {
      number: "183",
      name: "Dryad's Revival",
      cost: ["2", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "184",
      name: "Duel for Dominance",
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
          guide: "mid-coven",
          categories: ["coven"],
        },
      ],
    },
    {
      number: "185",
      name: "Eccentric Farmer",
      cost: ["2", "g"],
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
      number: "186",
      name: "Harvesttide Sentry",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-coven",
          categories: ["coven"],
        },
      ],
    },
    {
      number: "187",
      name: "Hound Tamer // Untamed Pup",
      cost: ["2", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "mid-werewolf",
          categories: ["all", "payoff"],
        },
      ],
    },
    {
      number: "188",
      name: "Howl of the Hunt",
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
          guide: "mid-werewolf",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "189",
      name: "Might of the Old Ways",
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
          guide: "mid-coven",
          categories: ["coven"],
        },
      ],
    },
    {
      number: "190",
      name: "Outland Liberator // Frenzied Trapbreaker",
      cost: ["1", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "disenchant",
        },
        {
          guide: "mid-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "mid-werewolf",
          categories: ["all"],
        },
      ],
    },
    {
      number: "191",
      name: "Path to the Festival",
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
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "192",
      name: "Pestilent Wolf",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-werewolf",
          categories: ["all"],
        },
      ],
    },
    {
      number: "193",
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
      number: "194",
      name: "Primal Adversary",
      cost: ["2", "g"],
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
          guide: "mid-werewolf",
          categories: ["all"],
        },
      ],
    },
    {
      number: "195",
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
          guide: "disenchant",
        },
      ],
    },
    {
      number: "196",
      name: "Rise of the Ants",
      cost: ["4", "g", "g"],
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
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "197",
      name: "Saryth, the Viper's Fang",
      cost: ["2", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "198",
      name: "Shadowbeast Sighting",
      cost: ["3", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "199",
      name: "Snarling Wolf",
      cost: ["g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-werewolf",
          categories: ["all"],
        },
      ],
    },
    {
      number: "200",
      name: "Storm the Festival",
      cost: ["3", "g", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "201",
      name: "Tapping at the Window",
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
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "202",
      name: "Timberland Guide",
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
      number: "203",
      name: "Tireless Hauler // Dire-Strain Brawler",
      cost: ["4", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "mid-werewolf",
          categories: ["all"],
        },
      ],
    },
    {
      number: "204",
      name: "Tovolar's Huntmaster // Tovolar's Packleader",
      cost: ["4", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "mid-werewolf",
          categories: ["all", "payoff"],
        },
      ],
    },
    {
      number: "205",
      name: "Turn the Earth",
      cost: ["g"],
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
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "206",
      name: "Unnatural Growth",
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
      number: "207",
      name: "Willow Geist",
      cost: ["g"],
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
          guide: "mid-disturb",
          categories: ["payoff"],
        },
        {
          guide: "mid-flashback",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "208",
      name: "Wrenn and Seven",
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
      number: "209",
      name: "Angelfire Ignition",
      cost: ["1", "r", "w"],
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
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "210",
      name: "Arcane Infusion",
      cost: ["u", "r"],
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
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "211",
      name: "Arlinn, the Pack's Hope // Arlinn, the Moon's Fury",
      cost: ["2", "r", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "ramp",
        },
        {
          guide: "mid-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "mid-werewolf",
          categories: ["all"],
        },
      ],
    },
    {
      number: "212",
      name: "Bladestitched Skaab",
      cost: ["u", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-decayed",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "213",
      name: "Can't Stay Away",
      cost: ["w", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "214",
      name: "Corpse Cobble",
      cost: ["u", "b"],
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
          guide: "mid-flashback",
          categories: ["flashback"],
        },
        {
          guide: "mid-decayed",
          categories: ["sacrifice"],
        },
      ],
    },
    {
      number: "215",
      name: "Croaking Counterpart",
      cost: ["1", "g", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "216",
      name: "Dawnhart Wardens",
      cost: ["1", "g", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-coven",
          categories: ["coven"],
        },
      ],
    },
    {
      number: "217",
      name: "Dennick, Pious Apprentice // Dennick, Pious Apparition",
      cost: ["w", "u"],
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
          guide: "mid-disturb",
          categories: ["disturb"],
        },
      ],
    },
    {
      number: "218",
      name: "Devoted Grafkeeper // Departed Soulkeeper",
      cost: ["w", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "removal",
          categories: ["tap"],
        },
        {
          guide: "mill",
          categories: ["self"],
        },
        {
          guide: "mid-disturb",
          categories: ["disturb", "payoff"],
        },
        {
          guide: "mid-flashback",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "219",
      name: "Dire-Strain Rampage",
      cost: ["1", "r", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "disenchant",
        },
        {
          guide: "mid-flashback",
          categories: ["flashback"],
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
      number: "220",
      name: "Diregraf Rebirth",
      cost: ["3", "b", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "221",
      name: "Faithful Mending",
      cost: ["w", "u"],
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
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "222",
      name: "Fleshtaker",
      cost: ["w", "b"],
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
          guide: "mid-decayed",
          categories: ["sacrifice"],
        },
      ],
    },
    {
      number: "223",
      name: "Florian, Voldaren Scion",
      cost: ["1", "b", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-vampires",
          categories: ["vampire"],
        },
      ],
    },
    {
      number: "224",
      name: "Galvanic Iteration",
      cost: ["u", "r"],
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
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "225",
      name: "Ghoulcaller's Harvest",
      cost: ["b", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
        {
          guide: "mid-decayed",
          categories: ["decayed"],
        },
      ],
    },
    {
      number: "226",
      name: "Grizzly Ghoul",
      cost: ["2", "b", "g"],
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
      name: "Hallowed Respite",
      cost: ["w", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "removal",
          categories: ["tap"],
        },
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "228",
      name: "Hungry for More",
      cost: ["b", "r"],
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
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "229",
      name: "Join the Dance",
      cost: ["g", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "230",
      name: "Katilda, Dawnhart Prime",
      cost: ["g", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ramp",
        },
        {
          guide: "mid-werewolf",
          categories: ["hate"],
        },
      ],
    },
    {
      number: "231",
      name: "Kessig Naturalist // Lord of the Ulvenwald",
      cost: ["r", "g"],
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
          guide: "mid-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "mid-werewolf",
          categories: ["all", "payoff"],
        },
      ],
    },
    {
      number: "232",
      name: "Liesa, Forgotten Archangel",
      cost: ["2", "w", "w", "b"],
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
      ],
    },
    {
      number: "233",
      name: "Ludevic, Necrogenius // Olag, Ludevic's Hubris",
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
        {
          guide: "mid-dfc",
        },
      ],
    },
    {
      number: "234",
      name: "Old Stickfingers",
      cost: ["x", "b", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-disturb",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "235",
      name: "Rem Karolus, Stalwart Slayer",
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
      ],
    },
    {
      number: "236",
      name: "Rite of Harmony",
      cost: ["g", "w"],
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
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "237",
      name: "Rite of Oblivion",
      cost: ["w", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
        {
          guide: "mid-decayed",
          categories: ["sacrifice"],
        },
      ],
    },
    {
      number: "238",
      name: "Rootcoil Creeper",
      cost: ["g", "u"],
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
          guide: "mid-disturb",
          categories: ["payoff"],
        },
        {
          guide: "mid-flashback",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "239",
      name: "Sacred Fire",
      cost: ["r", "w"],
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
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "240",
      name: "Sigarda, Champion of Light",
      cost: ["1", "g", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-coven",
          categories: ["coven"],
        },
      ],
    },
    {
      number: "241",
      name: "Siphon Insight",
      cost: ["u", "b"],
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
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "242",
      name: "Slogurk, the Overslime",
      cost: ["1", "g", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "243",
      name: "Storm Skreelix",
      cost: ["3", "u", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "244",
      name: "Sunrise Cavalier",
      cost: ["1", "r", "w"],
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
          guide: "mid-day-night",
          categories: ["switch"],
        },
      ],
    },
    {
      number: "245",
      name: "Teferi, Who Slows the Sunset",
      cost: ["2", "w", "u"],
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
      ],
    },
    {
      number: "246",
      name: "Tovolar, Dire Overlord // Tovolar, the Midnight Scourge",
      cost: ["1", "r", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-day-night",
          categories: ["daybound-nightbound"],
        },
        {
          guide: "mid-werewolf",
          categories: ["all", "payoff"],
        },
      ],
    },
    {
      number: "247",
      name: "Unnatural Moonrise",
      cost: ["r", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mid-day-night",
          categories: ["night"],
        },
        {
          guide: "mid-werewolf",
          categories: ["payoff"],
        },
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "248",
      name: "Vadrik, Astral Archmage",
      cost: ["1", "u", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-day-night",
          categories: ["switch"],
        },
      ],
    },
    {
      number: "249",
      name: "Vampire Socialite",
      cost: ["b", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "mid-vampires",
          categories: ["vampire", "vampire-payoff", "damage"],
        },
      ],
    },
    {
      number: "250",
      name: "Wake to Slaughter",
      cost: ["3", "b", "r"],
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
          guide: "mid-flashback",
          categories: ["flashback"],
        },
      ],
    },
    {
      number: "251",
      name: "Winterthorn Blessing",
      cost: ["g", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "mid-flashback",
          categories: ["flashback"],
        },
        {
          guide: "removal",
          categories: ["tap"],
        },
      ],
    },
    {
      number: "252",
      name: "The Celestus",
      cost: ["3"],
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
          guide: "fixing",
        },
        {
          guide: "ramp",
        },
        {
          guide: "mid-day-night",
          categories: ["switch"],
        },
      ],
    },
    {
      number: "253",
      name: "Crossroads Candleguide",
      cost: ["4"],
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
      number: "254",
      name: "Jack-o'-Lantern",
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
      ],
    },
    {
      number: "255",
      name: "Moonsilver Key",
      cost: ["2"],
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
      number: "256",
      name: "Mystic Skull // Mystic Monstrosity",
      cost: ["2"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell", "creature"],
        },
        {
          guide: "fixing",
        },
        {
          guide: "mid-dfc",
        },
      ],
    },
    {
      number: "257",
      name: "Pithing Needle",
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
      number: "258",
      name: "Silver Bolt",
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
          guide: "mid-werewolf",
          categories: ["hate"],
        },
      ],
    },
    {
      number: "259",
      name: "Stuffed Bear",
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
      number: "260",
      name: "Deserted Beach",
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
      name: "Field of Ruin",
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
      name: "Haunted Ridge",
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
      number: "264",
      name: "Hostile Hostel // Creeping Inn",
      cost: [],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature", "land"],
        },
        {
          guide: "lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "mid-dfc",
        },
      ],
    },
    {
      number: "265",
      name: "Overgrown Farmland",
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
      name: "Rockfall Vale",
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
      name: "Shipwreck Marsh",
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
