import type { ResolvedBuildItem } from "../../services/BuildService";

import ItemCard from "../items/ItemCard";

interface Props {
    title: string;
    items: ResolvedBuildItem[];
}

export default function GearSection({
    title,
    items,
}: Props) {
    if (!items.length) return null;

    return (
        <section className="mt-10">

            <h2 className="mb-5 text-2xl font-bold">
                {title}
            </h2>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {items.map(({ item }) => (
                    <ItemCard
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>

        </section>
    );
}