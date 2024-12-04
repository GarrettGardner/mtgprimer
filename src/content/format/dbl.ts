import type { IFormatConfig } from "@/models";

const format: IFormatConfig = {
  code: "dbl",
  name: "Innistrad: Double Feature",
  includeFormats: ["mid", "vow"],
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
  guideGroups: {
    effects: {
      name: "Effect-o-pedia",
      defaultGrouping: "category",
      defaultOrdering: "number",
      categories: {},
      guides: {
        boardwipe: {
          name: "Boardwipe",
        },
        bounce: {
          name: "Bounce",
        },
        counterspell: {
          name: "Counterspell",
        },
        discard: {
          name: "Discard",
        },
        disenchant: {
          name: "Disenchant",
        },
        falter: {
          name: "Falter",
        },
        fog: {
          name: "Fog",
        },
        haste: {
          name: "Haste",
        },
        lifegain: {
          name: "Lifegain",
        },
        fixing: {
          name: "Fixing",
        },
        ramp: {
          name: "Ramp",
        },
        masspump: {
          name: "Mass Pump",
        },
        ping: {
          name: "Ping",
        },
        mill: {
          name: "Mill",
        },
        mindcontrol: {
          name: "Mind Control",
        },
        threaten: {
          name: "Threaten",
        },
      },
    },
  },
  cards: [],
};

export default format;
