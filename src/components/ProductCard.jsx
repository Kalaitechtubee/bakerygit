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
        <div className="bg-gradient-to-r from-yellow-200 to-yellow-500 p-6 rounded-xl shadow-xl ">
            <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover rounded-xl mb-4 "
            />
            <h2 className="text-2xl font-bold text-white mb-2">{item.name}</h2>
            <p className="text-white text-md mb-2">{item.description}</p>
            <p className="text-xl font-bold text-gray-900 bg-white px-4 py-1 inline-block rounded-lg shadow">₹{item.price}</p>

            <div className="mt-6 flex justify-between items-center">
                
                <button 
                    onClick={addToCart} 
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition duration-200 shadow-lg"
                >
                    <FaShoppingCart />
                    <span>Add to Cart</span>
                </button>

                <Link to={`/product/${item.id}`} className="text-white flex items-center space-x-2 hover:text-gray-200 transition duration-200 bg-gray-800 px-4 py-2 rounded-lg shadow-lg">
                    <FaEye />
                    <span>Preview</span>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;



// const ProductCard = ({ item }) => {
//     return (
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//             <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
//             <div className="p-4">
//                 <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
//                 <p className="text-gray-600 mb-4">{item.description}</p>
//                 <p className="text-lg font-bold mb-4">₹{item.price}</p>
//                 <div className="mb-4">
//                     <h3 className="font-semibold">Toppings:</h3>
//                     <ul className="list-disc list-inside">
//                         {item.toppings.map((topping, index) => (
//                             <li key={index}>{topping}</li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div>
//                     <h3 className="font-semibold">Reviews:</h3>
//                     <div className="space-y-2">
//                         {item.reviews.map(review => (
//                             <div key={review.id} className="text-sm">
//                                 <p className="font-semibold">{review.user}</p>
//                                 <p className="text-yellow-500">{"★".repeat(review.rating)}</p>
//                                 <p>{review.comment}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductCard;

