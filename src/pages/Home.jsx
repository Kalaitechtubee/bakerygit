import React, { useState, useEffect } from 'react';
import { FaBirthdayCake, FaHamburger, FaCookieBite, FaStar, FaTag } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import image1 from '../assets/images/Image1.jpg';
import image2 from '../assets/images/Image2.jpg';
import image3 from '../assets/images/Image3.jpg';
import image4 from '../assets/images/Image4.jpg';
import image5 from '../assets/images/Image5.jpg';
import image6 from '../assets/images/Image6.jpg';
import image7 from '../assets/images/Image7.jpg';
import image8 from '../assets/images/Image8.jpg';
import image9 from '../assets/images/Image9.jpg';
import image10 from '../assets/images/Image10.jpg';
import image11 from '../assets/images/Image11.jpg';
import image12 from '../assets/images/Image12.jpg';
import image13 from '../assets/images/Image13.jpg';
import image14 from '../assets/images/Image14.jpg';
import image15 from '../assets/images/Image15.jpg';
import image16 from '../assets/images/Image16.jpg';
import image17 from '../assets/images/Image17.jpg';
import image18 from '../assets/images/Image18.jpg';
import image19 from '../assets/images/Image19.jpg';
import image20 from '../assets/images/Image20.jpg';

const Home = () => {
    const products = [
        // Cakes
        { id: 1, category: 'cakes', name: 'Black Forest Cake', description: 'Classic black forest cake with cherries.', price: 750, image: image1 },
        { id: 2, category: 'cakes', name: 'Red Velvet Cake', description: 'Rich red velvet cake with cream cheese frosting.', price: 850, image: image2 },
        { id: 3, category: 'cakes', name: 'Chocolate Truffle Cake', description: 'Dark chocolate truffle layered cake.', price: 950, image: image3 },
        { id: 4, category: 'cakes', name: 'Pineapple Cake', description: 'Light and fluffy pineapple-flavored cake.', price: 700, image: image4 },
        { id: 5, category: 'cakes', name: 'Butterscotch Cake', description: 'Creamy butterscotch cake with caramel drizzle.', price: 800, image: image5 },

        // Donuts
        { id: 6, category: 'donuts', name: 'Glazed Donut', description: 'Classic glazed donut.', price: 80, image: image6 },
        { id: 7, category: 'donuts', name: 'Chocolate Donut', description: 'Delicious chocolate-coated donut.', price: 100, image: image7 },
        { id: 8, category: 'donuts', name: 'Strawberry Donut', description: 'Donut with strawberry glaze.', price: 90, image: image8 },
        { id: 9, category: 'donuts', name: 'Blueberry Donut', description: 'Donut with blueberry glaze.', price: 95, image: image9 },
        { id: 10, category: 'donuts', name: 'Caramel Donut', description: 'Donut topped with rich caramel glaze.', price: 105, image: image10 },

        // Cookies
        { id: 11, category: 'cookies', name: 'Chocolate Chip Cookie', description: 'Crunchy cookie with chocolate chips.', price: 50, image: image11 },
        { id: 12, category: 'cookies', name: 'Oatmeal Raisin Cookie', description: 'Healthy oatmeal and raisin cookie.', price: 60, image: image12 },
        { id: 13, category: 'cookies', name: 'Peanut Butter Cookie', description: 'Rich peanut butter-flavored cookie.', price: 70, image: image13 },
        { id: 14, category: 'cookies', name: 'Almond Biscotti', description: 'Italian almond-flavored biscotti.', price: 90, image: image14 },
        { id: 15, category: 'cookies', name: 'Sugar Cookie', description: 'Soft sugar cookies with sprinkles.', price: 65, image: image15 },

        // Special Items
        { id: 16, category: 'special', name: 'Macarons', description: 'French macarons with assorted flavors.', price: 500, image: image16 },
        { id: 17, category: 'special', name: 'Eclairs', description: 'French pastry filled with custard and topped with chocolate.', price: 300, image: image17 },
        { id: 18, category: 'special', name: 'Cheesecake', description: 'New York-style creamy cheesecake.', price: 900, image: image18 },
        { id: 19, category: 'special', name: 'Brownie', description: 'Chocolate brownie with walnuts.', price: 150, image: image19 },
        { id: 20, category: 'special', name: 'Tiramisu', description: 'Classic Italian coffee-flavored dessert.', price: 750, image: image20 },
    ];

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [activeCategory, setActiveCategory] = useState('all');

    useEffect(() => {
        setFilteredProducts(products);
    }, []);

    const handleCategoryFilter = (category) => {
        if (category === 'all') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(filtered);
        }
        setActiveCategory(category);
    };

    const categories = [
        { name: 'all', label: 'All', icon: <FaStar />, bgColor: 'bg-gray-100' },
        { name: 'cakes', label: 'Cakes', icon: <FaBirthdayCake />, bgColor: 'bg-yellow-100' },
        { name: 'donuts', label: 'Donuts', icon: <FaHamburger />, bgColor: 'bg-pink-100' },
        { name: 'cookies', label: 'Cookies', icon: <FaCookieBite />, bgColor: 'bg-teal-100' },
        { name: 'special', label: 'Special', icon: <FaStar />, bgColor: 'bg-purple-100' },
    ];

    // Apply 10% discount to all items
    const discountedProducts = filteredProducts.map(product => ({
        ...product,
        discountedPrice: product.price * 0.9, // 10% discount
    }));

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 py-12 sm:py-24 text-white text-center shadow-lg">
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-wide mt-10">Welcome to DD's Bakery</h1>
                <p className="text-base sm:text-lg mt-4">Delicious treats baked with love</p>
            </div>

            {/* Advertisement Section */}
            <div className="bg-yellow-100 p-4 sm:p-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl sm:text-3xl font-bold text-yellow-800 flex items-center justify-center">
                         <FaTag className="mx-2" /> FLAT 10% OFF ON ALL ITEMS! 
                    </h2>
                    <p className="text-sm sm:text-lg text-yellow-700 mt-2 sm:mt-4">Hurry up! Offer valid for a limited time only. 🕒</p>
                </div>
            </div>

            {/* Category Filters */}
            <div className="container mx-auto p-4 sm:p-8">
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 my-4 sm:my-6">
                    {categories.map(category => (
                        <button
                            key={category.name}
                            onClick={() => handleCategoryFilter(category.name)}
                            className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-md transition-all duration-300 ${activeCategory === category.name ? `${category.bgColor} text-black scale-105` : 'bg-gray-300 text-gray-700 hover:bg-gray-400 hover:scale-105'}`}
                        >
                            {category.icon}
                            <span className="font-semibold text-xs sm:text-sm">{category.label}</span>
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                    {discountedProducts.map(item => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
// import React, { useState, useEffect } from 'react';
// import { FaBirthdayCake, FaHamburger, FaCookieBite, FaStar } from 'react-icons/fa';
// import ProductCard from '../components/ProductCard';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import image1 from '../assets/images/Image1.jpg';
// import image2 from '../assets/images/Image2.jpg';
// import image3 from '../assets/images/Image3.jpg';
// import image4 from '../assets/images/Image4.jpg';
// import image5 from '../assets/images/Image5.jpg';
// import image6 from '../assets/images/Image6.jpg';
// import image7 from '../assets/images/Image7.jpg';
// import image8 from '../assets/images/Image8.jpg';
// import image9 from '../assets/images/Image9.jpg';
// import image10 from '../assets/images/Image10.jpg';
// import image11 from '../assets/images/Image11.jpg';
// import image12 from '../assets/images/Image12.jpg';
// import image13 from '../assets/images/Image13.jpg';
// import image14 from '../assets/images/Image14.jpg';
// import image15 from '../assets/images/Image15.jpg';
// import image16 from '../assets/images/Image16.jpg';
// import image17 from '../assets/images/Image17.jpg';
// import image18 from '../assets/images/Image18.jpg';
// import image19 from '../assets/images/Image19.jpg';
// import image20 from '../assets/images/Image20.jpg';

// const Home = () => {
//     const products = [
//             //   Cakes
//         { id: 1, category: 'cakes', name: 'Black Forest Cake', description: 'Classic black forest cake with cherries.', price: 750, image: image1 },
//         { id: 2, category: 'cakes', name: 'Red Velvet Cake', description: 'Rich red velvet cake with cream cheese frosting.', price: 850, image: image2 },
//         { id: 3, category: 'cakes', name: 'Chocolate Truffle Cake', description: 'Dark chocolate truffle layered cake.', price: 950, image: image3 },
//         { id: 4, category: 'cakes', name: 'Pineapple Cake', description: 'Light and fluffy pineapple-flavored cake.', price: 700, image: image4 },
//         { id: 5, category: 'cakes', name: 'Butterscotch Cake', description: 'Creamy butterscotch cake with caramel drizzle.', price: 800, image: image5 },

//         // Donuts
//         { id: 6, category: 'donuts', name: 'Glazed Donut', description: 'Classic glazed donut.', price: 80, image: image6 },
//         { id: 7, category: 'donuts', name: 'Chocolate Donut', description: 'Delicious chocolate-coated donut.', price: 100, image: image7 },
//         { id: 8, category: 'donuts', name: 'Strawberry Donut', description: 'Donut with strawberry glaze.', price: 90, image: image8 },
//         { id: 9, category: 'donuts', name: 'Blueberry Donut', description: 'Donut with blueberry glaze.', price: 95, image: image9 },
//         { id: 10, category: 'donuts', name: 'Caramel Donut', description: 'Donut topped with rich caramel glaze.', price: 105, image: image10 },

//         // Cookies
//         { id: 11, category: 'cookies', name: 'Chocolate Chip Cookie', description: 'Crunchy cookie with chocolate chips.', price: 50, image: image11 },
//         { id: 12, category: 'cookies', name: 'Oatmeal Raisin Cookie', description: 'Healthy oatmeal and raisin cookie.', price: 60, image: image12 },
//         { id: 13, category: 'cookies', name: 'Peanut Butter Cookie', description: 'Rich peanut butter-flavored cookie.', price: 70, image: image13 },
//         { id: 14, category: 'cookies', name: 'Almond Biscotti', description: 'Italian almond-flavored biscotti.', price: 90, image: image14 },
//         { id: 15, category: 'cookies', name: 'Sugar Cookie', description: 'Soft sugar cookies with sprinkles.', price: 65, image: image15 },

//         // Special Items
//         { id: 16, category: 'special', name: 'Macarons', description: 'French macarons with assorted flavors.', price: 500, image: image16 },
//         { id: 17, category: 'special', name: 'Eclairs', description: 'French pastry filled with custard and topped with chocolate.', price: 300, image: image17 },
//         { id: 18, category: 'special', name: 'Cheesecake', description: 'New York-style creamy cheesecake.', price: 900, image: image18 },
//         { id: 19, category: 'special', name: 'Brownie', description: 'Chocolate brownie with walnuts.', price: 150, image: image19 },
//         { id: 20, category: 'special', name: 'Tiramisu', description: 'Classic Italian coffee-flavored dessert.', price: 750, image: image20 },
//     ];

//     const [filteredProducts, setFilteredProducts] = useState(products);
//     const [activeCategory, setActiveCategory] = useState('all');

//     useEffect(() => {
//         setFilteredProducts(products);
//     }, []);

//     const handleCategoryFilter = (category) => {
//         if (category === 'all') {
//             setFilteredProducts(products);
//         } else {
//             const filtered = products.filter(product => product.category === category);
//             setFilteredProducts(filtered);
//         }
//         setActiveCategory(category);
//     };

//     const categories = [
//         { name: 'all', label: 'All', icon: <FaStar />, bgColor: 'bg-gray-100' },
//         { name: 'cakes', label: 'Cakes', icon: <FaBirthdayCake />, bgColor: 'bg-yellow-100' },
//         { name: 'donuts', label: 'Donuts', icon: <FaHamburger />, bgColor: 'bg-pink-100' },
//         { name: 'cookies', label: 'Cookies', icon: <FaCookieBite />, bgColor: 'bg-teal-100' },
//         { name: 'special', label: 'Special', icon: <FaStar />, bgColor: 'bg-purple-100' },
//     ];

//     return (
//         <div className="min-h-screen flex flex-col bg-gray-50">
//             <Navbar />
//             <div className="bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 py-24 text-white text-center shadow-lg">
//                 <h1 className="text-6xl font-extrabold tracking-wide">Welcome to DD's Bakery</h1>
//                 <p className="text-xl mt-4">Delicious treats baked with love</p>
//             </div>

//             <div className="container mx-auto p-8">
//                 <div className="flex flex-wrap justify-center gap-6 my-8">
//                     {categories.map(category => (
//                         <button
//                             key={category.name}
//                             onClick={() => handleCategoryFilter(category.name)}
//                             className={`flex items-center space-x-3 px-6 py-3 rounded-lg shadow-md transition-all duration-300 ${activeCategory === category.name ? `${category.bgColor} text-black scale-105` : 'bg-gray-300 text-gray-700 hover:bg-gray-400 hover:scale-105'}`}
//                         >
//                             {category.icon}
//                             <span className="font-semibold text-lg">{category.label}</span>
//                         </button>
//                     ))}
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//                     {filteredProducts.map(item => (
//                         <ProductCard key={item.id} item={item} />
//                     ))}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default Home;
