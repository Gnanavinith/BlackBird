import React, { useState } from "react";
import {
  FaLightbulb,
  FaCogs,
  FaCheckCircle,
  FaUsers,
  FaHeart,
  FaRocket,
} from "react-icons/fa";
import Choose from "../assets/About4.jpeg";

const ChooseUs = () => {
  // State to track open dropdowns
  const [openIndex, setOpenIndex] = useState(null);

  // Feature list with explanations
  const features = [
    {
      title: "Expertise",
      description:
        "We bring years of industry experience and deep technical knowledge to deliver outstanding solutions.",
    },
    {
      title: "Creativity",
      description:
        "Our innovative approach ensures unique and customized digital solutions for every business.",
    },
    {
      title: "Quality",
      description:
        "We focus on high-quality deliverables, ensuring precision, performance, and reliability in every project.",
    },
    {
      title: "Collaboration",
      description:
        "We work closely with our clients, maintaining transparent communication and teamwork.",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Your success is our priority. We strive to exceed expectations with every project.",
    },
    {
      title: "Innovation",
      description:
        "We leverage cutting-edge technology to drive business growth and stay ahead in the market.",
    },
  ];

  // Icons for each feature
  const featureIcons = [
    FaCogs, // Expertise
    FaLightbulb, // Creativity
    FaCheckCircle, // Quality
    FaUsers, // Collaboration
    FaHeart, // Customer Satisfaction
    FaRocket, // Innovation
  ];

  // Function to toggle dropdown
  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full md:w-3/4 lg:w-5xl xl:w-6xl mx-auto md:mt-10  h-auto shadow-[10px_10px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_rgba(255,255,255,0.2)] hover:shadow-[inset_5px_5px_15px_rgba(0,0,0,0.4),_inset_-4px_-4px_15px_rgba(255,255,255,0.2)] transition-shadow duration-300 rounded-xl p-10">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-black">Why Choose Us?</h1>
        <p className="text-lg text-gray-600 mt-2">
          Your Path to Innovation and Success
        </p>
      </div>

      {/* Feature Grid with Dropdowns */}
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        {/* Feature List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 text-center w-full lg:w-1/2">
          {features.map((feature, index) => {
            const Icon = featureIcons[index]; // Assign the corresponding icon
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center gap-3">
                  <Icon className="text-blue-800 text-2xl" />
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="text-xl font-semibold text-black w-full flex justify-between items-center"
                  >
                    {feature.title}
                    <span
                      className={`ml-2 transform transition-transform ${
                        openIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                </div>

                {/* Dropdown Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700 text-sm">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <img
            src={Choose}
            alt="Choose Us"
            className="w-full rounded-lg shadow-md object-cover"
          />
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold  bg-opacity-10  rounded-md text-center w-full " >
            We grow when you <span className="text-white  text-2xl">Grow,</span>  <br />
            Your success is our biggest <span className="text-white  text-2xl">Achievement</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
