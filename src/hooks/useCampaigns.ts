import { useQuery } from "@tanstack/react-query";

import { CampaignRepository } from "../repositories/CampaignRepository";

export function useCampaigns() {

    return useQuery({

        queryKey: ["campaigns"],

        queryFn: () =>
            Promise.resolve(
                CampaignRepository.getAllCampaigns()
            ),

    });

}