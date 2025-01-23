import { useEffect, useState } from "react";

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState([]);
    useEffect(() => {
        fetchPokemons();
    }, [])

    const fetchPokemons = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
            if (!response.ok) throw new Error("Failed fetch pokemons");
            const data = await response.json();
            // Obtenemos los datos de los pokemon en PARALELO
            const pokemonDetails = await Promise.all(
                data.results.map(async (pokemon) => {
                    const response = await fetch(pokemon.url);
                    return response.json();
                })
            );
            setPokemons(pokemonDetails);
        } catch (error) {
            console.log("Error fetching pokemon", error);
        } finally {
            setLoading(false);
        }

    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Pokemons disponibles</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    pokemons.map(pokemon => (
                        <div
                            key={pokemon.id} // id del pokemon
                            className="bg-white rounded-xl p-6 hover:shadow-sm">
                            <div className="relative group">
                                <img
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    className="w-20 h-20 rounded-full"
                                />
                            </div>
                            <h2 className="text-xl font-bold mt-4">{pokemon.name}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Home