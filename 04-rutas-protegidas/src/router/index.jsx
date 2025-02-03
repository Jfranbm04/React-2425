import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";



const isAuthenticated = () => {
    // Leer del localStorage si existe un token
    return localStorage.hasOwnProperty("token");
}

// Sirve para que no se pueda acceder si no hay clave guardada en el localStorage
const ProtectedRoute = ({ children }) => { // Le paso children porque va a proteger al Profile y Dashboard 
    // Debe impedir el acceso al profile a no ser que tenga un token guardado en localstorage
    // guardado en el localStorage
    if (!isAuthenticated()) {
        return <Navigate to="/" replace={true} />
    }
    // if (!isAuthenticated()) {
    //     navigate("/");
    //     return null;
    // }
    return children;

};

// Funcion router se pasa en el app.jsx
export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "/profile", element: <ProtectedRoute><Profile /></ProtectedRoute> },
            { path: "/dashboard", element: <ProtectedRoute><Dashboard /></ProtectedRoute> },
        ]
    }

]);


