import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="relative bg-[#003B31] text-white py-16 px-4 sm:px-8 md:px-12">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Animated Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          About <span className="text-[#FFB74D]">Study in India</span>
        </motion.h1>

        {/* Decorative Divider */}
        <motion.div 
          className="w-20 sm:w-24 h-1 bg-[#FFD54F] my-4 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Animated Paragraphs */}
        <motion.p
          className="max-w-lg sm:max-w-xl md:max-w-2xl text-lg leading-relaxed opacity-90 mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          At <span className="font-bold text-[#FFD54F]">TheStudyinIndia.com</span>, we specialize in guiding NRI students in the UAE and GCC countries to secure admission to top Indian universities.
        </motion.p>
        
        <motion.p
          className="max-w-lg sm:max-w-xl md:max-w-2xl text-lg leading-relaxed opacity-90 mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          With a deep understanding of the admission process, entrance exams, and NRI quota requirements, we ensure a smooth and stress-free transition to higher education in India.
        </motion.p>

        
      </div>
    </section>
  );
};

export default About;