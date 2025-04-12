import React from "react";
import student from "../assets/images/student.webp";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const ConsultationForm = () => {
  const handleCaptcha = (value) => {
    console.log("Captcha value:", value); // send this to backend if needed
  };

  return (
    <div className="bg-[#003B31] px-4 md:px-8 py-12 lg:py-20 shadow-md mx-auto">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Left Section */}
        <div className="flex-1 relative">
          <div className="flex gap-4 mb-6">{/* Add badge images here */}</div>

          <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">
            UAE Top-Rated Overseas
          </h2>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            Education Consultant
          </h1>
          <p className="text-xl font-bold text-white mb-2">
            with 1000+ Success Stories
          </p>
          <p className="text-xl font-semibold text-orange-600">Since 2006</p>
        </div>

        {/* Right Section */}
        <div className="relative flex-1 bg-white p-6 md:p-8 rounded-2xl shadow-xl w-full">
          <h3 className="text-xl font-bold mb-6">Book Your Free Consultation</h3>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name*" className="input" />
            <input type="text" placeholder="Last Name*" className="input" />
            <input type="email" placeholder="Email*" className="input" />
            <input type="tel" placeholder="Phone Number*" className="input" />
            <select className="input">
              <option>Select State*</option>
              <option>Dubai</option>
              <option>Sharjah</option>
              <option>Abu Dhabi</option>
            </select>
            <input type="text" placeholder="City*" className="input" />
            <select className="input">
              <option>When do you wish to start?*</option>
              <option>2025</option>
              <option>2026</option>
            </select>
            <input type="text" placeholder="Comment/Queries" className="input" />

            <div className="col-span-2 flex items-start gap-2 text-sm mt-2">
              <input type="checkbox" className="mt-1" />
              <label className="text-gray-700">
                Please contact me by phone, email, Whatsapp, or SMS to assist with my inquiry.
              </label>
            </div>

            {/* reCAPTCHA */}
            <div className="col-span-2 mt-4">
              <ReCAPTCHA
                sitekey="6LdSiRUrAAAAAGxuLRu0jcOKS0YBGO1xklCFAmDb"
                onChange={handleCaptcha}
              />
            </div>

            {/* WhatsApp Button */}
            <div className="col-span-2 mt-4">
              <motion.a
                href="https://wa.me/971526608928"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 text-lg font-bold rounded-full shadow-lg bg-[#25D366] text-white flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#1EBE57] hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp size={24} />
                Get Free Career Counseling Now
              </motion.a>
            </div>
          </form>

          {/* Student Image */}
          <img
            src={student}
            alt="Student"
            className="absolute -bottom-8 -left-90 w-[300px] h-[440px] hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
