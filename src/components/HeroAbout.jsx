import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import heroImage from "../assets/image.png";
import resumeFile from "../assets/resume.pdf";
import Hero from "./Hero";
import LazyImage from "./LazyImage";

export default function HeroAbout({ darkMode }) {
  const intro = "B.Sc. Software Engineering student at Debre Birhan University and Full-Stack Developer with hands-on experience in Python and JavaScript ecosystem. Strong skills in backend development, RESTful API design, and software development lifecycle (SDLC) practices. Experienced with Git for version control and Docker for containerization. Alongside my studies";
  const more = ", I am expanding my skills in Kubernetes for cloud-native apps. Aspiring to specialize in AI and build scalable progressive web apps that solve real-world problems. Highly motivated, adaptable, and open to new opportunities where I can contribute to meaningful projects while growing as a software engineer.";

  return (
    <section id="about" className={`mt-32 pt-20 px-0 pb-20 md:pb-24 ${darkMode ? "bg-gradient-to-br from-gray-900 to-gray-900" : "bg-gradient-to-br from-gray-50 to-blue-50"}`}>
      <Hero darkMode={darkMode} />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
          className="w-full max-w-[280px] sm:max-w-none sm:w-80 md:w-96 lg:w-[400px] h-[300px] sm:h-[400px] flex-shrink-0 flex flex-col items-center relative mx-auto"
          style={{ minWidth: 220, minHeight: 220 }}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <div style={{
              width: "96%", height: "88%",
              borderRadius: "46% 54% 45% 55% / 60% 38% 62% 40%",
              background: darkMode
                ? "linear-gradient(125deg, rgba(37, 99, 235, 0.32) 60%, rgba(167, 139, 250, 0.25) 100%)"
                : "linear-gradient(125deg, #bfdbfe 50%, #a5b4fc 100%)",
              boxShadow: darkMode
                ? "0 5px 55px rgba(39, 59, 81, 0.4)"
                : "0 8px 36px rgba(219, 234, 254, 0.5)"
            }} />
          </div>
          <LazyImage
            src={heroImage}
            alt="Leta Kasahun"
            wrapperClassName="absolute inset-0 flex justify-center items-center z-10 w-full h-full"
            imgClassName="w-[90%] h-[90%] object-cover"
            imgStyle={{
              borderRadius: "46% 54% 45% 55% / 60% 38% 62% 40%",
              boxShadow: "0 1.5px 24px 1px rgba(40,64,138,0.14), 0 0 0 6px rgba(244, 247, 251, 0.38)"
            }}
          />
          <div className="flex gap-6 mt-10 z-10">
            <a href="https://github.com/Leta-Kasahun" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full shadow-lg transition-all duration-300 bg-white hover:bg-gray-100">
              <FiGithub className="text-3xl text-gray-900" />
            </a>
            <a href="https://linkedin.com/in/lkasahun" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full shadow-lg transition-all duration-300 bg-blue-600 hover:bg-blue-700">
              <FiLinkedin className="text-3xl text-white" />
            </a>
            <a href="mailto:letakasahun2@gmail.com"
              className="p-3 rounded-full shadow-lg transition-all duration-300 bg-red-500 hover:bg-red-600">
              <FiMail className="text-3xl text-white" />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
          className="lg:w-[70%] w-full flex flex-col"
        >
          <div className="mb-6">
            <h2 
              className="text-5xl md:text-6xl font-black text-blue-600 dark:text-blue-500"
              style={{
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                textShadow: darkMode ? '0 2px 24px rgba(37, 99, 235, 0.3)' : '0 2px 20px rgba(37, 99, 235, 0.2)',
              }}
            >
              About Me
            </h2>
          </div>
          <div 
            className="text-lg leading-relaxed text-left"
            style={{
              background: darkMode ? "rgba(17, 24, 39, 0.85)" : "#f3f6fb",
              borderRadius: 24,
              padding: "2.4rem 2.2rem",
              color: darkMode ? "#f1f5f9" : "#1e293b",
                fontWeight: 400,
                letterSpacing: '0.01em',
              lineHeight: 1.7,
              backdropFilter: 'blur(8px)',
              border: darkMode ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
            }}
          >
            {intro}{more}
          </div>
          <div className="w-full flex flex-col items-start sm:items-center mt-10 gap-10">
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <a
                href={resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-lg font-semibold flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                }}
              >
                View Resume
              </a>
              <a
                href={resumeFile}
                download
                className="px-10 py-4 rounded-lg font-semibold flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  border: darkMode ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.08)',
                }}
              >
                Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}