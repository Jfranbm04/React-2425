import { Link } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext"
import { ROUTES } from "../routes/paths";

const Favorites = () => {
    const { favorites, removeFromPokemon } = usePokemon();

    if (favorites.length === 0) {
        return (
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">Favoritos</h1>
                <p>No hay pokemons en favoritos</p>
                <Link to={ROUTES.HOME} className="text-blue-500 hover:underline block mt-4">
                    Volver al Inicio
                </Link>
            </div>
        )
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Tus pokemons Favoritos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Aqui renderizamos tarjetas con los pokemon favoritos */}
                {
                    favorites.map(pokemon => (  // Con map poner siempre en el padre un key
                        <div key={pokemon.id} className="bg-white rounded-xl p-6 hover:shadow-lg">
                            {/* Imagen */}
                            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} className="w-32 h-32 mx-auto" />
                            {/* Nombre */}
                            <h2 className="text-xl capitalize font-semibold text-center mt-4">{pokemon.name}</h2>
                            {/* Botones */}
                            <div className="mt-4 space-y-2">
                                <Link
                                    to={`${ROUTES.SEARCH}/${pokemon.name}`}
                                    className="block w-full text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-slate-900 mt-8"
                                >Ver detalles</Link>
                                <button className="w-full bg-amber-500 text-white px-4 py-2 rounded hover:bg-slate-900 mt-8">Eliminar de favoritos</button>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )



}

export default Favorites