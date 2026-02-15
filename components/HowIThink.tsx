
import React, { useState } from 'react';

const HowIThink: React.FC = () => {
  const [openSkill, setOpenSkill] = useState<string | null>("Finance");

  const skills = [
    { category: "Finance", items: ["Valuation Modeling", "Fundamental and Technical Analysis"] },
    { category: "Programming Languages", items: ["C", "C++", "Python", "Java"] },
    { category: "Database Systems", items: ["MySQL"] },
    { category: "Tools", items: ["Bloomberg", "Kaggle", "Excel", "PowerBI"] }
  ];

  return (
    <section id="how-i-think" className="px-6 md:px-16 py-32 bg-black overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 blur-[120px] -z-10 animate-pulse" />
      
      <div className="max-w-7xl mx-auto">
        {/* Scholarships Section */}
        <div className="mb-24">
          <h3 className="text-sm font-black text-white/40 uppercase tracking-[0.3em] mb-8 text-left">Scholarships</h3>
          <div className="p-8 border border-white/10 bg-gradient-to-r from-white/5 to-transparent rounded-sm group hover:bg-white/10 transition-all max-w-4xl">
             <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="text-5xl animate-bounce filter grayscale group-hover:grayscale-0 transition-all">🎓</div>
                <div>
                  <h4 className="text-white font-bold text-2xl mb-3">BITS Merit Scholarship</h4>
                  <p className="text-xl text-white/60 leading-relaxed text-left font-light">
                    Ranked among the <span className="text-white font-bold">top 2 percentile</span> of a batch of 1,000 students.
                  </p>
                </div>
             </div>
          </div>
        </div>

        {/* Heading Section */}
        <div className="mb-20">
          <span className="text-[#E50914] text-xs font-black uppercase tracking-[0.4em] mb-4 block">Core Competencies</span>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-white text-left">Skills & <span className="opacity-30 italic text-left">Technical Stack</span></h2>
          <p className="text-xl text-white/40 max-w-2xl leading-relaxed text-left">
            The technical engine driving every project. Explore my multidisciplinary toolkit.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {/* Interactive Skills Accordion */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 col-span-1">
               <h3 className="text-sm font-black text-white/40 uppercase tracking-[0.3em] mb-4 text-left">Technical Skills</h3>
               {skills.map((skill) => (
                <div 
                  key={skill.category} 
                  className={`border border-white/10 rounded-sm transition-all overflow-hidden ${openSkill === skill.category ? 'bg-white/10 ring-1 ring-[#E50914]/50' : 'bg-white/5 hover:bg-white/[0.07]'}`}
                >
                  <button 
                    onClick={() => setOpenSkill(openSkill === skill.category ? null : skill.category)}
                    className="w-full px-8 py-6 flex items-center justify-between group"
                  >
                    <h4 className={`text-[11px] font-black uppercase tracking-[0.3em] transition-colors ${openSkill === skill.category ? 'text-[#E50914]' : 'text-white/60 group-hover:text-white'}`}>
                      {skill.category}
                    </h4>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 text-white/30 transition-transform duration-500 ${openSkill === skill.category ? 'rotate-180 text-[#E50914]' : ''}`} 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div className={`transition-all duration-500 ease-in-out ${openSkill === skill.category ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-8 pb-8">
                      <ul className="space-y-3">
                        {skill.items.map(item => (
                          <li key={item} className="text-white/80 font-bold text-lg flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIThink;
