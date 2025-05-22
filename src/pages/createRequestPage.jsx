import { useState } from 'react';
import { useCreateRequest } from '../hooks/apis/requests/useCreateRequests';
import { useGetAllSoftwares } from '../hooks/apis/softwares/useGetAllSoftware';

const RequestAccessPage = () => {
  const [form, setForm] = useState({
    softwareId: '',
    accessType: '',
    reason: '',
  });

  const { softwares, isFetching } = useGetAllSoftwares();
  const { submitRequest, isPending, isSuccess, error } = useCreateRequest();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.softwareId || !form.accessType || !form.reason) {
      alert("All fields are required");
      return;
    }

    try {
      await submitRequest({
        softwareId: Number(form.softwareId),
        accessType: form.accessType,
        reason: form.reason,
      });

      alert("Request submitted successfully");
      setForm({ softwareId: '', accessType: '', reason: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex justify-center">
      <div className="bg-white p-8 rounded shadow max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-6">Request Software Access</h2>

        {error && <p className="text-red-500 mb-4">{error.message}</p>}
        {isSuccess && <p className="text-green-500 mb-4">Request submitted successfully!</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700 mb-2">Select Software</label>
            <select
              name="softwareId"
              value={form.softwareId}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            >
              <option value="">-- Select Software --</option>
              {!isFetching &&
                softwares?.data?.map((sw) => (
                  <option key={sw.id} value={sw.id}>
                    {sw.name}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">Access Type</label>
            <select
              name="accessType"
              value={form.accessType}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            >
              <option value="">-- Select Access Type --</option>
              <option value="Read">Read</option>
              <option value="Write">Write</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">Reason</label>
            <textarea
              name="reason"
              value={form.reason}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            {isPending ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestAccessPage;
