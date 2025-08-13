import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const typingPhrases = [
  "Computer Science Student at USF",
  "Full-Stack Developer",
  "Exploring Game Design",
  "Machine Learning Enthusiast",
  "Always Learning & Building",
];

const Home = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentPhrase = typingPhrases[phraseIndex];
      
      if (!deleting && charIndex <= currentPhrase.length) {
        setText(currentPhrase.substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      } else if (deleting && charIndex >= 0) {
        setText(currentPhrase.substring(0, charIndex));
        setCharIndex((prev) => prev - 1);
      } else if (!deleting && charIndex > currentPhrase.length) {
        // Wait before starting to delete
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && charIndex < 0) {
        setDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
        setCharIndex(0);
      }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center bg-white text-gray-800 font-sans"
      >
        <div className="max-w-6xl mx-auto px-8 md:px-20 py-20 mt-20 w-full flex-grow flex items-center">
          <div className="flex flex-col md:flex-row-reverse items-center gap-20 md:gap-32">
            {/* Image */}
            <div className="w-64 h-64 md:w-72 md:h-72">
              <img
                src="https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyam5mNGxqYWZhcmV5aXVmeWMwcTZ0cnRnZXloMWcwbDZzYmVhbHVrdSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/j0HjChGV0J44KrrlGv/source.gif"
                alt="Animated developer illustration"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Text */}
            <div className="text-left space-y-10 max-w-xl w-full">
              <div className="h-8 flex items-center">
                <h2 className="text-xl sm:text-2xl font-light text-gray-700 tracking-wide">
                  {text}
                  <span className="blinking-cursor">|</span>
                </h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                I build intuitive, scalable web applications that focus on user
                experience. While I specialize in full-stack development, I'm
                also curious about the intersections of technology — from
                interactive design to AI, and beyond.
              </p>
              <div className="flex gap-6 pt-2">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="border border-gray-400 px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                >
                  View Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="border border-gray-400 px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-14 text-xs sm:text-sm text-gray-800 pt-8 w-screen max-w-6xl mx-auto px-16 md:px-20 flex flex-col sm:flex-row justify-between gap-20 sm:gap-6 bg-gray-100 rounded-xl p-6">
          {/* Info Section */}
          <div className="flex flex-wrap gap-10 sm:gap-20">
            <div>
              <div className="font-medium text-black">Origin</div>
              <div>Bangladesh</div>
            </div>
            <div>
              <div className="font-medium text-black">Education</div>
              <div>CS @ USF</div>
            </div>
            <div>
              <div className="font-medium text-black">Level</div>
              <div>Undergraduate</div>
            </div>
            <div>
              <div className="font-medium text-black">Communities</div>
              <div>Honors College</div>
            </div>
            <div>
              <div className="font-medium text-black">GPA</div>
              <div>3.9</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/Ro-netizen004"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/rodela-ghosh-9b8ab5311/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="mailto:rg21@usf.edu"
              className="hover:text-white transition-colors duration-300"
              aria-label="Send Email"
            >
              <FaEnvelope className="text-lg" />
            </a>
          </div>
        </div>


        {/* Scroll Arrow */}
        <div className="flex justify-center pb-8 mt-12">
          <button
            onClick={() => scrollToSection("projects")}
            aria-label="Scroll to Projects"
            className="animate-bounce text-4xl text-gray-700 hover:text-black transition-colors duration-300"
          >
            ↓
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen bg-white text-gray-800 font-sans py-24"
      >
        <div className="max-w-6xl mx-auto px-8 md:px-20">
          <Projects />
          <div className="flex justify-center pt-8 mt-12">
            <button
              onClick={() => scrollToSection("contact")}
              aria-label="Scroll to Contact"
              className="animate-bounce text-4xl text-gray-700 hover:text-black transition-colors duration-300"
            >
              ↓
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-white text-gray-800 font-sans py-24"
      >
        <div className="max-w-6xl mx-auto px-8 md:px-20">
          <Contact />
        </div>
      </section>
      
      <Footer />

      {/* Styles */}
      <style jsx>{`
        .blinking-cursor {
          font-weight: 400;
          font-size: 1.25rem;
          color: #374151;
          animation: blink 1s step-start infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Home;