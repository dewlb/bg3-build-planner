import type { BuildLevel } from "../../models/build/BuildLevel";

interface Props {
    levels: BuildLevel[];
}

export default function LevelTimeline({
    levels,
}: Props) {
    return (
        <section className="mt-10">

            <h2 className="mb-4 text-2xl font-bold">
                Level Progression
            </h2>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900">

                {levels.map((level) => (
                    <div
                        key={level.level}
                        className="
                            flex
                            justify-between
                            border-b
                            border-zinc-800
                            p-4
                            last:border-none
                        "
                    >
                        <span className="font-bold">
                            Level {level.level}
                        </span>

                        <span>
                            {level.subclass ??
                                level.feat ??
                                level.className}
                        </span>
                    </div>
                ))}

            </div>

        </section>
    );
}