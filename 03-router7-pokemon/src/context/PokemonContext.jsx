import { createContext, useContext, useState } from "react";

// Creacion del contexto
const PokemonContext = createContext();

// Creacion del proveedor del contexto
export function PokemonProvider({ children }) {
    // Hook
    const [favorites, setFavorites] = useState([])

    const addToFavorites = (pokemon) => {
        // Verificamos si el pokemon ya está en favoritos
        if (favorites.some(poke => pokemon.id === pokemon.id)) {
            // Lanzamos error con sonner

            // console.log("Error addToFavorites xdd")
            return;
        }
        // Si no está repetido lo agregamos
        setFavorites((prevFavoritos) => [...prevFavoritos, pokemon])
    }

    const removeFromFavorites = (pokemonId) => {

    }


    // Funcionalidades del provider


    return (
        <PokemonContext.Provider value={{}}>
            {children}
        </PokemonContext.Provider>
    );
}

// Me creo un Hook personalizado para cargar el contexto
export const usePokemon = () => {
    // Para usar el contexto hay que hacer:
    const context = useContext(PokemonContext);
    if (context === undefined) throw new Error("usePokemon debe estar dentro del proveedor PokemonProvider");

};


