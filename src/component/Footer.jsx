import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0C031C] text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side - Name */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Monir Hossain</h2>
          <p className="text-sm">Frontend Developer</p>
        </div>

        {/* Middle - Social Links */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/your-facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="mailto:yourmail@example.com"
            className="hover:text-yellow-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right Side - Copyright */}
        <div className="text-center md:text-right text-sm">
          <p>
            © {new Date().getFullYear()} Monir Hossain. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
