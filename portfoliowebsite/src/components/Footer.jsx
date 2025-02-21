import { useState } from "react";
import { Copy, Check, Send } from "lucide-react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaReddit,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  const [copied, setCopied] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:3000/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert("Message Sent and Stored in Database!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong.");
    }
  };
  

  return (
    <section id="contact" className="sticky top-0 z-10">
      <footer className="footer border-2 justify-center border-black h-auto bg-black py-1 pb-2">
        <div className="text-center text-white font-bold pt-2 mb-4 text-xl sm:text-2xl">
          👋🏻 Thanks for stopping by! Here is more of me if you're interested 🙂
        </div>

        <div className="flex flex-wrap sm:flex-nowrap w-full justify-center sm:justify-between p-1 px-8 sm:px-24 border-t-white border-t-2">
          {[
            { href: "https://github.com/CAPTAINRAJ19", icon: <FaGithub />, text: "Github" },
            { href: "https://www.linkedin.com/in/dhruv-raj-singh-05b1a7248/", icon: <FaLinkedin />, text: "LinkedIn" },
            { href: "https://x.com/DhruvRa48929519", icon: <FaTwitter />, text: "Twitter" },
            { href: "https://www.instagram.com/captainraj_19/", icon: <FaInstagram />, text: "Instagram" },
            { href: "https://www.reddit.com/user/CaptainRaj_19/", icon: <FaReddit />, text: "Reddit" },
            { href: "https://discordapp.com/users/captainraj_19_60391/", icon: <FaDiscord />, text: "Discord" },
            { href: "https://www.youtube.com/@dhruvrajsingh9055", icon: <FaYoutube />, text: "YouTube" },
          ].map(({ href, icon, text }, index) => (
            <a key={index} href={href} target="_blank" className="m-2 sm:m-0">
              <button className="border-2 border-white mt-4 rounded-full h-20 w-20 sm:h-24 sm:w-24 flex flex-col items-center justify-center text-white transition-all duration-150 hover:text-gray-400">
                <span className="text-3xl sm:text-4xl">{icon}</span>
                <h1 className="text-xs sm:text-sm">{text}</h1>
              </button>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row text-white mx-4 sm:mx-16 mt-6">
          <div className="w-full sm:w-1/3 flex flex-col md:mt-6 mb-6 md:mb-0 items-center sm:items-start">
            {[
              { text: "7880558166", display: "📞 +91 7880558XXX" },
              { text: "dhruvrajsingh.1019@gmail.com", display: "📧 dhruvrajsingh.1019@gmail.com" },
              { text: "dhruvrajsingh_22191@aitpune.edu.in", display: "📧 dhruvrajsingh_22191@aitpune.edu.in" },
              { text: "Army Institute of Technology, Alandi rd Dighi 411015, Pune, Maharashtra", display: "🏠Location" },
            ].map(({ text, display }, index) => (
              <button
                key={index}
                onClick={() => handleCopy(text, index)}
                className="my-1 h-10 text-xs border-white border-2 w-64 rounded-lg hover:bg-white hover:text-black flex items-center justify-center gap-2 px-3"
              >
                {copied === index ? <Check size={18} /> : <Copy size={18} />}
                {display}
              </button>
            ))}
          </div>

          <div className="w-full sm:w-2/3 text-center sm:px-8">
            <div className="bg-gray-900 p-4 rounded-lg w-full max-w-md mx-auto">
              <h2 className="text-yellow-400 text-lg font-semibold">💬 Get in Touch</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-2 rounded-md bg-gray-800 border border-gray-600 text-white"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 rounded-md bg-gray-800 border border-gray-600 text-white"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <textarea
                  placeholder="Your Message"
                  className="p-2 rounded-md bg-gray-800 border border-gray-600 text-white"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
                <button
                  type="submit"
                  className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2"
                  disabled={loading}
                >
                  <Send size={16} /> {loading ? "Sending..." : "Send"}
                </button>
              </form>
              {responseMessage && (
                <p className="text-sm mt-2">{responseMessage}</p>
              )}
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomfooter h-16 bg-black text-gray-400 border-t-2 text-sm text-center">
        <h1 className="block py-4">© 2024 CaptainRaj_19. All rights reserved.</h1>
      </div>
    </section>
  );
};

export default Footer;
