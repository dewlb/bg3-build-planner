import { useParams } from "react-router-dom";

import BuildPlanner from "../components/builds/BuildPlanner";

import { useResolvedCharacter } from "../hooks/useResolvedCharacter";

export default function CharacterPlannerPage() {

    const {
        campaignId,
        characterId,
    } = useParams();

    const {
        character,
        build,
        isLoading,
        error,
    } = useResolvedCharacter(
        campaignId ?? "",
        characterId ?? "",
    );

    if (isLoading) {
        return (
            <div className="p-8">
                Loading character...
            </div>
        );
    }

    if (error || !character || !build) {
        return (
            <div className="p-8">
                Failed to load character.
            </div>
        );
    }

    return (
        <BuildPlanner
            build={build}
            collectedItemIds={character.collectedItemIds}
        />
    );
}