import { motion } from "framer-motion"
import { colors } from "../constants/colors"

const About = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* === Subtle Noise + Scanline Background === */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Moving scanning light */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: `linear-gradient(115deg, transparent 40%, ${colors.accent}40 50%, transparent 60%)`,
        }}
        animate={{ backgroundPosition: ["-200% 0", "200% 0"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* === Layout === */}
      <div className="relative z-10 flex flex-col md:flex-row w-11/12 max-w-6xl gap-10">

        {/* --- Left System Menu --- */}
        <motion.div
          className="md:w-1/3 border p-6 font-mono uppercase tracking-widest text-sm"
          style={{ borderColor: colors.borderDark, color: colors.textSecondary }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 border-b pb-2" style={{ borderColor: `${colors.accent}33` }}>
            System Menu
          </div>

          <motion.ul
            className="space-y-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <motion.li
                key={item}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                whileHover={{
                  color: colors.textPrimary,
                  textShadow: `0 0 6px ${colors.accent}`,
                  transition: { duration: 0.2 },
                }}
                className={`cursor-pointer ${
                  item === "About" ? "opacity-100" : "opacity-60"
                }`}
              >
                {item === "About" ? "▶ " : "▸ "}
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* --- Right Info Panel --- */}
        <motion.div
          className="flex-1 border p-8 font-mono relative"
          style={{
            borderColor: colors.borderLight,
            color: colors.textPrimary,
            backgroundColor: `${colors.background}cc`,
          }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status header with CRT flicker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0.7, 1, 0.9, 1],
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="uppercase mb-4 text-[0.8rem] tracking-widest border-b pb-2"
            style={{ borderColor: `${colors.accent}33`, color: colors.textSecondary }}
          >
            Status
          </motion.div>

          <div className="text-base leading-relaxed mb-6">
            I craft interactive and immersive web experiences using modern technologies.<br />
            Driven by curiosity, design precision, and a passion for meaningful digital systems.
          </div>

          {/* System Data Box */}
          <div
            className="text-xs border-t border-dashed pt-4"
            style={{ borderColor: colors.accent }}
          >
            <p>NAME: <span style={{ color: colors.textPrimary }}>Your Name</span></p>
            <p>LEVEL: <span style={{ color: colors.textPrimary }}>Student @ Zone01</span></p>
            <p>VERSION: 2.1.05</p>
            <p>LOCATION: <span style={{ color: colors.textPrimary }}>Paris, France</span></p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
