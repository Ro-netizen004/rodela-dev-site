import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "/Resume.pdf" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 font-sans">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-base font-semibold text-black">
          Rodela Ghosh
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm text-black">
          {navLinks.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="hover:font-bold transition-all"
                target={name === "Resume" ? "_blank" : undefined}
                rel={name === "Resume" ? "noopener noreferrer" : undefined}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pt-2 pb-4 bg-white border-t border-gray-200 text-sm text-black text-center">
          <ul className="space-y-2">
            {navLinks.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="block hover:font-bold transition-all"
                  onClick={() => setIsOpen(false)}
                  target={name === "Resume" ? "_blank" : undefined}
                  rel={name === "Resume" ? "noopener noreferrer" : undefined}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
