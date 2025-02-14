import React, { useState } from "react";
import AboutImage from "../assets/About5.jpg";
import { FaDesktop } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Email from "../Components/Email"; // Import the Email component

const About = () => {
  const [showEmail, setShowEmail] = useState(false); // State to control Email component visibility

  const handleHireClick = () => {
    setShowEmail(true); // Show the Email component when the button is clicked
  };

  const handleCloseEmail = () => {
    setShowEmail(false); // Hide the Email component
  };

  return (
    <section
      className="w-full md:w-3/4 lg:w-5xl xl:w-6xl mx-auto md:mt-10 h-auto
       shadow-2xl rounded-xl p-5 sm:p-8 md:p-10"
    >
      {/* Image Section with Text Overlay */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        {/* Image */}
        <div className=" w-full flex justify-center">
          <img
            src={AboutImage}
            alt="About BlackBird"
            className="w-full rounded-lg shadow-md object-cover max-h-[300px] sm:max-h-[400px]"
          />
         
        </div>

        {/* About Text */}
        <div className="text-center ">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-black font-extrabold">
            "Your Growth, Our Innovation <br />
            <span className="text-red-600">Let's Build the Future!</span> 
          </h1>
          <div className="flex justify-center lg:justify-center">
            <button
              onClick={handleHireClick} // Show Email component when clicked
              className="bg-blue-600 flex items-center gap-2 mt-5 hover:bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold"
            >
              Find Your Expert Developer <FaDesktop />
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mt-10">
        {[ 
          {
            title: "Web Development",
            desc: "We build modern, fast, and secure websites tailored to your needs.",
          },
          {
            title: "SEO-Friendly Websites",
            desc: "Optimized websites to boost rankings and drive more traffic.",
          },
          {
            title: "Responsive Websites",
            desc: "Ensuring your site looks great on all devices.",
          },
          {
            title: "Software Development",
            desc: "Custom solutions to streamline your business.",
          },
          {
            title: "Windows Applications",
            desc: "High-performance apps for various industries.",
          },
          {
            title: "Digital Marketing",
            desc: "Grow your brand with expert marketing strategies.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white p-5 sm:p-6 rounded-lg 
            shadow-[10px_10px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_rgba(255,255,255,0.2)] 
            hover:shadow-[inset_5px_5px_15px_rgba(0,0,0,0.4),_inset_-4px_-4px_15px_rgba(255,255,255,0.2)] 
            transition-shadow duration-300 text-center"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-black">
              {service.title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Conditionally Render Email Component */}
      {showEmail && (
        <div className="fixed z-1 inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-50 ">
          <div className="bg-white p-10 rounded-xl max-w-lg w-full relative ">
            {/* Close button positioned in top right corner inside the form */}
            <button
              onClick={handleCloseEmail} // Close Email component
              className="absolute top-0 right-0 p-2 text-black  font-extrabold text-2xl rounded-xl hover:bg-red-700 hover:text-white transition duration-300"
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

export default About;
