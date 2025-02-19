import React from 'react'
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {

    // Recupero el token
    const { token } = useAuth();

    if (!token) Navigate("/");


    return (
        <div>{children}</div>
    )
}

export default ProtectedRoute