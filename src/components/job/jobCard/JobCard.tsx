import Link from "next/link";
import { FaUserFriends } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const JobCard = ({ post }) => {
  return (
    <div className=''>
      <div className=' hover:border-blue-700 transition duration-200 mt-3 text-white p-6 rounded-lg border border-gray-700 shadow-lg max-w-5xl mx-auto'>
        {/* Job Title */}
        <h2 className='text-2xl font-bold mb-4'>{post?.title}</h2>

        {/* Job Details */}
        <div className='flex justify-between items-center'>
          {/* Job Type and Location */}
          <div className='flex items-center text-blue-400'>
            <FaUserFriends className='mr-2' />
            <span>{post?.jobType} , Remote </span>
          </div>

          {/* Apply Link */}
          <Link href={`/career-apply/${post?._id}`} passHref>
            <div
              className='flex items-center text-blue-400 cursor-pointer'
              target='_blank'
            >
              <span className='mr-2'>Apply</span>
              <FiArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
