import FilterChip from "./FilterChip";

interface Option<T> {
    label: string;
    value: T;
}

interface Props<T extends string | number> {
    value?: T;
    options: Option<T>[];
    onChange: (value?: T) => void;
}

export default function FilterChipGroup<T extends string | number>({
    value,
    options,
    onChange,
}: Props<T>) {
    return (
        <div className="flex flex-wrap gap-2">
            {options.map((option) => (
                <FilterChip
                    key={option.label}
                    label={option.label}
                    active={value === option.value}
                    onClick={() =>
                        onChange(
                            value === option.value
                                ? undefined
                                : option.value
                        )
                    }
                />
            ))}
        </div>
    );
}