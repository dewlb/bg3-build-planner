import PageHeader from "../components/common/PageHeader";
import CampaignCard from "../components/campaigns/CampaignCard";

import { useCampaigns } from "../hooks/useCampaigns";

export default function CampaignsPage() {

    const {

        data: campaigns = [],

        isLoading,

        error,

    } = useCampaigns();

    if (isLoading)
        return (
            <div className="p-8">
                <h1>Loading campaigns...</h1>
            </div>
        );

    if (error)
        return (
            <div className="p-8">
                <h1>Failed to load campaigns.</h1>
            </div>
        );

    return (

        <div className="mx-auto max-w-7xl p-8">

            <PageHeader
                title="Campaigns"
                subtitle="Manage your playthroughs."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                {campaigns.map(campaign => (

                    <CampaignCard
                        key={campaign.id}
                        campaign={campaign}
                    />

                ))}

            </div>

        </div>

    );

}