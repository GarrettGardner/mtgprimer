import fse from "fs-extra";
import axios from "axios";
import path from "path";

import type { IFormatConfig, TRarity } from "@/models";

const [, , inputFormatCode] = process.argv;

const PATH_OUTPUT_TXT = path.join(__dirname, "../../export/output.txt");
const PATH_OUTPUT_TS = path.join(__dirname, `../../export/${inputFormatCode}.ts`);

const RARITY_MAP: { [key: string]: string } = {
  mythic: "m",
  rare: "r",
  uncommon: "u",
  common: "c",
};

const sleep = async (ms: number) => new Promise((r) => setTimeout(r, ms));

const logAction = (type: "error" | "warn" | "note" | "success", text?: string, additional?: string) => {
  const line = `${type.toUpperCase()}: ${text}${additional ? ` (${additional})` : ""}\r\n`;
  fse.appendFile(PATH_OUTPUT_TXT, line).catch((e: Error) => {
    console.error(e.stack);
  });
  if (type === "error") {
    console.error(line);
  } else {
    console.log(line);
  }
};

const parseCost = (input: string) =>
  input.match(/(?<=\{).+?(?=\})/g)?.map((costItem) => costItem.replace("/", "").toLowerCase()) ?? [];
/*
  input = input.replace("{", "");  
  const inputParts = input.split("}");
  inputParts.pop();
  return inputParts.map((costItem) => costItem.replace("/", "").toLowerCase());
};
*/

const getCardsScryfall = async (query: string) => {
  let hasMore = true;

  let scryfallAPI = `https://api.scryfall.com/cards/search?order=set&q=${query}`;
  logAction("note", `Loading Scryfall results from url: ${scryfallAPI}`);
  let cardsScryfall: any[] = [];
  let page = 1;
  while (scryfallAPI && hasMore) {
    const response = await axios.get<any>(scryfallAPI);

    if (response?.status !== 200 || !response.data) {
      logAction("error", "Response from Scryfall failed", JSON.stringify(response));
      break;
    }

    cardsScryfall = cardsScryfall.concat(response.data?.data);

    if (response.data?.has_more) {
      if (response.data?.data.find((card: any) => card?.name === "Plains")) {
        logAction(
          "note",
          "Scryfall results have more pages, but Plains was detected indicating the end of relevant cards.",
        );
        hasMore = false;
      } else {
        page++;
        logAction("note", `Scryfall results have more pages, loading next (page ${page}).`);
        await sleep(15000);
        scryfallAPI = response.data?.next_page;
      }
    } else {
      hasMore = false;
    }
  }

  const plainsIndex = cardsScryfall.findIndex((card) => card?.name === "Plains");
  cardsScryfall = cardsScryfall.slice(0, plainsIndex > -1 ? plainsIndex : undefined);

  logAction("success", `Scryfall results completed successfully (${cardsScryfall.length ?? "0"} cards loaded).`);
  return cardsScryfall;
};

const parseGuides = (typeline = "", oracle = "") => {
  typeline = typeline.toLowerCase();
  oracle = oracle.toLowerCase();
  const guides = [];

  const fullCategories = [];
  if (typeline.search("creature") > -1) {
    fullCategories.push("creature");
  }
  if (typeline.search("land") > -1) {
    fullCategories.push("land");
  }
  if (fullCategories.length < 1) {
    fullCategories.push("spell");
  }
  guides.push({
    guide: "full",
    categories: fullCategories,
  });

  if (typeline.search("instant") > -1 || (oracle.search("flash") > -1 && oracle.search("flashback") === -1)) {
    const instantsCategories = [];
    if (oracle.search("counter target") > -1) {
      instantsCategories.push("counterspell");
    }
    if (instantsCategories.length < 1) {
      instantsCategories.push("board");
    }
    guides.push({
      guide: "instants",
      categories: instantsCategories,
    });
  }

  if ((oracle.search("destroy all") > -1 || oracle.search("exile all") > -1) && oracle.search("creatures") > -1) {
    guides.push({
      guide: "boardwipe",
    });
  }

  if (oracle.search("counter target") > -1 || oracle.search("counter it") > -1) {
    guides.push({
      guide: "counterspell",
    });
  }

  return guides;
};

