import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://study-mate-57ug4qr3p-vishalvishwkarma553-gmailcoms-projects.vercel.app/api",
  withCredentials: true,
});
