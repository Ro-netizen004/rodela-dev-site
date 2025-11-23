import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-500 py-6 mt-16 border-t border-gray-200 text-sm">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Left: copyright */}
        <p className="text-center sm:text-left text-gray-600">
          © {new Date().getFullYear()} Rodela Ghosh. All rights reserved.
        </p>
        
        {/* Right: social links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Ro-netizen004"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-gray-800 transition"
          >
            <FaGithub className="text-lg" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rodela-ghosh-9b8ab5311/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-700 transition"
          >
            <FaLinkedin className="text-lg" /> LinkedIn
          </a>
          <a
            href="mailto:youremail@example.com"
            className="flex items-center gap-1 hover:text-red-600 transition"
          >
            <FaEnvelope className="text-lg" /> Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
