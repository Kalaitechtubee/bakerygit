import React from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import image6 from '../assets/images/Image6.jpg';
import image7 from '../assets/images/Image7.jpg';
import image8 from '../assets/images/Image8.jpg';
import image9 from '../assets/images/Image9.jpg';
import image10 from '../assets/images/Image10.jpg';

// Your hardcoded products
const products = [
    // Donuts
    { id: 6, category: 'donuts', name: 'Glazed Donut', description: 'Classic glazed donut.', price: 80, stack: 20, image: image6 },
    { id: 7, category: 'donuts', name: 'Chocolate Donut', description: 'Delicious chocolate-coated donut.', price: 100, stack: 15, image: image7 },
    { id: 8, category: 'donuts', name: 'Strawberry Donut', description: 'Donut with strawberry glaze.', price: 90, stack: 12, image: image8 },
    { id: 9, category: 'donuts', name: 'Blueberry Donut', description: 'Donut with blueberry glaze.', price: 95, stack: 10, image: image9 },
    { id: 10, category: 'donuts', name: 'Caramel Donut', description: 'Donut topped with rich caramel glaze.', price: 105, stack: 9, image: image10 },
];

const Donuts = () => {
    // Filter the products to only show donuts
    const donutItems = products.filter(item => item.category === 'donuts');

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Donuts</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {donutItems.map(item => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Donuts;
