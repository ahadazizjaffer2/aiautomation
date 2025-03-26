import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    // withCredentials: true,
})

axiosInstance.interceptors.request.use((config) => {
    const userData = JSON?.parse(localStorage.getItem("user"));
    const token = userData?.token;
    // const token = localStorage.getItem("token"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, (error) => Promise.reject(error));
  