import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Info = () => {
  return (
    <div className="w-full">
      {/* Info Section */}
      <div className="w-full bg-black text-white mt-14 text-xs sm:text-sm px-4 md:px-20 py-8 flex flex-col sm:flex-row justify-between gap-20 sm:gap-6">
        
        {/* Info Details */}
        <div className="flex flex-wrap gap-10 sm:gap-20 px-20">
          <div>
            <div className="font-medium">Origin</div>
            <div>Bangladesh</div>
          </div>
          <div>
            <div className="font-medium">Education</div>
            <div>CS @ USF</div>
          </div>
          <div>
            <div className="font-medium">Level</div>
            <div>Undergraduate</div>
          </div>
          <div>
            <div className="font-medium">Communities</div>
            <div>Honors College</div>
          </div>
          <div>
            <div className="font-medium">GPA</div>
            <div>3.9</div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/Ro-netizen004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/rodela-ghosh-9b8ab5311/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a
            href="mailto:rg21@usf.edu"
            className="hover:text-gray-400 transition-colors duration-300"
            aria-label="Send Email"
          >
            <FaEnvelope className="text-lg" />
          </a>
        </div>
      </div>

      <div className="w-full -mt-6">
      <img
        src="/squiggles.jpg"
        alt="Transition"
        className="w-full h-auto object-contain"
      />
      </div>

    </div>
  );
};

export default Info;
