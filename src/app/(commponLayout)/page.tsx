import React from "react";

import Banner from "@/src/components/banner/Banner";
import CareerSection from "@/src/components/careerSection/CareerSection";
import CultureValuesSection from "@/src/components/cultureValuesSection/CultureValuesSection";
import ParallaxSection from "@/src/components/parallaxSection/ParallaxSection";
import VideoSection from "@/src/components/videoSection/VideoSection";

const page = () => {
  return (
    <div>
      <Banner />
      <CultureValuesSection />
      <VideoSection />
      <ParallaxSection />
      <CareerSection />
    </div>
  );
};

export default page;
