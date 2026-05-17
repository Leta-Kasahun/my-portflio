import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroAbout from "./components/HeroAbout";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CaseStudyPage from "./components/CaseStudyPage";

export default function App() {
  const [darkMode, setDarkMode] = useState(true); 

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-slate-700"
      } min-h-screen transition-colors duration-300`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={
          <>
            <section id="home">
              <HeroAbout darkMode={darkMode} />
            </section>
            <section id="projects">
              <Projects darkMode={darkMode} />
            </section>
            <section id="experience">
              <Experience darkMode={darkMode} />
            </section>
            <section id="skills">
              <Skills darkMode={darkMode} />
            </section>
            <section id="contact">
              <Contact darkMode={darkMode} />
            </section>
          </>
        } />
        <Route path="/projects/:projectId" element={<CaseStudyPage darkMode={darkMode} />} />
      </Routes>
      <Footer darkMode={darkMode} />
    </div>
  );
}