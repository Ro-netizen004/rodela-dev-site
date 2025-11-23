import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSupabase,
  SiExpress,
  SiUnity,
  SiMongodb,
  SiScikitlearn,
  SiVisualstudiocode,
  SiPostman,
  SiFigma,
} from "react-icons/si";

const tools = [
  { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="w-full py-10 bg-gray-900 text-white">
      <div className="px-4 md:px-20 max-w-6xl mx-auto">
        <h3 className="text-lg font-semibold text-center mb-8 tracking-wide">
          Tools I Use
        </h3>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center text-sm">
          {tools.map(({ name, icon }) => (
            <div key={name} className="flex flex-col items-center space-y-1 text-center">
              <div className="text-2xl">{icon}</div>
              <span className="text-xs">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
