import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProductListPage from "../pages/ProductListPage";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import ProtectedRoute from "../components/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <LoginPage />
            },
            {
                path: "register",
                element: <RegisterPage />
            },

            {
                path: "products",
                element:
                    <ProtectedRoute>
                        <ProductListPage />
                    </ProtectedRoute>
            },
        ]
    }
]);