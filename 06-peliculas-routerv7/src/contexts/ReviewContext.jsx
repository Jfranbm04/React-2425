import { createContext, useContext, useEffect, useState } from "react";

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
    const [reviews, setReviews] = useState(() => {
        const savedReviews = localStorage.getItem("reviews");
        return savedReviews ? JSON.parse(savedReviews) : {};
    });

    useEffect(() => {
        localStorage.setItem("reviews", JSON.stringify(reviews));
    }, [reviews]);

    const getReviews = (movieId) => {
        return reviews[movieId] || [];
    };

    const addReview = (movieId, content) => {
        const newReview = {
            id: Date.now(), // Le pongo un id para 
            content,
            date: new Date().toISOString(),
        };

        setReviews((prevReviews) => ({
            ...prevReviews,
            [movieId]: [...(prevReviews[movieId] || []), newReview], // Crea una review nueva sin tocar las anteriores para esa pelicula en especifico
        }));
    };

    const deleteReview = (movieId, reviewId) => {
        setReviews((prevReviews) => ({
            ...prevReviews,
            [movieId]: prevReviews[movieId].filter(review => review.id !== reviewId)
        }));
    };

    const getAllReviews = () => {
        return reviews;
    };

    return (
        <ReviewContext.Provider value={{
            reviews,
            getReviews,
            addReview,
            deleteReview,
            getAllReviews
        }}>
            {children}
        </ReviewContext.Provider>
    );
};

export const useReview = () => {
    const context = useContext(ReviewContext);
    if (!context) {
        throw new Error("useReview debe estar dentro del proveedor ReviewProvider");
    }
    return context;
};