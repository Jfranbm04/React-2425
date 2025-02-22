import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { getImageURL, searchMovies } from '../services/tmdb';
import { PacmanLoader } from 'react-spinners';
import SearchBox from '../components/SearchBox';
import MovieCard from '../components/MovieCard';

const Search = () => {
    const [text, setText] = useState('');
    const { data, loading } = useFetch(
        () => searchMovies(text),
        [text],
        !text
    );

    return (
        <div className="max-w-6xl mx-auto py-8 px-4">
            <SearchBox onSearch={setText} />

            {loading ? (
                <div className="flex justify-center py-10">
                    <PacmanLoader color="#1f297b" />
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
                    {data?.results?.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}

            {data?.results?.length === 0 && text && (
                <p className="text-center text-gray-500 mt-8">
                    No se encontraron películas
                </p>
            )}
        </div>
    );
};

export default Search;