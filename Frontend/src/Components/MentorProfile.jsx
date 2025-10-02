import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import MentorProfileSkeleton from "./MentorProfileSkeleton";
import { axiosInstance } from "../lib/axios";

const MentorProfile = () => {
  const [profileLoading, setProfileLoading] = useState(true);
  const [authUser, setAuthUser] = useState(null)
  useEffect(() => {
    const fetchUser = async () => {
      setProfileLoading(true)
      try {
        const res = await axiosInstance.get("/auth/check");
        setAuthUser(res?.data);
      } catch (error) {
        toast.error("Something went wrong")
      }finally{
        setProfileLoading(false)
      }
    };
    fetchUser()
  }, []);

  if(profileLoading || !authUser){
    return (
      <>
      <MentorProfileSkeleton />
      <Footer />
      </>
    )
  }

  return (
    <div className="bg-[#1a1b41] ">
      <div className="  flex mx-3 justify-center align-middle py-15">
        <div className="card  sm:w-[50vw] bg-[#333461] text-white text-center">
          <div className="card-body space-y-2">
            <div className="avatar flex justify-center">
              <div className="w-32 rounded">
                <img src={authUser?.profilePic || "/avatar.png"} />
              </div>
            </div>

            <h3 className="text-2xl text-center">{authUser?.fullName}</h3>

            <p className="text-base">
              <span className="font-medium">Expertise:</span>
              {authUser?.Expertise}
            </p>
            <section>
              <h3 className="text-accent  bg-clip-text font-bold text-2xl">
                About
              </h3>
              <p className="text-[16px]">{authUser?.About}</p>
            </section>
            <div className="card-actions  justify-center">
              <Link to="/updateProfile">
                {" "}
                <button className="btn border-none bg-[#fb64b788]">
                  Update Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MentorProfile;
