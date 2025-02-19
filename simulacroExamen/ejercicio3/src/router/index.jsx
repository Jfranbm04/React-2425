
import { createBrowserRouter } from "react-router-dom"
import LoginPage from "../pages/LoginPage";
import ProductList from "../components/ProductList";
import RootLayout from "../Layout/RootLayout";
import DashboardPage from "../pages/DashboardPage";
import ProtectedRoute from "../components/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <LoginPage />
            },
            {
                path: "products",
                element: <ProductList />
            },
            {
                path: "dashboard",
                element:
                    <ProtectedRoute>
                        <DashboardPage />
                    </ProtectedRoute>
            }

        ]
    }

]);