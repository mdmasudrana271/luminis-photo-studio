import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvide";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-5 space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
      </div>
    );
  }

  // check user logged in or not 

  if (user && user.uid) {
    return children;
  }

  // redirect user use navigator 

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
