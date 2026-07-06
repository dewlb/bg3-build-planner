export const GearSlots = [
    "Weapon",
    "Helmet",
    "Armor",
    "Gloves",
    "Boots",
    "Ring",
    "Amulet",
    "Cloak",
    "Shield",
] as const;

export type GearSlot = typeof GearSlots[number];