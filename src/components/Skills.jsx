import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiOpenjdk,
  SiSpringboot,
  SiNextdotjs,
  SiPostman,
  SiCplusplus,
  SiPhp,
} from "react-icons/si";
import { FaGithub, FaJava } from "react-icons/fa6";
import { FaStar, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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

function Stars({ level }) {
  return (
    <div className="flex justify-center mt-2 gap-1">
      {[...Array(5)].map((_, idx) => (
        idx < level ? (
          <FaStar
            key={idx}
            className="text-xl md:text-2xl text-yellow-500"
          />
        ) : (
          <FaRegStar
            key={idx}
            className="text-xl md:text-2xl text-gray-300 dark:text-gray-600"
          />
        )
      ))}
    </div>
  );
}

export default function Skills({ darkMode }) {
  const [sectionRef, sectionInView] = useScrollAnimation(0.1);
  
  const skills = [
    { icon: <SiPython className="text-[#3776AB] text-6xl" />, stars: 4 },
    { icon: <SiJavascript className="text-[#F7DF1E] text-6xl" />, stars: 4 },
    { icon: <SiNextdotjs className="text-gray-800 dark:text-gray-300 text-6xl" />, stars: 4 },
    { icon: <SiHtml5 className="text-[#E34F26] text-6xl" />, stars: 4 },
    { icon: <SiGit className="text-[#F05032] text-6xl" />, stars: 4 },
    { icon: <FaGithub className="text-gray-800 dark:text-gray-300 text-6xl" />, stars: 4 },
    { icon: <FaJava className="text-[#007396] text-6xl" />, stars: 3 },
    { icon: <SiSpringboot className="text-[#6DB33F] text-6xl" />, stars: 3 },
    { icon: <SiReact className="text-[#61DAFB] text-6xl" />, stars: 3 },
    { icon: <SiTypescript className="text-[#007ACC] text-6xl" />, stars: 3 },
    { icon: <SiTailwindcss className="text-[#06B6D4] text-6xl" />, stars: 3 },
    { icon: <SiPostgresql className="text-[#336791] text-6xl" />, stars: 3 },
    { icon: <SiMongodb className="text-[#47A248] text-6xl" />, stars: 3 },
    { icon: <SiDocker className="text-[#2496ED] text-6xl" />, stars: 3 },
    { icon: <SiCss3 className="text-[#2965F1] text-6xl" />, stars: 3 },
    { icon: <SiPostman className="text-[#FF6C37] text-6xl" />, stars: 3 },
    { icon: <SiCplusplus className="text-[#00599C] text-6xl" />, stars: 3 },
    { icon: <SiPhp className="text-[#777BB4] text-6xl" />, stars: 3 },
  ];

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`px-4 py-16 ${darkMode ? "bg-gradient-to-br from-gray-900 to-gray-800" : "bg-gradient-to-br from-gray-50 to-blue-50"}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-extrabold text-center mb-12 ${darkMode ? "text-blue-300" : "text-blue-600"}`}>
          My Skills
        </h2>
        <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col items-center p-6 rounded-2xl shadow-lg border ${
                darkMode 
                  ? "bg-gray-800/80 backdrop-blur-[4px] border-gray-700 hover:bg-gray-700/80" 
                  : "bg-white/90 backdrop-blur-[4px] border-gray-200 hover:bg-white"
              } hover:scale-105 hover:shadow-xl transition-all duration-300`}
            >
              {skill.icon}
              <Stars level={skill.stars} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}