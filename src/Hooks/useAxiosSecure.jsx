import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("track interceptor", error);
        if (error.response.status === 401 || error.response.status === 403) {
          logoutUser().then(() => {
            navigate("/login");
          });
        } else if (error.response.status === 404) {
          toast.error("Invalid service id");
          navigate("/");
        }
      }
    );
  }, [logoutUser, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
