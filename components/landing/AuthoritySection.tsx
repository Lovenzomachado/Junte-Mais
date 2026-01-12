
import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const consultingImg = "https://images.unsplash.com/photo-1634326080825-985cfc816db6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFuZCUyMHdoaXRlJTIwYnVzaW5lc3MlMjBtZWV0aW5nJTIwY29uc3VsdGluZ3xlbnwxfHx8fDE3NjgyNDc5NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function AuthoritySection() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setCursorVisible(true)}
      onMouseLeave={() => setCursorVisible(false)}
      className="bg-[#050505] text-[#F2F2F2] py-32 relative cursor-none"
    >
      {/* Custom Cursor */}
      <motion.div
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          opacity: cursorVisible && cursorText ? 1 : 0,
          scale: cursorVisible && cursorText ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        className="pointer-events-none absolute top-0 left-0 z-50 bg-[#050505] text-[#F2F2F2] border border-[#F2F2F2] px-4 py-2 rounded-xl rounded-bl-none whitespace-nowrap text-sm font-bold uppercase tracking-wider"
        style={{ translateX: '10px', translateY: '-100%' }}
      >
        {cursorText}
      </motion.div>

      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center">O que fazemos</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          
          {/* Box 1: Branding */}
          <div 
            onMouseEnter={() => setCursorText("Identidade Real")}
            onMouseLeave={() => setCursorText("")}
            className="group relative bg-[#E0C3FC] rounded-3xl p-8 text-[#050505] flex flex-col justify-between overflow-hidden transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight size={32} />
            </div>
            <h3 className="text-4xl font-bold">Branding</h3>
            <p className="text-xl font-medium max-w-xs">
              Criamos marcas que não precisam gritar para serem ouvidas.
            </p>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#CCFF00] rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity" />
          </div>

          {/* Box 2: Social Media */}
          <div 
            onMouseEnter={() => setCursorText("Sem preencher feed")}
            onMouseLeave={() => setCursorText("")}
            className="group relative border border-[#333] rounded-3xl p-8 flex flex-col justify-between hover:border-[#F2F2F2] transition-colors duration-300 bg-[#0a0a0a]"
          >
             <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#F2F2F2]">
              <ArrowUpRight size={32} />
            </div>
            <h3 className="text-4xl font-bold text-transparent stroke-text hover:text-[#CCFF00] transition-colors duration-300" style={{ WebkitTextStroke: '1px #F2F2F2' }}>
              Social Media
            </h3>
            <p className="text-xl text-[#888] group-hover:text-[#F2F2F2] transition-colors">
              Estratégia de conteúdo que gera conversa, não apenas likes.
            </p>
          </div>

          {/* Box 3: Consultoria */}
          <div 
            onMouseEnter={() => setCursorText("Direção Estratégica")}
            onMouseLeave={() => setCursorText("")}
            className="group relative rounded-3xl overflow-hidden"
          >
            <img src={consultingImg} alt="Consulting" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
               <div className="self-end opacity-0 group-hover:opacity-100 transition-opacity">
                 <ArrowUpRight size={32} />
               </div>
               <div>
                  <h3 className="text-4xl font-bold mb-2">Consultoria</h3>
                  <p className="text-lg text-[#ddd]">
                    Mentoria para times in-house e diretores criativos.
                  </p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
