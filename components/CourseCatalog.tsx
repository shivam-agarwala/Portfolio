
import React, { useState } from 'react';
import { COURSES } from '../constants';

const CourseCatalog: React.FC = () => {
  const categories = Object.keys(COURSES) as (keyof typeof COURSES)[];
  const [openCategory, setOpenCategory] = useState<keyof typeof COURSES | null>("Computer Science");

  return (
    <section id="course-catalog" className="px-6 md:px-16 py-24 bg-[#0c0d10] text-left">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-[#E50914] text-xs font-black uppercase tracking-[0.5em] mb-4 block">Academic Repertoire</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Relevant <span className="opacity-30 italic">Courses</span></h2>
          <p className="text-white/40 text-lg leading-relaxed max-w-2xl">
            A comprehensive curriculum across Economics, Computer Science, and Finance. Select a field to see my academic path. Grades appear on hover.
          </p>
        </div>

        {/* Vertical Dropdown / Accordion for Courses */}
        <div className="space-y-4">
          {categories.map((cat) => (
            <div 
              key={cat} 
              className={`border border-white/10 rounded-sm transition-all duration-500 ${openCategory === cat ? 'bg-white/5 border-white/20' : 'bg-transparent'}`}
            >
              <button 
                onClick={() => setOpenCategory(openCategory === cat ? null : cat)}
                className="w-full px-8 py-8 flex items-center justify-between group"
              >
                <div className="flex flex-col items-start">
                  <h3 className={`text-2xl md:text-4xl font-black transition-colors ${openCategory === cat ? 'text-white' : 'text-white/20 group-hover:text-white/50'}`}>
                    {cat}
                  </h3>
                  <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] mt-2">
                    {COURSES[cat].length} Episodes
                  </span>
                </div>
                <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all ${openCategory === cat ? 'bg-[#E50914] border-[#E50914]' : 'group-hover:bg-white/10'}`}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 text-white transition-transform duration-500 ${openCategory === cat ? 'rotate-180' : ''}`} 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div className={`transition-all duration-700 ease-in-out overflow-hidden ${openCategory === cat ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-12 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {COURSES[cat].map((course, idx) => (
                      <div 
                        key={course.name}
                        style={{ transitionDelay: `${idx * 30}ms` }}
                        className="bg-white/5 border border-white/5 p-6 rounded-sm hover:bg-white/10 transition-all group/item relative overflow-hidden"
                      >
                        <div className="flex flex-col h-full justify-between">
                          <h4 className="text-white/80 font-bold text-base leading-snug group-hover/item:text-white transition-colors mb-8">
                            {course.name}
                          </h4>
                          <div className="flex items-center justify-between">
                            <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-[2px] transition-all duration-300 opacity-0 group-hover/item:opacity-100 ${course.grade === 'Ongoing' ? 'bg-blue-600/20 text-blue-400' : 'bg-[#E50914]/10 text-[#E50914]'}`}>
                              Grade: {course.grade}
                            </span>
                            <div className="w-1 h-1 rounded-full bg-white/10 group-hover/item:bg-[#E50914] transition-colors" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCatalog;
