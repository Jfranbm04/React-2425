import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const authContext = createContext();
const authProvider = ({ children }) => {

    /**
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
     */

    return <authContext.Provider value={{}}>{children}</authContext.Provider>
}

export const useAuth = () => {

};