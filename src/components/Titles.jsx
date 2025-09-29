import { useState, useEffect } from "react";
import { FiSmile } from "react-icons/fi";

export default function Titles({ darkMode }) {
  const texts = [
    "software engineering student",
    "full-stack developer",
    "aspiring AI engineer",
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index >= texts.length) return;
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < texts[index].length) setSubIndex(subIndex + 1);
      else if (deleting && subIndex > 0) setSubIndex(subIndex - 1);
      else if (!deleting && subIndex === texts[index].length) setDeleting(true);
      else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);}}, deleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts]);

  useEffect(() => {
    const blinkTimeout = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkTimeout);
  }, []);

  const animatedColor = darkMode ? "text-emerald-400" : "text-emerald-500"; 
  return (
    <div className="flex flex-col items-center w-full mb-12 mt-8">
      {/* Name */}
      <h1 className={`text-5xl md:text-7xl font-extrabold tracking-wider mb-4 
        ${darkMode ? "text-blue-300" : "text-blue-600"}`}>
        Leta Kasahun
      </h1>
      <div className="flex items-center space-x-2 text-xl md:text-2xl mb-2 font-medium">
        <FiSmile className={`${darkMode ? "text-yellow-300" : "text-yellow-500"} text-3xl`} />
        <span className={`${darkMode ? "text-gray-300" : "text-slate-700"}`}>Hi there, welcome!</span>
      </div>

      <div className="flex items-center mt-4 text-2xl md:text-4xl font-semibold tracking-wide relative">
        <span className={`${darkMode ? "text-gray-300" : "text-slate-700"} mr-2`}>I am</span>
        <span className={`${animatedColor} relative`}>
          {texts[index].substring(0, subIndex)}
        
          <span className={`inline-block w-[2px] ${blink ? "bg-gray-800" : "bg-transparent"} ml-1 h-6 align-middle`} />
         
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-transparent">
            <svg className="w-full h-full" viewBox="0 0 200 10" preserveAspectRatio="none">
              <path
                d="M0 5 Q5 0 10 5 T20 5 T30 5 T40 5 T50 5 T60 5 T70 5 T80 5 T90 5 T100 5 T110 5 T120 5 T130 5 T140 5 T150 5 T160 5 T170 5 T180 5 T190 5 T200 5"
                stroke={darkMode ? "#34D399" : "#4682B4"} // emerald / steelblue
                strokeWidth="3"
                fill="transparent"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </span>
      </div>
    </div>
  );
}
