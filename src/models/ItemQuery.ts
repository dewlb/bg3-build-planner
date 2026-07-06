import type { GearSlot } from "./enums/GearSlot";

export interface ItemQuery {
    search: string;

    act?: 1 | 2 | 3;

    slot?: GearSlot;

    rarity?: string;

    buildTag?: string;
}