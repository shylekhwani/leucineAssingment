import { useQuery } from '@tanstack/react-query';
import { getAllRequestsForManager } from '../../../api/request/request';
import { useAuthContext } from '../../context/useContext';

export const useAllRequests = () => {
  const { auth } = useAuthContext();
  const token = auth?.token;

  return useQuery({
    queryKey: ['allRequests'],
    queryFn: () => getAllRequestsForManager(token),
    enabled: !!token,
    staleTime: 30000
  });
};
