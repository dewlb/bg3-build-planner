import type { Build } from "./Build";
import type { Item } from "../item";

export interface ResolvedBuild
    extends Omit<Build, "items"> {

    items: {

        item: Item;

        priority: "Core" | "Strong" | "Optional";

        act: 1 | 2 | 3;

        notes?: string;

    }[];

}