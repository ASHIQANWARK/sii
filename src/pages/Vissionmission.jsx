import React from "react";
import { motion } from "framer-motion";
import visionImg from "../assets/images/vision (1).jpg";  
import missionImg from "../assets/images/vision (2).jpg"; 

const VisionMission = () => {
  return (
    <section className="relative py-16 text-white">
      <div className="container mx-auto px-6 text-center">
        
        {/* Heading */}
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold mb-12 text-[#005446] drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Our Vision & Mission
        </motion.h2>

        {/* Card Container */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Vision Card */}
          <motion.div 
            className="relative rounded-xl p-8 border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 min-h-[300px]"
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.3)" }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img src={visionImg} alt="Vision" className="w-full h-full object-cover opacity-40"/>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-[#005446] mb-4">🌍 Our Vision</h3>
              <p className="text-xl font-extrabold text-black leading-relaxed  font-sans-serif">
                To be the world’s most trusted education consultancy, empowering NRI students 
                to achieve their dream education in India through ethical, transparent, and results-driven services.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            className="relative rounded-xl p-8 border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 min-h-[300px]"
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.3)" }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img src={missionImg} alt="Mission" className="w-full h-full object-cover opacity-40"/>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-[#005446] mb-4">🎯 Our Mission</h3>
              <p className="text-xl font-extrabold text-black leading-relaxed font-sans-serif">
                To provide NRI students with expert guidance, seamless support, and personalized solutions, 
                ensuring they secure admission to top Indian universities and colleges that align with their academic aspirations and career goals.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
