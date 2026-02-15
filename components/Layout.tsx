import React, { useState, useEffect, useRef } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  onProfileClick?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onProfileClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const notificationRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsSearchOpen(false); // Close search if open
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Seasons', href: '#seasons' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#how-i-think' },
    { name: 'About', href: '#about' },
  ];

  const notifications = [
    { id: 1, text: "Season 2 Finale | May 2026 | College End", time: "Production Update" },
    { id: 2, text: "Season 3 | Episode 1 : The BCG Intern | Drops this June", time: "Season 3 is The Corporate" }
  ];

  return (
    <div className="min-h-screen bg-[#0c0d10] text-white">
      {/* Header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 px-6 md:px-16 py-4 flex items-center justify-between ${isScrolled ? 'bg-[#0c0d10] shadow-2xl py-3' : 'bg-gradient-to-b from-black/80 to-transparent py-5'}`}>
        <div className="flex items-center gap-12">
          <div 
            onClick={(e) => {
              const element = document.getElementById('home');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[#E50914] font-black text-3xl tracking-tighter cursor-pointer hover:scale-105 transition-transform"
          >
            SHIVAM
          </div>
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[13px] font-medium hover:text-white/60 transition-colors text-white/90 tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-5">
            {/* Search Icon */}
            <div className="relative" ref={searchRef}>
              <svg 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 cursor-pointer text-white hover:text-white/60 transition-colors" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              
              {isSearchOpen && (
                <div className="absolute top-full right-0 mt-4 w-64 bg-[#141414]/95 backdrop-blur-md border border-white/10 rounded-sm shadow-2xl p-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="p-3 border-b border-white/10 mb-2">
                    <span className="text-[10px] font-black text-[#E50914] uppercase tracking-widest">Quick Navigation</span>
                  </div>
                  {navLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href} 
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Notification Bell */}
            <div className="relative cursor-pointer group" ref={notificationRef}>
              <svg 
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-white group-hover:text-white/60 transition-colors" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 bg-[#E50914] text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black">2</span>
              
              {isNotificationOpen && (
                <div className="absolute top-full right-0 mt-4 w-72 bg-[#141414]/95 backdrop-blur-md border border-white/10 rounded-sm shadow-2xl p-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="p-3 border-b border-white/10 mb-2">
                    <span className="text-[10px] font-black text-[#E50914] uppercase tracking-widest">Notifications</span>
                  </div>
                  {notifications.map((notif) => (
                    <div key={notif.id} className="p-4 hover:bg-white/5 rounded-sm transition-colors border-b border-white/5 last:border-0">
                      <p className="text-xs font-bold text-white/90">{notif.text}</p>
                      <p className="text-[10px] text-white/40 mt-1 uppercase tracking-tighter">{notif.time}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Profile Icon */}
            <div 
              onClick={onProfileClick}
              className="w-8 h-8 bg-blue-600 rounded-sm text-white font-black flex items-center justify-center text-xs cursor-pointer hover:ring-2 hover:ring-white transition-all"
            >
              S
            </div>
          </div>
        </div>
      </nav>

      <main>{children}</main>
    </div>
  );
};

export default Layout;