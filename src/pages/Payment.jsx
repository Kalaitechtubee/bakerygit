
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaMoneyCheckAlt, FaCheckCircle, FaTag, FaCartPlus } from "react-icons/fa";
import QRCode from "../assets/images/qr-code.png"; // Import the static QR code image

const Payment = () => {
    const navigate = useNavigate();

    // Retrieve cart items from localStorage
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    // User's payment details
    const [userDetails, setUserDetails] = useState({
        name: "",
        mobile: "",
        address: "",
    });

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    // Calculate total amount dynamically based on cart items and apply 10% discount
    useEffect(() => {
        const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // Calculate subtotal based on cart items
        const discount = subtotal * 0.10; // Apply 10% discount
        const discountedAmount = subtotal - discount; // Final amount after discount
        setTotalAmount(discountedAmount);
    }, [cartItems]);

    const handlePaymentSuccess = () => {
        if (totalAmount <= 0) {
            alert("Please add items to your cart.");
            return;
        }

        if (!userDetails.name || !userDetails.mobile || !userDetails.address) {
            alert("Please fill in your details before proceeding.");
            return;
        }

        // Retrieve current user from localStorage
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (!currentUser) {
            alert("No user logged in. Please log in first.");
            navigate("/user-login");
            return;
        }

        // Create order object
        const order = {
            id: Date.now(), // Unique ID for the order based on timestamp
            customerName: currentUser.username,
            userDetails,
            cartItems,
            totalAmount,
            status: "Paid", // Payment status
        };

        // Save order to localStorage
        const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        savedOrders.push(order);
        localStorage.setItem("orders", JSON.stringify(savedOrders));

        alert("✅ Payment Successful! Your order is confirmed.");
        navigate("/"); // Redirect to home page after payment
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    return (
        <div className="p-6 bg-gray-200 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
                
                {/* Left Side: Cart Details */}
                <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-6 text-yellow-600 flex items-center justify-center">
                        <FaMoneyCheckAlt className="mr-2" /> Secure Payment
                    </h1>

                    {/* Cart Item List */}
                    <div className="mb-6">
                        {cartItems.length === 0 ? (
                            <p className="text-center text-gray-500 text-lg">🛒 Your cart is empty.</p>
                        ) : (
                            cartItems.map((item) => (
                                <div key={item.id} className="p-4 mb-4 bg-gray-100 rounded-lg shadow-md">
                                    <div className="flex justify-between">
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                                            <p className="text-lg text-gray-600">₹{item.price} x {item.quantity}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Total Amount */}
                    <div className="p-4 mb-4 bg-gray-100 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">Total Amount</h2>
                        <p className="text-lg text-gray-600">₹{totalAmount.toFixed(2)}</p>
                    </div>

                    {/* Discount Applied */}
                    <div className="p-4 mb-4 bg-gray-100 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                            <FaTag className="mr-2 text-red-500" /> Discount Applied
                        </h2>
                        <p className="text-lg text-red-500">-₹{(totalAmount * 0.10).toFixed(2)} (10% Discount)</p>
                    </div>

                    {/* User Details Form */}
                    <div className="p-4 mb-4 bg-gray-100 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">Your Details</h2>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="name"
                                value={userDetails.name}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg mb-4"
                                placeholder="Your Name"
                            />
                            <input
                                type="text"
                                name="mobile"
                                value={userDetails.mobile}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg mb-4"
                                placeholder="Your Mobile Number"
                            />
                            <input
                                type="text"
                                name="address"
                                value={userDetails.address}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg mb-4"
                                placeholder="Your Address"
                            />
                        </div>
                    </div>

                    {/* Confirm Payment Button */}
                    <button
                        onClick={handlePaymentSuccess}
                        className="bg-green-500 text-white p-4 rounded-lg w-full text-lg font-semibold shadow-lg flex items-center justify-center space-x-2 hover:bg-green-600 transition"
                    >
                        <FaCheckCircle />
                        <span>Confirm Payment</span>
                    </button>
                </div>

                {/* Right Side: QR Code */}
                <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                    {/* QR Code */}
                    <div className="w-full max-w-xs flex flex-col items-center justify-center">
                        <p className="text-gray-600 mb-4">Scan the QR code below to complete your payment:</p>
                        <img
                            src={QRCode}
                            alt="Payment QR Code"
                            className="w-64 h-64 object-contain mx-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
