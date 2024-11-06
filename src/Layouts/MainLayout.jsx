import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <div>
      <ToastContainer></ToastContainer>

      <Navbar></Navbar>

      <div className="bg-gray-100 pb-10">
        <div className="min-h-[calc(100vh-418px)]">
          <Outlet></Outlet>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
