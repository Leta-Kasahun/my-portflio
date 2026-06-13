import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineEye } from "react-icons/ai";
import { FaReact, FaNodeJs, FaJava, FaPython, FaCode } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import {
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiSpringboot,
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiPhp
} from "react-icons/si";
import { motion } from "framer-motion";
import { projectsData } from "../../data/projectData";

function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const techIconMap = {
  react: <FaReact className="text-blue-500" title="React" />,
  nextjs: <SiNextdotjs className="text-gray-900 dark:text-gray-200" title="Next.js" />,
  tailwindcss: <SiTailwindcss className="text-cyan-500" title="Tailwind CSS" />,
  express: <SiExpress className="text-gray-700 dark:text-gray-400" title="Express" />,
  mongodb: <SiMongodb className="text-green-500" title="MongoDB" />,
  postgresql: <SiPostgresql className="text-blue-700" title="PostgreSQL" />,
  springboot: <SiSpringboot className="text-green-700" title="Spring Boot" />,
  java: <FaJava className="text-orange-800" title="Java" />,
  nodejs: <FaNodeJs className="text-green-600" title="Node.js" />,
  python: <FaPython className="text-yellow-400" title="Python" />,
  typescript: <SiTypescript className="text-blue-600" title="TypeScript" />,
  mysql: <SiMysql className="text-blue-600" title="MySQL" />,
  php: <SiPhp className="text-indigo-600" title="PHP" />
};

const normalizeTech = (name) => name.toLowerCase().replace(/[^a-z0-9]/g, "");

// Gradient accent per primary tech
const techGradients = {
  nextjs:      "from-gray-800 via-gray-700 to-gray-900",
  react:       "from-blue-900 via-cyan-800 to-blue-950",
  springboot:  "from-green-900 via-emerald-800 to-green-950",
  typescript:  "from-blue-800 via-indigo-800 to-blue-950",
  nodejs:      "from-green-800 via-teal-800 to-green-950",
  python:      "from-yellow-800 via-amber-800 to-yellow-950",
  mongodb:     "from-green-900 via-green-700 to-green-950",
  postgresql:  "from-sky-900 via-blue-800 to-sky-950",
  php:         "from-indigo-900 via-purple-800 to-indigo-950",
  default:     "from-gray-800 via-blue-900 to-gray-900",
};

function ProjectBanner({ techStack, title }) {
  const key = normalizeTech(techStack?.[0] || "");
  const gradient = techGradients[key] || techGradients.default;
  const PrimaryIcon = techIconMap[key] ? techIconMap[key] : null;

  return (
    <div className={`w-full aspect-[16/9] bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-3 relative overflow-hidden`}>
      {/* Decorative circles */}
      <div className="absolute top-[-20%] right-[-10%] w-40 h-40 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute bottom-[-20%] left-[-10%] w-48 h-48 rounded-full bg-white/5 blur-2xl" />
      {PrimaryIcon && (
        <span className="text-5xl opacity-70 z-10">
          {PrimaryIcon}
        </span>
      )}
      <span className="text-white/60 text-xs font-semibold tracking-widest uppercase z-10">
        {techStack?.[0] || "Project"}
      </span>
    </div>
  );
}

export default function Projects({ darkMode }) {
  const [sectionRef, sectionInView] = useScrollAnimation(0.1);

  return (
    <motion.section 
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`${darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-slate-700"} px-4 sm:px-6 md:px-10 py-20`}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-blue-600 dark:text-blue-500" style={{
        fontWeight: 900, letterSpacing: '-0.025em',
      }}>Projects</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col shadow-md rounded-2xl overflow-hidden transition-all duration-300 group border border-transparent hover:border-blue-400/30
              ${darkMode ? "bg-gray-800/60" : "bg-white/90"}`}
          >
            <ProjectBanner techStack={project.techStack} title={project.title} />
            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ fontWeight: 700, letterSpacing: "-0.01em" }}>{project.title}</h3>
              <p className="text-lg mb-5" style={{ fontWeight: 400, lineHeight: 1.6, opacity: 0.85 }}>{project.shortDescription}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.map((tech, i) => {
                  const normalized = normalizeTech(tech);
                  const icon = techIconMap[normalized] || <FaCode className="text-slate-500" title={tech} />;
                  return (
                    <span
                      key={`${project.id}-${i}`}
                      title={tech}
                      aria-label={tech}
                      className={`inline-flex items-center justify-center w-9 h-9 rounded-full border text-base
                        ${darkMode ? "bg-gray-900/40 border-gray-700 text-gray-200" : "bg-slate-50 border-slate-200 text-slate-700"}`}
                    >
                      {icon}
                    </span>
                  );
                })}
              </div>
              <div className={`h-px w-full ${darkMode ? "bg-gray-700/70" : "bg-slate-200"}`} />
              <div className="flex items-center justify-between gap-3 pt-4 mt-4 overflow-hidden">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/link flex items-center text-lg font-semibold transition-all duration-300
                    ${darkMode ? "text-gray-200 hover:text-white" : "text-slate-700 hover:text-slate-900"}`}
                >
                  <AiFillGithub className="text-2xl mr-1" />
                  <span className="max-w-0 opacity-0 whitespace-nowrap overflow-hidden transition-all duration-300 group-hover/link:max-w-[200px] group-hover/link:opacity-100 group-hover/link:mr-1">
                    View source code
                  </span>
                  <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </a>
                <Link
                  to={project.caseStudyLink}
                  className={`group/link flex items-center text-lg font-semibold transition-all duration-300
                    ${darkMode ? "text-blue-300 hover:text-blue-200" : "text-blue-700 hover:text-blue-800"}`}
                >
                  <span className="whitespace-nowrap flex items-center">
                    <span className="max-w-0 opacity-0 overflow-hidden transition-all duration-300 group-hover/link:max-w-[50px] group-hover/link:opacity-100 group-hover/link:mr-1">
                      View
                    </span>
                    <span className="mr-1">case study</span>
                  </span>
                  <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
