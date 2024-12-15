"use client";

import { FaHome, FaPlus, FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";

import { useAppDispatch } from "@/src/redux/hooks";
import { logout } from "@/src/redux/features/auth/authSlice";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Your account is logout.");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className='flex h-screen'>
      {/* Sidebar Section */}
      <div
        className={`flex flex-col justify-between bg-gray-950 h-full transition-width duration-300 ${
          isSidebarOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Top Section: Brand and Toggle Icon */}
        <div className='flex items-center justify-between px-4 py-4 border-b border-gray-800'>
          <p
            className={`text-2xl font-bold text-white transition-opacity duration-300 ${
              isSidebarOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            E3DS Admin
          </p>
          <button
            className='text-white hover:text-blue-500'
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>

        {/* Middle Section: Navigation Links */}
        <nav className='flex-1 flex flex-col mt-6 space-y-2'>
          <Link className='group w-full' href='/admin/create-job'>
            <div className='flex items-center px-4 py-2 hover:bg-gray-800 rounded-md transition'>
              <FaPlus
                className='text-white group-hover:text-blue-500'
                size={24}
              />
              {isSidebarOpen && (
                <span className='ml-4 text-white group-hover:text-blue-500'>
                  Create Job
                </span>
              )}
            </div>
          </Link>

          <Link className='group w-full' href='/admin/all-jobs'>
            <div className='flex items-center px-4 py-2 hover:bg-gray-800 rounded-md transition'>
              <MdWorkOutline
                className='text-white group-hover:text-blue-500'
                size={24}
              />
              {isSidebarOpen && (
                <span className='ml-4 text-white group-hover:text-blue-500'>
                  All Jobs
                </span>
              )}
            </div>
          </Link>

          <Link className='group w-full' href='/admin/applications'>
            <div className='flex items-center px-4 py-2 hover:bg-gray-800 rounded-md transition'>
              <FaClipboardList
                className='text-white group-hover:text-blue-500'
                size={24}
              />
              {isSidebarOpen && (
                <span className='ml-4 text-white group-hover:text-blue-500'>
                  Applications
                </span>
              )}
            </div>
          </Link>

          <div className='border-t border-gray-800 my-4' />

          {/* Bottom Section: Home and Logout */}
          <Link className='group w-full mt-auto' href='/'>
            <div className='flex items-center px-4 py-2 hover:bg-gray-800 rounded-md transition'>
              <FaHome
                className='text-white group-hover:text-blue-500'
                size={24}
              />
              {isSidebarOpen && (
                <span className='ml-4 text-white group-hover:text-blue-500'>
                  Home
                </span>
              )}
            </div>
          </Link>
          <Link href={"/"}>
            <button
              className='group w-full px-4 py-2 mt-2 hover:bg-gray-800 rounded-md transition flex items-center'
              onClick={handleLogout}
            >
              <FaSignOutAlt
                className='text-white group-hover:text-red-500'
                size={24}
              />
              {isSidebarOpen && (
                <span className='ml-4 text-white group-hover:text-red-500'>
                  Logout
                </span>
              )}
            </button>
          </Link>
        </nav>

        {/* Footer Section */}
        {isSidebarOpen && (
          <div className='flex justify-center items-center py-4 border-t border-gray-800'>
            <p className='text-sm text-gray-400'>© 2024 JobPortal</p>
          </div>
        )}
      </div>

      {/* Main Content Section */}
      <div className='flex-1 overflow-auto p-6'>{children}</div>
    </div>
  );
};

export default Layout;
