import Footer from "./Footer";
import { useAuthStore } from "../Store/useAuthStore";
import { Camera } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const UpdateProfile = () => {
  const { authUser, updatingProfilePhoto, updateProfile, updateDetails, updatingDetails } = useAuthStore();

  const Navigate = useNavigate()

  const [formData, setformData] = useState({
    fullName: authUser.fullName,
    Expertise: authUser.Expertise,
    Qualification: authUser.Qualification,
    About: authUser.About
  })

  const handleDetailsUpdate = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    await updateDetails(formData)
    Navigate("/mentor-profile")
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    await updateProfile(formData);
  };
  return (
    <div className="bg-[#1a1b41] ">
      <form className="  flex mx-3 justify-center align-middle py-15" onSubmit={handleDetailsUpdate}>
        <div className="card  sm:w-[50vw] bg-[#333461] text-white text-center">
          <div className="card-body space-y-4 ">
            {/* <div className="avatar flex justify-center">
              <div className="w-32 rounded">
                <img src="/avatar.png" />
              </div>
            </div> */}

            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <img
                  src={authUser.profilePic || "/avatar.png" }
                  alt="Profile"
                  className="size-32 rounded object-cover  "
                />
                <label
                  htmlFor="avatar-upload"
                  className={`
                  absolute bottom-0 right-0 
                  bg-white/70 hover:scale-105
                  p-2 rounded cursor-pointer 
                  transition-all duration-200
                  ${
                    updatingProfilePhoto
                      ? "animate-pulse pointer-events-none"
                      : ""
                  }
                `}
                >
                  <Camera className="w-5 h-5 text-base-200" />
                  <input
                    type="file"
                    id="avatar-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={updatingProfilePhoto}
                  />
                </label>
              </div>
              <p className="text-sm text-white/44">
                {updatingProfilePhoto
                  ? "Uploading..."
                  : "Click the camera icon to update your photo"}
              </p>
            </div>

            <input
              type="text"
              placeholder="Name"
              className="input mx-auto input-primary text-2xl text-center bg-transparent"
              value={formData.fullName}
              onChange={(e) => setformData({...formData, fullName:e.target.value})}
            />
            <input
              type="text"
              placeholder="Expertise"
              className="input mx-auto input-primary text-base text-center bg-transparent"
              value={formData.Expertise}
              onChange={(e) => setformData({...formData, Expertise:e.target.value})}

            />
            <input
              type="text"
              placeholder="Qualification"
              className="input mx-auto input-primary text-base text-center bg-transparent"
              value={formData.Qualification}
              onChange={(e) => setformData({...formData, Qualification:e.target.value})}

            />
            <section>
              <h3 className="text-accent  bg-clip-text font-bold text-2xl">
                About
              </h3>
              <textarea
                type="text"
                placeholder="Give details about yourself......"
                className="textarea     textarea-lg w-[90%]  textarea-primary bg-transparent"
                value={formData.About}
                onChange={(e) => setformData({...formData, About:e.target.value})}
              >
                
              </textarea>
            </section>
            <div className="card-actions  justify-center">
              <button type="submit" className="btn border-none bg-[#fb64b788]">{ !updatingDetails ? "Save" : "Saving..."}</button>
            </div>
          </div>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default UpdateProfile;
