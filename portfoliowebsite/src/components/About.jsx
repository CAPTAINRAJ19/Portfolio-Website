import React from 'react'
import FadeInText from '../assets/FadeInText';
import kwbg from '../assets/images/kwbg.png';
import { useRef } from 'react';

function About() {
    const section2 = useRef(null);

  return (
    <div>
        <section className='about sticky top-0 z-10   bg-black  h-screen  justify-center    text-white'>
        <div className="  bg-black  h-full w-full justify-center">
        <FadeInText text="ABOUT " />
        <div className='w-auto h-screen justify-between flex '>
          <div className='memyselfandi w-1/2 ml-10 mt-5 rounded-2xl border-4 border-white px-8 pt-8 h-5/6'>
            <h1 className='text-3xl text-yellow-400 font-gruppo font-semibold '>Hey there, I'm</h1>
            <h1 className='text-4xl text-yellow-400  font-orbitron font-bold '> DHRUV RAJ SINGH</h1>

            <h1 className='mt-10 font-semibold'> A self taught fullstack developer currently pursuing Bachelor's in Computer Engineering  at Army Institute Of Technology, Pune. </h1>
            <h1 className='font-semibold '>As a skilled full-stack developer , I am dedicated to turning ideas into innovative web applications.</h1>
            <h1 className='font-semibold '>I hold more than 8 months of experience in front-end development and more than 2 months of experience in fullstack development</h1>
            <h1 className='font-semibold border-b-2 border-white pb-16'>Explore my latest projects and articles, showcasing my expertise in React.js and web development.</h1>
            <button className="bg-yellow-400 font-orbitron mt-10  text-black font-bold py-2 px-4 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-[0_0_10px_4px_rgba(234,255,0,0.8)] hover:scale-105">
      KNOW MORE
    </button>
    <button className="bg-white font-orbitron mt-10 ml-14 text-black font-bold py-2 px-4 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-[0_0_10px_4px_rgba(234,255,0,0.8)] hover:scale-105">
      HIRE ME
    </button>     
          </div>
          <div className=' overflow-hidden border-4 border-neon shadow-neon h-4/6 mr-20 mt-16 rounded-3xl'> 
            <img className=" h-auto " src={kwbg}></img></div>
          </div>
        
        </div>
  
      </section>

      
    </div>
  )
}

export default About
