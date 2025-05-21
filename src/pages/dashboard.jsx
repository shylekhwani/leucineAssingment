import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/context/useContext';

const Dashboard = () => {
  const { auth } = useAuthContext();
  const navigate = useNavigate();

  console.log('User:', auth);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Welcome, {auth?.user?.username}!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Role: <span className="font-semibold">{auth?.user?.role}</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Common Button */}
          <button
            onClick={() => navigate('/software')}
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            View Available Software
          </button>

          {/* Admin-only */}
          {auth?.user?.role === 'Admin' && (
            <button
              onClick={() => navigate('/create-software')}
              className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition"
            >
              Create New Software
            </button>
          )}

          {/* Employee-only */}
          {auth?.user?.role === 'Employee' && (
            <>
              <button
                onClick={() => navigate('/request-access')}
                className="w-full bg-purple-500 text-white py-3 px-4 rounded-lg hover:bg-purple-600 transition"
              >
                Request Software Access
              </button>
              <button
                onClick={() => navigate('/my-requests')}
                className="w-full bg-yellow-500 text-white py-3 px-4 rounded-lg hover:bg-yellow-600 transition"
              >
                My Access Requests
              </button>
            </>
          )}

          {/* Manager-only */}
          {auth?.user?.role === 'Manager' && (
            <button
              onClick={() => navigate('/manage-requests')}
              className="w-full bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition"
            >
              Manage Access Requests
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
