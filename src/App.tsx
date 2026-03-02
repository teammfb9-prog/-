import { motion } from 'motion/react';
import { Sparkles, Diamond, Hexagon } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center relative overflow-hidden selection:bg-[#C5A059] selection:text-black">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Decorative SVG Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.svg 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-10 left-10 w-64 h-64 text-[#C5A059]" 
          viewBox="0 0 100 100" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.5"
        >
          <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="30" />
        </motion.svg>

        <motion.svg 
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 0.05, rotate: 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute -bottom-20 -right-20 w-96 h-96 text-[#C5A059]" 
          viewBox="0 0 100 100" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.2"
        >
          <path d="M10,50 L50,10 L90,50 L50,90 Z" />
          <path d="M20,50 L50,20 L80,50 L50,80 Z" />
        </motion.svg>
      </div>

      <main className="relative z-10 flex flex-col items-center">
        {/* Top Accent Line */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100px", opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }}
          className="h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mb-12"
        />

        {/* The Name */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative group"
        >
          {/* Subtle glow behind text */}
          <div className="absolute inset-0 bg-[#C5A059]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <h1 
            className="font-serif text-8xl md:text-9xl lg:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-[#F5E6C8] to-[#C5A059] drop-shadow-2xl tracking-tight"
            style={{ textShadow: '0 10px 40px rgba(197, 160, 89, 0.15)' }}
          >
            مُهَنَّد
          </h1>
        </motion.div>

        {/* English Subtitle / Translation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-4 text-[#C5A059]/60">
            <Diamond className="w-3 h-3" />
            <span className="font-sans text-sm md:text-base tracking-[0.4em] uppercase font-light">
              Mohannad
            </span>
            <Diamond className="w-3 h-3" />
          </div>
          
          <p className="font-sans text-xs md:text-sm text-white/40 tracking-widest uppercase font-light max-w-xs text-center leading-relaxed">
            The Sharp Sword <br/> Forged in Elegance
          </p>
        </motion.div>

        {/* Bottom Accent Line */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100px", opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2, ease: "circOut" }}
          className="h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mt-12"
        />
      </main>

      {/* Floating Particles (SVG) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              y: "100vh", 
              x: Math.random() * 100 - 50 + "vw",
              opacity: 0,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: "-10vh",
              opacity: [0, 0.5, 0],
              rotate: 360
            }}
            transition={{ 
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute text-[#C5A059]/30"
          >
            <Hexagon className="w-6 h-6" strokeWidth={1} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
