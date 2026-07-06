import type { ResolvedBuild } from "../../services/BuildService";

interface Props {
    build: ResolvedBuild;
}

export default function BuildHeader({ build }: Props) {
    return (
        <header className="mb-10">
            <h1 className="text-5xl font-black">
                {build.name}
            </h1>

            <p className="mt-3 max-w-3xl text-lg text-zinc-400">
                {build.description}
            </p>
        </header>
    );
}