"use client";
import Link from "next/link";
import { FaUserFriends, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { toast } from "sonner";
import { Button } from "@nextui-org/button";

import { useDeleteJobPostMutation } from "@/src/redux/features/admin/jobApi";

const ReviewJob = ({ post }: any) => {
  const [deleteJobPost] = useDeleteJobPostMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteJobPost(id).unwrap();
      toast.success("Post has been Deleted");
    } catch (error) {
      toast.error("Something is wrong");
    }
  };

  return (
    <div className="">
      <div className="hover:border-blue-700 transition duration-200 mt-3 text-white p-6 rounded-lg border border-gray-700 shadow-lg max-w-5xl mx-auto">
        {/* Job Title */}
        <h2 className="text-2xl font-bold mb-4">{post?.title}</h2>

        {/* Job Details */}
        <div className="flex justify-between items-center">
          {/* Job Type and Location */}
          <div className="flex items-center text-blue-400">
            <FaUserFriends className="mr-2" />
            <span>{post?.jobType} , Remote </span>
          </div>

          <div className="flex md:gap-1">
            {/* View Job */}
            <Link passHref href={`/career-apply/${post?._id}`}>
              <Button className="rounded-full" color="success" size="sm">
                <FaEye />
                <span className="text-white">view</span>
              </Button>
            </Link>

            {/* Update Job */}
            <Link passHref href={`/admin/all-jobs/${post?._id}`}>
              <Button className="rounded-full" color="primary" size="sm">
                <FaEdit />
                <span>update</span>
              </Button>
            </Link>

            {/* Delete Job */}
            <Button
              className="rounded-full"
              color="danger"
              size="sm"
              onClick={() => handleDelete(post?._id)}
            >
              <FaTrash />
              <span>Delete</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewJob;
