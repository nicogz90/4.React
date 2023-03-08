import "./App.css";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import NewTweet from "./components/NewTweet";
import TweetList from "./components/TweetList";
import RequiresAuth from "./components/RequiresAuth";
import Logout from "./components/Logout";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.users.isAuthenticated);
  const username = useSelector((state) => state.users.username);
  return (
    <div className="container-fluid">
      <nav className="navbar bg-light mb-3">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <NavLink to="/tweets">Tweets</NavLink>
          </li>
          {!isAuthenticated ? (
            <li className="navbar-item">
              <NavLink to="/login">Login</NavLink>
            </li>
          ) : (
            <li className="navbar-item">
              <NavLink to="/logout">Logout</NavLink>
            </li>
          )}
        </ul>
        <h2>{username}</h2>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/tweets" replace />} />
        <Route path="/tweets" element={<TweetList />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/new-tweet"
          element={
            <RequiresAuth>
              <NewTweet />
            </RequiresAuth>
          }
        />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
