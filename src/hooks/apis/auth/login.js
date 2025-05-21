
import { useMutation } from "@tanstack/react-query";

import { loginRequest } from "../../../api/auth/auth";
import { useAuthContext } from "../../context/useContext";


export const useLogin = function() {

    const { setAuth } = useAuthContext();

    const {isPending, isSuccess, error, mutateAsync: loginMutation} = useMutation({

        mutationFn: loginRequest,
        onSuccess: (response) => {
            console.log('Sucessfully Loged In', response);

            const userObject = JSON.stringify(response.data);
            // Convert the user data returned from the API (response.data) into a JSON string format. 
            // This is necessary because localStorage only supports string values.

            localStorage.setItem('user', userObject);
            // Store the serialized user object in localStorage under the key 'user'. 
            // This allows the app to persist user information across sessions, even after page reloads or browser restarts.

            localStorage.setItem('token', response.data.token);
            // Save the token separately for API calls. Access it directly from the original `response.data` object.

            setAuth({
                user: response.data,
                token: response.data.token,
                isLoading: false
            });
        },
        onError: (error) => {
            console.error('Failed to signUp', error);
        }

     });
        return {
            isPending,
            isSuccess,
            error,
            loginMutation
        };
};
