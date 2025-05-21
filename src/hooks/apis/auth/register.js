import { useMutation } from "@tanstack/react-query";
import { registerRequest } from "../../../api/auth/auth";



export const useRegister = function() { 
    
     const {isPending, isSuccess, error, mutateAsync: registerMutation} = useMutation({

        mutationFn: registerRequest,
        onSuccess: (data) => {
            console.log('Sucessfully Registerd', data);
        },
        onError: (error) => {
            console.error('Failed to Register', error);
        }
     });

     return {
        isPending,
        isSuccess,
        error,
        registerMutation
     };
};