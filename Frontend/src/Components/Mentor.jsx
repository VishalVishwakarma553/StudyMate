import { useEffect, useState } from "react";
import { getUsersStore } from "../Store/getUsersStore";
import Footer from "./Footer";
import MentorCard from "./MentorCard";
import MentorCardSkeleton from "./MentorCardSkeleton";

const Mentor = () => {
  const { users, getUsers, isUsersGetting } = getUsersStore();
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = users.filter((user) => {
    const query = searchQuery.toLowerCase();
    const fullName = user.fullName?.toLowerCase() || "";
    const expertise = user.Expertise?.toLowerCase() || "";
    const about = user.About?.toLowerCase() || "";

    return (
      fullName.includes(query) ||
      expertise.includes(query) ||
      about.includes(query)
    );
  });

  return (
    <>
      <div className="flex flex-col py-15 bg-[#1a1b41] min-h-screen">
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-20">
          {isUsersGetting ? (
            Array.from({ length: 6 }).map((_, index) => (
              <MentorCardSkeleton key={index} />
            ))
          ) : filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <MentorCard key={user._id} user = {user}></MentorCard>
            ))
          ) : (
            <div className="text-center text-gray-400 text-xl py-10">
              No mentors available matching your search.
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Mentor;
