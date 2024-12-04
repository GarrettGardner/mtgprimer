import type { IFormatConfig } from "@/models";

const format: IFormatConfig = {
  code: "mrd",
  name: "Mirrodin",
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
  },
  cards: [
    {
      number: "1",
      name: "Altar's Light",
      cost: ["2", "w", "w"],
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
      number: "2",
      name: "Arrest",
      cost: ["2", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "3",
      name: "Auriok Bladewarden",
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
      number: "4",
      name: "Auriok Steelshaper",
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
      number: "5",
      name: "Auriok Transfixer",
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
      number: "6",
      name: "Awe Strike",
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
      number: "7",
      name: "Blinding Beam",
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
      number: "8",
      name: "Leonin Abunas",
      cost: ["3", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "9",
      name: "Leonin Den-Guard",
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
      number: "10",
      name: "Leonin Elder",
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
      number: "11",
      name: "Leonin Skyhunter",
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
      number: "12",
      name: "Loxodon Mender",
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
      number: "13",
      name: "Loxodon Peacekeeper",
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
      number: "14",
      name: "Loxodon Punisher",
      cost: ["3", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "15",
      name: "Luminous Angel",
      cost: ["4", "w", "w", "w"],
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
      name: "Raise the Alarm",
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
      number: "17",
      name: "Razor Barrier",
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
      number: "18",
      name: "Roar of the Kha",
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
      number: "19",
      name: "Rule of Law",
      cost: ["2", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "20",
      name: "Second Sunrise",
      cost: ["1", "w", "w"],
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
      number: "21",
      name: "Skyhunter Cub",
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
      number: "22",
      name: "Skyhunter Patrol",
      cost: ["2", "w", "w"],
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
      name: "Slith Ascendant",
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
      number: "24",
      name: "Solar Tide",
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
      number: "25",
      name: "Soul Nova",
      cost: ["3", "w", "w"],
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
      number: "26",
      name: "Sphere of Purity",
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
      number: "27",
      name: "Taj-Nar Swordsmith",
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
      number: "28",
      name: "Tempest of Light",
      cost: ["2", "w"],
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
      number: "29",
      name: "Annul",
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
      ],
    },
    {
      number: "30",
      name: "Assert Authority",
      cost: ["5", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          categories: ["counterspell"],
          cost: ["u", "u"],
        },
      ],
    },
    {
      number: "31",
      name: "Broodstar",
      cost: ["8", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "32",
      name: "Disarm",
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
      number: "33",
      name: "Domineer",
      cost: ["1", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "34",
      name: "Dream's Grip",
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
      number: "35",
      name: "Fabricate",
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
      number: "36",
      name: "Fatespinner",
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
      number: "37",
      name: "Inertia Bubble",
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
      number: "38",
      name: "Looming Hoverguard",
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
      number: "39",
      name: "Lumengrid Augur",
      cost: ["3", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "40",
      name: "Lumengrid Sentinel",
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
      number: "41",
      name: "Lumengrid Warden",
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
      number: "42",
      name: "March of the Machines",
      cost: ["3", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "43",
      name: "Neurok Familiar",
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
      number: "44",
      name: "Neurok Spy",
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
      number: "45",
      name: "Override",
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
      ],
    },
    {
      number: "46",
      name: "Psychic Membrane",
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
      number: "47",
      name: "Quicksilver Elemental",
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
      number: "48",
      name: "Regress",
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
      name: "Shared Fate",
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
      number: "50",
      name: "Slith Strider",
      cost: ["1", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "51",
      name: "Somber Hoverguard",
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
      number: "52",
      name: "Temporal Cascade",
      cost: ["5", "u", "u"],
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
      number: "54",
      name: "Thoughtcast",
      cost: ["4", "u"],
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
      name: "Vedalken Archmage",
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
      number: "56",
      name: "Wanderguard Sentry",
      cost: ["4", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "57",
      name: "Barter in Blood",
      cost: ["2", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "58",
      name: "Betrayal of Flesh",
      cost: ["5", "b"],
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
      number: "59",
      name: "Chimney Imp",
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
      number: "60",
      name: "Consume Spirit",
      cost: ["x", "1", "b"],
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
      name: "Contaminated Bond",
      cost: ["1", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "62",
      name: "Disciple of the Vault",
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
      number: "63",
      name: "Dross Harvester",
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
      number: "64",
      name: "Dross Prowler",
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
      number: "65",
      name: "Flayed Nim",
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
      number: "66",
      name: "Grim Reminder",
      cost: ["2", "b"],
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
      number: "67",
      name: "Irradiate",
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
      ],
    },
    {
      number: "68",
      name: "Moriok Scavenger",
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
      number: "69",
      name: "Necrogen Mists",
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
      number: "70",
      name: "Nim Devourer",
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
      number: "71",
      name: "Nim Lasher",
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
      number: "72",
      name: "Nim Shambler",
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
      number: "73",
      name: "Nim Shrieker",
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
      number: "74",
      name: "Promise of Power",
      cost: ["2", "b", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "75",
      name: "Reiver Demon",
      cost: ["4", "b", "b", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "76",
      name: "Relic Bane",
      cost: ["1", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "77",
      name: "Slith Bloodletter",
      cost: ["b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "78",
      name: "Spoils of the Vault",
      cost: ["b"],
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
      number: "79",
      name: "Terror",
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
      number: "80",
      name: "Vermiculos",
      cost: ["4", "b"],
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
      name: "Wail of the Nim",
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
      ],
    },
    {
      number: "82",
      name: "Wall of Blood",
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
      number: "83",
      name: "Woebearer",
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
      number: "84",
      name: "Wrench Mind",
      cost: ["b", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "85",
      name: "Arc-Slogger",
      cost: ["3", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "86",
      name: "Atog",
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
      number: "87",
      name: "Confusion in the Ranks",
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
      number: "88",
      name: "Detonate",
      cost: ["x", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "89",
      name: "Electrostatic Bolt",
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
      number: "90",
      name: "Fiery Gambit",
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
      number: "91",
      name: "Fists of the Anvil",
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
      number: "92",
      name: "Forge Armor",
      cost: ["4", "r"],
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
      number: "93",
      name: "Fractured Loyalty",
      cost: ["1", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "94",
      name: "Goblin Striker",
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
      number: "95",
      name: "Grab the Reins",
      cost: ["3", "r"],
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
      number: "96",
      name: "Incite War",
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
      ],
    },
    {
      number: "97",
      name: "Krark-Clan Grunt",
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
      number: "98",
      name: "Krark-Clan Shaman",
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
      number: "99",
      name: "Mass Hysteria",
      cost: ["r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "100",
      name: "Megatog",
      cost: ["4", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "101",
      name: "Molten Rain",
      cost: ["1", "r", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "102",
      name: "Ogre Leadfoot",
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
      number: "103",
      name: "Rustmouth Ogre",
      cost: ["4", "r", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "104",
      name: "Seething Song",
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
      ],
    },
    {
      number: "105",
      name: "Shatter",
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
      number: "106",
      name: "Shrapnel Blast",
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
      number: "107",
      name: "Slith Firewalker",
      cost: ["r", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "108",
      name: "Spikeshot Goblin",
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
      number: "109",
      name: "Trash for Treasure",
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
      number: "110",
      name: "Vulshok Battlemaster",
      cost: ["4", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "111",
      name: "Vulshok Berserker",
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
      number: "112",
      name: "War Elemental",
      cost: ["r", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "113",
      name: "Battlegrowth",
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
      number: "114",
      name: "Bloodscent",
      cost: ["3", "g"],
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
      number: "115",
      name: "Brown Ouphe",
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
      number: "116",
      name: "Copperhoof Vorrac",
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
      number: "117",
      name: "Creeping Mold",
      cost: ["2", "g", "g"],
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
      name: "Deconstruct",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "119",
      name: "Fangren Hunter",
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
      number: "120",
      name: "Glissa Sunseeker",
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
      number: "121",
      name: "Groffskithur",
      cost: ["5", "g"],
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
      name: "Hum of the Radix",
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
      number: "123",
      name: "Journey of Discovery",
      cost: ["2", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "124",
      name: "Living Hive",
      cost: ["6", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "125",
      name: "Molder Slug",
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
      number: "126",
      name: "One Dozen Eyes",
      cost: ["5", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "127",
      name: "Plated Slagwurm",
      cost: ["4", "g", "g", "g"],
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
      name: "Predator's Strike",
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
      number: "129",
      name: "Slith Predator",
      cost: ["g", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "130",
      name: "Sylvan Scrying",
      cost: ["1", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "131",
      name: "Tel-Jilad Archers",
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
      number: "132",
      name: "Tel-Jilad Chosen",
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
      number: "133",
      name: "Tel-Jilad Exile",
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
      number: "134",
      name: "Tooth and Nail",
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
      number: "135",
      name: "Troll Ascetic",
      cost: ["1", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "136",
      name: "Trolls of Tel-Jilad",
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
      number: "137",
      name: "Turn to Dust",
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
      number: "138",
      name: "Viridian Joiner",
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
      number: "139",
      name: "Viridian Shaman",
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
      number: "140",
      name: "Wurmskin Forger",
      cost: ["5", "g", "g"],
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
      name: "\u00c3\u2020ther Spellbomb",
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
      number: "142",
      name: "Alpha Myr",
      cost: ["2"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "143",
      name: "Altar of Shadows",
      cost: ["7"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "144",
      name: "Banshee's Blade",
      cost: ["2"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "145",
      name: "Blinkmoth Urn",
      cost: ["5"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "146",
      name: "Bonesplitter",
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
      number: "147",
      name: "Bosh, Iron Golem",
      cost: ["8"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "148",
      name: "Bottle Gnomes",
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
      number: "149",
      name: "Cathodion",
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
      number: "150",
      name: "Chalice of the Void",
      cost: ["x", "x"],
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
      name: "Chromatic Sphere",
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
      number: "152",
      name: "Chrome Mox",
      cost: ["0"],
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
      name: "Clockwork Beetle",
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
      number: "154",
      name: "Clockwork Condor",
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
      number: "155",
      name: "Clockwork Dragon",
      cost: ["7"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "156",
      name: "Clockwork Vorrac",
      cost: ["5"],
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
      name: "Cobalt Golem",
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
      number: "158",
      name: "Copper Myr",
      cost: ["2"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "159",
      name: "Crystal Shard",
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
      number: "160",
      name: "Culling Scales",
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
      number: "161",
      name: "Damping Matrix",
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
      number: "162",
      name: "Dead-Iron Sledge",
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
      number: "163",
      name: "Dragon Blood",
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
      number: "164",
      name: "Dross Scorpion",
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
      number: "165",
      name: "Duplicant",
      cost: ["6"],
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
      name: "Duskworker",
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
      number: "167",
      name: "Elf Replica",
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
      number: "168",
      name: "Empyrial Plate",
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
      number: "169",
      name: "Extraplanar Lens",
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
      number: "170",
      name: "Farsight Mask",
      cost: ["5"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "171",
      name: "Fireshrieker",
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
      number: "172",
      name: "Frogmite",
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
      number: "173",
      name: "Galvanic Key",
      cost: ["2"],
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
      number: "174",
      name: "Gate to the \u00c3\u2020ther",
      cost: ["6"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "175",
      name: "Gilded Lotus",
      cost: ["5"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "176",
      name: "Goblin Charbelcher",
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
      number: "177",
      name: "Goblin Dirigible",
      cost: ["6"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "178",
      name: "Goblin Replica",
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
      number: "179",
      name: "Goblin War Wagon",
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
      number: "180",
      name: "Gold Myr",
      cost: ["2"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "181",
      name: "Golem-Skin Gauntlets",
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
      number: "182",
      name: "Granite Shard",
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
      number: "183",
      name: "Grid Monitor",
      cost: ["4"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "184",
      name: "Heartwood Shard",
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
      number: "185",
      name: "Hematite Golem",
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
      number: "186",
      name: "Icy Manipulator",
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
      number: "187",
      name: "Iron Myr",
      cost: ["2"],
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
      name: "Isochron Scepter",
      cost: ["2"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "189",
      name: "Jinxed Choker",
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
      number: "190",
      name: "Krark's Thumb",
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
      number: "191",
      name: "Leaden Myr",
      cost: ["2"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "192",
      name: "Leonin Bladetrap",
      cost: ["3"],
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
      number: "193",
      name: "Leonin Scimitar",
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
      number: "194",
      name: "Leonin Sun Standard",
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
      number: "195",
      name: "Leveler",
      cost: ["5"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "196",
      name: "Liar's Pendulum",
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
      number: "197",
      name: "Lifespark Spellbomb",
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
      number: "198",
      name: "Lightning Coils",
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
      number: "199",
      name: "Lightning Greaves",
      cost: ["2"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "200",
      name: "Lodestone Myr",
      cost: ["4"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "201",
      name: "Loxodon Warhammer",
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
      number: "202",
      name: "Malachite Golem",
      cost: ["6"],
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
      name: "Mask of Memory",
      cost: ["2"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "204",
      name: "Mesmeric Orb",
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
      number: "205",
      name: "Mind's Eye",
      cost: ["5"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "206",
      name: "Mindslaver",
      cost: ["6"],
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
      name: "Mindstorm Crown",
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
      number: "208",
      name: "Mirror Golem",
      cost: ["6"],
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
      name: "Mourner's Shield",
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
      number: "210",
      name: "Myr Adapter",
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
      number: "211",
      name: "Myr Enforcer",
      cost: ["7"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "212",
      name: "Myr Incubator",
      cost: ["6"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "213",
      name: "Myr Mindservant",
      cost: ["1"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "214",
      name: "Myr Prototype",
      cost: ["5"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "215",
      name: "Myr Retriever",
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
      number: "216",
      name: "Necrogen Spellbomb",
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
      number: "217",
      name: "Needlebug",
      cost: ["4"],
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
      number: "218",
      name: "Neurok Hoversail",
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
      number: "219",
      name: "Nightmare Lash",
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
      number: "220",
      name: "Nim Replica",
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
      number: "221",
      name: "Nuisance Engine",
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
      number: "222",
      name: "Oblivion Stone",
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
      number: "223",
      name: "Omega Myr",
      cost: ["2"],
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
      name: "Ornithopter",
      cost: ["0"],
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
      name: "Pearl Shard",
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
      number: "226",
      name: "Pentavus",
      cost: ["7"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "227",
      name: "Pewter Golem",
      cost: ["5"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "228",
      name: "Platinum Angel",
      cost: ["7"],
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
      name: "Power Conduit",
      cost: ["2"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "230",
      name: "Proteus Staff",
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
      number: "231",
      name: "Psychogenic Probe",
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
      number: "232",
      name: "Pyrite Spellbomb",
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
      number: "233",
      name: "Quicksilver Fountain",
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
      number: "234",
      name: "Rust Elemental",
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
      number: "235",
      name: "Rustspore Ram",
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
      number: "236",
      name: "Scale of Chiss-Goria",
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
          cost: [],
        },
      ],
    },
    {
      number: "237",
      name: "Scrabbling Claws",
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
      number: "238",
      name: "Sculpting Steel",
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
      number: "239",
      name: "Scythe of the Wretched",
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
      number: "240",
      name: "Serum Tank",
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
      number: "241",
      name: "Silver Myr",
      cost: ["2"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "242",
      name: "Skeleton Shard",
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
      number: "243",
      name: "Slagwurm Armor",
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
      number: "244",
      name: "Soldier Replica",
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
      number: "245",
      name: "Solemn Simulacrum",
      cost: ["4"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "246",
      name: "Soul Foundry",
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
      number: "247",
      name: "Spellweaver Helix",
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
      number: "248",
      name: "Steel Wall",
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
      number: "249",
      name: "Sun Droplet",
      cost: ["2"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "250",
      name: "Sunbeam Spellbomb",
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
      number: "251",
      name: "Sword of Kaldra",
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
      number: "252",
      name: "Synod Sanctum",
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
      number: "253",
      name: "Talisman of Dominance",
      cost: ["2"],
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
      name: "Talisman of Impulse",
      cost: ["2"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "255",
      name: "Talisman of Indulgence",
      cost: ["2"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "256",
      name: "Talisman of Progress",
      cost: ["2"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "257",
      name: "Talisman of Unity",
      cost: ["2"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "258",
      name: "Tanglebloom",
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
      number: "259",
      name: "Tangleroot",
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
      name: "Tel-Jilad Stylus",
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
      name: "Thought Prison",
      cost: ["5"],
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
      name: "Timesifter",
      cost: ["5"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "263",
      name: "Titanium Golem",
      cost: ["5"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "264",
      name: "Tooth of Chiss-Goria",
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
          cost: [],
        },
      ],
    },
    {
      number: "265",
      name: "Tower of Champions",
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
      number: "266",
      name: "Tower of Eons",
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
      number: "267",
      name: "Tower of Fortunes",
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
      number: "268",
      name: "Tower of Murmurs",
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
      number: "269",
      name: "Triskelion",
      cost: ["6"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "270",
      name: "Viridian Longbow",
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
      number: "271",
      name: "Vorrac Battlehorns",
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
      number: "272",
      name: "Vulshok Battlegear",
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
      number: "273",
      name: "Vulshok Gauntlets",
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
      number: "274",
      name: "Welding Jar",
      cost: ["0"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "275",
      name: "Wizard Replica",
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
      number: "276",
      name: "Worldslayer",
      cost: ["5"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "277",
      name: "Yotian Soldier",
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
      number: "278",
      name: "Ancient Den",
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
      number: "279",
      name: "Blinkmoth Well",
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
      number: "280",
      name: "Cloudpost",
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
      number: "281",
      name: "Glimmervoid",
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
      number: "282",
      name: "Great Furnace",
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
      number: "283",
      name: "Seat of the Synod",
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
      number: "284",
      name: "Stalking Stones",
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
      number: "285",
      name: "Tree of Tales",
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
      number: "286",
      name: "Vault of Whispers",
      cost: [],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
      ],
    },
  ],
};

export default format;
