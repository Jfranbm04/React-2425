import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes/paths";
const NavBar = () => {
    /**
     * NavLonk se utiliza para movernos entre rutas
     * Navlink añade "active" a className cuando la ruta es la actual (V7 de router dom)
     */
    return (
        <nav className="bg-gradient-to-tr 
        from-green-500 to-pink-500 shadow-lg p-4">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="space-x-4">
                    <NavLink to={ROUTES.HOME} className={({ isActive }) => `text-white hover:text-red-600 ${isActive ? "font-bold" : ""}`}>Inicio App</NavLink>
                    <NavLink to={ROUTES.SEARCH} className="text-white text-2xl font-bold">Buscar</NavLink>
                    <NavLink to={ROUTES.FAVORITES} className="text-white text-2xl font-bold">Favoritos</NavLink>
                </div>

            </div>
        </nav>

    )
}

export default NavBar