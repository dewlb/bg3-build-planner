import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
} from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";

import ItemsPage from "../pages/ItemsPage";
import BuildPlannerPage from "../pages/BuildPlannerPage";
import CampaignsPage from "../pages/CampaignsPage";
import CampaignPage from "../pages/CampaignPage";
import BuildsPage from "../pages/BuildsPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <AppLayout>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/campaigns" replace />}
                    />

                    <Route
                        path="/items"
                        element={<ItemsPage />}
                    />

                    <Route
                        path="/builds"
                        element={<BuildsPage />}
                    />

                    <Route
                        path="/builds/:buildId"
                        element={<BuildPlannerPage />}
                    />

                    <Route
                        path="/campaigns"
                        element={<CampaignsPage />}
                    />

                    <Route
                        path="/campaigns/:campaignId"
                        element={<CampaignPage />}
                    />

                    <Route
                        path="*"
                        element={<NotFoundPage />}
                    />
                </Routes>
            </AppLayout>
        </BrowserRouter>
    );
}