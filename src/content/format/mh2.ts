import type { IFormatConfig } from "@/models";

const format: IFormatConfig = {
  code: "mh2",
  name: "Modern Horizons 2",
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
    removal: {
      name: "Removal Guide",
      defaultGrouping: "color",
      defaultOrdering: "rarity",
      categories: {
        removal: "Removal",
        bounce: "Bounce",
        temporary: "Temporary",
        boardwipe: "Board Wipe",
        other: "Other",
      },
    },
  },
  cards: [
    {
      number: "1",
      name: "Abiding Grace",
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
      number: "2",
      name: "Arcbound Javelineer",
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
      number: "3",
      name: "Arcbound Mouser",
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
      number: "4",
      name: "Arcbound Prototype",
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
      number: "5",
      name: "Barbed Spike",
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
      number: "6",
      name: "Blacksmith's Skill",
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
      name: "Blossoming Calm",
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
      number: "8",
      name: "Break Ties",
      cost: ["2", "w"],
      rarity: "c",
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
      ],
    },
    {
      number: "9",
      name: "Caprichrome",
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
      ],
    },
    {
      number: "10",
      name: "Constable of the Realm",
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
      number: "11",
      name: "Disciple of the Sun",
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
      number: "12",
      name: "Esper Sentinel",
      cost: ["w"],
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
      name: "Fairgrounds Patrol",
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
      number: "14",
      name: "Glorious Enforcer",
      cost: ["5", "w", "w"],
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
      name: "Guardian Kirin",
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
      number: "16",
      name: "Healer's Flock",
      cost: ["w", "w", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "17",
      name: "Knighted Myr",
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
      number: "18",
      name: "Landscaper Colos",
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
      number: "19",
      name: "Late to Dinner",
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
      number: "20",
      name: "Lens Flare",
      cost: ["4", "w"],
      rarity: "c",
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
      ],
    },
    {
      number: "21",
      name: "Marble Gargoyle",
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
      name: "Nykthos Paragon",
      cost: ["4", "w", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "23",
      name: "Out of Time",
      cost: ["1", "w", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "24",
      name: "Piercing Rays",
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
      number: "25",
      name: "Prismatic Ending",
      cost: ["x", "w"],
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
      name: "Resurgent Belief",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "27",
      name: "Sanctifier en-Vec",
      cost: ["w", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "28",
      name: "Scour the Desert",
      cost: ["3", "w", "w"],
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
      name: "Search the Premises",
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
      number: "30",
      name: "Serra's Emissary",
      cost: ["4", "w", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "31",
      name: "Skyblade's Boon",
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
      number: "32",
      name: "Solitude",
      cost: ["3", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          cost: ["0"],
          categories: ["board"],
        },
      ],
    },
    {
      number: "33",
      name: "Soul of Migration",
      cost: ["5", "w", "w"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "34",
      name: "Thraben Watcher",
      cost: ["2", "w", "w"],
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
      name: "Timeless Dragon",
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
      number: "36",
      name: "Unbounded Potential",
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
      number: "37",
      name: "Aeromoeba",
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
      number: "38",
      name: "Burdened Aerialist",
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
      number: "39",
      name: "Dress Down",
      cost: ["1", "u"],
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
      number: "40",
      name: "Etherium Spinner",
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
      number: "41",
      name: "Filigree Attendant",
      cost: ["2", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "42",
      name: "Floodhound",
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
      number: "43",
      name: "Foul Watcher",
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
      name: "Fractured Sanity",
      cost: ["u", "u", "u"],
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
      name: "Ghost-Lit Drifter",
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
      number: "46",
      name: "Hard Evidence",
      cost: ["u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "47",
      name: "Inevitable Betrayal",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "48",
      name: "Junk Winder",
      cost: ["5", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "49",
      name: "Lose Focus",
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
      ],
    },
    {
      number: "50",
      name: "Lucid Dreams",
      cost: ["3", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "51",
      name: "Mental Journey",
      cost: ["4", "u", "u"],
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
      number: "52",
      name: "Murktide Regent",
      cost: ["5", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "53",
      name: "Mystic Redaction",
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
      number: "54",
      name: "Parcel Myr",
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
      number: "55",
      name: "Phantasmal Dreadmaw",
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
      name: "Raving Visionary",
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
      number: "57",
      name: "Recalibrate",
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
      number: "58",
      name: "Rise and Shine",
      cost: ["1", "u"],
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
      name: "Rishadan Dockhand",
      cost: ["u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "60",
      name: "Said (Said // Done)",
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
      number: "60",
      name: "Done (Said // Done)",
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
        },
      ],
    },
    {
      number: "61",
      name: "Scuttletide",
      cost: ["1", "u"],
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
      name: "Shattered Ego",
      cost: ["u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "63",
      name: "So Shiny",
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
      number: "64",
      name: "Specimen Collector",
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
      number: "65",
      name: "Steelfin Whale",
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
      number: "66",
      name: "Step Through",
      cost: ["3", "u", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "67",
      name: "Subtlety",
      cost: ["2", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          cost: ["0"],
          categories: ["board"],
        },
      ],
    },
    {
      number: "68",
      name: "Suspend",
      cost: ["u"],
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
      number: "69",
      name: "Svyelun of Sea and Sky",
      cost: ["1", "u", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "70",
      name: "Sweep the Skies",
      cost: ["x", "u", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "71",
      name: "Thought Monitor",
      cost: ["6", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "72",
      name: "Tide Shaper",
      cost: ["u"],
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
      name: "Vedalken Infiltrator",
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
      number: "74",
      name: "Archfiend of Sorrows",
      cost: ["5", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "75",
      name: "Archon of Cruelty",
      cost: ["6", "b", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "76",
      name: "Bone Shards",
      cost: ["b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "77",
      name: "Break the Ice",
      cost: ["b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "78",
      name: "Cabal Initiate",
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
      number: "79",
      name: "Clattering Augur",
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
      number: "80",
      name: "Damn",
      cost: ["b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "81",
      name: "Dauthi Voidwalker",
      cost: ["b", "b"],
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
      name: "Discerning Taste",
      cost: ["2", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "83",
      name: "Echoing Return",
      cost: ["b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "84",
      name: "Feast of Sanity",
      cost: ["3", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "85",
      name: "Flay Essence",
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
      number: "86",
      name: "Gilt-Blade Prowler",
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
      number: "87",
      name: "Grief",
      cost: ["2", "b", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "88",
      name: "Hell Mongrel",
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
      number: "89",
      name: "Kitchen Imp",
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
      number: "90",
      name: "Legion Vanguard",
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
      number: "91",
      name: "Loathsome Curator",
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
      number: "92",
      name: "Magus of the Bridge",
      cost: ["b", "b", "b"],
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
      name: "Necrogoyf",
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
      number: "94",
      name: "Necromancer's Familiar",
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
      number: "95",
      name: "Nested Shambler",
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
      number: "96",
      name: "Persist",
      cost: ["1", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "97",
      name: "Profane Tutor",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "98",
      name: "Radiant Epicure",
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
      name: "Sinister Starfish",
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
      number: "100",
      name: "Sudden Edict",
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
      ],
    },
    {
      number: "101",
      name: "Tizerus Charger",
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
      number: "102",
      name: "Tourach, Dread Cantor",
      cost: ["1", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "103",
      name: "Tourach's Canticle",
      cost: ["3", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "104",
      name: "Tragic Fall",
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
      number: "105",
      name: "Underworld Hermit",
      cost: ["4", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "106",
      name: "Unmarked Grave",
      cost: ["1", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "107",
      name: "Vermin Gorger",
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
      number: "108",
      name: "Vile Entomber",
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
      number: "109",
      name: "World-Weary",
      cost: ["3", "b", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "110",
      name: "Young Necromancer",
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
      number: "111",
      name: "Arcbound Slasher",
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
      number: "112",
      name: "Arcbound Tracker",
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
      number: "113",
      name: "Arcbound Whelp",
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
      number: "114",
      name: "Battle Plan",
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
      number: "115",
      name: "Blazing Rootwalla",
      cost: ["r"],
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
      name: "Bloodbraid Marauder",
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
      number: "117",
      name: "Breya's Apprentice",
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
      number: "118",
      name: "Calibrated Blast",
      cost: ["2", "r"],
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
      number: "119",
      name: "Captain Ripley Vance",
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
      number: "120",
      name: "Chef's Kiss",
      cost: ["1", "r", "r"],
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
      number: "121",
      name: "Dragon's Rage Channeler",
      cost: ["r"],
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
      name: "Faithless Salvaging",
      cost: ["1", "r"],
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
      number: "123",
      name: "Fast (Fast // Furious)",
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
      number: "123",
      name: "Furious (Fast // Furious)",
      cost: ["3", "r", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "124",
      name: "Flame Blitz",
      cost: ["r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "125",
      name: "Flametongue Yearling",
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
      number: "126",
      name: "Fury",
      cost: ["3", "r", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "127",
      name: "Galvanic Relay",
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
      number: "128",
      name: "Gargadon",
      cost: ["5", "r", "r"],
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
      name: "Glimpse of Tomorrow",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "130",
      name: "Goblin Traprunner",
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
      number: "131",
      name: "Gouged Zealot",
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
      number: "132",
      name: "Harmonic Prodigy",
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
      number: "133",
      name: "Kaleidoscorch",
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
      number: "134",
      name: "Lightning Spear",
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
      number: "135",
      name: "Mine Collapse",
      cost: ["3", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["0"],
          categories: ["board"],
        },
      ],
    },
    {
      number: "136",
      name: "Mount Velus Manticore",
      cost: ["2", "r", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "137",
      name: "Obsidian Charmaw",
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
      number: "138",
      name: "Ragavan, Nimble Pilferer",
      cost: ["r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "139",
      name: "Revolutionist",
      cost: ["5", "r"],
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
      name: "Skophos Reaver",
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
      number: "141",
      name: "Slag Strider",
      cost: ["5", "r", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "142",
      name: "Spreading Insurrection",
      cost: ["4", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "143",
      name: "Strike It Rich",
      cost: ["r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "144",
      name: "Tavern Scoundrel",
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
      number: "145",
      name: "Unholy Heat",
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
      number: "146",
      name: "Viashino Lashclaw",
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
      number: "147",
      name: "Abundant Harvest",
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
      number: "148",
      name: "Aeve, Progenitor Ooze",
      cost: ["2", "g", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "149",
      name: "Bannerhide Krushok",
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
      number: "150",
      name: "Blessed Respite",
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
      number: "151",
      name: "Chatterfang, Squirrel General",
      cost: ["2", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "152",
      name: "Chatterstorm",
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
      number: "153",
      name: "Chitterspitter",
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
      number: "154",
      name: "Crack Open",
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
      number: "155",
      name: "Deepwood Denizen",
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
      number: "156",
      name: "Duskshell Crawler",
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
      number: "157",
      name: "Endurance",
      cost: ["1", "g", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          cost: ["0"],
          categories: ["board"],
        },
      ],
    },
    {
      number: "158",
      name: "Fae Offering",
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
      number: "159",
      name: "Flourishing Strike",
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
      number: "160",
      name: "Foundation Breaker",
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
      number: "161",
      name: "Funnel-Web Recluse",
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
      name: "Gaea's Will",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "163",
      name: "Glimmer Bairn",
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
      number: "164",
      name: "Glinting Creeper",
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
      number: "165",
      name: "Herd Baloth",
      cost: ["3", "g", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "166",
      name: "Ignoble Hierarch",
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
      number: "167",
      name: "Jade Avenger",
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
      number: "168",
      name: "Jewel-Eyed Cobra",
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
      number: "169",
      name: "Orchard Strider",
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
      number: "170",
      name: "Rift Sower",
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
      number: "171",
      name: "Sanctum Weaver",
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
      number: "172",
      name: "Scurry Oak",
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
      number: "173",
      name: "Smell Fear",
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
      number: "174",
      name: "Squirrel Sanctuary",
      cost: ["g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "175",
      name: "Squirrel Sovereign",
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
      number: "176",
      name: "Sylvan Anthem",
      cost: ["g", "g"],
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
      name: "Terramorph",
      cost: ["3", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "178",
      name: "Thrasta, Tempest's Roar",
      cost: ["10", "g", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "179",
      name: "Timeless Witness",
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
      number: "180",
      name: "Tireless Provisioner",
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
      number: "181",
      name: "Urban Daggertooth",
      cost: ["2", "g", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "182",
      name: "Verdant Command",
      cost: ["1", "g"],
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
      ],
    },
    {
      number: "183",
      name: "Wren's Run Hydra",
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
      number: "184",
      name: "Arcbound Shikari",
      cost: ["1", "r", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "185",
      name: "Arcus Acolyte",
      cost: ["g", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "186",
      name: "Asmoranomardicadaistinaculdacar",
      cost: [],
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
      name: "Breathless Knight",
      cost: ["1", "w", "b"],
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
      name: "Captured by Lagacs",
      cost: ["1", "g", "w"],
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
      name: "Carth the Lion",
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
      number: "190",
      name: "Chrome Courier",
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
      number: "191",
      name: "Combine Chrysalis",
      cost: ["g", "u"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "192",
      name: "Dakkon, Shadow Slayer",
      cost: ["w", "u", "b"],
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
      name: "Dihada's Ploy",
      cost: ["1", "u", "b"],
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
      number: "194",
      name: "Drey Keeper",
      cost: ["3", "b", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "195",
      name: "Ethersworn Sphinx",
      cost: ["7", "w", "u"],
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
      name: "Foundry Helix",
      cost: ["1", "r", "w"],
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
      number: "197",
      name: "Garth One-Eye",
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
      number: "198",
      name: "General Ferrous Rokiric",
      cost: ["1", "r", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "199",
      name: "Geyadrone Dihada",
      cost: ["1", "u", "b", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "200",
      name: "Goblin Anarchomancer",
      cost: ["r", "g"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "201",
      name: "Graceful Restoration",
      cost: ["3", "w", "b"],
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
      name: "Grist, the Hunger Tide",
      cost: ["1", "b", "g"],
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
      name: "Lazotep Chancellor",
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
      number: "204",
      name: "Lonis, Cryptozoologist",
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
      number: "205",
      name: "Master of Death",
      cost: ["1", "u", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "206",
      name: "Moderation",
      cost: ["1", "w", "u"],
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
      name: "Piru, the Volatile",
      cost: ["2", "r", "r", "w", "w", "b", "b"],
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
      name: "Priest of Fell Rites",
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
      number: "209",
      name: "Prophetic Titan",
      cost: ["4", "u", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "210",
      name: "Rakdos Headliner",
      cost: ["b", "r"],
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
      name: "Ravenous Squirrel",
      cost: ["bg"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "212",
      name: "Road (Road // Ruin)",
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
      number: "212",
      name: "Ruin (Road // Ruin)",
      cost: ["1", "r", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "213",
      name: "Storm God's Oracle",
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
      number: "214",
      name: "Sythis, Harvest's Hand",
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
      number: "215",
      name: "Terminal Agony",
      cost: ["2", "b", "r"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "216",
      name: "Territorial Kavu",
      cost: ["r", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "217",
      name: "Wavesifter",
      cost: ["3", "g", "u"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "218",
      name: "Yusri, Fortune's Flame",
      cost: ["1", "u", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "219",
      name: "Academy Manufactor",
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
      number: "220",
      name: "Altar of the Goyf",
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
      number: "221",
      name: "Batterbone",
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
      number: "222",
      name: "Bottle Golems",
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
      number: "223",
      name: "Brainstone",
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
      number: "224",
      name: "Dermotaxi",
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
      number: "225",
      name: "Diamond Lion",
      cost: ["2"],
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
      name: "Fodder Tosser",
      cost: ["3"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "227",
      name: "Kaldra Compleat",
      cost: ["7"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "228",
      name: "Liquimetal Torque",
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
      number: "229",
      name: "Monoskelion",
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
      number: "230",
      name: "Myr Scrapling",
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
      number: "231",
      name: "Nettlecyst",
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
      number: "232",
      name: "Ornithopter of Paradise",
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
      number: "233",
      name: "Sanctuary Raptor",
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
      number: "234",
      name: "Scion of Draco",
      cost: ["12"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "235",
      name: "Sojourner's Companion",
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
      number: "236",
      name: "Sol Talisman",
      cost: [],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "237",
      name: "Steel Dromedary",
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
      number: "238",
      name: "Sword of Hearth and Home",
      cost: ["3"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "239",
      name: "Tormod's Cryptkeeper",
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
      number: "240",
      name: "The Underworld Cookbook",
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
      name: "Vectis Gloves",
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
      number: "242",
      name: "Void Mirror",
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
      number: "243",
      name: "Zabaz, the Glimmerwasp",
      cost: ["1"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "244",
      name: "Arid Mesa",
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
      number: "245",
      name: "Darkmoss Bridge",
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
      number: "246",
      name: "Drossforge Bridge",
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
      number: "247",
      name: "Goldmire Bridge",
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
      number: "248",
      name: "Marsh Flats",
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
      number: "249",
      name: "Mistvault Bridge",
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
      number: "250",
      name: "Misty Rainforest",
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
      number: "251",
      name: "Power Depot",
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
      number: "252",
      name: "Razortide Bridge",
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
      number: "253",
      name: "Rustvale Bridge",
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
      number: "254",
      name: "Scalding Tarn",
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
      name: "Silverbluff Bridge",
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
      number: "256",
      name: "Slagwoods Bridge",
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
      number: "257",
      name: "Tanglepool Bridge",
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
      number: "258",
      name: "Thornglint Bridge",
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
      number: "259",
      name: "Urza's Saga",
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
      name: "Verdant Catacombs",
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
      number: "261",
      name: "Yavimaya, Cradle of Growth",
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
      number: "262",
      name: "Angelic Curator",
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
      number: "263",
      name: "Karmic Guide",
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
      number: "264",
      name: "Seal of Cleansing",
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
      number: "265",
      name: "Solitary Confinement",
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
      number: "266",
      name: "Soul Snare",
      cost: ["w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "267",
      name: "Counterspell",
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
      ],
    },
    {
      number: "268",
      name: "Sea Drake",
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
      number: "269",
      name: "Seal of Removal",
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
      number: "270",
      name: "Upheaval",
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
      number: "271",
      name: "Wonder",
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
      number: "272",
      name: "Bone Shredder",
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
      number: "273",
      name: "Braids, Cabal Minion",
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
      number: "274",
      name: "Greed",
      cost: ["3", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "275",
      name: "Patriarch's Bidding",
      cost: ["3", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "276",
      name: "Skirge Familiar",
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
      number: "277",
      name: "Chance Encounter",
      cost: ["2", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "278",
      name: "Flame Rift",
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
      number: "279",
      name: "Goblin Bombardment",
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
      number: "280",
      name: "Gorilla Shaman",
      cost: ["r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "281",
      name: "Imperial Recruiter",
      cost: ["2", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "282",
      name: "Mogg Salvage",
      cost: ["2", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["0"],
          categories: ["board"],
        },
      ],
    },
    {
      number: "283",
      name: "Enchantress's Presence",
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
      number: "284",
      name: "Hunting Pack",
      cost: ["5", "g", "g"],
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
      number: "285",
      name: "Quirion Ranger",
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
      number: "286",
      name: "Squirrel Mob",
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
      number: "287",
      name: "Titania, Protector of Argoth",
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
      number: "288",
      name: "Yavimaya Elder",
      cost: ["1", "g", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "289",
      name: "Chainer, Nightmare Adept",
      cost: ["2", "b", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "290",
      name: "Fire (Fire // Ice)",
      cost: ["1", "r"],
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
      number: "290",
      name: "Ice (Fire // Ice)",
      cost: ["1", "u"],
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
      number: "291",
      name: "Mirari's Wake",
      cost: ["3", "g", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "292",
      name: "Shardless Agent",
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
      number: "293",
      name: "Sterling Grove",
      cost: ["g", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "294",
      name: "Vindicate",
      cost: ["1", "w", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "295",
      name: "Cursed Totem",
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
      number: "296",
      name: "Extruder",
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
      number: "297",
      name: "Millikin",
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
      number: "298",
      name: "Nevinyrral's Disk",
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
      number: "299",
      name: "Patchwork Gnomes",
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
      number: "300",
      name: "Zuran Orb",
      cost: ["0"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "301",
      name: "Cabal Coffers",
      cost: [],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
      ],
    },
    {
      number: "302",
      name: "Mishra's Factory",
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
      number: "303",
      name: "Riptide Laboratory",
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
      number: "491",
      name: "Sanctum Prelate",
      cost: ["1", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
  ],
};

export default format;
