import React, { useEffect, useState } from 'react';
import { RESUME_LINKS } from '../constants';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
  const [showResumes, setShowResumes] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const resumeOptions = [
    { title: "Technical", url: RESUME_LINKS.Technical, desc: "Engineering & Computer Science focus" },
    { title: "Consulting", url: RESUME_LINKS.Consulting, desc: "Strategy & Management focus" },
    { title: "Finance", url: RESUME_LINKS.Finance, desc: "Valuation & Markets focused" }
  ];

  const handleResumeClick = (url: string) => {
    window.open(url, '_blank');
    setShowResumes(false);
  };

  const profileImageUrl = "https://i.ibb.co/hxscwyKc/Passport-Size-Photo.jpg";
  const BCG_LOGO = "https://i.ibb.co/N0wj409/Bcg-logo-PNG1.png";
  const BITS_LOGO = "https://i.ibb.co/jPy20Q6H/Screenshot-2026-01-21-at-2-46-40-AM.png";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-4xl bg-[#181818] rounded-xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 origin-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-[#181818] text-white flex items-center justify-center hover:bg-white/10 transition-colors shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative h-64 md:h-96 w-full">
           <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent z-10" />
           <img 
              src={profileImageUrl} 
              alt="Shivam Professional Profile"
              className="absolute inset-0 w-full h-full object-cover object-[center_30%] opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
           />
           <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent z-0" />
           <div className="absolute bottom-12 left-8 md:left-12 z-20 text-left">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 uppercase">SHIVAM AGARWALA</h2>
              <div className="relative">
                 <button 
                  onClick={() => setShowResumes(!showResumes)}
                  className="bg-white text-black px-8 py-3 rounded-sm font-bold flex items-center gap-3 hover:bg-white/90 transition-all transform active:scale-95 shadow-xl"
                 >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    Go to Resume
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${showResumes ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                 </button>

                 {showResumes && (
                   <div className="absolute top-full left-0 mt-2 w-72 bg-[#2f2f2f] rounded shadow-2xl z-50 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                     {resumeOptions.map((opt, idx) => (
                       <button 
                        key={idx}
                        className="w-full text-left px-5 py-4 hover:bg-white/10 border-b border-white/5 last:border-0 transition-colors"
                        onClick={() => handleResumeClick(opt.url)}
                       >
                         <div>
                            <div className="text-sm font-bold text-white">{opt.title} Perspective</div>
                            <div className="text-[10px] text-white/40 uppercase tracking-tighter">{opt.desc}</div>
                         </div>
                       </button>
                     ))}
                   </div>
                 )}
              </div>
           </div>
        </div>

        <div className="px-8 md:px-12 py-10 grid md:grid-cols-[1fr_250px] gap-12 text-left">
           <div>
              <div className="flex items-center gap-4 mb-6 text-sm">
                 <span className="text-[#46d369] font-bold">98% Match</span>
                 <span className="text-white/60">2004</span>
                 <span className="border border-white/40 px-1 rounded-[2px] text-[10px] font-black uppercase">Ultra HD</span>
              </div>
              
              <div className="space-y-6 text-white/80 leading-relaxed text-lg text-justify font-light">
                 <p>
                    Shivam is an upcoming <span className="text-white font-bold">Summer Associate at BCG</span>, set to join in Summer 2026. His academic journey at <span className="text-white font-bold">BITS Pilani</span> is characterized by a unique Dual Degree in <span className="text-white font-bold">M.Sc. Economics and B.E. Computer Science</span> with a consistent <span className="text-white font-bold">CGPA of 9.08</span>.
                 </p>
                 <p>
                    He has deeply explored the financial world, earning a <span className="text-white font-bold">Finance Minor</span> with a standout performance <span className="text-white font-bold">offshoot of 48/50 Marks</span>. His professional experience includes serving as an <span className="text-white font-bold">ML Intern</span> and an <span className="text-white font-bold">Equity Research Intern</span>, where he focused on technical analysis and valuation methodologies.
                 </p>
                 <p>
                    Beyond the technical, Shivam is a <span className="text-white font-bold">Student Senator in BITS Pilani Senate</span>, Chief Coordinator of the Literary Arts Club, and a <span className="text-white font-bold">Coordinator of the AUGSD team</span>. He balances high-stakes leadership for 12,000+ students with a creative passion that led to <span className="text-white font-bold">publishing his own book</span>.
                 </p>
              </div>
           </div>

           <div className="space-y-6">
              <div className="mb-8 rounded-lg overflow-hidden border border-white/10 shadow-lg group">
                <img 
                  src={profileImageUrl} 
                  alt="Shivam Professional Profile"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col gap-4">
                 <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-center justify-between">
                   <img src={BCG_LOGO} alt="BCG Logo" className="h-8 w-auto opacity-80 filter brightness-110" title="Upcoming BCG Associate" />
                   <img src={BITS_LOGO} alt="BITS Logo" className="h-8 w-auto opacity-80" title="BITS Pilani Senator" />
                 </div>
              </div>
              <div>
                 <span className="text-white/40 text-[11px] block uppercase font-bold tracking-widest mb-1 text-left">Keywords</span>
                 <p className="text-white/80 text-sm flex flex-wrap gap-2 text-left">
                    {['BCG', 'BITS Pilani', 'Finance Minor', 'Economics', 'CS', 'ML', 'Equity Research'].map(tag => (
                       <span key={tag} className="hover:underline cursor-pointer">{tag}</span>
                    ))}
                 </p>
              </div>
              <div>
                 <span className="text-white/40 text-[11px] block uppercase font-bold tracking-widest mb-1 text-left">Roles</span>
                 <p className="text-white/80 text-sm text-left">Upcoming Associate, Senator, Coordinator.</p>
              </div>
              <div>
                 <span className="text-white/40 text-[11px] block uppercase font-bold tracking-widest mb-1 text-left">Scholarships</span>
                 <p className="text-white/80 text-sm text-left leading-snug">Ranked among the <span className="text-white font-bold">top 2 percentile</span> of a batch of 1,000 students.</p>
              </div>
           </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  );
};

export default InfoModal;
