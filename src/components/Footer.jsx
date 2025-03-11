import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import EComLogo from '../assets/images/siilogo-2.png'; // Adjust the path as needed

const Footer = () => {
  return (
    <footer className="bg-[#FF671F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo */}
        <div className="flex justify-center md:justify-start">
          <img src={EComLogo} alt="Ique Ventures Logo" className="w-25" />
        </div>

        {/* Column 2: Address, Email, Privacy Policy & Help Centre */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <p className="text-white">
            Address: Door No: 84, 3rd Cross Rd, KHB Block, Koramangala, Bengaluru, Karnataka 560095
          </p>
          <p className="text-white mt-2">
            Email:{' '}
            <a href="mailto:support@iqueventures.com" className="text-[#ffab00] hover:underline">
              support@iqueventures.com
            </a>
          </p>
          <p className="text-white mt-2">
            <a href="/privacy-policy" className="text-[#ffab00] hover:underline">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="/help-centre" className="text-[#ffab00] hover:underline">
              Help Centre
            </a>
          </p>
        </div>

        {/* Column 3: Social Media */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="#" className="text-[#1358f9] transition">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-[#e82323] transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-[#2bf00c] transition">
              <FaWhatsapp size={24} />
            </a>
            <a href="#" className="text-[#1358f9] transition">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Column 4: Google Maps Location */}
        <div className="w-full flex justify-center md:justify-end">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps?q=Koramangala,Bengaluru&output=embed"
            width="100%"
            height="180"
            className="rounded-lg shadow-lg max-w-md"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#FF671F] py-4 text-center">
        <p className="text-white text-sm">&copy; 2025 Ique Ventures. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
