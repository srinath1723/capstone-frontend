import React, { useEffect, useState } from 'react';
import ListingCard from '../componentes/ListingCard';
import api from '../services/api';

const SearchResults = ({ location }) => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        // Fetch listings based on search criteria
        const fetchListings = async () => {
            const response = await api.get(`/listings?location=${location}`);
            setListings(response.data);
        };

        fetchListings();
    }, [location]);

    return (
        <div className="search-results">
            <h1>Results for "{location}"</h1>
            <div className="listings">
                {listings.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} />
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
