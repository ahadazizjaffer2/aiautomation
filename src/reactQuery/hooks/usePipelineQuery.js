import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { getAllLeads } from "../services/PipelineService.js";  // Assuming PipelineService.js is in the `services` folder

export const usePipelineQuery = () => {
    const queryClient = useQueryClient();

    // Query to fetch all leads
    const { data: allLeads, isLoading, isError } = useQuery({
        queryKey: ["allLeads"],
        queryFn: getAllLeads,
        onSuccess: (data) => console.log("All leads fetched:", data),
        onError: (error) => toast.error(error.response?.data?.message || "Failed to fetch leads"), // Error handling
    });


    return {
        allLeads,
        isLoading,
        isError,
    };
};
