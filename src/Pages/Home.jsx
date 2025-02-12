import React, { useState } from "react";
import BlackBird from "../assets/Home2.jpg"
import Email from "../Components/Email"; // Assuming you have Email component
import { FaXmark } from "react-icons/fa6"; // Import FaXmark icon

const Home = ({ scrollToSection, aboutRef }) => { // Receive scrollToSection and aboutRef as props
  const [showEmail, setShowEmail] = useState(false);

  const handleGetStartedClick = () => {
    setShowEmail(true); // Show Email component when button is clicked
  };

  const handleCloseEmail = () => {
    setShowEmail(false); // Close Email component
  };

  const handleAboutUsClick = () => {
    // Scroll to the About section when "About Us" button is clicked
    scrollToSection(aboutRef);
  };

  return (
    <section className="w-full md:w-3/4 lg:w-5xl xl:w-6xl mx-auto md:mt-10 h-auto shadow-[10px_10px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_rgba(255,255,255,0.2)] hover:shadow-[inset_5px_5px_15px_rgba(0,0,0,0.4),_inset_-4px_-4px_15px_rgba(255,255,255,0.2)] transition-shadow duration-300 rounded-xl p-10 flex flex-col justify-between">

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl font-bold text-black leading-snug">
            We <span className="text-red-600"> #BlackBird</span> <br />
            Empowering Businesses with Cutting-Edge Software Solutions
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            We design, develop, and deliver high-quality software solutions tailored to your needs.
          </p>
          <div className="flex space-x-4 mt-6">
            <button
              onClick={handleGetStartedClick}
              className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold"
            >
              Get Started Now
            </button>
            <button
              onClick={handleAboutUsClick} // Trigger scroll to About section
              className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold"
            >
              About Us
            </button>
          </div>
        </div>

        {/* Right Content - Image and Quote */}
        <div className="flex flex-col items-center text-center">
          <img
            src={BlackBird}
            alt="BlackBird"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <p className="mt-4 text-sm text-gray-600 italic">
            "Blackbird singing in the dead of night, take these broken wings and learn to fly."
          </p>
        </div>
      </div>

      {/* Conditionally Render Email Component in Center */}
      {showEmail && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-50">
          <div className="bg-white p-10 max-w-lg w-full relative shadow-[10px_10px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_rgba(255,255,255,0.2)] hover:shadow-[inset_5px_5px_15px_rgba(0,0,0,0.4),_inset_-4px_-4px_15px_rgba(255,255,255,0.2)] transition-shadow duration-300">
            {/* Close button positioned in top right corner inside the form */}
            <button
              onClick={handleCloseEmail}
              className="absolute top-2 right-2 p-2 text-black font-extrabold text-2xl rounded-xl hover:bg-red-700 hover:text-white transition duration-300"
            >
              <FaXmark />
            </button>
            <Email />
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
