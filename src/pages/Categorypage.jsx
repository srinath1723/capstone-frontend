import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ListingCard from '../componentes/ListingCard';
import api from '../services/api';
import '../pages/CategoryPage.css'; // Assuming you have a CSS file for CategoryPage

const CategoryPage = () => {
    const { categoryName } = useParams();
    const [listings, setListings] = useState([]);

    useEffect(() => {
        // Fetch listings based on category
        const fetchListings = async () => {
            const response = await api.get(`/listings/category/${categoryName}`);
            setListings(response.data);
        };

        fetchListings();
    }, [categoryName]);

    return (
        <div className="category-page">
            <h1>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h1>
            <div className="listings">
                {listings.length > 0 ? (
                    listings.map((listing) => (
                        <ListingCard key={listing.id} listing={listing} />
                    ))
                ) : (
                    <p>No listings available in this category.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
