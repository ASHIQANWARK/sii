import React from "react";
import { FaEye, FaBullseye } from "react-icons/fa";
import visionImage from "../assets/images/IMG1391.png"; // Adjust the path as needed
import missionImage from "../assets/images/IMG_1392.jpg"; // Adjust the path as needed

const VisionMission = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
          Our Vision & Mission
        </h2>

        {/* Card Container */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-[#004d40] rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <img
              src={visionImage}
              alt="Vision"
              className="w-full min-h-40 md:h-60 object-cover"
              loading="lazy"
            />
            <div className="p-6 text-center">
              <div className="flex justify-center mb-3">
                <FaEye className="text-3xl text-green-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Our Vision
              </h3>
              <p className="text-white text-sm sm:text-base leading-relaxed">
                To be the world’s most trusted education consultancy, empowering
                NRI students to achieve their dream education in India through
                ethical and results-driven services.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-[#004d40] rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 flex flex-col">
            <div className="p-6 text-center">
              <div className="flex justify-center mb-3">
                <FaBullseye className="text-3xl text-green-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Our Mission
              </h3>
              <p className="text-white text-sm sm:text-base leading-relaxed">
                To provide NRI students with expert guidance, seamless support,
                and personalized solutions, ensuring they secure admission to
                top Indian universities that align with their career goals.
              </p>
            </div>
            <img
              src={missionImage}
              alt="Mission"
              className="w-full min-h-40 md:h-60 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
