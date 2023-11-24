import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRegister } from "../../service/auth/apiAuth";

export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { name: string; phone: number; role: string }) =>
      apiRegister(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });
};
