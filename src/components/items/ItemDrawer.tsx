import {

    useSelectedItem

} from "../../context/SelectedItemContext";

import { X } from "lucide-react";
import FilterChip from "../common/FilterChip";

export default function ItemDrawer() {

    const {

        selectedItem,

        selectItem,

    } = useSelectedItem();

    if (!selectedItem)

        return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="
                    fixed
                    inset-0
                    z-40
                    bg-black/40
                "
                onClick={() => selectItem(undefined)}
            />

            {/* Drawer */}
            <aside
                className="
                    fixed
                    right-0
                    top-0
                    z-50
                    h-screen
                    w-96
                    border-l
                    border-zinc-800
                    bg-zinc-950
                    p-8
                "
            >
                <button
                    onClick={() => selectItem(undefined)}
                    className="
                        absolute
                        right-4
                        top-4
                        rounded-lg
                        p-2
                        text-zinc-400
                        transition
                        hover:bg-zinc-800
                        hover:text-white
                    "
                >
                    <X size={22} />
                </button>

                <h1 className="text-3xl font-black">
                    {selectedItem.name}
                </h1>

                <p className="mt-1 text-zinc-400">
                    {selectedItem.rarity} • {selectedItem.slot}
                </p>

                <div className="mt-8 rounded-xl bg-zinc-900 p-4">
                    <h3 className="mb-2 text-sm font-bold uppercase text-zinc-400">
                        Location
                    </h3>

                    <p>{selectedItem.region}</p>

                    <p className="text-zinc-400">
                        {selectedItem.location}
                    </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                    {selectedItem.buildTags.map((tag) => (
                        <FilterChip
                            key={tag}
                            label={tag}
                            active={false}
                            onClick={() => {}}
                        />
                    ))}
                </div>
            </aside>
        </>
    );
}