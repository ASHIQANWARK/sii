import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import statsImage from "../assets/images/siilogo-1.png"; // Ensure correct path

const stats = [
  { value: 100, label: "Partner Colleges" },
  { value: 1000, label: "Students Enrolled" },
  { value: 95, label: "Admission Success (%)" },
  { value: 50, label: "Franchises" },
  { value: 24, label: "Student Support (Hours)" },
];

// Number Counter Hook with Intersection Observer
const useCountUp = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect(); // Stop observing once triggered
        }
      },
      { threshold: 0.6 } // Starts animation when 60% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (start) {
      let startTime;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * target));

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(target); // Ensure it reaches the target
        }
      };
      requestAnimationFrame(step);
    }
  }, [start, target, duration]);

  return [count, ref];
};

const StatsSection = () => {
  return (
    <section className="bg-[#003B31] py-16 px-4 sm:px-8 md:px-16 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Why Choose <span className="text-[#ff602b]">Us?</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-md mx-auto md:mx-0">
            We provide top-tier education opportunities with guaranteed admission success.
          </p>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => {
              const [count, ref] = useCountUp(stat.value, 1500);

              return (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-xl shadow-lg bg-opacity-10 backdrop-blur-md"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 150 }}
                  ref={ref}
                >
                  <motion.h3
                    className="text-3xl sm:text-4xl font-extrabold italic text-[#ff602b]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {count}+
                  </motion.h3>
                  <p className="text-md sm:text-lg text-white font-semibold">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={statsImage}
            alt="Statistics"
            className="w-3/4 sm:w-2/3 md:w-2/3 lg:w-1/2 max-w-xs md:max-w-md rounded-lg shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
