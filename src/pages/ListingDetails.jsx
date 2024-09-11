import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const ListingDetails = () => {
    const { id } = useParams();
    const [listing, setListing] = useState(null);

    useEffect(() => {
        // Fetch single listing details
        const fetchListing = async () => {
            const response = await api.get(`/listings/${id}`);
            setListing(response.data);
        };

        fetchListing();
    }, [id]);

    if (!listing) return <div>Loading...</div>;

    return (
        <div className="listing-details">
            <img src={listing.image} alt={listing.name} />
            <h1>{listing.name}</h1>
            <p>{listing.location}</p>
            <p>{listing.description}</p>
            <p>{listing.price}</p>
        </div>
    );
};

export default ListingDetails;
