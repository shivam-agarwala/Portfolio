import React, { useState } from 'react';
import { RESUME_LINKS } from '../constants';

const Footer: React.FC = () => {
  const [showResumes, setShowResumes] = useState(false);

  const resumeOptions = [
    { title: "Technical", url: RESUME_LINKS.Technical },
    { title: "Product", url: RESUME_LINKS.Product },
    { title: "Finance", url: RESUME_LINKS.Finance }
  ];

  const handleResumeClick = (url: string) => {
    window.open(url, '_blank');
    setShowResumes(false);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const profileImageUrl = "https://i.ibb.co/hxscwyKc/Passport-Size-Photo.jpg";

  return (
    <footer className="bg-[#0c0d10] border-t border-white/5 px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div 
              onClick={() => {
                const element = document.getElementById('home');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-4xl font-black text-[#E50914] tracking-tighter mb-6 uppercase cursor-pointer hover:scale-105 transition-transform origin-left inline-block"
            >
              SHIVAM
            </div>
            <p className="text-white/60 mb-8 max-w-sm">
              Building a career at the intersection of business and technology.
            </p>
            
            <div className="space-y-4">
              <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">Social Media</span>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/shivam-agarwala" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E50914] hover:border-[#E50914] transition-all group"
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://github.com/shivam-agarwala" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E50914] hover:border-[#E50914] transition-all"
                  title="GitHub"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>

                <a 
                  href="https://www.instagram.com/shivam__agarwal/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E50914] hover:border-[#E50914] transition-all"
                  title="Instagram"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:col-span-2">
            <div className="flex-1">
              <h4 className="text-lg font-bold mb-6">Navigate</h4>
              <nav className="flex flex-col gap-4 text-white/50 font-medium">
                 <a 
                   href="#home" 
                   onClick={(e) => scrollToSection(e, '#home')}
                   className="hover:text-white transition-colors"
                 >
                   Home
                 </a>
                 <a 
                   href="#seasons" 
                   onClick={(e) => scrollToSection(e, '#seasons')}
                   className="hover:text-white transition-colors"
                 >
                   Seasons
                 </a>
                 <a 
                   href="#projects" 
                   onClick={(e) => scrollToSection(e, '#projects')}
                   className="hover:text-white transition-colors"
                 >
                   Projects
                 </a>
                 <a 
                   href="#how-i-think" 
                   onClick={(e) => scrollToSection(e, '#how-i-think')}
                   className="hover:text-white transition-colors"
                 >
                   Skills
                 </a>
                 <a 
                   href="#about" 
                   onClick={(e) => scrollToSection(e, '#about')}
                   className="hover:text-white transition-colors"
                 >
                   About
                 </a>
              </nav>
            </div>

            <div className="flex-1">
              <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#E50914]/10 transition-colors">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/40 group-hover:text-[#E50914]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                     </svg>
                  </div>
                  <div>
                    <div className="text-xs text-white/30 font-bold uppercase tracking-widest">Email</div>
                    <div className="text-sm font-medium">f20220110@goa.bits-pilani.ac.in</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <button 
                  onClick={() => setShowResumes(!showResumes)}
                  className="w-full bg-[#E50914] text-white py-4 rounded-lg font-black text-lg flex items-center justify-center gap-3 hover:bg-red-700 transition-all transform hover:scale-105 shadow-xl"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                   </svg>
                   Go to Resume
                </button>

                {showResumes && (
                  <div className="absolute bottom-full left-0 mb-2 w-full bg-[#181818] rounded-lg shadow-2xl z-50 overflow-hidden border border-white/10">
                     {resumeOptions.map((opt, idx) => (
                       <button 
                         key={idx}
                         className="w-full text-left px-6 py-4 hover:bg-white/5 border-b border-white/5 last:border-0 transition-colors flex items-center gap-4"
                         onClick={() => handleResumeClick(opt.url)}
                       >
                          <span className="text-sm font-bold text-white">{opt.title} Perspective</span>
                       </button>
                     ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#E50914] mb-6 shadow-[0_0_20px_rgba(229,9,20,0.3)] group cursor-pointer">
                <img 
                  src={profileImageUrl} 
                  alt="Shivam Profile"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div className="text-center">
                <p className="text-white font-black text-xl italic tracking-tight mb-2">"You have only one currency: Performance"</p>
                <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Virat Kohli</p>
            </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 text-center text-[10px] font-bold text-white/20 uppercase tracking-[0.4em]">
           &copy; 2004 - PRESENT Shivam Agarwala Original Series. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;