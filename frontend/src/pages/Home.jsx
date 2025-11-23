import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import TechStack from "../components/TechStack";
import About from "./About";

const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <Hero scrollToSection={scrollToSection} />

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen text-gray-800 font-sans scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto px-8 md:px-20">
          <About />
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen bg-white text-gray-800 font-sans py-24"
      >
        <div className="max-w-6xl mx-auto px-8 md:px-20">
          <Projects />
        </div>
        <TechStack />
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
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;

