const Footer = () => {
  return (
    <footer className="bg-white text-gray-500 py-4 mt-16 border-t border-gray-200 text-sm">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Rodela Ghosh
        </p>
        <div className="flex gap-3">
          <a
            href="https://github.com/Ro-netizen004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rodela-ghosh-9b8ab5311/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-gray-800 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
