import { motion } from "framer-motion";
import { useState } from "react";
import { colors } from "../constants/colors";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Easy to update project array - just add new objects here!
  const projects = [
    {
      id: 1,
      title: "PROJECT_PLACEHOLDER_01",
      description: "Project description will be added here. This is a placeholder for your future work.",
      status: "COMING_SOON",
      tags: ["React", "TailwindCSS", "Framer Motion"],
      image: "https://via.placeholder.com/600x400/594e4a/b0ab98?text=PROJECT+01",
      github: "#",
      demo: "#",
      isPlaceholder: true
    },
    {
      id: 2,
      title: "PROJECT_PLACEHOLDER_02",
      description: "Another amazing project waiting to be showcased here.",
      status: "COMING_SOON",
      tags: ["Golang", "REST API"],
      image: "https://via.placeholder.com/600x400/594e4a/b0ab98?text=PROJECT+02",
      github: "#",
      demo: "#",
      isPlaceholder: true
    },
    {
      id: 3,
      title: "PROJECT_PLACEHOLDER_03",
      description: "Your next great project will be displayed in this slot.",
      status: "COMING_SOON",
      tags: ["PHP", "Laravel", "MySQL"],
      image: "https://via.placeholder.com/600x400/594e4a/b0ab98?text=PROJECT+03",
      github: "#",
      demo: "#",
      isPlaceholder: true
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center px-8 py-28 overflow-hidden"
      style={{
        backgroundColor: colors.background,
        color: colors.textPrimary,
      }}
    >
      {/* Noise overlay */}
      <motion.div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "-40px -40px", "0px 0px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Diagonal lines background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            ${colors.accent} 10px,
            ${colors.accent} 11px
          )`,
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
        // PROJECT_DATABASE_v1.8
      </motion.div>

      {/* Projects Container */}
      <div className="relative z-10 w-full max-w-6xl mt-24 space-y-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="relative border font-mono backdrop-blur-sm overflow-hidden group"
            style={{
              borderColor: colors.borderLight,
              backgroundColor: `${colors.borderDark}40`,
            }}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2" style={{ borderColor: colors.accent }} />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2" style={{ borderColor: colors.accent }} />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2" style={{ borderColor: colors.accent }} />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2" style={{ borderColor: colors.accent }} />

            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden border-b md:border-b-0 md:border-r" style={{ borderColor: colors.borderLight }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80"
                  style={{ filter: 'grayscale(20%)' }}
                />
                
                {/* Scanline effect on image */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-[#b0ab9844] to-transparent pointer-events-none"
                  animate={{
                    y: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Placeholder overlay */}
                {project.isPlaceholder && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#4b413d]/80">
                    <motion.div
                      className="text-center"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <div className="text-4xl mb-2" style={{ color: colors.accent }}>[ ? ]</div>
                      <div className="text-sm tracking-widest">LOADING...</div>
                    </motion.div>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl tracking-wider" style={{ color: colors.textPrimary }}>
                      {project.title}
                    </h3>
                    <motion.span
                      className="text-xs px-3 py-1 border"
                      style={{
                        borderColor: project.isPlaceholder ? colors.accent : colors.borderLight,
                        color: project.isPlaceholder ? colors.accent : colors.textSecondary,
                      }}
                      animate={{
                        opacity: project.isPlaceholder ? [0.5, 1, 0.5] : 1,
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      {project.status}
                    </motion.span>
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: colors.textSecondary }}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 border"
                        style={{
                          borderColor: `${colors.accent}66`,
                          color: colors.textSecondary,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    className={`flex-1 text-center py-2 border font-mono text-sm transition-all duration-300 ${
                      project.isPlaceholder ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#b0ab98] hover:text-[#4b413d]'
                    }`}
                    style={{
                      borderColor: colors.borderLight,
                      color: colors.textPrimary,
                    }}
                    whileHover={!project.isPlaceholder ? { scale: 1.02 } : {}}
                    onClick={(e) => project.isPlaceholder && e.preventDefault()}
                  >
                    [ VIEW_CODE ]
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className={`flex-1 text-center py-2 border font-mono text-sm transition-all duration-300 ${
                      project.isPlaceholder ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#594e4a]'
                    }`}
                    style={{
                      borderColor: colors.borderDark,
                      color: colors.textSecondary,
                    }}
                    whileHover={!project.isPlaceholder ? { scale: 1.02 } : {}}
                    onClick={(e) => project.isPlaceholder && e.preventDefault()}
                  >
                    [ LIVE_DEMO ]
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Hover highlight */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(90deg, transparent, ${colors.accent}08, transparent)`,
              }}
              animate={{
                opacity: hoveredIndex === i ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom info */}
      <motion.div
        className="relative z-10 mt-12 text-center text-sm font-mono"
        style={{ color: colors.textSecondary }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="opacity-60">// More projects coming soon...</span>
      </motion.div>
    </section>
  );
}