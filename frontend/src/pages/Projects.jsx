import TechStack from "../components/TechStack";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { sampleProjects } from "../data/projectData";

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
            className="border border-gray-200 bg-gray-100 rounded-lg p-5 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-lg font-medium mb-2">{title}</h2>
            <p className="text-gray-600 text-sm mb-4">{description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {tech.map((techItem) => (
                <span
                  key={techItem}
                  className="text-xs font-medium bg-white text-gray-700 px-2 py-0.5 rounded-full"
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
