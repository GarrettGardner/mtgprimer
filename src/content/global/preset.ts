export const PRESET: Record<
  string,
  { NAME: string; ICON: string; DESCRIPTION: string; TAGS?: string[] }
> = {
  info: {
    NAME: "Format Information",
    ICON: "fas fa-sitemap",
    DESCRIPTION: "General info for %formatName.",
  },
  "guide-gallery": {
    NAME: "Full Card Gallery",
    ICON: "fas fa-table-cells-large",
    DESCRIPTION: "An interactive guide of every card available in %formatName.",
  },
  "guide-instants": {
    NAME: "Instants Guide",
    ICON: "fas fa-bolt-lightning",
    DESCRIPTION:
      "An interactive guide for all instant-speed tricks and spells found in %formatName.",
  },
  "guide-group-effects": {
    NAME: "Effect-o-pedia",
    ICON: "fas fa-book",
    DESCRIPTION: "An encyclopedia of common effects found in %formatName.",
  },
  "guide-group-removal": {
    NAME: "Removal Guide",
    ICON: "fas fa-skull",
    DESCRIPTION: "An interactive guide of all removal effects in %formatName.",
  },
  "guide-bounce": {
    NAME: "Bounce",
    ICON: "fas fa-ghost",
    DESCRIPTION:
      "Effects which return cards on the battlefield to their owner's hands, such as Unsummon.",
    TAGS: ["Unsummon", "Tuck"],
  },
  "guide-counterspell": {
    NAME: "Counterspell",
    ICON: "fas fa-magic",
    DESCRIPTION: "Effects which counter spells, such as Counterspell.",
    TAGS: ["Denial"],
  },
  "guide-damage": {
    NAME: "Player Damage",
    ICON: "fas fa-bandage",
    DESCRIPTION:
      "Effects which can deal damage to players or make them lose life, such as Blaze or Drain Life.",
    TAGS: ["Face Burn", "Direct Damage", "Lava Axe"],
  },
  "guide-destruction": {
    NAME: "Creature Destruction",
    ICON: "fas fa-skull-crossbones",
    DESCRIPTION:
      "Effects which can destroy creatures through any means, such as Murder or Disfigure.",
    TAGS: ["Destroy", "Exile", "Spot Removal", "Disfigure", "Murder"],
  },
  "guide-discard": {
    NAME: "Discard",
    ICON: "fas fa-book-dead",
    DESCRIPTION:
      "Effects which force players to discard cards from their hand, such as Mind Rot.",
    TAGS: ["Mind Rot"],
  },
  "guide-disenchant": {
    NAME: "Disenchant",
    ICON: "fas fa-wine-glass",
    DESCRIPTION:
      "Effects which destroy artifacts or enchantments, such as Disenchant.",
    TAGS: ["Artifact Hate", "Enchantment Hate"],
  },
  "guide-disruption": {
    NAME: "Disruption",
    ICON: "fas fa-hand-sparkles",
    DESCRIPTION:
      "Effects which can temporarily disrupt creatures from functioning, such as Frost Lynx or Icy Manipulator.",
    TAGS: ["Stun"],
  },
  "guide-draw": {
    NAME: "Card Draw",
    ICON: "fas fa-money-bill",
    DESCRIPTION:
      "Effects which allow players to draw cards, such as Divination.",
    TAGS: ["Card Advantage"],
  },
  "guide-equipment": {
    NAME: "Equipment",
    ICON: "fas fa-shield-heart",
    DESCRIPTION:
      "Equipment card types, and effects that synergize with equipment, such as Short Sword.",
    TAGS: ["Creature Enhancement"],
  },
  "guide-falter": {
    NAME: "Falter",
    ICON: "fas fa-dizzy",
    DESCRIPTION:
      "Effects which prevent multiple creatures from blocking temporarily, such as Falter.",
    TAGS: ["Can't Block"],
  },
  "guide-fixing": {
    NAME: "Color Fixing",
    ICON: "fas fa-tree",
    DESCRIPTION: "Effects which fix for colors, such as Prophetic Prism.",
    TAGS: ["WUBRG", "Splashing"],
  },
  "guide-flying": {
    NAME: "Flying",
    ICON: "fas fa-plane",
    DESCRIPTION:
      "Creatures with flying or effects which grant flying, such as Ornithopter or Jump.",
  },
  "guide-fog": {
    NAME: "Fog",
    ICON: "fas fa-smog",
    DESCRIPTION:
      "Effects which prevent damage for multiple sources, such as Fog.",
    TAGS: ["Combat Damage Prevention"],
  },
  "guide-haste": {
    NAME: "Haste",
    ICON: "fas fa-fighter-jet",
    DESCRIPTION:
      "Effects which grant haste to creatures, or creatures that have haste, such as Raging Goblin or Expedite.",
  },
  "guide-lifegain": {
    NAME: "Lifegain",
    ICON: "fas fa-first-aid",
    DESCRIPTION:
      "Effects which gain life for a player, such as Stream of Life or Healer's Hawk.",
  },
  "guide-lockdown": {
    NAME: "Creature Lockdown",
    ICON: "fas fa-icicles",
    DESCRIPTION:
      "Effects which lock creatures down, such as Pacifism, Sleep Deprivation, or Banishing Light.",
    TAGS: ["Pacifism", "Banishing Light", "Arrest"],
  },
  "guide-masspump": {
    NAME: "Mass Pump",
    ICON: "fas fa-fist-raised",
    DESCRIPTION:
      "Fffects which pump all of a player's creatures power and or toughness, such as Overrun or Glorious Anthem.",
    TAGS: ["Anthem", "Overrun"],
  },
  "guide-mill": {
    NAME: "Mill",
    ICON: "fas fa-head-side-virus",
    DESCRIPTION:
      "Effects which can mill your or your opponent's decks, such as Millstone.",
    TAGS: ["Self Mill"],
  },
  "guide-mindcontrol": {
    NAME: "Mind Control",
    ICON: "fas fa-grin-stars",
    DESCRIPTION:
      "Effects which permanently steal opponent's creatures, such as Control Magic.",
    TAGS: ["Control Magic"],
  },
  "guide-ping": {
    NAME: "Ping",
    ICON: "fas fa-times",
    DESCRIPTION:
      "Effects which destroy creatures with 1 toughness, such as Prodigal Sorcerer or Goblin Bombardment.",
    TAGS: ["Prodigal Sorcerer"],
  },
  "guide-ramp": {
    NAME: "Mana Ramp",
    ICON: "fas fa-seedling",
    DESCRIPTION: "Effects which ramp mana, such as Elvish Mystic.",
    TAGS: ["Mana Rocks"],
  },
  "guide-reach": {
    NAME: "Reach",
    ICON: "fas fa-spider",
    DESCRIPTION:
      "Creatures with reach or effects that grant reach, such as Giant Spider.",
    TAGS: ["Block Flying"],
  },
  "guide-reanimate": {
    NAME: "Reanimate",
    ICON: "fas fa-biohazard",
    DESCRIPTION:
      "Effects which return creatures or permanents from the graveyard to the battlefield, such as Zombify or Resurrection.",
    TAGS: ["Zombify", "Resurrect"],
  },
  "guide-shrink": {
    NAME: "Shrink",
    ICON: "fas fa-minimize",
    DESCRIPTION:
      "Effects which shrink creatures temporarily or permanently, such as Dead Weight or Befuddle.",
    TAGS: ["Sensory Deprivation"],
  },
  "guide-threaten": {
    NAME: "Threaten",
    ICON: "fas fa-grin-stars",
    DESCRIPTION:
      "Effects which temporarily steal opponent's creatures, such as Threaten.",
    TAGS: ["Act of Treason"],
  },
  "guide-trample": {
    NAME: "Trample",
    ICON: "fas fa-shoe-prints",
    DESCRIPTION:
      "Creatures with trample or effects that grant trample, such as Crash Through.",
  },
  "guide-wrath": {
    NAME: "Wrath",
    ICON: "fas fa-meteor",
    DESCRIPTION:
      "Effects which remove multiple creatures from the battlefield, such as Wrath of God.",
    TAGS: ["Board Wipe", "Sweeper", "Damnation", "Plague Wind"],
  },
};
