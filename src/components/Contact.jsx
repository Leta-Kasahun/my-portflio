import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sectionRef, sectionInView] = useScrollAnimation(0.1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_g68d2y5",
        "template_10y17mg",
        {
          user_email: formData.email,
          message: formData.message,
          subject: `Message from ${formData.name}`,
        },
        "Md2MhkOiuS-FL7APG"
      )
      .then(
        (result) => {
          console.log("✅ Email sent successfully:", result.text);
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("❌ Email send failed:", error.text);
          alert("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`${darkMode ? "bg-gradient-to-br from-gray-900 to-gray-900" : "bg-gradient-to-br from-gray-50 to-blue-50"} px-4 py-20`}
      style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        style={{
          fontWeight: 900,
          letterSpacing: '-0.025em',
          background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 50%, #8B5CF6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Contact Me
      </motion.h2>

      <div className="max-w-2xl mx-auto flex flex-col gap-8">
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-lg
              ${darkMode
                ? "bg-gray-800/70 backdrop-blur-sm border-gray-700 text-gray-200 placeholder-gray-400 hover:border-blue-500/50"
                : "bg-white/90 backdrop-blur-sm border-gray-300 text-gray-800 placeholder-gray-500 hover:border-blue-400"
              }`}
            style={{ fontFamily: "'Inter', -apple-system, sans-serif", fontWeight: 400 }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-lg
              ${darkMode
                ? "bg-gray-800/70 backdrop-blur-sm border-gray-700 text-gray-200 placeholder-gray-400 hover:border-blue-500/50"
                : "bg-white/90 backdrop-blur-sm border-gray-300 text-gray-800 placeholder-gray-500 hover:border-blue-400"
              }`}
            style={{ fontFamily: "'Inter', -apple-system, sans-serif", fontWeight: 400 }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className={`p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-lg
              ${darkMode
                ? "bg-gray-800/70 backdrop-blur-sm border-gray-700 text-gray-200 placeholder-gray-400 hover:border-blue-500/50"
                : "bg-white/90 backdrop-blur-sm border-gray-300 text-gray-800 placeholder-gray-500 hover:border-blue-400"
              }`}
            style={{ fontFamily: "'Inter', -apple-system, sans-serif", fontWeight: 400, lineHeight: 1.6 }}
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="mt-4 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)',
              fontFamily: "'Inter', -apple-system, sans-serif",
              fontWeight: 600,
              letterSpacing: '0.02em',
              fontSize: '1.1rem',
            }}
          >
            Send Message
          </motion.button>
          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-green-500 font-medium text-lg text-center"
              style={{ fontFamily: "'Inter', -apple-system, sans-serif", fontWeight: 500 }}
            >
              Message sent successfully!
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col gap-5 text-lg"
          >
            <div className="flex items-center gap-4 p-4 rounded-xl" style={{
              background: darkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.08)',
              border: `1px solid ${darkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.15)'}`
            }}>
              <FaEnvelope className="text-blue-500 text-2xl" />
              <span style={{ fontFamily: "'Inter', -apple-system, sans-serif", fontWeight: 500 }}>letakasahun2@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl" style={{
              background: darkMode ? 'rgba(34, 197, 94, 0.1)' : 'rgba(34, 197, 94, 0.08)',
              border: `1px solid ${darkMode ? 'rgba(34, 197, 94, 0.2)' : 'rgba(34, 197, 94, 0.15)'}`
            }}>
              <FaPhone className="text-green-500 text-2xl" />
              <span style={{ fontFamily: "'Inter', -apple-system, sans-serif", fontWeight: 500 }}>+251 923 695 611</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl" style={{
              background: darkMode ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.08)',
              border: `1px solid ${darkMode ? 'rgba(239, 68, 68, 0.2)' : 'rgba(239, 68, 68, 0.15)'}`
            }}>
              <FaMapMarkerAlt className="text-red-500 text-2xl" />
              <span style={{ fontFamily: "'Inter', -apple-system, sans-serif", fontWeight: 500 }}>Debre Birhan, Ethiopia</span>
            </div>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
}