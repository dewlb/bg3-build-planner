import { z } from "zod";

import { BuildLevelSchema } from "./BuildLevel";
import { BuildItemSchema } from "./BuildItem";

export const BuildSchema = z.object({
    id: z.string(),

    name: z.string(),

    description: z.string(),

    author: z.string().optional(),

    levels: z.array(BuildLevelSchema),

    items: z.array(BuildItemSchema),
});

export type Build = z.infer<typeof BuildSchema>;