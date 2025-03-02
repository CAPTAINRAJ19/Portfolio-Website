import log from '../assets/images/navlogo.png';
import blog from '../assets/images/gradient.png';

import { ThemeContext } from '../ThemeContext';
import { useContext } from "react";

function Navbar({ menuOpen, setMenuOpen }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleDownload = () => {
    const resumeUrl = "/Dhruv_Resume.pdf"; 
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Dhruv_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false); // Close menu after clicking (only affects mobile)
  };
if(theme=="light"){
  return (
    <nav className=' backdrop-blur-3xl flex sticky top-0  justify-between items-center px-4 bg-white shadow-md'>
      {/* Logo */}
      <div className='font-bold flex items-center' >
        <button>
          <img className="hover:opacity-40 w-12 px-1" src={log} alt="Logo" />
        </button>
      </div>

      {/* Hamburger Menu Button for Mobile */}
      <button 
        className='md:hidden text-3xl z-10 focus:outline-none' 
        onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </button>

      {/* Nav Links */}
      <div 
        style={{ fontFamily: "gruppo" }} 
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:flex md:items-center md:space-x-4 transition-all duration-300 ease-in-out 
        ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} md:opacity-100 md:visible`}
      >
<div className='flex flex-col md:flex-row md:items-center w-full md:w-auto'>
  {['Home', 'About', 'Work', 'Resume', 'Skills', 'Contact'].map((item, index) => (
    <button 
      key={index} 
      onClick={item === 'Resume' ? handleDownload : () => scrollToSection(item.toLowerCase())} 
      className='hover:border-b-black hover:border-4 px-4 py-2 text-black border-4 border-white text-lg w-full md:w-auto text-center'>
      {item}
    </button>
  ))}
</div>

      </div>
      <button
  onClick={toggleTheme}
  className="
    bg-white text-black font-bold 
    hover:text-[#0aff99]
    py-2 px-4 
    rounded-lg 
    transition duration-300 ease-in-out
    hover:bg-gray-900
  "
>
  🌙 Dark Mode
</button>


      {/* Social Icons */}
      <div className='hidden md:flex space-x-7'>
        <a href="https://x.com/DhruvRa48929519" target="_blank" rel="noopener noreferrer" className='hover:opacity-50 text-blue-500 text-3xl'><i className="fa-brands fa-twitter"></i></a>
        <a href="https://github.com/CAPTAINRAJ19" target="_blank" rel="noopener noreferrer" className='hover:opacity-50 text-black text-3xl'><i className="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/dhruv-raj-singh-05b1a7248/" target="_blank" rel="noopener noreferrer" className='hover:opacity-50 text-blue-800 text-3xl'><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://www.youtube.com/@dhruvrajsingh9055" target="_blank" rel="noopener noreferrer" className='hover:opacity-50 text-red-600 text-3xl'><i className="fa-brands fa-youtube"></i></a>
        <a href="https://www.instagram.com/captainraj_19/" target="_blank" rel="noopener noreferrer" className='hover:opacity-50 text-pink-600 text-3xl'><i className="fa-brands fa-square-instagram"></i></a>
        <a href="https://www.reddit.com/user/CaptainRaj_19/" target="_blank" rel="noopener noreferrer" className='hover:opacity-50 text-orange-600 text-3xl'><i className="fa-brands fa-square-reddit"></i></a>
      </div>
    </nav>
  );
}







else{
return(
  <>
  <nav className='opacity-90 backdrop-blur-3xl flex sticky top-0  justify-between items-center px-4 bg-black shadow-md'>
      {/* Logo */}
      <div className='font-bold flex items-center' >
        <button>
          <img className="hover:opacity-40 w-12 px-1" src={blog} alt="Logo" />
        </button>
      </div>

      {/* Hamburger Menu Button for Mobile */}
      <button 
        className='md:hidden text-[#0aff99] text-3xl z-10 focus:outline-none' 
        onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </button>

      {/* Nav Links */}
      <div 
        style={{ fontFamily: "gruppo" , }} 
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:flex md:items-center md:space-x-4 transition-all duration-300 ease-in-out 
        ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} md:opacity-100 md:visible`}
      >
<div className='flex flex-col md:flex-row md:items-center w-full md:w-auto'>
  {['Home', 'About', 'Work', 'Resume', 'Skills', 'Contact'].map((item, index) => (
    <button 
      key={index} 
      onClick={item === 'Resume' ? handleDownload : () => scrollToSection(item.toLowerCase())} 
      className='hover:border-b-[#0aff99] hover:border-4 px-4 py-2 text-[#0aff99] border-4 border-black text-lg w-full md:w-auto text-center'>
      {item}
    </button>
  ))}
</div>

      </div>
      <button
  onClick={toggleTheme}
  className="
    bg-black text-white font-bold 
    py-2 px-4 
    rounded-lg 
    transition duration-300 ease-in-out
    hover:bg-gradient-to-r hover:from-green-400 hover:to-emerald-400
  "
>
  ☀️ Light Mode
</button>


      {/* Social Icons */}
      <div className='hidden md:flex space-x-7'>
        <a href="https://x.com/DhruvRa48929519" target="_blank" rel="noopener noreferrer" className='hover:opacity-50 text-blue-500 text-3xl'><i className="fa-brands fa-twitter"></i></a>
        <a href="https://github.com/CAPTAINRAJ19" target="_blank" rel="noopener noreferrer" className='hover:opacity-50 text-gray-500 text-3xl'><i className="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/dhruv-raj-singh-05b1a7248/" target="_blank" rel="noopener noreferrer" className='hover:opacity-50 text-blue-800 text-3xl'><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://www.youtube.com/@dhruvrajsingh9055" target="_blank" rel="noopener noreferrer" className='hover:opacity-50 text-red-600 text-3xl'><i className="fa-brands fa-youtube"></i></a>
        <a href="https://www.instagram.com/captainraj_19/" target="_blank" rel="noopener noreferrer" className='hover:opacity-50 text-pink-600 text-3xl'><i className="fa-brands fa-square-instagram"></i></a>
        <a href="https://www.reddit.com/user/CaptainRaj_19/" target="_blank" rel="noopener noreferrer" className='hover:opacity-50 text-orange-600 text-3xl'><i className="fa-brands fa-square-reddit"></i></a>
      </div>
    </nav>
  </>
);
}
}

export default Navbar;
