import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Login } from "./components/Login";
import { Public } from "./components/Public";
import { Private } from "./components/Private";
import { RequiresAuth } from "./components/RequiresAuth";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Public</Link>
        </li>
        <li>
          {localStorage.getItem("token") ? (
            <Link to="/private">Private</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
      <Routes>
        <Route path="/public" element={<Public />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/private"
          element={
            <RequiresAuth>
              <Private />
            </RequiresAuth>
          }
        />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
