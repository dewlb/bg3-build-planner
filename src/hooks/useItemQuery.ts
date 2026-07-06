import { useMemo } from "react";

import { useItems } from "./useItems";

import { queryItems } from "../services/ItemService";

import type { ItemQuery } from "../models/ItemQuery";

export function useItemQuery(filters: ItemQuery) {

    const {
        data: items = [],
        isLoading,
        error
    } = useItems();

    const filteredItems = useMemo(() => {
        return queryItems(items, filters);
    }, [items, filters]);

    return {
        items: filteredItems,
        isLoading,
        error
    };
}