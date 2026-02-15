
import React from 'react';
import { Project, Category } from '../types';

interface NetflixRowProps {
  title: string;
  subtitle?: string;
  items: Project[];
  onItemClick?: (project: Project) => void;
}

const NetflixRow: React.FC<NetflixRowProps> = ({ title, subtitle, items, onItemClick }) => {
  const getFallbackIcon = (item: Project) => {
    if (item.id.includes('ta-')) return '👨‍🏫';
    if (item.id.includes('chess')) return '♟️';
    if (item.id.includes('debate') || item.id.includes('hindi')) return '🎙️';
    if (item.id.includes('volunteering') || item.id.includes('mentor')) return '🤝';
    if (item.id.includes('hackenza')) return '💻';
    if (item.id.includes('ryan')) return '🤴';
    if (item.id.includes('library')) return '📚';
    if (item.id.includes('bitsmun')) return '👔';
    if (item.id.includes('culture')) return '🎭';
    
    switch (item.category) {
      case Category.CAREER: return '💼';
      case Category.LEADERSHIP: return '🎓';
      case Category.FINANCE: return '📊';
      case Category.CREATIVE: return '🖋️';
      case Category.EXTRACURRICULAR: return '✨';
      default: return '🎬';
    }
  };

  return (
    <section className="px-6 md:px-16 py-4">
      <div className="flex flex-col mb-4">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white/90">{title}</h2>
        {subtitle && <p className="text-xs text-white/40 mt-1">{subtitle}</p>}
      </div>
      
      <div className="flex gap-2.5 overflow-x-auto pb-6 no-scrollbar snap-x">
        {items.map((item) => (
          <div 
            key={item.id} 
            onClick={() => onItemClick?.(item)}
            className="flex-shrink-0 w-[240px] md:w-[320px] group cursor-pointer transition-all duration-300 snap-start"
          >
            <div className="relative aspect-[16/9] bg-[#1a1c23] rounded-[4px] overflow-hidden border border-white/5 transition-all group-hover:shadow-[0_0_20px_rgba(0,0,0,0.8)] group-hover:scale-105 group-hover:z-10 group-hover:ring-1 group-hover:ring-white/20">
              {/* Badge */}
              <div className="absolute top-2 left-2 z-10 flex items-center">
                 <div className="bg-[#E50914] text-white px-1.5 py-0.5 rounded-[2px] text-[8px] font-black uppercase tracking-widest shadow-lg">
                   {item.category === Category.CAREER ? 'Top Choice' : 'Series'}
                 </div>
              </div>

              {/* Symbol/Image Overlay */}
              <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1c23] to-[#0c0d10] ${item.displayMode === 'cover' ? 'p-0' : 'p-6'}`}>
                {item.imageUrl ? (
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className={`max-w-full max-h-full ${item.displayMode === 'cover' ? 'w-full h-full object-cover' : 'object-contain'} filter brightness-90 group-hover:brightness-100 transition-all duration-500 transform group-hover:scale-110`}
                  />
                ) : (
                  <span className="text-4xl opacity-20 filter grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125">
                   {getFallbackIcon(item)}
                  </span>
                )}
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
            
            <div className="mt-3 px-1 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex items-center gap-2 mb-1">
                 <span className="text-[#46d369] text-[10px] font-bold">{item.matchScore}% Match</span>
                 <span className="text-white/40 text-[10px] border border-white/20 px-1 rounded-[1px]">HD</span>
              </div>
              <h3 className="font-bold text-sm text-white/90 truncate uppercase tracking-tight">{item.title}</h3>
              <div className="flex flex-wrap gap-1 mt-1.5">
                {item.tags.slice(0, 3).map(tag => (
                   <span key={tag} className="text-[9px] text-white/40 font-medium tracking-tight">• {tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Added missing default export
export default NetflixRow;
