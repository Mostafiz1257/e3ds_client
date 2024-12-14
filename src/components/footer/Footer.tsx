import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Social Icons */}
          <div>
            <div className="text-2xl font-bold mb-4">EAGLE 3D STREAMING</div>
            <div className="flex space-x-4">
              <FaLinkedin className="hover:text-blue-500 cursor-pointer" size={24} />
              <FaYoutube className="hover:text-red-500 cursor-pointer" size={24} />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" size={24} />
              <FaFacebook className="hover:text-blue-700 cursor-pointer" size={24} />
              <FaGithub className="hover:text-gray-500 cursor-pointer" size={24} />
            </div>
            <div className="mt-4 text-sm">Email: info@eagle3dstreaming.com</div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="text-blue-400 font-bold mb-4">ABOUT</h3>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Company</li>
              <li>Industry</li>
              <li>Partners</li>
              <li>Culture & Values</li>
              <li>Career</li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-400 font-bold mb-4">PRODUCTS</h3>
            <ul className="space-y-2 text-sm">
              <li>Self-Serve Pixel Streaming</li>
              <li>Enterprise</li>
              <li>Full Stack Development</li>
              <li>Pricing</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-400 font-bold mb-4">SOLUTIONS</h3>
            <ul className="space-y-2 text-sm">
              <li>Enterprise</li>
              <li>AEC</li>
              <li>Automotive</li>
              <li>Virtual Events</li>
              <li>Aerospace & Defence</li>
              <li>Metaverse</li>
              <li>Digital Twin</li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-400 font-bold mb-4">RESOURCES</h3>
            <ul className="space-y-2 text-sm">
              <li>Our Podcast</li>
              <li>Spotlights</li>
              <li>Developer Series</li>
              <li>Blog</li>
              <li>Events</li>
              <li>Documentation</li>
              <li>FAQ</li>
              <li>Forum</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>Privacy Policy</p>
          <p className="mt-2">Copyright © 2024. Eagle 3D Streaming.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
