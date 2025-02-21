import React from 'react';
import { motion } from 'framer-motion';
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
  { name: 'GitHub', icon: <FaGithub className="text-white" />, hoverColor: 'shadow-white' },
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
    status:'ongoing'
  },
  {
    name: '30 DC Course by Aryan Singh',
    url: 'https://30dayscoding.com/dashboard',
    issuer: 'Development Circle',
    date: '2025',
    status:'ongoing'
  },

];

const Skills = () => {
  return (
    <section id="skills" className="bg-black sticky  z-10 text-white py-16 px-8">
      <FadeInText className="text-4xl font-bold text-center mb-16" text="SKILLSET" />
      
      <div className="grid grid-cols-2 mt-10 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2, textShadow: '0px 0px 10px #0ff' }}
            className={`flex flex-col items-center justify-center p-4 border border-gray-800 rounded-4xl transition-all duration-50 hover:bg-opacity-20 hover:shadow-lg ${skill.hoverColor}`}
          >
            <div className="text-5xl mb-2">{skill.icon}</div>
            <p className="text-lg">{skill.name}</p>
          </motion.div>
        ))}
      </div>

      <h2 className="text-4xl font-bold text-center mt-16 mb-8">AI TOOLS</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {aiTools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center p-4 border border-gray-800 rounded-lg shadow-md hover:shadow-xl hover:bg-gray-900 transition-all">
            <div className="text-4xl mb-2">{tool.icon}</div>
            <p className="text-lg">{tool.name}</p>
          </div>
        ))}
      </div>
      <h2 className="text-4xl font-bold text-center mt-16 mb-8">Soft Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {softSkills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-800 rounded-full text-lg hover:text-black hover:bg-green-400 transition-all shadow-md hover:shadow-lg"
          >
            {skill}
          </span>
        ))}
      </div>


      <h2 style={{fontFamily: "Gruppo"}} className="text-4xl font-bold text-center mt-16 mb-8">Certifications & Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-400 transition-all"
          >
            <a href={cert.url || '#'} target="_blank" rel="noopener noreferrer" className="block h-full">
              <div className="flex items-start justify-between mb-4">
                <HiAcademicCap className="text-4xl text-blue-400 flex-shrink-0 mr-2" />
                <h3 className="text-xl font-semibold text-blue-400 hover:text-green-400 transition-all flex-grow">
                  {cert.name}
                </h3>
              </div>
              <div className="text-gray-400 ml-12">
                <p className="mb-1">Issued by: {cert.issuer}</p>
                <p>Year: {cert.date}</p>
                {(cert.status)?(<p>Status: {cert.status}</p>):(<p></p>)}
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
