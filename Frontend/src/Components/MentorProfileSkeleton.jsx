const MentorProfileSkeleton = () => {
  return (
    <div className="bg-[#1a1b41]">
      <div className="flex mx-3 justify-center align-middle py-15">
        <div className="card sm:w-[50vw] bg-[#333461] text-white text-center animate-pulse">
          <div className="card-body space-y-2">
            {/* Avatar skeleton */}
            <div className="avatar flex justify-center">
              <div className="w-32 h-32 rounded bg-gray-600"></div>
            </div>

            {/* Name skeleton */}
            <div className="h-8 bg-gray-600 rounded w-2/3 mx-auto mt-4"></div>

            {/* Expertise skeleton */}
            <div className="h-6 bg-gray-600 rounded w-3/4 mx-auto mt-4"></div>

            {/* About section skeleton */}
            <section className="mt-4">
              <div className="h-8 bg-gray-600 rounded w-1/3 mx-auto mb-3"></div>
              <div className="h-4 bg-gray-600 rounded w-full mt-2"></div>
              <div className="h-4 bg-gray-600 rounded w-5/6 mx-auto mt-2"></div>
              <div className="h-4 bg-gray-600 rounded w-4/5 mx-auto mt-2"></div>
            </section>

            {/* Button skeleton */}
            <div className="card-actions justify-center mt-4">
              <div className="h-12 bg-gray-600 rounded w-40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfileSkeleton;
