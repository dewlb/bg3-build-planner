import BuildHeader from "./BuildHeader";
import LevelTimeline from "./LevelTimeline";
import GearSection from "./GearSection";

import type { ResolvedBuild } from "../../services/BuildService";
import { getItemsForAct } from "../../services/BuildService";

interface Props {
    build: ResolvedBuild;
    collectedItemIds?: string[];
}

export default function BuildPlanner({
    build,
    collectedItemIds,
}: Props) {
    return (
        <div className="mx-auto max-w-7xl p-8">

            <BuildHeader build={build} />

            <LevelTimeline
                levels={build.levels}
            />

            <GearSection
                title="Act I"
                items={getItemsForAct(build, 1)}
                collectedItemIds={collectedItemIds}
            />

            <GearSection
                title="Act II"
                items={getItemsForAct(build, 2)}
                collectedItemIds={collectedItemIds}
            />

            <GearSection
                title="Act III"
                items={getItemsForAct(build, 3)}
                collectedItemIds={collectedItemIds}
            />

        </div>
    );
}