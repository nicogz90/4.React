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

  const handleLogin = async (e) => {
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
      setError("Usuario y/o contraseña incorrectos"); // (error.message) si el servidor devolviera un mensaje con el error
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Iniciar Sesión</h2>
      <hr />
      <label htmlFor="email">E-mail</label>
      <input
        name="email"
        id="email"
        placeholder="Ingresar correo electrónico..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Ingresar contraseña..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>{!isLoading ? "Iniciar sesión" : "Loading..."}</button>
      {error && (
        <p
          style={{
            color: "red",
            padding: "0.5rem",
            backgroundColor: "rgba(0,0,0,0.15)",
          }}
        >
          {error}
        </p>
      )}
    </form>
  );
}

export { Login };
