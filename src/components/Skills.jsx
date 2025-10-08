import { motion } from "framer-motion";
import { useState } from "react";
import { colors } from "../constants/colors";

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const sections = [
    {
      title: "FRONT-END",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "Javascript", level: 80 },
        { name: "React", level: 75 },
        { name: "TailwindCSS", level: 85 }
      ],
      status: "ACTIVE",
      sync: "98%"
    },
    {
      title: "BACK-END",
      skills: [
        { name: "Golang", level: 70 },
        { name: "PHP", level: 75 },
        { name: "Laravel", level: 70 },
        { name: "REST APIs", level: 80 },
        { name: "SQL", level: 75 }
      ],
      status: "ACTIVE",
      sync: "94%"
    },
    {
      title: "SYSTEMS / TOOLS",
      skills: [
        { name: "Git / GitHub", level: 85 },
        { name: "Agile/SCRUM", level: 80 },
        { name: "Docker", level: 65 },
        { name: "Vercel", level: 75 }
      ],
      status: "ACTIVE",
      sync: "96%"
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center px-8 py-28 overflow-hidden"
      style={{
        backgroundColor: colors.background,
        color: colors.textPrimary,
      }}
    >
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-[#b0ab9820] via-transparent to-transparent opacity-30 pointer-events-none" />

      {/* Noise overlay */}
      <motion.div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px", "0px 0px"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Section Label */}
      <motion.div
        className="absolute top-12 left-1/2 -translate-x-1/2 border px-8 py-3 font-mono text-sm tracking-widest z-10"
        style={{
          borderColor: colors.borderLight,
          backgroundColor: `${colors.background}dd`,
          color: colors.textSecondary,
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        // SKILLS_SYSTEM_v3.2
      </motion.div>

      {/* Skills Grid */}
      <div className="relative z-10 grid md:grid-cols-3 gap-8 mt-24 w-full max-w-6xl">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            className="relative border h-[450px] font-mono backdrop-blur-sm overflow-hidden group flex flex-col"
            style={{
              borderColor: colors.borderLight,
              backgroundColor: `${colors.borderDark}40`,
              boxShadow: "0 0 14px rgba(176,171,152,0.08)",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.25, duration: 0.8 }}
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: colors.accent }} />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: colors.accent }} />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: colors.accent }} />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: colors.accent }} />

            {/* Title Bar */}
            <div
              className="px-5 py-3 text-sm tracking-widest border-b flex items-center justify-between"
              style={{
                borderColor: colors.borderLight,
                backgroundColor: `${colors.background}dd`,
                color: colors.textSecondary,
              }}
            >
              <span className="flex items-center gap-2">
                [ {section.title} ]
                <motion.span
                  className="text-[#b0ab98] text-base"
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  •
                </motion.span>
              </span>
              <span className="text-xs" style={{ color: colors.accent }}>
                {section.status}
              </span>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 flex flex-col justify-between">
              {/* Skills List */}
              <ul className="space-y-4 text-base tracking-wider z-10">
                {section.skills.map((skill, idx) => (
                  <motion.li
                    key={skill.name}
                    className="relative"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.25 + idx * 0.1 }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#b0ab98]">&gt;</span>
                      <motion.span
                        whileHover={{
                          color: colors.accent,
                          x: 2,
                        }}
                      >
                        {skill.name}
                      </motion.span>
                    </div>
                    {/* Progress Bar - decorative only */}
                    <div className="h-[2px] bg-[#594e4a] relative overflow-hidden">
                      <motion.div
                        className="absolute top-0 left-0 h-full"
                        style={{ backgroundColor: colors.accent }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: i * 0.25 + idx * 0.1 + 0.3, duration: 0.8 }}
                      />
                      <motion.div
                        className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent to-white"
                        style={{ opacity: 0.3 }}
                        animate={{
                          x: ["-100%", `${skill.level}%`],
                        }}
                        transition={{
                          delay: i * 0.25 + idx * 0.1 + 0.3,
                          duration: 1.2,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.li>
                ))}
              </ul>

              {/* System Info Footer */}
              <div
                className="mt-4 pt-4 border-t text-xs flex items-center justify-between"
                style={{
                  borderColor: `${colors.accent}33`,
                  color: colors.textSecondary,
                }}
              >
                <span>SYNC: {section.sync}</span>
                <motion.span
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  {hoveredIndex === i ? "◆ ANALYZING" : "◇ READY"}
                </motion.span>
              </div>
            </div>

            {/* Scanning overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-[#b0ab9833] to-transparent pointer-events-none"
              animate={{
                y: ["-100%", "100%"],
              }}
              transition={{
                duration: 7 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Hover Highlight */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, transparent, ${colors.accent}11, transparent)`,
              }}
              animate={{
                opacity: hoveredIndex === i ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}