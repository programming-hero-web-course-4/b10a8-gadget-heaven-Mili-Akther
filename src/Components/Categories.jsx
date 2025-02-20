import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="w-full px-8 md:px-12 border mt-12">
      <div className="w-60 p-4 bg-white rounded-lg shadow-lg border">
        <ul className="space-y-2">
          <li>
            <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold">
              All Product
            </button>
          </li>
          {categories.map((category) => (
            <li key={category.category}>
              <Link
                to={`/category/${category.category}`}
                className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg block text-left"
              >
                {category.category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;







