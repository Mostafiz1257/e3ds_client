import React from "react";

const VideoSection = () => {
  return (
    <section className="text-white py-16 ">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Shape the Future of Cloud Gaming with Eagle 3D Streaming
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Create groundbreaking gaming experiences accessible from any device,
          anywhere in the world. Harness the power of Unreal Engine and cloud
          technology to stream high-quality gameplay, from immersive VR to
          interactive web platforms.
        </p>
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Watch Our Presentation from Unreal Fest 2022 👇
        </h2>
        <div className="relative pb-[56.25%] mb-6 overflow-hidden rounded-lg w-full">
          <iframe
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            src="https://www.youtube.com/embed/I46ixY139J4"
            title="Unreal Engine in the Cloud | Unreal Fest 2022"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
