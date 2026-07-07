import { useMemo } from "react";

import { useResolvedCampaign } from "./useResolvedCampaign";
import { useResolvedBuild } from "./useResolvedBuild";

export function useResolvedCharacter(
    campaignId: string,
    characterId: string,
) {
    const {
        campaign,
        isLoading: campaignLoading,
        error: campaignError,
    } = useResolvedCampaign(campaignId);

    const character = useMemo(() => {
        if (!campaign) return undefined;

        return campaign.characters.find(
            (c) => c.id === characterId,
        );
    }, [campaign, characterId]);

    const {
        build,
        isLoading: buildLoading,
        error: buildError,
    } = useResolvedBuild(character?.build.id ?? "");

    return {
        campaign,
        character,
        build,
        isLoading: campaignLoading || buildLoading,
        error: campaignError || buildError,
    };
}