// src/components/About.jsx
import { motion } from "framer-motion";
import { colors } from "../constants/colors";
import profileImage from "../assets/retouch.webp";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center p-8 md:p-16 overflow-hidden"
      style={{
        backgroundColor: colors.background,
        color: colors.textPrimary,
      }}
    >
      {/* === Global moving noise overlay === */}
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
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* === Left Menu Section === */}
      <motion.div
        className="relative z-10 w-full md:w-1/3 border p-6 font-mono text-sm tracking-widest uppercase"
        style={{
          borderColor: colors.borderDark,
          backgroundColor: `${colors.borderDark}20`,
          color: colors.textSecondary,
        }}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="border-b pb-3 mb-4"
          style={{ borderColor: colors.borderLight }}
        >
          <span style={{ color: colors.textPrimary }}>SYSTEM</span>
        </div>
        <ul className="space-y-3">
          <motion.li
            className="text-[#e0dfd5] relative"
            animate={{
              opacity: [1, 0.7, 1],
              textShadow: [
                "0 0 2px #b0ab98",
                "0 0 8px #b0ab98",
                "0 0 2px #b0ab98",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          >
            &gt; About
          </motion.li>
          <li className="opacity-60">Skills</li>
          <li className="opacity-60">Projects</li>
          <li className="opacity-60">Contact</li>
        </ul>
      </motion.div>

      {/* === Right Info Section === */}
      <motion.div
        className="relative z-10 flex-1 border p-10 font-mono flex flex-col md:flex-row gap-8 items-center md:items-start backdrop-blur-sm"
        style={{
          borderColor: colors.borderLight,
          backgroundColor: `${colors.background}cc`,
        }}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
       
      {/* === Profile Image with flicker === */}
<motion.div
  className="w-72 h-72 overflow-hidden border border-[#b0ab98]/30 shadow-inner relative"
  animate={{
    opacity: [0.9, 1, 0.95, 1],
    filter: [
      "brightness(1) contrast(1)",
      "brightness(1.05) contrast(1.1)",
      "brightness(0.95) contrast(0.9)",
      "brightness(1) contrast(1)",
    ],
  }}
  transition={{
    repeat: Infinity,
    duration: 6,
    ease: "easeInOut",
  }}
>
  <img
    src={profileImage}
    alt="Profile"
    className="w-full h-full object-cover object-top opacity-90"
  />
  <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent_0px,rgba(0,0,0,0.1)_1px,transparent_2px)] pointer-events-none" />
</motion.div>


        {/* === Info Text === */}
        <div className="flex-1 mt-6 md:mt-0 z-10">
          <div
            className="uppercase mb-4 text-[0.8rem] tracking-widest border-b pb-2"
            style={{ borderColor: `${colors.accent}33`, color: colors.textSecondary }}
          >
            Status
          </div>

       <p className="text-base leading-relaxed mb-6">
  Former foreign languages student (English & Chinese) with a business focus,<br />
  now transitioning into tech to craft meaningful digital experiences.<br />
  I enjoy challenges — both in code and in life — and I approach each project<br />
  with the same discipline I bring to training and self-improvement.<br />
  Currently seeking an <span className="text-[#b0ab98]">alternance</span> to continue growing as a developer<br />
  while contributing to innovative, purpose-driven teams.
</p>


          <div
            className="text-xs border-t border-dashed pt-4 space-y-1"
            style={{ borderColor: colors.accent }}
          >
            <p>
              NAME: <span style={{ color: colors.textPrimary }}>Louis-Adrien Debey</span>
            </p>
            <p>
              LEVEL: <span style={{ color: colors.textPrimary }}>Student @ Zone01</span>
            </p>
            <p>VERSION: 2.1.05</p>
            <p>
              LOCATION: <span style={{ color: colors.textPrimary }}>France</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
