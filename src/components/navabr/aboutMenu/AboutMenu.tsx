import React, { useState } from "react";

const AboutMenu = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`cursor-pointer mb-6 ${isHovered ? "text-blue-700" : "hover:text-blue-700"}`}>
        About
      </div>

      {isHovered && (
        <div className="absolute -left-10 w-64 bg-blue-700 text-white px-4 py-2 shadow-lg rounded-xl space-y-4">
          <div className="hover:text-[#003580] cursor-pointer">Our Mission</div>
          <div className="hover:text-[#003580] cursor-pointer">Our Team</div>
          <div className="hover:text-[#003580] cursor-pointer">Our History</div>
        </div>
      )}
    </div>
  );
};

export default AboutMenu;