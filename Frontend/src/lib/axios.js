import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://studymate-13io.onrender.com/api",
  withCredentials: true,
});
