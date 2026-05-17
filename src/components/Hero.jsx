import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero.png";

export default function Hero({ darkMode }) {
  const phrases = [
    "Full-Stack Developer",
    "Software Engineer",
    "Problem Solver",
    "Tech Enthusiast",
  ];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    if (pause) { const timeout = setTimeout(() => setPause(false), 1200); return () => clearTimeout(timeout); }
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else { setPause(true); setTimeout(() => setIsDeleting(true), 1200); }
      } else {
        if (text.length > 0) { setText(text.slice(0, -1)); }
        else { setIsDeleting(false); setIndex((prev) => (prev + 1) % phrases.length); }
      }
    }, isDeleting ? 40 : 80); return () => clearTimeout(timeout);
  }, [text, isDeleting, pause, index, phrases]);

  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden" style={{ margin: 0, padding: 0 }}>
      <img src={heroImg} alt="hero background"
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
        draggable={false} />
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10"
        style={{
          background: darkMode ? 'rgba(16,23,42,0.08)' : 'rgba(20,20,20,0.05)',
        }}
      />

      <div className="relative z-30 max-w-4xl w-full mx-auto flex flex-col items-center gap-6 px-4"
        style={{ marginTop: "2.2rem", marginBottom: "2.2rem" }}>
        <motion.h1
          initial={{ opacity: 0, y: -32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.16 }}
          className="text-center text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-1 text-blue-600 dark:text-blue-500"
          style={{
            letterSpacing: '-0.03em',
          }}>
          Leta Kasahun
        </motion.h1>
        <div className="h-1 w-28 mx-auto bg-gradient-to-r from-blue-500 to-indigo-400 mt-2 mb-1"></div>
        <motion.div
          initial={{ opacity: 0, y: 13, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.33, duration: 0.6 }}
          className="text-2xl md:text-3xl text-center px-3 font-light text-white"
        >
          Welcome to my <span className="font-bold mr-1 text-blue-600 dark:text-blue-500">digital showcase</span>
          where code meets creativity.
        </motion.div>
        <div className="flex justify-center mt-10 mb-0 w-full">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg blur opacity-15"></div>
            <div className="relative px-8 py-6 rounded-lg border border-transparent bg-zinc-900/60 backdrop-blur-md">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 50%, #8B5CF6 100%)',
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>
                {text}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 50%, #8B5CF6 100%)',
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  |
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}