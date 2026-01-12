
import React from 'react';
import { motion } from 'motion/react';

export function Marquee() {
  return (
    <div className="bg-[#E0C3FC] py-4 overflow-hidden border-y border-black">
      <motion.div 
        className="flex whitespace-nowrap text-2xl md:text-4xl font-bold uppercase tracking-wider text-[#050505]"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <span className="mr-12">Estratégia • Conexões • Sucesso • Junta+</span>
        <span className="mr-12">Estratégia • Conexões • Sucesso • Junta+</span>
        <span className="mr-12">Estratégia • Conexões • Sucesso • Junta+</span>
        <span className="mr-12">Estratégia • Conexões • Sucesso • Junta+</span>
        <span className="mr-12">Estratégia • Conexões • Sucesso • Junta+</span>
        <span className="mr-12">Estratégia • Conexões • Sucesso • Junta+</span>
      </motion.div>
    </div>
  );
}
