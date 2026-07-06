import { useQuery } from "@tanstack/react-query";
import { ItemRepository } from "../repositories/ItemRepository";

export function useItems() {
    return useQuery({
        queryKey: ["items"],
        queryFn: () => Promise.resolve(ItemRepository.getAllItems()),
    });
}