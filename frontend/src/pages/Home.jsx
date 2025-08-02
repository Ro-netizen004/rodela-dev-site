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
      if (!deleting && charIndex <= typingPhrases[phraseIndex].length) {
        setText(typingPhrases[phraseIndex].substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      } else if (deleting && charIndex >= 0) {
        setText(typingPhrases[phraseIndex].substring(0, charIndex));
        setCharIndex((prev) => prev - 1);
      } else if (charIndex > typingPhrases[phraseIndex].length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (charIndex < 0) {
        setDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
        setCharIndex(0);
      }
    }, deleting ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  
  // ...rest of your imports and component code unchanged

return (
  <>
    <Navbar />
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
              alt="Animated"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Text */}
          <div className="text-left space-y-10 max-w-xl w-full">
            <h2 className="text-xl sm:text-2xl font-light text-gray-700 h-8 tracking-wide">
              {text}
              <span className="blinking-cursor">|</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-gray-600">
              I build intuitive, scalable web applications that focus on user
              experience. While I specialize in full-stack development, I'm
              also curious about the intersections of technology — from
              interactive design to AI, and beyond.
            </p>
            <div className="flex gap-6 pt-2">
              <a
                href="#projects"
                className="border border-gray-400 px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-gray-400 px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Fun Fact / Footer Info Section */}
      <div className="mt-14 text-xs sm:text-sm text-gray-500  pt-8 max-w-6xl mx-auto px-16 md:px-20 flex flex-col sm:flex-row justify-between gap-20 sm:gap-6">
        <div className="flex gap-20">
          <div>
            <div className="font-medium">Origin</div>
            <div>Bangladesh</div>
          </div>
          <div>
            <div className="font-medium mr-16">Education</div>
            <div>CS @ USF</div>
          </div>
        </div>
        <div className="flex gap-6">
          <a
            href="https://github.com/Ro-netizen004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/rodela-ghosh-9b8ab5311/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a href="mailto:rg21@usf.edu" className="hover:text-black">
            <FaEnvelope className="text-lg" />
          </a>
        </div>
      </div>

      {/* Add margin-top here to create space between fun fact and arrow */}
      <div className="flex justify-center pb-8 mt-12">
        <button
          onClick={() => scrollToSection("projects")}
          aria-label="Scroll to Projects"
          className="animate-bounce text-4xl text-gray-700 hover:text-black transition"
        >
          ↓
        </button>
      </div>

      <style jsx>{`
        .blinking-cursor {
          font-weight: 400;
          font-size: 1.25rem;
          color: #333;
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>

    <section
      id="projects"
      className="min-h-screen bg-white text-gray-800 font-sans py-24 max-w-6xl mx-auto w-full flex flex-col px-8 md:px-20"
    >
      <Projects />

      {/* Add margin-top here for arrow spacing */}
      <div className="flex justify-center pt-8 mt-12">
        <button
          onClick={() => scrollToSection("contact")}
          aria-label="Scroll to Contact"
          className="animate-bounce text-4xl text-gray-700 hover:text-black transition"
        >
          ↓
        </button>
      </div>
    </section>

    <section
      id="contact"
      className="min-h-screen bg-white text-gray-800 font-sans py-24 px-8 md:px-20 max-w-6xl mx-auto w-full"
    >
      <Contact />
    </section>
    <Footer />
  </>
);

};

export default Home;
