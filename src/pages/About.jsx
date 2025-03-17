import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="relative bg-[#004d40] text-white py-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        {/* Heading with Animation */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          About <span className="text-[#FFB74D]">Study in India</span>
        </motion.h1>

        {/* Decorative Divider */}
        <motion.div 
          className="w-24 h-1 bg-[#FFD54F] my-4 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Content with Animated Entrance */}
        <motion.p
          className="max-w-3xl text-lg opacity-90 leading-relaxed mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          At <span className="font-bold text-[#FFD54F]">TheStudyinIndia.com</span>, we specialize in guiding NRI students in the UAE and GCC countries to secure admission to top Indian universities.
        </motion.p>
        
        <motion.p
          className="max-w-3xl text-lg opacity-90 leading-relaxed mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          With a deep understanding of the admission process, entrance exams, and NRI quota requirements, we ensure a smooth and stress-free transition to higher education in India.
        </motion.p>

        {/* Decorative Elements */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="absolute top-10 left-10 w-16 h-16 bg-white/20 rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-ping" />
        </motion.div>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/971526608928"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center px-6 py-3 bg-[#25D366] text-white font-bold rounded-lg shadow-lg hover:bg-[#1EBE57] transform hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaWhatsapp size={24} className="mr-2" />
          Get Free Career Counseling Now
        </motion.a>
      </div>
    </section>
  );
};

export default About;
