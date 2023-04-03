import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import { setIsAuthenticated, setUsername } from "../redux/user.slice";

function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await api.post("/sessions", {
        email: usernameOrEmail,
        username: usernameOrEmail,
        password,
      });
      localStorage.setItem("token", res.data.token);
      api.defaults.headers.Authorization = "Bearer " + res.data.token;
      dispatch(setIsAuthenticated(true));
      dispatch(setUsername(res.data.user.username));
      navigate("/tweets");
    } catch (error) {
      setError(error.response.data.message);
    }
    setIsLoading(false);
  };

  return (
    <form
      className="row d-flex justify-content-center"
      action=""
      method="post"
      onSubmit={handleSubmit}
    >
      <div className="col-auto">
        <h1>Login</h1>
        <input
          type="text"
          name="user"
          id="user"
          className="form-control m-3"
          placeholder="Enter email or username"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
          required
          autoFocus
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
          className="btn btn-primary m-3 d-grid"
          disabled={!usernameOrEmail || !password}
        >
          {isLoading ? <i className="fa fa-spinner fa-spin fa-1x" /> : "Login"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Link to="/signup">Don't have an account?</Link>
      </div>
    </form>
  );
}

export default Login;
