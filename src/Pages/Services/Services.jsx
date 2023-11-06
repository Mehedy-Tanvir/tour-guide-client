import { useLoaderData } from "react-router-dom";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";

const Services = () => {
  const services = useLoaderData();
  return (
    <div className="max-w-[1400px] px-2 mx-auto mb-[40px] mt-[40px]">
      <div className="flex flex-col items-center justify-center gap-6">
        {services?.map((service, idx) => (
          <ServiceCard key={idx} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
