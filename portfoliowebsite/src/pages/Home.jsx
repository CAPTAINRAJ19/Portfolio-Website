import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion"; // Importing Framer Motion

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide button when scrolling
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero menuOpen={menuOpen} />
      <About />
      <Projects />
      <Skills />
      <Footer />

      {/* Scroll to Top Button with Animations */}
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.8 }}
          className="fixed bottom-6 z-10 right-6 p-4 rounded-full bg-red-600 text-black shadow-lg"
        >
          <ArrowUp size={30} />
        </motion.button>
      )}
    </div>
  );
}

export default Home;
