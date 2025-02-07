import React from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import image11 from '../assets/images/Image11.jpg';
import image12 from '../assets/images/Image12.jpg';
import image13 from '../assets/images/Image13.jpg';
import image14 from '../assets/images/Image14.jpg';
import image15 from '../assets/images/Image15.jpg';

// Your hardcoded products
const products = [
    // Cakes
    { id: 1, category: 'cakes', name: 'Black Forest Cake', description: 'Classic black forest cake with cherries.', price: 750, stack: 10, image: image11 },
    { id: 2, category: 'cakes', name: 'Red Velvet Cake', description: 'Rich red velvet cake with cream cheese frosting.', price: 850, stack: 8, image: image12 },
    { id: 3, category: 'cakes', name: 'Chocolate Truffle Cake', description: 'Dark chocolate truffle layered cake.', price: 950, stack: 5, image: image13 },
    { id: 4, category: 'cakes', name: 'Pineapple Cake', description: 'Light and fluffy pineapple-flavored cake.', price: 700, stack: 6, image: image14 },
    { id: 5, category: 'cakes', name: 'Butterscotch Cake', description: 'Creamy butterscotch cake with caramel drizzle.', price: 800, stack: 7, image: image15 },
    
    // Cookies
    { id: 11, category: 'cookies', name: 'Chocolate Chip Cookie', description: 'Crunchy cookie with chocolate chips.', price: 50, stack: 30, image: image11 },
    { id: 12, category: 'cookies', name: 'Oatmeal Raisin Cookie', description: 'Healthy oatmeal and raisin cookie.', price: 60, stack: 25, image: image12 },
    { id: 13, category: 'cookies', name: 'Peanut Butter Cookie', description: 'Rich peanut butter-flavored cookie.', price: 70, stack: 20, image: image13 },
    { id: 14, category: 'cookies', name: 'Almond Biscotti', description: 'Italian almond-flavored biscotti.', price: 90, stack: 15, image: image14 },
    { id: 15, category: 'cookies', name: 'Sugar Cookie', description: 'Soft sugar cookies with sprinkles.', price: 65, stack: 18, image: image15 }
];

const Cookies = () => {
    // Filter the products to only show cookies
    const cookieItems = products.filter(item => item.category === 'cookies');

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Cookies</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {cookieItems.map(item => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cookies;
