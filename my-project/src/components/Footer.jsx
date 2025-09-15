import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";

export default function Footer({ darkMode }) {
  const socialLinks = [
    {
      icon: <FaLinkedin className="text-2xl" />,
      href: "https://www.linkedin.com/in/Lkasahun",
      hoverColor: "hover:text-blue-400",
    },
    {
      icon: <FaInstagram className="text-2xl" />,
      href: "https://www.instagram.com/leta_kasahun",
      hoverColor: "hover:text-pink-400",
    },
    {
      icon: <FaTwitter className="text-2xl" />,
      href: "https://twitter.com/Lkasahun4",
      hoverColor: "hover:text-blue-300",
    },
    {
      icon: <FaGithub className="text-2xl" />,
      href: "https://github.com/Leta-Kasahun",
      hoverColor: "hover:text-coral-500",
    },
    {
      icon: <FaTelegram className="text-2xl" />,
      href: "https://t.me/letakasahun",
      hoverColor: "hover:text-blue-500",
    },
  ];

  return (
    <footer
      className={`${
        darkMode ? "bg-gray-800 text-gray-300" : "bg-blue-900 text-gray-100"
      } py-8 px-4`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        {/* Social Icons Only */}
        <div className="flex items-center gap-6">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-200 ${social.hoverColor}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="mt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
