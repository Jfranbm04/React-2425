import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import { getImageURL, getMovieDetail, getMovieVideos } from '../services/tmdb';
import { PacmanLoader } from 'react-spinners';
import ReviewForm from '../components/ReviewForm';
import ReviewItem from '../components/ReviewItem';
import { useReview } from '../contexts/ReviewContext';

const MovieDetail = () => {
    const { id } = useParams();
    const { data, loading, error } = useFetch(() => getMovieDetail(id), [id]);
    // Sacar videos de la API
    const { data: videoData, loading: videoLoading } = useFetch(() => getMovieVideos(id), [id]);

    const { getReviews } = useReview();
    const movieReviews = getReviews(id);



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
    if (loading || videoLoading) {
        return <PacmanLoader color="#1f297b" />;
    }

    const trailer = videoData?.results?.find(
        (video) => video.type === 'Trailer' && video.site === 'YouTube'
    );


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
                {/* Tiempo */}
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
                    {/* Generos */}
                    <section className='flex gap-2 flex-wrap'>
                        {data?.genres?.map(genre => (
                            <span
                                key={genre.id}
                                className='px-4 py-1 bg-sky-100 text-sky-900 rounded-full text-sm font-medium'
                            >
                                {genre.name}
                            </span>
                        ))}
                    </section>
                    {/* Sinopsis */}
                    <section>
                        <h2 className='text-2xl font-bold mb-8'>Sinopsis</h2>
                        <p>{data?.overview}</p>
                    </section>
                    {/* Trailer */}
                    <section className='space-y-4'>
                        <h2 className='text-2xl font-bold'>Videos</h2>
                        {trailer ? (
                            <div className='aspect-video'>
                                <iframe
                                    className='w-full h-full rounded-lg'
                                    src={`https://www.youtube.com/embed/${trailer.key}`}
                                    title={"YouTube video player"}
                                    allowFullScreen
                                />
                            </div>
                        ) : (
                            <p className='text-gray-500 text-lg'>No hay trailer disponible</p>
                        )}
                    </section>
                    {/* Reviews */}
                    <section className='bg-gray-50 p-6 rounded-lg shadow-lg'>
                        <h2 className='text-2xl font-bold text-sky-900 mb-6'>Reviews</h2>
                        <div className='bg-white p-4 rounded-lg shadow mb-6'>
                            <ReviewForm movieId={id} />
                        </div>

                        <div className='space-y-4'>
                            {movieReviews.length > 0 ? (
                                movieReviews.map(review => (
                                    <ReviewItem
                                        key={review.id}
                                        review={review}
                                        movieId={id}
                                    />
                                ))
                            ) : (
                                <div className='text-center py-8 bg-white rounded-lg'>
                                    <p className='text-gray-500 text-lg'>No hay reseñas todavía.</p>
                                </div>
                            )}
                        </div>
                    </section>

                </div>

            </div>

        </article>
    );
};

export default MovieDetail