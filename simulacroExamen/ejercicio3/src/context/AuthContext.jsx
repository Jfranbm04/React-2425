import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const authContext = createContext();

export const AuthProvider = ({ children }) => {

    // Como desde la api me devuelve un token y el usuario, hago dos useState
    // Iniciar sesión	{ email, password }	{ token, user }
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(localStorage.getItem("token") || null)

    const loginUser = async ({ email, password }) => {
        try {
            const response = await fetch(`${BASE_URL}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error("Usuario o contraseña incorrectos");
            }
            // Si estoy aqui es porque el usuario se ha logueado correctamente
            const data = await response.json();
            setUser(data.user);
            setToken(data.token);
            localStorage.setItem("user", JSON.stringify(data.user)); // almaceno el usuario y el token en el localStorage
            localStorage.setItem("token", data.token);

        } catch (error) {
            console.log("Error al iniciar sesion", error)
        }
    }

    const logOut = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }



    return <authContext.Provider value={{ user, token, loginUser, logOut }}>{children}</authContext.Provider>
}

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        throw new Error("useAuth debe estar dentro del proveedor AuthProvider");
    }
    return context;
};