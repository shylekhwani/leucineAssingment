import { useGetRequestByUser } from "../hooks/apis/requests/useGetRequestByUser";

const MyRequestsPage = () => {
  const { requests, isFetching, isError, error } = useGetRequestByUser();
//   console.log("requests", requests);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">My Access Requests</h2>

      {isFetching && <p>Loading your requests...</p>}
      {isError && <p className="text-red-600">Error: {error?.message}</p>}

      {requests?.length === 0 && (
        <p className="text-gray-600">You haven’t submitted any access requests yet.</p>
      )}

      <div className="space-y-4">
        {requests?.data?.map((req) => (
          <div
            key={req.id}
            className="border rounded p-4 shadow flex justify-between items-start bg-white"
          >
            <div>
              <h3 className="text-lg font-semibold">{req.software.name}</h3>
              <p className="text-sm text-gray-700 mt-1">
                <strong>Access Type:</strong> {req.accessType}
              </p>
              <p className="text-sm text-gray-700 mt-1">
                <strong>Reason:</strong> {req.reason}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                <strong>Submitted:</strong> {new Date(req.createdAt).toLocaleString()}
              </p>
            </div>
            <div
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                req.status === "Approved"
                  ? "bg-green-100 text-green-700"
                  : req.status === "Rejected"
                  ? "bg-red-100 text-red-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {req.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRequestsPage;
