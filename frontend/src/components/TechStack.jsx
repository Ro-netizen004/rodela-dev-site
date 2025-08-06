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
  SiScikitlearn,
} from "react-icons/si";

const techStacks = [
  {
    name: "Python",
    icon: (
      <img
        src="/python.jpg"       // <-- path to your SVG in public folder
        alt="Python"
        className="w-8 h-8"
      />
    ),
  },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "C#", icon: <SiUnity className="text-purple-700" /> }, // Unity icon as placeholder
  { name: "SQL", icon: <SiSupabase className="text-indigo-600" /> }, // Supabase for SQL
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Supabase", icon: <SiSupabase className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-400" /> },
  { name: "Unity", icon: <SiUnity className="text-black" /> },
];

const TechStack = () => {
  return (
    <section className="mt-10 py-10 px-4 max-w-4xl mx-auto text-gray-800">
      <h3 className="text-lg font-semibold text-center mb-8 tracking-wide">
        Tech Stack
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 justify-items-center text-sm">
        {techStacks.map(({ name, icon }) => (
          <div
            key={name}
            className="flex flex-col items-center space-y-1 text-center"
          >
            <div className="text-2xl">{icon}</div>
            <span className="text-xs">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;

