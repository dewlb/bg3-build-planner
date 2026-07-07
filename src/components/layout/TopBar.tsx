export default function TopBar() {
    return (
        <header
            className="
                flex
                h-16
                items-center
                justify-between
                border-b
                border-zinc-800
                bg-zinc-950
                px-8
            "
        >
            <div>
                <h2 className="text-xl font-bold text-white">
                    BG3 Companion
                </h2>
            </div>

            <div className="text-sm text-zinc-400">
                Honor Run Planner
            </div>
        </header>
    );
}