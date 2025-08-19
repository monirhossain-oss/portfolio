import React from "react";
import { motion } from "framer-motion";
import Banner from "./Banner";
import About from "./About";
import Skills from "./Skills";
import Project from "./Projects";

const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Home = () => {
    return (
        <div className="bg-[#0C031C]">
            <Banner></Banner>
           <About></About>
           
            <Skills></Skills>

            <Project></Project>

            {/* Contact Section */}
            <section
                id="contact"
                className="h-screen flex flex-col items-center justify-center bg-white px-4"
            >
                <motion.h2
                    className="text-4xl font-bold mb-4"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariant}
                >
                    Contact Me
                </motion.h2>

                <motion.form
                    className="w-full max-w-md flex flex-col gap-4"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariant}
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="border border-gray-300 rounded-lg px-4 py-2"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="border border-gray-300 rounded-lg px-4 py-2"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows="4"
                        className="border border-gray-300 rounded-lg px-4 py-2"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                    >
                        Send Message
                    </button>
                </motion.form>
            </section>
        </div>
    );
};

export default Home;
