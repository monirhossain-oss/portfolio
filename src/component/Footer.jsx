import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0C031C] text-gray-300 py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Side - Name & Tagline */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white">Monir Hossain</h2>
          <p className="text-sm text-gray-400">Crafting Digital Experiences</p>
        </div>

        {/* Middle - Social Links */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/monirhossain-oss"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/md-monir7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/who65478932"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition transform hover:scale-110"
          >
            <FaFacebook />
          </a>
          <a
            href="mailto:mdmonirhos571@gmail.com"
            className="hover:text-yellow-400 transition transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right Side - Copyright */}
        <div className="text-center md:text-right text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Monir Hossain. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
