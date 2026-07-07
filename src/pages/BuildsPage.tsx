import { useBuilds } from "../hooks/useBuilds";

import BuildCard from "../components/builds/BuildCard";
import PageHeader from "../components/common/PageHeader";

export default function BuildsPage() {

    const {
        data: builds = [],
        isLoading,
        error,
    } = useBuilds();

    if (isLoading)
        return <div className="p-8">Loading...</div>;

    if (error)
        return <div className="p-8">Failed to load builds.</div>;

    return (
        <div className="mx-auto max-w-7xl p-8">
            <PageHeader
                title="Build Library"
                subtitle="Browse and plan character builds."
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                {builds.map(build => (

                    <BuildCard
                        key={build.id}
                        build={build}
                    />

                ))}

            </div>
        </div>
    );
}