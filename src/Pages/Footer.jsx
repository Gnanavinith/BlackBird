import React from "react";

const Footer = ({ homeRef, aboutRef, servicesRef, contactRef, scrollToSection }) => {
  return (
    <footer className="bg-white text-black py-10 px-6 md:px-20 mt-20 shadow-[0_-10px_20px_rgba(0,0,0,0.2)]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* BlackBird Branding */}
        <div>
          <h1 className="text-xl font-bold text-black">BlackBird</h1>
          <p className="text-gray-700 mt-2">
            We specialize in providing innovative digital solutions to help businesses thrive in a fast-evolving digital world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="text-xl font-semibold text-black">Quick Links</h1>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li className="hover:text-blue-400 cursor-pointer" onClick={() => scrollToSection(homeRef)}>Home</li>
            <li className="hover:text-blue-400 cursor-pointer" onClick={() => scrollToSection(aboutRef)}>About</li>
            <li className="hover:text-blue-400 cursor-pointer" onClick={() => scrollToSection(servicesRef)}>Services</li>
            <li className="hover:text-blue-400 cursor-pointer" onClick={() => scrollToSection(contactRef)}>Contact</li>
          </ul>
        </div>

        {/* Services List */}
        <div>
          <h1 className="text-xl font-semibold text-black">Services</h1>
          <ul className="mt-2 space-y-2  text-gray-600">
            {[
              "Web Development",
              "UI/UX Design",
              "App Development",
              "Windows Application",
              "Digital Marketing",
              "SEO",
              "Paid Ad Campaign",
              "New Product Development",
              "Hosting Service",
            ].map((service, index) => (
              <li key={index} className="hover:text-blue-400 cursor-pointer">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h1 className="text-xl font-semibold text-black">Get in Touch</h1>
          <p className="text-gray-600 mt-2">Coimbatore, Tamil Nadu, India</p>
          <p className="text-gray-600">555-555-5555</p>
          <p className="text-gray-600">
            <a href="mailto:info@blackbird.com" className="text-gray-600 hover:underline">
              info@blackbird.com
            </a>
          </p>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} BlackBird. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
