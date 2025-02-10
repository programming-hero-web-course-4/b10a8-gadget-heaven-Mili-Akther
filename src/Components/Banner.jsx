import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-purple-600 text-white  rounded-4xl ">
      <div className="navbar text-white max-w-[1500px] mx-auto">
        <div className="navbar-start">
          <Link to="/" className="text-xl font-bold">
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/statistics" className="hover:underline">
              Statistics
            </Link>
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-circle btn-outline border-black bg-white ">
            🛒
          </button>
          <button className="btn btn-circle btn-outline border-black bg-white ml-3">
            ❤️
          </button>
        </div>
      </div>
      <div className="text-center max-w-[1500px] mx-auto my-6">
        <h1 className="text-4xl font-bold">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className="py-6 max-w-2xl mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level.From smart devices to <br /> the coolest accessories, we have it
          all!
        </p>
        <button className="btn btn-white text-purple-600 font-bold shadow-md my-2 rounded-full">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
