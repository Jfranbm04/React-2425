import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
const Search = () => {
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Empiezo a buscar el pokemon
        setIsLoading(true);

        try {
            // Fetching a la api de pokemon
            console.log(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
            console.log(response)
            if (!response.ok) {
                toast.error("Error al buscar el pokemon", {
                    style: {
                        background: "red",
                        color: "white",
                        border: "2px solid red",
                    },
                    icon: "❎",
                });
                return;
            }
            // Redirecciono al Pokemon
            navigate(`/search/${search.toLowerCase()}`)

        } catch (error) {
            toast.error("Error al buscar el pokemon", {
                style: {
                    background: "red",
                    color: "white",
                    border: "2px solid red",
                },
                icon: "❎",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6">Pokemon a buscar:</h1>
            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg"
            >
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={search}
                        placeholder="Buscar pokemon"
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 p-2 border-gray-200 border rounded-lg focus:outline-rose-500"
                    />
                    <button type="submit" className="bg-rose-500  text-white px-4 py-2 rounded hover:bg-black">Buscar</button>
                </div>
            </form>
        </div>
    )
}

export default Search