import type { Build } from "../models/build/Build";
import type { BuildItem } from "../models/build/BuildItem";
import type { Item } from "../models/item";

export interface ResolvedBuildItem extends Omit<BuildItem, "itemId"> {
    item: Item;
}

export interface ResolvedBuild extends Omit<Build, "items"> {
    items: ResolvedBuildItem[];
}

export function resolveBuild(
    build: Build,
    items: Item[],
): ResolvedBuild {
    return {
        ...build,

        items: build.items.map((buildItem) => {
            const item = items.find(
                (item) => item.id === buildItem.itemId,
            );

            if (!item) {
                throw new Error(
                    `Unknown item id "${buildItem.itemId}" in build "${build.name}".`,
                );
            }

            return {
                ...buildItem,
                item,
            };
        }),
    };
}

export function getCoreItems(
    build: ResolvedBuild,
): ResolvedBuildItem[] {
    return build.items.filter(
        (item) => item.priority === "Core",
    );
}

export function getItemsForAct(
    build: ResolvedBuild,
    act: 1 | 2 | 3,
): ResolvedBuildItem[] {
    return build.items.filter(
        (item) => item.act === act,
    );
}