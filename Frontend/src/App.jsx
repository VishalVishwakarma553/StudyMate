import "./App.css";
import { Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./Components/HomePage";
import Mentor from "./Components/Mentor";
import MentorProfile from "./Components/MentorProfile";
import SignupPage from "./Pages/SignupPage";
import { Toaster } from "react-hot-toast";
import Navbar from "./Components/Navbar";
import { useAuthStore } from "./Store/useAuthStore";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import LoginPage from "./Pages/LoginPage";
import UpdateProfile from "./Components/UpdateProfile";
import ViewProfile from "./Components/ViewProfile";
import { getUsersStore } from "./Store/getUsersStore";
import Chat from "./Components/Chat";
import PageNotFound from "./Components/PageNotFound";

function App() {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers} = useAuthStore();
  const { viewProfileUser } = getUsersStore()
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  return (
    <div>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mentor" element={authUser? <Mentor />: <Navigate to="/Login"></Navigate>} />
        <Route path="/mentor-profile" element={authUser?<MentorProfile />:<Navigate to="/"></Navigate>} />
        <Route path="/signup" element={<SignupPage></SignupPage>} />
        <Route path="/Login" element={<LoginPage></LoginPage>} />
        <Route path="/updateProfile" element={authUser?<UpdateProfile></UpdateProfile>:<Navigate to="/"></Navigate>} />
        <Route path="/mentor/view-user-profile" element={(viewProfileUser && authUser)?<ViewProfile></ViewProfile>:<Navigate to="/mentor"></Navigate>}/>
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
