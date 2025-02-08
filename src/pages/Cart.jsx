import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus, FaTrash, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    const updateCart = (updatedCart) => {
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        const totalItems = updatedCart.reduce((total, item) => total + item.quantity, 0);
        localStorage.setItem("cartCount", totalItems);
    };

    const increaseQuantity = (id) => {
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        updateCart(updatedCart);
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0);
        updateCart(updatedCart);
    };

    const removeItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        updateCart(updatedCart);
    };

    const addTopping = (id, topping) => {
        const toppingsList = {
            "Chocolate Chips": 10,
            "Sprinkles": 5,
            "Caramel Drizzle": 15,
            "Whipped Cream": 20,
            "Nuts": 12
        };
        const price = toppingsList[topping];
        const updatedCart = cartItems.map(item =>
            item.id === id ? { 
                ...item, 
                toppings: [...(item.toppings || []), { name: topping, price }], 
                totalPrice: (item.totalPrice || item.price) + price 
            } : item
        );
        updateCart(updatedCart);
    };

    const subtotal = cartItems.reduce((total, item) => total + (item.totalPrice || item.price) * item.quantity, 0);

    const handleOrderConfirm = () => {
        localStorage.setItem("totalPrice", subtotal.toFixed(2));
        navigate("/payment");
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-orange-500 flex flex-col items-center p-6">
            <h1 className="text-4xl font-bold text-white mb-6 flex items-center">
                <FaShoppingCart className="mr-2" /> Your Cart
            </h1>

            {cartItems.length === 0 ? (
                <p className="text-white text-lg font-semibold">🛒 Your cart is empty.</p>
            ) : (
                <div className="max-w-3xl w-full bg-white/80 backdrop-blur-lg p-6 rounded-lg shadow-xl">
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                                            <p className="text-gray-600">Base Price: ₹{item.price}</p>
                                            <p className="text-lg font-bold text-yellow-600">Total: ₹{(item.totalPrice || item.price) * item.quantity}</p>
                                            <div className="mt-2">
                                                <span className="text-sm font-semibold text-gray-700">Toppings:</span>
                                                {item.toppings && item.toppings.length > 0 ? (
                                                    <div className="flex flex-wrap gap-1 mt-1">
                                                        {item.toppings.map((t, index) => (
                                                            <span key={index} className="bg-yellow-200 px-2 py-1 text-sm font-semibold rounded-full">{t.name} (+₹{t.price})</span>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <p className="text-sm text-gray-500">No toppings added</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button onClick={() => decreaseQuantity(item.id)} className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
                                            <FaMinus />
                                        </button>
                                        <span className="text-lg font-semibold">{item.quantity}</span>
                                        <button onClick={() => increaseQuantity(item.id)} className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600">
                                            <FaPlus />
                                        </button>
                                    </div>
                                    <button onClick={() => removeItem(item.id)} className="text-red-600 hover:text-red-800">
                                        <FaTrash />
                                    </button>
                                </div>
                                <div className="mt-2">
                                    <span className="text-sm font-semibold">Add Toppings:</span>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {["Chocolate Chips", "Sprinkles", "Caramel Drizzle", "Whipped Cream", "Nuts"].map((topping) => (
                                            <button
                                                key={topping}
                                                onClick={() => addTopping(item.id, topping)}
                                                className="bg-yellow-400 text-white px-3 py-1 text-sm font-semibold rounded-full hover:bg-yellow-500 transition"
                                            >
                                                {topping}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="sticky bottom-0 bg-white p-4 mt-6 rounded-lg shadow-md">
                        <div className="flex justify-between items-center text-lg font-semibold">
                            <span>Subtotal:</span>
                            <span className="text-yellow-600">₹{subtotal.toFixed(2)}</span>
                        </div>
                        <button onClick={handleOrderConfirm} className="mt-4 bg-orange-500 text-white p-3 rounded-lg w-full text-lg font-semibold hover:bg-orange-600">
                            Confirm Order & Pay
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;

