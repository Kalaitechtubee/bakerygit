import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaMoneyCheckAlt, FaCheckCircle, FaArrowLeft, FaMobileAlt, FaCreditCard, FaUniversity, FaMoneyBillWave } from "react-icons/fa";
import QRCode from "../assets/images/qr-code.png";

const Payment = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState("");
    const [debitCardDetails, setDebitCardDetails] = useState({ cardNumber: "", expiryDate: "", cvv: "" });
    const [netBankingAccount, setNetBankingAccount] = useState("");
    const [userDetails, setUserDetails] = useState({ name: "", address: "", phone: "" });
    const bankOptions = ["HDFC Bank", "ICICI Bank", "State Bank of India", "Axis Bank", "Kotak Mahindra Bank"];

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    useEffect(() => {
        const subtotal = cartItems.reduce((total, item) => total + (item.totalPrice || item.price) * item.quantity, 0);
        setTotalAmount(subtotal * 0.9);
    }, [cartItems]);

    const handleConfirmPayment = () => {
        alert("Order Confirmed! Thank you for your purchase.");
        navigate("/");
    };

    const handleDebitCardChange = (e) => {
        const { name, value } = e.target;
        setDebitCardDetails({ ...debitCardDetails, [name]: value });
    };

    const handleNetBankingChange = (e) => {
        setNetBankingAccount(e.target.value);
    };

    const handleUserDetailsChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-orange-500 flex flex-col items-center p-6">
            <div className="bg-white/80 backdrop-blur-lg p-6 rounded-lg shadow-xl max-w-3xl w-full">
                <button onClick={() => navigate(-1)} className="flex items-center text-blue-500 font-semibold mb-4">
                    <FaArrowLeft className="mr-2" /> Back
                </button>
                <h1 className="text-3xl font-bold text-yellow-600 flex items-center justify-center mb-6">
                    <FaMoneyCheckAlt className="mr-2" /> Secure Payment
                </h1>
                <div className="p-4 bg-white shadow-md rounded-lg text-lg font-semibold text-gray-700">
                    Total Amount: ₹{totalAmount.toFixed(2)}
                </div>
                <h2 className="text-xl font-semibold mt-4">Select Payment Method:</h2>
                <div className="grid grid-cols-2 gap-4 my-4">
                    {["upi", "card", "netbanking", "cod"].map((method) => (
                        <button key={method} onClick={() => setPaymentMethod(method)}
                            className={`p-4 rounded-lg shadow-md flex items-center justify-center space-x-2 text-lg font-semibold w-full transition ${paymentMethod === method ? "bg-yellow-500 text-white" : "bg-white text-gray-800"}`}>
                            {method === "upi" && <FaMobileAlt />}
                            {method === "card" && <FaCreditCard />}
                            {method === "netbanking" && <FaUniversity />}
                            {method === "cod" && <FaMoneyBillWave />}
                            <span className="capitalize">{method.replace("cod", "Cash on Delivery")}</span>
                        </button>
                    ))}
                </div>
                {paymentMethod === "upi" && (
                    <div className="flex flex-col items-center">
                        <p className="text-gray-600 mb-4">Scan the QR code to complete your UPI payment:</p>
                        <img src={QRCode} alt="QR Code" className="w-40 h-40 object-contain" />
                    </div>
                )}
                {paymentMethod === "card" && (
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Enter Debit Card Details</h3>
                        <input
                            type="text"
                            name="cardNumber"
                            placeholder="Card Number"
                            value={debitCardDetails.cardNumber}
                            onChange={handleDebitCardChange}
                            className="w-full p-2 rounded border mb-2"
                        />
                        <input
                            type="text"
                            name="expiryDate"
                            placeholder="Expiry Date (MM/YY)"
                            value={debitCardDetails.expiryDate}
                            onChange={handleDebitCardChange}
                            className="w-full p-2 rounded border mb-2"
                        />
                        <input
                            type="text"
                            name="cvv"
                            placeholder="CVV"
                            value={debitCardDetails.cvv}
                            onChange={handleDebitCardChange}
                            className="w-full p-2 rounded border mb-2"
                        />
                    </div>
                )}
                {paymentMethod === "netbanking" && (
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Select Bank and Enter Account Number</h3>
                        <select className="w-full p-2 rounded border mb-2" onChange={(e) => setPaymentMethod(e.target.value)}>
                            <option value="">Select Bank</option>
                            {bankOptions.map((bank) => (
                                <option key={bank} value={bank}>{bank}</option>
                            ))}
                        </select>
                        <input
                            type="text"
                            placeholder="Account Number"
                            value={netBankingAccount}
                            onChange={handleNetBankingChange}
                            className="w-full p-2 rounded border"
                        />
                    </div>
                )}
                {paymentMethod === "cod" && (
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Enter Your Details</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={userDetails.name}
                            onChange={handleUserDetailsChange}
                            className="w-full p-2 rounded border mb-2"
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Delivery Address"
                            value={userDetails.address}
                            onChange={handleUserDetailsChange}
                            className="w-full p-2 rounded border mb-2"
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={userDetails.phone}
                            onChange={handleUserDetailsChange}
                            className="w-full p-2 rounded border mb-2"
                        />
                    </div>
                )}
                <button onClick={handleConfirmPayment}
                    className="mt-6 bg-green-500 text-white p-3 rounded-lg w-full text-lg font-semibold shadow-lg flex items-center justify-center hover:bg-green-600 transition">
                    <FaCheckCircle className="mr-2" /> Confirm Payment
                </button>
            </div>
        </div>
    );
};

