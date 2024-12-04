import type { IFormatConfig } from "@/models";

const format: IFormatConfig = {
  code: "afr",
  name: "Adventures in the Forgotten Realms",
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
    "afr-dice": {
      name: "Mechanic: d20 Dice",
      icon: "fas fa-dice-d20",
      categories: {
        dice: "Dice Rolls",
        payoff: "Payoffs",
      },
    },
    "afr-dungeon": {
      name: "Mechanic: Dungeon",
      icon: "fas fa-dungeon",
      categories: {
        dungeon: "Dungeon",
        venture: "Venture",
        completed: "Completed/Extra",
      },
    },
    "afr-dragon": {
      name: "Theme: Dragons",
      icon: "fas fa-dragon",
      categories: {
        dragon: "Dragon Cards",
        payoff: "Payoffs",
      },
    },
    "afr-equipment": {
      name: "Theme: Equipment",
      icon: "fas fa-mitten",
      categories: {
        equipment: "Equipment",
        payoff: "Payoffs",
      },
    },
    "afr-lifegain": {
      name: "Theme: Lifegain",
      icon: "fas fa-notes-medical",
      categories: {
        lifegain: "Lifegain",
        payoff: "Payoffs",
      },
    },
    "afr-treasure": {
      name: "Theme: Treasures",
      icon: "fas fa-gem",
      categories: {
        treasure: "Treasure",
        payoff: "Payoffs",
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
      guides: ["afr-dice", "afr-dungeon", "afr-dragon", "afr-equipment", "afr-lifegain", "afr-treasure"],
    },
  },
  cards: [
    {
      number: "1",
      name: "+2 Mace",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "afr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "2",
      name: "Arborea Pegasus",
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
      number: "3",
      name: "Blink Dog",
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
      number: "4",
      name: "The Book of Exalted Deeds",
      cost: ["w", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "5",
      name: "Celestial Unicorn",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-lifegain",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "6",
      name: "Cleric Class",
      cost: ["w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "afr-lifegain",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "7",
      name: "Cloister Gargoyle",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture", "completed"],
        },
      ],
    },
    {
      number: "8",
      name: "Dancing Sword",
      cost: ["1", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "afr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "9",
      name: "Dawnbringer Cleric",
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
        {
          guide: "lifegain",
        },
        {
          guide: "afr-lifegain",
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "10",
      name: "Delver's Torch",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture"],
        },
        {
          guide: "afr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "11",
      name: "Devoted Paladin",
      cost: ["4", "w"],
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
      number: "12",
      name: "Divine Smite",
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
          categories: ["temporary"],
        },
      ],
    },
    {
      number: "13",
      name: "Dragon's Disciple",
      cost: ["1", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dragon",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "14",
      name: "Dwarfhold Champion",
      cost: ["1", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-equipment",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "15",
      name: "Flumph",
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
      number: "16",
      name: "Gloom Stalker",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dungeon",
          categories: ["completed"],
        },
      ],
    },
    {
      number: "17",
      name: "Grand Master of Flowers",
      cost: ["2", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "afr-dragon",
          categories: ["dragon"],
        },
      ],
    },
    {
      number: "18",
      name: "Guardian of Faith",
      cost: ["1", "w", "w"],
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
      number: "19",
      name: "Half-Elf Monk",
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
      number: "20",
      name: "Icingdeath, Frost Tyrant",
      cost: ["2", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dragon",
          categories: ["dragon"],
        },
      ],
    },
    {
      number: "21",
      name: "Ingenious Smith",
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
      number: "22",
      name: "Keen-Eared Sentry",
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
      number: "23",
      name: "Loyal Warhound",
      cost: ["1", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ramp",
          categories: ["traditional"],
        },
      ],
    },
    {
      number: "24",
      name: "Minimus Containment",
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
          guide: "ramp",
          categories: ["treasure"],
        },
        {
          guide: "fixing",
          categories: ["treasure"],
        },
        {
          guide: "afr-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "25",
      name: "Monk of the Open Hand",
      cost: ["w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "26",
      name: "Moon-Blessed Cleric",
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
      number: "27",
      name: "Nadaar, Selfless Paladin",
      cost: ["2", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture", "completed"],
        },
        {
          guide: "masspump",
        },
        {
          guide: "afr-dragon",
          categories: ["dragon"],
        },
      ],
    },
    {
      number: "28",
      name: "Oswald Fiddlebender",
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
      number: "29",
      name: "Paladin Class",
      cost: ["w"],
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
      number: "30",
      name: "Paladin's Shield",
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
          guide: "afr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "31",
      name: "Planar Ally",
      cost: ["3", "w", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture"],
        },
      ],
    },
    {
      number: "32",
      name: "Plate Armor",
      cost: ["2", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "afr-equipment",
          categories: ["equipment", "payoff"],
        },
      ],
    },
    {
      number: "33",
      name: "Portable Hole",
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
      number: "34",
      name: "Potion of Healing",
      cost: ["1", "w"],
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
          guide: "afr-lifegain",
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "35",
      name: "Priest of Ancient Lore",
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
          guide: "afr-lifegain",
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "36",
      name: "Rally Maneuver",
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
          guide: "lifegain",
        },
        {
          guide: "afr-lifegain",
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "37",
      name: "Ranger's Hawk",
      cost: ["w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture"],
        },
      ],
    },
    {
      number: "38",
      name: "Steadfast Paladin",
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
          guide: "afr-lifegain",
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "39",
      name: "Teleportation Circle",
      cost: ["3", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "40",
      name: "Veteran Dungeoneer",
      cost: ["3", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture"],
        },
      ],
    },
    {
      number: "41",
      name: "White Dragon",
      cost: ["4", "w", "w"],
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
          guide: "afr-dragon",
          categories: ["dragon"],
        },
      ],
    },
    {
      number: "42",
      name: "You Hear Something on Watch",
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
          guide: "masspump",
        },
      ],
    },
    {
      number: "43",
      name: "You're Ambushed on the Road",
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
      number: "44",
      name: "Aberrant Mind Sorcerer",
      cost: ["4", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dice",
          categories: ["dice"],
        },
      ],
    },
    {
      number: "45",
      name: "Air-Cult Elemental",
      cost: ["4", "u", "u"],
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
      number: "46",
      name: "Arcane Investigator",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dice",
          categories: ["dice"],
        },
      ],
    },
    {
      number: "47",
      name: "Bar the Gate",
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
          guide: "afr-dungeon",
          categories: ["venture"],
        },
      ],
    },
    {
      number: "48",
      name: "The Blackstaff of Waterdeep",
      cost: ["u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "49",
      name: "Blue Dragon",
      cost: ["5", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dragon",
          categories: ["dragon"],
        },
      ],
    },
    {
      number: "50",
      name: "Charmed Sleep",
      cost: ["1", "u", "u"],
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
      number: "51",
      name: "Clever Conjurer",
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
      number: "52",
      name: "Contact Other Plane",
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
          guide: "afr-dice",
          categories: ["dice"],
        },
      ],
    },
    {
      number: "53",
      name: "Demilich",
      cost: ["u", "u", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "54",
      name: "Displacer Beast",
      cost: ["2", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture"],
        },
      ],
    },
    {
      number: "55",
      name: "Djinni Windseer",
      cost: ["3", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dice",
          categories: ["dice"],
        },
      ],
    },
    {
      number: "56",
      name: "Dragon Turtle",
      cost: ["1", "u", "u"],
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
          categories: ["temporary"],
        },
        {
          guide: "afr-dragon",
          categories: ["dragon"],
        },
      ],
    },
    {
      number: "57",
      name: "Eccentric Apprentice",
      cost: ["2", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture", "completed"],
        },
      ],
    },
    {
      number: "58",
      name: "Feywild Trickster",
      cost: ["2", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dice",
          categories: ["payoff"],
        },
        {
          guide: "afr-dragon",
          categories: ["dragon"],
        },
      ],
    },
    {
      number: "59",
      name: "Fly",
      cost: ["u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture"],
        },
      ],
    },
    {
      number: "60",
      name: "Grazilaxx, Illithid Scholar",
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
      number: "61",
      name: "Guild Thief",
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
      number: "62",
      name: "Iymrith, Desert Doom",
      cost: ["3", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dragon",
          categories: ["dragon"],
        },
      ],
    },
    {
      number: "63",
      name: "Mind Flayer",
      cost: ["3", "u", "u"],
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
      number: "64",
      name: "Mordenkainen",
      cost: ["4", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "65",
      name: "Mordenkainen's Polymorph",
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
          guide: "afr-dragon",
          categories: ["dragon"],
        },
      ],
    },
    {
      number: "66",
      name: "Pixie Guide",
      cost: ["1", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dice",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "67",
      name: "Power of Persuasion",
      cost: ["2", "u"],
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
          guide: "mindcontrol",
        },
        {
          guide: "afr-dice",
          categories: ["dice"],
        },
      ],
    },
    {
      number: "68",
      name: "Ray of Frost",
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
          categories: ["removal"],
        },
      ],
    },
    {
      number: "69",
      name: "Rimeshield Frost Giant",
      cost: ["3", "u", "u"],
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
      name: "Scion of Stygia",
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
          guide: "removal",
          categories: ["temporary"],
        },
        {
          guide: "afr-dice",
          categories: ["dice"],
        },
      ],
    },
    {
      number: "71",
      name: "Secret Door",
      cost: ["u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture"],
        },
      ],
    },
    {
      number: "72",
      name: "Shocking Grasp",
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
      number: "73",
      name: "Shortcut Seeker",
      cost: ["3", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture"],
        },
      ],
    },
    {
      number: "74",
      name: "Silver Raven",
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
      number: "75",
      name: "Soulknife Spy",
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
      number: "76",
      name: "Split the Party",
      cost: ["3", "u", "u"],
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
      ],
    },
    {
      number: "77",
      name: "Sudden Insight",
      cost: ["4", "u", "u"],
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
      number: "78",
      name: "Tasha's Hideous Laughter",
      cost: ["1", "u", "u"],
      rarity: "r",
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
      number: "79",
      name: "Trickster's Talisman",
      cost: ["u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "afr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "80",
      name: "True Polymorph",
      cost: ["4", "u", "u"],
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
      number: "81",
      name: "Wizard Class",
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
      number: "82",
      name: "Wizard's Spellbook",
      cost: ["5", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "afr-dice",
          categories: ["dice"],
        },
      ],
    },
    {
      number: "83",
      name: "You Come to a River",
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
      number: "84",
      name: "You Find the Villains' Lair",
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
      number: "85",
      name: "You See a Guard Approach",
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
      number: "86",
      name: "Yuan-Ti Malison",
      cost: ["1", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture"],
        },
      ],
    },
    {
      number: "87",
      name: "Acererak the Archlich",
      cost: ["2", "b"],
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
          guide: "afr-dungeon",
          categories: ["venture", "completed"],
        },
      ],
    },
    {
      number: "88",
      name: "Asmodeus the Archfiend",
      cost: ["4", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "89",
      name: "Baleful Beholder",
      cost: ["4", "b", "b"],
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
      number: "90",
      name: "Black Dragon",
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
          guide: "afr-dragon",
          categories: ["dragon"],
        },
      ],
    },
    {
      number: "91",
      name: "The Book of Vile Darkness",
      cost: ["b", "b", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "92",
      name: "Check for Traps",
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
      number: "93",
      name: "Clattering Skeletons",
      cost: ["3", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture"],
        },
      ],
    },
    {
      number: "94",
      name: "Deadly Dispute",
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
        {
          guide: "fixing",
          categories: ["treasure"],
        },
        {
          guide: "ramp",
          categories: ["treasure"],
        },
        {
          guide: "afr-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "95",
      name: "Death-Priest of Myrkul",
      cost: ["2", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "96",
      name: "Demogorgon's Clutches",
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
          guide: "mill",
        },
      ],
    },
    {
      number: "97",
      name: "Devour Intellect",
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
        {
          guide: "afr-treasure",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "98",
      name: "Drider",
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
      name: "Dungeon Crawler",
      cost: ["b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dungeon",
          categories: ["completed"],
        },
      ],
    },
    {
      number: "100",
      name: "Ebondeath, Dracolich",
      cost: ["2", "b", "b"],
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
          guide: "afr-dragon",
          categories: ["dragon"],
        },
      ],
    },
    {
      number: "101",
      name: "Eyes of the Beholder",
      cost: ["4", "b", "b"],
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
      number: "102",
      name: "Fates' Reversal",
      cost: ["1", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture"],
        },
      ],
    },
    {
      number: "103",
      name: "Feign Death",
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
      number: "104",
      name: "Forsworn Paladin",
      cost: ["b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "fixing",
          categories: ["treasure"],
        },
        {
          guide: "ramp",
          categories: ["treasure"],
        },
        {
          guide: "afr-treasure",
          categories: ["treasure", "payoff"],
        },
      ],
    },
    {
      number: "105",
      name: "Gelatinous Cube",
      cost: ["2", "b", "b"],
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
      number: "106",
      name: "Grim Bounty",
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
        {
          guide: "fixing",
          categories: ["treasure"],
        },
        {
          guide: "ramp",
          categories: ["treasure"],
        },
        {
          guide: "afr-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "107",
      name: "Grim Wanderer",
      cost: ["1", "b"],
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
      number: "108",
      name: "Herald of Hadar",
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
          guide: "fixing",
          categories: ["treasure"],
        },
        {
          guide: "ramp",
          categories: ["treasure"],
        },
        {
          guide: "afr-dice",
          categories: ["dice"],
        },
        {
          guide: "afr-lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "afr-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "109",
      name: "Hired Hexblade",
      cost: ["1", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-treasure",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "110",
      name: "Hoard Robber",
      cost: ["1", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "fixing",
          categories: ["treasure"],
        },
        {
          guide: "ramp",
          categories: ["treasure"],
        },
        {
          guide: "afr-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "111",
      name: "Lightfoot Rogue",
      cost: ["1", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dice",
          categories: ["dice"],
        },
      ],
    },
    {
      number: "112",
      name: "Lolth, Spider Queen",
      cost: ["3", "b", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "113",
      name: "Manticore",
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
      number: "114",
      name: "Power Word Kill",
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
      number: "115",
      name: "Precipitous Drop",
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
          guide: "afr-dungeon",
          categories: ["venture", "completed"],
        },
      ],
    },
    {
      number: "116",
      name: "Ray of Enfeeblement",
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
        {
          guide: "ping",
        },
      ],
    },
    {
      number: "117",
      name: "Reaper's Talisman",
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
          guide: "afr-lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "afr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "118",
      name: "Sepulcher Ghoul",
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
      number: "119",
      name: "Shambling Ghast",
      cost: ["b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "fixing",
          categories: ["treasure"],
        },
        {
          guide: "ramp",
          categories: ["treasure"],
        },
        {
          guide: "ping",
        },
        {
          guide: "afr-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "120",
      name: "Skullport Merchant",
      cost: ["2", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "fixing",
          categories: ["treasure"],
        },
        {
          guide: "ramp",
          categories: ["treasure"],
        },
        {
          guide: "afr-treasure",
          categories: ["treasure", "payoff"],
        },
      ],
    },
    {
      number: "121",
      name: "Sphere of Annihilation",
      cost: ["x", "b"],
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
      number: "122",
      name: "Thieves' Tools",
      cost: ["1", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "fixing",
          categories: ["treasure"],
        },
        {
          guide: "ramp",
          categories: ["treasure"],
        },
        {
          guide: "afr-treasure",
          categories: ["treasure"],
        },
        {
          guide: "afr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "123",
      name: "Vampire Spawn",
      cost: ["2", "b"],
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
          guide: "afr-lifegain",
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "124",
      name: "Vorpal Sword",
      cost: ["b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "afr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "125",
      name: "Warlock Class",
      cost: ["b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "126",
      name: "Westgate Regent",
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
      number: "127",
      name: "Wight",
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
      number: "128",
      name: "Yuan-Ti Fang-Blade",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture"],
        },
      ],
    },
    {
      number: "129",
      name: "Zombie Ogre",
      cost: ["3", "b", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture"],
        },
      ],
    },
    {
      number: "130",
      name: "Armory Veteran",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-equipment",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "131",
      name: "Barbarian Class",
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
          guide: "afr-dice",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "132",
      name: "Battle Cry Goblin",
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
      number: "133",
      name: "Boots of Speed",
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
          guide: "afr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "134",
      name: "Brazen Dwarf",
      cost: ["1", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dice",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "135",
      name: "Burning Hands",
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
      number: "136",
      name: "Chaos Channeler",
      cost: ["2", "r", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dice",
          categories: ["dice"],
        },
      ],
    },
    {
      number: "137",
      name: "Critical Hit",
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
          guide: "afr-dice",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "138",
      name: "Delina, Wild Mage",
      cost: ["3", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dice",
          categories: ["dice"],
        },
      ],
    },
    {
      number: "139",
      name: "Dragon's Fire",
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
          guide: "afr-dragon",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "140",
      name: "Dueling Rapier",
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
          guide: "afr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "141",
      name: "Earth-Cult Elemental",
      cost: ["4", "r", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dice",
          categories: ["dice"],
        },
      ],
    },
    {
      number: "142",
      name: "Farideh's Fireball",
      cost: ["3", "r", "r"],
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
          guide: "afr-dice",
          categories: ["dice"],
        },
      ],
    },
    {
      number: "143",
      name: "Flameskull",
      cost: ["1", "r", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "144",
      name: "Goblin Javelineer",
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
      number: "145",
      name: "Goblin Morningstar",
      cost: ["1", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "afr-dice",
          categories: ["dice"],
        },
        {
          guide: "afr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "146",
      name: "Hoarding Ogre",
      cost: ["3", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "fixing",
          categories: ["treasure"],
        },
        {
          guide: "ramp",
          categories: ["treasure"],
        },
        {
          guide: "afr-dice",
          categories: ["dice"],
        },
        {
          guide: "afr-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "147",
      name: "Hobgoblin Bandit Lord",
      cost: ["1", "r", "r"],
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
      number: "148",
      name: "Hobgoblin Captain",
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
      number: "149",
      name: "Hulking Bugbear",
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
      number: "150",
      name: "Improvised Weaponry",
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
          guide: "fixing",
          categories: ["treasure"],
        },
        {
          guide: "ramp",
          categories: ["treasure"],
        },
        {
          guide: "afr-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "151",
      name: "Inferno of the Star Mounts",
      cost: ["4", "r", "r"],
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
          guide: "afr-dragon",
          categories: ["dragon"],
        },
      ],
    },
    {
      number: "152",
      name: "Jaded Sell-Sword",
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
          guide: "afr-treasure",
          categories: ["payoff"],
        },
        {
          guide: "afr-dragon",
          categories: ["dragon"],
        },
      ],
    },
    {
      number: "153",
      name: "Kick in the Door",
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
          guide: "afr-dungeon",
          categories: ["venture"],
        },
      ],
    },
    {
      number: "154",
      name: "Magic Missile",
      cost: ["1", "r", "r"],
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
          guide: "ping",
        },
      ],
    },
    {
      number: "155",
      name: "Meteor Swarm",
      cost: ["x", "r", "r", "r"],
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
        },
      ],
    },
    {
      number: "156",
      name: "Minion of the Mighty",
      cost: ["r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dragon",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "157",
      name: "Orb of Dragonkind",
      cost: ["1", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "afr-dragon",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "158",
      name: "Plundering Barbarian",
      cost: ["2", "r"],
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
          guide: "fixing",
          categories: ["treasure"],
        },
        {
          guide: "ramp",
          categories: ["treasure"],
        },
        {
          guide: "afr-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "159",
      name: "Price of Loyalty",
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
          guide: "afr-treasure",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "160",
      name: "Red Dragon",
      cost: ["4", "r", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dragon",
          categories: ["dragon"],
        },
      ],
    },
    {
      number: "161",
      name: "Rust Monster",
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
      number: "162",
      name: "Swarming Goblins",
      cost: ["4", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dice",
          categories: ["dice"],
        },
      ],
    },
    {
      number: "163",
      name: "Tiger-Tribe Hunter",
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
      ],
    },
    {
      number: "164",
      name: "Unexpected Windfall",
      cost: ["2", "r", "r"],
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
          guide: "fixing",
          categories: ["treasure"],
        },
        {
          guide: "ramp",
          categories: ["treasure"],
        },
        {
          guide: "afr-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "165",
      name: "Valor Singer",
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
      number: "166",
      name: "Wish",
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
      number: "167",
      name: "Xorn",
      cost: ["2", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-treasure",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "168",
      name: "You Come to the Gnoll Camp",
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
          guide: "falter",
        },
      ],
    },
    {
      number: "169",
      name: "You Find Some Prisoners",
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
          guide: "disenchant",
        },
      ],
    },
    {
      number: "170",
      name: "You See a Pair of Goblins",
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
          guide: "masspump",
        },
      ],
    },
    {
      number: "171",
      name: "Zalto, Fire Giant Duke",
      cost: ["3", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture"],
        },
      ],
    },
    {
      number: "172",
      name: "Zariel, Archduke of Avernus",
      cost: ["2", "r", "r"],
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
          guide: "ping",
        },
      ],
    },
    {
      number: "173",
      name: "Bulette",
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
      number: "174",
      name: "Bull's Strength",
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
      number: "175",
      name: "Choose Your Weapon",
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
      number: "176",
      name: "Circle of Dreams Druid",
      cost: ["g", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ramp",
          categories: ["traditional"],
        },
      ],
    },
    {
      number: "177",
      name: "Circle of the Moon Druid",
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
      number: "178",
      name: "Compelled Duel",
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
      number: "179",
      name: "Dire Wolf Prowler",
      cost: ["2", "g"],
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
      number: "180",
      name: "Druid Class",
      cost: ["1", "g"],
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
          guide: "ramp",
          categories: ["traditional"],
        },
        {
          guide: "afr-lifegain",
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "181",
      name: "Ellywick Tumblestrum",
      cost: ["2", "g", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture", "completed"],
        },
      ],
    },
    {
      number: "182",
      name: "Elturgard Ranger",
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
      number: "183",
      name: "Find the Path",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "ramp",
          categories: ["traditional"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture"],
        },
      ],
    },
    {
      number: "184",
      name: "Froghemoth",
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
          guide: "afr-lifegain",
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "185",
      name: "Gnoll Hunter",
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
      number: "186",
      name: "Green Dragon",
      cost: ["4", "g", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dragon",
          categories: ["dragon"],
        },
      ],
    },
    {
      number: "187",
      name: "Hill Giant Herdgorger",
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
        {
          guide: "afr-lifegain",
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "188",
      name: "Hunter's Mark",
      cost: ["3", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
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
      ],
    },
    {
      number: "189",
      name: "Inspiring Bard",
      cost: ["3", "g"],
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
          guide: "afr-lifegain",
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "190",
      name: "Instrument of the Bards",
      cost: ["g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "fixing",
          categories: ["treasure"],
        },
        {
          guide: "ramp",
          categories: ["treasure"],
        },
        {
          guide: "afr-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "191",
      name: "Intrepid Outlander",
      cost: ["1", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture"],
        },
      ],
    },
    {
      number: "192",
      name: "Loathsome Troll",
      cost: ["3", "g", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dice",
          categories: ["dice"],
        },
      ],
    },
    {
      number: "193",
      name: "Long Rest",
      cost: ["x", "g", "g", "g"],
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
      name: "Lurking Roper",
      cost: ["2", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-lifegain",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "195",
      name: "Neverwinter Dryad",
      cost: ["g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ramp",
          categories: ["traditional"],
        },
      ],
    },
    {
      number: "196",
      name: "Ochre Jelly",
      cost: ["x", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "197",
      name: "Old Gnawbone",
      cost: ["5", "g", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "fixing",
          categories: ["treasure"],
        },
        {
          guide: "ramp",
          categories: ["treasure"],
        },
        {
          guide: "afr-treasure",
          categories: ["treasure"],
        },
        {
          guide: "afr-dragon",
          categories: ["dragon"],
        },
      ],
    },
    {
      number: "198",
      name: "Owlbear",
      cost: ["3", "g", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "199",
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
      number: "200",
      name: "Prosperous Innkeeper",
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
          guide: "fixing",
          categories: ["treasure"],
        },
        {
          guide: "ramp",
          categories: ["treasure"],
        },
        {
          guide: "afr-lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "afr-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "201",
      name: "Purple Worm",
      cost: ["5", "g", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "202",
      name: "Ranger Class",
      cost: ["1", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "203",
      name: "Ranger's Longbow",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "afr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "204",
      name: "Scaled Herbalist",
      cost: ["1", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ramp",
          categories: ["traditional"],
        },
      ],
    },
    {
      number: "205",
      name: "Spoils of the Hunt",
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
          guide: "afr-treasure",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "206",
      name: "Sylvan Shepherd",
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
          guide: "afr-dice",
          categories: ["dice"],
        },
        {
          guide: "afr-lifegain",
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "207",
      name: "The Tarrasque",
      cost: ["6", "g", "g", "g"],
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
      ],
    },
    {
      number: "208",
      name: "Underdark Basilisk",
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
      number: "209",
      name: "Varis, Silverymoon Ranger",
      cost: ["1", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture", "completed"],
        },
      ],
    },
    {
      number: "210",
      name: "Wandering Troubadour",
      cost: ["3", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture"],
        },
        {
          guide: "afr-dragon",
          categories: ["dragon"],
        },
      ],
    },
    {
      number: "211",
      name: "Werewolf Pack Leader",
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
      number: "212",
      name: "Wild Shape",
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
      ],
    },
    {
      number: "213",
      name: "You Find a Cursed Idol",
      cost: ["1", "g"],
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
          guide: "fixing",
          categories: ["treasure"],
        },
        {
          guide: "ramp",
          categories: ["treasure"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture"],
        },
        {
          guide: "afr-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "214",
      name: "You Happen On a Glade",
      cost: ["2", "g"],
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
          guide: "fixing",
          categories: ["traditional"],
        },
      ],
    },
    {
      number: "215",
      name: "You Meet in a Tavern",
      cost: ["2", "g", "g"],
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
      number: "216",
      name: "Adult Gold Dragon",
      cost: ["3", "r", "w"],
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
          guide: "afr-dragon",
          categories: ["dragon"],
        },
        {
          guide: "afr-lifegain",
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "217",
      name: "Bard Class",
      cost: ["r", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "218",
      name: "Barrowin of Clan Undurr",
      cost: ["2", "w", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture", "completed"],
        },
      ],
    },
    {
      number: "219",
      name: "Bruenor Battlehammer",
      cost: ["2", "r", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-equipment",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "220",
      name: "Drizzt Do'Urden",
      cost: ["3", "g", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "221",
      name: "Farideh, Devil's Chosen",
      cost: ["2", "u", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dice",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "222",
      name: "Fighter Class",
      cost: ["r", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "afr-equipment",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "223",
      name: "Gretchen Titchwillow",
      cost: ["g", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "ramp",
          categories: ["traditional"],
        },
      ],
    },
    {
      number: "224",
      name: "Hama Pashar, Ruin Seeker",
      cost: ["1", "w", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dungeon",
          categories: ["completed"],
        },
      ],
    },
    {
      number: "225",
      name: "Kalain, Reclusive Painter",
      cost: ["b", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-treasure",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "226",
      name: "Krydle of Baldur's Gate",
      cost: ["u", "b"],
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
          guide: "lifegain",
        },
        {
          guide: "afr-lifegain",
          categories: ["lifegain"],
        },
      ],
    },
    {
      number: "227",
      name: "Minsc, Beloved Ranger",
      cost: ["r", "g", "w"],
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
      number: "228",
      name: "Monk Class",
      cost: ["w", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "229",
      name: "Orcus, Prince of Undeath",
      cost: ["x", "2", "b", "r"],
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
          guide: "haste",
        },
      ],
    },
    {
      number: "230",
      name: "Rogue Class",
      cost: ["u", "b"],
      rarity: "r",
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
      number: "231",
      name: "Shessra, Death's Whisper",
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
      number: "232",
      name: "Skeletal Swarming",
      cost: ["3", "b", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "233",
      name: "Sorcerer Class",
      cost: ["u", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "234",
      name: "Targ Nar, Demon-Fang Gnoll",
      cost: ["r", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "235",
      name: "Tiamat",
      cost: ["2", "w", "u", "b", "r", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dragon",
          categories: ["dragon", "payoff"],
        },
      ],
    },
    {
      number: "236",
      name: "Trelasarra, Moon Dancer",
      cost: ["g", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-lifegain",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "237",
      name: "Triumphant Adventurer",
      cost: ["w", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture"],
        },
      ],
    },
    {
      number: "238",
      name: "Volo, Guide to Monsters",
      cost: ["2", "g", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "239",
      name: "Xanathar, Guild Kingpin",
      cost: ["4", "u", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "240",
      name: "Bag of Holding",
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
      name: "The Deck of Many Things",
      cost: ["5"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "afr-dice",
          categories: ["dice"],
        },
      ],
    },
    {
      number: "242",
      name: "Dungeon Map",
      cost: ["3"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture"],
        },
      ],
    },
    {
      number: "243",
      name: "Eye of Vecna",
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
      number: "244",
      name: "Fifty Feet of Rope",
      cost: ["1"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture"],
        },
      ],
    },
    {
      number: "245",
      name: "Greataxe",
      cost: ["1"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "afr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "246",
      name: "Hand of Vecna",
      cost: ["3"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "afr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "247",
      name: "Iron Golem",
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
      number: "248",
      name: "Leather Armor",
      cost: ["1"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "afr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "249",
      name: "Mimic",
      cost: ["2"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "fixing",
          categories: ["treasure"],
        },
        {
          guide: "ramp",
          categories: ["treasure"],
        },
        {
          guide: "afr-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "250",
      name: "Spare Dagger",
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
          guide: "ping",
        },
        {
          guide: "afr-equipment",
          categories: ["equipment"],
        },
      ],
    },
    {
      number: "251",
      name: "Spiked Pit Trap",
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
        {
          guide: "fixing",
          categories: ["treasure"],
        },
        {
          guide: "ramp",
          categories: ["treasure"],
        },
        {
          guide: "afr-dice",
          categories: ["dice"],
        },
        {
          guide: "afr-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "252",
      name: "Treasure Chest",
      cost: ["3"],
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
          guide: "fixing",
          categories: ["treasure"],
        },
        {
          guide: "ramp",
          categories: ["treasure"],
        },
        {
          guide: "afr-dice",
          categories: ["dice"],
        },
        {
          guide: "afr-lifegain",
          categories: ["lifegain"],
        },
        {
          guide: "afr-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "253",
      name: "Cave of the Frost Dragon",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "afr-dragon",
          categories: ["dragon"],
        },
      ],
    },
    {
      number: "254",
      name: "Den of the Bugbear",
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
      number: "255",
      name: "Dungeon Descent",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "afr-dungeon",
          categories: ["venture"],
        },
      ],
    },
    {
      number: "256",
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
          categories: ["traditional"],
        },
      ],
    },
    {
      number: "257",
      name: "Hall of Storm Giants",
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
      number: "258",
      name: "Hive of the Eye Tyrant",
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
      number: "259",
      name: "Lair of the Hydra",
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
      name: "Temple of the Dragon Queen",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "fixing",
          categories: ["traditional"],
        },
        {
          guide: "afr-dragon",
          categories: ["payoff"],
        },
      ],
    },
    {
      number: "261",
      name: "Treasure Vault",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "fixing",
          categories: ["treasure"],
        },
        {
          guide: "ramp",
          categories: ["treasure"],
        },
        {
          guide: "afr-treasure",
          categories: ["treasure"],
        },
      ],
    },
    {
      number: "t020",
      name: "Dungeon of the Mad Mage",
      cost: [],
      rarity: "c",
      guides: [
        {
          guide: "afr-dungeon",
          categories: ["dungeon"],
        },
      ],
    },
    {
      number: "t021",
      name: "Loast Mine of Phandelver",
      cost: [],
      rarity: "c",
      guides: [
        {
          guide: "afr-dungeon",
          categories: ["dungeon"],
        },
      ],
    },
    {
      number: "t022",
      name: "Tomb of Annihilation",
      cost: [],
      rarity: "c",
      guides: [
        {
          guide: "afr-dungeon",
          categories: ["dungeon"],
        },
      ],
    },
  ],
};

export default format;
