import { createContext, useContext, useState } from "react";
import { toast } from "sonner";
// Creacion del contexto
const PokemonContext = createContext();

// Creacion del proveedor del contexto
export function PokemonProvider({ children }) {
    // Hook
    const [favorites, setFavorites] = useState([])

    const addToFavorites = (pokemon) => {
        // Verificamos si el pokemon ya está en favoritos
        if (favorites.some(poke => poke.id === pokemon.id)) {
            // Lanzamos error con sonner
            toast.error("El pokemon ya está en favoritos", {
                style: {
                    background: "red",
                    color: "white",
                    border: "2px solid red"
                }
            }
            );
            return;
        }
        // Si no está repetido lo agregamos
        setFavorites((prevFavoritos) => [...prevFavoritos, pokemon])    // Cuando devolvemos algo directamente utilizamos "()", y cuando vamos a escribir javascript utilizamos "{}"
        // Sonner de todo ok
        toast.success(`Pokemon ${pokemon.name} añadido a favoritos`, {
            style: {
                background: "#d1fae5",
                color: "black",
                border: "2px solid green"
            },
            icon: "⭐"
        });
    }

    const removeFromFavorites = (pokemonId) => {
        setFavorites(preFavorites => preFavorites.filter(p => p?.id !== pokemonId));
        toast.success("Pokemon eliminado de favoritos", {
            style: {
                background: "#d1fae5",
                color: "black",
                border: "2px solid green"
            },
            icon: "🗑️"
        });
    }


    // Funcionalidades del provider


    return (
        <PokemonContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </PokemonContext.Provider>
    );
}

// Me creo un Hook personalizado para cargar el contexto
export const usePokemon = () => {
    // Para usar el contexto hay que hacer:
    const context = useContext(PokemonContext);
    if (context === undefined) throw new Error("usePokemon debe estar dentro del proveedor PokemonProvider");
    return context;
};


