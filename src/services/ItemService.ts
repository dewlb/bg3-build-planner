import Fuse from "fuse.js";
import type { Item } from "../models/item";
import type { ItemQuery } from "../models/ItemQuery";

export function queryItems(
    items: Item[],
    filters: ItemQuery
): Item[] {

    let results = [...items];

    if (filters.act) {
        results = results.filter(
            item => item.act === filters.act
        );
    }

    if (filters.slot) {
        results = results.filter(
            item => item.slot === filters.slot
        );
    }

    if (filters.rarity) {
        results = results.filter(
            item => item.rarity === filters.rarity
        );
    }

    if (filters.buildTag) {
        results = results.filter(item =>
            item.buildTags.includes(filters.buildTag!)
        );
    }

    if (filters.search.trim()) {

        const fuse = new Fuse(results, {
            threshold: 0.35,
            keys: [
                "name",
                "region",
                "vendor",
                "buildTags",
                "notes"
            ]
        });

        results = fuse.search(filters.search)
            .map(result => result.item);
    }

    return results;
}