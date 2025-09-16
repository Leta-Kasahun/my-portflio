import { useState } from "react";
import { CgNametag } from "react-icons/cg";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-colors duration-300 
        ${darkMode 
          ? "bg-gray-800/90 shadow-lg text-gray-300 backdrop-blur-sm" 
          : "bg-white/90 shadow-md text-slate-700 backdrop-blur-sm"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <div className="font-mono text-3xl tracking-wider flex items-center">
          <a href="#" className="flex items-center">
            <CgNametag className="inline mr-2 text-coral-500" />
            <span className={`${darkMode ? "text-blue-300" : "text-blue-600"} font-bold`}>
              LETA
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 font-light text-lg">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActive(link.id)}
              className={`relative pb-1 transition-colors duration-200 
                ${active === link.id 
                  ? `${darkMode ? "text-blue-300" : "text-blue-600"} 
                     after:content-[''] after:block after:h-[2px] 
                     ${darkMode ? "after:bg-blue-300" : "after:bg-blue-600"} after:w-full after:mt-1`
                  : "hover:text-blue-600"}`}

            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions (toggle + menu) */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="text-2xl focus:outline-none">
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-2xl focus:outline-none">
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Overlay + Drawer */}
      <div>
        {/* Overlay */}
        <div 
          onClick={() => setMenuOpen(false)} 
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 
            ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        ></div>

        {/* Drawer */}
        <div className={`fixed top-0 right-0 w-3/4 h-screen z-50 flex flex-col 
          items-center pt-10 space-y-6 text-lg transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          ${darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-slate-700"}`}>

          {/* Close Button inside drawer */}
          <button 
            onClick={() => setMenuOpen(false)} 
            className="absolute top-4 right-4 text-3xl focus:outline-none"
          >
            <FiX />
          </button>

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => { 
                setActive(link.id); 
                setMenuOpen(false); 
              }}
              className={`relative pb-1 transition-colors duration-200 
                ${active === link.id 
                  ? `${darkMode ? "text-blue-300" : "text-blue-600"} 
                     after:content-[''] after:block after:h-[2px] 
                     ${darkMode ? "after:bg-blue-300" : "after:bg-blue-600"} after:w-full after:mt-1`
                  : "hover:text-blue-600"}`}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
