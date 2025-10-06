import { motion } from "framer-motion";
import { Typewriter } from "./Typewriter";
import { HeroBackground } from "./HeroBackground";
import { colors } from "../constants/colors";

export const PortfolioHero = () => {
  return (
    <div
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <HeroBackground />

      <motion.div
        className="z-20 text-center px-4 relative max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div
          className="inline-block mb-8 px-6 py-2 border-2 font-mono tracking-widest text-sm"
          style={{ borderColor: colors.accent, color: colors.textPrimary }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          PORTFOLIO_SYSTEM_v2.0
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-mono"
          style={{ color: colors.textPrimary }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span style={{ color: colors.textSecondary }}>[</span>
          Louis-Adrien Debey
          <span style={{ color: colors.textSecondary }}>]</span>
        </motion.h1>

        <motion.div
          className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 flex items-center justify-center gap-3 font-mono"
          style={{ color: colors.accent }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <span>&gt;</span>
          <Typewriter
            text={[
              "Fullstack Developer",
              "Creative Designer",
              "Problem Solver",
              "Tech Enthusiast"
            ]}
            speed={80}
            className="font-medium"
            waitTime={2000}
            deleteSpeed={50}
            cursorChar="_"
          />
        </motion.div>

        <motion.p
          className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-mono"
          style={{ color: colors.textSecondary }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
         I’m a passionate web developer in training at Zone 01, exploring modern technologies and creating interactive, responsive web experiences.<br/>
I love learning new tools, building projects, and solving problems with clean, elegant code.

        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <button
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 border-2 font-medium font-mono transition-all duration-300 hover:bg-[#b0ab98] hover:text-[#4b413d]"
            style={{ borderColor: colors.accent, color: colors.textPrimary }}
          >
            <span>[ VIEW_WORK ]</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <button
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 font-medium font-mono transition-all duration-300 hover:bg-[#594e4a]"
            style={{ borderColor: colors.borderDark, color: colors.textSecondary }}
          >
            <span>[ CONTACT ]</span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}
