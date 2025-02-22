import React from 'react'
import { useFavorites } from '../contexts/FavoritesContext';
import MovieCard from '../components/MovieCard';

const Favorites = () => {

    // Saco las peliculas favoritas del contexto
    const { favorites } = useFavorites();


    if (favorites.length === 0) {
        return (
            <div className='text-center py-10'>
                <p className='text-2xl font-bold text-sky-950'>
                    No tienes peliculas favoritas
                </p>
            </div>
        )
    }


    return (
        <div className='container mx-auto px-4 py-8'>
            <header className='text-center mb-12'>
                <h1 className="text-4xl font-bold text-sky-950">
                    Tus peliculas favoritas
                </h1>
                <p className='mt-4 text-gray-800'>
                    Aqui podrás encontrar tus peliculas favoritas
                </p>
            </header>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                {favorites.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default Favorites