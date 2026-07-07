import { useState } from "react";

import ItemGrid from "../components/items/ItemGrid";
import FilterBar from "../components/items/FilterBar";

import { useItemQuery } from "../hooks/useItemQuery";

import type { ItemQuery } from "../models/ItemQuery";
import PageHeader from "../components/common/PageHeader";

export default function ItemBrowser() {

    const [filters, setFilters] = useState<ItemQuery>({
        search: "",
    });

    const {
        items,
        isLoading,
        error,
    } = useItemQuery(filters);

    if (isLoading)
        return <h1>Loading...</h1>;

    if (error)
        return <h1>Error loading items.</h1>;

    return (
        <div className="mx-auto max-w-7xl p-8">

            <PageHeader
                title="Item Database"
                subtitle="Browse every obtainable item."
            />

            <FilterBar
                filters={filters}
                onFiltersChange={setFilters}
            />

            <ItemGrid items={items} />

        </div>
    );
}