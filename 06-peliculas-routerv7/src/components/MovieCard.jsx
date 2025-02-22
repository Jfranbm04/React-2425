import React from 'react'
import { Link } from "react-router-dom"
import { getImageURL } from '../services/tmdb'
import { useFavorites } from '../contexts/FavoritesContext';
import { useToast } from '../contexts/ToastContext';

const MovieCard = ({ movie }) => {
    // console.log(getImageURL(movie.poster_path))

    const { favorites, addFavorites, removeFavorites, isFavorite } = useFavorites();
    // Toast
    const { showToast } = useToast();

    // Funcion para alternar entre añadir y quitar de favoritos
    const handleFavoriteClick = (e) => {
        e.preventDefault();
        if (isFavorite(movie)) {
            removeFavorites(movie);
            showToast("Pelicula retirada de favoritos")
        } else {
            addFavorites(movie);
            showToast("Pelicula añadida a favoritos")

        }
    };


    return (
        <div>
            <Link to={`/movie/${movie.id}`} className="group">
                <article className='card transform transition-transform duration-200 group-hover:scale-105'>
                    <div className='relative aspect-[2/3]'>
                        <img
                            src={getImageURL(movie.poster_path)}
                            alt={movie.title}
                            className="w-full h-full object-cover rounded-lg"
                            loading='lazy'
                        />

                        <button
                            className='absolute top-2 left-2 p-2 rounded-full bg-black/50 hover:bg-black/75 transition-colors'
                            onClick={handleFavoriteClick}
                        >
                            {isFavorite(movie) ? '❤️' : '🤍'}
                        </button>

                        <div className='absolute top-2 right-2 bg-black text-white px-2 py-4 rounded-lg'>
                            {/* Puntuacion */}
                            ⭐{Number(movie?.vote_average).toFixed(1)}

                        </div>

                        <div className='p-4'>
                            <h3
                                className='text-lg font-bold text-sky-900 group-hover:text-blue-600'
                            >{movie.title}</h3>
                            <p className='text-sm text-gray-500'>{movie.release_date.split("-")[0]}</p>
                        </div>
                    </div>
                </article>
            </Link>
        </div >
    )
}

export default MovieCard