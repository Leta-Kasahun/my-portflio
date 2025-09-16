import { useState } from "react";
import Titles from "./Titles";
import { FiEye } from "react-icons/fi"; // Eye icon for view resume
import heroImage from "../assets/image.png"; // adjust path
import resumeFile from "../assets/resume.pdf"; // imported PDF

export default function HeroAbout({ darkMode }) {
  const [readMore, setReadMore] = useState(false);

  const handleToggle = () => setReadMore(!readMore);

  const paragraph =
    "Motivated Software Engineering student and Full-Stack MERN Developer with experience in frontend, backend, and database development. Skilled in teamwork, adaptability, and OOSAD documentation.";
  const extraParagraph =
    " Actively practices coding and problem-solving on platforms like LeetCode to continuously improve skills. Aspiring AI Engineer, passionate about building scalable and efficient AI-based web solutions, and open to new opportunities. Experienced in developing responsive web applications using React, TailwindCSS, Node.js, Express, MongoDB, and integrating APIs. Strong interest in AI, machine learning, and data-driven projects, with hands-on experience in Python and relevant libraries.";

  return (
    <section
      className={`${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-slate-700"
      } px-4 py-8`}
    >
      
      <Titles darkMode={darkMode} />

      {/* Hero + About */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-8">
        {/* Hero Image */}
        <div className="flex-1 md:w-1/3 flex justify-center items-stretch">
          <div
            className={`flex-1 rounded-lg shadow-lg overflow-hidden ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* About Section */}
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
            {paragraph} {readMore && extraParagraph}
          </p>

       
          <div className="mt-6 flex flex-wrap gap-4">
            
            <button
              onClick={handleToggle}
              className={`px-6 py-2 rounded-md font-medium flex items-center gap-2 transition-colors duration-200 ${
                darkMode
                  ? "bg-blue-600 text-gray-50 hover:bg-blue-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {readMore ? "Read Less" : "Read More"}
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
