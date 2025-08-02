import TechStack from "../components/Techstack";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const sampleProjects = [
  {
    id: 1,
    title: "CreatorVerse",
    description:
      "A React app for exploring and managing favorite content creators with full CRUD and search features.",
    link: "https://github.com/Ro-netizen004/creatorverse",
    site: "https://web-103prework-creatorverse.onrender.com/",
    tech: ["React", "Supabase", "Tailwind CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Green Spaces API",
    description:
      "RESTful API built with Node.js providing info on public green spaces worldwide.",
    link: "https://github.com/Ro-netizen004/Green-Spaces-API",
    tech: ["Node.js", "JavaScript", "Express"],
  },
  {
    id: 3,
    title: "Weather Web App",
    description:
      "ReactJS app using OpenWeather API to display weather data and forecasts.",
    link: "https://github.com/Ro-netizen004/Weather-Web-App",
    site: "https://weatherapp.example.com",  // example live site URL
    tech: ["React", "JavaScript", "OpenWeather API"],
  },
  {
    id: 4,
    title: "Meme Generator",
    description:
      "React app to create and customize memes with text overlays.",
    link: "https://github.com/Ro-netizen004/Meme-generator",
    site:"https://meme-generator-scrim.netlify.app/",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    id: 5,
    title: "Tenzies with React",
    description:
      "Simple dice game built with React to practice core concepts.",
    link: "https://github.com/Ro-netizen004/Tenzies-with-React",
    site: "https://tenzieswithreact.netlify.app/",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    id: 6,
    title: "Random Password Generator",
    description:
      "Website generating secure random passwords based on criteria.",
    link: "https://github.com/Ro-netizen004/Random-password-generator",
    site:"https://random-password-gener.netlify.app/",
    tech: ["CSS", "HTML", "JavaScript"],
  },
  {
    id: 7,
    title: "Unit Converter",
    description:
      "Quick and easy unit conversion website.",
    site:"https://unit-converter-all-categories.netlify.app/",
    link: "https://github.com/Ro-netizen004/Unit-converter",
    tech: ["JavaScript", "HTML", "CSS"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-white text-gray-900 font-sans px-6 md:px-12 max-w-5xl mx-auto py-16"
    >
      <h1 className="text-3xl font-semibold mb-10 text-center tracking-tight">
        My Projects
      </h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {sampleProjects.map(({ id, title, description, link, site, tech }) => (
          <article
            key={id}
            className="border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-lg font-medium mb-2">{title}</h2>
            <p className="text-gray-600 text-sm mb-4">{description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {tech.map((techItem) => (
                <span
                  key={techItem}
                  className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full"
                >
                  {techItem}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} on GitHub`}
                className="inline-flex items-center justify-center w-8 h-8 border border-gray-400 rounded-full text-gray-700 hover:bg-gray-900 hover:text-white transition"
              >
                <FaGithub className="text-base" />
              </a>

              {site && (
                <a
                  href={site}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit live site for ${title}`}
                  className="inline-flex items-center gap-1 px-3 py-1 border border-gray-400 rounded-full text-gray-700 text-sm hover:bg-gray-900 hover:text-white transition"
                >
                  Visit Site <FiExternalLink className="text-base" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <TechStack />
    </section>
  );
};

export default Projects;