const parseFormat = async (formatCode: string) => {
  formatCode = formatCode.toLocaleLowerCase();

  const format: IFormatConfig = {
    code: "exa",
    name: "Example Format",
    includeFormats: [],
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
      interaction: {
        name: "Interaction Guide",
        defaultGrouping: "color",
        defaultOrdering: "number",
        categories: {},
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
      themes: {
        name: "Themes & Mechanics",
        defaultGrouping: "category",
        defaultOrdering: "number",
        categories: {},
        guides: {},
      },
    },
    cards: [],
  };

  const cardsScryfall = await getCardsScryfall(`set:${formatCode}`);

  format.code = formatCode;
  format.name = cardsScryfall?.[0]?.set_name;

  cardsScryfall.forEach((cardScryfall: any) => {
    const card = {
      number: cardScryfall?.collector_number.toLowerCase() ?? "!REVIEW!NUMBER",
      name: cardScryfall?.name ?? "!REVIEW!NAME",
      cost: parseCost(cardScryfall?.mana_cost ?? "!REVIEW!COST"),
      rarity: (RARITY_MAP?.[cardScryfall?.rarity as string] as TRarity) ?? ("!REVIEW!RARITY" as TRarity),
      guides: parseGuides(cardScryfall?.type_line, cardScryfall?.oracle_text),
    };

    /*
    TODO: Implement booleans for card layouts

    let isRotatable: boolean | undefined;
    let isRotatableLeft: boolean | undefined;
    let isRotatableRight: boolean | undefined;
    let isAdventureLeft: boolean | undefined;
    let isAdventureRight: boolean | undefined;
    let isInvertable: boolean | undefined;
    */

    const faces = cardScryfall?.card_faces;

    if (!!faces && Array.isArray(faces)) {
      let isFlippable: boolean | undefined;
      if (faces?.[0]?.["image_uris"]) {
        isFlippable = true;
      }

      let isFlipped: boolean | undefined;
      faces.forEach((face) => {
        format.cards.push({
          ...card,
          name: `${card.name} (${face?.name})`,
          cost: parseCost(face?.mana_cost),
          guides: parseGuides(face?.type_line, face?.oracle_text),
          isFlippable,
          isFlipped,
        });
        if (isFlippable) {
          isFlipped = true;
        }
      });
    } else {
      format.cards.push(card);
    }
  });

  logAction("success", "Operation completed succesfully.");

  return format;
};

const exportFormat = async (formatCode: string) => {
  let exitError = false;
  await fse.writeFile(PATH_OUTPUT_TXT, "").catch((e: Error) => {
    logAction("error", `output.txt file overwrite error: ${e.stack}`);
    exitError = true;
  });

  if (exitError) {
    return;
  }
  exitError = false;
  await fse.writeFile(PATH_OUTPUT_TS, "").catch((e: Error) => {
    logAction("error", `format.ts file overwrite error: ${e.stack}`);
    exitError = true;
  });

  if (exitError) {
    return;
  }

  const format = await parseFormat(formatCode);

  let line = `import type { IFormatConfig } from "@/models";\r\n`;
  line += "\r\n";
  line += "const format: IFormatConfig = ";
  line += JSON.stringify(format, null, 2);
  line += "\r\n";
  line += "\r\n";
  line += "export default format;";
  line += "\r\n";
  fse.appendFile(PATH_OUTPUT_TS, line).catch((e: Error) => {
    console.error(e.stack);
  });
};

if (!inputFormatCode || inputFormatCode.length !== 3) {
  logAction("error", "Format code invalid.");
} else {
  exportFormat(inputFormatCode);
}
