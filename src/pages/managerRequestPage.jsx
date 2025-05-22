import { useAllRequests } from '../hooks/apis/requests/useAllRequest';
import { useUpdateRequestStatus } from '../hooks/apis/requests/useUpdateRequest';

const ManagerRequestsPage = () => {
  const { data: requests, isLoading, error } = useAllRequests();
  const { mutate: updateStatus, isLoading: updating } = useUpdateRequestStatus();

  console.log('Requests:', requests);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading requests</p>;

  const handleStatusUpdate = (id, status) => {
    updateStatus({ softwareId: id, status });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Access Requests</h2>
      <div className="space-y-4">
        {requests?.data?.map(req => (
          <div key={req.id} className="p-4 border rounded shadow">
            <p><strong>Employee:</strong> {req.user.username}</p>
            <p><strong>Software:</strong> {req.software.name}</p>
            <p><strong>Access Type:</strong> {req.accessType}</p>
            <p><strong>Reason:</strong> {req.reason}</p>
            <p><strong>Status:</strong> {req.status}</p>

            {req.status === 'Pending' && (
              <div className="space-x-2 mt-2">
                <button
                  onClick={() => handleStatusUpdate(req.id, 'Approved')}
                  className="px-4 py-1 bg-green-600 text-white rounded"
                  disabled={updating}
                >
                  Approve
                </button>
                <button
                  onClick={() => handleStatusUpdate(req.id, 'Rejected')}
                  className="px-4 py-1 bg-red-600 text-white rounded"
                  disabled={updating}
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagerRequestsPage;
