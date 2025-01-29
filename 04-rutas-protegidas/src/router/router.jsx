import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";

// Sirve para que no se pueda acceder si no hay clave guardada en el localStorage
const ProtectedRoute = () => { };

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <ProtectedRoute><Profile /></ProtectedRoute> },
            { index: true, element: <ProtectedRoute><Dashboard /></ProtectedRoute> },
        ]
    }

]);


