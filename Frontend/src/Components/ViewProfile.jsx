import Footer from "./Footer";
import {getUsersStore} from "../Store/getUsersStore"
import { Link } from "react-router-dom";
const ViewProfile = () => {
  const {viewProfileUser} = getUsersStore()
  return (
    <div className="bg-[#1a1b41] ">
      <div className="  flex mx-3 justify-center align-middle py-15">
        <div className="card  sm:w-[50vw] bg-[#333461] text-white text-center">
          <div className="card-body space-y-2">
            <div className="avatar flex justify-center">
              <div className="w-32 rounded">
                <img src={viewProfileUser.profilePic || "/avatar.png"} />
              </div>
            </div>

            <h3 className="text-2xl text-center">{viewProfileUser.fullName}</h3>
            <p className="text-base">{viewProfileUser.Expertise}</p>
            <section>
              <h3 className="text-accent  bg-clip-text font-bold text-2xl">
                About
              </h3>
              <p className="text-[16px]">{viewProfileUser.About}
              </p>
            </section>
              <Link to="/chat"> <button className="btn border-none bg-[#fb64b788]">
                Connect a chat with {viewProfileUser.fullName}
              </button></Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ViewProfile;
