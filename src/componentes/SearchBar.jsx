import React, { useState } from 'react';
import '../componentes/SearchBar.css'; 
const SearchBar = ({ onSearch }) => {
    const [location, setLocation] = useState('');

    const handleSearch = () => {
        if (onSearch) {
            onSearch(location);
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Where are you going?"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
