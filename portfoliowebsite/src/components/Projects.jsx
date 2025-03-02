import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { motion } from 'framer-motion';

// Import project screenshots (3 for laptop, 3 for mobile per project)
import project1Laptop1 from "../assets/images/project1-laptop1.png";
import project1Laptop2 from "../assets/images/project1-laptop2.png";
import project1Laptop3 from "../assets/images/project1-laptop3.png";
import project1Mobile1 from "../assets/images/p1m1.png";
import project1Mobile2 from "../assets/images/p1m2.png";
import project1Mobile3 from "../assets/images/p1m3.png";

import project2Laptop1 from "../assets/images/project2-laptop1.png";
import project2Laptop2 from "../assets/images/project2-laptop2.png";
import project2Laptop3 from "../assets/images/project2-laptop3.png";
import project2Mobile1 from "../assets/images/p2m1.png";
import project2Mobile2 from "../assets/images/p2m2.png";
import project2Mobile3 from "../assets/images/p2m3.png";

import portfolioLaptop1 from "../assets/images/portfolio-laptop1.png";
import portfolioLaptop2 from "../assets/images/portfolio-laptop2.png";
import portfolioLaptop3 from "../assets/images/portfolio-laptop3.png";
import portfolioMobile1 from "../assets/images/portfolio-mobile1.png";
import portfolioMobile2 from "../assets/images/portfolio-mobile2.png";
import portfolioMobile3 from "../assets/images/portfolio-mobile3.png";

const projects = [
  {
    name: "The Pradaan Portal",
    description: "A centralized donation platform, making it easier for people to donate money, blood, organs, food, or goods to help others. While currently in its most basic version, Pradaan Portal aspires to grow into a fully functional charity hub.",
    laptopScreenshots: [project1Laptop1, project1Laptop2, project1Laptop3],
    mobileScreenshots: [project1Mobile1, project1Mobile2, project1Mobile3],
    techStack: ["React ⚛️", "Tailwind CSS 🎨", "Node.js 🟢", "MongoDB", "ExpressJs"],
    liveLink: "https://pradaanportal.vercel.app/", 
    githubLink: "https://github.com/CAPTAINRAJ19/Pradaanportal", 
  },
  {
    name: "DhruvBlogs",
    description: "A Fullstack blog application for storing the blogs of the users. It provides upvotes functionality, #tag specification and involves use of JONIT text editor.",
    laptopScreenshots: [project2Laptop1, project2Laptop2, project2Laptop3],
    mobileScreenshots: [project2Mobile1, project2Mobile2, project2Mobile3],
    techStack: ["React ⚛️", "MongoDB", "Node.js 🟢", "Tailwind CSS 🎨", "ExpressJs"],
    liveLink: "https://dhruv-blogs.vercel.app/", 
    githubLink: "https://github.com/CAPTAINRAJ19/DhruvBlogs", 
  },
  {
    name: "My Portfolio Website",
    description: "A personal portfolio website showcasing my projects, skills, and achievements. Built with a modern UI/UX to ensure a smooth and engaging experience.",
    laptopScreenshots: [portfolioLaptop1, portfolioLaptop2, portfolioLaptop3],
    mobileScreenshots: [portfolioMobile1, portfolioMobile2, portfolioMobile3],
    techStack: ["React ⚛️", "Tailwind CSS 🎨", "Framer Motion 🎥", "EmailJS"],
    liveLink: "https://myportfolio.com", 
    githubLink: "https://github.com/CAPTAINRAJ19/portfolio", 
  }
];

const Work = () => {
  const { theme } = useContext(ThemeContext);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % 3); 
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('work');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section 
      id="work" 
      className={`relative   min-h-screen py-16 px-4 sm:px-8 lg:px-16 transition-colors duration-500 ${
        theme === 'dark' 
          ? 'bg-black text-white' 
          : 'bg-gray-50 text-gray-900'
      }`}
    >
{/* Background gradient effect */}
<div className="absolute inset-0 overflow-hidden">
    <div 
        className={`absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full
            ${theme === 'dark' ? 'bg-[#0aff99]/50' : 'bg-teal-500/40'}
            filter blur-[120px]`}
    ></div>
    <div 
        className={`absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full
            ${theme === 'dark' ? 'bg-[#0aff99]/40' : 'bg-purple-500/40'}
            filter blur-[120px]`}
    ></div>
</div>


      <div className="container mx-auto z-10 relative">
        {/* Section Heading */}
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className={`text-center text-4xl lg:text-5xl font-bold mb-16 ${
            theme === 'dark' ? 'text-[#0aff99]' : 'text-teal-600'
          }`} 
          style={{ fontFamily: "syncopate" }}
        >
          MY WORKS
        </motion.h2>

        <div className="flex flex-col space-y-20">
          {projects.map((project, index) => (
            <motion.div 
              key={project.name} 
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-10 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative group w-full">
                  {/* Animated border */}
                  <div className={`absolute -inset-1 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-[#0aff99] via-[#0aff99]/70 to-[#0aff99]/90' 
                      : 'bg-gradient-to-r from-teal-600 via-cyan-500 to-purple-600'
                  } opacity-0 group-hover:opacity-100 blur-md transition-all duration-1000`}></div>
                  
                  {/* Screenshot container */}
                  <div className={`relative rounded-lg overflow-hidden ${
                    theme === 'dark' ? 'bg-auto' : 'bg-auto'
                  } p-1`}>
                    <img
                      src={project.laptopScreenshots[currentScreenshot]}
                      alt={project.name}
                      className="hidden lg:block w-full h-auto object-contain transition-all duration-500 rounded-lg"
                    />
                    <img
                      src={project.mobileScreenshots[currentScreenshot]}
                      alt={project.name}
                      className="lg:hidden w-full h-auto object-contain transition-all duration-500 rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="w-full lg:w-1/2 text-center lg:text-left px-4 lg:px-6">
                <h3 
                  style={{ fontFamily: "orbitron" }} 
                  className={`text-2xl font-semibold mb-4 ${
                    theme === 'dark' ? 'text-[#0aff99]' : 'text-teal-600'
                  }`}
                >
                  {project.name}
                </h3>
                
                <p className={`mb-6 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <p className={`mb-2 font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                  }`}>
                    Tech Stack:
                  </p>
                  
                  <ul className="flex flex-wrap justify-center lg:justify-start gap-2">
                    {project.techStack.map((tech) => (
                      <li
                        key={tech}
                        className={`px-4 py-2 rounded-md text-sm transition duration-300 ${
                          theme === 'dark' 
                            ? 'bg-gray-800 text-white hover:shadow-[#0aff99]/30 hover:shadow-lg' 
                            : 'bg-gray-200 text-gray-800 hover:shadow-teal-600/20 hover:shadow-lg'
                        }`}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 mt-6 justify-center lg:justify-start">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`rounded-lg transition duration-300 transform hover:scale-105 ${
                      theme === 'dark' 
                        ? 'bg-[#0aff99] text-black hover:bg-[#0aff99]/80' 
                        : 'bg-teal-600 text-white hover:bg-teal-700'
                    }`}
                  >
                    <button className="px-4 py-2 font-semibold">
                      🚀 Try Now
                    </button>
                  </a>
                  
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`rounded-lg transition duration-300 transform hover:scale-105 ${
                      theme === 'dark' 
                        ? 'bg-gray-800 text-white border border-[#0aff99]/30 hover:border-[#0aff99]/80' 
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    <button className="px-4 py-2 font-semibold">
                      🛠 Check GitHub
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;