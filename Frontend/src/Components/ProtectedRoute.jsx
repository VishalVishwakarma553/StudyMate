import { Navigate } from "react-router-dom";
import { useAuthStore } from "../Store/useAuthStore";
import { Loader } from "lucide-react";

const ProtectedRoute = ({ children }) => {
  const { authUser, isCheckingAuth } = useAuthStore();

  if (isCheckingAuth) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#1a1b41] relative">
        <Loader className="size-10 animate-spin absolute top-60" />
      </div>
    );
  }

  if (!authUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
