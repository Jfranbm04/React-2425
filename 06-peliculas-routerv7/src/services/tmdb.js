const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_IMG_URL = import.meta.env.VITE_BASE_IMG_URL

// Tamaños de las imagenes
export const SIZE = {
    POSTER: "W500",
    ORIGINAL: "original",
};

// Funcion para hacer fetch a la API URL, opciones
const fetchFromApi = async (endpoint, options={}) => {
    try{
        // https://api.themoviedb.org/3/movie/popular?api_key=c71e9a7be9503714ea7d1b92a08e011f&language=es-ES
        const response= await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=es-ES&${new URLSearchParams(options)}`);
        const data = await response.json();
        return data;
    }catch (error){
        throw new Error("Error fetching data");    
    }
};

// Funcion para obtener las peliculas populares
export const getPopularMovies = async () => {
    return await fetchFromApi("/movie/popular");
}

export const getMovieDetail = async (id)=> {
    return await fetchFromApi(`/movie/${id}`);
}
export const getImageURL = (path, size = SIZE.POSTER) => {
    return `${BASE_IMG_URL}/${size}/${path}`;
}

export const getMovieVideos = async (id) => {
    return await fetchFromApi(`/movie/${id}/videos`);
}
