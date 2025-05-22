import  { useState } from 'react';
import { useSoftwareCreation } from '../hooks/apis/softwares/useCreateSoftware';
import { useNavigate } from 'react-router-dom';

const accessOptions = ['Read', 'Write', 'Admin'];

const CreateSoftwarePage = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    accessLevels: [],
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const { createSoftwareMutation } = useSoftwareCreation();

  const handleCheckboxChange = (level) => {
    setForm((prev) => ({
      ...prev,
      accessLevels: prev.accessLevels.includes(level)
        ? prev.accessLevels.filter((l) => l !== level)
        : [...prev.accessLevels, level],
    }));
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!form.name || !form.description || form.accessLevels.length === 0) {
      setError('All fields are required including at least one access level.');
      return;
    }

    try {
       await createSoftwareMutation({
        name: form.name,
        description: form.description,
        accessLevels: form.accessLevels,
      })
      setSuccess('Software created successfully!');
      setTimeout(() => navigate('/software'), 1000);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Create New Software</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-600 mb-4">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Software Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Access Levels</label>
            <div className="flex gap-4 flex-wrap">
              {accessOptions.map((level) => (
                <label key={level} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value={level}
                    checked={form.accessLevels.includes(level)}
                    onChange={() => handleCheckboxChange(level)}
                    className="mr-2"
                  />
                  {level}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Create Software
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateSoftwarePage;
