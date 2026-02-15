import React, { useState } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import NetflixRow from './components/NetflixRow';
import SeasonDetail from './components/SeasonDetail';
import HowIThink from './components/HowIThink';
import CourseCatalog from './components/CourseCatalog';
import Footer from './components/Footer';
import InfoModal from './components/InfoModal';
import { Category, Project } from './types';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeProjectDropdown, setActiveProjectDropdown] = useState<string | null>("Finance");
  
  const profileImageUrl = "https://i.ibb.co/hxscwyKc/Passport-Size-Photo.jpg";

  // Curated Orderings
  const originalsOrder = ['bcg', 'creative'];
  const originals = originalsOrder
    .map(id => PROJECTS.find(p => p.id === id))
    .filter((p): p is Project => p !== undefined);

  const internshipsOrder = ['equity-mmf', 'ml-intern'];
  const internships = internshipsOrder
    .map(id => PROJECTS.find(p => p.id === id))
    .filter((p): p is Project => p !== undefined);

  // Responsibilities row: Senator -> Abhivyakti -> Coordinator (AUGSD) -> Deputy PM
  const responsibilitiesOrder = ['senator', 'abhivyakti', 'augsd', 'deputy_pm'];
  const responsibilities = responsibilitiesOrder
    .map(id => PROJECTS.find(p => p.id === id))
    .filter((p): p is Project => p !== undefined);

  // Filtered lists for the dropdown section - Labels simplified as requested
  const projectCategories = [
    { id: 'Finance', label: 'Finance', items: PROJECTS.filter(p => p.id.startsWith('fin-')) },
    { id: 'Economics', label: 'Economics', items: PROJECTS.filter(p => p.id.startsWith('eco-')) },
    { id: 'Technical', label: 'Technical', items: PROJECTS.filter(p => p.id.startsWith('tech-')) }
  ];

  // Clubs & Departments list (Positioned at very last)
  const clubListOrder = ['bitsmun', 'cel', 'depp', 'dofam', 'quark', 'abhivyakti'];
  const clubsAndDepartments = clubListOrder
    .map(id => PROJECTS.find(p => p.id === id))
    .filter((p): p is Project => p !== undefined);

  // Competitions Row - Positioned below courses
  const competitionIds = ['hackenza', 'hindi-debate', 'chess-early'];
  const competitions = competitionIds
    .map(id => PROJECTS.find(p => p.id === id))
    .filter((p): p is Project => p !== undefined);
  
  const taships = PROJECTS.filter(p => p.id.includes('ta-'));
  
  const volunteering = PROJECTS.filter(p => 
    p.id.includes('volunteering') || p.id.includes('mentor') || p.id.includes('library-team')
  );

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const getYearsActive = (id: string) => {
    const map: Record<string, string> = {
      'bitsmun': '2',
      'cel': '2',
      'depp': '1',
      'dofam': '1',
      'quark': '2',
      'abhivyakti': '4'
    };
    return map[id] || 'Active';
  };

  const renderDescription = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a 
            key={i} 
            href={part} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#E50914] hover:underline break-all font-bold"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <Layout onProfileClick={() => setIsModalOpen(true)}>
      <Hero onMoreInfo={() => setIsModalOpen(true)} />

      <InfoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setSelectedProject(null)}>
          <div className="relative w-full max-w-2xl bg-[#181818] rounded-xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-50 text-white/50 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video bg-[#0c0d10] flex items-center justify-center p-12">
               {selectedProject.imageUrl ? (
                 <img src={selectedProject.imageUrl} className={`${selectedProject.displayMode === 'cover' ? 'w-full h-full object-cover' : 'max-h-full object-contain'}`} alt={selectedProject.title} />
               ) : (
                 <div className="text-6xl opacity-10 font-black uppercase text-white select-none text-center px-6">{selectedProject.title}</div>
               )}
            </div>
            <div className="p-8 text-left max-h-[60vh] overflow-y-auto custom-scrollbar">
              <h2 className="text-3xl font-black mb-2 text-white uppercase tracking-tighter">{selectedProject.title}</h2>
              <div className="flex gap-2 mb-4">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white/60 font-bold uppercase tracking-widest">{tag}</span>
                ))}
              </div>
              <div className="h-px w-full bg-white/10 mb-6" />
              <p className="text-white/80 leading-relaxed text-lg whitespace-pre-line font-light">
                {renderDescription(selectedProject.description)}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-30 pt-12 md:pt-20 pb-20 bg-gradient-to-b from-transparent via-[#0c0d10] to-[#0c0d10]">
        
        {/* Cinematic Primary Rows */}
        <section id="projects" className="scroll-mt-24 space-y-12">
          {originals.length > 0 && (
            <NetflixRow title="Shivam Originals" subtitle="Flagship achievements and published works" items={originals} onItemClick={handleProjectClick} />
          )}
          {internships.length > 0 && (
            <NetflixRow title="Internships" subtitle="High-impact experience and corporate research" items={internships} onItemClick={handleProjectClick} />
          )}
          {responsibilities.length > 0 && (
            <NetflixRow title="Responsibilities" subtitle="Leadership roles in BITS Senate, Abhivyakti, and AUGSD" items={responsibilities} onItemClick={handleProjectClick} />
          )}
        </section>

        {/* Project Dropdown Section: Finance, Economics, Technical */}
        <section id="project-library" className="px-6 md:px-16 py-24 bg-[#0c0d10] text-left">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <span className="text-[#E50914] text-xs font-black uppercase tracking-[0.5em] mb-4 block">Project Repertoire</span>
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Project <span className="opacity-30 italic">Library</span></h2>
              <p className="text-white/40 text-lg leading-relaxed max-w-2xl">
                A specialized archive of technical and theoretical work across my core domains. Select a category to explore the episodes.
              </p>
            </div>

            <div className="space-y-4">
              {projectCategories.map((cat) => (
                <div 
                  key={cat.id} 
                  className={`border border-white/10 rounded-sm transition-all duration-500 ${activeProjectDropdown === cat.id ? 'bg-white/5 border-white/20' : 'bg-transparent'}`}
                >
                  <button 
                    onClick={() => setActiveProjectDropdown(activeProjectDropdown === cat.id ? null : cat.id)}
                    className="w-full px-8 py-10 flex items-center justify-between group"
                  >
                    <div className="flex flex-col items-start">
                      <h3 className={`text-2xl md:text-4xl font-black transition-colors ${activeProjectDropdown === cat.id ? 'text-white' : 'text-white/20 group-hover:text-white/50 uppercase tracking-tighter'}`}>
                        {cat.label}
                      </h3>
                      <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] mt-2">
                        {cat.items.length} Modules
                      </span>
                    </div>
                    <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all ${activeProjectDropdown === cat.id ? 'bg-[#E50914] border-[#E50914]' : 'group-hover:bg-white/10'}`}>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 text-white transition-transform duration-500 ${activeProjectDropdown === cat.id ? 'rotate-180' : ''}`} 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  <div className={`transition-all duration-700 ease-in-out overflow-hidden ${activeProjectDropdown === cat.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-8 pb-12 pt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {cat.items.map((project, idx) => (
                          <div 
                            key={project.id}
                            onClick={() => handleProjectClick(project)}
                            style={{ transitionDelay: `${idx * 50}ms` }}
                            className="bg-white/5 border border-white/5 p-6 rounded-sm hover:bg-white/10 transition-all group/item relative overflow-hidden cursor-pointer h-full flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-4">
                                <span className="text-[#46d369] text-[9px] font-black uppercase tracking-widest">{project.matchScore}% Match</span>
                                <div className="w-1 h-1 rounded-full bg-white/10 group-hover/item:bg-[#E50914]" />
                              </div>
                              <h4 className="text-white/80 font-bold text-sm leading-snug group-hover/item:text-white transition-colors mb-6 uppercase tracking-tight line-clamp-2">
                                {project.title}
                              </h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.slice(0, 2).map(tag => (
                                <span key={tag} className="text-[8px] bg-white/5 px-1.5 py-0.5 rounded-sm text-white/30 font-bold uppercase tracking-widest">{tag}</span>
                              ))}
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

        <SeasonDetail />

        <HowIThink />
        
        <CourseCatalog />

        {/* Competitions: Below courses and above extra credits */}
        {competitions.length > 0 && (
          <div className="py-12">
            <NetflixRow title="Competitions & Accolades" subtitle="Hackathons, national debate, and state chess" items={competitions} onItemClick={handleProjectClick} />
          </div>
        )}

        {/* Bonus Content Rows (Extra Credits) */}
        <section id="more-like-this" className="py-24 bg-[#0c0d10] text-left">
          <div className="px-6 md:px-16 mb-12">
            <span className="text-[#E50914] text-xs font-black uppercase tracking-[0.5em] mb-4 block">Bonus Content</span>
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase">Extra <span className="opacity-30 italic">Credits</span></h2>
          </div>

          <div className="space-y-12">
            {taships.length > 0 && (
              <NetflixRow title="Teaching Assistantships" subtitle="Mentorship across CS, Econ, and Management" items={taships} onItemClick={handleProjectClick} />
            )}
            {volunteering.length > 0 && (
              <NetflixRow title="Volunteering Experience" subtitle="Social impact and student assistance programs" items={volunteering} onItemClick={handleProjectClick} />
            )}
          </div>
        </section>

        {/* Clubs & Departments - Positioned last above Executive Producer */}
        <section id="clubs-and-depts" className="px-6 md:px-16 py-32 bg-[#0c0d10] text-left">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="text-[#E50914] text-xs font-black uppercase tracking-[0.5em] mb-4 block">Organization Involvement</span>
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">Clubs & <span className="opacity-30 italic">Departments</span></h2>
              <p className="text-white/40 text-lg leading-relaxed max-w-2xl">
                A non-exhaustive record of my multi-year dedication to campus organizations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/10 rounded-sm overflow-hidden">
               {clubsAndDepartments.map((club) => (
                 <div 
                   key={club.id}
                   onClick={() => handleProjectClick(club)}
                   className="group p-8 bg-[#0c0d10] hover:bg-white/[0.03] transition-all cursor-pointer flex flex-col justify-between h-full"
                 >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-white/5 rounded-sm flex items-center justify-center font-black text-xs group-hover:bg-[#E50914] transition-colors">
                          {club.title.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white group-hover:text-[#E50914] transition-colors uppercase tracking-tighter">{club.title}</h4>
                          <div className="text-[10px] text-[#46d369] font-black uppercase tracking-widest mt-1 italic">No. of Years Active: {getYearsActive(club.id)}</div>
                        </div>
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed mb-6 font-light">
                        {club.id === 'abhivyakti' ? '(The Literary arts and music club)' : (club.description.split('\n\n').slice(1).join('\n\n') || club.description)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                       <div className="flex gap-2">
                          {club.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-[8px] bg-white/5 px-1.5 py-0.5 rounded-sm text-white/30 font-bold uppercase tracking-widest">{tag}</span>
                          ))}
                       </div>
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white/10 group-hover:text-white transition-all transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                       </svg>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Executive Producer Section */}
        <section id="about" className="px-6 md:px-16 py-24 scroll-mt-24">
            <div className="max-w-7xl mx-auto rounded-xl overflow-hidden relative aspect-[21/9] group shadow-2xl border border-white/5">
                <img src={profileImageUrl} alt="Shivam Agarwala Cinematic" className="w-full h-full object-cover object-[95%_25%] filter grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-left">
                    <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.5em] mb-2 block">Executive Producer</span>
                    <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase">SHIVAM AGARWALA</h2>
                </div>
            </div>
        </section>

        <Footer />
      </div>
    </Layout>
  );
};

export default App;