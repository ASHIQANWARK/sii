import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Image/Video Imports
import heroBg1 from "../assets/images/webvideo2.mp4"; // Ensure correct path

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center sm:text-left">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroBg1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-white px-6 sm:px-12 md:px-20 max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
          style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.6)" }}
        >
          Your Gateway to <br className="hidden sm:block" /> 
          <span className="text-[#FF671F]">Quality Education</span> in India
        </motion.h1>

        <motion.p
          className="text-md sm:text-lg md:text-xl mb-6 opacity-90"
          style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Explore top universities and career opportunities tailored for you.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <button
            onClick={() => navigate("/contact")}
            className="w-full sm:w-auto bg-[#FF671F] text-white font-semibold py-3 px-6 rounded-full transition transform hover:scale-105 hover:shadow-lg duration-300"
          >
            Start Now
          </button>
          <button
            onClick={() => navigate("/about")}
            className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-full transition transform hover:bg-white hover:text-black hover:scale-105 duration-300"
          >
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
