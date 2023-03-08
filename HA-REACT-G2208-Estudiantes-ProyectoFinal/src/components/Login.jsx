import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import { setIsAuthenticated } from "../redux/users.slice";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    api
      .post("/sessions", { username, email: username, password })
      .then((response) => {
        console.log(response.data);
        const token = response.data.token;
        localStorage.setItem("token", token);

        api.defaults.headers.Authorization = "Bearer " + token;
        dispatch(setIsAuthenticated(true));
        setIsLoading(false);
        navigate("/tweets");
      })
      .catch((error) => {
        setError(error.response.data.message);
        setIsLoading(false);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">{isLoading ? "Login in..." : "Login"}</button>
      {error && <p style={{ color: "red" }}> {error} </p>}
      <Link to="/signup">Don't have account?</Link>
    </form>
  );
}
