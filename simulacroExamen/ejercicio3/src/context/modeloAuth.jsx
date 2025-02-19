import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const authContext = createContext();
const authProvider = ({ children }) => {



    return <authContext.Provider value={{}}>{children}</authContext.Provider>
}

export const useAuth = () => {

};