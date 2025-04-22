import { useState } from "react";
import {Link} from "react-router-dom"
import { useAuthStore } from "../Store/useAuthStore";
import { useNavigate } from "react-router-dom";
const UserDropdown = () => {
  const { authUser, logout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId;
  const navigate = useNavigate()
  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Prevents immediate closing when hovering
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setIsOpen(false), 200); // Delays closing
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="ralative"
    >
      <button className="btn btn-outline btn-secondary ">
        {authUser.fullName.trim().split(" ")[0]}
      </button>

      {isOpen && (
        <ul className="absolute right-0 mt-2 w-32 bg-[#7276e2] sm:bg-transparent  rounded-lg shadow-md z-50 border  border-white/20 ">
          <Link to="/mentor-profile"><li className="px-4 py-2 hover:bg-white/10 border-b  border-b-white/10 cursor-pointer">
            Profile
          </li></Link>
          <li className="px-4 py-2 hover:bg-white/10 cursor-pointer"
          onClick={() =>{
            navigate("/")
            logout()}}
          >Logout</li>
        </ul>
      )}
    </div>
  );
};

export default UserDropdown;
