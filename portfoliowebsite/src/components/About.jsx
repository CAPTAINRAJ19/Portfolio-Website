import React, { useContext, useState, useEffect } from 'react';
import { FaDownload, FaInfoCircle } from "react-icons/fa";
import { ThemeContext } from '../ThemeContext';
import { motion } from 'framer-motion';
import log from '../assets/images/pic.jpg';

const About = () => {
  const { theme } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);
  
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('about');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleDownload = () => {
    const resumeUrl = "/Dhruv_Resume.pdf"; 
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Dhruv_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleKnowMore = () => {
    alert("Functionality yet to be added");
  };

  // Animated heading component
  const AnimatedHeading = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );

  return (
    <section 
      id="about" 
      className={`relative min-h-screen flex items-center justify-center py-16 px-4 md:px-8 lg:px-16 transition-colors duration-500 ${
        theme === 'dark' 
          ? 'bg-black text-white' 
          : 'bg-gray-50 text-gray-900'
      }`}
    >
      {/* Background gradient effect */}
      <div className={`absolute inset-0 overflow-hidden ${theme === 'dark' ? 'opacity-20' : 'opacity-10'}`}>
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${
          theme === 'dark' ? 'bg-[#0aff99]' : 'bg-teal-600'
        } filter blur-3xl`}></div>
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full ${
          theme === 'dark' ? 'bg-[#0aff99]/50' : 'bg-purple-400'
        } filter blur-3xl`}></div>
      </div>

      <div className="container mx-auto z-10">
        {/* Section Heading */}
        <AnimatedHeading>
          <h2 className={`text-center text-4xl lg:text-5xl font-bold mb-16 ${
            theme === 'dark' ? 'text-[#0aff99]' : 'text-teal-600'
          }`} style={{ fontFamily: "orbitron" }}>
            ABOUT ME
          </h2>
        </AnimatedHeading>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column - Image */}
          <motion.div 
            className={`w-full lg:w-2/5 order-2 lg:order-1`}
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={`relative group`}>
              {/* Animated border */}
              <div className={`absolute -inset-1 rounded-2xl ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-[#0aff99] via-[#0aff99]/70 to-[#0aff99]/90' 
                  : 'bg-gradient-to-r from-teal-600 via-cyan-500 to-purple-600'
              } opacity-75 group-hover:opacity-100 blur group-hover:blur-xl transition-all duration-1000`}></div>
              
              {/* Image container */}
              <div className={`relative rounded-xl overflow-hidden aspect-square ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              } p-1`}>
                <img 
                  src={log} // Replace with your image path "kwbg"
                  alt="Dhruv Raj Singh" 
                  className="w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Info */}
          <motion.div 
            className="w-full lg:w-3/5 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={`p-6 lg:p-8 rounded-2xl ${
              theme === 'dark' 
                ? 'bg-gray-900/80 backdrop-blur-sm border border-[#0aff99]/30' 
                : 'bg-white shadow-xl'
            } transition-all duration-300 hover:shadow-2xl ${
              theme === 'dark' ? 'hover:shadow-[#0aff99]/20' : 'hover:shadow-teal-600/20'
            }`}>
              <h3 className={`text-xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              } font-medium mb-1`} style={{ fontFamily: "gruppo" }}>
                Hey there, I'm
              </h3>
              
              <h1 className={`text-3xl lg:text-4xl font-bold mb-4 ${
                theme === 'dark' ? 'text-[#0aff99]' : 'text-teal-600'
              }`} style={{ fontFamily: "orbitron" }}>
                DHRUV RAJ SINGH
              </h1>
              
              <div className={`space-y-4 font-bold mb-6 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              } text-base lg:text-lg`} style={{ fontFamily: "Gruppo" }}>
                <p className="font-medium leading-relaxed">
                  I am a self-taught full-stack developer currently pursuing a Bachelor's degree in Computer Engineering at the Army Institute of Technology, Pune.
                </p>
                
                <p className="font-medium leading-relaxed">
                  With 8+ months in frontend development and 2+ months in full-stack development, I turn ideas into powerful web applications.
                </p>
                
                <p className="font-medium leading-relaxed">
                  I'm passionate about creating responsive, user-friendly interfaces and scalable backend solutions that solve real-world problems.
                </p>
              </div>
              
              {/* Buttons with hover animations */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button 
                  className={`group py-3 px-6 rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-[#0aff99] text-black hover:bg-[#0aff99]/80' 
                      : 'bg-teal-600 text-white hover:bg-teal-700'
                  }`}
                  onClick={handleDownload}
                >
                  <FaDownload className={`mr-2 text-lg ${
                    theme === 'dark' ? 'group-hover:animate-bounce' : 'group-hover:animate-bounce'
                  }`} /> 
                  Download Resume
                </button>
                
                <button 
                  className={`group py-3 px-6 rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-white border border-[#0aff99]/30 hover:border-[#0aff99]/80' 
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                  onClick={handleKnowMore}
                >
                  <FaInfoCircle className={`mr-2 text-lg ${
                    theme === 'dark' ? 'text-[#0aff99] group-hover:rotate-12' : 'group-hover:rotate-12'
                  } transition-transform duration-300`} /> 
                  Know More
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;