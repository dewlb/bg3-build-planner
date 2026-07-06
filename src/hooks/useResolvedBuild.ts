import { useMemo } from "react";

import { useItems } from "./useItems";
import { useBuilds } from "./useBuilds";

import { resolveBuild } from "../services/BuildService";

export function useResolvedBuild(buildId: string) {
    const {
        data: items = [],
        isLoading: itemsLoading,
        error: itemsError,
    } = useItems();

    const {
        data: builds = [],
        isLoading: buildsLoading,
        error: buildsError,
    } = useBuilds();

    const build = useMemo(() => {
        return builds.find((b) => b.id === buildId);
    }, [builds, buildId]);

    const resolvedBuild = useMemo(() => {
        if (itemsLoading || buildsLoading) return undefined;

        if (itemsError || buildsError) return undefined;

        if (!build) return undefined;

        return resolveBuild(build, items);
    }, [
        build,
        items,
        itemsLoading,
        buildsLoading,
        itemsError,
        buildsError,
    ]);

    return {
        build: resolvedBuild,
        isLoading: itemsLoading || buildsLoading,
        error: itemsError || buildsError,
    };
}