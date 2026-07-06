import { z } from "zod";
import { GearSlots } from "./enums/GearSlot";

export const ItemSchema = z.object({
    id: z.string(),
    name: z.string(),

    slot: z.enum(GearSlots),

    act: z.union([
        z.literal(1),
        z.literal(2),
        z.literal(3)
    ]),

    rarity: z.string(),

    region: z.string(),

    location: z.string(),

    obtainMethod: z.string(),

    vendor: z.string().optional(),

    buildTags: z.array(z.string()),

    notes: z.string()
});

export type Item = z.infer<typeof ItemSchema>;