import type { ResolvedBuildItem } from "../../services/BuildService";
import ItemCard from "../items/ItemCard";

import PlannerItemCard from "./PlannerItemCard";

interface Props {
    title: string;
    items: ResolvedBuildItem[];

    collectedItemIds?: string[];

    onToggleItem?: (itemId: string) => void;

    interactive?: boolean;
}

export default function GearSection({
    title,
    items,
    collectedItemIds = [],
    onToggleItem,
    interactive,
}: Props) {

    if (!items.length) return null;

    const collected = items.filter(item =>
        collectedItemIds.includes(item.item.id)
    ).length;

    const total = items.length;

    return (

        <section className="mt-10">

            <h2 className="mb-5 text-2xl font-bold">
                {title}
            </h2>

            {interactive && (
                <div className="mb-6">

                    <div className="mb-2 flex justify-between text-sm text-zinc-400">

                        <span>Progress</span>

                        <span>
                            {collected} / {total}
                        </span>

                    </div>

                    <div className="h-2 rounded-full bg-zinc-800">

                        <div
                            className="h-2 rounded-full bg-amber-400 transition-all"
                            style={{
                                width: `${(collected / total) * 100}%`,
                            }}
                        />

                    </div>

                </div>
            )}

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {items.map(({ item }) =>

                    interactive ? (

                        <PlannerItemCard
                            key={item.id}
                            item={item}
                            checked={collectedItemIds.includes(item.id)}
                            onToggle={() => onToggleItem?.(item.id)}
                        />

                    ) : (

                        <ItemCard
                            key={item.id}
                            item={item}
                        />

                    )

                )}

            </div>

        </section>

    );

}