import React from 'react';
import { Link } from 'react-router-dom';
import '../componentes/ListingCard.css';

const ListingCard = ({ listing }) => {
    return (
        <div className="listing-card">
            <img src={listing.image} alt={listing.name} />
            <div className="listing-info">
                <h2>{listing.name}</h2>
                <p>{listing.location}</p>
                <p>{listing.price}</p>
                <Link to={`/listing/${listing.id}`}>View Details</Link>
            </div>
        </div>
    );
};

export default ListingCard;
