import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loader from "../components/Loader";

function PrivateRoute({ children }) {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/auth/login" />;
  }
}

export default PrivateRoute;
