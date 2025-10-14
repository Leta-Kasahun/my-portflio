import { FaReact, FaPython, FaGithub, FaJsSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiSqlite } from "react-icons/si";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Projects({ darkMode }) {
  const projects = [
    {
      title: "Task Management App",
      description:
        "Task management web app developed for university students to manage their group tasks and chat with each other in a secure way. It also allows instructors to assign academic projects and assignments, with notifications for deadlines and updates.",
      tech: [
        { icon: <FaReact className="text-blue-500 text-2xl" />, name: "React" },
        { icon: <SiTailwindcss className="text-cyan-500 text-2xl" />, name: "TailwindCSS" },
        { icon: <SiMongodb className="text-green-500 text-2xl" />, name: "MongoDB" },
        { icon: <FaGithub className="text-gray-700 dark:text-gray-600 text-2xl" />, name: "GitHub", link: "https://github.com/Leta-Kasahun/mern-task-manager.git" },
      ],
    },
    {
      title: "Student Complaint Management System",
      description:
        "A desktop application built with Python and SQL Server, designed for university students to submit and track their complaints. The system ensures role-based access for students, staff, and administrators, resolving issues efficiently with notifications. Developed exclusively for university use.",
      tech: [
        { icon: <FaPython className="text-yellow-500 text-2xl" />, name: "Python" },
        { icon: <SiSqlite className="text-blue-500 text-2xl" />, name: "SQL Server 2014" },
        { icon: <FaGithub className="text-gray-700 dark:text-gray-600 text-2xl" />, name: "GitHub", link: "https://github.com/Leta-Kasahun/SCMS_python_project.py.git" },
      ],
    },
    {
      title: "Personal Portfolio",
      description:
        "A modern, responsive portfolio website that showcases my skills and projects. Designed to be beginner-friendly, visually engaging, and fully optimized for all devices.",
      tech: [
        { icon: <FaReact className="text-blue-500 text-2xl" />, name: "React Vite" },
        { icon: <SiTailwindcss className="text-cyan-500 text-2xl" />, name: "TailwindCSS" },
        { icon: <FaGithub className="text-gray-700 dark:text-gray-600 text-2xl" />, name: "GitHub", link: "https://github.com/Leta-Kasahun/my-portflio.git" },
      ],
    },
    {
      title: "Weather Forecast App",
      description:
        "A bilingual weather forecast app for worldwide cities, built to strengthen API integration skills. It provides up-to-date weather details in a simple and user-friendly interface.",
      tech: [
        { icon: <FaJsSquare className="text-yellow-500 text-2xl" />, name: "JavaScript" },
        { icon: <FaHtml5 className="text-orange-500 text-2xl" />, name: "HTML" },
        { icon: <FaCss3Alt className="text-blue-500 text-2xl" />, name: "CSS" },
        { icon: <FaGithub className="text-gray-700 dark:text-gray-600 text-2xl" />, name: "GitHub", link: "https://github.com/Leta-Kasahun/live-weather-app.git" },
      ],
    },
  ];

  return (
    <section className={`${darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-slate-700"} px-4 py-16`}>
      <h2 className={`text-4xl md:text-5xl font-extrabold text-center mb-12 ${darkMode ? "text-blue-300" : "text-blue-600"}`}>
        Projects
      </h2>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`flex flex-col justify-between p-6 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2
              ${darkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <p className="text-base mb-4">{project.description}</p>

            <div className="flex flex-wrap items-center gap-6 mt-auto">
              {project.tech.map((tech, i) =>
                tech.link ? (
                  <a
                    key={i}
                    href={tech.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-1 hover:text-coral-500 transition-colors duration-200"
                  >
                    {tech.icon}
                    <AiOutlineArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
                    <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-transparent`}>
                      <svg className="w-full h-full" viewBox="0 0 100 2" preserveAspectRatio="none">
                        <path
                          d="M0 1 Q5 0 10 1 T20 1 T30 1 T40 1 T50 1 T60 1 T70 1 T80 1 T90 1 T100 1"
                          stroke={darkMode ? "#34D399" : "#4682B4"}
                          strokeWidth="2"
                          fill="transparent"
                          strokeLinecap="round"
                          className="animate-dash"
                        />
                      </svg>
                    </span>
                  </a>
                ) : (
                  <div key={i} className="flex items-center gap-1">{tech.icon}</div>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes dash {
            0% { stroke-dasharray: 0, 100; }
            50% { stroke-dasharray: 100, 0; }
            100% { stroke-dasharray: 0, 100; }
          }
          .animate-dash { animation: dash 1.5s linear infinite; }
        `}
      </style>
    </section>
  );
}
