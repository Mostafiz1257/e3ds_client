import { FaEnvelope, FaArrowRight } from "react-icons/fa";

const CareerSection = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-16 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Heading & Text */}
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold text-gray-100 tracking-wide leading-tight">
            Shape the Future of Streaming with Us
          </h1>
          <p className="text-lg text-gray-400 font-medium">
            We’re looking for passionate individuals to join our team at Eagle
            3D Streaming. Our mission is to innovate and redefine streaming
            technology. If you’re ready to be part of something exciting, we
            want to hear from you.
          </p>

          {/* <button className="px-4 py-2 bg-blue-600 rounded-3xl hover:bg-blue-700 transition duration-300">
            Apply Now
          </button> */}
        </div>

        {/* Right side - Contact Information */}
        <div className="space-y-4 p-6 bg-[#1a1a1a] rounded-lg">
          <h2 className="text-xl font-semibold text-white">
            Got More Questions?
          </h2>
          <p className="text-lg text-gray-400">
            Feel free to reach out to us directly at:
          </p>
          <div className="flex items-center space-x-4 text-gray-300">
            <FaEnvelope className="h-6 w-6" />
            <p className="text-lg">career@eagle3dstreaming.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaArrowRight className="h-6 w-6" />
            <p className="text-lg">Submit your application and portfolio!</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 rounded-3xl hover:bg-blue-700 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
