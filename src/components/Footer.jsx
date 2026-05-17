import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer({ darkMode }) {
  const socialLinks = [
    {
      icon: <FaLinkedin className="text-xl" />,
      href: "https://www.linkedin.com/in/Lkasahun",
    },
    {
      icon: <FaInstagram className="text-xl" />,
      href: "https://www.instagram.com/leta_kasahun",
    },
    {
      icon: <FaTwitter className="text-xl" />,
      href: "https://twitter.com/Lkasahun4",
    },
    {
      icon: <FaGithub className="text-xl" />,
      href: "https://github.com/Leta-Kasahun",
    },
    {
      icon: <FaTelegram className="text-xl" />,
      href: "https://t.me/letakasahun",
    },
  ];

  return (
    <footer
      className={`py-12 px-4 border-t transition-colors duration-500
        ${darkMode 
          ? "bg-gray-900 text-gray-300 border-gray-800/80" 
          : "bg-gray-50 text-slate-700 border-slate-200"}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        
        {/* Branding Title */}
        <div className="flex flex-col items-center gap-1.5">
          <span 
            className="text-2xl font-black tracking-tighter text-blue-600 dark:text-blue-500"
            style={{
              fontWeight: 900,
              letterSpacing: '-0.04em',
              textShadow: '0 2px 20px rgba(37, 99, 235, 0.2)',
            }}
          >
            LETA K.
          </span>
          <span className="text-sm font-semibold tracking-wide uppercase opacity-75">
            Software Engineer & Full-Stack Developer
          </span>
        </div>

        {/* Social Connections */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-full border transition-all duration-300 ${
                darkMode 
                  ? "border-gray-800 bg-gray-900/40 text-gray-400 hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                  : "border-slate-200 bg-white text-slate-500 hover:border-blue-500/50 hover:text-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.1)]"
              }`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Decorative Divider */}
        <div className="h-px w-full max-w-xl bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

        {/* Crafting Tagline & Copyright */}
        <div className="flex flex-col items-center gap-2 max-w-md">
          <p className="text-center text-sm opacity-80 leading-relaxed font-medium">
            Crafting seamless full-stack applications with clean structure and premium user experience.
          </p>
          <p className="text-center text-xs opacity-60 mt-1">
            &copy; {new Date().getFullYear()} Leta Kasahun. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
