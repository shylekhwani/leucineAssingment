import { useGetAllSoftwares } from '../hooks/apis/softwares/useGetAllSoftware';
import SoftwareCard from '../components/software/softwareCard';

const SoftwareListPage = () => {
  const { isFetching, error, softwares } = useGetAllSoftwares();
  // console.log(softwares);

  if (isFetching) return <p className="p-6">Loading softwares...</p>;
  if (error) return <p className="text-red-500 p-6">Failed to fetch softwares: {error.message}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">All Available Softwares</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {softwares?.data?.map((software) => (
          <SoftwareCard key={software.id} software={software} />
        ))}
      </div>
    </div>
  );
};

export default SoftwareListPage;
