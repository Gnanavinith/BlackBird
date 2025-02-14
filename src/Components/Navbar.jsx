import React, { useState } from "react";
import { MdOutlineScheduleSend } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { Bird } from 'lucide-react';
import Email from "./Email"; // Import Email component

const Navbar = ({ homeRef, aboutRef, servicesRef, contactRef, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle modal open/close
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to handle menu item click and close the mobile menu
  const handleMenuItemClick = (ref) => {
    scrollToSection(ref); // Scroll to the section
    setMenuOpen(false); // Close the mobile menu
  };

  return (
    <>
      <header className="border-none shadow-2xl bg-white relative">
        <nav className="flex justify-between items-center px-6 py-5">
          {/* Logo */}
          <div className="flex items-center gap-3">
      {/* Logo Icon */}
      <div className="relative group">
        <Bird 
          className="w-10 h-12 text-black  transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-700"
          strokeWidth={1.8}
        />
        {/* Animated Underline */}
        <div className="absolute -bottom-1 left-1/2 w-0 h-1 bg-blue-600 rounded-full transition-all duration-500 group-hover:w-full group-hover:left-0"></div>
      </div>

      {/* Text Section */}
      <div className="text-left">
        <h1 className="font-bold text-xl tracking-wide text-gray-900">
          BLACK BIRRD
        </h1>
        <p className="font-medium text-gray-500 tracking-wider">
          Software Innovations
        </p>
      </div>
    </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex space-x-6 items-center">
            <li className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection(homeRef)}>Home</li>
            <li className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection(aboutRef)}>About</li>
            <li className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection(servicesRef)}>Services</li>
            <li className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection(contactRef)}>Contact</li>

            {/* Schedule Meeting Button */}
            <li>
              <button
                onClick={toggleModal}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-500 transition flex items-center gap-2"
              >
                Schedule A Meeting <span className="text-2xl"><MdOutlineScheduleSend /></span>
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu (Slide-in from Left) */}
        <div
          className={`fixed top-0 left-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <ul className="flex flex-col items-center space-y-6 p-6">
            <li className="hover:text-blue-500 cursor-pointer" onClick={() => handleMenuItemClick(homeRef)}>Home</li>
            <li className="hover:text-blue-500 cursor-pointer" onClick={() => handleMenuItemClick(aboutRef)}>About</li>
            <li className="hover:text-blue-500 cursor-pointer" onClick={() => handleMenuItemClick(servicesRef)}>Services</li>
            <li className="hover:text-blue-500 cursor-pointer" onClick={() => handleMenuItemClick(contactRef)}>Contact</li>

            {/* Schedule Meeting Button */}
            <li>
              <button onClick={toggleModal} className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-500 transition flex items-center gap-2">
                Schedule A Meeting
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* Email Modal */}
      {isModalOpen && (
       <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 rounded-2xl">

          <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full relative">
            {/* Close Button */}
            <button 
              onClick={toggleModal} 
              className="absolute top-0 right-0 p-2 text-black  font-extrabold text-2xl rounded-xl hover:bg-red-700 hover:text-white transition duration-300 "
             >
              <FaXmark />
            </button>

            {/* Email Form */}
            <Email />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
