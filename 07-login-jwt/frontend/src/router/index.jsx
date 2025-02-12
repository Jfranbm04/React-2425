import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import RootLayout from '../layout/RootLayout';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        // error: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "dashboard",
                element: <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>,
            }
        ]

    }
]);


