import React from "react";

const ParallaxSection = () => {
  return (
    <div
      className="parallax-container relative w-full h-[600px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1682432982609-578969ff8b75?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlJTIwbWFufGVufDB8fDB8fHww')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 h-full bg-black opacity-40" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-8 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">
          WHAT IS IT LIKE WORKING AT EAGLE?
        </h1>
        <p className="text-lg font-semibold w-3/4 mb-6">
          We encourage each other to be the best we can all be and always give
          appreciation to new ideas and proactiveness. Eagle is a remote team
          with members all of the world. We allow you to set your own hours and
          work within your time zone from anywhere in the world. We are a
          friendly group that loves to wake up every day and build an
          infrastructure that will help serve key industries like Architectural,
          Entertainment, Finance, Engineering & Digital Twins, Energy, and
          Metaverse for decades to come.
        </p>
      </div>
    </div>
  );
};

export default ParallaxSection;
