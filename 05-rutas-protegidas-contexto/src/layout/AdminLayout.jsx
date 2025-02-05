import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminLayout = () => {

    const { logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/");
    }


    return (
        <div className='flex h-screen'>
            {/* Slider del movil */}
            <div className='lg:hidden'>
                <button>xdd</button>
            </div>
            <div>
                <aside className='fixed lg:static w-64 bg-gray-800 h-full hidden lg:block transform transition-transform flex-col'>
                    <nav className='flex-1 p-4 space-y-2'>
                        <NavLink to="/admin" className="block p-2 text-white hover:text-amber-700">
                            DashBoard
                        </NavLink>
                        <NavLink to="/admin/users" className="block p-2 text-white hover:text-amber-700">
                            Users
                        </NavLink>
                        <NavLink to="/admin/products" className="block p-2 text-white hover:text-amber-700">
                            Products
                        </NavLink>
                        <NavLink to="/admin/settings" className="block p-2 text-white hover:text-amber-700">
                            Settings
                        </NavLink>
                    </nav>
                    <div className='p-4 border-t border-gray-700 '>
                        <button
                            onClick={handleLogout}
                            className='w-full bg-red-500 text-white p-2 rounded hover:bg-red-800 transition-colors'>
                            Logout
                        </button>
                    </div>
                </aside>
            </div>
            <Outlet />
        </div>

    )
}

export default AdminLayout;