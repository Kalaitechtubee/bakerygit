import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = ({ selectedProduct, quantity }) => {
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate("/payment", {
            state: { product: selectedProduct, quantity },
        });
    };

    return (
        <div>
            <h2>Order Summary</h2>
            <p>Product: {selectedProduct.name}</p>
            <p>Quantity: {quantity}</p>
            <p>Total: ₹{selectedProduct.price * quantity}</p>
            <button onClick={handleCheckout}>Proceed to Payment</button>
        </div>
    );
};

export default OrderSummary;
