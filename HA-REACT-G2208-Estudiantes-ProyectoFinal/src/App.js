import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import NewTweet from "./components/NewTweet";
import RequiresAuth from "./components/RequiresAuth";
import SignUp from "./components/SignUp";
import TweetList from "./components/TweetList";
import { setIsAuthenticated } from "./redux/users.slice";

function App() {
  const isAuthenticated = useSelector((state) => state.users.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="app">
        <div>
          <NavLink to="/tweets">tweets</NavLink>{" "}
          {isAuthenticated && (
            <>
              <NavLink to="/new-tweet">new tweet</NavLink>{" "}
              <NavLink
                to="/tweets"
                onClick={() => {
                  localStorage.clear();
                  dispatch(setIsAuthenticated(false));
                }}
              >
                logout
              </NavLink>
            </>
          )}
          {!isAuthenticated && (
            <>
              <NavLink to="/signup">signup</NavLink>{" "}
              <NavLink to="/login">login</NavLink>
            </>
          )}
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/tweets" replace />} />
          <Route path="/tweets" element={<TweetList />} />
          <Route
            path="/new-tweet"
            element={
              <RequiresAuth>
                <NewTweet />
              </RequiresAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
