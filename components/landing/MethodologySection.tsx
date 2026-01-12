
import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const teamImg = "https://images.unsplash.com/photo-1622676614630-a9109126264a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwY2FuZGlkJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2ODI0Nzk3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function MethodologySection() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const xMove = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const expandWidth = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section ref={ref} className="bg-[#F2F2F2] text-[#050505] min-h-[150vh] relative overflow-hidden py-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-24">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
            Pra nós, é <br />
            <span className="relative inline-block">
              parceria
              <motion.span 
                style={{ width: expandWidth }}
                className="absolute bottom-0 left-0 h-4 bg-[#CCFF00] -z-10"
              />
            </span> <br />
            de verdade.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sticky Green Box */}
          <div className="md:w-1/3">
            <div className="sticky top-24 p-8 bg-[#CCFF00] rounded-[2rem] border-2 border-black rotate-2 hover:rotate-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 uppercase">Como trabalhamos</h3>
              <ul className="space-y-4 font-medium text-lg">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full" /> Imersão Total
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full" /> Co-criação
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full" /> Transparência
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full" /> Dados + Feeling
                </li>
              </ul>
            </div>
          </div>

          {/* Sliding Photos */}
          <div className="md:w-2/3 overflow-visible">
            <motion.div style={{ x: xMove }} className="flex gap-8 w-[150%]">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <img src={teamImg} alt="Team" className="w-full h-full object-cover" />
              </div>
              <div className="w-full aspect-[4/3] bg-black text-[#F2F2F2] p-8 rounded-2xl flex items-center justify-center">
                <p className="text-4xl font-bold text-center">"Não somos agência.<br/>Somos extensão."</p>
              </div>
            </motion.div>
            
            <div className="mt-12 max-w-xl text-xl leading-relaxed">
              <p>
                Acreditamos que as melhores ideias nascem da troca. Não entregamos apenas um PDF bonito; construímos sistemas visuais e estratégias que respiram a cultura da sua empresa. O processo é a quatro mãos, do briefing ao lançamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
