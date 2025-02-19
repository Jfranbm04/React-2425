import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const productsContext = createContext();
export const ProductsProvider = ({ children }) => {


    // Codigo importado de ProductList
    const [productList, setProductList] = useState([]);
    // Fetch api
    const fetchFromApi = async () => {
        try {
            const response = await fetch(`${BASE_URL}/api/products`);
            const data = await response.json();
            setProductList(data);
        } catch (error) {
            throw new Error("Error fetching data");
        }
    };
    useEffect(() => {
        fetchFromApi();
    }, [])


    return <productsContext.Provider value={{ productList }}>{children}</productsContext.Provider>
}

// Creo un hook para el contexto
export const useProducts = () => {
    const context = useContext(productsContext);

    if (!context) {
        throw new Error("useProducts must be used within a ProductProvider");
    }
    return context;

}
