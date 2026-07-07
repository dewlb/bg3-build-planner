import { useParams } from "react-router-dom";

import BuildPlanner from "../components/builds/BuildPlanner";

import { useResolvedCharacter } from "../hooks/useResolvedCharacter";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

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

    const storageKey = `${campaignId}-${characterId}`;

    const [checkedItems, setCheckedItems] =
    useLocalStorageState<string[]>(
        storageKey,
        character?.collectedItemIds ?? [],
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

    function toggleItem(itemId: string) {

        setCheckedItems(current =>

            current.includes(itemId)
                ? current.filter(id => id !== itemId)
                : [...current, itemId]

        );

    }

    return (

        <BuildPlanner
            build={build}
            collectedItemIds={checkedItems}
            onToggleItem={toggleItem}
            interactive
        />

    );

}