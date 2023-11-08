import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const OtherServiceCard = ({ otherService }) => {
  return (
    <Link to={`/serviceDetails/${otherService._id}`}>
      <div className="shadow-xl card card-compact bg-base-100">
        <figure className="">
          <img
            className="h-[250px] w-full object-center object-cover"
            src={otherService?.serviceImage}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl card-title">{otherService?.serviceName}</h2>
          <p className="text-xl text-[#FA7436] font-semibold">
            Price: ${parseFloat(`${otherService?.price}`).toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
};
OtherServiceCard.propTypes = {
  otherService: PropTypes.object.isRequired,
};
export default OtherServiceCard;
