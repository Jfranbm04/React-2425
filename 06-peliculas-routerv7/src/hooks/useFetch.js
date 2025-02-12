import { useEffect, useState } from "react";


export const useFetch = (fetchFunction, dependencies=[]) => {
    // Importante pasar siempre la data, un loading (para evitar null) y error
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async() => {
    try {
            const result = await fetchFunction();
            setData(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        // abortController es un objeto que me permite abortar una peticion fetch
        const abortController = new AbortController();
        // Me pongo en modo de carga
        setLoading(true);
        // LLamo a la funcion que me pasan por parámetro
        fetchData();
        // Limpio los errores
        setError(null);

        return () => {
            // Lo que ejecutemos aqui se ejecutará cuando el componente se desmonte (se quite)
            abortController.abort();
        }

    }, dependencies);
    

    return {data, loading, error};
};