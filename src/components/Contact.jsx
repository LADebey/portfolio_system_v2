// src/components/Contact.jsx
import { motion } from "framer-motion";
import { colors } from "../constants/colors";
import { Linkedin, Github, FileDown } from "lucide-react"; 

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-8 py-28 overflow-hidden"
      style={{
        backgroundColor: colors.background,
        color: colors.textPrimary,
      }}
    >
      {/* === Ambient Noise Overlay === */}
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

      {/* === Subtle vignette === */}
      <div className="absolute inset-0 bg-gradient-radial from-[#b0ab9815] via-transparent to-transparent opacity-40 pointer-events-none" />

      {/* === Section Label === */}
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
        // CONTACT_TERMINAL_v1.1
      </motion.div>

      {/* === Content === */}
      <div className="relative z-10 max-w-3xl text-center mt-24">
        <motion.h2
          className="font-mono text-xl mb-6 tracking-widest"
          style={{ color: colors.accent }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          [ SYSTEM ONLINE - READY FOR CONNECTION ]
        </motion.h2>

        <motion.p
          className="text-base md:text-lg leading-relaxed mb-12 text-[#e0dfd5cc]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Thank you for visiting my portfolio.<br />
          You can reach out to me directly or explore my work through the links below.
        </motion.p>

        {/* === Buttons with icons === */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            label="[ LINKEDIN ]"
            href="https://www.linkedin.com/in/louis-adrien-debey-974228291/"
            icon={<Linkedin size={18} />}
            accent
          />
          <Button
            label="[ GITHUB ]"
            href="https://github.com/LADebey"
            icon={<Github size={18} />}
          />
          <Button
            label="[ DOWNLOAD_CV ]"
            href="/cvLAD.pdf"
            icon={<FileDown size={18} />}
            download
          />
        </div>
      </div>

      {/* === Decorative bottom line === */}
      <motion.div
        className="absolute bottom-10 w-full text-center text-xs font-mono opacity-60"
        style={{ color: colors.textSecondary }}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        // Transmission Ended.
      </motion.div>
    </section>
  );
}

function Button({ label, href, icon, accent = false, download = false }) {
  return (
    <motion.a
      href={href}
      download={download}
      target={!download ? "_blank" : undefined}
      rel={!download ? "noopener noreferrer" : undefined}
      className={`flex items-center justify-center gap-3 px-8 py-3 border text-sm font-mono tracking-widest transition-all duration-300 ${
        accent
          ? "hover:bg-[#b0ab98] hover:text-[#4b413d]"
          : "hover:bg-[#594e4a] hover:text-[#e0dfd5]"
      }`}
      style={{
        borderColor: colors.borderLight,
        color: accent ? colors.accent : colors.textPrimary,
        backgroundColor: `${colors.borderDark}30`,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.span
        className="flex items-center gap-2"
        animate={{
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        {icon}
        {label}
      </motion.span>
    </motion.a>
  );
}
