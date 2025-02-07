import React from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import image1 from '../assets/images/Image1.jpg';
import image2 from '../assets/images/Image2.jpg';
import image3 from '../assets/images/Image3.jpg';
import image4 from '../assets/images/Image4.jpg';
import image5 from '../assets/images/Image5.jpg';

// Your hardcoded products
const products = [
    // Cakes
    { id: 1, category: 'cakes', name: 'Black Forest Cake', description: 'Classic black forest cake with cherries.', price: 750, stack: 10, image: image1 },
    { id: 2, category: 'cakes', name: 'Red Velvet Cake', description: 'Rich red velvet cake with cream cheese frosting.', price: 850, stack: 8, image: image2 },
    { id: 3, category: 'cakes', name: 'Chocolate Truffle Cake', description: 'Dark chocolate truffle layered cake.', price: 950, stack: 5, image: image3 },
    { id: 4, category: 'cakes', name: 'Pineapple Cake', description: 'Light and fluffy pineapple-flavored cake.', price: 700, stack: 6, image: image4 },
    { id: 5, category: 'cakes', name: 'Butterscotch Cake', description: 'Creamy butterscotch cake with caramel drizzle.', price: 800, stack: 7, image: image5 },
];

const Cakes = () => {
    // Filter the products to only show cakes
    const cakeItems = products.filter(item => item.category === 'cakes');

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Cakes</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {cakeItems.map(item => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cakes;
