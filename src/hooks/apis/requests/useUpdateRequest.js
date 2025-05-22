import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateRequestStatus } from '../../../api/request/request';
import { useAuthContext } from '../../context/useContext';

export const useUpdateRequestStatus = () => {
  const { auth } = useAuthContext();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ softwareId, status }) =>
      updateRequestStatus({ token: auth?.token, softwareId, status }),
    onSuccess: () => {
      queryClient.invalidateQueries(['allRequests']); // Refresh data
    }
  });
};
