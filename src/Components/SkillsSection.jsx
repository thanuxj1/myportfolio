import { useState } from "react";
import { cn } from "@/lib/utils";
// ✅ Simple Icons
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiKotlin,
  SiPython,
  SiGit,
  SiAndroidstudio,
  SiIntellijidea,
  SiFigma,
  SiPycharm,
  SiPostman,
  SiSwagger,
} from "react-icons/si";

// ✅ Visual Studio Code Icon (from VSC icon set)
import { VscVscodeInsiders } from "react-icons/vsc";


const skills = [
  // Frontend
  { name: "HTML/CSS", level: 85, category: "frontend", icon: SiHtml5, color: "#E34F26" },
  { name: "JavaScript", level: 80, category: "frontend", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", level: 80, category: "frontend", icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", level: 70, category: "frontend", icon: SiTailwindcss, color: "#06B6D4" },

  // Backend
  { name: "Node.js", level: 80, category: "backend", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", level: 75, category: "backend", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", level: 85, category: "backend", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", level: 65, category: "backend", icon: SiMysql, color: "#4479A1" },
  { name: "Kotlin", level: 60, category: "backend", icon: SiKotlin, color: "#7F52FF" },
  { name: "Python", level: 60, category: "backend", icon: SiPython, color: "#3776AB" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", icon: SiGit, color: "#F05032" },
  { name: "Android Studio", level: 70, category: "tools", icon: SiAndroidstudio, color: "#3DDC84" },
  { name: "IntelliJ", level: 85, category: "tools", icon: SiIntellijidea, color: "#000000" },
  { name: "Figma", level: 85, category: "tools", icon: SiFigma, color: "#F24E1E" },
  { name: "VS Code", level: 95, category: "tools", icon: VscVscodeInsiders, color: "#007ACC" },
  { name: "PyCharm", level: 85, category: "tools", icon: SiPycharm, color: "#000000" },
  { name: "Postman", level: 90, category: "tools", icon: SiPostman, color: "#FF6C37" },
  { name: "Swagger UI", level: 90, category: "tools", icon: SiSwagger, color: "#85EA2D" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-8 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {filteredSkills.map((skill, key) => {
            const Icon = skill.icon;
            return (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center justify-center min-h-[120px] group"
              >
                <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-2xl"
                    style={{ backgroundColor: skill.color }}
                  >
                    <Icon />
                  </div>
                </div>
                <h3 className="font-medium text-sm text-center text-muted-foreground">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
