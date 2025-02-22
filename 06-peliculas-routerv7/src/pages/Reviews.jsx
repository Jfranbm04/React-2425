import { useReview } from '../contexts/ReviewContext';
import { getImageURL, getMovieDetail } from '../services/tmdb';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Reviews = () => {
    const { getAllReviews } = useReview();
    const [moviesWithReviews, setMoviesWithReviews] = useState([]);
    const allReviews = getAllReviews();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const movieIds = Object.keys(allReviews);
            const moviePromises = movieIds.map(async (id) => {
                const movieData = await getMovieDetail(id);
                return {
                    ...movieData,
                    reviews: allReviews[id]
                };
            });

            const movies = await Promise.all(moviePromises);
            setMoviesWithReviews(movies);
        };

        fetchMovieDetails();
    }, [allReviews]);

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8">Todas las Reseñas</h1>
            <div className="space-y-6">
                {moviesWithReviews.map(movie => (
                    <div key={movie.id} className="flex gap-4 bg-white rounded-lg shadow p-4">
                        {/* Imagen */}
                        <img
                            src={getImageURL(movie.poster_path, 'w200')}
                            alt={movie.title}
                            className="w-24 h-36 object-cover rounded"
                        />
                        {/* Titulo */}
                        <div className="flex-grow">
                            {movie.title}
                            {/* Reseñas */}
                            <div className="mt-3 space-y-3">
                                {movie.reviews.map(review => (
                                    <div key={review.id} className="border-b border-gray-100 pb-3">
                                        <p className="text-gray-700">{review.content}</p>
                                        <span className="text-sm text-gray-500">
                                            {new Date(review.date).toLocaleString()}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;