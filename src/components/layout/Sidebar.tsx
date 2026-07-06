import {
    Backpack,
    Sword,
    Users,
    ShoppingCart,
    Star,
    Settings,
} from "lucide-react";

const links = [
    {
        name: "Items",
        icon: Backpack,
    },
    {
        name: "Builds",
        icon: Sword,
    },
    {
        name: "Party",
        icon: Users,
    },
    {
        name: "Vendors",
        icon: ShoppingCart,
    },
    {
        name: "Favorites",
        icon: Star,
    },
    {
        name: "Settings",
        icon: Settings,
    },
];

export default function Sidebar() {
    return (
        <aside
            className="
                w-64
                border-r
                border-zinc-800
                bg-zinc-950
                p-6
            "
        >
            <h1
                className="
                    mb-10
                    text-3xl
                    font-black
                    text-amber-400
                "
            >
                BG3 Planner
            </h1>

            <nav className="space-y-2">

                {links.map(({ name, icon: Icon }) => (

                    <button
                        key={name}
                        className="
                            flex
                            w-full
                            items-center
                            gap-3
                            rounded-lg
                            px-3
                            py-3
                            text-zinc-300
                            transition

                            hover:bg-zinc-800
                            hover:text-white
                        "
                    >

                        <Icon size={20} />

                        {name}

                    </button>

                ))}

            </nav>

        </aside>
    );
}