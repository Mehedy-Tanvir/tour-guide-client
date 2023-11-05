import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const ErrorPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center h-screen gap-6">
        <div className="flex items-center justify-center">
          <img className="" src="/logo.svg" alt="logo" />
          <p className="text-4xl font-semibold">Travello</p>
        </div>
        <h1 className="text-4xl font-bold text-center text-[#0B0B0BB3]">
          Error 404! Page not found!
        </h1>
        <Link to="/">
          <button className="bg-[#FA7436] hover:opacity-90 text-white text-2xl font-semibold h-[60px] px-[20px] rounded-none">
            Go Home
          </button>
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ErrorPage;
