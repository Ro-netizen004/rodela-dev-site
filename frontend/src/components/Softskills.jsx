import {
  FaComments,
  FaUsers,
  FaLightbulb,
  FaClock,
  FaArrowsAlt,
  FaBrain,
  FaPalette,
  FaBookOpen,
} from "react-icons/fa";

const SoftSkills = () => {
  const skills = [
    { name: "Communication", icon: <FaComments /> },
    { name: "Teamwork", icon: <FaUsers /> },
    { name: "Problem-Solving", icon: <FaLightbulb /> },
    { name: "Time Management", icon: <FaClock /> },
    { name: "Adaptability", icon: <FaArrowsAlt /> },
    { name: "Critical Thinking", icon: <FaBrain /> },
    { name: "Creativity", icon: <FaPalette /> },
    { name: "Proactive Learning", icon: <FaBookOpen /> },
  ];

  return (
    <section id="soft-skills" className="w-full py-11 bg-black text-white mb-4">
      <div className="px-4 md:px-20 max-w-6xl mx-auto">
        <h3 className="text-lg font-semibold text-center mb-8 tracking-wide">
          Soft Skills
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center text-sm">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-black px-4 py-3 rounded-xl shadow hover:shadow-white transition-all duration-300 w-full text-center flex flex-col items-center gap-2"
            >
              <div className="text-2xl text-white">{skill.icon}</div>
              <span className="text-white">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;


