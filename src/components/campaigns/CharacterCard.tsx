import { Link } from "react-router-dom";

import type { ResolvedCampaignCharacter } from "../../services/CampaignService";

interface Props {
    campaignId: string;
    character: ResolvedCampaignCharacter;
}

export default function CharacterCard({
    campaignId,
    character,
}: Props) {
    return (
        <div
            className="
                rounded-xl
                border
                border-zinc-800
                bg-zinc-900
                p-6
            "
        >
            <h2 className="text-2xl font-bold">
                {character.characterName}
            </h2>

            <p className="mt-2 text-zinc-400">
                {character.build.name}
            </p>

            <Link
                to={`/campaigns/${campaignId}/characters/${character.id}`}
                className="
                    mt-6
                    inline-block
                    font-semibold
                    text-amber-400
                "
            >
                View Planner →
            </Link>
        </div>
    );
}