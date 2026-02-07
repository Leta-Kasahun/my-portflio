import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ darkMode = true, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const glassStyle = {
    backdropFilter: 'blur(24px) saturate(180%)',
    backgroundColor: 'rgba(17, 24, 39, 0.72)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.28), 0 1px 0 rgba(255, 255, 255, 0.04) inset',
    backgroundImage: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.03), rgba(99, 102, 241, 0.01))',
  };

  const buttonGlass = {
    backdropFilter: 'blur(12px)',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.1) inset',
  };

  const mobileMenuStyle = {
    backdropFilter: 'blur(40px) saturate(180%)',
    backgroundColor: 'rgba(17, 24, 39, 0.88)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.12)',
    boxShadow: '-20px 0 60px rgba(0, 0, 0, 0.3)',
    backgroundImage: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(99, 102, 241, 0.04))',
  };

  return (
    <nav className="w-full fixed top-0 z-50" style={{ margin: 0, padding: 0 }}>
      <div className="w-full transition-all duration-500 ease-out" style={glassStyle}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-5">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center"
          >
            <a href="#" className="flex items-center">
              <motion.span 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="text-3xl font-black tracking-tighter"
                style={{
                  fontFamily: "'Inter', -apple-system, sans-serif",
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 50%, #8B5CF6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 2px 24px rgba(99, 102, 241, 0.3)',
                }}
              >
                LETA K.
              </motion.span>
            </a>
          </motion.div>

          <div className="hidden lg:flex items-center gap-16">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              >
                <a
                  href={`#${link.id}`}
                  onClick={() => setActive(link.id)}
                  className="relative group"
                  style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}
                >
                  <motion.div
                    className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
                      filter: 'blur(8px)',
                    }}
                  />
                  
                  <span
                    className={`relative text-lg transition-all duration-300 px-3 py-2 rounded-lg
                      ${active === link.id 
                        ? 'text-white font-semibold before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-10 before:h-0.5 before:rounded-full'
                        : 'text-gray-300 group-hover:text-white font-medium'}`}
                    style={{
                      fontWeight: active === link.id ? 600 : 500,
                      letterSpacing: active === link.id ? '-0.01em' : '0',
                      background: active === link.id 
                        ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(99, 102, 241, 0.08))'
                        : 'transparent',
                      backdropFilter: active === link.id ? 'blur(8px)' : 'none',
                    }}
                  >
                    {link.label}
                    {active === link.id && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, #3B82F6, #6366F1)',
                          boxShadow: '0 0 12px rgba(99, 102, 241, 0.4)',
                        }}
                        layoutId="activeIndicator"
                      />
                    )}
                  </span>
                </a>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <motion.button 
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="relative group"
              style={{ width: '52px', height: '52px' }}
            >
              <div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle at center, rgba(251, 191, 36, 0.2) 0%, transparent 70%)',
                  filter: 'blur(12px)',
                }}
              />
              
              <div 
                className="w-full h-full rounded-full flex items-center justify-center transition-all duration-300"
                style={buttonGlass}
              >
                {darkMode ? (
                  <FiSun 
                    size={24} 
                    className="text-yellow-300"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.4))' }}
                  />
                ) : (
                  <FiMoon 
                    size={24} 
                    className="text-blue-600"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))' }}
                  />
                )}
              </div>
            </motion.button>

            <motion.button 
              onClick={toggleMenu}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="lg:hidden relative group"
              style={{ width: '52px', height: '52px' }}
            >
              <div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
                  filter: 'blur(12px)',
                }}
              />
              
              <div 
                className="w-full h-full rounded-full flex items-center justify-center transition-all duration-300"
                style={buttonGlass}
              >
                <FiMenu size={24} className="text-gray-300" />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      <div>
        <div 
          onClick={() => setMenuOpen(false)} 
          className={`fixed inset-0 z-40 transition-all duration-500
            ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          style={{
            backdropFilter: 'blur(20px)',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }}
        ></div>

        <motion.div 
          initial={false}
          animate={{ x: menuOpen ? 0 : 400 }}
          transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
          className="fixed top-0 right-0 w-96 h-screen z-50 flex flex-col items-start pt-32 pl-14 space-y-8"
          style={mobileMenuStyle}
        >
          <motion.button 
            onClick={() => setMenuOpen(false)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="absolute top-8 right-10"
            style={{ width: '56px', height: '56px' }}
          >
            <div 
              className="w-full h-full rounded-full flex items-center justify-center"
              style={buttonGlass}
            >
              <FiX size={28} className="text-gray-300" />
            </div>
          </motion.button>

          {navLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => { setActive(link.id); setMenuOpen(false); }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: menuOpen ? 1 : 0, x: menuOpen ? 0 : 30 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              className={`relative text-2xl font-medium transition-all duration-400 pl-8 py-4 rounded-xl w-4/5
                ${active === link.id ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'}`}
              style={{
                fontFamily: "'Inter', -apple-system, sans-serif",
                fontWeight: active === link.id ? 600 : 500,
                letterSpacing: '-0.01em',
                backdropFilter: active === link.id ? 'blur(12px)' : 'none',
                background: active === link.id 
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.16), rgba(99, 102, 241, 0.12))'
                  : 'transparent',
                border: active === link.id ? '1px solid rgba(99, 102, 241, 0.2)' : '1px solid transparent',
              }}
            >
              {link.label}
              {active === link.id && (
                <motion.div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 rounded-full"
                  style={{
                    background: 'linear-gradient(180deg, #3B82F6, #6366F1)',
                    boxShadow: '0 0 16px rgba(99, 102, 241, 0.5)',
                  }}
                  layoutId="mobileActiveIndicator"
                />
              )}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </nav>
  );
}