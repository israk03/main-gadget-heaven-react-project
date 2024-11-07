import { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import { getAllCard, getWishList } from "../Utilities/utilities";
const Navbar = () => {
  const { pathname } = useLocation();

  const [card, setCard] = useState([]);
  useEffect(() => {
    const addToCard = getAllCard();
    setCard(addToCard);
  }, []);

  const [wish, setWish] = useState([]);
  useEffect(() => {
    const addToWish = getWishList();
    setWish(addToWish);
  }, []);

  return (
    <div
      className={`${
        [
          "/",
          "/category/All-Products",
          "/category/Phones",
          "/category/Laptops",
          "/category/Accessories",
          "/category/Smartwatches",
          "/category/MacBooks",
          "/category/iPhones",
        ].includes(pathname) &&
        "bg-violet-500 rounded-t-xl text-white mt-5 lg:px-5"
      }`}
    >
      <div className="navbar w-10/12 mx-auto py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-gray-800 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
            >
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border border-violet-500  py-1 px-4 rounded-md"
                      : ""
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border border-violet-500 text-violet-500 py-1 px-4 rounded-md"
                      : ""
                  }`
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border border-violet-500 text-violet-500 py-1 px-4 rounded-md"
                      : ""
                  }`
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border border-violet-500 text-violet-500 py-1 px-4 rounded-md"
                      : ""
                  }`
                }
                to="/blogs"
              >
                Blog
              </NavLink>
            </ul>
          </div>
          <Link to="/" className=" lg:text-2xl  font-bold">
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  gap-8">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border border-violet-500 text-white py-1 px-4 rounded-md"
                    : "py-1 px-5"
                }`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border border-violet-500 text-violet-500 py-1 px-4 rounded-md"
                    : "py-1 px-5 "
                }`
              }
              to="/statistics"
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border border-violet-500 text-violet-500 py-1 px-4 rounded-md"
                    : "py-1 px-5 "
                }`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border border-violet-500 text-violet-500 py-1 px-4 rounded-md"
                    : "py-1 px-5"
                }`
              }
              to="/notfound"
            >
              Blog
            </NavLink>
          </ul>
        </div>

        <div className="navbar-end flex gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle border-white"
            >
              <div className="indicator">
                <MdOutlineShoppingCart className="text-2xl" />
              </div>
            </div>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle border-white"
            >
              <div className="indicator">
                <MdFavoriteBorder className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
