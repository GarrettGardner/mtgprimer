import type { IFormatConfig } from "@/models";

const format: IFormatConfig = {
  code: "akh",
  name: "Amonkhet",
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
    removal: {
      name: "Removal Guide",
      defaultGrouping: "mv",
      defaultOrdering: "color",
      categories: {
        removal: "Removal",
        bounce: "Bounce",
        boardwipe: "Board Wipe",
        other: "Other",
      },
    },
  },
  cards: [
    {
      number: "1",
      name: "Angel of Sanctions",
      cost: ["3", "w", "w"],
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
      number: "2",
      name: "Anointed Procession",
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
      number: "3",
      name: "Anointer Priest",
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
      number: "4",
      name: "Approach of the Second Sun",
      cost: ["6", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "5",
      name: "Aven Mindcensor",
      cost: ["2", "w"],
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
      number: "6",
      name: "Binding Mummy",
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
      number: "7",
      name: "Cartouche of Solidarity",
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
      number: "8",
      name: "Cast Out",
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
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "9",
      name: "Compulsory Rest",
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
      number: "10",
      name: "Devoted Crop-Mate",
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
      number: "11",
      name: "Djeru's Resolve",
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
      number: "12",
      name: "Fan Bearer",
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
      number: "13",
      name: "Forsake the Worldly",
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
          categories: ["other"],
        },
      ],
    },
    {
      number: "14",
      name: "Gideon of the Trials",
      cost: ["1", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "15",
      name: "Gideon's Intervention",
      cost: ["2", "w", "w"],
      rarity: "r",
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
      number: "16",
      name: "Glory-Bound Initiate",
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
      number: "17",
      name: "Gust Walker",
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
      number: "18",
      name: "Impeccable Timing",
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
      number: "19",
      name: "In Oketra's Name",
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
      name: "Mighty Leap",
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
      number: "21",
      name: "Oketra the True",
      cost: ["3", "w"],
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
      name: "Oketra's Attendant",
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
      number: "23",
      name: "Protection of the Hekma",
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
      number: "24",
      name: "Regal Caracal",
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
      number: "25",
      name: "Renewed Faith",
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
          categories: ["other"],
        },
      ],
    },
    {
      number: "26",
      name: "Rhet-Crop Spearmaster",
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
      number: "27",
      name: "Sacred Cat",
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
      number: "28",
      name: "Seraph of the Suns",
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
      number: "29",
      name: "Sparring Mummy",
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
      number: "30",
      name: "Supply Caravan",
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
      number: "31",
      name: "Tah-Crop Elite",
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
      number: "32",
      name: "Those Who Serve",
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
      number: "33",
      name: "Time to Reflect",
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
        {
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "34",
      name: "Trial of Solidarity",
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
      number: "35",
      name: "Trueheart Duelist",
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
      name: "Unwavering Initiate",
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
      number: "37",
      name: "Vizier of Deferment",
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
      ],
    },
    {
      number: "38",
      name: "Vizier of Remedies",
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
      number: "39",
      name: "Winged Shepherd",
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
      number: "40",
      name: "Ancient Crab",
      cost: ["1", "u", "u"],
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
      name: "Angler Drake",
      cost: ["4", "u", "u"],
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
      ],
    },
    {
      number: "42",
      name: "As Foretold",
      cost: ["2", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "43",
      name: "Aven Initiate",
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
      number: "44",
      name: "Cancel",
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
      ],
    },
    {
      number: "45",
      name: "Cartouche of Knowledge",
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
      number: "46",
      name: "Censor",
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
      ],
    },
    {
      number: "47",
      name: "Compelling Argument",
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
      number: "48",
      name: "Cryptic Serpent",
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
      name: "Curator of Mysteries",
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
      number: "50",
      name: "Decision Paralysis",
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
      ],
    },
    {
      number: "51",
      name: "Drake Haven",
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
      number: "52",
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
      ],
    },
    {
      number: "53",
      name: "Floodwaters",
      cost: ["4", "u", "u"],
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
      ],
    },
    {
      number: "54",
      name: "Galestrike",
      cost: ["2", "u"],
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
      ],
    },
    {
      number: "55",
      name: "Glyph Keeper",
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
      number: "56",
      name: "Hekma Sentinels",
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
      number: "57",
      name: "Hieroglyphic Illumination",
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
      number: "58",
      name: "Illusory Wrappings",
      cost: ["2", "u"],
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
      ],
    },
    {
      number: "59",
      name: "Kefnet the Mindful",
      cost: ["2", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "60",
      name: "Labyrinth Guardian",
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
      number: "61",
      name: "Lay Claim",
      cost: ["5", "u", "u"],
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
      number: "62",
      name: "Naga Oracle",
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
      number: "63",
      name: "New Perspectives",
      cost: ["5", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "64",
      name: "Open into Wonder",
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
      number: "65",
      name: "Pull from Tomorrow",
      cost: ["x", "u", "u"],
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
      number: "66",
      name: "River Serpent",
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
      number: "67",
      name: "Sacred Excavation",
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
      number: "68",
      name: "Scribe of the Mindful",
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
      number: "69",
      name: "Seeker of Insight",
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
      number: "70",
      name: "Shimmerscale Drake",
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
      number: "71",
      name: "Slither Blade",
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
      number: "72",
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
      number: "73",
      name: "Trial of Knowledge",
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
      name: "Vizier of Many Faces",
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
      number: "75",
      name: "Vizier of Tumbling Sands",
      cost: ["2", "u"],
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
      ],
    },
    {
      number: "76",
      name: "Winds of Rebuke",
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
      ],
    },
    {
      number: "77",
      name: "Zenith Seeker",
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
      number: "78",
      name: "Archfiend of Ifnir",
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
      number: "79",
      name: "Baleful Ammit",
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
      number: "80",
      name: "Blighted Bat",
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
      number: "81",
      name: "Bone Picker",
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
      number: "82",
      name: "Bontu the Glorified",
      cost: ["2", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "83",
      name: "Cartouche of Ambition",
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
      ],
    },
    {
      number: "84",
      name: "Cruel Reality",
      cost: ["5", "b", "b"],
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
      number: "85",
      name: "Cursed Minotaur",
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
      name: "Dispossess",
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
      number: "87",
      name: "Doomed Dissenter",
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
      number: "88",
      name: "Dread Wanderer",
      cost: ["b"],
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
      name: "Dune Beetle",
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
      number: "90",
      name: "Faith of the Devoted",
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
      number: "91",
      name: "Festering Mummy",
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
      number: "92",
      name: "Final Reward",
      cost: ["4", "b"],
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
      name: "Gravedigger",
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
      number: "94",
      name: "Grim Strider",
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
      name: "Horror of the Broken Lands",
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
      number: "96",
      name: "Lay Bare the Heart",
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
      number: "97",
      name: "Liliana, Death's Majesty",
      cost: ["3", "b", "b"],
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
      ],
    },
    {
      number: "98",
      name: "Liliana's Mastery",
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
      number: "99",
      name: "Lord of the Accursed",
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
      number: "100",
      name: "Miasmic Mummy",
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
      name: "Nest of Scarabs",
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
      number: "102",
      name: "Painful Lesson",
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
      number: "103",
      name: "Pitiless Vizier",
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
      number: "104",
      name: "Plague Belcher",
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
      number: "105",
      name: "Ruthless Sniper",
      cost: ["b"],
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
      name: "Scarab Feast",
      cost: ["b"],
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
      number: "107",
      name: "Shadow of the Grave",
      cost: ["1", "b"],
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
      number: "108",
      name: "Soulstinger",
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
      number: "109",
      name: "Splendid Agony",
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
      number: "110",
      name: "Stir the Sands",
      cost: ["4", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["3", "b"],
          categories: ["board"],
        },
      ],
    },
    {
      number: "111",
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
      number: "112",
      name: "Trespasser's Curse",
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
      number: "113",
      name: "Trial of Ambition",
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
      number: "114",
      name: "Unburden",
      cost: ["1", "b", "b"],
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
      name: "Wander in Death",
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
      number: "116",
      name: "Wasteland Scorpion",
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
      number: "117",
      name: "Ahn-Crop Crasher",
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
      number: "118",
      name: "Battlefield Scavenger",
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
      number: "119",
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
          categories: ["boardwipe"],
        },
      ],
    },
    {
      number: "120",
      name: "Bloodlust Inciter",
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
      number: "121",
      name: "Bloodrage Brawler",
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
      number: "122",
      name: "Brute Strength",
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
      number: "123",
      name: "By Force",
      cost: ["x", "r"],
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
      number: "124",
      name: "Cartouche of Zeal",
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
      name: "Combat Celebrant",
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
      number: "126",
      name: "Consuming Fervor",
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
      number: "127",
      name: "Deem Worthy",
      cost: ["4", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
        {
          guide: "instants",
          cost: ["3", "r"],
          categories: ["board"],
        },
        {
          guide: "removal",
          cost: ["3", "r"],
          categories: ["removal"],
        },
      ],
    },
    {
      number: "128",
      name: "Desert Cerodon",
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
      number: "129",
      name: "Electrify",
      cost: ["3", "r"],
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
      name: "Emberhorn Minotaur",
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
      name: "Flameblade Adept",
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
      number: "132",
      name: "Fling",
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
      number: "133",
      name: "Glorious End",
      cost: ["2", "r"],
      rarity: "m",
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
      number: "134",
      name: "Glorybringer",
      cost: ["3", "r", "r"],
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
      number: "135",
      name: "Harsh Mentor",
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
      number: "136",
      name: "Hazoret the Fervent",
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
      number: "137",
      name: "Hazoret's Favor",
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
      number: "138",
      name: "Heart-Piercer Manticore",
      cost: ["2", "r", "r"],
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
      number: "139",
      name: "Hyena Pack",
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
      number: "140",
      name: "Limits of Solidarity",
      cost: ["3", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "141",
      name: "Magma Spray",
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
      number: "142",
      name: "Manticore of the Gauntlet",
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
      number: "143",
      name: "Minotaur Sureshot",
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
      number: "144",
      name: "Nef-Crop Entangler",
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
      name: "Nimble-Blade Khenra",
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
      number: "146",
      name: "Pathmaker Initiate",
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
      name: "Pursue Glory",
      cost: ["3", "r"],
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
      number: "148",
      name: "Soul-Scar Mage",
      cost: ["r"],
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
      name: "Sweltering Suns",
      cost: ["1", "r", "r"],
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
      ],
    },
    {
      number: "150",
      name: "Thresher Lizard",
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
      number: "151",
      name: "Tormenting Voice",
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
      number: "152",
      name: "Trial of Zeal",
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
      ],
    },
    {
      number: "153",
      name: "Trueheart Twins",
      cost: ["4", "r"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "154",
      name: "Violent Impact",
      cost: ["3", "r"],
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
      ],
    },
    {
      number: "155",
      name: "Warfire Javelineer",
      cost: ["3", "r"],
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
      number: "156",
      name: "Benefaction of Rhonas",
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
      number: "157",
      name: "Bitterblade Warrior",
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
      number: "158",
      name: "Cartouche of Strength",
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
      number: "159",
      name: "Champion of Rhonas",
      cost: ["3", "g"],
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
      name: "Channeler Initiate",
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
      number: "161",
      name: "Colossapede",
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
      name: "Crocodile of the Crossing",
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
      number: "163",
      name: "Defiant Greatmaw",
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
      number: "164",
      name: "Dissenter's Deliverance",
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
          categories: ["other"],
        },
      ],
    },
    {
      number: "165",
      name: "Exemplar of Strength",
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
      number: "166",
      name: "Giant Spider",
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
      number: "167",
      name: "Gift of Paradise",
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
      number: "168",
      name: "Greater Sandwurm",
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
      number: "169",
      name: "Hapatra's Mark",
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
      number: "170",
      name: "Harvest Season",
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
      number: "171",
      name: "Haze of Pollen",
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
      number: "172",
      name: "Honored Hydra",
      cost: ["5", "g"],
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
      name: "Hooded Brawler",
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
      number: "174",
      name: "Initiate's Companion",
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
      number: "175",
      name: "Manglehorn",
      cost: ["2", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "removal",
          categories: ["other"],
        },
      ],
    },
    {
      number: "176",
      name: "Naga Vitalist",
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
      number: "177",
      name: "Oashra Cultivator",
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
      number: "178",
      name: "Ornery Kudu",
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
      number: "179",
      name: "Pouncing Cheetah",
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
      ],
    },
    {
      number: "180",
      name: "Prowling Serpopard",
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
      number: "181",
      name: "Quarry Hauler",
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
      number: "182",
      name: "Rhonas the Indomitable",
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
      number: "183",
      name: "Sandwurm Convergence",
      cost: ["6", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "184",
      name: "Scaled Behemoth",
      cost: ["4", "g", "g"],
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
      name: "Shed Weakness",
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
      number: "186",
      name: "Shefet Monitor",
      cost: ["5", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
        {
          guide: "instants",
          cost: ["3", "g"],
          categories: ["other"],
        },
      ],
    },
    {
      number: "187",
      name: "Sixth Sense",
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
      number: "188",
      name: "Spidery Grasp",
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
      number: "189",
      name: "Stinging Shot",
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
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "190",
      name: "Synchronized Strike",
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
      number: "191",
      name: "Trial of Strength",
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
      number: "192",
      name: "Vizier of the Menagerie",
      cost: ["3", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "193",
      name: "Watchful Naga",
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
      number: "194",
      name: "Ahn-Crop Champion",
      cost: ["2", "g", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "195",
      name: "Aven Wind Guide",
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
      number: "196",
      name: "Bounty of the Luxa",
      cost: ["2", "g", "u"],
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
      name: "Decimator Beetle",
      cost: ["3", "b", "g"],
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
      number: "198",
      name: "Enigma Drake",
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
      number: "199",
      name: "Hapatra, Vizier of Poisons",
      cost: ["b", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "200",
      name: "Honored Crop-Captain",
      cost: ["r", "w"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "201",
      name: "Khenra Charioteer",
      cost: ["1", "r", "g"],
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
      name: "Merciless Javelineer",
      cost: ["2", "b", "r"],
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
      number: "203",
      name: "Neheb, the Worthy",
      cost: ["1", "b", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "204",
      name: "Nissa, Steward of Elements",
      cost: ["x", "g", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "205",
      name: "Samut, Voice of Dissent",
      cost: ["3", "r", "g"],
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
      number: "206",
      name: "Shadowstorm Vizier",
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
      number: "207",
      name: "Temmet, Vizier of Naktamun",
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
      name: "Wayward Servant",
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
      number: "209",
      name: "Weaver of Currents",
      cost: ["1", "g", "u"],
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
      name: "Dusk (Dusk / Dawn)",
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
      ],
    },
    {
      number: "210",
      name: "Dawn (Dusk / Dawn)",
      cost: ["3", "w", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "211",
      name: "Commit (Commit / Memory)",
      cost: ["3", "u"],
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
      ],
    },
    {
      number: "211",
      name: "Memory (Commit / Memory)",
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
      number: "212",
      name: "Never (Never / Return)",
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
      ],
    },
    {
      number: "212",
      name: "Return (Never / Return)",
      cost: ["3", "b"],
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
      name: "Insult (Insult / Injury)",
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
      number: "213",
      name: "Injury (Insult / Injury)",
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
      number: "214",
      name: "Mouth (Mouth / Feed)",
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
      number: "214",
      name: "Feed (Mouth / Feed)",
      cost: ["3", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "215",
      name: "Start (Start / Finish)",
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
      ],
    },
    {
      number: "215",
      name: "Finish (Start / Finish)",
      cost: ["2", "b"],
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
      number: "216",
      name: "Reduce (Reduce / Rubble)",
      cost: ["2", "u"],
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
      number: "216",
      name: "Rubble (Reduce / Rubble)",
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
      number: "217",
      name: "Destined (Destined / Lead)",
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
      number: "217",
      name: "Lead (Destined / Lead)",
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
      number: "218",
      name: "Onward (Onward / Victory)",
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
      number: "218",
      name: "Victory (Onward / Victory)",
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
      number: "219",
      name: "Spring (Spring / Mind)",
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
      number: "219",
      name: "Mind (Spring / Mind)",
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
      number: "220",
      name: "Prepare (Prepare / Fight)",
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
      ],
    },
    {
      number: "220",
      name: "Fight (Prepare / Fight)",
      cost: ["3", "g"],
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
      number: "221",
      name: "Failure (Failure / Comply)",
      cost: ["1", "u"],
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
      ],
    },
    {
      number: "221",
      name: "Comply (Failure / Comply)",
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
      number: "222",
      name: "Rags (Rags / Riches)",
      cost: ["2", "b", "b"],
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
      ],
    },
    {
      number: "222",
      name: "Riches (Rags / Riches)",
      cost: ["5", "u", "u"],
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
      number: "223",
      name: "Cut (Cut / Ribbons)",
      cost: ["1", "r"],
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
      number: "223",
      name: "Ribbons (Cut / Ribbons)",
      cost: ["x", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "224",
      name: "Heaven (Heaven / Earth)",
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
        {
          guide: "removal",
          categories: ["boardwipe"],
        },
      ],
    },
    {
      number: "224",
      name: "Earth (Heaven / Earth)",
      cost: ["x", "r", "r"],
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
      ],
    },
    {
      number: "225",
      name: "Bontu's Monument",
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
      name: "Edifice of Authority",
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
      number: "227",
      name: "Embalmer's Tools",
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
      number: "228",
      name: "Gate to the Afterlife",
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
      number: "229",
      name: "Hazoret's Monument",
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
      number: "230",
      name: "Honed Khopesh",
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
      number: "231",
      name: "Kefnet's Monument",
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
      number: "232",
      name: "Luxa River Shrine",
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
      number: "233",
      name: "Oketra's Monument",
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
      number: "234",
      name: "Oracle's Vault",
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
      number: "235",
      name: "Pyramid of the Pantheon",
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
      number: "236",
      name: "Rhonas's Monument",
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
      number: "237",
      name: "Throne of the God-Pharaoh",
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
      number: "238",
      name: "Watchers of the Dead",
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
      number: "239",
      name: "Canyon Slough",
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
      number: "240",
      name: "Cascading Cataracts",
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
      number: "241",
      name: "Cradle of the Accursed",
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
      number: "242",
      name: "Evolving Wilds",
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
      number: "243",
      name: "Fetid Pools",
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
      number: "244",
      name: "Grasping Dunes",
      cost: [],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["land"],
        },
        {
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "245",
      name: "Irrigated Farmland",
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
      name: "Painted Bluffs",
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
      name: "Scattered Groves",
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
      number: "248",
      name: "Sheltered Thicket",
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
      name: "Sunscorched Desert",
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
