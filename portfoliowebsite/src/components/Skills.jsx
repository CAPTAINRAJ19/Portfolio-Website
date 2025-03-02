import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../ThemeContext';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaPython, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiCplusplus, SiExpress, SiTypescript, SiJquery, SiCanva } from 'react-icons/si';
import { HiAcademicCap } from 'react-icons/hi';
import { FaRobot, FaCode, FaCloud } from 'react-icons/fa';
import FadeInText from '../assets/FadeInText';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-red-500" />, hoverColor: 'shadow-red-500' },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, hoverColor: 'shadow-blue-500' },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />, hoverColor: 'shadow-yellow-500' },
  { name: 'React', icon: <FaReact className="text-cyan-500" />, hoverColor: 'shadow-cyan-500' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, hoverColor: 'shadow-teal-400' },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, hoverColor: 'shadow-green-500' },
  { name: 'Express.js', icon: <SiExpress className="text-gray-500" />, hoverColor: 'shadow-gray-500' },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700" />, hoverColor: 'shadow-green-700' },
  { name: 'SQL', icon: <FaDatabase className="text-orange-500" />, hoverColor: 'shadow-orange-500' },
  { name: 'C++', icon: <SiCplusplus className="text-purple-500" />, hoverColor: 'shadow-purple-500' },
  { name: 'Python', icon: <FaPython className="text-[#fbfb21]" />, hoverColor: 'shadow-yellow-300' },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" />, hoverColor: 'shadow-blue-300' },
  { name: 'JQuery', icon: <SiJquery className="text-purple-400" />, hoverColor: 'shadow-purple-400' },
  { name: 'Figma', icon: <FaFigma className="text-pink-500" />, hoverColor: 'shadow-pink-500' },
  { name: 'Canva', icon: <SiCanva className="text-blue-400" />, hoverColor: 'shadow-blue-400' },
  { name: 'Git', icon: <FaGitAlt className="text-orange-500" />, hoverColor: 'shadow-orange-500' },
  { name: 'GitHub', icon: <FaGithub className="text-white dark:text-gray-800 " />, hoverColor: 'shadow-white' },
  { name: 'Version Control', icon: <FaGitAlt className="text-red-500" />, hoverColor: 'shadow-red-500' },
];

const softSkills = ['Problem Solving', 'Communication', 'Time Management', 'Teamwork', 'Adaptability'];

const aiTools = [
  { name: 'ChatGPT', icon: <FaRobot className="text-green-400" /> },
  { name: 'Claude', icon: <FaCode className="text-blue-400" /> },
  { name: 'Copilot', icon: <FaRobot className="text-yellow-400" /> },
  { name: 'Vercel.ai', icon: <FaCloud className="text-gray-400" /> },
  { name: 'Gemini', icon: <FaRobot className="text-purple-400" /> },
  { name: 'Perplexity', icon: <FaCode className="text-orange-400" /> },
  { name: 'DALL·E', icon: <FaCloud className="text-pink-400" /> },
  { name: 'Blackbox', icon: <FaRobot className="text-red-400" /> }
];

