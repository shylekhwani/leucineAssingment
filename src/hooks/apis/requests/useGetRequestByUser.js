import { useQuery } from "@tanstack/react-query";

import { getAccessByCurrentUserRequest } from "../../../api/request/request";
import { useAuthContext } from "../../context/useContext";

export const useGetRequestByUser = function () {
    const { auth } = useAuthContext();
    console.log('auth', auth);
    const token = auth?.token;

    const {isFetching, isSuccess, error, data: requests} = useQuery({
     queryKey: ['getAllRequestsOfUser', token],
     queryFn: () => getAccessByCurrentUserRequest({ token }),
     staleTime: 30000,
     enabled: !!token,
    });

    return {
     isFetching,
     isSuccess, 
     error,
     requests
    };
};