export default Payment;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaMoneyCheckAlt, FaCheckCircle, FaTag, FaCreditCard, FaMobileAlt, FaUniversity, FaMoneyBillWave, FaArrowLeft } from "react-icons/fa";
// import QRCode from "../assets/images/qr-code.png";

// const Payment = () => {
//     const navigate = useNavigate();
//     const [cartItems, setCartItems] = useState([]);
//     const [totalAmount, setTotalAmount] = useState(0);
//     const [paymentMethod, setPaymentMethod] = useState("");
//     const [bankName, setBankName] = useState("");
//     const [accountNumber, setAccountNumber] = useState("");
//     const [cardDetails, setCardDetails] = useState({ number: "", expiry: "", cvv: "", holder: "" });
    
//     const bankOptions = ["HDFC Bank", "ICICI Bank", "State Bank of India", "Axis Bank", "Kotak Mahindra Bank", "Punjab National Bank", "Bank of Baroda", "Union Bank of India", "Canara Bank", "IndusInd Bank"];
    
//     const [userDetails, setUserDetails] = useState({
//         name: "",
//         mobile: "",
//         address: "",
//         state: "",
//         district: "",
//         pincode: "",
//     });

//     useEffect(() => {
//         const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//         setCartItems(storedCart);
//     }, []);

//     useEffect(() => {
//         const subtotal = cartItems.reduce((total, item) => {
//             const itemTotal = item.price * item.quantity;
//             const toppingsTotal = item.toppings ? item.toppings.reduce((sum, topping) => sum + topping.price, 0) : 0;
//             return total + itemTotal + toppingsTotal;
//         }, 0);
//         const discount = subtotal * 0.10;
//         setTotalAmount(subtotal - discount);
//     }, [cartItems]);

//     const handleConfirmPayment = () => {
//         alert("Order Confirmed! Thank you for your purchase.");
//         navigate("/");
//     };

//     return (
//         <div className="p-6 bg-gray-200 min-h-screen flex items-center justify-center">
//             <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl flex flex-col space-y-6">
//                 <button onClick={() => navigate(-1)} className="flex items-center text-blue-500 font-semibold"><FaArrowLeft className="mr-2" /> Back</button>
//                 <h1 className="text-3xl font-bold mb-6 text-yellow-600 flex items-center justify-center">
//                     <FaMoneyCheckAlt className="mr-2" /> Secure Payment
//                 </h1>
//                 <div className="p-4 bg-gray-100 rounded-lg shadow-md">
//                     <h2 className="text-xl font-semibold">Total Amount: ₹{totalAmount.toFixed(2)}</h2>
//                 </div>
                
