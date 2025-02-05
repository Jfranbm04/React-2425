import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../pages/Dashboard";
import AdminLayout from "../layout/AdminLayout";
import Users from "../pages/Users";
import Products from "../pages/Products";
import Settings from "../pages/Settings";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,    // Si se escribe algo que no existe, lleva a esa pagina
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
                path: "admin",
                element: (
                    <ProtectedRoute>
                        <AdminLayout />
                    </ProtectedRoute>
                ),
                children: [
                    {
                        index: true,
                        element: <Dashboard />
                    },
                    {
                        path: "users",
                        element: <Users />
                    },
                    {
                        path: "products",
                        element: <Products />
                    },
                    {
                        path: "settings",
                        element: <Settings />
                    },
                ]
            }
        ]
    }
]);




/*
PASOS PARA HACER EL REACT ROUTER DOM

- Crear un nuevo archivo index.jsx en carpeta router con las rutas
- En app.jsx hago un <RouterProvider router={router} />
- Hago un RootLayout (contenedor principal para todas las paginas) y dentro los Link de las paginas
- Outlet para mostrar las paginas hijas de RootLayout (Las que hay en la carpeta pages)

*/


