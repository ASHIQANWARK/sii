import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Image/Video Imports
import heroBg1 from "../assets/images/webvideo2.mp4"; // Ensure correct path

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
      >
        <source src={heroBg1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container with Glassmorphism */}
      <motion.div
        className="relative z-10 bg-opacity-10 p-6 sm:p-10 md:p-14 rounded-3xl text-white max-w-[95%] sm:max-w-lg md:max-w-4xl flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl font-extrabold mb-4 sm:mb-6 leading-tight"
          style={{ textShadow: "3px 3px 15px rgba(0, 0, 0, 0.8)" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Your Gateway to{" "}
          <span className="text-[#FF671F]">Quality Education</span> in India
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-[clamp(1rem, 3vw, 1.8rem)] opacity-90 mb-6 sm:mb-8 px-4 sm:px-0 max-w-3xl"
          style={{ textShadow: "2px 2px 12px rgba(0, 0, 0, 0.5)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          Explore top universities and career opportunities tailored for you.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <motion.button
            onClick={() => navigate("/contact")}
            className="w-full sm:w-auto bg-gradient-to-r from-[#FF671F] to-[#FF4500] text-white font-semibold py-3 px-8 sm:px-10 rounded-full transition transform hover:scale-105 hover:shadow-xl duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Now 🚀
          </motion.button>
          <motion.button
            onClick={() => navigate("/about")}
            className="w-full sm:w-auto border-2 border-white text-white font-semibold py-3 px-8 sm:px-10 rounded-full transition transform hover:bg-white hover:text-black hover:scale-105 duration-300"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#FFFFFF",
              color: "#000000",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More 📚
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
