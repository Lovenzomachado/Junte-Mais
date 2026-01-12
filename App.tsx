
import React from 'react';
import { GrainOverlay } from './components/landing/GrainOverlay';
import { Hero } from './components/landing/Hero';
import { Marquee } from './components/landing/Marquee';
import { ProblemSection } from './components/landing/ProblemSection';
import { MethodologySection } from './components/landing/MethodologySection';
import { AuthoritySection } from './components/landing/AuthoritySection';
import { SocialProofSection } from './components/landing/SocialProofSection';
import { Footer } from './components/landing/Footer';

export default function App() {
  return (
    <div className="font-sans bg-[#050505] min-h-screen text-[#F2F2F2] selection:bg-[#CCFF00] selection:text-black">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Inter+Tight:wght@400;500;700;800&display=swap');
        
        body {
          font-family: 'Inter Tight', sans-serif;
        }
        
        .font-handwritten {
          font-family: 'Caveat', cursive;
        }

        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      <GrainOverlay />
      
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <ProblemSection />
        <MethodologySection />
        <AuthoritySection />
        <SocialProofSection />
        <Footer />
      </main>
    </div>
  );
}
