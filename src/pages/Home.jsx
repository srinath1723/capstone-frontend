import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../componentes/SearchBar';
import ListingCard from '../componentes/ListingCard';
import api from '../services/api'; // You'll create this API service
import '../pages/Home.css';
const Home = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        // Fetch featured listings from the backend
        const fetchListings = async () => {
            const response = await api.get('/listings/featured');
            setListings(response.data);
        };

        fetchListings();
    }, []);

    return (
        <div className="home">
            <SearchBar onSearch={(location) => console.log('Searching for:', location)} />
            <div className="categories">
                <h2>Explore Categories</h2>
                <div className="category-links">
                    <Link to="/category/rooms" className="category-link">Rooms</Link>
                    <Link to="/category/cabins" className="category-link">Cabins</Link>
                    <Link to="/category/islands" className="category-link">Islands</Link>
                    <Link to="/category/amazing-pools" className="category-link">Amazing Pools</Link>
                </div>
            </div>
            <div className="listings">
                {listings.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} />
                ))}
            </div>
        </div>
    );
};

export default Home;
