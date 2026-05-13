import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { sampleProjects } from "../data/projectData";

const Projects = () => {
  const [showOthers, setShowOthers] = useState(false);

  const featured = sampleProjects.slice(0, 3);
  const others = sampleProjects.slice(3);

  const ProjectCard = ({ project, featured = false }) => (
    <article
      className={`
        group relative rounded-2xl border transition-all duration-300
        ${featured ? "border-gray-300 bg-white" : "border-gray-200 bg-gray-50"}
        hover:shadow-xl hover:-translate-y-1
        p-6 lg:p-7
      `}
    >
      {featured && (
        <span className="absolute top-4 right-4 text-[10px] uppercase tracking-wider bg-black text-white px-2 py-1 rounded-full">
          Featured
        </span>
      )}

      <h2 className="text-lg md:text-xl font-semibold mb-2">
        {project.title}
      </h2>

      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((techItem) => (
          <span
            key={techItem}
            className="text-[11px] font-medium bg-white border border-gray-200 text-gray-700 px-2 py-1 rounded-full"
          >
            {techItem}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-black transition"
        >
          <FaGithub />
          Code
        </a>

        {project.site && (
          <a
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-black transition"
          >
            <FiExternalLink />
            Live
          </a>
        )}
      </div>
    </article>
  );

  return (
    <section
      id="projects"
      className="bg-white text-gray-900 font-sans px-6 md:px-12 max-w-7xl mx-auto py-20"
    >
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="font-bold text-3xl md:text-4xl mb-3">
          Projects
        </h1>
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          A selection of full-stack applications, ML systems, and research projects.
        </p>
      </div>

      {/* Featured */}
      <div className="grid gap-8 md:grid-cols-2 mb-16">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} featured />
        ))}
      </div>

      {/* Toggle Button */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm uppercase tracking-wider text-gray-500">
          Other Projects
        </h3>

        <button
          onClick={() => setShowOthers(!showOthers)}
          className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition"
        >
          {showOthers ? "Hide" : "Show"}
          {showOthers ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>

      {/* Collapsible Section */}
      <div
        className={`
          grid gap-6 md:grid-cols-2 lg:grid-cols-3
          transition-all duration-500 overflow-hidden
          ${showOthers ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        {showOthers &&
          others.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    </section>
  );
};

export default Projects;