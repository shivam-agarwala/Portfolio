
import React, { useState, useRef, useEffect } from 'react';

interface HeroProps {
  onMoreInfo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onMoreInfo }) => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const nameRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const scrollToSeasons = () => {
    const element = document.getElementById('seasons');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nameFirst = "SHIVAM";
  const nameLast = "AGARWALA";

  const Letter: React.FC<{ char: string; index: number; total: number }> = ({ char, index, total }) => {
    const letterRef = useRef<HTMLSpanElement>(null);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
      const handleGlobalMove = (e: MouseEvent) => {
        if (!letterRef.current) return;
        const rect = letterRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dist = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));
        
        const maxDist = 120;
        if (dist < maxDist) {
          const darkFactor = dist / maxDist;
          setOpacity(Math.max(0.1, darkFactor));
        } else {
          setOpacity(1);
        }
      };

      window.addEventListener('mousemove', handleGlobalMove);
      return () => window.removeEventListener('mousemove', handleGlobalMove);
    }, []);

    const baseBrightness = 100 - (index / total) * 60;
    
    return (
      <span 
        ref={letterRef}
        className="inline-block transition-colors duration-200"
        style={{ 
          color: `rgba(${baseBrightness * 2.55}, ${baseBrightness * 2.55}, ${baseBrightness * 2.55}, ${opacity})`,
          filter: `brightness(${opacity})`
        }}
      >
        {char}
      </span>
    );
  };

  return (
    <div id="home" className="relative h-[90vh] md:h-[100vh] w-full flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0c0d10] z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d10] via-[#0c0d10]/70 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-transparent to-transparent z-10" />
      
      <div className="absolute -right-1/4 -top-1/4 w-[80%] h-[80%] rounded-full bg-red-600/5 blur-[120px] z-0 animate-pulse" />
      <div className="absolute left-1/4 bottom-0 w-[50%] h-[50%] rounded-full bg-blue-600/5 blur-[120px] z-0" />

      <div className="relative z-20 px-6 md:px-16 max-w-5xl mt-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center">
            <span className="text-[#E50914] font-black text-3xl mr-2 tracking-tighter">N</span>
            <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em]">Series</span>
          </div>
        </div>

        <div 
          ref={nameRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePos({ x: -1000, y: -1000 })}
          className="relative cursor-default select-none mb-8"
        >
          <h1 className="text-7xl md:text-[110px] font-black leading-[0.85] tracking-tighter">
            <div className="flex flex-wrap">
              {nameFirst.split('').map((c, i) => (
                <Letter key={`f-${i}`} char={c} index={i} total={nameFirst.length + nameLast.length} />
              ))}
            </div>
            <div className="flex flex-wrap">
              {nameLast.split('').map((c, i) => (
                <Letter key={`l-${i}`} char={c} index={i + nameFirst.length} total={nameFirst.length + nameLast.length} />
              ))}
            </div>
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="text-xl md:text-2xl font-bold text-[#E50914] tracking-tight uppercase">Consulting • Finance • Engineering</span>
        </div>

        <div className="text-lg md:text-xl text-white/50 max-w-3xl leading-relaxed mb-10 font-light">
          <p className="flex items-center gap-2 mb-1">
            <span className="text-white font-semibold">Upcoming Summer Associate @ BCG</span>
          </p>
          <p className="flex items-center gap-2 mb-6">
            M.Sc. Economics & B.E. Computer Science @ <span className="text-white font-semibold">BITS Pilani, 2027</span>
          </p>
          <p className="text-white/90 font-medium mb-1">
            Student Senator in BITS Pilani Senate, A Minor in Finance
          </p>
          <p className="text-white/40 italic">
            blending leadership, finance, and technology with curiosity
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-16">
          <button 
            onClick={scrollToSeasons}
            className="flex items-center gap-3 bg-white text-black px-10 py-3 rounded-md font-bold text-lg hover:bg-white/90 transition-all transform active:scale-95 shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play My Story
          </button>
          <button 
            onClick={onMoreInfo}
            className="flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-10 py-3 rounded-md font-bold text-lg hover:bg-white/20 border border-white/10 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            More Info
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm font-semibold tracking-tight">
           <span className="text-[#46d369] font-bold">98% Match</span>
           <span className="text-white/80">BITS Pilani</span>
           <span className="text-[#D4AF37] font-bold">CGPA 9.08</span>
           <span className="text-white/60">2004</span>
           <span className="border border-white/40 px-1.5 py-0.5 rounded-[2px] text-[10px] text-white/80 font-bold tracking-widest leading-none uppercase">Top Rated</span>
           <span className="text-white/60">5 Seasons</span>
           <div className="flex items-center gap-1.5">
             <span className="bg-white/5 border border-white/10 px-1 py-0.5 rounded-[2px] text-[8px] font-black tracking-widest uppercase">4K</span>
             <span className="bg-white/5 border border-white/10 px-1 py-0.5 rounded-[2px] text-[8px] font-black tracking-widest uppercase">HDR</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
