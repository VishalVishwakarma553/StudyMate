import { useEffect } from "react";
import { getUsersStore } from "../Store/getUsersStore";
import Footer from "./Footer";
import MentorCard from "./MentorCard";
const Mentor = () => {
  const { users, getUsers } = getUsersStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <div className="flex flex-col py-15 bg-[#1a1b41]">
        <div className="text-center space-y-4 mb-10">
          <h1 className=" sm:text-4xl text-3xl font-bold">
            Mentorship Program
          </h1>
          <p className=" sm:text-lg text-[15.5px] text-gray-300">
            Connect with mentors, build skills, and achieve your goals.
          </p>
          <input
            type="text"
            placeholder="Search for mentor..."
            className="input input-info "
          />
        </div>
        <div className="flex flex-wrap justify-center gap-20">
          {users.map((user) => (
            <MentorCard key={user._id} user = {user}></MentorCard>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Mentor;
