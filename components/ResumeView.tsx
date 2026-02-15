
import React from 'react';

export type ResumeType = 'Technical' | 'Managerial' | 'Finance';

interface ResumeViewProps {
  type: ResumeType;
  onBack: () => void;
  onSwitch: (type: ResumeType) => void;
}

const ResumeView: React.FC<ResumeViewProps> = ({ type, onBack, onSwitch }) => {
  const commonHeader = (
    <div className="text-center mb-6 border-b-2 border-black pb-4">
      <h1 className="text-3xl font-serif font-bold tracking-tight mb-1">SHIVAM AGARWALA</h1>
      <div className="text-[11px] font-sans flex justify-center gap-4 text-gray-600">
        <span>shivam.ag9005@gmail.com</span>
        <span>|</span>
        <span>+91 7228840501</span>
        <span>|</span>
        <a href="https://linkedin.com/in/shivam-agarwala" className="underline">LinkedIn</a>
        <span>|</span>
        <a href="https://github.com/shivam-agarwala" className="underline">GitHub</a>
      </div>
    </div>
  );

  const education = (
    <section className="mb-4">
      <h2 className="text-xs font-bold border-b border-gray-300 mb-2 uppercase tracking-wider">Education</h2>
      <div className="flex justify-between items-baseline">
        <div className="text-sm">
          <span className="font-bold">BITS Pilani – K.K. Birla Goa Campus</span>
          <p className="italic">M.Sc. (Hons.) Economics and B.E. (Hons.) Computer Science</p>
          {type === 'Finance' && <p className="text-xs text-gray-700">Minor: Finance (Offshoot: 48/50 Marks)</p>}
        </div>
        <div className="text-right text-xs">
          <p className="font-bold">Year: 2027</p>
          <p className="font-bold text-blue-800">CGPA: 9.08/10</p>
        </div>
      </div>
    </section>
  );

  const renderContent = () => {
    switch (type) {
      case 'Technical':
        return (
          <>
            <section className="mb-4">
              <h2 className="text-xs font-bold border-b border-gray-300 mb-2 uppercase tracking-wider">Internships</h2>
              <div className="mb-3">
                <div className="flex justify-between font-bold text-sm">
                  <span>ML Intern, MobileMSK LLC (Minnesota, U.S.) — Remote</span>
                  <span>May 2024 - Jul 2024</span>
                </div>
                <ul className="list-disc ml-5 text-[11px] leading-snug space-y-1">
                  <li>Built an end-to-end NLP pipeline using <span className="font-semibold">GPT-2</span> for document intelligence, enabling keyword extraction and text analysis.</li>
                  <li>Trained models on domain-specific datasets from <span className="font-semibold">Kaggle</span> using Python and PyTorch.</li>
                  <li>Delivered client-facing support for health insurance policy comparison as a usecase for multi-policy evaluation.</li>
                </ul>
              </div>
            </section>
            <section className="mb-4">
              <h2 className="text-xs font-bold border-b border-gray-300 mb-2 uppercase tracking-wider">Projects</h2>
              <div className="mb-2">
                <div className="flex justify-between font-bold text-sm">
                  <span>OS Design - Operating Systems</span>
                  <span>Aug 2025 - Dec 2025</span>
                </div>
                <p className="text-[11px] leading-snug">Built and extended core Operating Systems functionality in <span className="font-semibold">PintOS</span>, implementing bootloader execution, thread scheduling, and virtual memory management.</p>
              </div>
              <div className="mb-2">
                <div className="flex justify-between font-bold text-sm">
                  <span>BPGC News – Full Stack Web Application</span>
                  <span>Jan 2025 - Apr 2025</span>
                </div>
                <p className="text-[11px] leading-snug">Developed a secure, full-stack news platform implementing RBAC, user authentication, and robust routing mechanisms for content access.</p>
              </div>
              <div className="mb-2">
                <div className="flex justify-between font-bold text-sm">
                  <span>Design of Fault Tolerant Mixed Criticality Systems</span>
                  <span>Dec 2024 - Dec 2025</span>
                </div>
                <p className="text-[11px] leading-snug">Developed a real-time scheduling simulator (CCEDF, LAEDF) reducing deadline misses and improving WCRT predictability for high-criticality tasks.</p>
              </div>
            </section>
          </>
        );
      case 'Managerial':
        return (
          <>
            <section className="mb-4">
              <h2 className="text-xs font-bold border-b border-gray-300 mb-2 uppercase tracking-wider">Experience</h2>
              <div className="mb-3">
                <div className="flex justify-between font-bold text-sm">
                  <span>Upcoming Summer Associate – Boston Consulting Group (BCG)</span>
                  <span>Summer 2026</span>
                </div>
                <p className="text-[11px] italic">Strategic advisory and management consulting focus.</p>
              </div>
            </section>
            <section className="mb-4">
              <h2 className="text-xs font-bold border-b border-gray-300 mb-2 uppercase tracking-wider">Positions of Responsibility</h2>
              <div className="mb-3">
                <div className="flex justify-between font-bold text-sm">
                  <span>STUDENT SENATOR - BITS Pilani Senate</span>
                  <span>Jul 2025 - Present</span>
                </div>
                <ul className="list-disc ml-5 text-[11px] leading-snug space-y-1">
                  <li>Sole Student Representative from BITS Goa in the <span className="font-semibold">University Senate</span>, working with the Vice-Chancellor and Deans.</li>
                  <li>Influenced university-wide academic reforms, revisions to thesis credit system, impacting <span className="font-semibold">12,000+ students</span>.</li>
                </ul>
              </div>
              <div className="mb-3">
                <div className="flex justify-between font-bold text-sm">
                  <span>CO-ORDINATOR - AUGSD Students' Team</span>
                  <span>Aug 2024 - Aug 2025</span>
                </div>
                <ul className="list-disc ml-5 text-[11px] leading-snug space-y-1">
                  <li>Led a 16-member administrative team overseeing academic grievance redressal for student body of <span className="font-semibold">5,000+ students</span>.</li>
                  <li>Resolved 4,000+ queries and reduced resolution time from a week to <span className="font-semibold">within one day</span>.</li>
                </ul>
              </div>
            </section>
          </>
        );
      case 'Finance':
        return (
          <>
            <section className="mb-4">
              <h2 className="text-xs font-bold border-b border-gray-300 mb-2 uppercase tracking-wider">Internships</h2>
              <div className="mb-3">
                <div className="flex justify-between font-bold text-sm">
                  <span>Equity Research Intern, Millennium Money Finance</span>
                  <span>Jun 2025 - Jul 2025</span>
                </div>
                <ul className="list-disc ml-5 text-[11px] leading-snug space-y-1">
                  <li>Conducted equity valuation modeling across small- and mid-cap stocks, including IPO performance analysis.</li>
                  <li>Utilized valuation frameworks and historical data from <span className="font-semibold">Bloomberg and Screener</span> to support investment decisions.</li>
                  <li>Clients' IPO application returns increased from around <span className="font-semibold">10% to 18-20%</span> following research-driven analysis.</li>
                </ul>
              </div>
            </section>
            <section className="mb-4">
              <h2 className="text-xs font-bold border-b border-gray-300 mb-2 uppercase tracking-wider">Financial Projects</h2>
              <div className="mb-3">
                <div className="flex justify-between font-bold text-sm">
                  <span>Business Analysis & Valuation of India's Power Industry</span>
                  <span>Jun 2025 - Jul 2025</span>
                </div>
                <ul className="list-disc ml-5 text-[11px] leading-snug space-y-1">
                  <li>Conducted industry analysis of Tata Power, Adani Power using BCG Matrix, PESTEL, and SWOT.</li>
                  <li>Built end-to-end models including <span className="font-semibold">WACC, DCF valuation, and Relative Valuation</span>.</li>
                </ul>
              </div>
              <div className="mb-3">
                <div className="flex justify-between font-bold text-sm">
                  <span>Financial Risk Analysis & Corporate Finance</span>
                  <span>Aug 2025 - Nov 2025</span>
                </div>
                <p className="text-[11px] leading-snug">Developed a risk management framework using historical simulation to estimate <span className="font-semibold">VaR and Expected Shortfall</span>. Applied Sharpe ratio optimization and Greeks backtesting.</p>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-[200] bg-[#0c0d10] flex flex-col md:flex-row overflow-hidden animate-in fade-in duration-500">
      {/* Control Sidebar */}
      <div className="w-full md:w-80 bg-[#141414] border-r border-white/10 p-8 flex flex-col gap-10">
        <div>
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </button>
          
          <h2 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">Resume <span className="text-[#E50914]">Hub</span></h2>
          <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Select Perspective</p>
        </div>

        <nav className="flex flex-col gap-2">
          {(['Technical', 'Managerial', 'Finance'] as ResumeType[]).map((r) => (
            <button
              key={r}
              onClick={() => onSwitch(r)}
              className={`text-left px-5 py-4 rounded-sm transition-all flex items-center justify-between group ${type === r ? 'bg-[#E50914] text-white shadow-[0_0_20px_rgba(229,9,20,0.3)]' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}
            >
              <span className="font-bold">{r} Focus</span>
              {type === r && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
            </button>
          ))}
        </nav>

        <div className="mt-auto">
          <button 
            onClick={() => window.print()}
            className="w-full py-3 bg-white/10 border border-white/20 text-white rounded-sm font-bold text-sm flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print to PDF
          </button>
        </div>
      </div>

      {/* Main Document Area */}
      <div className="flex-1 bg-[#181818] p-4 md:p-12 overflow-y-auto flex justify-center">
        <div 
          id="printable-resume"
          className="bg-white text-black w-full max-w-[800px] min-h-[1100px] p-12 md:p-16 shadow-2xl animate-in slide-in-from-bottom-4 duration-700"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {commonHeader}
          {education}
          {renderContent()}
          
          <section className="mb-4">
            <h2 className="text-xs font-bold border-b border-gray-300 mb-2 uppercase tracking-wider">Skills</h2>
            <div className="text-[11px] leading-relaxed">
              <p><span className="font-bold">Languages:</span> C, C++, Python, Java, SQL</p>
              <p><span className="font-bold">Tools:</span> Bloomberg Terminal, Screener, Git, Kaggle, Excel, PowerBI</p>
              <p><span className="font-bold">Relevant:</span> {type === 'Technical' ? 'Operating Systems, Database Management, Algorithms, NLP' : 'Equity Research, Financial Risk, Strategy, Leadership'}</p>
            </div>
          </section>

          <section className="mb-4">
            <h2 className="text-xs font-bold border-b border-gray-300 mb-2 uppercase tracking-wider">Achievements & Extra-Curricular</h2>
            <div className="text-[11px] leading-snug">
              <p className="mb-1">• <span className="font-bold">BITS Merit Scholarship:</span> Ranked in top 2 percentile of 1,000+ students (Aug 2024).</p>
              <p className="mb-1">• <span className="font-bold">Published Author:</span> Wrote and published globally listed poetry book "Creative Space", recipient of Emily Dickinson Award.</p>
              <p>• <span className="font-bold">Course Mentor:</span> Mentored 300+ students in OOP, designing labs and hosting bootcamps.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeView;
