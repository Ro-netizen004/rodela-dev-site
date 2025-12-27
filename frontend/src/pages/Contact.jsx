import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState(""); // 'success' | 'error' | ''

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xzzvazap", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-4 bg-white text-gray-800 font-sans px-6 md:px-20 max-w-5xl mx-auto w-full scroll-mt-24"
    >
      <h1 className="text-3xl font-semibold mb-10 text-center">Contact Me</h1>

      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition"
          >
            Send Message
          </button>

          {status === "success" && (
            <p className="text-green-600 text-center">Thank you! I’ll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center">Oops! Something went wrong. Try again later.</p>
          )}
        </form>

        {/* Social Links */}
        <div className="mt-10 flex justify-center gap-8 text-gray-600">
          <a
            href="https://github.com/Ro-netizen004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/rodela-ghosh-9b8ab5311/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="mailto:rg21@usf.edu"
            className="hover:text-black"
            aria-label="Email"
          >
            <FaEnvelope className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
