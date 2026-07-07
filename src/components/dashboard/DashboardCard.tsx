import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function DashboardCard({
    children,
}: Props) {
    return (
        <div
            className="
                rounded-xl
                border
                border-zinc-800
                bg-zinc-900
                p-6
            "
        >
            {children}
        </div>
    );
}