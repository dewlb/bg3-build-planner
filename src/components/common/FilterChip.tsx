interface FilterChipProps {
    label: string;
    active: boolean;
    onClick: () => void;
}

export default function FilterChip({
    label,
    active,
    onClick,
}: FilterChipProps) {
    return (
        <button
            onClick={onClick}
            className={`
                rounded-full
                px-4
                py-2
                text-sm
                font-semibold
                transition-all
                duration-200

                ${
                    active
                        ? "bg-amber-500 text-black shadow-lg shadow-amber-500/30"
                        : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }
            `}
        >
            {label}
        </button>
    );
}