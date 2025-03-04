import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

import Navbar from "../Components/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayouts = () => {
    return (
      <div>
        <Toaster></Toaster>
        {/* banner section */}
        <div className="w-full px-8 md:px-12 mt-12">
          <Navbar />
        </div>
        <div className="min-h-screen py-12">
          {/* dynamic section */}
          <Outlet></Outlet>
        </div>
        {/* Footer Section */}
        <Footer></Footer>
      </div>
    );
};

export default MainLayouts;