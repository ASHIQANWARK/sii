import React from "react";
import careercounsellor from "../assets/images/careercounsellor.jpg"

const About = () => {
  return (
    <section id="about" className="bg-[#FF671F] text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 p-6">
          <img
            src={careercounsellor} // Replace with your actual image URL
            alt="Study in India"
            className="w-full h-full object-cover rounded-lg "
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
            About Study in India
          </h1>
          <p className="mt-4 text-lg text-white">
            At ThestudyinIndia.com, we specialize in guiding NRI students in the
            UAE and GCC countries to secure admission to top Indian universities
            and colleges. With a deep understanding of the admission process,
            entrance exams, and NRI quota requirements, we make the transition
            to higher education in India smooth and stress-free.
          </p>
          <p className="mt-4 text-lg text-white">
            Our team of experienced education consultants is committed to
            providing personalized guidance, helping students and parents make
            informed decisions about their academic future.
          </p>

          {/* Call to Action Button */}
          <button className="mt-6 px-6 py-3  text-white font-bold rounded-lg shadow-md hover:bg-[#E65C00] transition-all duration-300">
            Get Free Career Counseling Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
