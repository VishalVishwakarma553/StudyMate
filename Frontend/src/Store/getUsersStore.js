import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";


export const getUsersStore = create((set, get) => ({
    users: [],
    messages: [],
    viewProfileUser: null,
    isUsersGetting: false,
    isViewProfileLoading: false,

    getUsers: async () => {
        set({isUsersGetting: true})
        try {
            const res = await axiosInstance("/getUsers/allUsers")
            set({users: res.data})

        } catch(error) {
            console.log("Error in loading users")
            toast.error(error.response.data.message)
        } finally {
            set({isUsersGetting: false})
        }
    },

    getViewUser: async (viewProfileUserId) => {
        set({isViewProfileLoading: true})
        try {
            const res = await axiosInstance(`/getUsers/viewProfileUser/${viewProfileUserId}`)
            set({viewProfileUser : res.data})
            
        }catch(error){
            console.log("Error in finding view user profile")
            toast.error(error.response.data.message)
        } finally {
            set({isViewProfileLoading: false})
        }
    },

    getMessages: async () => {
        try{
            const {viewProfileUser} = get()
            const res = await axiosInstance(`/message/getMessage/${viewProfileUser._id}`)
            set({messages: res.data})
        }catch(error){
            toast.error(error.response.data.message)
        }
    },

    sendMessage: async (data) => {
        try{
            const {viewProfileUser, messages} = get()
            const res = await axiosInstance.post(`/message/sendMessage/${viewProfileUser._id}`, data)
            set({viewProfileUser})
            set({messages: [...messages, res.data]})
        }catch(error) {
            console.log("Error in send message:", error)
            toast.error(error.response.data.message)
        }
    },
    // Updating message in real time through socket.io
    UpdateMessage: () => {
        const {viewProfileUser} = get()
        if (!viewProfileUser) return

        const socket = useAuthStore.getState().socket

        socket.on("newMessage", (newMessage) => {
            set({messages: [...get().messages, newMessage]})
        })
    }

}))
