import React, { useState } from 'react'

const SearchBox = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    return (
        <div className="max-w-xl mx-auto">
            <input
                type="text"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    onSearch(e.target.value);
                }}
                placeholder="Busca una pelicula"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
        </div>
    );
};

export default SearchBox