import { Navigate } from "react-router-dom";
import { useAuthStore } from "../Store/useAuthStore";

const PublicRoute = ({ children }) => {
  const { authUser } = useAuthStore();

  // If user is already logged in, redirect to mentor page
  if (authUser) {
    return <Navigate to="/mentor" replace />;
  }

  return children;
};

export default PublicRoute;
