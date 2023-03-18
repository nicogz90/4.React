import "./App.css";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <nav id="navBar">
        <ul style={{ padding: "20px", listStyleType: "none" }}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <hr />
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <hr />
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to={"/"} />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
