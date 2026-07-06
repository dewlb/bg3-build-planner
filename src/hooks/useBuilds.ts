import { useQuery } from "@tanstack/react-query";

import { BuildRepository } from "../repositories/BuildRepository";

export function useBuilds() {

    return useQuery({

        queryKey: ["builds"],

        queryFn: () =>
            Promise.resolve(
                BuildRepository.getAllBuilds()
            ),

    });

}