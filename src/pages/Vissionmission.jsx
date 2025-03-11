import React from "react";
import { motion } from "framer-motion";

const VisionMission = () => {
  return (
    <section className="py-16  text-gray-900">
      <div className="container mx-auto px-6 text-center">
        
        {/* Heading */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-10 text-[#FF4500]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Vision & Mission
        </motion.h2>

        {/* Card Container */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Vision Card */}
          <motion.div 
            className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-[#046A38] mb-4">🌍 Our Vision</h3>
            <p className="text-lg text-gray-700">
              To be the world’s most trusted education consultancy, empowering NRI students 
              to achieve their dream education in India through ethical, transparent, and results-driven services.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-[#FF4500] mb-4">🎯 Our Mission</h3>
            <p className="text-lg text-gray-700">
              To provide NRI students with expert guidance, seamless support, and personalized solutions, 
              ensuring they secure admission to top Indian universities and colleges that align with their academic aspirations and career goals.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
