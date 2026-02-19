import React, { useState } from 'react';
import { SEASONS } from '../constants.tsx';
import { Episode } from '../types';

const SeasonDetail: React.FC = () => {
  // Set default to index 1 (Season 2: The BITSian Journey)
  const [activeSeasonIndex, setActiveSeasonIndex] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  
  const currentSeason = SEASONS[activeSeasonIndex];

  return (
    <section id="seasons" className="px-6 md:px-16 py-24 bg-[#0c0d10] text-left">
      {selectedEpisode && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setSelectedEpisode(null)}>
          <div className="relative w-full max-w-2xl bg-[#181818] rounded-xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedEpisode(null)} className="absolute top-4 right-4 z-50 text-white/50 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-12 text-center bg-gradient-to-br from-red-600/20 to-transparent">
              <span className="text-[10px] font-black text-[#E50914] uppercase tracking-[0.5em] mb-2 block">Episode Detail</span>
              <h2 className="text-4xl font-black text-white tracking-tighter uppercase">{selectedEpisode.title}</h2>
              <div className="text-white/40 text-xs font-bold mt-2 tracking-widest uppercase">{selectedEpisode.subtitle}</div>
            </div>
            <div className="p-8">
              <p className="text-white/80 leading-relaxed text-lg font-light text-justify">
                {selectedEpisode.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <span className="text-[#E50914] text-xs font-black uppercase tracking-[0.5em] mb-4 block">The Chronicle</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Experience <span className="opacity-30 italic">History</span></h2>
            <p className="text-white/40 text-lg leading-relaxed">
              Every stage of my journey has been a distinct chapter. Select a season to explore the episodes of my professional growth.
            </p>
          </div>
          
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-4 rounded-sm flex items-center justify-between gap-12 min-w-[320px] transition-all"
            >
              <div className="text-left">
                <div className="text-[10px] font-black text-[#E50914] uppercase tracking-widest mb-1">Select Season</div>
                <div className="text-base font-bold text-white/90">Season {currentSeason.id}: {currentSeason.title}</div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-500 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-full bg-[#141414] rounded-sm shadow-2xl z-40 border border-white/10 overflow-hidden backdrop-blur-xl">
                {SEASONS.map((season, idx) => (
                  <button
                    key={season.id}
                    onClick={() => {
                      setActiveSeasonIndex(idx);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-6 py-5 hover:bg-white/5 flex items-center justify-between border-b border-white/5 ${idx === activeSeasonIndex ? 'bg-white/5 border-l-2 border-[#E50914]' : ''}`}
                  >
                    <div>
                      <div className="text-xs font-black text-white/80">Season {season.id}</div>
                      <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">{season.years}</div>
                    </div>
                    {idx === activeSeasonIndex && <div className="w-1.5 h-1.5 rounded-full bg-[#E50914] shadow-[0_0_10px_#E50914]" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Season Episodes List - Netflix Style */}
        <div className="grid gap-1 border-t border-white/5 pt-8">
          {currentSeason.episodes.map((ep, idx) => (
            <div 
              key={ep.id}
              onClick={() => setSelectedEpisode(ep)}
              className="group grid grid-cols-[auto_1fr] md:grid-cols-[100px_320px_1fr] items-center gap-8 p-6 hover:bg-white/[0.03] transition-all border-b border-white/5 rounded-sm cursor-pointer"
            >
              {/* Episode Number */}
              <div className="hidden md:flex justify-center text-3xl font-black text-white/10 group-hover:text-white/30 transition-colors">
                {ep.id}
              </div>
              
              {/* Thumbnail Frame */}
              <div className="relative aspect-video bg-[#1a1c23] rounded-sm overflow-hidden flex items-center justify-center p-4">
                 {ep.imageUrl ? (
                   <img src={ep.imageUrl} alt={ep.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                 ) : (
                   <>
                     <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white/20 group-hover:text-white/60 transition-all transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                     </svg>
                   </>
                 )}
              </div>

              {/* Info */}
              <div className="text-left">
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <h4 className="text-xl font-bold text-white/90 group-hover:text-white transition-colors">{ep.title}</h4>
                  <span className="text-[10px] font-black uppercase tracking-widest bg-white/5 border border-white/10 px-1.5 py-0.5 rounded-sm text-white/60">
                    {ep.duration || ep.date}
                  </span>
                </div>
                <p className="text-sm text-white/40 leading-relaxed max-w-2xl line-clamp-2 md:line-clamp-none">
                  {ep.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonDetail;