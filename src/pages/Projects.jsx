import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const projectsData = [
    {
        name: "DiscourseHub",
        type: "MERN | Full-Stack Web App",
        description:
            "DiscourseHub is a progressive web app (PWA) designed to seamlessly integrate multiple Discourse forums into a single, user-friendly interface. Whether you're managing community discussions, seeking support, or engaging with interest-based groups, DiscourseHub streamlines your experience by consolidating all your forums in one place.",
        image:
            "https://i.ibb.co.com/Xrd3GMfR/Screenshot-2025-09-27-112340.png",
        github: "https://github.com/monirhossain-oss/DiscourseHub-Client",
        live: "https://discoursehub.web.app/",
        details: "#",
    },
    {
        name: "TechCrunch Landing Page",
        type: "Frontend App | Landing Page",
        description:
            "TechCrunch Landing Page is a fully responsive web project built using React, Tailwind CSS, React Router, and React Icons. It replicates the modern look and feel of TechCrunch’s homepage with clean UI components, smooth navigation, and optimized responsiveness across devices.",
        image:
            "https://i.ibb.co.com/SGN1jCX/Screenshot-2025-09-27-112959.png",
        github: "https://github.com/monirhossain-oss/TechCrunch",
        live: "https://client-theta-drab.vercel.app/",
        details: "#",
    },
    {
        name: "Gardening Hub",
        type: "MERN | Community Platform",
        description:
            "Gardening Hub is a vibrant, community-driven platform designed to connect gardening enthusiasts, from beginners to seasoned horticulturists. Whether you're looking to share your gardening experiences, seek advice, or discover new techniques, Gardening Hub offers a wealth of resources to support your green journey.",
        image:
            "https://i.ibb.co.com/m5vz7q6J/Screenshot-2025-08-08-160153.png",
        github:
            "https://github.com/monirhossain-oss/social-events-platform-client",
        live: "https://gardening-hub-live.com",
        details: "#",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // simulate API loading
        setTimeout(() => {
            setProjects(projectsData);
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <section
            id="projects"
            className="w-full px-4 py-16 flex flex-col items-center justify-center bg-[#0C031C]"
        >
            {/* Section Title */}
            <motion.h2
                className="text-3xl sm:text-4xl font-bold text-purple-400 mb-10 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            >
                My Projects
            </motion.h2>

            {/* Project Cards */}
            <div className="flex flex-col gap-10 w-full max-w-6xl">
                {loading
                    ? // Skeleton Loader
                    [1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="flex flex-col md:flex-row gap-6 items-center w-full"
                        >
                            <Skeleton
                                height={200}
                                width="100%"
                                baseColor="#1a0c36"
                                highlightColor="#2c1a59"
                            />
                            <div className="flex-1 flex flex-col gap-4">
                                <Skeleton
                                    height={30}
                                    width="60%"
                                    baseColor="#1a0c36"
                                    highlightColor="#2c1a59"
                                />
                                <Skeleton
                                    count={3}
                                    baseColor="#1a0c36"
                                    highlightColor="#2c1a59"
                                />
                                <div className="flex gap-4 mt-2">
                                    {[1, 2, 3].map((btn) => (
                                        <Skeleton
                                            key={btn}
                                            circle
                                            height={40}
                                            width={40}
                                            baseColor="#1a0c36"
                                            highlightColor="#2c1a59"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                    : // Projects Mapping
                    projects.map((project, index) => {
                        const isEven = index % 2 === 1;
                        return (
                            <motion.div
                                key={index}
                                className={`flex py-4 flex-col md:flex-row gap-6 items-center w-full rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-[#0C031C] via-[#1a0d31] to-[#0C031C] ${isEven ? "md:flex-row-reverse" : ""
                                    }`}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                            >
                                {/* Image */}
                                <div className="md:w-1/3">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full rounded-2xl h-full object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                                    <div>
                                        {/* Title + Type Row */}
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                                            {/* On mobile: Type first, then Name (order classes) */}
                                            <p className="order-1 md:order-2 inline-block px-3 py-1 text-sm font-semibold 
                                            text-white bg-gradient-to-r from-purple-700 to-purple-900 
                                            rounded-full shadow-lg">
                                                {project.type}
                                            </p>

                                            <h3 className="order-2 md:order-1 text-2xl font-bold text-white">
                                                {project.name}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-200 mb-4">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4 mt-auto">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.2, color: "#F1502F" }}
                                            className="text-white p-3 rounded-full shadow hover:bg-gray-700 transition"
                                        >
                                            <FaGithub size={20} />
                                        </motion.a>
                                        <motion.a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.2, color: "#00D1B2" }}
                                            className="text-white p-3 rounded-full shadow hover:bg-gray-700 transition"
                                        >
                                            <FaExternalLinkAlt size={20} />
                                        </motion.a>
                                        <motion.a
                                            href={project.details}
                                            whileHover={{ scale: 1.2, color: "#FFD700" }}
                                            className="text-white p-3 rounded-full shadow hover:bg-gray-700 transition"
                                        >
                                            <FaEye size={20} />
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
            </div>
        </section>
    );
};

export default Project;
