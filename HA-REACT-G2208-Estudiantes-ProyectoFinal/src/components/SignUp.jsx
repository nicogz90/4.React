import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { setIsAuthenticated } from "../redux/users.slice";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    api
      .post("/users", { email, username: user, password })
      .then((response) => {
        console.log(response.data);
        const token = response.data.token;
        localStorage.setItem("token", token);

        api.defaults.headers.Authorization = "Bearer " + token;

        dispatch(setIsAuthenticated(true));

        navigate("/tweets");
      })
      .catch((error) => {
        setError(error.response.data.message);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <input
          required
          type="email"
          placeholder="Enter email"
          className="mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="Enter username"
          className="mb-2"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="Enter password"
          className="mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: "red" }}> {error} </p>}
        <button disabled={!user || !email || !password}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
