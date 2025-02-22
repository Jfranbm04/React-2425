import { useReview } from '../contexts/ReviewContext';
import { useToast } from '../contexts/ToastContext';

const ReviewItem = ({ review, movieId }) => { // Necesito el movieId para borrar la review de una pelicula
    const { deleteReview } = useReview();

    // Toast
    const { showToast } = useToast();

    const handleDelete = () => {
        deleteReview(movieId, review.id);
        showToast("Reseña eliminada")
    };

    return (
        <div className="border-b border-gray-200 py-4">
            <p className="text-gray-800 mb-2">{review.content}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{new Date(review.date).toLocaleString()}</span>
                <button
                    onClick={handleDelete}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;