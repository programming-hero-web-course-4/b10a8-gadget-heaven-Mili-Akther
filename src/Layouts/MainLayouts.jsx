import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";


const MainLayouts = () => {
    return (
      <div>
        {/* Navbar section */}
      
        <div className="min-h-[calc(100vh-292px)] py-12">{/* dynamic section */}
            <Outlet></Outlet>
        </div>
        {/* Footer Section */}
        <Footer></Footer>
      </div>
    );
};

export default MainLayouts;