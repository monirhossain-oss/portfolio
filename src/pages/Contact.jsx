import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebook,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

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
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const templateParams = {
            name: formData.name,
            email: formData.email,   // ✅ ইউজারের email পাঠানো হচ্ছে
            message: formData.message,
            time: new Date().toLocaleString(), // ✅ টাইম পাঠানো হচ্ছে
        };

        emailjs
            .send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(
                () => {
                    alert("✅ Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                    setLoading(false);
                },
                (err) => {
                    console.error(err);
                    alert("❌ Failed to send message. Try again!");
                    setLoading(false);
                }
            );
    };


    return (
        <section
            id="contact"
            className="min-h-screen bg-[#0C031C] text-white px-4 py-16"
        >
            {/* Title */}
            <motion.h2
                initial="hidden"
                whileInView="visible"
                variants={sectionVariant}
                className="text-4xl font-bold text-center text-purple-400 mb-12"
            >
                Contact Me
            </motion.h2>

            {/* Content Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left side with image + info */}
                <motion.div
                    className="relative w-full h-96 md:h-auto rounded-2xl overflow-hidden shadow-2xl"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariant}
                >
                    <img
                        src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200"
                        alt="Contact background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 flex flex-col justify-center gap-4 p-8">
                        <p className="flex items-center gap-3 text-lg">
                            <FaPhone className="text-yellow-400" /> +8801301199471
                        </p>
                        <p className="flex items-center gap-3 text-lg">
                            <FaEnvelope className="text-yellow-400" /> mdmonirhos571@gmail.com
                        </p>
                        <p className="flex items-center gap-3 text-lg">
                            <FaMapMarkerAlt className="text-yellow-400" /> Dhaka, Bangladesh
                        </p>
                        <div className="flex gap-6 mt-4">
                            <a
                                href="https://www.facebook.com/who65478932"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook className="text-purple-300 hover:text-yellow-400 text-2xl transition" />
                            </a>
                            <a
                                href="https://github.com/monirhossain-oss"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="text-purple-300 hover:text-yellow-400 text-2xl transition" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/md-monir7/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin className="text-purple-300 hover:text-yellow-400 text-2xl transition" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Right side form */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col gap-5 p-8 rounded-2xl shadow-2xl bg-[#1a0d2e]"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariant}
                >
                    <h3 className="text-2xl font-semibold text-center mb-2 text-purple-300">
                        Send Me a Message
                    </h3>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border border-gray-600 rounded-lg px-4 py-3 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border border-gray-600 rounded-lg px-4 py-3 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="border border-gray-600 rounded-lg px-4 py-3 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                    ></textarea>
                    <button
                        type="submit"
                        disabled={loading}
                        className="border-yellow-400 border-2 hover:text-black py-3 px-4 rounded-full font-semibold cursor-pointer hover:bg-yellow-400 text-white transition"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
