import { useState } from "react";
import Titles from "./Titles";
import { FiEye, FiBookOpen, FiTrendingUp, FiUsers } from "react-icons/fi"; 
import heroImage from "../assets/image.png"; 
import resumeFile from "../assets/resume.pdf"; 

export default function HeroAbout({ darkMode }) {
  const [readMore, setReadMore] = useState(false);

  const handleToggle = () => setReadMore(!readMore);

  const paragraph =
    "Motivated Software Engineering student and Full-Stack (MERN) Developer with experience in frontend, backend, and database development. Skilled in teamwork, adaptability, and software documentation...";
  const extraParagraphs = [
    {
      icon: <span className="inline mr-3 text-2xl align-top" role="img" aria-label="study">📘</span>,
      text: "I am currently pursuing my Bachelor’s Degree in Software Engineering at Debre Berhan University (DBU). Alongside my studies, I actively practice coding and problem-solving on platforms like LeetCode to strengthen my skills and stay consistent in my learning journey."
    },
    {
      icon: <span className="inline mr-3 text-2xl align-top" role="img" aria-label="ambition">🚀</span>,
      text: "My long-term vision is to become a specialist in Artificial Intelligence and Machine Learning. I am especially passionate about algorithms, data-driven projects, and exploring how AI can be applied to build efficient and scalable solutions that solve real-world problems."
    },
    {
      icon: <span className="inline mr-3 text-2xl align-top" role="img" aria-label="progress">🛠️</span>,
      text: "To achieve this goal, I am continuously improving my Python skills and learning AI-related tools, frameworks, and libraries. I enjoy collaborating with others, sharing knowledge, and working on projects that push me closer to my future career path in AI and ML."
    }
  ];

  return (
    <section
      className={`${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-slate-700"
      } px-4 py-8`}
    >
      
      <Titles darkMode={darkMode} />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-8">
        <div className="flex-1 md:w-1/3 flex justify-center items-stretch">
          <div
            className={`flex-1 rounded-lg shadow-lg overflow-hidden ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
          </div>
        </div>
        <div
          className={`flex-1 md:w-2/3 flex flex-col justify-between rounded-lg shadow-lg p-6 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? "text-blue-300" : "text-blue-600"
            }`}
          >
            About Me
          </h2>

         
          <p className="mt-2 text-base md:text-lg leading-relaxed">
            {paragraph}
            <br />
          </p>
          {readMore && (
            <div className="mt-2 space-y-3">
              {extraParagraphs.map((para, idx) => (
                <p key={idx} className="flex items-start leading-relaxed mb-2 text-base md:text-lg">
                  {para.icon}
                  <span>{para.text}</span>
                </p>
              ))}
            </div>
          )}

       
          <div className="mt-6 flex flex-wrap gap-4">
            
            <button
              onClick={handleToggle}
              className={`px-6 py-2 rounded-md font-medium flex items-center gap-2 transition-colors duration-200 ${
                darkMode
                  ? "bg-blue-600 text-gray-50 hover:bg-blue-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {readMore ? "Show Less" : "More About Me"}
            </button>

            {/* View Resume */}
            <a
              href={resumeFile} 
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2 rounded-md font-medium flex items-center gap-2 transition-colors duration-200 ${
                darkMode
                  ? "bg-blue-600 text-gray-50 hover:bg-blue-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              <FiEye className="text-xl" /> View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
