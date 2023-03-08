import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const URL = "https://ha-auth-react.now.sh/auth";

  const navigate = useNavigate();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
          const res = await axios.post(URL, {
            username: email,
            password: password,
          }); // enviamos datos de login a servidor. Si el usuario existe, el servidor nos devuelve un token. (para el ejemplo de esta URL, hay que usar >> username: hack, password: academy)
          localStorage.setItem("token", res.data.token);
          navigate("/private");
        } catch (error) {
          setError("Usuario y/o contrasena incorrectos"); // (error.message) si el servidor devolviera un mensaje con el error
        }
        setIsLoading(false);
      }}
    >
      <h2>Iniciar Sesion</h2>
      <hr />
      <label htmlFor="email">E-mail</label>
      <input
        name="email"
        id="email"
        placeholder="Ingresar correo electronico..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Contrasena</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Ingresar contrasena..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>{!isLoading ? "Iniciar sesion" : "Loading..."}</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export { Login };
