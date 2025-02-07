import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useParams hook to get product ID from the URL
import { FaShoppingCart } from 'react-icons/fa';
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
    const { id } = useParams(); // Get the product ID from the URL
    const navigate = useNavigate(); // Used for navigation to cart page

    // Example products list (replace with dynamic data or API)
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

    if (!product) {
        return <p>Product not found</p>;
    }

    // Add the product to the cart
    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        
        if (existingProductIndex >= 0) {
            // Product already in the cart, update quantity
            cart[existingProductIndex].quantity += 1;
        } else {
            // Product not in the cart, add new item
            const newProduct = { ...product, quantity: 1 };
            cart.push(newProduct);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        navigate('/cart'); // Navigate to the Cart page after adding to cart
    };

    return (
        <div className="min-h-screen bg-yellow-50 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                {/* Heading for Product Details */}
                <h1 className="text-3xl font-bold mb-6 text-center">Product Details</h1>

                {/* Product Name */}
                <h2 className="text-2xl font-semibold mb-4 text-center">{product.name}</h2>

                {/* Product Image */}
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover rounded-lg mb-4"
                />

                {/* Product Description */}
                <p className="text-lg text-gray-700 mb-4">{product.description}</p>

                {/* Product Price */}
                <p className="text-xl font-bold text-center mb-6">₹{product.price}</p>

                {/* Add to Cart button */}
                <div className="mt-4 text-center">
                    <button onClick={addToCart} className="bg-yellow-500 text-white p-3 rounded-lg flex items-center space-x-2 justify-center mx-auto w-3/4">
                        <FaShoppingCart /> {/* Shopping cart icon */}
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
