import { FaGraduationCap, FaCode, FaLaptopCode, FaUniversity } from "react-icons/fa";
import { AiOutlineCalendar, AiOutlineArrowUp } from "react-icons/ai";
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

export default function Experience({ darkMode }) {
  const [sectionRef, sectionInView] = useScrollAnimation(0.1);
  
  const experiences = [
    {
      icon: <FaGraduationCap />,
      title: "B.Sc. Software Engineering Studies",
      duration: "May 2023 – Present",
      company: "Debre Birhan University",
      description:
        "Actively pursuing a Bachelor of Science in Software Engineering, covering core academic areas including programming fundamentals, data structures, algorithms, databases, software design, and the software development lifecycle (SDLC). Applying theoretical knowledge through coursework, labs, and academic projects, while practicing problem-solving, backend logic, and system design using structured programming and engineering principles.",
    },
    {
      icon: <FaCode />,
      title: "Full-Stack Development Intern",
      duration: "Nov 2025 – Dec 2025",
      company: "CodeAlpha",
      description: "Developed full-stack Social Media and E-commerce applications using Next.js, Express, MongoDB, and Tailwind CSS. Implemented Google Authentication, email notifications, and RESTful APIs with secure database integration.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Self-Learning MERN Stack",
      duration: "Jun 2025 – Sep 2025",
      company: "Evangadi",
      description: "Built multiple web projects including Apple Website Redesign, Task Manager, Portfolio, and Snake Game. Applied HTML, CSS, JavaScript, Node.js, Express, MySQL, and MongoDB to implement full-stack workflows.",
    },
    {
      icon: <FaUniversity />,
      title: "Frontend Fundamentals",
      duration: "Sep 2024 – Nov 2024",
      company: "Udacity",
      description: "Completed hands-on coursework in HTML, CSS, and basic JavaScript for modern web application development.",
    },
  ];

  const iconSizeMobile = "w-10 h-10";
  const iconSizeDesktop = "md:w-12 md:h-12";
  const iconCircle = `absolute left-4 md:left-1/2 md:-translate-x-1/2 z-20 flex items-center justify-center
    ${iconSizeMobile} ${iconSizeDesktop}
    rounded-full border-4 ${darkMode ? "bg-blue-600 border-gray-900" : "bg-blue-600 border-gray-50"}`;
  const iconContent = "text-white text-xl md:text-2xl";

  const halfIconMobile = 20;
  const halfIconDesktop = 24;

  return (
    <motion.section 
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`${darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-slate-700"} px-4 py-16 md:py-20`}
      style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 md:mb-16" style={{
        fontWeight: 900,
        letterSpacing: '-0.025em',
        background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 50%, #8B5CF6 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>Experience</h2>
      <div className="max-w-5xl mx-auto relative">
        <div className="hidden md:block absolute w-0.5 z-0" style={{
          left: "50%",
          top: `calc(${halfIconDesktop}px)`,
          bottom: `calc(${halfIconDesktop}px)`,
          transform: "translateX(-50%)",
        }}>
          <div className={`w-0.5 h-full ${darkMode ? "bg-blue-500" : "bg-blue-600"}`}></div>
        </div>
        <div className="block md:hidden absolute w-0.5 z-0" style={{
          left: `${halfIconMobile}px`,
          top: `calc(${halfIconMobile}px)`,
          bottom: `calc(${halfIconMobile}px)`,
        }}>
          <div className={`w-0.5 h-full ${darkMode ? "bg-blue-500" : "bg-blue-600"}`}></div>
        </div>
        <div className={iconCircle + " top-0 -translate-y-1/2"}><AiOutlineArrowUp className={iconContent} /></div>
        <div className={iconCircle + " bottom-0 translate-y-1/2"} />
        <div className="space-y-12 md:space-y-16 pt-16 pb-16 relative">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className={iconCircle + " top-0 -translate-y-1/2"}><div className={iconContent}>{exp.icon}</div></div>
              <div className={`pl-16 md:pl-0 ${idx % 2 === 0 
                ? 'md:mr-auto md:pr-8 md:pl-0 md:w-[46%] md:text-right' 
                : 'md:ml-auto md:pl-8 md:pr-0 md:w-[46%]'}`}>
                <div className={`flex items-center gap-1 mb-2 font-semibold text-sm md:text-base ${darkMode ? "text-blue-300" : "text-blue-600"} ${idx % 2 === 0 ? 'md:justify-end' : ''}`} style={{ fontWeight: 600 }}>
                  <span><AiOutlineCalendar className="text-sm md:text-base" /></span>
                  <span>{exp.duration}</span>
                </div>
                <div className={`mb-2 text-base md:text-lg font-medium ${darkMode ? "text-gray-300" : "text-gray-700"} ${idx % 2 === 0 ? 'md:text-right' : ''}`} style={{ fontWeight: 500 }}>
                  {exp.company}
                </div>
                <h3 className={`text-lg md:text-xl font-bold mb-3 break-words ${darkMode ? "text-white" : "text-gray-900"}`} style={{ fontWeight: 700, letterSpacing: '-0.01em' }}>
                  {exp.title}
                </h3>
                <div className={`p-4 md:p-5 rounded-lg ${darkMode ? "bg-gray-800/40" : "bg-gray-100/80"}`}>
                  <p className="text-justify text-sm md:text-base leading-relaxed break-words" style={{ fontWeight: 400, lineHeight: 1.7 }}>
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}