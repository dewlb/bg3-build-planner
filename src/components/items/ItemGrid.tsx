import type { Item } from "../../models/item";

import ItemCard from "./ItemCard";

interface Props {
    items: Item[];
}

export default function ItemGrid({ items }: Props) {

    return (

        <div
            className="
                grid
                gap-6
                md:grid-cols-2
                xl:grid-cols-3
            "
        >

            {items.map(item => (

                <ItemCard

                    key={item.id}

                    item={item}

                />

            ))}

        </div>

    );

}