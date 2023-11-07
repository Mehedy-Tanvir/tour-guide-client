import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";
import ServiceDetailsCard from "../../Components/ServiceDetailsCard/ServiceDetailsCard";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ServiceDetails = () => {
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

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
  return (
    <>
      {isLoading && <Spinner></Spinner>}
      {!isLoading && service && (
        <div className="max-w-[1400px] mt-10 mb-10 mx-auto flex justify-center items-center">
          <ServiceDetailsCard service={service}></ServiceDetailsCard>
        </div>
      )}
    </>
  );
};

export default ServiceDetails;
