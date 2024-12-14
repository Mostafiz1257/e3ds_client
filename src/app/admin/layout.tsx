"use client";

import { FaHome, FaPlus, FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-scree ">
      {/* Sidebar Section */}
      <div className="flex flex-col justify-between  text-white w-16 lg:w-64 bg-gray-950 h-screen ">
        {/* Top Section: Brand */}
        <div className="flex flex-col items-center lg:items-start py-2 lg:pt-6">
          <p className="hidden lg:block text-2xl font-bold text-white px-4">E3DS Admin Panel</p>
          <p className="block lg:hidden text-xl font-bold text-white">JP</p>
        </div>

        {/* Middle Section: Navigation Links */}
        <nav className="flex-1 flex flex-col items-center lg:items-start space-y-2 mt-10 lg:mt-16">
          <Link href="/admin/create-job" className="group w-full">
            <div className="flex flex-col lg:flex-row items-center w-full px-4 py-2 lg:py-2 hover:bg-gray-800 rounded-md transition">
              <FaPlus size={24} className="text-white group-hover:text-blue-500" />
              <span className="hidden lg:block ml-4 text-white group-hover:text-blue-500">Create Job</span>
            </div>
          </Link>

          <Link href="/admin/all-jobs" className="group w-full">
            <div className="flex flex-col lg:flex-row items-center w-full px-4 py-2 lg:py-3 hover:bg-gray-800 rounded-md transition">
              <MdWorkOutline size={24} className="text-white group-hover:text-blue-500" />
              <span className="hidden lg:block ml-4 text-white group-hover:text-blue-500">All Jobs</span>
            </div>
          </Link>

          <Link href="/admin/applications" className="group w-full">
            <div className="flex flex-col lg:flex-row items-center w-full px-4 py-2 lg:py-3 hover:bg-gray-800 rounded-md transition">
              <FaClipboardList size={24} className="text-white group-hover:text-blue-500" />
              <span className="hidden lg:block ml-4 text-white group-hover:text-blue-500">Applications</span>
            </div>
          </Link>

          <Link href="/" className="group w-full">
            <div className="flex flex-col lg:flex-row items-center w-full px-4 py-2 lg:py-3 hover:bg-gray-800 rounded-md transition">
              <FaHome size={24} className="text-white group-hover:text-blue-500" />
              <span className="hidden lg:block ml-4 text-white group-hover:text-blue-500">Home</span>
            </div>
          </Link>

          <Link href="/logout" className="group w-full">
            <div className="flex flex-col lg:flex-row items-center w-full px-4 py-2 lg:py-3 hover:bg-gray-800 rounded-md transition">
              <FaSignOutAlt size={24} className="text-white group-hover:text-red-500" />
              <span className="hidden lg:block ml-4 text-white group-hover:text-red-500">Logout</span>
            </div>
          </Link>
        </nav>

        {/* Footer Section */}
        <div className="flex flex-col items-center lg:items-start py-4">
          <p className="hidden lg:block text-sm text-gray-400 px-4">© 2024 JobPortal</p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex-1  overflow-auto p-6">

        {children}
      </div>
    </div>
  );
};

export default layout;
