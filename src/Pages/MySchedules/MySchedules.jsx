import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const MySchedules = () => {
  const [bookings, setBookings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/myBookings?email=${user.email}`)
      .then((res) => {
        setBookings(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [user]);
  console.log(bookings);
  return (
    <div className="max-w-[1400px] mx-auto mt-[40px] mb-[40px]">
      <h1 className="text-3xl font-semibold text-center">My Bookings</h1>
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
              {/* row 1 */}
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

      {/* my pending works */}
      <h1 className="text-3xl mt-[32px] font-semibold text-center">
        My Pending Works
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Service</th>
              <th>Booker</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src="https://imagizer.imageshack.com/img923/8731/kQRVEd.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">City Tour</div>
                    <div className="text-sm opacity-50">New York</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src="https://imagizer.imageshack.com/img923/6803/IxZkfN.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Mehedy Tanvir</div>
                    <div className="text-sm opacity-50">tanvir@gmail.com</div>
                  </div>
                </div>
              </td>
              <td>$120.00</td>
              <td>2023-11-10</td>
              <td>
                <select
                  className="w-full max-w-xs select select-bordered"
                  defaultValue="Pending"
                >
                  <option disabled>Choose Status</option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySchedules;
