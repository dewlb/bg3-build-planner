interface Props {

    value: string;

    onChange: (value: string) => void;

}

export default function SearchBar({

    value,

    onChange

}: Props) {

    return (

        <input

            value={value}

            placeholder="Search items..."

            onChange={(e) => onChange(e.target.value)}

            className="
                mb-8
                w-full
                rounded-lg
                border
                border-zinc-700
                bg-zinc-900
                p-3
                text-white
                outline-none

                focus:border-yellow-500
            "

        />

    );

}