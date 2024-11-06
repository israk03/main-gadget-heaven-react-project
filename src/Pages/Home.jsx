import { Link, Outlet, useLoaderData } from "react-router-dom";
import Categories from "../Components/Categories";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Gadget Heaven";
  });
  // const categories = useLoaderData();
  const categories = Array.isArray(useLoaderData()) ? useLoaderData() : [];

  return (
    <div className="">
      <div className="bg-violet-500 pt-7 pb-56 rounded-b-xl">
        <div className="  text-center w-11/12 lg:w-9/12 mx-auto lg:space-y-7 space-y-3">
          <h2 className="lg:text-5xl text-3xl font-bold text-white">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h2>
          <p className="text-white lg:w-9/12 mx-auto pb-5">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <Link to="/dashboard">
            <button className="bg-white py-2 px-6 rounded-full font-bold ">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      <div className="w-11/12 md:w-7/12 mx-auto border lg:p-4 p-1 rounded-2xl blur-bg relative md:-top-44 -top-32 ">
        <img
          className="rounded-2xl lg:h-[450px] w-full"
          src="/banner.jpg"
          alt=""
        />
      </div>

      <h3 className="text-3xl font-bold text-center pb-5">
        Explore Cutting-Edge Gadgets
      </h3>
      <div className="flex lg:flex-row flex-col gap-6 w-11/12 lg:w-10/12 mx-auto">
        <div className="lg:w-1/5 h-full bg-white flex flex-col gap-3 p-5 rounded-lg">
          <NavLink to={`/`} className="bg-gray-200 py-3 rounded-full">
            <button className="px-6 w-full active">All-Product</button>
          </NavLink>
          <Categories categories={categories}></Categories>
        </div>
        <div className="lg:w-4/5 ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
