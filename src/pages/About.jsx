import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import careercounsellor from "../assets/images/careercounsellor.jpg";

const About = () => {
  return (
    <section id="about" className="relative bg-gradient-to-r from-[#004d40] to-[#00897b] text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Left Side - Image */}
        <motion.div
          className="w-full md:w-1/2 p-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={careercounsellor}
            alt="Career Counselor"
            className="w-full h-auto object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          className="w-full md:w-1/2 p-6 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            About <span className="text-[#FFB74D]">Study in India</span>
          </h1>
          <p className="mt-4 text-lg opacity-90">
            At <span className="font-bold text-[#FFD54F]">TheStudyinIndia.com</span>, we specialize in guiding NRI students in the UAE and GCC countries to secure admission to top Indian universities.
          </p>
          <p className="mt-4 text-lg opacity-90">
            With a deep understanding of the admission process, entrance exams, and NRI quota requirements, we ensure a smooth and stress-free transition to higher education in India.
          </p>

          {/* WhatsApp Button for Career Counseling */}
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;
