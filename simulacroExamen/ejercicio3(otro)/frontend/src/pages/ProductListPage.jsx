import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const ProductListPage = () => {

    const { logOut } = useAuth();
    const navigate = useNavigate();

    // Funcion para cerrar sesion
    const handleLogout = () => {
        logOut();
        navigate("/");
    }


    return (
        <div>
            <button type='submit' onClick={handleLogout}>Cerrar sesion</button>
            <div>ProductListPage</div>



        </div>
    )
}

export default ProductListPage