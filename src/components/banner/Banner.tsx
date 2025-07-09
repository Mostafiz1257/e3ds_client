import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div
      className='relative w-full h-[600px] bg-cover bg-center'
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1682432982609-578969ff8b75?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlJTIwbWFufGVufDB8fDB8fHww')",
      }}
    >
      <div className='absolute inset-0 h-full bg-black opacity-40' />
      <div className='relative z-10 flex flex-col items-start justify-center w-full h-full px-8'>
        <h1 className='text-5xl font-bold mb-4'>BE EAGLE</h1>
        <p className='text-xl font-bold w-1/2 mb-6'>
          Being a part of Eagle means being a part of a highly supportive team
          that innovates daily in a new and cutting-edge field.
        </p>
        <Link href={"/career-apply"}>
          <button className='px-4 py-2 bg-blue-600 rounded-3xl hover:bg-blue-700 transition duration-300'>
            Open Position
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
