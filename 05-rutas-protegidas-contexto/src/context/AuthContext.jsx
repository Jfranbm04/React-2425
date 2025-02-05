import { createContext, useContext, useState } from 'react'

// Pasos para crear AuthContext

// Creo el contexto
const AuthContext = createContext();
// Creo el provider
export const AuthProvider = ({ children }) => {

    const [isAutheticated, setIsAutheticated] = useState(false);
    // Funciones del contexto
    // Hacer login
    // Simulo el login si existe un token en el localStorage con valor true, entonces el usuario está logueado
    const login = () => {
        localStorage.setItem('token', true);
        setIsAutheticated(true);
    }

    // Hacer logout
    const logout = () => {
        localStorage.removeItem('token');
        setIsAutheticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAutheticated, login, logout }} >
            {children}
        </AuthContext.Provider>

    );

}


// Creo un hook personalizado para exportar el contexto
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe estar dentro del AuthProvider');
    }
    return context;
}