//                 <h2 className="text-xl font-semibold text-gray-800 mb-2">Select Payment Method:</h2>
//                 <div className="grid grid-cols-2 gap-4 mb-6">
//                     <button className={`p-4 rounded-lg shadow-md flex items-center justify-center space-x-2 w-full ${paymentMethod === "upi" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"}`} onClick={() => setPaymentMethod("upi")}>
//                         <FaMobileAlt /> <span>UPI</span>
//                     </button>
//                     <button className={`p-4 rounded-lg shadow-md flex items-center justify-center space-x-2 w-full ${paymentMethod === "card" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"}`} onClick={() => setPaymentMethod("card")}>
//                         <FaCreditCard /> <span>Credit/Debit Card</span>
//                     </button>
//                     <button className={`p-4 rounded-lg shadow-md flex items-center justify-center space-x-2 w-full ${paymentMethod === "netbanking" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"}`} onClick={() => setPaymentMethod("netbanking")}>
//                         <FaUniversity /> <span>Net Banking</span>
//                     </button>
//                     <button className={`p-4 rounded-lg shadow-md flex items-center justify-center space-x-2 w-full ${paymentMethod === "cod" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"}`} onClick={() => setPaymentMethod("cod")}>
//                         <FaMoneyBillWave /> <span>Cash on Delivery</span>
//                     </button>
//                 </div>
                
//                 {paymentMethod === "upi" && (
//                     <div className="flex flex-col items-center">
//                         <p className="text-gray-600 mb-4">Scan the QR code below to complete your UPI payment:</p>
//                         <img src={QRCode} alt="Payment QR Code" className="w-64 h-64 object-contain" />
//                     </div>
//                 )}

//                 {paymentMethod === "cod" && (
//                     <div className="p-4 bg-gray-100 rounded-lg shadow-md">
//                         <input type="text" placeholder="Full Name" className="w-full p-2 mb-2" onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })} />
//                         <input type="text" placeholder="Mobile Number" className="w-full p-2 mb-2" onChange={(e) => setUserDetails({ ...userDetails, mobile: e.target.value })} />
//                         <input type="text" placeholder="Address" className="w-full p-2 mb-2" onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })} />
//                         <input type="text" placeholder="State" className="w-full p-2 mb-2" onChange={(e) => setUserDetails({ ...userDetails, state: e.target.value })} />
//                         <input type="text" placeholder="District" className="w-full p-2 mb-2" onChange={(e) => setUserDetails({ ...userDetails, district: e.target.value })} />
//                         <input type="text" placeholder="Pincode" className="w-full p-2" onChange={(e) => setUserDetails({ ...userDetails, pincode: e.target.value })} />
//                     </div>
//                 )}

//                 {paymentMethod === "card" && (
//                     <div className="p-4 bg-gray-100 rounded-lg shadow-md">
//                         <input type="text" placeholder="Card Holder Name" className="w-full p-2 mb-2" onChange={(e) => setCardDetails({ ...cardDetails, holder: e.target.value })} />
//                         <input type="text" placeholder="Card Number" className="w-full p-2 mb-2" onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })} />
//                         <input type="text" placeholder="Expiry Date (MM/YY)" className="w-full p-2 mb-2" onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })} />
//                         <input type="text" placeholder="CVV" className="w-full p-2" onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })} />
//                     </div>
//                 )}

//                 {paymentMethod === "netbanking" && (
//                     <div className="p-4 bg-gray-100 rounded-lg shadow-md">
//                         <select 
//                             className="w-full p-2 mb-2" 
//                             value={bankName} 
//                             onChange={(e) => setBankName(e.target.value)}
//                         >
//                             <option value="">Select Bank</option>
//                             {bankOptions.map((bank, index) => (
//                                 <option key={index} value={bank}>{bank}</option>
//                             ))}
//                         </select>
//                         <input 
//                             type="text" 
//                             placeholder="Account Number" 
//                             className="w-full p-2" 
//                             value={accountNumber} 
//                             onChange={(e) => setAccountNumber(e.target.value)}
//                         />
//                     </div>
//                 )}
                
//                 <button onClick={handleConfirmPayment} className="bg-green-500 text-white p-4 rounded-lg w-full text-lg font-semibold shadow-lg flex items-center justify-center space-x-2 hover:bg-green-600 transition">
//                     <FaCheckCircle /> <span>Confirm Payment</span>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Payment;