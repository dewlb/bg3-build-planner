import type { ReactNode } from "react";

import Sidebar from "./Sidebar";

interface Props {
    children: ReactNode;
}

export default function AppLayout({
    children,
}: Props) {
    return (
        <div className="flex min-h-screen">

            <Sidebar />

            <main
                className="
                    flex-1
                    overflow-y-auto
                    bg-zinc-900
                "
            >
                {children}
            </main>

        </div>
    );
}