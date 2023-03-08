import React from "react";
import { useNavigate } from "react-router-dom";

function Private() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Pagina privada</h1>
      <button
        onClick={(e) => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export { Private };
