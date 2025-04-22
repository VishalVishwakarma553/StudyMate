import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useAuthStore } from "../Store/useAuthStore";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const {login} = useAuthStore()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });  


  const validateForm = () => {
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");
    if (formData.confirmPassword != formData.password) return toast.error("Confirm Password field is Incorrect")
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();

    if (success === true) {login(formData);
    navigate('/')}
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="absolute inset-0 bg-[#1a1b41]"></div>

      {/* Animated gradient orbs */}
      {/* <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-2xl opacity-30 animate-[float_8s_ease-in-out_infinite]"></div> */}
       <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 blur-2xl opacity-20 animate-[float_6s_ease-in-out_infinite]"></div>
     {/* <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 blur-2xl opacity-30 animate-[float_4s_ease-in-out_infinite]"></div> */}

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float-particle ${
              5 + Math.random() * 10
            }s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}

      {/* Form section */}
      <div className="container flex justify-center relative z-10">
        <div className="flex flex-col justify-center bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-lg shadow-lg border border-white/20 w-full max-w-sm sm:max-w-md">
          <h1 className="text-white text-2xl sm:text-3xl font-bold mb-8">Create Account</h1>
          <form onSubmit={handleSubmit} className="space-y-4 ">
            
            <div className="form-control ">
              <input
                type="email"
                name="email"
                placeholder="Email *"
                className="input input-bordered w-full bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/60 h-12 focus:border-white/50 focus:ring-white/20 transition-all"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-control  relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password *"
                className="input input-bordered w-full bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/60 h-12 pr-10 focus:border-white/50 focus:ring-white/20 transition-all"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                autoComplete="......"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </button>
            </div>
            <div className="form-control ">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                className="input input-bordered w-full bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/60 h-12 focus:border-white/50 focus:ring-white/20 transition-all"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                autoComplete="....."
              />
            </div>
            
            <button
                type="submit"
                className="btn btn-block bg-white text-purple-600 hover:bg-white/90 border-none h-12 mt-4 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
              >
                Login
              </button>
              <div className="flex items-center justify-center space-x-4 py-2">
                <div className="h-px bg-white/20 flex-1"></div>
                <span className="text-white/60 text-sm">Or</span>
                <div className="h-px bg-white/20 flex-1"></div>
              </div>
              <button
                type="button"
                className="btn btn-outline btn-block border-white text-white hover:bg-white/10 hover:border-white h-12 flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
               
              > <span>Login with Google</span></button>
            
            <div className="text-center text-white/80 text-sm pt-2">
                Create a new account {" "}
                <Link
                  to="/Signup"
                  className="text-white underline hover:text-purple-200 transition-colors"
                >
                  Sign In
                </Link>
              </div>
          </form>
        </div>
      </div>

      {/* Add keyframe animations */}
      <style jsx>{`
        
        @keyframes float-particle {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(10px, 10px);
          }
          50% {
            transform: translate(20px, 0);
          }
          75% {
            transform: translate(10px, -10px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
