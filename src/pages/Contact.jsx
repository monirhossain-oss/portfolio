import React, { useState } from 'react';
import { motion } from "framer-motion";

const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Use mailto to send email
        window.location.href = `mailto:mdmonirhos571@gmail.com?subject=Message from ${formData.name}&body=${formData.message} (${formData.email})`;
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#0C031C] text-white px-4 py-16 gap-8"
        >
            {/* Contact Info */}
            <motion.div
                className="flex-1 flex flex-col gap-4 text-left max-w-md"
                initial="hidden"
                whileInView="visible"
                variants={sectionVariant}
            >
                <h2 className="text-4xl font-bold mb-4 text-purple-400">Contact Me</h2>
                <p>Phone/WhatsApp: <span className="text-yellow-400">+8801301199471</span></p>
                <p>Email: <span className="text-yellow-400">mdmonirhos571@gmail.com</span></p>
                <p>Facebook: <a href="https://www.facebook.com/who65478932" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">Link</a></p>
                <p>Github: <a href="https://github.com/monirhossain-oss" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">Link</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/md-monir7/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">Link</a></p>
            </motion.div>

            {/* Contact Form */}
            <motion.form
                onSubmit={handleSubmit}
                className="flex-1 w-full max-w-md flex flex-col gap-4  p-6 rounded-lg shadow-lg"
                initial="hidden"
                whileInView="visible"
                variants={sectionVariant}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded-lg px-4 py-2 text-white"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded-lg px-4 py-2 text-white"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border text-white border-gray-300 rounded-lg px-4 py-2"
                ></textarea>
                <button
                    type="submit"
                    className="border-yellow-400 border-2 hover:text-black py-2 px-4 rounded-lg font-semibold cursor-pointer hover:bg-yellow-400 text-white transition"
                >
                    Send Message
                </button>
            </motion.form>
        </section>
    );
};

export default Contact;
