import type { Campaign } from "../../models/Campaign";
import { Link } from "react-router-dom";

interface Props {

    campaign: Campaign;

}

export default function CampaignCard({

    campaign,

}: Props) {

    return (
        <Link
            to={`/campaigns/${campaign.id}`}
            className="block"
        >
            <div
                className="
                    rounded-xl
                    border
                    border-zinc-800
                    bg-zinc-900
                    p-6
                    transition
                    hover:border-amber-400
                    hover:shadow-lg
                "
            >

                <h2 className="text-2xl font-bold text-white">

                    {campaign.name}

                </h2>

                <p className="mt-3 text-zinc-400">

                    {campaign.characters.length}
                    {" "}
                    Character{campaign.characters.length !== 1 ? "s" : ""}

                </p>

            </div>
        </Link>

    );

}