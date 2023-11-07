import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useEffect } from "react";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    const splitedLocation = location.pathname.split("/");
    splitedLocation[1];
    if (location.pathname !== "/") {
      const title = "Travello | " + splitedLocation[1];
      document.title = title;
    } else {
      const title = "Travello";
      document.title = title;
    }
  }, [location]);
  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <div className="min-h-screen bg-[#FEFCFB]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
