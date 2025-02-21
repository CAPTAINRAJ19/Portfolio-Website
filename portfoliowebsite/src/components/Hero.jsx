import React from 'react';
import image1 from '../assets/images/face.jpeg';
import image2 from '../assets/images/colourimage.jpg'; 
import d from '../assets/images/new.png';
import bgImage1 from '../assets/images/1.jpeg';
import bgImage2 from '../assets/images/2.jpeg';
import bgImage3 from '../assets/images/3.jpeg';
import bgImage4 from '../assets/images/4.jpeg';
import { useState, useEffect } from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
const animateWidth = keyframes`
  0%, 10% { width: 0; }
  70%, 90% { width: 100%; }
`;
const AnimatedSpan = styled.span`
  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    color: #ffffff;
    -webkit-text-stroke: 0vw #383d52;
    border-right: 2px solid #ffffff;
    overflow: hidden;
    animation: ${animateWidth} 6s linear infinite;
  }
`;
const AnimatedHeading = ({ text, className = '' }) => {
    return (
      <h2 
        className={`relative   font-bold uppercase ${className}`}
        style={{
           fontFamily:"syncopate",
          color: '#8d99ae',
          WebkitTextStroke: '0.3vw #383d52',
        }}
      >
        <AnimatedSpan data-text={text}>{text}</AnimatedSpan>
      </h2>
    );
  };

function Hero({ menuOpen }) {
    
    const images = [bgImage1, bgImage2, bgImage3, bgImage4]; 
    const [currentImage, setCurrentImage] = useState(0); 
    const [isHovered, setIsHovered] = useState(false);



    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImage((prevIndex) => (prevIndex + 1) % images.length); 
        }, 1000);
    
        return () => clearInterval(interval); 
      }, []);
        
      const getImageSrc = () => (isHovered ? image2 : image1);





  return (
    <section id='home' className='sticky top-0 '>
      <div className='md:hidden flex-col  justify-center items-center' style={{ marginTop: menuOpen ? "22rem" : "10px" }}>
  
      <div className=" flex justify-center">
                          <img src={getImageSrc()} alt="Hoverable"
                              onClick={() => setIsHovered(!isHovered)} 
                              
                              className={`h-80 w-80 border-8 ml-2  border-black rounded-full overflow-hidden transition-transform duration-500 ${
                                  isHovered ? 'scale-100' : 'scale-100'
                                }`}
                        
                          />  
                      </div> 



      <div className="header   justify-center  items-center  pt-10 ">

                      <div className='heading z-10  text-center mr-2 '>
                          <div className='name  flex justify-center  items-end'>
                              <img className="h-14 p-0  border-white"  style={{ backgroundImage: `url(${images[currentImage]})`, className:"w-36 ",backgroundSize: 'contain',backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} src={d} alt="Logo"/>
                              <h1 style={{fontFamily:"orbitron"}} className='text-2xl  font-extrabold pb-1'>HRUV RAJ SINGH</h1> 
                          </div>
                          <div className="flex items-center text-3xl justify-center  rounded-3xl h-16 bg-black">
                  <AnimatedHeading className='text-3xl' text="CaptainRaj_19" />
                  </div>
                  <div style={{fontFamily:"syncopate"}} className=' font-bold text-sm m-0 pt-1'>TURNING VISION INTO REALITY WITH </div>
                  <div style={{fontFamily:"syncopate"}} className='font-bold text-sm m-0 p-0'>CODE AND DESIGN</div>
      
                      </div>
          
                  </div>



                  <div style={{fontFamily: "orbitron"}} className='location flex pl-4 pt-16 pb-10'>
                  <i class="  text-red-600 text-5xl  fa-solid fa-location-dot pr-4"> </i><h1  className=' pt-2 font-orbitron text-center font-bold text-3xl'>PUNE/LUCKNOW</h1>
      
                  </div>
    </div>



    <div className='hidden md:block'>
      <div className="header   justify-center  items-center flex pt-24  ">
                      <div className='heading text-center mr-2 '>
                          <div className='name flex  items-end'>
                              <img className="h-24 p-0  border-white"  style={{ backgroundImage: `url(${images[currentImage]})`, className:"w-36 ",backgroundSize: 'contain',backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} src={d} alt="Logo"/>
                              <h1 style={{fontFamily:"orbitron"}} className='text-4xl  font-extrabold pb-1'>HRUV RAJ SINGH</h1> 
                          </div>
                          <div className="flex items-center justify-start rounded-3xl h-16 bg-black">
                  <AnimatedHeading className='text-5xl' text="CaptainRaj_19" />
                  </div>
                  <div style={{fontFamily:"syncopate"}} className=' font-bold text-sm m-0 pt-1'>TURNING VISION INTO REALITY WITH </div>
                  <div style={{fontFamily:"syncopate"}} className='font-bold text-sm m-0 p-0'>CODE AND DESIGN</div>
      
                      </div>
                      <div className="h-80 w-80 border-8 ml-2 border-black rounded-full overflow-hidden">
                          <img src={getImageSrc()} alt="Hoverable"
                              onMouseEnter={() => setIsHovered(true)} 
                              onMouseLeave={() => setIsHovered(false)} 
                              className={`w-full h-full transition-transform duration-500 ${
                                  isHovered ? 'scale-110' : 'scale-100'
                                }`}
                        
                          />  
                      </div>          
                  </div>



                  <div style={{fontFamily: "orbitron"}} className='location flex pl-12 pt-16 pb-10'>
                  <i class="  text-red-600 text-5xl fa-solid fa-location-dot pr-4"> </i><h1  className=' pt-2 font-orbitron font-bold text-3xl'>PUNE/LUCKNOW</h1>
      
                  </div>
    </div>
    </section>
  )
}

export default Hero
