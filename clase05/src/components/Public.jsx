import React from "react";
import { NavLink } from "react-router-dom";

function Public() {
  return (
    <div>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}

export { Public };
