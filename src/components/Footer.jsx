// src/components/Footer.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { colors } from "../constants/colors";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // triggers a bit before fully visible

  return (
    <motion.footer
      ref={ref}
      className="py-10 text-center font-mono text-sm tracking-widest border-t relative overflow-hidden"
      style={{
        borderColor: colors.borderLight,
        color: colors.textSecondary,
        backgroundColor: colors.background,
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Noise layer */}
      <motion.div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "30px 30px", "0px 0px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Animated text */}
      <motion.span
        className="opacity-70 block relative z-10"
        animate={isInView ? { opacity: [0.4, 1, 0.4] } : {}}
        transition={{ duration: 4, repeat: Infinity }}
      >
        // SYSTEM_END_SEQUENCE
      </motion.span>

      <motion.span
        className="opacity-50 block mt-1 relative z-10"
        animate={isInView ? { opacity: [0.3, 0.7, 0.3] } : {}}
        transition={{ duration: 5, repeat: Infinity }}
      >
        © {new Date().getFullYear()} Louis-Adrien Debey — All rights reserved.
      </motion.span>

      <motion.span
        className="opacity-25 block mt-2 text-xs relative z-10"
        animate={isInView ? { opacity: [0.2, 0.5, 0.2] } : {}}
        transition={{ duration: 6, repeat: Infinity }}
      >
        // END_OF_FILE
      </motion.span>

      {/* Faint flicker bar (for immersion) */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[1px] bg-[#b0ab98]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: [0.2, 0.5, 0.2] } : {}}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.footer>
  );
}
