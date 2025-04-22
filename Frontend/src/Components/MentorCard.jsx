import { Link } from "react-router-dom";
import { getUsersStore } from "../Store/getUsersStore";

const MentorCard = ({user}) => {
  const {getViewUser} = getUsersStore()
  return (
    <div className="card bg-[#333461] shadow-lg border-2 border-transparent transition-all duration-300 hover:border-amber-300 text-white text-center w-74">
      <div className="card-body">
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full">
            <img src={user.profilePic || "/avatar.png"} className="object-cover" />
          </div>
        </div>
        <h3 className="text-2xl">{user.fullName}</h3>
        <p className="text-base" > <span className="font-medium">Expertise:</span> {user.Expertise}</p>
        
        <p className="font-medium"> <span className="font-medium">Qualification:</span> {user.Qualification} </p>
        <div className="card-actions  justify-center">
          <Link to="/mentor/view-user-profile"><button onClick={() => getViewUser(user._id)} className="btn border-none bg-[#fb64b788]">View Profile</button></Link>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
