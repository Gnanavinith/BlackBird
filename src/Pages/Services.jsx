import React, { useState } from "react";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaPaintBrush,
  FaSearch,
  FaBullhorn,
  FaAd,
  FaBoxOpen,
  FaCloud,
  FaWindows,
  FaCaretDown,
} from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";
import Bulb from "../assets/bulb.jpg";

const services = [
  {
    title: "Mobile App Development",
    description:
      "Building native and cross-platform mobile applications for both Android and iOS.",
    icon: <FaMobileAlt className="text-blue-500" />,
  },
  {
    title: "Windows Application",
    description:
      "Creating responsive and scalable applications using modern technologies.",
    icon: <FaWindows className="text-green-500" />,
  },
  {
    title: "Web Development",
    description:
      "Creating responsive and scalable websites using modern technologies.",
    icon: <FaLaptopCode className="text-purple-500" />,
  },
  {
    title: "E-Commerce Web Development",
    description:
      "Creating responsive and scalable e-commerce websites with secure payment gateways and inventory management systems.",
    icon: <BsCartCheck className="text-orange-500" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing user-friendly interfaces and experiences with a focus on aesthetics and usability.",
    icon: <FaPaintBrush className="text-pink-500" />,
  },
  {
    title: "SEO",
    description:
      "Optimizing your website to rank higher on search engines and attract organic traffic.",
    icon: <FaSearch className="text-yellow-500" />,
  },
  {
    title: "Social Media Marketing",
    description:
      "Developing and implementing strategies to boost your brand’s presence on social media platforms.",
    icon: <FaBullhorn className="text-red-500" />,
  },
  {
    title: "Paid Ad Campaign",
    description:
      "Running targeted advertising campaigns on Google, Facebook, and other platforms to drive leads and conversions.",
    icon: <FaAd className="text-teal-500" />,
  },
  {
    title: "New Product Development",
    description:
      "Helping you design, develop, and launch innovative new products in the market.",
    icon: <FaBoxOpen className="text-indigo-500" />,
  },
  {
    title: "Hosting Service",
    description:
      "Providing reliable web hosting solutions with excellent uptime and security.",
    icon: <FaCloud className="text-gray-500" />,
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the dropdown
  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full md:w-3/4 lg:w-5xl xl:w-6xl mx-auto md:mt-10 h-auto  shadow-2xl rounded-xl p-10">
      <div className="w-full flex justify-center relative">
        <img
          src={Bulb}
          alt="Choose Us"
          className="w-full rounded-lg shadow-md object-cover"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-700 font-bold lg:text-5xl bg-opacity-10 rounded-md text-center w-full sm:text-2xl">
          Our Services
          <p className="lg:text-2xl sm:text-none text-white mt-2">
            Building the Future of Your Business
          </p>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="shadow-[10px_10px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_rgba(255,255,255,0.2)] hover:shadow-[inset_5px_5px_15px_rgba(0,0,0,0.4),_inset_-4px_-4px_15px_rgba(255,255,255,0.2)] transition-shadow duration-300 p-5 rounded-2xl"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="text-5xl text-blue-800">{service.icon}</div>
            </div>
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
              {service.title}
            </h2>

            {/* Dropdown Button */}
            <button
              onClick={() => toggleDropdown(index)}
              className="text-gray-600 font-medium text-center w-full mb-4 flex items-center justify-center"
            >
              {openIndex === index ? (
                <>
                  Hide Details{" "}
                  <FaCaretDown className="ml-2 rotate-180 transition-transform" />
                </>
              ) : (
                <>
                  Show Details{" "}
                  <FaCaretDown className="ml-2 transition-transform" />
                </>
              )}
            </button>

            {/* Dropdown Content */}
            {openIndex === index && (
              <p className="text-gray-600 text-center">{service.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
