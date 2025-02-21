import React from 'react'
import { FaUser, FaDownload, FaRocket } from "react-icons/fa";
import FadeInText from '../assets/FadeInText';
import kwbg from '../assets/images/kwbg.png';
import { useRef } from 'react';

function About() {
    const section2 = useRef(null);

    const handleDownload = () => {
        const resumeUrl = "/Dhruv_Resume.pdf"; 
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "Dhruv_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

  return (
    <>
<div id='about' className="sticky top-0 z-10 h-screen">
{/* For larger screens */}
<section className="hidden md:block bg-black h-screen justify-center text-white">
            <div className="bg-black h-full w-full justify-center">
                <FadeInText text="ABOUT " />
                <div className='w-auto h-screen justify-between flex'>
                    <div className='memyselfandi w-1/2 ml-10 mt-5 rounded-2xl border-4 border-white px-8 pt-8 h-5/6'>
                        <h1 className='text-3xl text-red-500 font-semibold' style={{fontFamily:"gruppo"}}>Hey there, I'm</h1>
                        <h1 className='text-4xl text-red-500 font-bold' style={{fontFamily:"orbitron"}}>DHRUV RAJ SINGH</h1>
                        <h1 style={{fontFamily:"Gruppo"}}  className='mt-10 font-semibold'>I am a self-taught full-stack developer currently pursuing a Bachelor's degree in Computer Engineering at the Army Institute of Technology, Pune. As an adept full-stack developer, I am committed to transforming ideas into groundbreaking web applications.</h1>
                        <h1 style={{fontFamily:"Gruppo"}} className='font-semibold'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.</h1>
                        <h1 style={{fontFamily:"Gruppo"}} className='font-semibold'>I bring over 8 months of experience in front-end development and over 2 months in full-stack development. Check out my latest projects and articles, highlighting my proficiency in React.js and web development.</h1>
                        <div className="cont flex space-x-4"><button className="bg-red-500 mt-10 text-black font-bold py-2 px-2 flex justify-center items-center rounded-2xl transition-all duration-300 ease-in-out hover:shadow-[0_0_10px_4px_rgba(234,255,0,0.8)] hover:scale-105" style={{fontFamily:"orbitron"}} onClick={handleDownload} ><FaDownload className='text-2xl'/>Download Resume</button>
                        <button className="bg-white mt-10  text-black font-bold py-2 px-4 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-[0_0_10px_4px_rgba(234,255,0,0.8)] hover:scale-105" style={{fontFamily:"orbitron"}}>Know More</button></div>
                        
                    </div>
                    <div className='overflow-hidden border-4 border-neon shadow-neon h-4/6 mr-20 mt-16 rounded-3xl'>
                        <img className="h-full w-full object-cover" src={kwbg} alt="Kwbg" />
                    </div>
                </div>
            </div>
        </section>
        

        
        {/* For smaller screens */}
        <section className="about  md:hidden bg-black flex justify-center items-center text-white">
            <div className="container mx-auto flex flex-col items-center justify-center h-full w-full">
                <FadeInText text="ABOUT " />
                <div className="flex flex-col items-center w-full">
                    <div className="memyselfandi w-full m-5 rounded-2xl border-4 border-white p-3.5">
                        <h1 className="text-3xl text-yellow-400 font-gruppo font-semibold" style={{fontFamily:"gruppo"}}>Hey there, I'm</h1>
                        <h1 className="text-2xl text-yellow-400 font-bold" style={{fontFamily:"orbitron"}}>DHRUV RAJ SINGH</h1>
                        <h1 style={{fontFamily:"Gruppo"}} className="mt-10 font-semibold">A self taught fullstack developer currently pursuing Bachelor's in Computer Engineering at Army Institute Of Technology, Pune.</h1>
                        <h1 style={{fontFamily:"Gruppo"}} className="font-semibold">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.</h1>
                        <h1 style={{fontFamily:"Gruppo"}}  className="font-semibold">I hold more than 8 months of experience in front-end development and more than 2 months of experience in fullstack development.</h1>
                        <h1 style={{fontFamily:"Gruppo"}}  className="font-semibold border-b-2 border-white pb-2">Explore my latest projects and articles, showcasing my expertise in React.js and web development.</h1>
                        <div className="flex flex-col mt-4">
                            <button className="bg-yellow-400 justify-center items-center space-x-2 flex text-black font-bold py-2 px-4 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-[0_0_10px_4px_rgba(234,255,0,0.8)] hover:scale-105" style={{fontFamily:"orbitron"}} onClick={handleDownload} ><FaDownload className='text-2xl'/>Download Resume</button>
                            <button className="bg-white mt-4 text-black font-bold py-2 px-4 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-[0_0_10px_4px_rgba(234,255,0,0.8)] hover:scale-105" style={{fontFamily:"orbitron"}}>Know More</button>
                        </div>
                    </div>
                    <div className="overflow-hidden border-4 border-neon shadow-neon h-64 m-5 mt-4 rounded-3xl">
                        <img className="w-full h-full object-cover" src={kwbg} alt="Kwbg" />
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
  );
}

export default About;
