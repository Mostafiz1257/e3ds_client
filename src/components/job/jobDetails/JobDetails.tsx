import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

interface JobDetailsProps {
  data: {
    _id: string;
    title: string;
    description: string;
    requirements: string[];
    location: string;
    salaryRange: string;
    jobType: string;
    postedBy: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

const JobDetails: React.FC<JobDetailsProps> = ({ data }) => {
  return (
    <div className='max-w-4xl mx-auto p-6 shadow-md rounded-lg '>
      <h1 className='text-3xl font-bold mb-4'>{data.title}</h1>
      <p className=' text-lg mb-4'>{data.description}</p>

      <div className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>Requirements:</h2>
        <ul className='list-disc pl-6  space-y-2'>
          {data.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className='flex items-center'>
          <FaMapMarkerAlt className='text-blue-500 mr-2' />
          <div>
            <h3 className='text-lg font-medium '>Location:</h3>
            <p className=''>{data.location}</p>
          </div>
        </div>
        <div className='flex items-center'>
          <div>
            <h3 className='text-lg font-medium '>Salary Range:</h3>
            <p className=''>{data.salaryRange}</p>
          </div>
        </div>
        <div className='flex items-center'>
          <FaBriefcase className='text-yellow-500 mr-2' />
          <div>
            <h3 className='text-lg font-medium '>Job Type:</h3>
            <p className=''>{data.jobType} (Remote)</p>
          </div>
        </div>
        <div className='flex items-center'>
          <div>
            <h3 className='text-lg font-medium '>Posted On:</h3>
            <p className=''>{new Date(data.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      <div className='mt-6 flex items-center'>
        {data.isActive ? (
          <FaCheckCircle className='text-green-500 mr-2' />
        ) : (
          <FaTimesCircle className='text-red-500 mr-2' />
        )}
        <p
          className={`inline-block px-4 py-2 text-sm font-medium rounded ${
            data.isActive
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {data.isActive ? "Active" : "Inactive"}
        </p>
      </div>
    </div>
    
  );
};

export default JobDetails;
