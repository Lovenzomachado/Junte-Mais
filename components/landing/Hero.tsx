
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Asterisk, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const techImage = "https://images.unsplash.com/photo-1761599821310-da0d6356b4f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBkYXRhJTIwZGFyayUyMG1hdHJpeHxlbnwxfHx8fDE3NjgyNDc5NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const creativeImage = "https://images.unsplash.com/photo-1761977317692-4561ab4845e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBmYXNoaW9uJTIwYXJ0aXN0aWMlMjBwb3J0cmFpdCUyMGNvbG9yZnVsJTIwbmVvbnxlbnwxfHx8fDE3NjgyNDc5NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function Hero() {
  const [hoveredSide, setHoveredSide] = useState<'strategy' | 'creativity' | null>(null);

  const getBackgroundColor = () => {
    if (hoveredSide === 'strategy') return '#CCFF00'; // Neon Green
    if (hoveredSide === 'creativity') return '#E0C3FC'; // Lilac
    return '#050505'; // Black
  };

  const getTextColor = () => {
    if (hoveredSide) return '#050505';
    return '#F2F2F2';
  };

  return (
    <motion.section 
      className="relative h-screen w-full overflow-hidden transition-colors duration-500 ease-in-out flex flex-col justify-center items-center"
      animate={{ backgroundColor: getBackgroundColor() }}
    >
      {/* Background Images Overlay */}
      <AnimatePresence>
        {hoveredSide === 'strategy' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none z-0"
          >
            <img src={techImage} alt="Strategy Background" className="w-full h-full object-cover grayscale" />
          </motion.div>
        )}
        {hoveredSide === 'creativity' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none z-0"
          >
            <img src={creativeImage} alt="Creativity Background" className="w-full h-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="z-10 container mx-auto px-4 flex flex-col items-center justify-center h-full relative py-20">
        <div className="flex flex-col w-full max-w-6xl gap-8 md:gap-4 relative">
          
          {/* Strategy Word - Top Left */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="self-start relative z-10"
            onMouseEnter={() => setHoveredSide('strategy')}
            onMouseLeave={() => setHoveredSide(null)}
          >
            <h1 
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase transition-colors duration-300 cursor-pointer"
              style={{ color: getTextColor() }}
            >
              Estratégia
            </h1>
          </motion.div>

          {/* Asterisk - Center Absolute or relative depending on layout */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none md:pointer-events-auto"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              style={{ color: getTextColor() }}
              className="opacity-50 md:opacity-100"
            >
              <Asterisk size={120} strokeWidth={2} className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40" />
            </motion.div>
          </motion.div>

          {/* Creativity Word - Bottom Right */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="self-end relative z-10"
            onMouseEnter={() => setHoveredSide('creativity')}
            onMouseLeave={() => setHoveredSide(null)}
          >
            <h1 
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase transition-colors duration-300 cursor-pointer text-right"
              style={{ color: getTextColor() }}
            >
              Criatividade
            </h1>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 md:mt-24"
        >
          <button 
            className="group relative px-8 py-4 rounded-full border-2 border-[#F2F2F2] overflow-hidden transition-all duration-300 hover:border-[#CCFF00]"
          >
            <div className="absolute inset-0 w-full h-full bg-[#CCFF00] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <span className="relative flex items-center gap-2 font-bold text-lg text-[#F2F2F2] group-hover:text-[#050505] transition-colors duration-300">
              Vamos construir autoridade <ArrowRight size={20} />
            </span>
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
