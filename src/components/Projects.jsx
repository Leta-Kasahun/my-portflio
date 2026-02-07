import { useState, useRef, useEffect } from "react";
import { AiFillGithub, AiOutlineEye } from "react-icons/ai";
import { FaExternalLinkAlt, FaReact, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiSpringboot, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

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

const techIcons = {
  React: <FaReact className="text-blue-500 text-xl" title="React" />,
  NextJS: <SiNextdotjs className="text-gray-900 dark:text-gray-200 text-xl" title="NextJS" />,
  Tailwind: <SiTailwindcss className="text-cyan-500 text-xl" title="Tailwind CSS" />,
  Express: <SiExpress className="text-gray-700 dark:text-gray-400 text-xl" title="Express" />,
  MongoDB: <SiMongodb className="text-green-500 text-xl" title="MongoDB" />,
  PostgreSQL: <SiPostgresql className="text-blue-700 text-xl" title="PostgreSQL" />,
  SpringBoot: <SiSpringboot className="text-green-700 text-xl" title="Spring Boot" />,
  Java: <FaJava className="text-orange-800 text-xl" title="Java" />,
  NodeJS: <FaNodeJs className="text-green-600 text-xl" title="NodeJS" />,
  Python: <FaPython className="text-yellow-400 text-xl" title="Python" />,
};

const projects = [
  {
    title: "Etworks", type: "Team-Based Academic System",
    description: "Secure job platform with role-based access, payments, PDF generation, and cloud storage.",
    image: "Etworks.png", tech: ["React", "SpringBoot", "PostgreSQL", "Tailwind"],
    links: { live: "https://etworks-live-demo.com", source: "https://github.com/Leta-Kasahun/Jobsphere", details: "/projects/etworks" },
    starDetails: [
      { situation: "Organizations needed a secure platform to manage job postings and applications." },
      { task: "Build a role-based job system with advanced features." },
      { action: "Developed React UI, Spring Boot backend, PostgreSQL database, Google Auth, PDF generation, and cloud storage." },
      { result: "Delivered a production-ready system with strong security and real-world deployment readiness." }
    ]
  },
  {
    title: "ShopSphere", type: "Full-Stack E-Commerce Application",
    description: "Online shopping platform with product browsing, cart management, and order tracking.",
    image: "shopsphere.png", tech: ["NextJS", "Tailwind", "Express", "MongoDB", "NodeJS"],
    links: { live: "https://shopsphere-live-demo.com", source: "https://github.com/Leta-Kasahun/CodeAlpha_Ecommerce_Frontend", details: "/projects/shopsphere" },
    starDetails: [
      { situation: "Need for a simple and efficient online shopping experience." },
      { task: "Develop a full-stack e-commerce system supporting payments and order tracking." },
      { action: "Built frontend with NextJS & Tailwind, backend APIs with Express, MongoDB for product and order data." },
      { result: "Achieved high usability, fast performance, and scalable backend operations." }
    ]
  },
  {
    title: "ShareSphere", type: "Full-Stack Social Media Application",
    description: "Users can follow, share posts, comment, and like securely with responsive UI.",
    image: "sharesphere.png", tech: ["NextJS", "Tailwind", "Express", "MongoDB", "NodeJS"],
    links: { live: "https://sharesphere-live-demo.com", source: "https://github.com/Leta-Kasahun/CodeAlpha_SocialMediaApp_Frontend", details: "/projects/sharesphere" },
    starDetails: [
      { situation: "Users needed a secure and responsive platform for social interaction." },
      { task: "Design and build a full-stack social media system with authentication and notifications." },
      { action: "Implemented NextJS frontend, REST APIs with Node.js & Express, MongoDB for data storage, and email notifications." },
      { result: "Delivered a scalable, responsive application with secure workflows and smooth user interaction." }
    ]
  }
];

const importImg = name => new URL(`/src/assets/${name}`, import.meta.url).href;

export default function Projects({ darkMode }) {
  const [openIdx, setOpenIdx] = useState(null);
  const [sectionRef, sectionInView] = useScrollAnimation(0.1);

  return (
    <motion.section 
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`${darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-slate-700"} px-4 py-20`}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16" style={{
        fontFamily: "'Inter', -apple-system, sans-serif", fontWeight: 900, letterSpacing: '-0.025em',
        background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 50%, #8B5CF6 100%)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
      }}>Projects</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col shadow-xl rounded-2xl overflow-hidden transition-all duration-300 group border border-transparent hover:border-blue-400/30
              ${darkMode ? "bg-gray-800/50 backdrop-blur-sm" : "bg-white"}`}
            style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}
          >
            <img src={importImg(project.image)} alt={`${project.title} screenshot`}
              className="w-full h-44 md:h-52 object-cover transition-all duration-300 group-hover:scale-105" loading="lazy" />
            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ fontWeight: 700, letterSpacing: '-0.01em' }}>{project.title}</h3>
              <p className="text-base mb-5 flex-1" style={{ fontWeight: 400, lineHeight: 1.6, opacity: 0.9 }}>{project.description}</p>
              <div className="flex flex-wrap justify-center gap-3 mb-5">
                <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700 hover:bg-blue-500 hover:text-white transition-all duration-300"
                  style={{ fontFamily: "'Inter', -apple-system, sans-serif", fontWeight: 500 }}><FaExternalLinkAlt className="text-sm" /> Live Demo</a>
                <a href={project.links.source} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-300"
                  style={{ fontFamily: "'Inter', -apple-system, sans-serif", fontWeight: 500 }}><AiFillGithub className="text-lg" /> Source</a>
                <button onClick={() => setOpenIdx(idx)}
                  className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300"
                  style={{ fontFamily: "'Inter', -apple-system, sans-serif", fontWeight: 500 }}><AiOutlineEye className="text-lg" />Details</button>
              </div>
              <div className="flex items-center justify-center gap-5 mt-2 mb-1">
                {project.tech.map((tech, i) => (<span key={i}>{techIcons[tech] || <span className="text-gray-400 italic text-xs">{tech}</span>}</span>))}
              </div>
            </div>
            {openIdx === idx && (
              <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={() => setOpenIdx(null)} style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
                <div className="relative w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
                  <div className="w-full max-w-3xl mx-auto h-auto bg-white bg-opacity-80 rounded-2xl shadow-2xl border border-blue-300 flex flex-col justify-between p-10"
                    style={{ minHeight: "72vh", fontSize: "1.05rem", color: "#111" }}>
                    <button className="absolute top-5 right-7 text-gray-700 hover:text-blue-600 text-2xl font-bold" onClick={() => setOpenIdx(null)} style={{ zIndex: 20 }}>&times;</button>
                    <h2 className="text-3xl font-bold text-center mb-6 text-blue-500">{project.title}</h2>
                    <div className="flex items-center justify-center gap-5 mb-5">
                      <span className="text-base font-semibold text-blue-400">{project.type}</span>
                      <span className="flex items-center gap-4">{project.tech.map((tech, i) => <span key={i}>{techIcons[tech]}</span>)}</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center">
                      <p className="text-lg mb-5 text-center">{project.description}</p>
                      <ol className="list-decimal ml-6 space-y-2 text-base text-left font-[500]">
                        {project.starDetails.map((item, i) => (<li key={i}>{Object.values(item)[0]}</li>))}
                      </ol>
                    </div>
                    <div className="flex items-center justify-center gap-7 mt-8 mb-2">
                      <a href={project.links.details} className="text-blue-600 hover:underline font-semibold text-lg">Full Project Details</a>
                      <a href={project.links.source} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline flex items-center gap-2 text-lg"><AiFillGithub className="text-xl" /> Source</a>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline flex items-center gap-2 text-lg"><FaExternalLinkAlt /> Live Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}