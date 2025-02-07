import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SpecialItems from './pages/SpecialItems';
import Cakes from './pages/Cakes';
import Donuts from './pages/Donuts';
import Cookies from './pages/Cookies';
import Filter from './pages/Filter';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import UserLogin from './pages/UserLogin';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Payment from './pages/Payment'; // ✅ Correct import

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Public routes */}
                <Route path="/" element={<Home />} /> {/* Homepage */}
                <Route path="/special-items" element={<SpecialItems />} /> {/* Special Items */}
                <Route path="/cakes" element={<Cakes />} /> {/* Cakes */}
                <Route path="/donuts" element={<Donuts />} /> {/* Donuts */}
                <Route path="/cookies" element={<Cookies />} /> {/* Cookies */}
                <Route path="/filter" element={<Filter />} /> {/* Filter */}
                <Route path="/cart" element={<Cart />} /> {/* Cart page */}
                <Route path="/payment" element={<Payment />} /> {/* Payment page */}

                {/* Admin Routes */}
                <Route path="/admin-login" element={<AdminLogin />} /> {/* Admin login */}
                <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Admin dashboard */}

                {/* User Routes */}
                <Route path="/user-login" element={<UserLogin />} /> {/* User login */}
                
                {/* Dynamic Route for ProductDetails */}
                <Route path="/product/:id" element={<ProductDetails />} /> {/* View product details based on ID */}
            </Routes>
        </Router>
    );
};

export default App;
