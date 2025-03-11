import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import statsImage from "../assets/images/siilogo-1.png"; // Ensure this path is correct

const stats = [
  { value: 100, label: "Partner Colleges" },
  { value: 1000, label: "Students Enrolled" },
  { value: 95, label: "Admission Success (%)" },
  { value: 50, label: "Franchises" },
  { value: 24, label: "Student Support (Hours)" },
];

// Function to animate numbers counting up
const useCountUp = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const step = (timestamp) => {
      start += (target / duration) * 50;
      if (start < target) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  return count;
};

const StatsSection = () => {
  return (
    <section className="bg-[#005446] py-16 text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <motion.div 
          className="md:w-1/2 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold text-white leading-tight">
            Why Choose Us?
          </h2>
          <p className="text-lg text-white">
            We provide top-tier education opportunities with guaranteed admission success.
          </p>

          <motion.div 
            className="grid grid-cols-2 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            {stats.map((stat, index) => {
              const count = useCountUp(stat.value, 1500);
              return (
                <motion.div 
                  key={index} 
                  className="text-center p-6 rounded-xl"
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 150 }}
                >
                  <motion.h3 
                    className="text-5xl font-extrabold italic text-[#ff602b]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {count}+
                  </motion.h3>
                  <p className="text-lg text-white font-semibold">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img 
            src={statsImage} 
            alt="Statistics" 
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default StatsSection;
