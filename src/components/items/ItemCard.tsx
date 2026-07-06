import type { Item } from "../../models/item";

interface Props {
    item: Item;
}

export default function ItemCard({ item }: Props) {

    return (

        <div
            className="
                bg-zinc-900
                rounded-xl
                border
                border-zinc-800
                p-5
                transition
                hover:border-yellow-500
                hover:shadow-xl
                hover:shadow-yellow-900/30
            "
        >

            <div className="flex justify-between items-start">

                <div>

                    <h2 className="text-xl font-bold">

                        {item.name}

                    </h2>

                    <p className="text-zinc-400">

                        {item.slot}

                    </p>

                </div>

                <span
                    className="
                        rounded-full
                        bg-blue-700
                        px-3
                        py-1
                        text-sm
                    "
                >
                    Act {item.act}
                </span>

            </div>

            <div className="mt-5">

                <p>

                    {item.region}

                </p>

                <p>

                    {item.location}

                </p>

            </div>

            <div className="mt-5 flex flex-wrap gap-2">

                {item.buildTags.map(tag => (

                    <span

                        key={tag}

                        className="
                            rounded-full
                            bg-zinc-800
                            px-3
                            py-1
                            text-xs
                        "

                    >

                        {tag}

                    </span>

                ))}

            </div>

        </div>

    );

}