import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import EComLogo from "../assets/images/siilogo-4.png"; // Adjust the path as needed

const Footer = () => {
  return (
    <footer className="bg-[#005446] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        {/* Column 1: Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src={EComLogo}
            alt="Ique Ventures Logo"
            className="w-40 h-auto object-contain"
          />
        </div>

        {/* Column 2: Address, Email, Privacy Policy & Help Centre */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <p className="text-white">
            Address: AL Shams Building 301, AL Sharq St - Qulaya'ah - Sharjah
          </p>
          <p className="text-white mt-2">
            Email:{" "}
            <a
              href="mailto:support@iqueventures.com"
              className="text-[#000000] hover:underline"
            >
              info@studyinindia.com 
            </a>
          </p>
          <p className="text-white mt-2">
            <a
              href="/privacy-policy"
              className="text-[#000000] hover:underline"
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/help-centre" className="text-[#000000] hover:underline">
              Help Centre
            </a>
          </p>
        </div>

        {/* Column 3: Social Media */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/share/1C5z8Zk7dC/" className="text-[#1358f9] transition">
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com/studyinindia.com_?igsh=cmVpcDczenRhYTdn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e82323] transition"
            >
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/company/thestudyinindia-com/ " className="text-[#1358f9] transition">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Column 4: Google Maps Location */}
        <div className="w-full flex justify-center md:justify-end">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps?q=AL+Shams+Building+301,+AL+Sharq+St+-+Qulaya'ah,+Sharjah&output=embed"
            width="100%"
            height="180"
            className="rounded-lg shadow-lg max-w-md"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#004437] py-4 text-center">
        <p className="text-white text-sm">
          &copy; 2025 Ique Ventures. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
