import React from "react";
import { useNavigate } from "react-router-dom";

function Private() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Pagina privada</h2>
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
