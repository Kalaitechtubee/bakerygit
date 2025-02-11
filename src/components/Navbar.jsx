// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaSignInAlt, FaUserShield, FaShoppingCart, FaBars, FaTimes, FaFilter } from 'react-icons/fa';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [cartItems, setCartItems] = useState(0);
//     const [selectedCategory, setSelectedCategory] = useState('all');
//     const [isFilterOpen, setIsFilterOpen] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//         const totalItems = storedCart.reduce((total, item) => total + item.quantity, 0);
//         setCartItems(totalItems);
//     }, []);

//     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//     const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

//     const handleCategoryChange = (category) => {
//         setSelectedCategory(category);
//         navigate(category === 'all' ? '/' : `/${category}`);
//         setIsFilterOpen(false); // Close filter after selection
//     };

//     return (
//         <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-yellow-500 via-orange-400 to-red-400 shadow-lg backdrop-blur-md bg-opacity-90">
//             <div className="container mx-auto flex justify-between items-center p-4">
//                 {/* Logo */}
//                 <Link to="/" className="text-white text-2xl md:text-3xl font-extrabold tracking-wide">🍰 DD's Bakery</Link>

//                 {/* Desktop Menu */}
//                 <div className="hidden lg:flex space-x-6 items-center">
//                     {/* Filter Dropdown */}
//                     <div className="relative">
//                         <button 
//                             onClick={toggleFilter} 
//                             className="bg-white text-black flex items-center px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
//                         >
//                             <FaFilter className="mr-2" /> Filter
//                         </button>

//                         {isFilterOpen && (
//                             <div className="absolute top-12 right-0 w-48 bg-white shadow-lg rounded-lg p-3 space-y-2">
//                                 {['all', 'cakes', 'donuts', 'cookies', 'special-items'].map((category) => (
//                                     <button
//                                         key={category}
//                                         onClick={() => handleCategoryChange(category)}
//                                         className={`block w-full text-left px-4 py-2 rounded-lg text-black hover:bg-gray-200 transition ${
//                                             selectedCategory === category ? 'bg-gray-300 font-semibold' : ''
//                                         }`}
//                                     >
//                                         {category.charAt(0).toUpperCase() + category.slice(1)}
//                                     </button>
//                                 ))}
//                             </div>
//                         )}
//                     </div>

//                     {/* Admin Button */}
//                     <Link to="/admin-login" className="bg-blue-600 hover:bg-blue-700 text-white flex items-center px-5 py-2 rounded-full transition">
//                         <FaUserShield className="mr-2" /> Admin
//                     </Link>

//                     {/* Login Button */}
//                     <Link to="/user-login" className="bg-green-500 hover:bg-green-600 text-white flex items-center px-5 py-2 rounded-full transition">
//                         <FaSignInAlt className="mr-2" /> Login
//                     </Link>

//                     {/* Cart Button */}
//                     <Link to="/cart" className="relative flex items-center">
//                         <button className="bg-white text-black flex items-center px-5 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
//                             <FaShoppingCart className="mr-2" size={22} />
//                             Cart
//                         </button>
//                         {cartItems > 0 && (
//                             <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2">
//                                 {cartItems}
//                             </span>
//                         )}
//                     </Link>
//                 </div>

//                 {/* Mobile Menu Icon */}
//                 <div className="lg:hidden">
//                     <button onClick={toggleMenu} className="text-white focus:outline-none">
//                         {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <div className="lg:hidden fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-white transition-all">
//                     <Link to="/" onClick={toggleMenu} className="text-2xl font-bold hover:text-gray-300 transition">
//                         Home
//                     </Link>

//                     {/* Admin Button */}
//                     <Link to="/admin-login" className="bg-blue-600 hover:bg-blue-700 text-white flex items-center px-6 py-3 rounded-full transition">
//                         <FaUserShield className="mr-2" /> Admin
//                     </Link>

//                     {/* Login Button */}
//                     <Link to="/user-login" className="bg-green-500 hover:bg-green-600 text-white flex items-center px-6 py-3 rounded-full transition">
//                         <FaSignInAlt className="mr-2" /> Login
//                     </Link>

//                     {/* Cart Button */}
//                     <Link to="/cart" className="relative flex items-center">
//                         <button className="bg-white text-black flex items-center px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
//                             <FaShoppingCart className="mr-2" size={24} />
//                             Cart
//                         </button>
//                         {cartItems > 0 && (
//                             <span className="absolute -top-2 -right-2 bg-red-600 text-white text-sm font-bold rounded-full px-3">
//                                 {cartItems}
//                             </span>
//                         )}
//                     </Link>

