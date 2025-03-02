import { useState, useContext, useEffect } from "react";
import { Copy, Check, Send } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeContext } from "../ThemeContext";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaReddit,
  FaDiscord,
} from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/CAPTAINRAJ19", icon: <FaGithub />, text: "Github" },
  { href: "https://www.linkedin.com/in/dhruv-raj-singh-05b1a7248/", icon: <FaLinkedin />, text: "LinkedIn" },
  { href: "https://x.com/DhruvRa48929519", icon: <FaTwitter />, text: "Twitter" },
  { href: "https://www.instagram.com/captainraj_19/", icon: <FaInstagram />, text: "Instagram" },
  { href: "https://www.reddit.com/user/CaptainRaj_19/", icon: <FaReddit />, text: "Reddit" },
  { href: "https://discordapp.com/users/captainraj_19_60391/", icon: <FaDiscord />, text: "Discord" },
  { href: "https://www.youtube.com/@dhruvrajsingh9055", icon: <FaYoutube />, text: "YouTube" },
];

const contactInfo = [
  { text: "7880558166", display: "📞 +91 7880558XXX" },
  { text: "dhruvrajsingh.1019@gmail.com", display: "📧 dhruvrajsingh.1019@gmail.com" },
  { text: "dhruvrajsingh_22191@aitpune.edu.in", display: "📧 dhruvrajsingh_22191@aitpune.edu.in" },
  { text: "Army Institute of Technology, Alandi rd Dighi 411015, Pune, Maharashtra", display: "🏠 Location" },
];

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const [copied, setCopied] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('contact');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://portfolio-website-1-b7sb.onrender.com/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setResponseMessage("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("⚠️ Something went wrong.");
    }

    setLoading(false);
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
      id="contact"
      className={`relative min-h-screen flex items-center justify-center py-16 px-4 md:px-8 lg:px-16 transition-colors duration-500 ${
        theme === "dark" 
          ? "bg-black text-white" 
          : "bg-gray-50 text-gray-900"
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
            LET'S CONNECT
          </h2>
        </AnimatedHeading>

        {/* Social Links Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={`p-6 rounded-2xl mb-8 ${
            theme === 'dark' 
              ? 'bg-gray-900/60 backdrop-blur-sm border border-[#0aff99]/20' 
              : 'bg-white/80 backdrop-blur-sm shadow-xl'
          }`}>
            <h3 className={`text-center text-2xl font-bold mb-6 ${
              theme === 'dark' ? 'text-[#0aff99]' : 'text-teal-600'
            }`} style={{ fontFamily: "orbitron" }}>
              FIND ME ONLINE
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-1 overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated border */}
                  <div className={`absolute -inset-1 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-[#0aff99] via-[#0aff99]/70 to-[#0aff99]/90' 
                      : 'bg-gradient-to-r from-teal-600 via-cyan-500 to-purple-600'
                  } opacity-0 group-hover:opacity-100 blur group-hover:blur transition-all duration-300`}></div>
                  
                  {/* Content */}
                  <div className={`relative flex flex-col items-center justify-center ${
                    theme === 'dark' 
                      ? 'bg-gray-800 hover:bg-gray-800/80' 
                      : 'bg-white hover:bg-gray-50'
                  } w-20 h-20 rounded-lg transition-all duration-300`}>
                    <span className={`text-2xl mb-1 ${
                      theme === 'dark' ? 'text-[#0aff99] group-hover:text-[#0aff99]' : 'text-teal-600 group-hover:text-teal-700'
                    } transition-transform duration-300 group-hover:scale-110`}>
                      {link.icon}
                    </span>
                    <span className={`text-xs font-medium ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {link.text}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Contact Info Column */}
          <motion.div 
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={`p-6 lg:p-8 rounded-2xl ${
              theme === 'dark' 
                ? 'bg-gray-900/80 backdrop-blur-sm border border-[#0aff99]/30' 
                : 'bg-white shadow-xl'
            } transition-all duration-300 hover:shadow-2xl ${
              theme === 'dark' ? 'hover:shadow-[#0aff99]/20' : 'hover:shadow-teal-600/20'
            }`}>
              <h3 className={`text-xl font-bold mb-6 ${
                theme === 'dark' ? 'text-[#0aff99]' : 'text-teal-600'
              }`} style={{ fontFamily: "orbitron" }}>
                CONTACT DETAILS
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCopy(info.text, index)}
                    className={`w-full p-3 rounded-xl flex items-center justify-between group transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gray-800 hover:bg-gray-800/70 border border-[#0aff99]/20 hover:border-[#0aff99]/50'
                        : 'bg-gray-100 hover:bg-gray-200 border border-teal-600/10 hover:border-teal-600/30'
                    }`}
                  >
                    <span className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {info.display}
                    </span>
                    <span className={`${
                      theme === 'dark' ? 'text-[#0aff99]' : 'text-teal-600'
                    }`}>
                      {copied === index ? <Check className="animate-pulse" size={18} /> : <Copy className="group-hover:rotate-12 transition-transform duration-300" size={18} />}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Message Form Column */}
          <motion.div 
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={`p-6 lg:p-8 rounded-2xl ${
              theme === 'dark' 
                ? 'bg-gray-900/80 backdrop-blur-sm border border-[#0aff99]/30' 
                : 'bg-white shadow-xl'
            } transition-all duration-300 hover:shadow-2xl ${
              theme === 'dark' ? 'hover:shadow-[#0aff99]/20' : 'hover:shadow-teal-600/20'
            }`}>
              <h3 className={`text-xl font-bold mb-6 ${
                theme === 'dark' ? 'text-[#0aff99]' : 'text-teal-600'
              }`} style={{ fontFamily: "orbitron" }}>
                GET IN TOUCH
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`w-full p-4 rounded-xl focus:outline-none focus:ring-2 ${
                      theme === 'dark'
                        ? 'bg-gray-800 border border-[#0aff99]/20 focus:ring-[#0aff99]/50 text-white'
                        : 'bg-gray-100 border border-teal-600/10 focus:ring-teal-600/30 text-gray-900'
                    } transition-all duration-300`}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`w-full p-4 rounded-xl focus:outline-none focus:ring-2 ${
                      theme === 'dark'
                        ? 'bg-gray-800 border border-[#0aff99]/20 focus:ring-[#0aff99]/50 text-white'
                        : 'bg-gray-100 border border-teal-600/10 focus:ring-teal-600/30 text-gray-900'
                    } transition-all duration-300`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    className={`w-full p-4 rounded-xl focus:outline-none focus:ring-2 ${
                      theme === 'dark'
                        ? 'bg-gray-800 border border-[#0aff99]/20 focus:ring-[#0aff99]/50 text-white'
                        : 'bg-gray-100 border border-teal-600/10 focus:ring-teal-600/30 text-gray-900'
                    } transition-all duration-300`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                
                <div className="relative group">
                  {/* Animated gradient border for button */}
                  <div className={`absolute -inset-1 rounded-xl ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-[#0aff99] via-[#0aff99]/70 to-[#0aff99]/90' 
                      : 'bg-gradient-to-r from-teal-600 via-cyan-500 to-purple-600'
                  } opacity-50 group-hover:opacity-100 blur group-hover:blur-md transition-all duration-1000`}></div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className={`relative w-full p-4 rounded-lg flex items-center justify-center gap-3 font-bold ${
                      theme === 'dark'
                        ? 'bg-gray-800 hover:bg-gray-800/90 text-[#0aff99]'
                        : 'bg-teal-600 hover:bg-teal-700 text-white'
                    } transition-all duration-300`}
                  >
                    <Send size={18} className={`${loading ? '' : 'group-hover:translate-x-1'} transition-transform duration-300`} />
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
                
                {responseMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-3 rounded-lg text-center ${
                      responseMessage.includes("✅") 
                        ? (theme === 'dark' ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-800')
                        : (theme === 'dark' ? 'bg-red-900/50 text-red-300' : 'bg-red-100 text-red-800')
                    } `}
                  >
                    {responseMessage}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
        
        {/* Footer credits */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            © {new Date().getFullYear()} Dhruv Raj Singh. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;