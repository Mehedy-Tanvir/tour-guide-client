import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";
import ServiceDetailsCard from "../../Components/ServiceDetailsCard/ServiceDetailsCard";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import OtherServiceCard from "../../Components/OtherServiceCard/OtherServiceCard";

const ServiceDetails = () => {
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [otherServices, setOtherServices] = useState([]);

  useEffect(() => {
    axiosSecure
      .get(`/serviceDetails/${id}`)
      .then((res) => {
        setService(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [id, axiosSecure]);
  useEffect(() => {
    axiosSecure
      .get(`/otherServices?email=${service?.providerEmail}`)
      .then((res) => {
        const loadedServices = res.data;
        const remainingServices = loadedServices.filter(
          (loadedService) => loadedService._id !== service._id
        );
        setOtherServices(remainingServices);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [axiosSecure, otherServices, service]);
  return (
    <>
      {isLoading && <Spinner></Spinner>}
      {!isLoading && !service && (
        <div className="min-h-screen max-w-[1400px] mx-auto flex justify-center items-center">
          <h1 className="mt-4 text-3xl font-medium text-center text-black">
            Service Not Found.
          </h1>
        </div>
      )}
      {!isLoading && service && (
        <div className="max-w-[1400px] px-2 mb-[100px]  mx-auto ">
          <div className="flex items-center justify-center mt-10 mb-10">
            <ServiceDetailsCard service={service}></ServiceDetailsCard>
          </div>
          <h1 className="text-4xl mt-[100px] mb-[40px] font-semibold text-center font-volkhov">
            Service <span className="text-[#FA7436]">Provider</span>
          </h1>
          <div className="flex items-center justify-center">
            <div className="flex border-2 p-[20px] rounded-3xl flex-col items-center justify-center gap-4 shadow-lg">
              <img
                className="w-[150px] rounded-[100%]
               object-cover object-center border-2 border-black h-[150px]"
                src={service?.providerImage}
                alt=""
              />
              <div className="text-center">
                <h1 className="text-2xl font-semibold">
                  Name: {service?.providerName}
                </h1>
                <h1 className="text-xl">Area: {service?.serviceArea}</h1>
                <h1 className="text-[#666]">Email: {service?.providerEmail}</h1>
              </div>
            </div>
          </div>
          {otherServices.length > 0 && (
            <h1 className="text-3xl mt-[100px] mb-[40px] font-semibold text-center font-volkhov">
              Other <span className="text-[#FA7436]">Services</span> From This
              Provider
            </h1>
          )}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {otherServices?.map((otherService, idx) => (
              <OtherServiceCard
                key={idx}
                otherService={otherService}
              ></OtherServiceCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceDetails;
