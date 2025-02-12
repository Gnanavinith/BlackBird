import { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import the WhatsApp icon
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import ChooseUs from "./Pages/ChooseUs";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

function App() {
  // Create references for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const chooseUsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Pass refs and scroll function to Navbar and Footer */}
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        chooseUsRef={chooseUsRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
        scrollToSection={scrollToSection}
      />

      {/* Sections with refs */}
      <div ref={homeRef}>
        <Home
          scrollToSection={scrollToSection} // Pass the function to Home
          aboutRef={aboutRef} // Pass the aboutRef to Home
        />
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
        href="https://wa.me/9585458794" // Replace with your WhatsApp number
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
