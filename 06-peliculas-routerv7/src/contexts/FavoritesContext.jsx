import { createContext, useState } from "react";

// Creo el contexto y el provider
export const favoritesContext = createContext();
export const favoritesProvider = ({ children }) => {

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
            return prevFavorites.filter((peliculaFav) => peliculaFav !== movie);
        });
    }

    // Verificar si una película es favorita.
    const isFavorite = (movie) => {
        return favorites.some((peliculaFav) => peliculaFav === movie);
    }


    return <favoritesContext.Provider value={{ favorites, getFavorites, addFavorites, removeFavorites, isFavorite }}>{children}</favoritesContext.Provider>
}

