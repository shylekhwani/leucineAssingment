import { useQuery } from "@tanstack/react-query";
import { getAllSoftwareRequest } from "../../../api/software/software";

export const useGetAllSoftwares = function () {

    const {isFetching, isSuccess, error, data: softwares} = useQuery({
     queryKey: ['softwares'],
     queryFn: () => getAllSoftwareRequest(),
     staleTime: 30000
    });

    return {
     isFetching,
     isSuccess, 
     error,
     softwares
    };
};