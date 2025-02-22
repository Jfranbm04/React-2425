import { createContext, useContext, useEffect, useState } from "react";

// Creo el contexto y el provider
export const FavoritesContext = createContext();
export const FavoritesProvider = ({ children }) => {

    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem("favorites")) || [];
    });

    // Quiero actualizar el localStorage cada vez que se actualiza la lista de favoritos
    useEffect(() => localStorage.setItem("favorites", JSON.stringify(favorites)), [favorites])

    // Funciones
    // Obtener la lista de favoritos
    const getFavorites = () => {
        return favorites;
    }

    // Añadir/quitar películas de favoritos
    const addFavorites = (movie) => {
        // setFavorites([...favorites, movie])
        setFavorites((prevFavorites) => [...prevFavorites, movie])
    }

    const removeFavorites = (movie) => {
        setFavorites((prevFavorites) => {
            // Busco la pelicula y la quito de la lista de favoritos
            return prevFavorites.filter((peliculaFav) => peliculaFav.id !== movie.id);
        });
    }

    // Verificar si una película es favorita.
    const isFavorite = (movie) => {
        return favorites.some((peliculaFav) => peliculaFav.id === movie.id);
    };


    return <FavoritesContext.Provider value={{ favorites, getFavorites, addFavorites, removeFavorites, isFavorite }}>{children}</FavoritesContext.Provider>
}

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites debe estar dentro del proveedor favoritesProvider");
    }
    return context;
}