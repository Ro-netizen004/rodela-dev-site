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
        src="/python.jpg"
        alt="Python"
        className="w-8 h-8"
      />
    ),
  },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "C#", icon: <SiUnity className="text-purple-700" /> },
  { name: "SQL", icon: <SiSupabase className="text-indigo-600" /> },
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
    <>
    <div className="w-full -mt-6">
      <img
        src="/squiggles-inv.jpg"
        alt="Transition"
        className="w-full h-auto object-contain"
      />
      </div>
    <section className="w-full py-10 bg-black text-white">
      <div className="px-4 md:px-20 max-w-6xl mx-auto">
        <h3 className="text-lg font-semibold text-center mb-8 tracking-wide">
          Tech Stack
        </h3>

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 gap-6 justify-items-center text-sm">
          {techStacks.map(({ name, icon }) => (
            <div key={name} className="flex flex-col items-center space-y-1 text-center">
              <div className="text-2xl">{icon}</div>
              <span className="text-xs">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    <div className="w-full -mt-6">
      <img
        src="/squiggles.jpg"
        alt="Transition"
        className="w-full h-auto object-contain"
      />
      </div>
      </>
  );
};

export default TechStack;
