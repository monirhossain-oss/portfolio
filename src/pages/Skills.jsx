import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiRedux, SiNextdotjs } from "react-icons/si";

const skills = [
    { name: "React.js", icon: <FaReact size={50} color="#61DBFB" /> },
    { name: "Node.js", icon: <FaNodeJs size={50} color="#68A063" /> },
    { name: "Express.js", icon: <SiExpress size={50} color="#fff" /> },
    { name: "MongoDB", icon: <SiMongodb size={50} color="#4DB33D" /> },
    { name: "Firebase", icon: <SiFirebase size={50} color="#FFA611" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={50} color="#38B2AC" /> },
    { name: "Redux", icon: <SiRedux size={50} color="#764ABC" /> },
    { name: "Next.js", icon: <SiNextdotjs size={50} color="#fff" /> },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Skills = () => {
    return (
        <section id="skills" className="w-full px-4 pb-4 flex flex-col items-center justify-center">

            <motion.div
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center w-full max-w-7xl"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center justify-center"
                        variants={itemVariants}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                        {skill.icon}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
