import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://study-mate-alpha.vercel.app/api",
  withCredentials: true,
});
