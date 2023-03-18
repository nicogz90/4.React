import React from "react";
import { useParams } from "react-router-dom";
import { users } from "../users";

export default function User() {
  const params = useParams();
  const user = users.find((user) => user.id === parseInt(params.id)); // los parametros siempre son String. Para compararlo con un number hay que parsearlo.
  if (!user) {
    return <p>El usuario con Id: {params.id} no existe</p>;
  }
  return (
    <div>
      <h2>User no. {user.id} details:</h2>
      <p>Nombre: {user.name} </p>
    </div>
  );
}
