import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MySchedules = () => {
  const [bookings, setBookings] = useState([]);
  const [myPendingWorks, setMyPendingWorks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [workStatuses, setWorkStatuses] = useState({});
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/myBookings?email=${user.email}`)
      .then((res) => {
        setBookings(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [user, axiosSecure]);
  useEffect(() => {
    axiosSecure
      .get(`/myPendingWorks?email=${user.email}`)
      .then((res) => {
        setMyPendingWorks(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [user, myPendingWorks, axiosSecure]);

  const handleStatusChange = (status, id) => {
    const toastId = toast.loading("Changing status...");
    axiosSecure
      .patch(`/updateStatus/${id}`, {
        status,
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Status changed successfully", { id: toastId });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Status could not changed", { id: toastId });
      });
  };
  // console.log(status);
  // console.log("my", myPendingWorks);

  return (
    <div className="max-w-[1400px] mx-auto mt-[40px] mb-[40px]">
      <h1 className="text-4xl mb-[40px] font-semibold text-center">
        My <span className="text-[#FA7436]">Bookings</span>
      </h1>
      {!isLoading && bookings && (
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Service</th>
                <th>Provider</th>
                <th>Instruction</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {bookings?.map((booking, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-12 h-12 mask mask-squircle">
                          <img
                            src={booking?.service?.serviceImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {booking?.service?.serviceName}
                        </div>
                        <div className="text-sm opacity-50">
                          {booking?.service?.serviceArea}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-12 h-12 mask mask-squircle">
                          <img
                            src={booking?.service?.providerImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {booking?.service?.providerName}
                        </div>
                        <div className="text-sm opacity-50">
                          {booking?.providerEmail}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{booking?.instruction}</td>
                  <td>
                    ${parseFloat(`${booking?.service?.price}`).toFixed(2)}
                  </td>
                  <td>{booking?.date}</td>
                  <td>{booking?.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {!isLoading && bookings.length === 0 && (
        <h1 className="mt-4 text-2xl font-medium text-center text-yellow-500">
          You have not booked any services yet.
        </h1>
      )}

      {/* my pending works */}
      <h1 className="text-4xl mt-[100px] mb-[40px] font-semibold text-center">
        My Pending <span className="text-[#FA7436]">Works</span>
      </h1>
      {!isLoading && myPendingWorks && (
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Service</th>
                <th>Booker</th>
                <th>Instruction</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myPendingWorks?.map((work, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-12 h-12 mask mask-squircle">
                          <img
                            src={work?.service?.serviceImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {work?.service?.serviceName}
                        </div>
                        <div className="text-sm opacity-50">
                          {work?.service?.serviceArea}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-12 h-12 mask mask-squircle">
                          <img
                            src={work?.bookerImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{work?.bookerName}</div>
                        <div className="text-sm opacity-50">
                          {work?.bookerEmail}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{work?.instruction}</td>
                  <td>${parseFloat(`${work?.service?.price}`).toFixed(2)}</td>
                  <td>{work?.date}</td>
                  <td>
                    <select
                      className="w-full max-w-xs select select-bordered"
                      value={workStatuses[work._id] || work.status}
                      onChange={(e) => {
                        const newStatus = e.target.value;
                        handleStatusChange(newStatus, work._id);
                      }}
                    >
                      <option disabled>Choose Status</option>
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {!isLoading && myPendingWorks.length === 0 && (
        <h1 className="mt-4 text-2xl font-medium text-center text-yellow-500">
          Your services have not been purchased yet.
        </h1>
      )}
    </div>
  );
};

export default MySchedules;
