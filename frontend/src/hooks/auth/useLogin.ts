import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiLogin } from "../../service/auth/apiAuth";

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { password: string; phone: number }) => apiLogin(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });
};
