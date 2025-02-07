
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignInAlt, FaUserShield, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartItems, setCartItems] = useState(0); 
    const navigate = useNavigate();

    useEffect(() => {
       
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        const totalItems = storedCart.reduce((total, item) => total + item.quantity, 0);
        setCartItems(totalItems);
    }, []);

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        navigate(category === 'all' ? '/' : `/${category}`);
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-yellow-500 p-4 fixed w-full top-0 z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">DD's Bakery</Link>
                
                {/* Mobile Menu Icon */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-4 items-center">
                    <Link to="/" className="text-white font-bold hover:text-gray-200">Home</Link>
                    <Link to="/special-items" className="text-white font-bold hover:text-gray-200">Special Items</Link>
                    <Link to="/cakes" className="text-white font-bold hover:text-gray-200">Cakes</Link>
                    <Link to="/donuts" className="text-white font-bold hover:text-gray-200">Donuts</Link>
                    <Link to="/cookies" className="text-white font-bold hover:text-gray-200">Cookies</Link>
                    
                    <Link to="/admin-login" className="bg-blue-500 hover:bg-blue-600 text-white flex items-center px-4 py-2 rounded-lg">
                        <FaUserShield className="mr-2" /> Admin
                    </Link>
                    <Link to="/user-login" className="bg-green-500 hover:bg-green-600 text-white flex items-center px-4 py-2 rounded-lg">
                        <FaSignInAlt className="mr-2" /> Login
                    </Link>
                    
                    {/* Cart Icon */}
                    <Link to="/cart" className="relative text-white flex items-center">
                        <FaShoppingCart size={24} />
                        {cartItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                                {cartItems}
                            </span>
                        )}
                    </Link>
                    
                    {/* Filter Dropdown */}
                    <select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="p-2 bg-white text-black border rounded-lg font-bold"
                    >
                        <option value="all">All Products</option>
                        <option value="cakes">Cakes</option>
                        <option value="donuts">Donuts</option>
                        <option value="cookies">Cookies</option>
                        <option value="special-items">Special Items</option>
                    </select>
                </div>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden mt-4 bg-yellow-500 p-4 space-y-2 flex flex-col">
                    <Link to="/" className="text-white font-bold hover:text-gray-200">Home</Link>
                    <Link to="/special-items" className="text-white font-bold hover:text-gray-200">Special Items</Link>
                    <Link to="/cakes" className="text-white font-bold hover:text-gray-200">Cakes</Link>
                    <Link to="/donuts" className="text-white font-bold hover:text-gray-200">Donuts</Link>
                    <Link to="/cookies" className="text-white font-bold hover:text-gray-200">Cookies</Link>
                    
                    <Link to="/admin-login" className="bg-blue-500 hover:bg-blue-600 text-white flex items-center px-4 py-2 rounded-lg">
                        <FaUserShield className="mr-2" /> Admin Login
                    </Link>
                    <Link to="/user-login" className="bg-green-500 hover:bg-green-600 text-white flex items-center px-4 py-2 rounded-lg">
                        <FaSignInAlt className="mr-2" /> User Login
                    </Link>
                    
                    {/* Cart for Mobile */}
                    <Link to="/cart" className="relative text-white flex items-center">
                        <FaShoppingCart size={24} />
                        {cartItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                                {cartItems}
                            </span>
                        )}
                    </Link>
                    
                    {/* Filter Dropdown */}
                    <select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="p-2 bg-white text-black border rounded-lg w-full font-bold"
                    >
                        <option value="all">All Products</option>
                        <option value="cakes">Cakes</option>
                        <option value="donuts">Donuts</option>
                        <option value="cookies">Cookies</option>
                        <option value="special-items">Special Items</option>
                    </select>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaSignInAlt, FaUserShield, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

// const Navbar = () => {
//     const [selectedCategory, setSelectedCategory] = useState('all');
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [cartItems, setCartItems] = useState(0); 
//     const navigate = useNavigate();

//     useEffect(() => {
//         const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//         const totalItems = storedCart.reduce((total, item) => total + item.quantity, 0);
//         setCartItems(totalItems);
//     }, []);

//     const handleCategoryChange = (event) => {
//         const category = event.target.value;
//         setSelectedCategory(category);
//         navigate(category === 'all' ? '/' : `/${category}`);
//     };

//     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//     return (
//         <nav className="bg-yellow-500 p-4 fixed w-full top-0 z-50 shadow-lg">
//             <div className="container mx-auto flex justify-between items-center">
//                 <Link to="/" className="text-white text-2xl font-bold">DD's Bakery</Link>
                
//                 {/* Mobile Menu Icon */}
//                 <div className="lg:hidden">
//                     <button onClick={toggleMenu} className="text-white focus:outline-none">
//                         {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//                     </button>
//                 </div>

//                 {/* Desktop Menu */}
//                 <div className="hidden lg:flex space-x-4 items-center">
//                     <Link to="/admin-login" className="bg-blue-500 hover:bg-blue-600 text-white flex items-center px-4 py-2 rounded-lg">
//                         <FaUserShield className="mr-2" /> Admin
//                     </Link>
//                     <Link to="/user-login" className="bg-green-500 hover:bg-green-600 text-white flex items-center px-4 py-2 rounded-lg">
//                         <FaSignInAlt className="mr-2" /> Login
//                     </Link>
                    
//                     {/* Cart Icon */}
//                     <Link to="/cart" className="relative text-white flex items-center">
//                         <FaShoppingCart size={24} />
//                         {cartItems > 0 && (
//                             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
//                                 {cartItems}
//                             </span>
//                         )}
//                     </Link>
                    
//                     {/* Filter Dropdown */}
//                     <select
//                         value={selectedCategory}
//                         onChange={handleCategoryChange}
//                         className="p-2 bg-white text-black border rounded-lg font-bold"
//                     >
//                         <option value="all">All Products</option>
//                         <option value="cakes">Cakes</option>
//                         <option value="donuts">Donuts</option>
//                         <option value="cookies">Cookies</option>
//                         <option value="special-items">Special Items</option>
//                     </select>
//                 </div>
//             </div>
            
//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <div className="lg:hidden mt-4 bg-yellow-500 p-4 space-y-2 flex flex-col">
//                     <Link to="/admin-login" className="bg-blue-500 hover:bg-blue-600 text-white flex items-center px-4 py-2 rounded-lg">
//                         <FaUserShield className="mr-2" /> Admin Login
//                     </Link>
//                     <Link to="/user-login" className="bg-green-500 hover:bg-green-600 text-white flex items-center px-4 py-2 rounded-lg">
//                         <FaSignInAlt className="mr-2" /> User Login
//                     </Link>
                    
//                     {/* Cart for Mobile */}
//                     <Link to="/cart" className="relative text-white flex items-center">
//                         <FaShoppingCart size={24} />
//                         {cartItems > 0 && (
//                             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
//                                 {cartItems}
//                             </span>
//                         )}
//                     </Link>
                    
//                     {/* Filter Dropdown */}
//                     <select
//                         value={selectedCategory}
//                         onChange={handleCategoryChange}
//                         className="p-2 bg-white text-black border rounded-lg w-full font-bold"
//                     >
//                         <option value="all">All Products</option>
//                         <option value="cakes">Cakes</option>
//                         <option value="donuts">Donuts</option>
//                         <option value="cookies">Cookies</option>
//                         <option value="special-items">Special Items</option>
//                     </select>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;
