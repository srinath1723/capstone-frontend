// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../componentes/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>About</h4>
                <Link to="/about">How Airbnb works</Link>
                <Link to="/news">Newsroom</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/investors">Investors</Link>
            </div>
            <div className="footer-section">
                <h4>Community</h4>
                <Link to="/diversity">Diversity & Belonging</Link>
                <Link to="/accessibility">Accessibility</Link>
                <Link to="/disaster-relief">Disaster relief</Link>
                <Link to="/invite-friends">Invite friends</Link>
            </div>
            <div className="footer-section">
                <h4>Host</h4>
                <Link to="/host">Host your home</Link>
                <Link to="/host-experience">Host an experience</Link>
                <Link to="/host-resources">Responsible hosting</Link>
                <Link to="/host-center">Host community</Link>
            </div>
            <div className="footer-section">
                <h4>Support</h4>
                <Link to="/help">Help Center</Link>
                <Link to="/safety">Trust & Safety</Link>
                <Link to="/contact">Contact us</Link>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Airbnb, Inc. All rights reserved.</p>
                <div className="social-media">
                    <a href="https://www.facebook.com">Facebook</a>
                    <a href="https://www.twitter.com">Twitter</a>
                    <a href="https://www.instagram.com">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
