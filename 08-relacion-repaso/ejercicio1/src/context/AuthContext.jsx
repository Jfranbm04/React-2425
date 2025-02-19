import { createContext, useState } from "react";


export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    // Estado para almacenar la info del usuario logueado
    const [user, setUser] = useState(null)
    // Verificar si el usuario está logueado o tiene un token
    const [isLogin, setIsLogin] = useState(false)
    // Estoy haciendo el fetching y loading la data??
    const [isLoading, setIsLoading] = useState(true) // Se suele utilizar un "false"
    // Si hay un error en el login
    const [error, setError] = useState(null)

    useEffect(() => {
        checkAuth();

    }, [])

    // Función para verificar si el usuario está logueado porque existe el token en el localStorage
    const checkAuth = () => {
        try {
            const token = localStorage.getItem("token");
            if (token) {
                // Aqui volveré para decodificar el token y hacer el uso si es necesario

                setIsLogin(true);
            }
        } catch (error) {
            console.log("Error al verificar el usuario logueado", error.message)
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }



    const value = { user, isLogin, isLoading, error };   // Se asigna value para no tener que escribir todas las funciones en el value de abajo.
    return <AuthContext.Provider value={{ value }}>{children}</AuthContext.Provider>;
}

