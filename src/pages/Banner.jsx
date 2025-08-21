import { motion } from "framer-motion";
import { MdOutlineFileDownload } from "react-icons/md";
import image from "../assets/retouch_2025081521580345 (1)[1].jpg";

// Animation Variants
const letterVariantLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.05 },
    }),
};

const letterVariantRight = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.05 },
    }),
};

const Banner = () => {
    const name = "Monir Hossain";
    const role = "A Frontend Developer";

    return (
        <div
            id="home"
            className="min-h-screen max-w-6xl mx-auto flex items-center justify-center bg-gradient-to-l from-[#0C031C] to-[#0C031C] text-white px-4 sm:px-6 lg:px-12"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center max-w-6xl w-full">
                {/* Left Side: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    {/* First Line: Left to Right */}
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 flex flex-wrap justify-center md:justify-start">
                        {`Hi, I'm `.split("").map((char, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={letterVariantLeft}
                                initial="hidden"
                                animate="visible"
                                className={`inline-block ${char === " " ? "mx-1" : ""}`}
                            >
                                {char}
                            </motion.span>
                        ))}
                        {name.split("").map((char, i) => (
                            <motion.span
                                key={`name-${i}`}
                                custom={i}
                                variants={letterVariantLeft}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.8 }}
                                className={`inline-block ${char === " " ? "mx-2" : "text-yellow-400"}`}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h1>

                    {/* Second Line: Right to Left */}
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 flex flex-wrap justify-center md:justify-start">
                        {role.split("").map((char, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={letterVariantRight}
                                initial="hidden"
                                animate="visible"
                                className={`inline-block ${char === " " ? "mx-1" : "text-purple-400"
                                    }`}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h2>

                    <p className="max-w-md mx-auto md:mx-0 mb-6 text-base sm:text-lg leading-relaxed">
                        I love building modern, responsive, and user-friendly web
                        applications that make life easier and more enjoyable.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-yellow-400 text-black font-semibold px-6 py-1 rounded-full shadow hover:bg-yellow-300  transition duration-300 flex items-center justify-center gap-2"
                        >
                            Contact
                        </motion.a>

                        <a
                            href="/resume.pdf"
                            download
                            className="border-2 border-yellow-400 text-white font-semibold px-6 py-1 rounded-full shadow hover:bg-yellow-400 hover:text-black transition duration-300 flex items-center justify-center gap-2"
                        >
                            <MdOutlineFileDownload size={20} />
                            Resume
                        </a>
                    </div>
                </motion.div>

                {/* Right Side: Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center md:justify-end h-full"
                >
                    <img
                        src={image}
                        alt="Profile"
                        className="w-48 sm:w-64 md:w-80 lg:w-96 rounded-full shadow-lg object-cover bg-transparent"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
