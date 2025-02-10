import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import { getPopularMovies } from '../services/tmdb';
import MovieCard from "../components/MovieCard";



const Home = () => {
    // Quiero mostrar las páginas de la API (empieza por la 1)
    const [page, setPage] = useState(1);
    // Traigo la informacion del fetch
    const { data, loading, error } = useFetch(() => getPopularMovies(page), [page]); // Si el párametro es una función con parámetro -> callback

    // Si se produce un error qué hago
    if (error) {
        return (
            <div className='text-center py-10'>
                <p className='text-2xl font-bold text-red-500'>
                    Error al cargar las películas
                </p>
                <Link to='/' className="text-blue-500">
                    Vovler al inicio
                </Link>
            </div>
        )
    }

    // si no... cargo las peliculas
    return (
        <div className='space-y-8'>
            <header className='text-center'>
                <h1 className="text-4xl font-bold text-sky-950">
                    Bienvenido al VideoClub DWEC
                </h1>
                <p className='mt-4 text-gray-800'>
                    Aqui podrás encontrar las películas más populares del momento
                </p>
            </header>
            {/* Seccion de peliculas */}
            <section>
                <h2 className='text-2xl font-bold text-sky-900'>Peliculas populares</h2>
            </section>
            {loading ? (
                <div>Cargando... Aqui pondré el spinner</div>
            ) : (
                <>
                    {/* Grid para las películas */}
                    <div className='grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                        {data?.results?.map((movie) => (
                            // Aqui pinto las tarjetas
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>

                </>
            )}
        </div>
    );


    // return (
    //     <div>Home</div>
    // )
}

export default Home