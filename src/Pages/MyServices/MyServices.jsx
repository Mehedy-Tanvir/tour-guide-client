import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyServiceCard from "../../Components/myServiceCard/myServiceCard";

const MyServices = () => {
  const { user, loading } = useContext(AuthContext);
  const [myServices, setMyServices] = useState([]);

  useEffect(() => {
    if (!loading) {
      axios
        .get(`http://localhost:3000/myServices?email=${user?.email}`)
        .then((res) => setMyServices(res.data))
        .catch((error) => console.log(error));
      // fetch(`http://localhost:3000/myServices?email=${user?.email}`)
      //   .then((res) => res.json())
      //   .then((data) => setMyServices(data))
      //   .catch((error) => console.log(error));
    }
  }, [loading, user]);
  console.log(myServices);

  // const queryClient = useQueryClient();
  // const { isPending, isError, data, error } = useQuery({
  //   queryKey: ["myService"],
  //   queryFn: fetch(`http://localhost:3000/myServices?email=${user.email}`).then(
  //     (res) => res.json()
  //   ),
  // });
  // console.log(data);
  return (
    <div>
      <div className="max-w-[1400px] px-2 mx-auto mb-[40px] mt-[40px]">
        <div className="flex flex-col items-center justify-center gap-6">
          {myServices?.map((service, idx) => (
            <MyServiceCard key={idx} service={service}></MyServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyServices;
