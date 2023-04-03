import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setIsAuthenticated,
  setUsername as setUser,
} from "../redux/user.slice";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await api.post("/users", {
        email,
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      api.defaults.headers.Authorization = "Bearer " + res.data.token;
      dispatch(setIsAuthenticated(true));
      dispatch(setUser(username));
      navigate("/tweets");
    } catch (error) {
      setError(error.response.data.message);
    }
    setIsLoading(false);
  };

  return (
    <form className="row d-flex justify-content-center" onSubmit={handleSubmit}>
      <div className="col-auto">
        <h1>Signup</h1>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control m-3"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoFocus
        />
        <input
          type="text"
          name="username"
          id="username"
          className="form-control m-3"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          className="form-control m-3"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="btn btn-primary m-3"
          disabled={!email || !username || !password}
        >
          {isLoading ? <i className="fa fa-spinner fa-spin fa-1x" /> : "Submit"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </form>
  );
}

export default SignUp;
