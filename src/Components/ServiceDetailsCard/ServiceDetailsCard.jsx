import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ServiceDetailsCard = ({ service }) => {
  return (
    <div className="rounded-lg w-full lg:w-[80%] pt-6 lg:pt-0 border shadow-lg card lg:card-side">
      <div className="flex mb-[4px] lg:hidden items-center justify-center gap-2 md:items-center flex-col">
        <img
          className="h-[64px] w-[64px] object-cover object-center rounded-[50%] mr-2"
          src={service?.providerImage}
          alt=""
        />
        <p className="font-medium text-[24px] normal-case">
          {service?.providerName}
        </p>
      </div>
      <figure className="">
        <img
          src={service?.serviceImage}
          alt="Service Image"
          className="w-[300px] md:w-[500px] xl:w-[600px] object-cover object-center h-full"
        />
      </figure>
      <div className="bg-transparent rounded-b-lg card-body lg:rounded-l-none lg:rounded-e-lg">
        <div className="">
          <div>
            <div className="hidden lg:flex mb-[4px] items-start justify-center gap-2 flex-col">
              <img
                className="h-[64px] w-[64px] object-cover object-center rounded-[50%] mr-2"
                src={service?.providerImage}
                alt=""
              />
              <p className="font-medium text-[24px] normal-case">
                {service?.providerName}
              </p>
            </div>
            <h1 className="text-[32px] font-medium text-[#0B0B0B]">
              {service?.serviceName}
            </h1>
            <h1 className="text-[24px] mb-[4px] text-[#FA7436] font-semibold">
              Price: ${parseFloat(`${service?.price}`).toFixed(2)}
            </h1>
            <h1 className="text-[18px] mb-[4px] font-semibold text-stone-500">
              Area: {service?.serviceArea}
            </h1>
          </div>
          <div className="">
            <h1 className="text-[24px] font-semibold mb-[4px]">
              Description:{" "}
            </h1>
            <p className="text-[18px]">{service?.description}</p>
          </div>
        </div>
        <div className="justify-start mt-4 card-actions">
          <Link>
            <button className="rounded-lg py-[9px] bg-[#FA7436] hover:bg-opacity-80 px-[16px] text-white text-[18px] font-semibold normal-case">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
ServiceDetailsCard.propTypes = {
  service: PropTypes.object.isRequired,
};
export default ServiceDetailsCard;
