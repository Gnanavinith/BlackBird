import { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Bird, Feather } from "lucide-react";

import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import ChooseUs from "./Pages/ChooseUs";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [animate, setAnimate] = useState(false); // Fix: Define animation state

  // Section references
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const chooseUsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    setAnimate(true); // Trigger animation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 animate-fadeIn space-y-4 transition-opacity duration-1000">
        {/* Logo Animation */}
        <div className="relative group">
          <Bird 
            className={`w-16 h-16 text-blue-500 transition-transform duration-1000 ${
              animate ? "scale-110 rotate-6 text-white" : "scale-90"
            }`}
            strokeWidth={1.8}
          />
          {/* Underline Animation */}
          <div className="absolute -bottom-1 left-1/2 w-0 h-1 bg-blue-500 rounded-full transition-all duration-500 group-hover:w-full group-hover:left-0"></div>
        </div>

        {/* Welcome Text */}
        <h1 className="text-white text-xl font-semibold tracking-widest opacity-80 animate-fadeInSlow flex items-center gap-2">
          Welcome to <span className="text-blue-500 relative">BlackBirrd</span>
          <Feather className="w-5 h-5 text-blue-500 animate-bounce" strokeWidth={2} />
        </h1>
      </div>
    );
  }

  return (
    <>
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        chooseUsRef={chooseUsRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
        scrollToSection={scrollToSection}
      />

      {/* Sections */}
      <div ref={homeRef}>
        <Home scrollToSection={scrollToSection} aboutRef={aboutRef} />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={chooseUsRef}>
        <ChooseUs />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer
        homeRef={homeRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
        scrollToSection={scrollToSection}
      />

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/9585458794"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 animate-pulse"
      >
        <FaWhatsapp size={30} />
      </a>
    </>
  );
}

export default App;
