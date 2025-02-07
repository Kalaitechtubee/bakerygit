
import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus, FaTrash, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    // Load cart items from localStorage
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    // Update cart items in localStorage and state
    const updateCart = (updatedCart) => {
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        // Update the cart count in Navbar
        const totalItems = updatedCart.reduce((total, item) => total + item.quantity, 0);
        localStorage.setItem("cartCount", totalItems);
    };

    // Increase item quantity
    const increaseQuantity = (id) => {
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        updateCart(updatedCart);
    };

    // Decrease item quantity
    const decreaseQuantity = (id) => {
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0); // Remove items with 0 quantity
        updateCart(updatedCart);
    };

    // Remove item from the cart
    const removeItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        updateCart(updatedCart);
    };

    // Calculate the subtotal
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    // Handle order confirmation and navigate to payment page
    const handleOrderConfirm = () => {
        localStorage.setItem("totalPrice", subtotal.toFixed(2)); // Save final price
        navigate("/payment"); // Redirect to Payment Page
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-6 text-center flex items-center justify-center text-yellow-600">
                <FaShoppingCart className="mr-2" /> Your Cart
            </h1>

            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">🛒 Your cart is empty.</p>
            ) : (
                <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl">
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center justify-between p-4 border-b">
                                <div className="flex items-center space-x-4">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg shadow-sm" />
                                    <div>
                                        <h2 className="text-xl font-semibold">{item.name}</h2>
                                        <p className="text-gray-600">₹{item.price} x {item.quantity}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button onClick={() => decreaseQuantity(item.id)} className="bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600 transition">
                                        <FaMinus />
                                    </button>
                                    <span className="text-lg font-semibold">{item.quantity}</span>
                                    <button onClick={() => increaseQuantity(item.id)} className="bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600 transition">
                                        <FaPlus />
                                    </button>
                                </div>
                                <button onClick={() => removeItem(item.id)} className="text-red-600 hover:text-red-800 text-lg">
                                    <FaTrash />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 p-4 border-t">
                        <div className="flex justify-between items-center text-lg font-semibold">
                            <span>Subtotal:</span>
                            <span>₹{subtotal.toFixed(2)}</span>
                        </div>
                        <button onClick={handleOrderConfirm} className="mt-6 bg-yellow-500 text-white p-3 rounded-lg w-full text-lg font-semibold shadow-lg hover:bg-yellow-600 transition">
                            Confirm Order & Pay
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
