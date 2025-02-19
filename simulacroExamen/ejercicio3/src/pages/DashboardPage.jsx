import React from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    const handleClick = () => {
        logOut();
        navigate("/");
    }


    return (
        <div>
            <h2>Dashboard</h2>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

export default DashboardPage