import {
    Backpack,
    Sword,
    Users,
    ShoppingCart,
    Star,
    Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const links = [
    {
        name: "Items",
        to: "/items",
        icon: Backpack,
    },
    {
        name: "Builds",
        to: "/builds",
        icon: Sword,
    },
    {
        name: "Campaigns",
        to: "/campaigns",
        icon: Users,
    },
    {
        name: "Vendors",
        to: "/vendors",
        icon: ShoppingCart,
    },
    {
        name: "Favorites",
        to: "/favorites",
        icon: Star,
    },
    {
        name: "Settings",
        to: "/settings",
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
            <div className="mb-10 flex items-center gap-3">
                <div className="text-3xl">
                    ⚔️
                </div>

                <h1 className="text-3xl font-black text-amber-400">
                    BG3 Planner
                </h1>
            </div>

            <nav className="space-y-2">
                {links.map(({ name, to, icon: Icon }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                            `
                            flex
                            items-center
                            gap-3
                            rounded-lg
                            px-3
                            py-3
                            transition

                            ${
                                isActive
                                    ? "bg-amber-500 text-black"
                                    : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                            }
                            `
                        }
                    >
                        <Icon size={20} />
                        {name}
                    </NavLink>
                ))}
            </nav>

        </aside>
    );
}