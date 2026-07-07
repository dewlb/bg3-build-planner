import { z } from "zod";

export const ItemSchema = z.object({
    id: z.string(),

    name: z.string(),

    act: z.union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
    ]),

    slot: z.string(),

    rarity: z.string(),

    region: z.string(),

    location: z.string(),

    vendor: z.string().optional(),

    acquisitionType: z.enum([
        "Vendor",
        "Loot",
        "Quest",
        "Crafted",
    ]),

    missable: z.boolean(),

    buildTags: z.array(z.string()),

    notes: z.string().optional(),
});

export type Item = z.infer<typeof ItemSchema>;