//                     {/* Mobile Filter Section */}
//                     <div className="w-3/4">
//                         <button 
//                             onClick={toggleFilter} 
//                             className="w-full bg-white text-black flex items-center justify-center py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
//                         >
//                             <FaFilter className="mr-2" /> Filter Products
//                         </button>

//                         {isFilterOpen && (
//                             <div className="mt-3 bg-white shadow-lg rounded-lg p-3 space-y-2 text-black">
//                                 {['all', 'cakes', 'donuts', 'cookies', 'special-items'].map((category) => (
//                                     <button
//                                         key={category}
//                                         onClick={() => handleCategoryChange(category)}
//                                         className={`block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200 transition ${
//                                             selectedCategory === category ? 'bg-gray-300 font-semibold' : ''
//                                         }`}
//                                     >
//                                         {category.charAt(0).toUpperCase() + category.slice(1)}
//                                     </button>
//                                 ))}
//                             </div>
//                         )}
//                     </div>

//                     <button onClick={toggleMenu} className="text-gray-300 text-lg mt-4">Close Menu</button>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSignInAlt,
  FaUserShield,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaFilter,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = storedCart.reduce((total, item) => total + item.quantity, 0);
    setCartItems(totalItems);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    navigate(category === "all" ? "/" : `/${category}`);
    localStorage.setItem("selectedCategory", category);
    setIsFilterOpen(false); // Close filter after selection
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-yellow-500 via-orange-400 to-red-400 shadow-lg bg-opacity-90">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl md:text-3xl font-extrabold">
          🍰 DD's Bakery
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 items-center">
          {/* Filter Dropdown */}
          <div className="relative">
            <button
              onClick={toggleFilter}
              aria-label="Filter Products"
              className="bg-white text-black flex items-center px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <FaFilter className="mr-2" /> Filter
            </button>

            {isFilterOpen && (
              <div className="absolute top-12 right-0 w-48 bg-white shadow-lg rounded-lg p-3 space-y-2">
                {["all", "cakes", "donuts", "cookies", "special-items"].map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200 transition ${
                      selectedCategory === category ? "bg-gray-300 font-semibold" : ""
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Admin Button */}
          <Link
            to="/admin-login"
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center px-5 py-2 rounded-full transition"
          >
            <FaUserShield className="mr-2" /> Admin
          </Link>

          {/* Login Button */}
          <Link
            to="/user-login"
            className="bg-green-500 hover:bg-green-600 text-white flex items-center px-5 py-2 rounded-full transition"
          >
            <FaSignInAlt className="mr-2" /> Login
          </Link>

          {/* Cart Button */}
          <Link to="/cart" className="relative flex items-center">
            <button className="bg-white text-black flex items-center px-5 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
              <FaShoppingCart className="mr-2" size={22} />
              Cart
            </button>
            {cartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2">
                {cartItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center space-y-6 text-white py-6 transition-all ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link to="/" onClick={toggleMenu} className="text-2xl font-bold hover:text-gray-300 transition">
          Home
        </Link>

        {/* Admin Button */}
        <Link
          to="/admin-login"
          className="bg-blue-600 hover:bg-blue-700 text-white flex items-center px-6 py-3 rounded-full transition"
        >
          <FaUserShield className="mr-2" /> Admin
        </Link>

        {/* Login Button */}
        <Link
          to="/user-login"
          className="bg-green-500 hover:bg-green-600 text-white flex items-center px-6 py-3 rounded-full transition"
        >
          <FaSignInAlt className="mr-2" /> Login
        </Link>

        {/* Cart Button */}
        <Link to="/cart" className="relative flex items-center">
          <button className="bg-white text-black flex items-center px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
            <FaShoppingCart className="mr-2" size={24} />
            Cart
          </button>
          {cartItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-sm font-bold rounded-full px-3">
              {cartItems}
            </span>
          )}
        </Link>

        {/* Mobile Filter Section */}
        <div className="w-3/4">
          <button
            onClick={toggleFilter}
            className="w-full bg-white text-black flex items-center justify-center py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            <FaFilter className="mr-2" /> Filter Products
          </button>

          {isFilterOpen && (
            <div className="mt-3 bg-white shadow-lg rounded-lg p-3 space-y-2 text-black">
              {["all", "cakes", "donuts", "cookies", "special-items"].map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200 transition ${
                    selectedCategory === category ? "bg-gray-300 font-semibold" : ""
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>

        <button onClick={toggleMenu} className="text-gray-300 text-lg mt-4">
          Close Menu
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

