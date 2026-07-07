import { useParams } from "react-router-dom";

export default function CampaignPage() {

    const { campaignId } = useParams();

    return (

        <div className="mx-auto max-w-6xl p-8">

            <h1 className="text-5xl font-black">

                {campaignId}

            </h1>

            <p className="mt-3 text-zinc-400">

                Campaign details coming soon.

            </p>

        </div>

    );

}