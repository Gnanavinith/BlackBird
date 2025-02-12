import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin, FaFacebook } from "react-icons/fa6"; 
import connect from "../assets/Connect.jpg";
import { FaXmark } from "react-icons/fa6";
import Career from "../Components/Career" // Import Career component

const Contact = () => {
  const [showCareer, setShowCareer] = useState(false); // State to handle Career form visibility

  const handleJoinClick = () => {
    setShowCareer(true); // Show Career form when button is clicked
  };

  const handleCloseCareer = () => {
    setShowCareer(false); // Hide Career form
  };

  return (
    <header className="group flex flex-col items-center justify-center border-none rounded-2xl ww-full md:w-3/4 lg:w-5xl xl:w-6xl mx-auto md:mt-10 h-auto shadow-[10px_10px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_rgba(255,255,255,0.2)] hover:shadow-[inset_5px_5px_15px_rgba(0,0,0,0.4),_inset_-4px_-4px_15px_rgba(255,255,255,0.2)] transition-shadow duration-300  p-10">
      
      <div className="relative w-full flex justify-center">
        <img 
          src={connect} 
          alt="Get in Touch" 
          className="w-full rounded-lg shadow-md object-cover max-h-[300px] sm:max-h-[400px]"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-2xl sm:text-xl md:text-4xl font-bold text-red-600 drop-shadow-md">
            Get In Touch
          </h1>
          <p className="md:text-lg text-sm text-white font-medium px-2 md:px-0  mt-2 transition duration-300 hover:text-blue-300 hover:drop-shadow-[0_0_20px_#00f]">
            Connecting People With Knowledge
          </p>
        </div>
      </div>

      {/* Social Icons Section */}
      <div className="mt-5  flex space-x-6 text-2xl text-gray-600 hover:text-gray-800">
        <button className="border-none p-2 rounded-e-sm shadow-[15px_20px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_white] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3),_inset_-4px_-4px_10px_white] transition-shadow duration-300">
          <a
            href="mailto:vinithvini775@gmail.com?subject=Hello&body=I would like to discuss something."
            className="hover:text-blue-500 cursor-pointer"
          >
            <CiMail />
          </a>
        </button>

        <button className="border-none p-2 rounded-e-sm shadow-[15px_20px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_white] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3),_inset_-4px_-4px_10px_white] transition-shadow duration-300">
          <a
            href="https://www.instagram.com/vini___th/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram className="hover:text-pink-500 cursor-pointer" />
          </a>
        </button>

        <button className="border-none p-2 rounded-e-sm shadow-[15px_20px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_white] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3),_inset_-4px_-4px_10px_white] transition-shadow duration-300">
          <a
            href="https://www.linkedin.com/in/gnanavinith-g/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
          </a>
        </button>

        <button className="border-none p-2 rounded-e-sm shadow-[15px_20px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_white] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3),_inset_-4px_-4px_10px_white] transition-shadow duration-300">
          <a
            href="https://www.facebook.com/vinith.vini.547389"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-blue-600 cursor-pointer" />
          </a>
        </button>
      </div>

      <div>
        <button 
          onClick={handleJoinClick} 
          className="bg-blue-600 text-white px-5 py-2 mt-10 mb-10 rounded-lg hover:bg-blue-500 transition"
        >
          Join Our Team
        </button>
      </div>

      {/* Conditionally Render Career Form */}
      {showCareer && (
        <div className="relative p-10 shadow-[10px_10px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_rgba(255,255,255,0.2)] hover:shadow-[inset_5px_5px_15px_rgba(0,0,0,0.4),_inset_-4px_-4px_15px_rgba(255,255,255,0.2)] transition-shadow duration-300 rounded-xl">
          <Career />
          <button
            onClick={handleCloseCareer}
            className="absolute top-0 right-0 p-2 text-black font-extrabold text-2xl rounded-xl hover:bg-red-700 hover:text-white transition duration-300"
>
            <FaXmark />
          </button>
        </div>
      )}
    </header>
  );
};

export default Contact;

