import { Link } from "react-router-dom";

import type { Build } from "../../models/build/Build";

interface Props {

    build: Build;

}

export default function BuildCard({

    build,

}: Props) {

    return (

        <Link
            to={`/builds/${build.id}`}
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
                    hover:-translate-y-1
                    hover:shadow-xl
                "
            >

                <h2
                    className="
                        text-2xl
                        font-bold
                    "
                >
                    {build.name}
                </h2>

                <p
                    className="
                        mt-3
                        text-zinc-400
                    "
                >
                    {build.description}
                </p>

                <div
                    className="
                        mt-6
                        flex
                        justify-between
                        text-sm
                        text-zinc-500
                    "
                >

                    <span>

                        {build.levels.length}
                        {" "}
                        Levels

                    </span>

                    <span>

                        {build.items.length}
                        {" "}
                        Gear

                    </span>

                </div>

                <div
                    className="
                        mt-6
                        text-sm
                        font-semibold
                        text-amber-400
                    "
                >
                    View Planner →
                </div>

            </div>

        </Link>

    );

}