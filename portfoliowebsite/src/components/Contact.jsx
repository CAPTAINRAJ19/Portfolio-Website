import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage("");

        try {
            const response = await fetch("http://localhost:3000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            setResponseMessage(result.message);
        } catch (error) {
            setResponseMessage("Failed to send message. Please try again.");
        }

        setLoading(false);
    };

    return (
      <section id='contact' className="bg-black sticky -top-full z-10 h-screen w-screen">
        <div className="  max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                    type="text" name="name" placeholder="Your Name" required
                    value={formData.name} onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                />
                <input 
                    type="email" name="email" placeholder="Your Email" required
                    value={formData.email} onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                />
                <input 
                    type="text" name="subject" placeholder="Subject" required
                    value={formData.subject} onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                />
                <textarea 
                    name="message" placeholder="Your Message" rows="4" required
                    value={formData.message} onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                ></textarea>
                <button 
                    type="submit" disabled={loading}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
            {responseMessage && (
                <p className="mt-4 text-center text-green-500">{responseMessage}</p>
            )}
        </div>
        </section>
    );
};

export default ContactForm;
