import React from 'react';
import { motion } from "framer-motion";

const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};


const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen py-16 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-[#0C031C] to-[#1a0c36]"
        >
            {/* Section Title */}
            <motion.h2
                className="text-4xl sm:text-5xl font-bold mb-6 text-center text-yellow-400"
                initial="hidden"
                whileInView="visible"
                variants={sectionVariant}
            >
                About Me
            </motion.h2>

            {/* Description */}
            <motion.p
                className="text-center text-gray-300 max-w-3xl mb-8 text-lg sm:text-xl leading-relaxed"
                initial="hidden"
                whileInView="visible"
                variants={sectionVariant}
            >
                I am a passionate Frontend Developer focused on building modern,
                responsive, and high-performance web applications. My expertise lies
                in React.js, Tailwind CSS, and JavaScript. Currently, I am expanding
                my skills by learning Redux for state management and Next.js for
                server-side rendering and advanced web applications.
            </motion.p>
        </section>
    );
};

export default About;
