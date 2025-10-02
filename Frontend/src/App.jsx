import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Mentor from "./Components/Mentor";
import MentorProfile from "./Components/MentorProfile";
import SignupPage from "./Pages/SignupPage";
import { Toaster } from "react-hot-toast";
import Navbar from "./Components/Navbar";
import { useAuthStore } from "./Store/useAuthStore";
import { useEffect } from "react";
import LoginPage from "./Pages/LoginPage";
import UpdateProfile from "./Components/UpdateProfile";
import ViewProfile from "./Components/ViewProfile";
import Chat from "./Components/Chat";
import PageNotFound from "./Components/PageNotFound";
import ProtectedRoute from "./Components/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute";

function App() {
  const { checkAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <div>
      <Toaster />
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignupPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/mentor"
          element={
            <ProtectedRoute>
              <Mentor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mentor-profile"
          element={
            <ProtectedRoute>
              <MentorProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/updateProfile"
          element={
            <ProtectedRoute>
              <UpdateProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mentor/view-user-profile"
          element={
            <ProtectedRoute>
              <ViewProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />

        {/* 404 Page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
