"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useAppSelector } from "@/src/redux/hooks";
import { currentUser } from "@/src/redux/features/auth/authSlice";
import ShowAdmin from "./ShowAdmin";
import AboutMenu from "./aboutMenu/AboutMenu";
import ProductMenu from "./productMenu/ProductMenu";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const user = useAppSelector(currentUser);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800); // Adjust breakpoint if needed
    };

    handleResize(); // Call on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsSidebarOpen(false);
    }
  }, [isMobile]);

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  if (!isClient) return null;

  const buttonStyles =
    "w-full px-4 py-2 bg-blue-600 rounded-3xl hover:bg-blue-700 text-white transition duration-300 text-center";

  const smallDeviceButtonStyles = "px-4 py-2 mb-2 text-white rounded-3xl";

  return (
    <nav className='bg-black shadow-md sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Logo */}
        <Link href={"/"}>
          <div className='text-2xl font-bold text-white'>E3DS</div>
        </Link>

        <ul className='hidden md:flex space-x-8 text-white font-medium'>
          <Link href={"/"}>
            <li className='hover:text-[#003580] cursor-pointer'>Home</li>
          </Link>
          <AboutMenu />
          <ProductMenu/>
          <li className='hover:text-[#003580] cursor-pointer'>Pricing</li>
         
          <li className='hover:text-[#003580] cursor-pointer'>Resources</li>
          <li className='hover:text-[#003580] cursor-pointer'>Support</li>
          <ShowAdmin />
        </ul>

        <div className='hidden md:flex space-x-4 items-center'>
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
          <button className={buttonStyles}>Stream</button>
          {!user && (
            <Link href='/login' className={buttonStyles}>
              Login
            </Link>
          )}
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className='md:hidden flex items-center'>
          <button
            aria-label='Open menu'
            className='text-white focus:outline-none'
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4 6h16M4 12h16m-7 6h7'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 w-2/3 h-full bg-black text-white transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <button
          className='text-gray-300 p-4 focus:outline-none'
          onClick={handleCloseSidebar}
        >
          ✖
        </button>
        <ul className='space-y-6 mt-10 text-lg font-medium px-4'>
          <Link href={"/"} onClick={handleCloseSidebar}>
            <li className='hover:text-[#003580] cursor-pointer'>Home</li>
          </Link>
          <li className='hover:text-[#003580] cursor-pointer'>Products</li>
          <li className='hover:text-[#003580] cursor-pointer'>Pricing</li>
          <li className='hover:text-[#003580] cursor-pointer'>Solutions</li>
          <li className='hover:text-[#003580] cursor-pointer'>Resources</li>
          <li className='hover:text-[#003580] cursor-pointer'>Support</li>
          <ShowAdmin />
        </ul>
        <div className='flex space-x-4 mt-10 px-4'>
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
        </div>
        <div className='px-4 mt-6'>
          <button
            className={`${smallDeviceButtonStyles} bg-blue-600 hover:bg-blue-700`}
          >
            Stream
          </button>
          {!user && (
            <Link
              href='/login'
              onClick={handleCloseSidebar}
              className={`${smallDeviceButtonStyles} bg-blue-600 hover:bg-blue-700`}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
