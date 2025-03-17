import React from "react";
import { motion } from "framer-motion";
import Admission from "../assets/images/IMG_1386.jpg";
import NRIQuota from "../assets/images/nri.png";
import EntranceExam from "../assets/images/entrance.jpg";
import Application from "../assets/images/application.jpg";
import Visa from "../assets/images/visa3.jpg";
import Scholarship from "../assets/images/scholarship.jpg";

const services = [
  {
    title: "Admission Guidance",
    description: [
      "Personalized counseling to help students choose the right university and course.",
      "Expert advice on admission procedures and eligibility criteria."
    ],
    img: Admission,
  },
  {
    title: "NRI Quota Admissions",
    description: [
      "Assistance in securing seats under the NRI quota in top Indian colleges.",
      "Guidance on documentation & eligibility verification."
    ],
    img: NRIQuota,
  },
  {
    title: "Entrance Exam Support",
    description: [
      "Information on required entrance exams (NEET, JEE, CUET, etc.).",
      "Coaching and preparation resources.",
      "Guidance on exam registration."
    ],
    img: EntranceExam,
  },
  {
    title: "Application & Documentation Assistance",
    description: [
      "Help with online and offline application submissions.",
      "Verification and submission of required documents.",
      "Assistance with travel insurance"
    ],
    img: Application,
  },
  {
    title: "Visa & Travel Assistance",
    description: [
      "Support for students needing student visas and travel arrangements.",
      "Guidance on accommodation and living arrangements in India.",
      "Assistance with pre-departure orientation."
    ],
    img: Visa,
  },
  {
    title: "Scholarship & Financial Aid Guidance",
    description: [
      "Information on scholarships available for NRI students.",
      "Assistance with applying for financial aid programs."
    ],
    img: Scholarship,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold text-center text-[#005446] mb-12 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image */}
              <img src={service.img} alt={service.title} className="w-full h-64 object-cover" />

              {/* Content */}
              <div className="p-6 bg-[#005446] text-white flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-center">{service.title}</h3>
                <ul className="mt-5 list-disc list-inside space-y-2 flex-grow">
                  {service.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
