"use client";
import { currentUser } from "@/src/redux/features/auth/authSlice";
import { useAppSelector } from "@/src/redux/hooks";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const user = useAppSelector(currentUser);
  console.log(user?.role);
  return (
    <nav className='bg-black shadow-md sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Logo */}
        <Link href={"/"}>
          <div className='text-2xl font-bold text-white'>E3DS</div>
        </Link>

        {/* Navigation Links */}
        <ul className='hidden md:flex space-x-8 text-white font-medium'>
          <Link href={"/"}>
            <li className='hover:text-[#003580] cursor-pointer'>Home</li>
          </Link>

          <li className='hover:text-[#003580] cursor-pointer'>Products</li>
          <li className='hover:text-[#003580] cursor-pointer'>Pricing</li>
          <li className='hover:text-[#003580] cursor-pointer'>Solutions</li>
          <li className='hover:text-[#003580] cursor-pointer'>Resources</li>
          <li className='hover:text-[#003580] cursor-pointer'>Support</li>
          {user && user.role == "admin" ? (
            <Link href={"/admin"}>
              <li className='hover:text-blue-800 border border-1 px-3 rounded-full  border-blue-700 text-blue-700 cursor-pointer'>Admin</li>
            </Link>
          ) : (
            <></>
          )}
        </ul>

        {/* Social Icons */}
        <div className='flex space-x-4 text-white items-center justify-center'>
          <FaFacebook
            className='hover:text-[#003580] cursor-pointer'
            size={20}
          />
          <FaTwitter
            className='hover:text-[#003580] cursor-pointer'
            size={20}
          />
          <FaInstagram
            className='hover:text-[#003580] cursor-pointer'
            size={20}
          />
          <FaLinkedin
            className='hover:text-[#003580] cursor-pointer'
            size={20}
          />
          <Link href={"/login"}>
            <button className='px-4 py-2 bg-blue-600 rounded-3xl hover:bg-blue-700 transition duration-300'>
              Login Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center'>
          <button
            className='text-gray-700 focus:outline-none'
            aria-label='Open menu'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
