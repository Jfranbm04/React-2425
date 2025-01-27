import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./paths";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Favorites from "../pages/Favorites";
import PokemonDetail from "../pages/PokemonDetail";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/ErrorPage";

// Aqui van las rutas (array de objetos)
export const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: ROUTES.HOME,
                element: <Home />
            },
            {
                path: ROUTES.SEARCH,
                element: <Search />
            },
            {
                path: ROUTES.FAVORITES,
                element: <Favorites />
            },
            {
                path: ROUTES.POKEMON_DETAIL,
                element: <PokemonDetail />,
                // Loader es una característica de react router dom nueva que permite cargar datos antes de renderizar el componente
                loader: async ({ params }) => {
                    try {
                        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
                        if (!response.ok) {
                            throw new Error("Error fetching pokemons");
                        }
                        return response.json();
                    } catch (error) {

                    }
                },
                errorElement: <ErrorPage />
            },
        ]
    },
]);