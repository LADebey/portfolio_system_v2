// src/components/Skills.jsx
import { motion } from "framer-motion";
import { colors } from "../constants/colors";

export default function Skills() {
  const sections = [
    {
      title: "FRONT-END",
      skills: ["React", "Vite", "TailwindCSS", "Framer Motion", "TypeScript"],
    },
    {
      title: "BACK-END",
      skills: ["Node.js", "Express", "REST APIs", "JWT Auth", "MongoDB"],
    },
    {
      title: "SYSTEMS / TOOLS",
      skills: ["Git / GitHub", "Linux", "Figma", "Vercel", "VSCode"],
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
      {/* === Soft vignette === */}
      <div
        className="absolute inset-0 bg-gradient-radial from-[#b0ab9820] via-transparent to-transparent opacity-30 pointer-events-none"
      />

      {/* === Noise overlay === */}
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

      {/* === Floating Section Label === */}
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

      {/* === Skills Grid === */}
      <div className="relative z-10 grid md:grid-cols-3 gap-8 mt-24 w-full max-w-6xl">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            className="relative border p-8 h-[400px] font-mono backdrop-blur-sm overflow-hidden group flex flex-col justify-center"
            style={{
              borderColor: colors.borderLight,
              backgroundColor: `${colors.borderDark}40`,
              boxShadow: "0 0 14px rgba(176,171,152,0.08)",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.25, duration: 0.8 }}
          >
            {/* Title Bar with Active Indicator */}
            <div
              className="absolute top-0 left-0 px-5 py-2 text-sm tracking-widest border-b border-r flex items-center gap-2"
              style={{
                borderColor: colors.borderLight,
                backgroundColor: `${colors.background}dd`,
                color: colors.textSecondary,
              }}
            >
              <span>[ {section.title} ]</span>
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
            </div>

            {/* Skills List */}
            <ul className="mt-10 space-y-3 text-[1.05rem] tracking-wider z-10">
              {section.skills.map((skill, idx) => (
                <motion.li
                  key={skill}
                  className="relative pl-6 before:absolute before:left-0 before:content-['>'] before:text-[#b0ab98]"
                  whileHover={{
                    color: colors.accent,
                    x: 4,
                    textShadow: "0 0 6px #b0ab98",
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>

            {/* Scanning overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-[#b0ab9844] to-transparent pointer-events-none"
              animate={{
                y: ["-100%", "100%"],
              }}
              transition={{
                duration: 7 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
