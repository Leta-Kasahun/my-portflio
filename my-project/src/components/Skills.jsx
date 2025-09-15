export default function Skills({ darkMode }) {
  const skillCategories = [
    {
      title: "Front-end",
      skills: ["HTML", "CSS", "Tailwindcss", "React", "Next.js", "JavaScript", "TypeScript"],
      bg: darkMode ? "bg-blue-900/80" : "bg-blue-100/80",
      text: darkMode ? "text-blue-300" : "text-blue-800",
      progress: 90
    },
    {
      title: "Back-end",
      skills: ["Python", "Java", "Node.js", "Express", "PHP", "C++"],
      bg: darkMode ? "bg-green-900/80" : "bg-green-100/80",
      text: darkMode ? "text-green-300" : "text-green-800",
      progress: 85
    },
    {
      title: "Database",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "SQL Server"],
      bg: darkMode ? "bg-purple-900/80" : "bg-purple-100/80",
      text: darkMode ? "text-purple-300" : "text-purple-800",
      progress: 80
    },
    {
      title: "Tools",
      skills: ["VSCode", "Git", "GitHub", "Postman", "Canva"],
      bg: darkMode ? "bg-orange-900/80" : "bg-orange-100/80",
      text: darkMode ? "text-orange-300" : "text-orange-800",
      progress: 95
    },
  ];

  return (
    <section
      id="skills"
      className={`px-4 py-16 ${darkMode ? "bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300" : "bg-gradient-to-br from-gray-50 to-blue-50 text-slate-700"}`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-extrabold text-center mb-12 ${darkMode ? "text-blue-300" : "text-blue-600"}`}>
          My Skills
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center p-6 rounded-2xl shadow-lg backdrop-blur-sm border ${cat.bg} transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              {/* Title */}
              <h3 className={`text-2xl font-bold mb-4 ${cat.text}`}>{cat.title}</h3>

              {/* Skill Names */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full font-semibold text-sm transition-all duration-300 
                      ${darkMode ? "bg-gray-800/70 text-gray-100 hover:bg-gray-700 hover:shadow-lg" : "bg-white/80 text-gray-800 hover:bg-white hover:shadow-md"} 
                      hover:-translate-y-1 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Progress Bar with Percentage */}
              <div className="relative w-full h-4 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${cat.text.replace("text", "bg")}`}
                  style={{ width: `${cat.progress}%` }}
                ></div>
                <span className={`absolute right-2 top-0 text-sm font-semibold ${cat.text}`}>
                  {cat.progress}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
