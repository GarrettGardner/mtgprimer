import type { IPageConfigPreset } from "@/models";

export const PAGE_CONFIG_PRESET: IPageConfigPreset[] = [
  {
    slug: "info",
    icon: "fas fa-sitemap",
    title: "Format Information",
    description: "General info for %formatName.",
  },
  {
    slug: "guide-gallery",
    icon: "fas fa-table-cells-large",
    title: "Full Card Gallery",
    description: "An interactive guide of every card available in %formatName.",
  },
  {
    slug: "guide-instants",
    icon: "fas fa-bolt-lightning",
    title: "Instants Guide",
    description: "An interactive guide for all instant-speed tricks and spells found in %formatName.",
  },
  {
    slug: "guide-interaction",
    icon: "fas fa-hand-pointer",
    title: "Interaction Guide",
    description: "An interactive guide of all effects that can interact with your opponent in %formatName.",
  },
  {
    slug: "guide-group-effects",
    icon: "fas fa-book",
    title: "Effect-o-pedia",
    description: "An encyclopedia of common effects found in %formatName.",
  },
];

export const PRESET: { [key in "ICON" | "DESCRIPTION"]: { [key: string]: string } } = {
  ICON: {
    "guide-boardwipe": "fas fa-meteor",
    "guide-bounce": "fas fa-ghost",
    "guide-counterspell": "fas fa-magic",
    "guide-discard": "fas fa-book-dead",
    "guide-disenchant": "fas fa-wine-glass",
    "guide-falter": "fas fa-dizzy",
    "guide-fog": "fas fa-smog",
    "guide-haste": "fas fa-fighter-jet",
    "guide-lifegain": "fas fa-first-aid",
    "guide-fixing": "fas fa-tree",
    "guide-ramp": "fas fa-seedling",
    "guide-masspump": "fas fa-fist-raised",
    "guide-ping": "fas fa-times",
    "guide-mill": "fas fa-head-side-virus",
    "guide-threaten": "fas fa-grin-stars",
  },
  DESCRIPTION: {
    "guide-boardwipe": "Effects that can kill all creatures on the battlefield.",
    "guide-bounce": "Effects that return cards to their owners hand.",
    "guide-counterspell": "Effects that can counter spells.",
    "guide-discard": "Effects that can force you discard cards from your hand.",
    "guide-disenchant": "Effects that destroy artifacts or enchantments.",
    "guide-falter": "Effects that make it so creatures temporarily cannot block.",
    "guide-fog": "Effects that prevent combat damage for multiple or all creatures.",
    "guide-haste": "Effects that can grant haste to creatures, or creatures that have haste.",
    "guide-lifegain": "'Gaining life!",
    "guide-fixing": "Effects that fix for colors.",
    "guide-ramp": "Effects that ramp mana.",
    "guide-masspump": "Fffects that pump all of a player's creatures.",
    "guide-ping": "Effects that can kill creatures with 1 toughness.",
    "guide-mill": "Effects that can mill your or your opponent's decks.",
    "guide-threaten": "Effects that steal your creatures, temporarily or permanently.",
  },
};
