import { useState } from 'react';
import { useReview } from '../contexts/ReviewContext';
import { useToast } from '../contexts/ToastContext';

const ReviewForm = ({ movieId }) => {
    const [content, setContent] = useState('');
    const { addReview } = useReview();
    // Toast
    const { showToast } = useToast();

    // Añadir una review
    const handleSubmit = (e) => {
        e.preventDefault();

        addReview(movieId, content);
        showToast("Reseña publicada");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">

            <div>
                <label htmlFor="review" className="block text-lg font-medium text-sky-900 mb-2">
                    Escribe tu reseña
                </label>
                <textarea
                    id="review"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Comparte tu opinión sobre esta película..."
                />
            </div>
            <button
                type="submit"
                className="w-full md:w-auto px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors duration-200 font-medium"
            >
                Publicar reseña
            </button>
        </form>
    );
};

export default ReviewForm;