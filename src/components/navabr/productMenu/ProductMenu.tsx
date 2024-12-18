
import React, { useState } from "react";

const ProductMenu
 = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='relative group'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='hover:text-[#003580] cursor-pointer'>Products</div>

      {isHovered && (
        <div className='absolute left-0 w-48 bg-black text-white  p-4 shadow-lg rounded-xl space-y-4'>
          <div className='hover:text-[#003580] cursor-pointer'>Full stack Developement</div>
          <div className='hover:text-[#003580] cursor-pointer'>Enterprise</div>
          <div className='hover:text-[#003580] cursor-pointer'>Self Service Pixel Straming</div>
        </div>
      )}
    </div>
  );
};

export default ProductMenu
;
