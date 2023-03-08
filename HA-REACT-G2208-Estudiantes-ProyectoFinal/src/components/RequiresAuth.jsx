import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RequiresAuth({ children }) {
  const isAuthenticated = useSelector((state) => state.users.isAuthenticated);

  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}
