import type { IFormatConfig } from "@/models";

const format: IFormatConfig = {
  code: "dom",
  name: "Dominaria",
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
      name: "Karn, Scion of Urza",
      cost: ["4"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "2",
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
      number: "3",
      name: "Aven Sentry",
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
      number: "4",
      name: "Baird, Steward of Argive",
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
      number: "5",
      name: "Benalish Honor Guard",
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
      number: "6",
      name: "Benalish Marshal",
      cost: ["w", "w", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "7",
      name: "Blessed Light",
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
          guide: "removal",
          categories: ["removal"],
        },
      ],
    },
    {
      number: "8",
      name: "Board the Weatherlight",
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
      number: "9",
      name: "Call the Cavalry",
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
      number: "10",
      name: "Charge",
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
      number: "11",
      name: "D'Avenant Trapper",
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
      number: "12",
      name: "Danitha Capashen, Paragon",
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
      number: "13",
      name: "Daring Archaeologist",
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
      number: "14",
      name: "Dauntless Bodyguard",
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
      number: "15",
      name: "Dub",
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
      number: "16",
      name: "Evra, Halcyon Witness",
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
      number: "17",
      name: "Excavation Elephant",
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
      number: "18",
      name: "Fall of the Thran",
      cost: ["5", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "19",
      name: "Gideon's Reproach",
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
      number: "20",
      name: "Healing Grace",
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
      number: "21",
      name: "History of Benalia",
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
      number: "22",
      name: "Invoke the Divine",
      cost: ["2", "w"],
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
          guide: "removal",
          categories: ["other"],
        },
      ],
    },
    {
      number: "23",
      name: "Knight of Grace",
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
      number: "24",
      name: "Knight of New Benalia",
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
      number: "25",
      name: "Kwende, Pride of Femeref",
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
      number: "26",
      name: "Lyra Dawnbringer",
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
      number: "27",
      name: "Mesa Unicorn",
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
      number: "28",
      name: "On Serra's Wings",
      cost: ["3", "w"],
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
      name: "Pegasus Courser",
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
      number: "30",
      name: "Sanctum Spirit",
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
      number: "31",
      name: "Seal Away",
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
      number: "32",
      name: "Sergeant-at-Arms",
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
      name: "Serra Angel",
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
      number: "34",
      name: "Serra Disciple",
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
      number: "35",
      name: "Shalai, Voice of Plenty",
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
      number: "36",
      name: "Teshar, Ancestor's Apostle",
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
      number: "37",
      name: "Tragic Poet",
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
      number: "38",
      name: "Triumph of Gerrard",
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
      number: "39",
      name: "Urza's Ruinous Blast",
      cost: ["4", "w"],
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
      number: "40",
      name: "Academy Drake",
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
      name: "Academy Journeymage",
      cost: ["4", "u"],
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
      ],
    },
    {
      number: "42",
      name: "The Antiquities War",
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
      name: "Arcane Flight",
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
      number: "44",
      name: "Artificer's Assistant",
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
      number: "45",
      name: "Befuddle",
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
      number: "46",
      name: "Blink of an Eye",
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
      number: "47",
      name: "Cloudreader Sphinx",
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
      number: "48",
      name: "Cold-Water Snapper",
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
      number: "49",
      name: "Curator's Ward",
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
      number: "50",
      name: "Deep Freeze",
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
      number: "51",
      name: "Diligent Excavator",
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
      number: "52",
      name: "Divination",
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
      number: "53",
      name: "Homarid Explorer",
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
      number: "54",
      name: "In Bolas's Clutches",
      cost: ["4", "u", "u"],
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
      number: "55",
      name: "Karn's Temporal Sundering",
      cost: ["4", "u", "u"],
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
      ],
    },
    {
      number: "56",
      name: "Merfolk Trickster",
      cost: ["u", "u"],
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
      number: "57",
      name: "The Mirari Conjecture",
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
      number: "58",
      name: "Naban, Dean of Iteration",
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
      number: "59",
      name: "Naru Meha, Master Wizard",
      cost: ["2", "u", "u"],
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
      number: "60",
      name: "Opt",
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
      ],
    },
    {
      number: "61",
      name: "Precognition Field",
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
      number: "62",
      name: "Relic Runner",
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
      number: "63",
      name: "Rescue",
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
      number: "64",
      name: "Sage of Lat-Nam",
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
      number: "65",
      name: "Sentinel of the Pearl Trident",
      cost: ["4", "u"],
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
      number: "66",
      name: "Slinn Voda, the Rising Deep",
      cost: ["6", "u", "u"],
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
      number: "67",
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
      ],
    },
    {
      number: "68",
      name: "Tempest Djinn",
      cost: ["u", "u", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "69",
      name: "Tetsuko Umezawa, Fugitive",
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
      number: "70",
      name: "Time of Ice",
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
      number: "71",
      name: "Tolarian Scholar",
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
      number: "72",
      name: "Unwind",
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
      number: "73",
      name: "Vodalian Arcanist",
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
      number: "74",
      name: "Weight of Memory",
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
      number: "75",
      name: "Wizard's Retort",
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
      ],
    },
    {
      number: "76",
      name: "Zahid, Djinn of the Lamp",
      cost: ["4", "u", "u"],
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
      name: "Blessing of Belzenlok",
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
      number: "78",
      name: "Cabal Evangel",
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
      name: "Cabal Paladin",
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
      name: "Caligo Skin-Witch",
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
      number: "81",
      name: "Cast Down",
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
      number: "82",
      name: "Chainer's Torment",
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
      number: "83",
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
      number: "84",
      name: "Deathbloom Thallid",
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
      number: "85",
      name: "Demonic Vigor",
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
      number: "86",
      name: "Demonlord Belzenlok",
      cost: ["4", "b", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "87",
      name: "Divest",
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
      number: "88",
      name: "Dread Shade",
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
      number: "89",
      name: "Drudge Sentinel",
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
      name: "The Eldest Reborn",
      cost: ["4", "b"],
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
      number: "91",
      name: "Eviscerate",
      cost: ["3", "b"],
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
      number: "92",
      name: "Feral Abomination",
      cost: ["5", "b"],
      rarity: "c",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "93",
      name: "Final Parting",
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
      number: "94",
      name: "Fungal Infection",
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
      number: "95",
      name: "Josu Vess, Lich Knight",
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
      number: "96",
      name: "Kazarov, Sengir Pureblood",
      cost: ["5", "b", "b"],
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
      number: "97",
      name: "Knight of Malice",
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
      number: "98",
      name: "Lich's Mastery",
      cost: ["3", "b", "b", "b"],
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
      name: "Lingering Phantom",
      cost: ["5", "b"],
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
      name: "Phyrexian Scriptures",
      cost: ["2", "b", "b"],
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
      number: "101",
      name: "Rat Colony",
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
      number: "102",
      name: "Rite of Belzenlok",
      cost: ["2", "b", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "103",
      name: "Settle the Score",
      cost: ["2", "b", "b"],
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
      number: "104",
      name: "Soul Salvage",
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
      number: "105",
      name: "Stronghold Confessor",
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
      name: "Thallid Omnivore",
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
      number: "107",
      name: "Thallid Soothsayer",
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
      number: "108",
      name: "Torgaar, Famine Incarnate",
      cost: ["6", "b", "b"],
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
      name: "Urgoros, the Empty One",
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
      number: "110",
      name: "Vicious Offering",
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
      ],
    },
    {
      number: "111",
      name: "Whisper, Blood Liturgist",
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
      number: "112",
      name: "Windgrace Acolyte",
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
      number: "113",
      name: "Yargle, Glutton of Urborg",
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
      number: "114",
      name: "Yawgmoth's Vile Offering",
      cost: ["4", "b"],
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
      number: "115",
      name: "Bloodstone Goblin",
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
      number: "116",
      name: "Champion of the Flame",
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
      number: "117",
      name: "Fervent Strike",
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
      number: "118",
      name: "Fiery Intervention",
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
      ],
    },
    {
      number: "119",
      name: "Fight with Fire",
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
      number: "120",
      name: "Fire Elemental",
      cost: ["3", "r", "r"],
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
      name: "Firefist Adept",
      cost: ["4", "r"],
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
      number: "122",
      name: "The First Eruption",
      cost: ["2", "r"],
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
      number: "123",
      name: "The Flame of Keld",
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
      number: "124",
      name: "Frenzied Rage",
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
      number: "125",
      name: "Ghitu Chronicler",
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
      number: "126",
      name: "Ghitu Journeymage",
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
      number: "127",
      name: "Ghitu Lavarunner",
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
      number: "128",
      name: "Goblin Barrage",
      cost: ["3", "r"],
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
      number: "129",
      name: "Goblin Chainwhirler",
      cost: ["r", "r", "r"],
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
      ],
    },
    {
      number: "130",
      name: "Goblin Warchief",
      cost: ["1", "r", "r"],
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
      name: "Haphazard Bombardment",
      cost: ["5", "r"],
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
      number: "132",
      name: "Jaya Ballard",
      cost: ["2", "r", "r", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "133",
      name: "Jaya's Immolating Inferno",
      cost: ["x", "r", "r"],
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
      number: "134",
      name: "Keldon Overseer",
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
      number: "135",
      name: "Keldon Raider",
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
      number: "136",
      name: "Keldon Warcaller",
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
      number: "137",
      name: "Orcish Vandal",
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
      number: "138",
      name: "Radiating Lightning",
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
          categories: ["removal", "boardwipe"],
        },
      ],
    },
    {
      number: "139",
      name: "Rampaging Cyclops",
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
      number: "140",
      name: "Run Amok",
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
      number: "141",
      name: "Seismic Shift",
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
      number: "142",
      name: "Shivan Fire",
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
      number: "143",
      name: "Siege-Gang Commander",
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
      number: "144",
      name: "Skirk Prospector",
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
      number: "145",
      name: "Skizzik",
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
      number: "146",
      name: "Squee, the Immortal",
      cost: ["1", "r", "r"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "147",
      name: "Two-Headed Giant",
      cost: ["2", "r", "r"],
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
      name: "Valduk, Keeper of the Flame",
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
      number: "149",
      name: "Verix Bladewing",
      cost: ["2", "r", "r"],
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
      name: "Warcry Phoenix",
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
      number: "151",
      name: "Warlord's Fury",
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
      number: "152",
      name: "Wizard's Lightning",
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
      number: "153",
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
      number: "154",
      name: "Ancient Animus",
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
      number: "155",
      name: "Arbor Armament",
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
      number: "156",
      name: "Baloth Gorger",
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
      number: "157",
      name: "Broken Bond",
      cost: ["1", "g"],
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
      number: "158",
      name: "Corrosive Ooze",
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
      number: "159",
      name: "Elfhame Druid",
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
      number: "160",
      name: "Fungal Plots",
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
      number: "161",
      name: "Gaea's Blessing",
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
      number: "162",
      name: "Gaea's Protector",
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
      number: "163",
      name: "Gift of Growth",
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
      number: "164",
      name: "Grow from the Ashes",
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
      number: "165",
      name: "Grunn, the Lonely King",
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
      number: "166",
      name: "Kamahl's Druidic Vow",
      cost: ["x", "g", "g"],
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
      name: "Krosan Druid",
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
      name: "Llanowar Elves",
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
      number: "169",
      name: "Llanowar Envoy",
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
      number: "170",
      name: "Llanowar Scout",
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
      number: "171",
      name: "Mammoth Spider",
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
      number: "172",
      name: "Marwyn, the Nurturer",
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
      name: "The Mending of Dominaria",
      cost: ["3", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "174",
      name: "Multani, Yavimaya's Avatar",
      cost: ["4", "g", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "175",
      name: "Nature's Spiral",
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
      number: "176",
      name: "Pierce the Sky",
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
      number: "177",
      name: "Primordial Wurm",
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
      number: "178",
      name: "Saproling Migration",
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
      name: "Song of Freyalise",
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
      number: "180",
      name: "Spore Swarm",
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
      number: "181",
      name: "Sporecrown Thallid",
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
      number: "182",
      name: "Steel Leaf Champion",
      cost: ["g", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "183",
      name: "Sylvan Awakening",
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
      number: "184",
      name: "Territorial Allosaurus",
      cost: ["2", "g", "g"],
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
      number: "185",
      name: "Thorn Elemental",
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
      number: "186",
      name: "Untamed Kavu",
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
      number: "187",
      name: "Verdant Force",
      cost: ["5", "g", "g", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "188",
      name: "Wild Onslaught",
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
      number: "189",
      name: "Yavimaya Sapherd",
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
      number: "190",
      name: "Adeliz, the Cinder Wind",
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
      number: "191",
      name: "Arvad the Cursed",
      cost: ["3", "w", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "192",
      name: "Aryel, Knight of Windgrace",
      cost: ["2", "w", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "193",
      name: "Darigaaz Reincarnated",
      cost: ["4", "b", "r", "g"],
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
      name: "Garna, the Bloodflame",
      cost: ["3", "b", "r"],
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
      number: "195",
      name: "Grand Warlord Radha",
      cost: ["2", "r", "g"],
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
      name: "Hallar, the Firefletcher",
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
      number: "197",
      name: "Jhoira, Weatherlight Captain",
      cost: ["2", "u", "r"],
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
      name: "Jodah, Archmage Eternal",
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
      number: "199",
      name: "Muldrotha, the Gravetide",
      cost: ["3", "b", "g", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "200",
      name: "Oath of Teferi",
      cost: ["3", "w", "u"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "201",
      name: "Primevals' Glorious Rebirth",
      cost: ["5", "w", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "202",
      name: "Raff Capashen, Ship's Mage",
      cost: ["2", "w", "u"],
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
      number: "203",
      name: "Rona, Disciple of Gix",
      cost: ["1", "u", "b"],
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
      name: "Shanna, Sisay's Legacy",
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
      number: "205",
      name: "Slimefoot, the Stowaway",
      cost: ["1", "b", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "206",
      name: "Tatyova, Benthic Druid",
      cost: ["3", "g", "u"],
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
      name: "Teferi, Hero of Dominaria",
      cost: ["3", "w", "u"],
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
      number: "208",
      name: "Tiana, Ship's Caretaker",
      cost: ["3", "r", "w"],
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
      name: "Aesthir Glider",
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
      number: "210",
      name: "Amaranthine Wall",
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
      number: "211",
      name: "Blackblade Reforged",
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
      number: "212",
      name: "Bloodtallow Candle",
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
      number: "213",
      name: "Damping Sphere",
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
      number: "214",
      name: "Forebear's Blade",
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
      number: "215",
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
      number: "216",
      name: "Guardians of Koilos",
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
      number: "217",
      name: "Helm of the Host",
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
      number: "218",
      name: "Howling Golem",
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
      number: "219",
      name: "Icy Manipulator",
      cost: ["4"],
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
      number: "220",
      name: "Jhoira's Familiar",
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
      number: "221",
      name: "Jousting Lance",
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
      number: "222",
      name: "Juggernaut",
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
      number: "223",
      name: "Mishra's Self-Replicator",
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
      number: "224",
      name: "Mox Amber",
      cost: ["0"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["spell"],
        },
      ],
    },
    {
      number: "225",
      name: "Navigator's Compass",
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
      number: "226",
      name: "Pardic Wanderer",
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
      number: "227",
      name: "Powerstone Shard",
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
      number: "228",
      name: "Shield of the Realm",
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
      name: "Short Sword",
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
      number: "230",
      name: "Skittering Surveyor",
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
      number: "231",
      name: "Sorcerer's Wand",
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
      number: "232",
      name: "Sparring Construct",
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
      number: "233",
      name: "Thran Temporal Gateway",
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
      number: "234",
      name: "Traxos, Scourge of Kroog",
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
      number: "235",
      name: "Urza's Tome",
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
      number: "236",
      name: "Voltaic Servant",
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
      number: "237",
      name: "Weatherlight",
      cost: ["4"],
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
      name: "Cabal Stronghold",
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
      number: "239",
      name: "Clifftop Retreat",
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
      name: "Hinterland Harbor",
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
      name: "Isolated Chapel",
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
      number: "242",
      name: "Memorial to Folly",
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
      number: "243",
      name: "Memorial to Genius",
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
      number: "244",
      name: "Memorial to Glory",
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
      number: "245",
      name: "Memorial to Unity",
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
      number: "246",
      name: "Memorial to War",
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
      number: "247",
      name: "Sulfur Falls",
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
      name: "Woodland Cemetery",
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
      name: "Zhalfirin Void",
      cost: [],
      rarity: "u",
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
