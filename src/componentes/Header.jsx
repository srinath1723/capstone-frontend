import React from 'react';
import { Link } from 'react-router-dom';
import '../componentes/Header.css'; // You'll create this CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">Airbnb</Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    );
};

export default Header;
