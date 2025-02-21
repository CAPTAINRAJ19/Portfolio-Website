import FadeInText from '../assets/FadeInText';
import { useState, useEffect } from "react";

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

export default function Work() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % 3); 
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="work" className="md:bg-black bg-white relative md:sticky -top-full z-10 md:pt-6 pb-6 px-4 sm:px-6 lg:px-8 text-white">
      <FadeInText text="WORKS " />
      <h1 style={{fontFamily:"syncopate"}} className='text-black font-bold text-center text-3xl'>MY WORKS</h1>

      <div className="flex flex-col space-y-10">
        {projects.map((project, index) => (
          <div key={project.name} className={`flex flex-col lg:flex-row items-center gap-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
            <div className="w-full lg:w-1/2 flex justify-center">

              <img
                src={project.laptopScreenshots[currentScreenshot]}
                alt={project.name}
                className="hidden lg:block w-full h-auto object-contain transition-opacity  rounded-lg"
              />
              <img
                src={project.mobileScreenshots[currentScreenshot]}
                alt={project.name}
                className="lg:hidden w-full h-auto object-contain transition-opacity duration-500 hover:shadow-2xl hover:shadow-[#ffbe0b] rounded-lg"
              />
            </div>

     
            <div className="w-full lg:w-1/2 text-center lg:text-left px-6">
              <h3 style={{ fontFamily: "orbitron" }} className="text-2xl font-semibold text-[#ffd400] mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-3">{project.description}</p>
              <p className="text-gray-300 mb-2">Tech Stack:</p>
              <ul className="flex flex-wrap justify-center lg:justify-start gap-2">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:shadow-lg hover:shadow-[#ffbe0b] transition duration-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 mt-4 justify-center lg:justify-start">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#ffbe0b] text-black px-4 py-2 rounded-lg hover:bg-[#ffcc33] transition duration-300 font-semibold">
                    🚀 Try Now
                  </button>
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300 font-semibold">
                    🛠 Check GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
