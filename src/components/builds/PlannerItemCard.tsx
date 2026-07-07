import { Check } from "lucide-react";

import type { Item } from "../../models/item";

interface Props {
    item: Item;
    checked: boolean;
    onToggle: () => void;
}

export default function PlannerItemCard({
    item,
    checked,
    onToggle,
}: Props) {

    return (

        <button
            onClick={onToggle}
            className="
                flex
                w-full
                items-start
                gap-4

                rounded-xl
                border
                border-zinc-800
                bg-zinc-900
                p-5

                text-left

                transition

                hover:border-amber-400
            "
        >

            <div
                className={`
                    mt-1
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-md
                    border

                    ${
                        checked
                            ? "border-amber-400 bg-amber-400 text-black"
                            : "border-zinc-600"
                    }
                `}
            >

                {checked && <Check size={16} />}

            </div>

            <div className="flex-1">

                <h3 className="font-semibold">
                    {item.name}
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                    {item.region}
                </p>

                <p className="text-sm text-zinc-500">
                    {item.location}
                </p>

            </div>

        </button>

    );

}