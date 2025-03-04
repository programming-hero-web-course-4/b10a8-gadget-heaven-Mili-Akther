import { useState } from "react";

const Dashboard = (gadget) => {
  const { product_id, price, product_image, product_title } = gadget || {};
  const [isCart, setIsCart] = useState(true); // true -> Cart, false -> Wishlist
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // Sort Cart by Price (Descending)
  const sortCartByPrice = () => {
    const sortedCart = [...cartItems].sort((a, b) => b.price - a.price);
    setCartItems(sortedCart);
  };

  // Calculate Total Price
  const totalPrice = cartItems
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-purple-600 text-white text-center py-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2">
          Explore the latest gadgets that will take your experience to the next
          level.
        </p>

        {/* Toggle Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => setIsCart(true)}
            className={`px-6 py-2 rounded-full ${
              isCart ? "bg-white text-purple-600 font-bold" : "bg-gray-300"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => setIsCart(false)}
            className={`px-6 py-2 rounded-full ${
              !isCart ? "bg-white text-purple-600 font-bold" : "bg-gray-300"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        {/* Title & Actions */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {isCart ? "Cart" : "Wishlist"}
          </h2>

          {/* Actions */}
          <div className="flex gap-4">
            {isCart && (
              <>
                <span className="font-bold">Total Cost: ${price}</span>
                <button
                  onClick={sortCartByPrice}
                  className="px-4 py-2 border rounded-lg"
                >
                  Sort by Price
                </button>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
                  Purchase
                </button>
              </>
            )}
          </div>
        </div>

        {/* Product List */}
        {(isCart ? cartItems : wishlistItems).map((item) => (
          <div
            key={item.product_id}
            className="flex items-center justify-between p-4 border-b"
          >
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gray-300 rounded"></div>
              <div>
                <h3 className="font-bold">{item.product_title}</h3>
                <p className="text-lg font-bold text-purple-600">
                  ${item.price}
                </p>
              </div>
            </div>
            <button className="text-red-500 text-lg">✖</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
