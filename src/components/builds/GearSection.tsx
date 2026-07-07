import { useState } from "react";

import type { ResolvedBuildItem } from "../../services/BuildService";

import PlannerItemCard from "./PlannerItemCard";

interface Props {
    title: string;
    items: ResolvedBuildItem[];
    collectedItemIds?: string[];
}

export default function GearSection({
    title,
    items,
    collectedItemIds,
}: Props) {

    if (!items.length) return null;

    const [checkedItems, setCheckedItems] = useState(
        collectedItemIds ?? []
    );

    const collected = items.filter(item =>
        checkedItems.includes(item.item.id)
    ).length;

    const total = items.length;

    function toggleItem(itemId: string) {

        setCheckedItems(current =>

            current.includes(itemId)
                ? current.filter(id => id !== itemId)
                : [...current, itemId]

        );

    }

    return (

        <section className="mt-10">

            <h2 className="mb-5 text-2xl font-bold">
                {title}
            </h2>

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

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                {items.map(({ item }) => (

                    <PlannerItemCard
                        key={item.id}
                        item={item}
                        checked={checkedItems.includes(item.id)}
                        onToggle={() => toggleItem(item.id)}
                    />

                ))}

            </div>

        </section>

    );

}