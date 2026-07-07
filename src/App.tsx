import { SelectedItemProvider } from "./context/SelectedItemContext";

import AppRouter from "./router/AppRouter";

export default function App() {
    return (
        <SelectedItemProvider>

            <AppRouter />

        </SelectedItemProvider>
    );
}