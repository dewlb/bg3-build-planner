import { useMemo } from "react";

import { useCampaigns } from "./useCampaigns";
import { useBuilds } from "./useBuilds";

import { resolveCampaign } from "../services/CampaignService";

export function useResolvedCampaign(campaignId: string) {

    const {
        data: campaigns = [],
        isLoading: campaignsLoading,
        error: campaignsError,
    } = useCampaigns();

    const {
        data: builds = [],
        isLoading: buildsLoading,
        error: buildsError,
    } = useBuilds();

    const campaign = useMemo(
        () => campaigns.find(c => c.id === campaignId),
        [campaigns, campaignId],
    );

    const resolvedCampaign = useMemo(() => {
        if (!campaign) return undefined;

        return resolveCampaign(campaign, builds);
    }, [campaign, builds]);

    return {
        campaign: resolvedCampaign,
        isLoading: campaignsLoading || buildsLoading,
        error: campaignsError || buildsError,
    };
}