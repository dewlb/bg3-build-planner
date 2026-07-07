import { useParams } from "react-router-dom";

import PageHeader from "../components/common/PageHeader";
import CharacterCard from "../components/campaigns/CharacterCard";

import { useResolvedCampaign } from "../hooks/useResolvedCampaign";

export default function CampaignPage() {

    const { campaignId } = useParams();

    const {
        campaign,
        isLoading,
        error,
    } = useResolvedCampaign(campaignId ?? "");

    if (isLoading) {
        return (
            <div className="mx-auto max-w-7xl p-8">
                <h1>Loading campaign...</h1>
            </div>
        );
    }

    if (error || !campaign) {
        return (
            <div className="mx-auto max-w-7xl p-8">
                <h1>Failed to load campaign.</h1>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-7xl p-8">

            <PageHeader
                title={campaign.name}
                subtitle={`${campaign.characters.length} Character${campaign.characters.length !== 1 ? "s" : ""}`}
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                {campaign.characters.map(character => (

                    <CharacterCard
                        key={character.id}
                        campaignId={campaign.id}
                        character={character}
                    />

                ))}

            </div>

            <button
                className="
                    mt-8
                    rounded-lg
                    bg-amber-500
                    px-6
                    py-3
                    font-semibold
                    text-black
                    transition
                    hover:bg-amber-400
                "
            >
                + Add Character
            </button>

        </div>
    );
}