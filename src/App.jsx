import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroAbout from "./components/HeroAbout";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false); 

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-slate-700"
      } min-h-screen transition-colors duration-300`}
    >
      {/* Navbar with global darkMode toggle */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero + About section */}
      <section id="home">
        <HeroAbout darkMode={darkMode} />
      </section>

      {/* Projects section */}
      <section id="projects">
        <Projects darkMode={darkMode} />
      </section>

      {/* Skills section */}
      <section id="skills">
        <Skills darkMode={darkMode} />
      </section>

      {/* Contact section */}
      <section id="contact">
        <Contact darkMode={darkMode} />
      </section>

      {/* Footer section */}
      <Footer darkMode={darkMode} />
    </div>
  );
}
