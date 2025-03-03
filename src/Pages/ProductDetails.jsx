import { Link, useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from "react";
// import { FaShoppingCart, FaRegHeart } from "react-icons/fa6";


const ProductDetails = () => {
  const data = useLoaderData();
  const [gadget, setGadget] = useState({});
  const { product_id } = useParams();
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const singleData = data.find((item) => item.product_id === product_id);
    setGadget(singleData || {});
  }, [data, product_id]);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="bg-purple-600 text-white relative pb-48 -mt-8">
      {/* Banner Text */}
      <div className="text-center max-w-screen-lg mx-auto -mt-8 pb-8 p-8">
        <h1 className="text-4xl font-bold ">Product Details</h1>
        <p className="py-6 max-w-2xl mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Product Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 flex gap-6 border border-gray-200">
        {/* Left: Image Section */}
        <div className="w-1/3 bg-gray-200 rounded-lg flex items-center justify-center">
          <img
            src={gadget.image || "placeholder.jpg"}
            alt={gadget.name}
            className="w-40 h-40 object-cover rounded-lg"
          />
        </div>

        {/* Right: Product Details */}
        <div className="w-2/3 flex flex-col">
          <h2 className="text-2xl font-semibold">
            {gadget.name || "Product Name"}
          </h2>
          <p className="text-xl font-semibold text-gray-700 mt-1">
            Price:{" "}
            <span className="text-purple-600">${gadget.price || "N/A"}</span>
          </p>

          {/* Stock Status */}
          <span className="mt-2 inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            {gadget.inStock ? "In Stock" : "Out of Stock"}
          </span>

          {/* Description */}
          <p className="text-gray-600 mt-3">
            {gadget.description || "No description available."}
          </p>

          {/* Specification */}
          <div className="mt-3">
            <h3 className="font-semibold">Specification:</h3>
            <ul className="list-decimal list-inside text-gray-700 mt-1">
              {gadget.specifications ? (
                gadget.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))
              ) : (
                <li>No specifications available.</li>
              )}
            </ul>
          </div>

          {/* Rating Section */}
          <div className="flex items-center mt-3">
            <span className="font-semibold">Rating:</span>
            <div className="ml-2">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              />
            </div>
            <span className="ml-2 text-gray-500 text-sm">
              {rating || "No rating"}
            </span>
          </div>

          {/* Buttons Section */}
          {/* <div className="flex items-center mt-4 gap-3">
            <button className="bg-purple-600 text-white flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-purple-700 transition">
              <FaShoppingCart /> Add To Cart
            </button>
            <button className="p-2 border rounded-full hover:bg-gray-100 transition">
              <FaRegHeart className="text-gray-600" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
