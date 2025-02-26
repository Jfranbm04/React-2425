import React from 'react'
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { token } = useAuth();

    if (!token) {
        console.log("No hay token");
        return <Navigate to="/" />;
    }

    return (
        <div>{children}</div>
    )
}

export default ProtectedRoute