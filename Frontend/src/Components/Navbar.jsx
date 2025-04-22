import { Link } from "react-router-dom";
import { useAuthStore } from "../Store/useAuthStore";
import UserDropdown from "./UserDropdown";
const Navbar = () => {
  const { authUser } = useAuthStore();
  return (
    <div className="bg-[#1a1b41]">
      <div className="navbar bg-[#1a1b41] px pt-4 shadow-sm   z-50 ">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl">StudyMate</Link>
        </div>
        {authUser ? (
        <UserDropdown></UserDropdown>
        ) : (
          <div className="">
            <Link to="/signup">
              <button className="btn btn-outline mx-4 btn-secondary">
                Signup
              </button>
            </Link>
            <Link to="/login">
              <button className="btn btn-secondary">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
