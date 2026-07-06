import type { Item } from "../../models/item";
import { useSelectedItem } from "../../context/SelectedItemContext";

interface Props {
    item: Item;
}

export default function ItemCard({ item }: Props) {
    const { selectItem } = useSelectedItem();

    return (
        <button
            type="button"
            onClick={() => selectItem(item)}
            className="
                w-full
                cursor-pointer
                rounded-xl
                border
                border-zinc-800
                bg-zinc-900
                p-5
                text-left
                transition-all
                duration-200

                hover:-translate-y-1
                hover:border-amber-500
                hover:shadow-xl
                hover:shadow-amber-500/20

                focus:outline-none
                focus:ring-2
                focus:ring-amber-500
            "
        >
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="text-xl font-bold text-white">
                        {item.name}
                    </h2>

                    <p className="text-sm text-zinc-400">
                        {item.slot}
                    </p>
                </div>

                <span
                    className="
                        rounded-full
                        bg-blue-600
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        text-white
                    "
                >
                    Act {item.act}
                </span>
            </div>

            <div className="mt-5 space-y-1 text-sm text-zinc-300">
                <p>{item.region}</p>
                <p>{item.location}</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
                {item.buildTags.map((tag) => (
                    <span
                        key={tag}
                        className="
                            rounded-full
                            bg-zinc-800
                            px-3
                            py-1
                            text-xs
                            text-zinc-300
                        "
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </button>
    );
}