const MentorCardSkeleton = () => {
  return (
    <div className="card bg-[#333461] shadow-lg  w-74 animate-pulse">
      <div className="card-body">
        <div className="avatar flex justify-center">
          <div className="w-24 h-24 rounded-full bg-gray-600"></div>
        </div>
        <div className="h-8 bg-gray-600 rounded w-3/4 mx-auto mt-4"></div>
        <div className="h-4 bg-gray-600 rounded w-full mt-4"></div>
        <div className="h-4 bg-gray-600 rounded w-2/3 mx-auto mt-2"></div>
        <div className="card-actions justify-center mt-4">
          <div className="h-10 bg-gray-600 rounded w-32"></div>
        </div>
      </div>
    </div>
  );
};
export default MentorCardSkeleton