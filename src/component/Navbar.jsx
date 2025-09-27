import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", to: "home" },
        { name: "About", to: "about" },
        { name: "Skills", to: "skills" },
        { name: "Projects", to: "projects" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <nav className="bg-[#0C031C]/90 shadow-lg fixed w-full z-50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Left: Logo + Name */}
                    <div className="flex items-center space-x-2">
                        <FaUserCircle size={30} className="text-yellow-300" />
                        <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide">
                            Monir <span className="text-yellow-400">Hossain</span>
                        </h1>
                    </div>

                    {/* Center: Desktop Menu */}
                    <div className="hidden md:flex py-2 px-6 rounded-full space-x-6 lg:space-x-10">
                        {navItems.map((item) => (
                            <ScrollLink
                                key={item.name}
                                to={item.to}
                                smooth={true}
                                duration={800}
                                offset={-60}
                                spy={true}
                                className="text-white hover:text-yellow-300 transition cursor-pointer font-medium"
                            >
                                {item.name}
                            </ScrollLink>
                        ))}
                    </div>

                    {/* Right: Download Resume Button */}
                    <div className="hidden md:block">
                        <a
                            href="https://drive.google.com/file/d/1phDr7FgDQOFlM1r6p1OP0ZneEQ715V14/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-1 font-semibold rounded-full shadow border-2 border-yellow-400 text-white hover:text-black bg-transparent hover:bg-yellow-300 transition duration-500"
                        >
                            <MdOutlineFileDownload size={20} />
                            Resume
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                        >
                            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0C031C] px-4 pb-6 space-y-4 shadow-lg">
                    {navItems.map((item) => (
                        <ScrollLink
                            key={item.name}
                            to={item.to}
                            smooth={true}
                            duration={800}
                            offset={-60}
                            spy={true}
                            className="block text-white hover:text-yellow-300 transition cursor-pointer font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </ScrollLink>
                    ))}
                    {/* Mobile Download Button */}
                    <a
                        href="https://drive.google.com/file/d/1phDr7FgDQOFlM1r6p1OP0ZneEQ715V14/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-yellow-400 text-center justify-center text-black font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition flex items-center gap-2"
                    >
                        <MdOutlineFileDownload size={20} />
                        Resume
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
