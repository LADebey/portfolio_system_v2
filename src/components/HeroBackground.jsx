import { motion } from "framer-motion";
import { colors } from "../constants/colors";

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 mix-blend-overlay opacity-40 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '150px 150px',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(176,171,152,0.03) 1px, transparent 1px),
            linear-gradient(rgba(176,171,152,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ backgroundColor: colors.accent }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="absolute top-8 left-8 w-32 h-32 border border-[#594e4a]/30" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border border-[#594e4a]/30" />
      
      <div className="absolute top-1/4 right-12 w-1 h-20 bg-[#b8b29d]/20" />
      <div className="absolute bottom-1/4 left-12 w-20 h-1 bg-[#b8b29d]/20" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b0ab98]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b0ab98]/30 to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-[#b0ab98]/40 via-[#b0ab98]/20 to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-[#b0ab98]/40 via-[#b0ab98]/20 to-transparent" />
      </div>
    </div>
  )
}
