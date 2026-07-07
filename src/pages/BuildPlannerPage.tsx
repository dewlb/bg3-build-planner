import { useParams } from "react-router-dom";

import BuildPlanner from "../components/builds/BuildPlanner";

import { useResolvedBuild } from "../hooks/useResolvedBuild";

export default function BuildPlannerPage() {

    const { buildId } = useParams();

    const {
        build,
        isLoading,
        error,
    } = useResolvedBuild(buildId ?? "");

    if (isLoading)
        return <div className="p-8">Loading build...</div>;

    if (error || !build)
        return <div className="p-8">Failed to load build.</div>;

    return (
        <BuildPlanner build={build} />
    );
}