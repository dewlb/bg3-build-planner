import { Link } from "react-router-dom";

interface Props {

    title: string;

    description: string;

    to: string;

}

export default function QuickActionCard({

    title,

    description,

    to,

}: Props) {

    return (

        <Link
            to={to}
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
                "
            >

                <h3 className="text-xl font-bold">

                    {title}

                </h3>

                <p
                    className="
                        mt-2
                        text-zinc-400
                    "
                >
                    {description}
                </p>

            </div>

        </Link>

    );

}