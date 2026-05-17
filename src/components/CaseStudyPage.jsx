/* @refresh skip */
import { Link, useParams } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineFundProjectionScreen,
  AiOutlineWarning,
  AiOutlineBulb,
  AiOutlineTool,
  AiOutlineRise,
  AiOutlineCheckCircle,
  AiOutlineStar
} from "react-icons/ai";
import { FaReact, FaNodeJs, FaJava, FaPython, FaCode } from "react-icons/fa";
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
import { projectsData } from "../../data/projectData";

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

export default function CaseStudyPage({ darkMode }) {
  const { projectId } = useParams();
  const project = projectsData.find((item) => item.id === projectId);

  if (!project) {
    return (
      <section id="case-study" className={`${darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-slate-700"} px-4 py-20`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3" style={{ letterSpacing: "-0.02em" }}>
            Case Study Not Found
          </h2>
          <p className="text-base md:text-lg">The project you are looking for does not exist.</p>
          <Link
            to="/"
            className={`inline-flex items-center gap-2 mt-6 text-sm font-semibold
              ${darkMode ? "text-blue-300 hover:text-blue-200" : "text-blue-700 hover:text-blue-800"}`}
          >
            Back to home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section id="case-study" className={`${darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-slate-700"} px-4 pt-44 md:pt-48 pb-20`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${darkMode ? "text-blue-300" : "text-blue-600"}`}>
              Case Study
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold mt-3 flex items-center gap-3" style={{ letterSpacing: "-0.02em" }}>
              <span className={`${darkMode ? "text-blue-300" : "text-blue-600"}`} aria-hidden="true">
                <AiOutlineFundProjectionScreen />
              </span>
              {project.title}
            </h1>
            <p className="text-base md:text-lg mt-4 max-w-3xl" style={{ lineHeight: 1.8 }}>
              {project.shortDescription}
            </p>
          </div>
          <Link
            to="/"
            aria-label="Close case study"
            className={`inline-flex items-center justify-center w-10 h-10 rounded-full border text-lg
              ${darkMode ? "bg-gray-800 border-gray-700 text-gray-200 hover:text-white" : "bg-white border-slate-200 text-slate-600 hover:text-slate-900"}`}
          >
            <AiOutlineClose />
          </Link>
        </div>
        <div className={`rounded-2xl border shadow-lg overflow-hidden ${darkMode ? "bg-gray-800/60 border-gray-700" : "bg-white border-slate-200"}`}>
          <div className="p-6 md:p-10">
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, i) => {
                const normalized = normalizeTech(tech);
                const icon = techIconMap[normalized] || <FaCode className="text-slate-500" title={tech} />;
                return (
                  <span
                    key={`${project.id}-${i}`}
                    title={tech}
                    aria-label={tech}
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full border text-lg
                      ${darkMode ? "bg-gray-900/40 border-gray-700 text-gray-200" : "bg-slate-50 border-slate-200 text-slate-700"}`}
                  >
                    {icon}
                  </span>
                );
              })}
            </div>
            <div className={`h-px w-full mt-8 ${darkMode ? "bg-gray-700/70" : "bg-slate-200"}`} />
            <div className="mt-8 space-y-7">
              <div>
                <h2 className={`text-base md:text-lg font-bold uppercase tracking-[0.15em] mb-2 flex items-center gap-2 ${darkMode ? "text-gray-300" : "text-slate-600"}`}>
                  <AiOutlineWarning className={`${darkMode ? "text-amber-300" : "text-amber-600"}`} aria-hidden="true" />
                  Problem
                </h2>
                <p className="text-base md:text-lg" style={{ lineHeight: 1.85 }}>{project.problem}</p>
              </div>
              <div>
                <h2 className={`text-base md:text-lg font-bold uppercase tracking-[0.15em] mb-2 flex items-center gap-2 ${darkMode ? "text-gray-300" : "text-slate-600"}`}>
                  <AiOutlineBulb className={`${darkMode ? "text-emerald-300" : "text-emerald-600"}`} aria-hidden="true" />
                  Solution
                </h2>
                <p className="text-base md:text-lg" style={{ lineHeight: 1.85 }}>{project.solution}</p>
              </div>
              <div>
                <h2 className={`text-base md:text-lg font-bold uppercase tracking-[0.15em] mb-2 flex items-center gap-2 ${darkMode ? "text-gray-300" : "text-slate-600"}`}>
                  <AiOutlineTool className={`${darkMode ? "text-indigo-300" : "text-indigo-600"}`} aria-hidden="true" />
                  Challenge
                </h2>
                <p className="text-base md:text-lg" style={{ lineHeight: 1.85 }}>{project.challenge}</p>
              </div>
              <div>
                <h2 className={`text-base md:text-lg font-bold uppercase tracking-[0.15em] mb-2 flex items-center gap-2 ${darkMode ? "text-gray-300" : "text-slate-600"}`}>
                  <AiOutlineRise className={`${darkMode ? "text-blue-300" : "text-blue-600"}`} aria-hidden="true" />
                  Outcome
                </h2>
                <p className="text-base md:text-lg" style={{ lineHeight: 1.85 }}>{project.outcome}</p>
              </div>
            </div>
            <div className="mt-10 space-y-3">
              <h2 className={`text-base md:text-lg font-bold uppercase tracking-[0.15em] flex items-center gap-2 ${darkMode ? "text-gray-300" : "text-slate-600"}`}>
                <AiOutlineStar className={`text-lg ${darkMode ? "text-amber-300" : "text-amber-500"}`} aria-hidden="true" />
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.keyFeatures.map((feature, i) => (
                  <li key={`${project.id}-feature-${i}`} className="text-base md:text-lg flex items-start gap-3" style={{ lineHeight: 1.85 }}>
                    <span className={`${darkMode ? "text-emerald-300" : "text-emerald-600"}`} aria-hidden="true">
                      <AiOutlineCheckCircle />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
