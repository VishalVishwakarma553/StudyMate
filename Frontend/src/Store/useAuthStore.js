import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import {io} from "socket.io-client"

export const useAuthStore = create((set, get) => ({
  authUser: null,
  isCheckingAuth: true,
  updatingProfilePhoto: false,
  updatingDetails: false,
  onlineUsers: [],

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");

      set({ authUser: res.data });

      get().connectSocket()
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  signup: async (data) => {
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      if (res) {
        set({ authUser: res.data });
        toast.success("Account created successfully");
      }

      // if user signup to the app then conect the socket
      get().connectSocket()
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  login: async (data) => {
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Logged in successfully");
      // if user login to the app then conect the socket
      get().connectSocket()
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
      get().disconnectSocket()
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  updateProfile: async (data) => {
    set({ updatingProfilePhoto: true });
    try {
      const res = await axiosInstance.put("/auth/update-profile", data);
      set({ authUser: res.data });
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log("error in update profile:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ updatingProfilePhoto: false });
    }
  },
  updateDetails: async (data) => {
    set({ updatingDetails: true });
    try {
      const res = await axiosInstance.put("/auth/update-details", data);
      set({ authUser: res.data });
      toast.success("Details updated successfully");
    } catch (error) {
      console.log("error in update details:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ updatingDetails: false });
    }
  },

  connectSocket: () => {
    const {authUser} = get()
    // if user is not authenticated or user is already connected then return
    if (!authUser || get().socket?.connected) return
    const socket = io("https://studymate-13io.onrender.com", {
      query: {
        userId: authUser._id
      }
    })
    socket.connect()

    set({socket: socket})
    // listening the event of online users
    socket.on("getOnlineUsers", (userIds) => {
      set({onlineUsers: userIds})
    })
  },

  disconnectSocket: () => {
    if (get().socket?.connected) get().socket.disconnect()
  }

}));
