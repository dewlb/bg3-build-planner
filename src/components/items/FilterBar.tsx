import SearchBar from "./SearchBar";
import FilterChipGroup from "../common/FilterChipGroup";

import type { ItemQuery } from "../../models/ItemQuery";

interface Props {
    filters: ItemQuery;
    onFiltersChange: (filters: ItemQuery) => void;
}

const ACT_OPTIONS = [
    { label: "Act I", value: 1 as const },
    { label: "Act II", value: 2 as const },
    { label: "Act III", value: 3 as const },
];

export default function FilterBar({
    filters,
    onFiltersChange,
}: Props) {
    return (
        <div className="mb-8 space-y-4">

            <SearchBar
                value={filters.search}
                onChange={(search) =>
                    onFiltersChange({
                        ...filters,
                        search,
                    })
                }
            />

            <div className="flex items-center gap-3">

                <span className="text-sm font-semibold text-zinc-400">
                    Act
                </span>

                <FilterChipGroup
                    value={filters.act}
                    options={ACT_OPTIONS}
                    onChange={(act) =>
                        onFiltersChange({
                            ...filters,
                            act,
                        })
                    }
                />

            </div>

        </div>
    );
}