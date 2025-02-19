
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Products from "../pages/Products";
import ErrorPage from "../pages/ErrorPage";
import ProductPage from "../pages/ProductPage";
import ProtectedRoute from "../components/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                index: true,
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },

            // Rutas de productos
            {
                path: "products",
                element: <Products />
            },
            {
                path: "products/:id",
                element: <div>Product details</div>
            },
            {
                path: "products/create",
                element: (
                    <ProtectedRoute>
                        <ProductPage action="create" />
                    </ProtectedRoute>
                )
            },
            {
                path: "products/:id/edit",
                element: (
                    <ProtectedRoute>
                        <ProductPage action="edit" />
                    </ProtectedRoute>
                )
            },
            {
                path: "products/:id/delete",
                element: (
                    <ProtectedRoute>
                        <ProductPage action="delete" />
                    </ProtectedRoute>
                )
            },

        ]


    }
])


