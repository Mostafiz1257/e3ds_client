"use client";
import { useDeleteJobPostMutation } from "@/src/redux/features/admin/jobApi";
import Link from "next/link";
import { FaUserFriends, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { toast } from "sonner";

const ReviewJob = ({ post }) => {


  const [deleteJobPost, { isLoading }] = useDeleteJobPostMutation();

  const handleDelete = async (id) => {
    try {
      await deleteJobPost(id).unwrap();
      toast.success("Post has been Deleted");
    } catch (error) {
      toast.error("Something is wrong");
    }
  };

  return (
    <div className=''>
      <div className='hover:border-blue-700 transition duration-200 mt-3 text-white p-6 rounded-lg border border-gray-700 shadow-lg max-w-5xl mx-auto'>
        {/* Job Title */}
        <h2 className='text-2xl font-bold mb-4'>{post?.title}</h2>

        {/* Job Details */}
        <div className='flex justify-between items-center'>
          {/* Job Type and Location */}
          <div className='flex items-center text-blue-400'>
            <FaUserFriends className='mr-2' />
            <span>{post?.jobType} , Remote </span>
          </div>

          <div className='flex'>
            {/* View Job */}
            <Link href={`/career-apply/${post?._id}`} passHref>
              <div className='flex items-center text-teal-400 cursor-pointer'>
                <FaEye className='mr-2' />
                <span className='mr-2'>view</span>
              </div>
            </Link>

            {/* Update Job */}
            <Link href={`/career-apply/${post?._id}`} passHref>
              <div className='flex items-center text-blue-400 cursor-pointer'>
                <FaEdit className='mr-2' />
                <span className='mr-2'>update</span>
              </div>
            </Link>

            {/* Delete Job */}
            <div
              onClick={() => handleDelete(post?._id)} // Pass the id explicitly
              className='flex items-center text-red-400 cursor-pointer'
            >
              <FaTrash className='mr-2' />
              <span className='mr-2'>Delete</span>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewJob;
