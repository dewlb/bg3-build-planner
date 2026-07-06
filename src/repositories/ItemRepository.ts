import items from "../data/items.json";
import { ItemSchema } from "../models/item";
import type { Item } from "../models/item";

export class ItemRepository {

    static getAllItems(): Item[] {

        return items.map(item => ItemSchema.parse(item));

    }

}