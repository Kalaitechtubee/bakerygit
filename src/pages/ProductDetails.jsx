import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
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

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [reviews, setReviews] = useState([
        { name: "John", rating: 5, text: "Absolutely delicious!" },
        { name: "Emma", rating: 4, text: "Best cake I’ve ever had!" },
        { name: "Liam", rating: 5, text: "Fantastic taste and texture!" },
        { name: "Olivia", rating: 4, text: "Very good, but a bit too sweet for me." },
        { name: "Noah", rating: 5, text: "Perfect cake for any occasion!" },
        { name: "Ava", rating: 4, text: "Really enjoyed it!" },
        { name: "Sophia", rating: 5, text: "Highly recommended!" },
        { name: "Mason", rating: 5, text: "Would definitely buy again." },
        { name: "Isabella", rating: 4, text: "Nice flavor and freshness." },
        { name: "Ethan", rating: 5, text: "Superb quality!" },
        { name: "Charlotte", rating: 4, text: "Loved it!" }
    ]);
    const [newReview, setNewReview] = useState('');
    const [newReviewer, setNewReviewer] = useState('');
    const [newRating, setNewRating] = useState(5);
    const [showAllReviews, setShowAllReviews] = useState(false);

    const products = [
        { id: 1, category: 'cakes', name: 'Black Forest Cake', description: 'Classic black forest cake with cherries.', price: 750, image: image1 },
        { id: 2, category: 'cakes', name: 'Red Velvet Cake', description: 'Rich red velvet cake with cream cheese frosting.', price: 850, image: image2 },
        { id: 3, category: 'cakes', name: 'Chocolate Truffle Cake', description: 'Dark chocolate truffle layered cake.', price: 950, image: image3 },
        { id: 4, category: 'cakes', name: 'Pineapple Cake', description: 'Light and fluffy pineapple-flavored cake.', price: 700, image: image4 },
        { id: 5, category: 'cakes', name: 'Butterscotch Cake', description: 'Creamy butterscotch cake with caramel drizzle.', price: 800, image: image5 },
        { id: 6, category: 'donuts', name: 'Glazed Donut', description: 'Classic glazed donut.', price: 80, image: image6 },
        { id: 7, category: 'donuts', name: 'Chocolate Donut', description: 'Delicious chocolate-coated donut.', price: 100, image: image7 },
        { id: 8, category: 'donuts', name: 'Strawberry Donut', description: 'Donut with strawberry glaze.', price: 90, image: image8 },
        { id: 9, category: 'donuts', name: 'Blueberry Donut', description: 'Donut with blueberry glaze.', price: 95, image: image9 },
        { id: 10, category: 'donuts', name: 'Caramel Donut', description: 'Donut topped with rich caramel glaze.', price: 105, image: image10 },
        { id: 11, category: 'cookies', name: 'Chocolate Chip Cookie', description: 'Crunchy cookie with chocolate chips.', price: 50, image: image11 },
        { id: 12, category: 'cookies', name: 'Oatmeal Raisin Cookie', description: 'Healthy oatmeal and raisin cookie.', price: 60, image: image12 },
        { id: 13, category: 'cookies', name: 'Peanut Butter Cookie', description: 'Rich peanut butter-flavored cookie.', price: 70, image: image13 },
        { id: 14, category: 'cookies', name: 'Almond Biscotti', description: 'Italian almond-flavored biscotti.', price: 90, image: image14 },
        { id: 15, category: 'cookies', name: 'Sugar Cookie', description: 'Soft sugar cookies with sprinkles.', price: 65, image: image15 },
        { id: 16, category: 'special', name: 'Macarons', description: 'French macarons with assorted flavors.', price: 500, image: image16 },
        { id: 17, category: 'special', name: 'Eclairs', description: 'French pastry filled with custard and topped with chocolate.', price: 300, image: image17 },
        { id: 18, category: 'special', name: 'Cheesecake', description: 'New York-style creamy cheesecake.', price: 900, image: image18 },
        { id: 19, category: 'special', name: 'Brownie', description: 'Chocolate brownie with walnuts.', price: 150, image: image19 },
        { id: 20, category: 'special', name: 'Tiramisu', description: 'Classic Italian coffee-flavored dessert.', price: 750, image: image20 },
    ];

    const product = products.find((p) => p.id.toString() === id);
    if (!product) return <p className="text-center text-red-600">Product not found</p>;

    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ ...product, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
        navigate("/cart");
    };

    const addReview = () => {
        if (newReview.trim() && newReviewer.trim()) {
            setReviews([...reviews, { name: newReviewer, rating: newRating, text: newReview }]);
            setNewReview('');
            setNewReviewer('');
            setNewRating(5);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-orange-500 p-6 flex flex-col items-center">
            <div className="w-full max-w-4xl bg-white/80 backdrop-blur-lg p-6 rounded-lg shadow-xl flex flex-col">
                <h1 className="text-3xl font-bold text-yellow-600 text-center">{product.name}</h1>
                <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-lg mt-4 shadow-md" />
                <p className="text-xl font-bold text-gray-800 text-center mt-4">Price: ₹{product.price}</p>
                <button onClick={addToCart} className="bg-yellow-500 text-white p-3 rounded-lg w-full hover:bg-yellow-600 transition mt-4 flex items-center justify-center">
                    <FaShoppingCart className="text-lg mr-2" /> Add to Cart
                </button>
                <h3 className="text-2xl font-bold text-yellow-600 mt-6">User Reviews</h3>
                <input type="text" className="border p-2 w-full mb-2 rounded-lg mt-2" placeholder="Your Name" value={newReviewer} onChange={(e) => setNewReviewer(e.target.value)} />
                <input type="number" className="border p-2 w-full mb-2 rounded-lg" min="1" max="5" value={newRating} onChange={(e) => setNewRating(parseInt(e.target.value))} />
                <input type="text" className="border p-2 w-full mb-2 rounded-lg" placeholder="Write a review..." value={newReview} onChange={(e) => setNewReview(e.target.value)} />
                <button onClick={addReview} className="bg-green-500 text-white p-2 rounded-lg w-full hover:bg-green-600 transition">Submit Review</button>
                <ul className="mt-4">
                    {(showAllReviews ? reviews : reviews.slice(0, 3)).map((review, index) => (
                        <li key={index} className="bg-white p-4 rounded-lg shadow-md mb-2">
                            <span className="font-bold text-gray-800">{review.name} - {"⭐".repeat(review.rating)}</span>
                            <p className="text-gray-700 mt-1">{review.text}</p>
                        </li>
                    ))}
                </ul>
                {!showAllReviews && reviews.length > 3 && (
                    <button onClick={() => setShowAllReviews(true)} className="text-blue-600 hover:underline mt-2">See More</button>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;