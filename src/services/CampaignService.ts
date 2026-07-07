import type { Campaign } from "../models/Campaign";
import type { Build } from "../models/build/Build";

export interface ResolvedCampaignCharacter {
    id: string;
    characterName: string;
    build: Build;
    collectedItemIds: string[];
}

export interface ResolvedCampaign {
    id: string;
    name: string;
    characters: ResolvedCampaignCharacter[];
}

export function resolveCampaign(
    campaign: Campaign,
    builds: Build[],
): ResolvedCampaign {

    return {
        id: campaign.id,
        name: campaign.name,

        characters: campaign.characters.map(character => {

            const build = builds.find(
                b => b.id === character.buildId,
            );

            if (!build) {
                throw new Error(
                    `Unknown build "${character.buildId}"`
                );
            }

            return {
                id: character.id,
                characterName: character.characterName,
                build,
                collectedItemIds: character.collectedItemIds,
            };

        }),
    };

}

export function getCharacter(
    campaign: ResolvedCampaign,
    characterId: string,
) {
    return campaign.characters.find(
        c => c.id === characterId,
    );
}