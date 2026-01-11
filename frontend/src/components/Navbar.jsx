import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education"},
    { name: "Projects", href: "#projects" },
    {name: "Timeline", href:"#timeline"},
    { name: "Resume", href: "/Resume.pdf" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 font-sans">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-2 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="text-base font-semibold text-black">
        <img
          src="My_Logo.jpg"
          className="w-40 h-38 mt-2 object-contain transition-transform duration-300 hover:scale-105"
        />
      </a>


        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-sm text-black">
            {navLinks.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="hover:underline hover:decoration-2 transition-all duration-100"
                  target={name === "Resume" ? "_blank" : undefined}
                  rel={name === "Resume" ? "noopener noreferrer" : undefined}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <a
            href="#contact"
            className="border border-gray-400 bg-black text-white px-4 py-2 rounded-full text-sm 
                      hover:bg-white hover:text-black hover:border-black transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pt-1 pb-3 bg-white border-t border-gray-200 text-sm text-black text-center">
          <ul className="space-y-2">
            {navLinks.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="block hover:underline hover:decoration-2 transition-all duration-100"
                  onClick={() => setIsOpen(false)}
                  target={name === "Resume" ? "_blank" : undefined}
                  rel={name === "Resume" ? "noopener noreferrer" : undefined}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <a
            href="#contact"
            className="mt-3 inline-block border border-gray-400 bg-black text-white px-4 py-2 rounded-full text-sm
                      hover:bg-white hover:text-black hover:border-black transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Get In Touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


