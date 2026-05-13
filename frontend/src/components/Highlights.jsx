import React from "react";

const highlightProjects = [
  {
    title: "VLM Modality Research",
    description:
      "Conducted research on how input modality affects mathematical reasoning in vision-language models. Built evaluation pipelines for zero-shot benchmarking on GSM8K across text-only, image-based, and modality-mismatch settings, and analyzed model performance degradation and reasoning bias.",
    image: "poster.png",
    tag: "Research",
    poster: "VLM_GSM8K_Poster.pdf",
    github: "https://github.com/Ro-netizen004/vlm-modality-research",
  },
  {
    title: "WiCSE Website",
    description:
      "Developed and maintained the official WiCSE website at USF using React and Tailwind CSS, integrating Supabase for backend data management and Google Calendar API for real-time event updates. Contributed to building ‘Coffee with WiCSE,’ a mentorship system using Microsoft Bookings and cloud-based mentor data storage, connecting students with 20+ industry mentors across multiple companies.",
    image: "wicse.png",
    tag: "Frontend",
    live: "https://wicse-website.onrender.com/",
    github: "https://github.com/Ro-netizen004/WICSE-website",
  },
];

const Highlights = () => {
  return (
    <section className="bg-black text-white min-h-screen py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Highlights
          </h2>

          <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Featured projects and experiences showcasing development,
            research, and collaboration.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlightProjects.map((project, index) => (
            <div
              key={index}
              className="
                group
                bg-zinc-900
                border border-zinc-800
                rounded-2xl
                overflow-hidden
                shadow-xl
                hover:border-zinc-600
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Tag */}
                <span
                  className="
                    absolute
                    top-3
                    left-3
                    bg-black/60
                    text-[10px]
                    uppercase
                    tracking-wider
                    px-3
                    py-1
                    rounded-full
                    text-white
                    border border-white/10
                  "
                >
                  {project.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-xl md:text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Links */}
                <div className="mt-5 flex items-center gap-5 text-sm">

                  {project.tag === "Research" ? (
                    <>
                      <a
                        href={project.poster}
                        target = "_blank"
                        className="text-white hover:text-zinc-300 transition font-medium"
                      >
                        View Poster →
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        className="text-zinc-400 hover:text-white transition"
                      >
                        Github
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href={project.live}
                        target = "_blank"
                        className="text-white hover:text-zinc-300 transition font-medium"
                      >
                        Live Demo →
                      </a>

                      <a
                        href={project.github}
                        target = "_blank"
                        className="text-zinc-400 hover:text-white transition"
                      >
                        GitHub
                      </a>
                    </>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;