const certifications = [
  {
    name: 'Participation Certificate - Tata Imagination Challenge',
    url: 'https://unstop.com/certificate-preview/1e0da492-96fa-4575-a6c3-08a0a2f9a01d',
    issuer: 'Tata Group',
    date: '2024'
  },
  {
    name: 'Participation Certificate - Unstop Talent Spark: Engineering February',
    url: 'https://unstop.com/certificate-preview/59cf5287-bdaa-4c48-90a6-b18a50440f91',
    issuer: 'Unstop',
    date: '2025'
  },
  {
    name: 'Fullstack Web Development Bootcamp by Angela Yu',
    url: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=ST3MT200225A',
    issuer: 'Udemy',
    date: '2024',
    status: 'ongoing'
  },
  {
    name: '30 DC Course by Aryan Singh',
    url: 'https://30dayscoding.com/dashboard',
    issuer: 'Development Circle',
    date: '2025',
    status: 'ongoing'
  },
  {
    name: 'Google Cloud study jams',
    url: 'https://certificate.givemycertificate.com/c/21823440-2b66-4a05-9926-b44607dde999',
    issuer: 'Google Developer Student Clubs',
    date: '2023',
    
  },
];

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('skills');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        type: 'spring', 
        stiffness: 200, 
        damping: 10 
      }
    }
  };

  // Floating animation for background elements
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: 'mirror'
      }
    }
  };

  return (
    <section 
      id="skills" 
      className={`relative min-h-screen py-16 px-4 sm:px-8 lg:px-16 transition-colors duration-500 ${
        theme === 'dark' 
          ? 'bg-black text-white' 
          : 'bg-gray-50 text-gray-900'
      }`}
    >
      {/* Background gradient effect with animations */}
      <div className={`absolute inset-0 overflow-hidden z-10 ${theme === 'dark' ? 'opacity-60' : 'opacity-50'}`}>
        <motion.div 
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          className={`absolute top-20 left-20 w-96 h-96 rounded-full ${
            theme === 'dark' ? 'bg-[#0aff99]/50' : 'bg-purple-400/50'
          } filter blur-3xl`}
        ></motion.div>
        <motion.div 
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          custom={1}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            repeatType: 'mirror',
            delay: 1
          }}
          className={`absolute bottom-20 right-20 w-96 h-96 rounded-full ${
            theme === 'dark' ? 'bg-[#0aff99]/50' : 'bg-teal-500/50'
          } filter blur-3xl`}
        ></motion.div>
        <motion.div 
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          custom={2}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            repeatType: 'mirror',
            delay: 2 
          }}
          className={`absolute top-1/3 right-1/3 w-80 h-80 rounded-full ${
            theme === 'dark' ? 'bg-[#0aff99]/40' : 'bg-blue-400/40'
          } filter blur-3xl`}
        ></motion.div>
      </div>
      
      <div className="container mx-auto z-10 relative">
        {/* Section Heading with text reveal animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <motion.h2 
            variants={titleVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className={`text-center text-4xl lg:text-5xl font-bold mb-4 ${
              theme === 'dark' ? 'text-[#0aff99]' : 'text-teal-600'
            }`} 
            style={{ fontFamily: "syncopate" }}
          >
            <motion.span
              initial={{ display: "inline-block" }}
              animate={isVisible ? { 
                rotateY: [0, 360],
                transition: { duration: 1.5, ease: "easeInOut" }
              } : {}}
            >
              MY
            </motion.span>{" "}
            <motion.span
              initial={{ display: "inline-block" }}
              animate={isVisible ? { 
                rotateY: [0, 360],
                transition: { duration: 1.5, delay: 0.2, ease: "easeInOut" }
              } : {}}
            >
              SKILLSET
            </motion.span>
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`h-1 w-24 mx-auto rounded-full ${
              theme === 'dark' ? 'bg-[#0aff99]' : 'bg-teal-600'
            }`}
          />
        </motion.div>
        
        {/* Technical Skills with staggered animation */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h3 
            variants={titleVariants}
            className={`text-2xl font-bold text-center mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}
            style={{ fontFamily: "orbitron" }}
          >
            Technical Skills
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  boxShadow: `0px 0px 20px 2px ${theme === 'dark' ? '#0aff9950' : 'rgba(20, 184, 166, 0.3)'}`,
                  transition: { type: 'spring', stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setActiveSkill(skill.name)}
                onHoverEnd={() => setActiveSkill(null)}
                className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-gray-900 border border-gray-800 hover:border-[#0aff99]/50' 
                    : 'bg-white border border-gray-200 hover:border-teal-500/50 shadow-sm'
                } hover:shadow-lg relative overflow-hidden`}
              >
                <motion.div 
                  className="text-4xl mb-2 relative z-10"
                  animate={activeSkill === skill.name ? { 
                    scale: [1, 1.2, 1], 
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.5 }
                  } : {}}
                >
                  {skill.icon}
                </motion.div>
                <p className={`text-base relative z-10 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {skill.name}
                </p>
                
                {/* Background pulse effect on hover */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={activeSkill === skill.name ? { 
                    scale: [0, 1.5],
                    opacity: [0, 0.2, 0],
                    transition: { duration: 1.5, repeat: Infinity }
                  } : { scale: 0, opacity: 0 }}
                  className={`absolute inset-0 rounded-full ${
                    theme === 'dark' ? 'bg-[#0aff99]' : 'bg-teal-500'
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* AI Tools with fly-in animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <motion.h3 
            variants={titleVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className={`text-2xl font-bold text-center mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}
            style={{ fontFamily: "orbitron" }}
          >
            AI Tools
          </motion.h3>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-6"
          >
            {aiTools.map((tool, index) => (
              <motion.div 
                key={index}
                variants={itemVariants} 
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  rotateZ: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-gray-900 border border-gray-800 hover:border-[#0aff99]/50' 
                    : 'bg-white border border-gray-200 hover:border-teal-500/50 shadow-sm'
                } hover:shadow-lg`}
              >
                <motion.div 
                  className="text-3xl mb-2"
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.6, ease: "easeInOut" }
                  }}
                >
                  {tool.icon}
                </motion.div>
                <p className={`text-base ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Soft Skills with reveal animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <motion.h3 
            variants={titleVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className={`text-2xl font-bold text-center mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}
            style={{ fontFamily: "orbitron" }}
          >
            Soft Skills
          </motion.h3>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-4"
          >
            {softSkills.map((skill, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                  boxShadow: theme === 'dark' 
                    ? '0 0 15px rgba(10, 255, 153, 0.5)' 
                    : '0 0 15px rgba(20, 184, 166, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-base transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-gray-800 text-white hover:bg-[#0aff99]/80 hover:text-black' 
                    : 'bg-gray-200 text-gray-800 hover:bg-teal-500 hover:text-white'
                } shadow-sm hover:shadow-md`}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Certifications with staggered fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16"
        >
          <motion.h3 
            variants={titleVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className={`text-2xl font-bold text-center mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}
            style={{ fontFamily: "Gruppo" }}
          >
            Certifications & Courses
          </motion.h3>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: theme === 'dark' 
                    ? '0 0 20px rgba(10, 255, 153, 0.4)' 
                    : '0 0 20px rgba(20, 184, 166, 0.4)'
                }}
                whileTap={{ scale: 0.98 }}
                className={`rounded-lg p-6 transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-gray-900 border border-gray-800 hover:border-[#0aff99]/50' 
                    : 'bg-white border border-gray-200 hover:border-teal-500/50'
                } shadow-sm hover:shadow-lg`}
              >
                <a href={cert.url || '#'} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="flex items-start mb-4">
                    <motion.div
                      whileHover={{ 
                        rotate: [-5, 5, -5, 5, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <HiAcademicCap className={`text-3xl flex-shrink-0 mr-3 ${
                        theme === 'dark' ? 'text-[#0aff99]' : 'text-teal-600'
                      }`} />
                    </motion.div>
                    <h3 className={`text-lg font-semibold flex-grow transition-colors duration-300 ${
                      theme === 'dark' 
                        ? 'text-[#0aff99] hover:text-white' 
                        : 'text-teal-600 hover:text-teal-800'
                    }`}>
                      {cert.name}
                    </h3>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`ml-10 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    <p className="mb-1">Issued by: {cert.issuer}</p>
                    <p>Year: {cert.date}</p>
                    {cert.status && (
                      <motion.p
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        Status: <span className={theme === 'dark' ? 'text-[#0aff99]' : 'text-teal-600'}>
                          {cert.status}
                        </span>
                      </motion.p>
                    )}
                  </motion.div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;