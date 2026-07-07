import type { CampaignCharacter } from "./CampaignCharacter";

export interface Campaign {

    id: string;

    name: string;

    characters: CampaignCharacter[];

}