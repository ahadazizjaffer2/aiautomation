import { axiosInstance } from "../../api/axios.js";

export const getAllLeads = () => axiosInstance.get("/lead/GetAllLeads").then(res => res.data);