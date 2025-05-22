import { useMutation } from "@tanstack/react-query";
import { createAccessRequest } from "../../../api/request/request";
import { useAuthContext } from "../../context/useContext";

export const useCreateRequest = () => {
    const { auth } = useAuthContext();
  const {
    mutateAsync: submitRequest,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: (response) => createAccessRequest({...response, token: auth?.token}),
    onSuccess: (data) => {
      console.log("Request submitted", data);
    },
    onError: (err) => {
      console.error("Submission failed", err);
    },
  });

  return { submitRequest, isPending, isSuccess, error };
};
