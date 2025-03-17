import { axiosInstance } from "../../api/axios.js";

export const signupUser = (userData) => axiosInstance.post("/user/Signup", userData).then(res => res.data);
export const loginUser = (userData) => axiosInstance.post("/user/Login", userData).then(res => res.data);
export const logoutUser = () => axiosInstance.post("/user/logout").then(res => res.data);
export const verifyOtp = (otp) => axiosInstance.post("/user/2FA", { otp }).then(res => res.data);
export const resetPassword = (userData) => axiosInstance.post("/user/ResetPassword", userData).then(res => res.data);