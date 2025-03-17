import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Logo from "../assets/images/siilogo-2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to navigate to home and scroll to "about"
  const handleScrollToAbout = () => {
    setIsOpen(false); // Close the menu on mobile
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroll.scrollTo(document.getElementById("about").offsetTop - 80, {
          duration: 800,
          smooth: "easeInOutQuad",
        });
      }, 300);
    } else {
      scroll.scrollTo(document.getElementById("about").offsetTop - 80, {
        duration: 800,
        smooth: "easeInOutQuad",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Logo"
            className="h-auto max-h-12 w-auto object-contain transform transition-transform duration-300 hover:scale-110"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          <Link
            to="/"
            className={`transition-all duration-300 ${
              isScrolled ? "text-gray-800" : "text-white"
            } hover:text-gray-700 font-serif`}
          >
            Home
          </Link>
          <button
            onClick={handleScrollToAbout}
            className={`cursor-pointer transition-all duration-300 ${
              isScrolled ? "text-gray-800" : "text-white"
            } hover:text-gray-700 font-serif`}
          >
            About
          </button>
          <Link
            to="/contact"
            className={`transition-all duration-300 ${
              isScrolled ? "text-gray-800" : "text-white"
            } hover:text-gray-700 font-serif`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden focus:outline-none transition-all duration-300 ${
            isScrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out`}
      >
        <div className="px-6 py-4 space-y-4">
          <Link
            to="/"
            className="block text-gray-700 hover:text-black transform transition-transform duration-300 hover:scale-105 font-serif"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <button
            className="block text-gray-700 hover:text-black transform transition-transform duration-300 hover:scale-105 font-serif cursor-pointer"
            onClick={handleScrollToAbout}
          >
            About
          </button>
          <Link
            to="/contact"
            className="block text-gray-700 hover:text-black transform transition-transform duration-300 hover:scale-105 font-serif"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
