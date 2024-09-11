import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import ListingDetails from './pages/ListingDetails';
import CategoryPage from './pages/Categorypage';
import Header from './componentes/Header';
import Footer from './componentes/Footer';

const AppRoutes = () => (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/listing/:id" element={<ListingDetails />} />
            <Route path="/category/:categoryName" element={<CategoryPage />}/>
        </Routes>
        <Footer />
    </Router>
);

export default AppRoutes;
