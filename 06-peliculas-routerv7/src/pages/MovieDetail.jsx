import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import { getImageURL, getMovieDetail } from '../services/tmdb';
import { PacmanLoader } from 'react-spinners';

const MovieDetail = () => {
    const { id } = useParams();
    const { data, loading, error } = useFetch(() => getMovieDetail(id), [id]);
    // Error y loading
    if (error) {
        return (
            <div className="text-center py-10">
                <p className="text-2xl font-bold text-red-500">
                    Error al cargar la información de la película
                </p>
            </div>
        );
    }
    if (loading) {
        return <PacmanLoader color="#1f297b" />;
    }

    // Mostrar info
    return (
        <article className='max-w-4xl mx-auto'>
            <header className='relative h-96 mb-8'>
                <img
                    src={getImageURL(data?.backdrop_path, "original")}
                    alt={data.title}
                    className="w-full h-full object-cover rounded-lg"
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'>
                    <div className='absolute bottom-2 text-white p-6'>
                        <h1 className="text-4xl font-bold">
                            {data?.title}
                        </h1>
                    </div>
                </div>
            </header>
            {/* contenido principal */}
            <div className='grid md:grid-cols-3 gap-8'>
                {/* poster */}
                <div>
                    <img
                        className=''
                        src={getImageURL(data?.poster_path)}
                        alt={data?.title} />
                </div>
                <div className='md:col-span-2 space-y-6'>
                    <div className='flex items-center gap-4 text-sm text-gray-700'>
                        <span className='font-bold mt-4'>
                            {data?.release_date.split("-")[0]}
                        </span>
                        <span className='font-bold mt-4'>
                            {data?.runtime} minutos
                        </span>
                        <span className='font-bold mt-4'>
                            {Number(data?.vote_average.toFixed(1))} ⭐
                        </span>
                    </div>
                    <section>
                        Generos {data.id}
                    </section>
                    <section>
                        <h2 className='text-2xl font-bold mb-8'>Sinopsis</h2>
                        <p>{data?.overview}</p>
                    </section>
                    <section>
                        Seccion de videos
                    </section>

                </div>

            </div>

        </article>
    );
};

export default MovieDetail