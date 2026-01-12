
import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Star } from 'lucide-react'; // Using Star as a sun/sparkle substitute

export function SocialProofSection() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const sunY = useTransform(scrollYProgress, [0, 0.6], ["100%", "-20%"]);
  const sunOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <section ref={ref} className="relative min-h-screen bg-[#111] overflow-hidden flex flex-col justify-center items-center">
      
      {/* Sun/Asterisk Rising */}
      <motion.div 
        style={{ y: sunY, opacity: sunOpacity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0"
      >
        <div className="w-[40vw] h-[40vw] bg-[#E0C3FC] rounded-full blur-[20px] md:blur-[60px]" />
      </motion.div>

      {/* Mountain Foreground (Simulated with SVG/Path) */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] md:h-[60vh] z-10 pointer-events-none">
         <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 600">
           <path 
             d="M0,600 L0,200 C200,300 400,100 720,250 C1000,400 1200,150 1440,300 L1440,600 Z" 
             fill="#050505" 
           />
           {/* Add grain texture overlay to the mountain via CSS or pattern if needed, 
               but global grain handles most of it. */}
         </svg>
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center mt-[-10vh]">
        <h2 className="text-6xl md:text-8xl font-bold text-[#F2F2F2] mb-12">
          Marca forte <br />
          <span className="italic font-serif text-[#E0C3FC]">pensa junto</span>.
        </h2>

        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale mb-24">
           {['Spotify', 'Netflix', 'Nike', 'Vogue'].map(brand => (
             <span key={brand} className="text-2xl md:text-3xl font-bold text-white">{brand}</span>
           ))}
        </div>

        {/* Floating Testimonial */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#1a1a1a] p-6 rounded-2xl max-w-md mx-auto border border-[#333] text-left"
        >
          <p className="text-[#ccc] text-lg mb-4">"A Junta mudou nossa percepção de valor. Não foi só design, foi posicionamento de mercado."</p>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-gray-600 rounded-full" />
             <div>
               <p className="text-white font-bold text-sm">Ana Silva</p>
               <p className="text-gray-400 text-xs">CMO @ TechStart</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
