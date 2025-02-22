import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div className='min-h-screen bg-gray-100'>
            <nav className='bg-sky-950 text-white shadow-lg mb-6'>
                <div className='max-w-7xl mx-auto px-4'>
                    <div className='flex justify-between h-16'>
                        {/* Logo del videoclub */}
                        <div className='flex items-center space-x-4'>
                            <Link to="/" className='text-xl font-bold'>
                                Videoclub
                            </Link>
                            <Link to="/favorites" className='hover:text-sky-300'>
                                Favoritos
                            </Link>
                            <Link to="/reviews" className='hover:text-sky-300'>
                                Reseñas
                            </Link>
                            <Link to="/search" className='hover:text-sky-300'>
                                Buscador
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <main>

            </main>
            <Outlet />
            <footer className='bg-sky-900 text-white mx-auto'>
                <div className='max-w-7xl mx-auto px-4 py-6'>
                    <p className='text-center'>
                        Videoclub &copy; 2025 - Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default RootLayout;