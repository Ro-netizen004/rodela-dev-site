import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSupabase,
  SiExpress,
  SiUnity,
  SiMongodb,
} from "react-icons/si";

const techStacks = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
  { name: "Supabase", icon: <SiSupabase className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "Unity", icon: <SiUnity className="text-black" /> },
];

const TechStack = () => {
  return (
    <section className="bg-gray-50 text-gray-900 py-16 px-6 max-w-5xl mx-auto font-sans">
      <h3 className="text-xl font-semibold text-center mb-10 tracking-wide">
        My Tech Stack So Far
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-8 justify-items-center">
        {techStacks.map(({ name, icon }) => (
          <div
            key={name}
            className="flex flex-col items-center space-y-2 text-center text-sm font-medium text-gray-700"
          >
            <div className="text-4xl">{icon}</div>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
