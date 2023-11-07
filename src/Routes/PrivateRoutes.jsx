import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Spinner></Spinner>;
  } else {
    if (!user) {
      return <Navigate state={location.pathname} to="/login"></Navigate>;
    } else {
      return children;
    }
  }
};
PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoutes;
