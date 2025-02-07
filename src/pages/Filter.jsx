import React, { useState } from 'react';
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

const products = [
    // Cakes
    { id: 1, category: 'cakes', name: 'Black Forest Cake', description: 'Classic black forest cake with cherries.', price: 750, stack: 10, image: image1 },
    { id: 2, category: 'cakes', name: 'Red Velvet Cake', description: 'Rich red velvet cake with cream cheese frosting.', price: 850, stack: 8, image: image2 },
    { id: 3, category: 'cakes', name: 'Chocolate Truffle Cake', description: 'Dark chocolate truffle layered cake.', price: 950, stack: 5, image: image3 },
    { id: 4, category: 'cakes', name: 'Pineapple Cake', description: 'Light and fluffy pineapple-flavored cake.', price: 700, stack: 6, image: image4 },
    { id: 5, category: 'cakes', name: 'Butterscotch Cake', description: 'Creamy butterscotch cake with caramel drizzle.', price: 800, stack: 7, image: image5 },
    // Donuts
    { id: 6, category: 'donuts', name: 'Glazed Donut', description: 'Classic glazed donut.', price: 80, stack: 20, image: image6 },
    { id: 7, category: 'donuts', name: 'Chocolate Donut', description: 'Delicious chocolate-coated donut.', price: 100, stack: 15, image: image7 },
    { id: 8, category: 'donuts', name: 'Strawberry Donut', description: 'Donut with strawberry glaze.', price: 90, stack: 12, image: image8 },
    { id: 9, category: 'donuts', name: 'Blueberry Donut', description: 'Donut with blueberry glaze.', price: 95, stack: 10, image: image9 },
    { id: 10, category: 'donuts', name: 'Caramel Donut', description: 'Donut topped with rich caramel glaze.', price: 105, stack: 9, image: image10 },
    // Cookies
    { id: 11, category: 'cookies', name: 'Chocolate Chip Cookie', description: 'Crunchy cookie with chocolate chips.', price: 50, stack: 30, image: image11 },
    { id: 12, category: 'cookies', name: 'Oatmeal Raisin Cookie', description: 'Healthy oatmeal and raisin cookie.', price: 60, stack: 25, image: image12 },
    { id: 13, category: 'cookies', name: 'Peanut Butter Cookie', description: 'Rich peanut butter-flavored cookie.', price: 70, stack: 20, image: image13 },
    { id: 14, category: 'cookies', name: 'Almond Biscotti', description: 'Italian almond-flavored biscotti.', price: 90, stack: 15, image: image14 },
    { id: 15, category: 'cookies', name: 'Sugar Cookie', description: 'Soft sugar cookies with sprinkles.', price: 65, stack: 18, image: image15 },
    // Special Items
    { id: 16, category: 'special', name: 'Macarons', description: 'French macarons with assorted flavors.', price: 500, stack: 10, image: image16 },
    { id: 17, category: 'special', name: 'Eclairs', description: 'French pastry filled with custard and topped with chocolate.', price: 300, stack: 8, image: image17 },
    { id: 18, category: 'special', name: 'Cheesecake', description: 'New York-style creamy cheesecake.', price: 900, stack: 6, image: image18 },
    { id: 19, category: 'special', name: 'Brownie', description: 'Chocolate brownie with walnuts.', price: 150, stack: 10, image: image19 },
    { id: 20, category: 'special', name: 'Tiramisu', description: 'Classic Italian coffee-flavored dessert.', price: 750, stack: 5, image: image20 },
];

const Filter = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Filter products based on selected category
    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Filter Products</h1>
                
                {/* Category Filter Dropdown */}
                <div className="mb-4">
                    <label htmlFor="category" className="mr-2">Select Category:</label>
                    <select
                        id="category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="p-2 border border-gray-300 rounded"
                    >
                        <option value="all">All</option>
                        <option value="cakes">Cakes</option>
                        <option value="donuts">Donuts</option>
                        <option value="cookies">Cookies</option>
                        <option value="special">Special Items</option>
                    </select>
                </div>

                {/* Display Filtered Products */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {filteredProducts.map(item => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Filter;
