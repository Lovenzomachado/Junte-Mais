
import React from 'react';
import { motion } from 'motion/react';
import cinemaImg from "figma:asset/6ba374102ea2ec20e2ac652aad7d6105a1810f5b.png";

export function ProblemSection() {
  return (
    <section className="bg-[#050505] text-[#F2F2F2] py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm md:text-base text-[#CCFF00] font-bold uppercase tracking-widest mb-4 border border-[#CCFF00] inline-block px-3 py-1 rounded-full">
                O Problema (Anti-Trend)
              </h2>
              <h3 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                O digital virou um <span className="text-[#E0C3FC]">palco de trends</span>.
              </h3>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
                Todo mundo fazendo o mesmo reels. A mesma música. A mesma dancinha. A gente decidiu mudar isso. Sua marca merece mais que apenas seguir o fluxo.
              </p>

              <div className="relative inline-block">
                <svg width="60" height="60" viewBox="0 0 100 100" className="absolute -top-8 -right-8 text-[#F2F2F2] rotate-12">
                  <path d="M10,80 Q50,20 80,50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M80,50 L70,45 L75,60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <p className="font-handwritten text-3xl md:text-4xl text-[#E0C3FC] rotate-[-2deg]">
                  Sua marca não é plateia, <br/>é <span className="text-[#CCFF00] font-bold bg-black px-1">protagonista</span>.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Image Content - "Normal Section" style */}
          <div className="w-full md:w-1/2 relative">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative z-10 rounded-2xl overflow-hidden border border-[#333]"
            >
              <img src={cinemaImg} alt="Cinema Chairs" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              
              {/* Overlay Gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#CCFF00] rounded-full blur-[40px] opacity-20" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#E0C3FC] rounded-full blur-[50px] opacity-20" />
          </div>

        </div>
      </div>
    </section>
  );
}
