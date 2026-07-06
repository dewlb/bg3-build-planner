import type { ResolvedBuildItem } from "../../services/BuildService";

import ItemCard from "../items/ItemCard";

interface Props {
    title: string;
    items: ResolvedBuildItem[];
}

export default function BuildSection({
    title,
    items,
}: Props) {
    if (items.length === 0) return null;

    return (
        <section className="mt-10">

            <h2 className="mb-4 text-2xl font-bold">
                {title}
            </h2>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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