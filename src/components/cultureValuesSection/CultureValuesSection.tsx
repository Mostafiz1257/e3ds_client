import React from 'react';
import { FaRocket, FaLightbulb } from 'react-icons/fa';

const CultureValuesSection = () => {
  return (
    <section className="bg-black  py-16">
      <div className="container mx-auto px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">CORPORATE INTEGRITY</h1>
        <p className="text-lg md:text-xl mb-12">
          Eagle 3D Streaming has two simple, yet powerful, key core values that drive our company. 
          If these values resonate with you, then we should talk. We are passionate about taking on 
          challenging engineering feats and turning them into user-friendly solutions our clients love.
        </p>
        <h2 className="text-2xl md:text-4xl font-bold mb-12">CULTURE & VALUES</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Card */}
          <div className="bg-[#1a1e36] p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <FaRocket className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-4">BE PROACTIVE</h3>
            <p>
              We revere the proactive individual. Dive in and make progress. Be bold, driven, and enterprising.
            </p>
          </div>

          {/* Second Card */}
          <div className="bg-[#1a1e36] p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <FaLightbulb className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-4">BE INVENTIVE</h3>
            <p>
              Boldly innovating in the face of challenging engineering problems yields opportunities and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureValuesSection;
