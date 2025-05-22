import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateSoftwareRequest } from "../../../api/software/software";
import { useAuthContext } from "../../context/useContext";


export const useSoftwareCreation = function() { 

     const {auth} = useAuthContext();
     const queryClient = useQueryClient();
    
     const {isPending, isSuccess, error, mutateAsync: createSoftwareMutation} = useMutation({

        mutationFn: (response) =>  CreateSoftwareRequest({...response, token: auth?.token}),
        onSuccess: (data) => {
            console.log('Sucessfully Software created', data);
            queryClient.invalidateQueries(['allRequests']);
        },
        onError: (error) => {
            console.error('failed to create software', error);
        }
     });

     return {
        isPending,
        isSuccess,
        error,
        createSoftwareMutation
     };
};