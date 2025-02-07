import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import image16 from '../assets/images/Image16.jpg';
import image17 from '../assets/images/Image17.jpg';
import image18 from '../assets/images/Image18.jpg';
import image19 from '../assets/images/Image19.jpg';
import image20 from '../assets/images/Image20.jpg';

const SpecialItems = () => {
    const specialItems = [
        { id: 1, category: 'special-items', name: 'Macarons', description: 'French macarons with assorted flavors.', price: 500, image: image16 },
        { id: 2, category: 'special-items', name: 'Eclairs', description: 'Chocolate eclairs with cream filling.', price: 300, image: image17 },
        { id: 3, category: 'special-items', name: 'Cheesecake', description: 'New York-style cheesecake.', price: 900, image: image18 },
        { id: 4, category: 'special-items', name: 'Brownie', description: 'Chocolate brownie with walnuts.', price: 150, image: image19 },
        { id: 5, category: 'special-items', name: 'Tiramisu', description: 'Classic Italian tiramisu.', price: 750, image: image20 },
    ];

    const [filteredSpecialItems, setFilteredSpecialItems] = useState(specialItems);

    useEffect(() => {
        const category = window.location.pathname.split('/')[1];
        if (category === 'special-items') {
            setFilteredSpecialItems(specialItems); // Ensure special items are set when on the correct route
        }
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Special Items</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {filteredSpecialItems.map(item => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SpecialItems;


