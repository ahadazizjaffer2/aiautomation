import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { signupUser, loginUser, logoutUser, verifyOtp, resetPassword, forgotPassword, getUserInfo, updatePassword, updateProfile } from "../services/authService";


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
      if (data?.User) {
        localStorage.setItem("user", JSON.stringify({data: data.user, token: data.token}));
        if(data?.User?.TFA){
          navigate("/otp");
        }else{
          navigate("/");
        }
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

  const forgotPasswordMutation = useMutation({
    mutationFn: forgotPassword, // ✅ Fix
    onSuccess: (data) => toast.success(data.message),
    onError: (error) => toast.error(error.response?.data?.message || "email sent failed"),
  });

  const verifyOtpMutation = useMutation({
    mutationFn: verifyOtp, // ✅ Fix
    onSuccess: (data) => {
      toast.success(data.message);
      localStorage.setItem("user", JSON.stringify({data: data.user, token: data.token}));
      navigate('/');
    },
    onError: (error) => toast.error(error.response?.data?.message || "OTP verification failed"),
  });

  const resetPasswordMutation = useMutation({
    mutationFn: resetPassword, // ✅ Fix
    onSuccess: (data) => toast.success(data.message),
    onError: (error) => toast.error(error.response?.data?.message || "Password reset failed"),
  });



  // Setting route
  const { data: userInfo} = useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
    refetchOnWindowFocus: false,
    enabled: !!localStorage.getItem("user"),
    onSuccess: (data) => console.log("User info fetched:", data),
    onError: (error) => toast.error(error.response?.data?.message || "Failed to fetch user details"),
  });

  const updatePasswordMutation = useMutation({
    mutationFn: updatePassword, // ✅ Fix
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries(["userInfo"]);
    },
    onError: (error) => toast.error(error.response?.data?.message || "Update password failed"),
  });

  const updateProfileMutation = useMutation({
    mutationFn: updateProfile, // ✅ Fix
    onSuccess: (data) => toast.success(data.message),
    onError: (error) => toast.error(error.response?.data?.message || "Update profile failed"),
  });


  return { signupMutation, signinMutation, logoutMutation, verifyOtpMutation, resetPasswordMutation, forgotPasswordMutation, userInfo, updatePasswordMutation, updateProfileMutation };
};