import { useEffect, useState } from "react";
import Info from "./Info";

const typingPhrases = [
  "Computer Science Student at USF",
  "Full-Stack Developer",
  "Exploring Game Design",
  "Machine Learning Enthusiast",
  "Always Learning & Building",
];

const Hero = ({ scrollToSection }) => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typingPhrases[phraseIndex];
    let timeout;

    if (!deleting && charIndex <= currentPhrase.length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), 100);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => setCharIndex(charIndex - 1), 50);
    } else if (!deleting && charIndex > currentPhrase.length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
      setCharIndex(0);
    }

    setText(currentPhrase.substring(0, Math.max(charIndex, 0)));

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col mt-8 justify-center bg-white text-gray-800 font-sans"
    >
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20 w-full max-w-6xl mx-auto px-6 md:px-20 py-12">
        {/* Animated GIF */}
        <img
          src="cat_type.gif"
          alt="Typing cat"
          className="object-cover w-80% h-80% px-2 py-4"
        />

        {/* Text Section */}
        <div className="text-left max-w-xl w-full space-y-6">
          <h2 className="text-xl sm:text-2xl font-light text-gray-700 tracking-wide">
            {text}
            <span className="blinking-cursor">|</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-thin">
            I build intuitive, scalable web applications that focus on user
            experience. While I specialize in full-stack development, I'm
            also curious about the intersections of technology — from
            interactive design to AI, and beyond.
          </p>
          <div className="flex gap-4 md:gap-6 flex-wrap pt-2">
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
      <Info />
    </section>
  );
};

export default Hero;
