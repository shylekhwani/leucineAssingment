const SoftwareCard = ({ software }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg border hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{software.name} ID:{software.id}</h3>
      <p className="text-gray-600 mb-3">{software.description}</p>
      <div className="text-sm text-gray-500">
        <span className="font-medium text-gray-700">Access Levels:</span>{" "}
        {software.accessLevels.join(", ")}
      </div>
    </div>
  );
};

export default SoftwareCard;
