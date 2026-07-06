import { z } from "zod";

export const BuildItemSchema = z.object({
    itemId: z.string(),

    act: z.union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
    ]),

    priority: z.enum([
        "Core",
        "Strong",
        "Optional",
    ]),

    notes: z.string().optional(),
});

export type BuildItem = z.infer<typeof BuildItemSchema>;