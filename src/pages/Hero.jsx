import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroBg1 from "../assets/images/webvideo2.mp4"; // Ensure correct path

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center px-6 sm:px-8 lg:px-12 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroBg1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 bg-transparent bg-opacity-10  p-8 sm:p-12 md:p-16 rounded-xl text-white max-w-4xl flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
          style={{ textShadow: "4px 4px 20px rgba(0, 0, 0, 0.9)" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Your Gateway to{" "}
          <span className="text-[#0aab90]">Quality Education</span> in India
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl opacity-90 mb-6 px-4 sm:px-6 max-w-3xl"
          style={{ textShadow: "2px 2px 12px rgba(0, 0, 0, 0.5)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          Explore top universities and career opportunities tailored for you.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <motion.button
            onClick={() => navigate("/contact")}
            className="w-full sm:w-auto bg-[#004d40] text-white text-lg font-semibold py-3 px-8 rounded-full transition transform hover:scale-105 hover:shadow-xl duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Now 🚀
          </motion.button>
          <motion.button
            onClick={() => navigate("/about")}
            className="w-full sm:w-auto border-2 border-white text-white text-lg font-semibold py-3 px-8 rounded-full transition transform hover:bg-white hover:text-black hover:scale-105 duration-300"
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
