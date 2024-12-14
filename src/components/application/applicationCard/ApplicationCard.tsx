import React from "react";
import { FaTrash, FaEye } from "react-icons/fa";

const ApplicationCard = ({ application, onDelete, onView }) => {
  return (
    <div className="text-white border border-gray-700 hover:border-blue-700 rounded-lg p-4 shadow-md mt-2">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {/* Left Content */}
        <div className="sm:w-1/3">
          <h2 className="text-lg font-bold">{application?.name}</h2>
          <p className="text-blue-400 text-sm mt-1">{application?.jobPost?.title} application</p>
        </div>

        {/* Centered Resume Link with Fixed Padding */}
        <div className="flex justify-center sm:w-1/3 px-6 py-2">
          {application?.resume ? (
            <a
              href={application.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 no-underline"
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
          <button
            className="flex items-center gap-1 text-teal-700 text-white rounded-md transition-all duration-200"
            onClick={() => onView(application)}
          >
            <FaEye /> View
          </button>

          {/* Delete Button */}
          <button
            className="flex items-center gap-1 text-pink-700 text-white rounded-md transition-all duration-200"
            onClick={() => onDelete(application?._id)}
          >
            <FaTrash /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
