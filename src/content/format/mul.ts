import type { IFormatConfig } from "@/models";

const format: IFormatConfig = {
  code: "mul",
  name: "Multiverse Legends",
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
        wipe: "Board Wipe",
        other: "Other",
      },
    },
  },
  cards: [
    {
      number: "1",
      name: "Anafenza, Kin-Tree Spirit",
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
      number: "2",
      name: "Daxos, Blessed by the Sun",
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
      number: "3",
      name: "Elesh Norn, Grand Cenobite",
      cost: ["5", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "4",
      name: "Kenrith, the Returned King",
      cost: ["4", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "5",
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
      number: "6",
      name: "Sram, Senior Edificer",
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
      number: "7",
      name: "Thalia, Guardian of Thraben",
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
      number: "8",
      name: "Baral, Chief of Compliance",
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
      number: "9",
      name: "Emry, Lurker of the Loch",
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
      number: "10",
      name: "Inga Rune-Eyes",
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
      number: "11",
      name: "Jin-Gitaxias, Core Augur",
      cost: ["8", "u", "u"],
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
      number: "12",
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
      number: "13",
      name: "Ayara, First of Locthwain",
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
      number: "14",
      name: "Horobi, Death's Wail",
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
      number: "15",
      name: "Seizan, Perverter of Truth",
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
      number: "16",
      name: "Sheoldred, Whispering One",
      cost: ["5", "b", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "17",
      name: "Skithiryx, the Blight Dragon",
      cost: ["3", "b", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "18",
      name: "Tymaret, Chosen from Death",
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
      number: "19",
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
      number: "20",
      name: "Captain Lannery Storm",
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
      number: "21",
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
      number: "22",
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
      number: "23",
      name: "Urabrask the Hidden",
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
      number: "24",
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
      number: "25",
      name: "Zada, Hedron Grinder",
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
      number: "26",
      name: "Fynn, the Fangbearer",
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
      number: "27",
      name: "Goreclaw, Terror of Qal Sisma",
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
      number: "28",
      name: "Renata, Called to the Hunt",
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
      number: "29",
      name: "Vorinclex, Voice of Hunger",
      cost: ["6", "g", "g"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "30",
      name: "Yedora, Grave Gardener",
      cost: ["4", "g"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "31",
      name: "Aegar, the Freezing Flame",
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
      number: "32",
      name: "Arixmethes, Slumbering Isle",
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
      number: "33",
      name: "Atraxa, Praetors' Voice",
      cost: ["g", "w", "u", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "34",
      name: "Atris, Oracle of Half-Truths",
      cost: ["2", "u", "b"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "35",
      name: "Aurelia, the Warleader",
      cost: ["2", "r", "r", "w", "w"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "36",
      name: "Brudiclad, Telchor Engineer",
      cost: ["4", "u", "r"],
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
      name: "Dina, Soul Steeper",
      cost: ["b", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "38",
      name: "Ezuri, Claw of Progress",
      cost: ["2", "g", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "39",
      name: "Firesong and Sunspeaker",
      cost: ["4", "r", "w"],
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
      name: "Firja, Judge of Valor",
      cost: ["2", "w", "b", "b"],
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
      name: "Grimgrin, Corpse-Born",
      cost: ["3", "u", "b"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "42",
      name: "Gyruda, Doom of Depths",
      cost: ["4", "ub", "ub"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "43",
      name: "Imoti, Celebrant of Bounty",
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
      number: "44",
      name: "Jegantha, the Wellspring",
      cost: ["4", "rg"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "45",
      name: "Judith, the Scourge Diva",
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
      number: "46",
      name: "Juri, Master of the Revue",
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
      number: "47",
      name: "Kaheera, the Orphanguard",
      cost: ["1", "gw", "gw"],
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
      number: "49",
      name: "Kroxa, Titan of Death's Hunger",
      cost: ["b", "r"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "50",
      name: "Lathiel, the Bounteous Dawn",
      cost: ["2", "g", "w"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "51",
      name: "Lurrus of the Dream-Den",
      cost: ["1", "wb", "wb"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "52",
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
      ],
    },
    {
      number: "53",
      name: "Niv-Mizzet Reborn",
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
      number: "54",
      name: "Obosh, the Preypiercer",
      cost: ["3", "br", "br"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "55",
      name: "Radha, Coalition Warlord",
      cost: ["2", "r", "g"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "56",
      name: "Raff, Weatherlight Stalwart",
      cost: ["w", "u"],
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
      name: "Reyav, Master Smith",
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
      number: "58",
      name: "Rona, Sheoldred's Faithful",
      cost: ["1", "u", "b", "b"],
      rarity: "u",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "59",
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
      number: "60",
      name: "Taigam, Ojutai Master",
      cost: ["2", "w", "u"],
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
      name: "Teysa Karlov",
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
      number: "62",
      name: "Umori, the Collector",
      cost: ["2", "bg", "bg"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "63",
      name: "Yarok, the Desecrated",
      cost: ["2", "b", "g", "u"],
      rarity: "m",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "64",
      name: "Yorion, Sky Nomad",
      cost: ["3", "wu", "wu"],
      rarity: "r",
      guides: [
        {
          guide: "full",
          categories: ["creature"],
        },
      ],
    },
    {
      number: "65",
      name: "Zirda, the Dawnwaker",
      cost: ["1", "rw", "rw"],
      rarity: "r",
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
