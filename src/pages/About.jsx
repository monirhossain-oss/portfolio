import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import aboutImg from '../assets/equipment-data-center-workplace-used-monitoring-performance.jpg';
import { FaFacebook, FaFileAlt, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Typewriter Component with slower speed and color split
const TypewriterLoop = ({ text, color, typingSpeed = 150, pauseTime = 1500 }) => {
    const [displayed, setDisplayed] = useState("");
    const [index, setIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!deleting) {
                setDisplayed(text.slice(0, index + 1));
                setIndex(index + 1);
                if (index + 1 === text.length) {
                    setTimeout(() => setDeleting(true), pauseTime);
                }
            } else {
                setDisplayed(text.slice(0, index - 1));
                setIndex(index - 1);
                if (index - 1 === 0) setDeleting(false);
            }
        }, deleting ? typingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayed, index, deleting, text, typingSpeed, pauseTime]);

    return <span className={color}>{displayed}<span className="blinking-cursor"></span></span>;
};

const About = () => {
    const [showFull, setShowFull] = useState(false);

    const name = "MD MONIR HOSSAIN - ";
    const profession = "FRONTEND DEVELOPER";

    return (
        <section id="about" className="py-8 px-4 flex flex-col items-center justify-center bg-[#0C031C]">
            {/* Section Title */}
            <motion.h2
                className="text-4xl sm:text-5xl font-bold mb-8 text-center text-purple-400"
                initial="hidden"
                whileInView="visible"
                variants={sectionVariant}
            >
                About Me
            </motion.h2>

            <motion.div
                className="flex flex-col md:flex-row items-center md:items-start md:justify-center gap-8 max-w-6xl"
                initial="hidden"
                whileInView="visible"
                variants={sectionVariant}
            >
                {/* Image */}
                <motion.img
                    src={aboutImg}
                    alt="About Me"
                    className="w-96 h-96 object-cover rounded-lg shadow-lg"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
                />

                {/* Text Section */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    {/* Typewriter Name + Profession */}
                    <div className="text-2xl font-bold mb-4 whitespace-pre-wrap">
                        <TypewriterLoop text={name} color="text-purple-300" typingSpeed={150} pauseTime={1500} />
                        <TypewriterLoop text={profession} color="text-pink-400" typingSpeed={150} pauseTime={1500} />
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed max-w-xl">
                        {showFull
                            ? "I am a passionate Frontend Developer focused on building modern, responsive, and high-performance web applications. My expertise lies in React, Node.js, Express, MongoDB, Tailwind CSS, and JavaScript. Currently, I am learning Redux for state management and Next.js for server-side rendering and advanced web applications. If you hire me, you'll get modern, responsive applications, scalable and efficient solutions, fast learning ability with new technologies, and smooth team collaboration."
                            : "I am a passionate Frontend Developer focused on building modern, responsive, and high-performance web applications..."
                        }
                    </p>

                    {/* Read More Button */}
                    <button
                        onClick={() => setShowFull(!showFull)}
                        className={`px-4 py-1 border-2 cursor-pointer border-yellow-400 rounded-3xl font-semibold transition-colors duration-300
                            ${showFull ? "text-white border-2 border-yellow-300 hover: hover:bg-yellow-400 hover:text-black" : "text-white hover:bg-yellow-400 hover:text-black"}`}
                    >
                        {showFull ? "Read Less" : "Read More"}
                    </button>

                    {/* My Goal */}
                    <motion.div
                        className="mt-8 max-w-3xl text-center md:text-left"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                    >
                        <h3 className="text-2xl font-bold text-purple-400 mb-2">My Goal</h3>
                        <p className="text-gray-300 leading-relaxed">
                            My goal is to become an experienced Full Stack Developer. I aim to master React, Node.js, Express, and MongoDB to create scalable, efficient, and user-friendly web solutions.
                        </p>
                    </motion.div>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-4 text-gray-300">
                        <a href="https://www.linkedin.com/in/md-monir7/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition text-2xl">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/monirhossain-oss" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition text-2xl">
                            <FaGithub />
                        </a>
                        <a href="https://www.facebook.com/who65478932" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition text-2xl">
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/who65478932/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition text-2xl">
                            <FaInstagram />
                        </a>
                        <a href="/your-cv.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition text-2xl">
                            <FaFileAlt />
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Blinking cursor style */}
            <style jsx>{`
                .blinking-cursor {
                    display: inline-block;
                    width: 1px;
                    background-color: white;
                    animation: blink 1s infinite;
                    margin-left: 2px;
                }
                @keyframes blink {
                    0% { opacity: 1; }
                    50% { opacity: 0; }
                    100% { opacity: 1; }
                }
            `}</style>
        </section>
    );
};

export default About;
