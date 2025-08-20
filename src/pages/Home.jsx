import React from "react";
import { motion } from "framer-motion";
import Banner from "./Banner";
import About from "./About";
import Skills from "./Skills";
import Project from "./Projects";
import Contact from "./Contact";

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
            <Contact></Contact>
        </div>
    );
};

export default Home;
