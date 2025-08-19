import React from "react";
import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaJsSquare,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiFirebase,
    SiRedux,
    SiNextdotjs,
    SiAxios,
    SiReactquery,
} from "react-icons/si";

const skills = [
    { name: "React.js", icon: <FaReact size={50} color="#61DBFB" /> },
    { name: "Node.js", icon: <FaNodeJs size={50} color="#68A063" /> },
    { name: "Express.js", icon: <SiExpress size={50} color="#fff" /> },
    { name: "MongoDB", icon: <SiMongodb size={50} color="#4DB33D" /> },
    { name: "Firebase", icon: <SiFirebase size={50} color="#FFA611" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={50} color="#38B2AC" /> },
    { name: "Redux", icon: <SiRedux size={50} color="#764ABC" /> },
    { name: "Next.js", icon: <SiNextdotjs size={50} color="#fff" /> },
    { name: "Bootstrap", icon: <FaBootstrap size={50} color="#7952B3" /> },
    { name: "Axios", icon: <SiAxios size={50} color="#5A29E4" /> },
    { name: "TanStack Query", icon: <SiReactquery size={50} color="#FF4154" /> },
    { name: "Git", icon: <FaGitAlt size={50} color="#F1502F" /> },
    { name: "GitHub", icon: <FaGithub size={50} color="#fff" /> },
    { name: "JavaScript", icon: <FaJsSquare size={50} color="#F7DF1E" /> },
    { name: "HTML5", icon: <FaHtml5 size={50} color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt size={50} color="#1572B6" /> },
];

// Motion Variants
const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Skills = () => {
    return (
        <section
            id="skills"
            className="w-full px-4 py-16 flex flex-col items-center justify-center bg-gradient-to-b from-[#0C031C] to-[#130c21]"
        >
            {/* Heading */}
            <motion.h2
                initial="hidden"
                whileInView="visible"
                variants={sectionVariant}
                className="text-purple-400 text-3xl font-bold mb-2 text-center"
            >
                What I Work With & What I’m Learning
            </motion.h2>
            <motion.p
                initial="hidden"
                whileInView="visible"
                variants={sectionVariant}
                className="text-gray-300 mb-8 text-center max-w-2xl"
            >
                Here I’ve highlighted the tools and technologies I use in my work,
                along with the ones I’m currently learning to grow my skills.
            </motion.p>

            {/* Seamless Infinite Scroll */}
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-12 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {[...skills, ...skills].map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center justify-center cursor-pointer"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            {skill.icon}
                            <p className="text-gray-300 text-sm mt-2">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style jsx>{`
                .overflow-hidden::-webkit-scrollbar {
                  display: none;
                }
                .overflow-hidden {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default Skills;
