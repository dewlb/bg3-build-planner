import type { ReactNode } from "react";

import Sidebar from "./Sidebar";
import TopBar from "./Topbar";
import ItemDrawer from "../items/ItemDrawer";

interface Props {
    children: ReactNode;
}

export default function AppLayout({
    children,
}: Props) {
    return (
        <div className="flex min-h-screen">

            <Sidebar />

            <div className="flex flex-1 flex-col">

                <TopBar />

                <main>
                    {children}
                </main>

            </div>

            <ItemDrawer />

        </div>
    );
}