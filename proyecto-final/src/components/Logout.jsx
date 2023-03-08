import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsAuthenticated, setUsername } from "../redux/user.slice";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
    dispatch(setIsAuthenticated(false));
    dispatch(setUsername(""));
    navigate("/tweets");
  }, [dispatch, navigate]);
}

export default Logout;
