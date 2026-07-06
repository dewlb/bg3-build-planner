import ItemDrawer from "./components/items/ItemDrawer";
import AppLayout from "./components/layout/AppLayout";
import { SelectedItemProvider } from "./context/SelectedItemContext";
import ItemBrowser from "./pages/ItemBrowser";

function App() {
    return (
        <SelectedItemProvider>
            <AppLayout>
                <ItemBrowser />
            </AppLayout>

            <ItemDrawer />
        </SelectedItemProvider>
    );
}

export default App;