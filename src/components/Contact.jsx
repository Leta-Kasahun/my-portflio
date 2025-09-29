import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className={`${darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-slate-700"} px-4 py-16`}>
      <h2 className={`text-4xl md:text-5xl font-extrabold text-center mb-12 ${darkMode ? "text-blue-300" : "text-blue-600"}`}>
        Contact Me
      </h2>

      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200
              ${darkMode ? "bg-gray-800 border-gray-600 text-gray-200 placeholder-gray-400" : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"}`}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200
              ${darkMode ? "bg-gray-800 border-gray-600 text-gray-200 placeholder-gray-400" : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"}`}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className={`p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200
              ${darkMode ? "bg-gray-800 border-gray-600 text-gray-200 placeholder-gray-400" : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"}`}
          />
          <button
            type="submit"
            className={`mt-2 px-6 py-3 rounded-lg font-semibold text-white transition-colors duration-200
              ${darkMode ? "bg-emerald-500 hover:bg-emerald-600" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            Send Message
          </button>
          {submitted && <p className="mt-2 text-green-500 font-medium">Message sent successfully!</p>}

          <div className="mt-6 flex flex-col gap-4 text-base">
            <div className="flex items-center gap-3">
              <FaEnvelope className={`${darkMode ? "text-blue-300" : "text-blue-600"} text-xl`} />
              <span>letacasahun2@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className={`${darkMode ? "text-green-400" : "text-green-600"} text-xl`} />
              <span>+251 923 695 611</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className={`${darkMode ? "text-coral-400" : "text-red-500"} text-xl`} />
              <span>Debre Birhan, Ethiopia</span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
