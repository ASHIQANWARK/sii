import React from "react";
import { FaEye, FaBullseye } from "react-icons/fa";
import visionImage from "../assets/images/mission.jpg";
import missionImage from "../assets/images/IMG_1393.jpg";

const VisionMission = () => {
  return (
    <section className="py-16 bg-[#003B31] text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
          Our Vision & Mission
        </h2>

        {/* Card Container */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div
            className="relative bg-cover bg-center rounded-lg shadow-md h-80 flex items-center justify-center p-8"
            style={{ backgroundImage: `url(${visionImage})` }}
          >
            <div className="absolute inset-0 bg-black/50 bg-opacity-50 rounded-lg"></div>
            <div className="relative text-center text-white max-w-md">
              
              <h3 className="text-3xl font-bold mb-2">Our Vision</h3>
              <p className="text-sm sm:text-base leading-relaxed">
                To be the world’s most trusted education consultancy, empowering
                NRI students to achieve their dream education in India through
                ethical and results-driven services.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div
            className="relative bg-cover bg-center rounded-lg shadow-md h-80 flex items-center justify-center p-8"
            style={{ backgroundImage: `url(${missionImage})` }}
          >
            <div className="absolute inset-0 bg-black/50 bg-opacity-50 rounded-lg"></div>
            <div className="relative text-center text-white max-w-md">
          
              <h3 className="text-3xl font-bold mb-2">Our Mission</h3>
              <p className="text-sm sm:text-base leading-relaxed">
                To provide NRI students with expert guidance, seamless support,
                and personalized solutions, ensuring they secure admission to
                top Indian universities that align with their career goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
