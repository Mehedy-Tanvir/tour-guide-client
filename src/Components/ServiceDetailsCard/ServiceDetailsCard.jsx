import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const ServiceDetailsCard = ({ service }) => {
  const { user } = useContext(AuthContext);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [date, setDate] = useState("");
  const [instruction, setInstruction] = useState("");
  const handlePurchase = () => {
    const booking = {
      service,
      providerEmail: service?.providerEmail,
      bookerEmail: user?.email,
      date,
      instruction,
      status: "Pending",
    };
    const toastId = toast.loading("Placing your booking...");
    axios
      .post("http://localhost:3000/bookings", booking)
      .then(() => {
        toast.success("Your booking was placed successfully", { id: toastId });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Your booking was not placed", { id: toastId });
      });
  };

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
          <button
            onClick={() => document.getElementById("modal_booking").showModal()}
            className="rounded-lg py-[9px] bg-[#FA7436] hover:bg-opacity-80 px-[16px] text-white text-[18px] font-semibold normal-case"
          >
            Book Now
          </button>
          <dialog
            id="modal_booking"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <img className="" src={service?.serviceImage} alt="" />
              <h1 className="text-2xl font-semibold">{service?.serviceName}</h1>
              <h1 className="text-xl font-medium text-[#FA7436]">
                Price: ${parseFloat(`${service?.price}`).toFixed(2)}
              </h1>
              <h1 className="text-base font-medium text-gray-600">
                Provider: {service?.providerEmail}
              </h1>
              <h1 className="text-base font-medium text-gray-600">
                User: {user?.email}
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  name="serviceDate"
                  type="date"
                  className="input input-bordered"
                  defaultValue={date}
                  required
                  onChange={() => {
                    if (instruction.length > 0) {
                      setButtonDisable(false);
                    }
                  }}
                  onBlur={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instruction</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="instruction"
                  required
                  name="instruction"
                  defaultValue={instruction}
                  onChange={() => {
                    if (date.length > 0) {
                      setButtonDisable(false);
                    }
                  }}
                  onBlur={(e) => setInstruction(e.target.value)}
                ></textarea>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button
                    onClick={handlePurchase}
                    className={
                      buttonDisable
                        ? "btn mr-[10px] btn-disabled"
                        : "rounded-lg hover:cursor-pointer mr-[10px] py-[9px] bg-[#FA7436] hover:bg-opacity-80 px-[16px] text-white text-[18px] font-semibold normal-case"
                    }
                  >
                    Purchase
                  </button>
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};
ServiceDetailsCard.propTypes = {
  service: PropTypes.object.isRequired,
};
export default ServiceDetailsCard;
