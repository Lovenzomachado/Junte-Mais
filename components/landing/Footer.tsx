
import React from 'react';
import { motion } from 'motion/react';
import { Asterisk, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#CCFF00] text-[#050505] min-h-screen flex flex-col justify-between p-8 md:p-12 relative overflow-hidden">
      
      <div className="flex-grow flex flex-col justify-center items-center text-center">
        <h2 className="text-[20vw] leading-none font-bold tracking-tighter mb-8">JUNTA?</h2>
        <p className="text-xl md:text-3xl font-medium max-w-2xl mb-12">
          Cada marca é um projeto vivo. <br/> Vamos dar vida à sua?
        </p>

        <form className="w-full max-w-xl flex flex-col gap-8">
           <div className="relative">
             <input 
               type="email" 
               placeholder="Seu email corporativo" 
               className="w-full bg-transparent border-b-2 border-[#050505] py-4 text-2xl placeholder:text-[#050505]/50 focus:outline-none focus:border-[#050505]"
             />
           </div>
           <button className="self-end flex items-center gap-2 text-2xl font-bold hover:gap-4 transition-all">
             ENVIAR <ArrowRight />
           </button>
        </form>
      </div>

      <div className="flex justify-between items-end border-t border-[#050505]/20 pt-8 mt-12">
        <div className="flex flex-col gap-2 font-medium">
           <a href="#" className="hover:underline">Instagram</a>
           <a href="#" className="hover:underline">LinkedIn</a>
           <a href="#" className="hover:underline">Behance</a>
        </div>

        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <Asterisk size={64} />
        </motion.div>
      </div>
    </footer>
  );
}
