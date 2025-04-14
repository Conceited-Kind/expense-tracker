import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search by name or category..."
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
}

export default SearchBar;