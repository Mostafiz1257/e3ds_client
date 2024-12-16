"use client";
import Link from "next/link";
import React from "react";
import { FaTrash, FaEye } from "react-icons/fa";
import { toast } from "sonner";

import { useDeleteApplicationMutation } from "@/src/redux/features/admin/applicationApi";

const ApplicationCard = ({ application }: any) => {
  const [deleteApplication, { isLoading }] = useDeleteApplicationMutation();

  const handleDelete = async () => {
    try {
      await deleteApplication(application._id).unwrap();
      toast.success("Application deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete the application. Please try again.");
    }
  };

  return (
    <div className="text-white border border-gray-700 hover:border-blue-700 rounded-lg p-4 shadow-md mt-2">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {/* Left Content */}
        <div className="sm:w-1/3">
          <h2 className="text-lg font-bold">{application?.name}</h2>
          <p className="text-blue-400 text-sm mt-1">
            {application?.jobPost?.title} application
          </p>
        </div>

        {/* Centered Resume Link */}
        <div className="flex justify-center sm:w-1/3 px-6 py-2">
          {application?.resume ? (
            <a
              className="text-blue-500 no-underline"
              href={application.resume}
              rel="noopener noreferrer"
              target="_blank"
            >
              Resume
            </a>
          ) : (
            <p className="text-gray-400">No resume provided</p>
          )}
        </div>

        {/* Right Buttons */}
        <div className="flex gap-3 sm:w-1/3 justify-start sm:justify-end mt-2 sm:mt-0">
          {/* View Button */}
          <Link href={`/admin/applications/${application._id}`}>
            <button className="flex items-center gap-1 text-teal-400 rounded-md transition-all duration-200">
              <FaEye /> View
            </button>
          </Link>

          {/* Delete Button */}
          <button
            className="flex items-center gap-1 text-pink-500 rounded-md transition-all duration-200"
            disabled={isLoading}
            onClick={handleDelete}
          >
            <FaTrash />
            {isLoading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
