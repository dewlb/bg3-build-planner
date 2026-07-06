import { z } from "zod";

export const BuildLevelSchema = z.object({
    level: z.number().min(1).max(12),

    className: z.string(),

    subclass: z.string().optional(),

    feat: z.string().optional(),

    notes: z.string().optional(),
});

export type BuildLevel = z.infer<typeof BuildLevelSchema>;