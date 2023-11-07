import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const EditMyServices = () => {
  const loadedService = useLoaderData();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const serviceImage = form.serviceImage.value;
    const serviceArea = form.serviceArea.value;
    const price = form.price.value;
    const description = form.description.value;
    const service = {
      serviceName,
      serviceImage,
      serviceArea,
      price,
      description,
    };
    console.log(service);
    const toastId = toast.loading("Updating service...");
    axiosSecure
      .put(`/myService/${loadedService?._id}`, service)
      .then((res) => {
        toast.success("Service updated successfully", { id: toastId });
        console.log(res);
        navigate("/myServices");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Service was not updated", { id: toastId });
      });
  };
  return (
    <div className="container px-2 mx-auto mt-10 mb-10">
      <div className="hero">
        <div className="flex-col md:flex-row-reverse hero-content">
          <div className="">
            <img
              className="hidden md:block xl:h-[600px]"
              src="/add-product.jpg"
              alt=""
            />
          </div>
          <div className="flex-shrink-0 border-2 border-[#FA7436] shadow-xl card">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <div className="md:col-span-2 form-control">
                  <label className="label">
                    <span className="label-text">Service Image</span>
                  </label>
                  <input
                    name="serviceImage"
                    type="text"
                    placeholder="service image url"
                    className="input input-bordered"
                    required
                    defaultValue={loadedService?.serviceImage}
                  />
                </div>
                <div className="md:col-span-2 form-control">
                  <label className="label">
                    <span className="label-text">Service Name</span>
                  </label>
                  <input
                    name="serviceName"
                    type="text"
                    placeholder="service name"
                    className="input input-bordered"
                    required
                    defaultValue={loadedService?.serviceName}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    name="price"
                    type="number"
                    placeholder="price"
                    step="0.01"
                    className="input input-bordered"
                    required
                    defaultValue={loadedService?.price}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service Area</span>
                  </label>
                  <input
                    name="serviceArea"
                    type="text"
                    placeholder="service area"
                    className="input input-bordered"
                    required
                    defaultValue={loadedService?.serviceArea}
                  />
                </div>
                <div className="md:col-span-2 form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="description"
                    required
                    name="description"
                    defaultValue={loadedService?.description}
                  ></textarea>
                </div>
              </div>

              <div className="mt-6 form-control">
                <button className="bg-[#FA7436] hover:opacity-90 text-white text-xl md:text-3xl h-[60px] px-[20px] rounded-lg">
                  Update Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMyServices;
