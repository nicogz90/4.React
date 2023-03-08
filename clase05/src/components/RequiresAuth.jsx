import React from "react";
import { Navigate } from "react-router-dom";

function RequiresAuth({ children }) {
  const isAuthenticated = localStorage.getItem("token");

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return children;
}

export { RequiresAuth };
