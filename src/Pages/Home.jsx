import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Heading from "../Components/Heading";
import Categories from "../Components/Categories";

const Home = () => {
  // const categories = [
  //   { category: "Laptops" },
  //   { category: "Phones" },
  //   { category: "Accessories" },
  //   { category: "Smart Watches" },
  //   { category: "MacBook" },
  //   { category: "iPhone" },
  // ];
  const categories = useLoaderData();
  console.log(categories);
  return (
    <>
      <div className="w-full px-8 md:px-12">
        <Banner />
      </div>
      {/* Heading */}
      <Heading title={"Explore Cutting-Edge Gadgets"}></Heading>
      {/* Nested tab section */}
      <Categories categories={categories}></Categories>

      {/* dynamic nested component */}  
      <Outlet></Outlet>
    </>
  );
};

export default Home;
