import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://studymate-1pzi.onrender.com/api",
  withCredentials: true,
});
