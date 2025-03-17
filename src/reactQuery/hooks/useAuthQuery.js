import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { signupUser, loginUser, logoutUser, verifyOtp, resetPassword } from "../services/authService";


export const useAuthQuery = (navigate) => {
  const queryClient = useQueryClient();

  const signupMutation = useMutation({
    mutationFn: signupUser, // ✅ Fix: Wrapped inside mutationFn
    onSuccess: (data) => {
      console.log("data-query-->", data.User);
      toast.success(data.message);
      navigate("/login");
    },
    onError: (error) => toast.error(error.response?.data?.message || "Signup failed"),
  });

  const signinMutation = useMutation({
      mutationFn: loginUser, // ✅ Fix
      onSuccess: (data) => {
      console.log("data-query-->", data);
      toast.success(data.message || "Login successfully");
      if (data?.user) {
        localStorage.setItem("user", JSON.stringify({data: data.user, token: data.token}));
        navigate("/otp");
      }
      queryClient.invalidateQueries(["user"]); // Ensure user data refresh
    },
    onError: (error) => toast.error(error.response?.data?.message || "Signin failed"),
  });

  const logoutMutation = useMutation({
    mutationFn: logoutUser, // ✅ Fix
    onSuccess: () => {
      toast.success("Logged out successfully");
      localStorage.removeItem("user");
      queryClient.invalidateQueries(["user"]);
    },
  });

  const verifyOtpMutation = useMutation({
    mutationFn: verifyOtp, // ✅ Fix
    onSuccess: (data) => {
      toast.success(data.message);
      navigate('/');
    },
    onError: (error) => toast.error(error.response?.data?.message || "OTP verification failed"),
  });

  const resetPasswordMutation = useMutation({
    mutationFn: resetPassword, // ✅ Fix
    onSuccess: (data) => toast.success(data.message),
    onError: (error) => toast.error(error.response?.data?.message || "Password reset failed"),
  });

  return { signupMutation, signinMutation, logoutMutation, verifyOtpMutation, resetPasswordMutation };
};