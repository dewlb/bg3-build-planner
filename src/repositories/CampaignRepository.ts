import campaigns from "../data/campaigns.json";

import type { Campaign } from "../models/Campaign";

export class CampaignRepository {

    static getAllCampaigns(): Campaign[] {

        return campaigns as Campaign[];

    }

}