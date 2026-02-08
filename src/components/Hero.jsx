import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaNodeJs, FaDocker, FaGlobe } from "react-icons/fa";
import { SiTailwindcss, SiPostgresql } from "react-icons/si";
import heroImg from "../assets/hero.png";

function PythonCloud({ size = "text-[54px] md:text-[72px] lg:text-[82px]" }) {
  return (
    <span className={`relative flex items-center justify-center rounded-full ${size} w-[54px] h-[54px] md:w-[72px] md:h-[72px] lg:w-[82px] lg:h-[82px]`}
      style={{
        background: 'linear-gradient(135deg, #3776AB 58%, #FFD343 42%)',
        boxShadow: '0 2px 18px 3px rgba(6,6,10,0.32)',
      }}>
      <FaPython className="text-white text-2xl md:text-4xl" />
    </span>
  );
}

const bubbles = [
  {
    id: 'react', Icon: FaReact, color: "#61DAFB",
    size: "text-[54px] md:text-[72px] lg:text-[82px]",
    bg: "#0D1117",  // dark-neutral to let official color show, not white!
    xStart: "3vw", yStart: "-8vh", xRand: 20, yRand: 12, z: 20,
  },
  {
    id: 'node', Icon: FaNodeJs, color: "#3C873A",
    size: "text-[54px] md:text-[72px] lg:text-[82px]",
    bg: "#202B23", xStart: "18vw", yStart: "-5vh", xRand: 16, yRand: 18, z: 20,
  },
  {
    id: 'python', Icon: PythonCloud, color: "python",
    size: "", bg: 'transparent',
    xStart: "34vw", yStart: "-9vh", xRand: 24, yRand: 22, z: 20,
  },
  {
    id: 'docker', Icon: FaDocker, color: "#2496ED",
    size: "text-[58px] md:text-[78px] lg:text-[88px]",
    bg: "#132A3A", xStart: "48vw", yStart: "-5vh", xRand: 14, yRand: 17, z: 20,
  },
  {
    id: 'tailwind', Icon: SiTailwindcss, color: "#38BDF8",
    size: "text-[54px] md:text-[72px] lg:text-[82px]",
    bg: "#0EA5E9", xStart: "62vw", yStart: "-10vh", xRand: 13, yRand: 15, z: 20,
  },
  {
    id: 'postgres', Icon: SiPostgresql, color: "#336791",
    size: "text-[54px] md:text-[72px] lg:text-[82px]",
    bg: "#222C3A", xStart: "76vw", yStart: "-9vh", xRand: 13, yRand: 15, z: 20,
  },
  {
    id: 'globe', Icon: FaGlobe, color: "#326dee",
    size: "text-[49px] md:text-[66px] lg:text-[76px]",
    bg: "#1E293B", xStart: "-8vw", yStart: "-12vh", xRand: 15, yRand: 14, z: 20,
  },
  {
    id: 'skills', Icon: () =>
      <span className="rounded-full flex items-center justify-center bg-[#4682B4] w-[47px] h-[47px] md:w-[66px] md:h-[66px] lg:w-[76px] lg:h-[76px]">
        <span className="font-black text-lg md:text-2xl text-white">
          {"</>"}
        </span>
      </span>,
    color: "#4682B4", size: "", bg: "#243447", xStart: "97vw", yStart: "-10vh", xRand: 11, yRand: 13, z: 20,
  },
];

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

  function randArr(n, base, size) {
    return Array.from({ length: n }, (_, i) =>
      base + (Math.sin(i + 1.5) * size));
  }

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

      {bubbles.map((b, i) => (
        <motion.div key={b.id} className="absolute"
          style={{
            left: b.xStart, top: b.yStart, zIndex: b.z,
            pointerEvents: "none",
            filter: `drop-shadow(0 6px 30px rgba(0,0,0,0.46))`,
            opacity: 0.83,
          }}
          animate={{
            x: randArr(8, 0, b.xRand),
            y: randArr(8, 0, b.yRand),
            rotate: [0, 4, -3, 2, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 28 + i * 3.5,
            ease: "easeInOut",
          }}>
          <span
            className={`rounded-full flex items-center justify-center border border-black/10
              ${b.bg === 'transparent' ? '' : ''}`}
            style={{
              background: b.bg,
              boxShadow: b.bg === 'transparent' ? undefined : "0 6px 38px 2px rgba(6,6,10,0.16)",
              minWidth: "45px", minHeight: "45px",
            }}>
            {b.color === "python"
              ? <b.Icon />
              : b.id === 'skills'
                ? <b.Icon />
                : <b.Icon className={b.size} style={{ color: b.color }} />}
          </span>
        </motion.div>
      ))}

      <div className="relative z-30 max-w-4xl w-full mx-auto flex flex-col items-center gap-6 px-4"
        style={{ marginTop: "2.2rem", marginBottom: "2.2rem" }}>
        <motion.h1
          initial={{ opacity: 0, y: -32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.16 }}
          className="text-center text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-1
          bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-600 bg-clip-text text-transparent"
          style={{
            letterSpacing: '-0.03em',
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text"
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
          Welcome to my <span className="font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mr-1">digital showcase</span>
          where code meets creativity.
        </motion.div>
        <div className="flex justify-center mt-10 mb-0 w-full">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg blur opacity-15"></div>
            <div className="relative px-8 py-6 rounded-lg border border-transparent bg-zinc-900/60 backdrop-blur-md">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
                {text}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent"
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