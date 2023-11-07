import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";

const HomeServices = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get("/services")
      .then((res) => {
        setServices(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [axiosSecure]);
  return (
    <div className="max-w-[1400px] px-2 mx-auto mb-[40px] mt-[20px]">
      <h1 className="text-5xl font-semibold text-center font-volkhov">
        Our <span className="text-[#FA7436]">Popular</span> Services
      </h1>
      <div className="flex flex-col items-center justify-center gap-6 mt-10">
        {!isLoading &&
          services
            ?.slice(0, 4)
            ?.map((service, idx) => (
              <ServiceCard key={idx} service={service}></ServiceCard>
            ))}
        {isLoading && <Spinner></Spinner>}
        {!isLoading && services.length === 0 && (
          <div className="min-h-screen max-w-[1400px] mx-auto flex justify-center items-center">
            <h1 className="mt-4 text-3xl font-medium text-center text-black">
              No services found.
            </h1>
          </div>
        )}
        {!isLoading && services.length > 0 && (
          <Link to="/services">
            <button className="btn border-2 border-[#FA7436] mt-[16px] text-[18px] font-medium bg-transparent text-[#FA7436] hover:text-white hover:bg-[#FA7436] shadow-lg">
              Show All
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HomeServices;
