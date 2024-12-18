
import React, { useState } from "react";

const AboutMenu = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='relative group'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='hover:text-[#003580] cursor-pointer'>About</div>

      {isHovered && (
        <div className='absolute left-0 w-48 bg-black text-white  p-4 shadow-lg rounded-xl space-y-4'>
          <div className='hover:text-[#003580] cursor-pointer'>Our Mission</div>
          <div className='hover:text-[#003580] cursor-pointer'>Our Team</div>
          <div className='hover:text-[#003580] cursor-pointer'>Our History</div>
        </div>
      )}
    </div>
  );
};

export default AboutMenu;
