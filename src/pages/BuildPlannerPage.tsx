import BuildHeader from "../components/builds/BuildHeader";
import GearSection from "../components/builds/GearSection";
import LevelTimeline from "../components/builds/LevelTimeline";

import { useResolvedBuild } from "../hooks/useResolvedBuild";
import { getItemsForAct } from "../services/BuildService";
import { useParams } from "react-router-dom";

export default function BuildDetail() {

    const { buildId } = useParams();

    const {
        build,
        isLoading,
        error,
    } = useResolvedBuild(buildId ?? "");

    if (isLoading)
        return <h1>Loading...</h1>;

    if (error || !build)
        return <h1>Failed to load build.</h1>;

    return (
        <div className="mx-auto max-w-7xl p-8">

            <BuildHeader build={build} />

            <LevelTimeline
                levels={build.levels}
            />

            <GearSection
                title="Act I"
                items={getItemsForAct(build, 1)}
            />

            <GearSection
                title="Act II"
                items={getItemsForAct(build, 2)}
            />

            <GearSection
                title="Act III"
                items={getItemsForAct(build, 3)}
            />

        </div>
    );
}