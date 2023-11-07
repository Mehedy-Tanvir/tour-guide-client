import { useLoaderData } from "react-router-dom";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import { useState } from "react";

const Services = () => {
  const allServices = useLoaderData();
  const [isMore, setIsMore] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);

  const handleSearch = () => {
    setIsSearched(true);
    const query = searchQuery.toLowerCase();
    const filtered = allServices.filter((service) =>
      service.serviceName.toLowerCase().includes(query)
    );
    setFilteredServices(filtered);
  };

  return (
    <div className="max-w-[1400px] px-2 mx-auto mb-[40px] mt-[40px]">
      <div className="flex items-center justify-center mt-10 mb-10">
        <div className="join drop-shadow-sm">
          <div>
            <div>
              <input
                className="input input-bordered join-item"
                type="text"
                placeholder="service name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="indicator">
            <button
              onClick={handleSearch}
              className="join-item rounded-lg py-[9px] bg-[#FA7436] hover:bg-opacity-80 px-[16px] text-white text-[18px] font-semibold normal-case"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-6">
        {!isMore &&
          (filteredServices.length > 0
            ? filteredServices.slice(0, 6)
            : allServices.slice(0, 6)
          ).map((service, idx) => (
            <ServiceCard key={idx} service={service}></ServiceCard>
          ))}
        {isMore &&
          (filteredServices.length > 0 ? filteredServices : allServices).map(
            (service, idx) => (
              <ServiceCard key={idx} service={service}></ServiceCard>
            )
          )}
      </div>
      {!isSearched &&
        !isMore &&
        (filteredServices.length > 0 ? filteredServices : allServices).length >
          0 && (
          <div className="flex items-center justify-center mt-6">
            <button
              onClick={() => setIsMore(true)}
              className="btn border-2 border-[#FA7436] mt-[16px] text-[18px] font-medium bg-transparent text-[#FA7436] hover:text-white hover:bg-[#FA7436] shadow-lg"
            >
              More
            </button>
          </div>
        )}
    </div>
  );
};

export default Services;
