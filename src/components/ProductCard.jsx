import React from "react";
import { Link } from "react-router-dom";
import { FaEye, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ item }) => {
    
    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || []; 
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            existingItem.quantity += 1; 
        } else {
            cart.push({ ...item, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart)); 
        alert(`${item.name} added to cart!`);
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>
            <p className="text-gray-600 text-sm mb-2">{item.description}</p>
            <p className="text-lg font-bold text-yellow-600">₹{item.price}</p>

            <div className="mt-4 flex justify-between items-center">
                
                <button 
                    onClick={addToCart} 
                    className="bg-yellow-500 text-white p-2 rounded-lg flex items-center space-x-2 hover:bg-yellow-600 transition duration-200"
                >
                    <FaShoppingCart />
                    <span>Add to Cart</span>
                </button>

              
                <Link to={`/product/${item.id}`} className="text-blue-500 flex items-center space-x-2 hover:text-blue-600 transition duration-200">
                    <FaEye />
                    <span>Preview</span>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;





