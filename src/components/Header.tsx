import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
  onBookCallClick: () => void;
  activeSection: string;
}

export default function Header({ onContactClick, onBookCallClick, activeSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isServicesActive = activeSection === 'services';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-3 left-1/2 -translate-x-1/2 w-[92%] max-w-[1080px] rounded-full backdrop-blur-xl border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.45)] bg-white/5 flex justify-between items-center px-4 md:px-5 py-2.5 md:py-3 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/70 border-white/15' : 'bg-white/5'
        }`}
      >
        {/* Logo */}
        <a href="#" className="font-display text-lg md:text-xl font-bold text-white tracking-tighter hover:opacity-90 transition-opacity">
          REELIO
        </a>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (isServicesActive) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                onBookCallClick();
              }
            }}
            id="header-cta"
            className="bg-cinematic-orange text-white text-[10px] md:text-xs px-4 md:px-5 py-2 rounded-full font-display font-bold hover:shadow-[0_0_16px_rgba(255,77,49,0.35)] transition-all duration-300 active:scale-95 flex items-center gap-1.5 cursor-pointer"
          >
            {isServicesActive ? 'BACK TO TOP' : "LET'S TALK"}
            <ArrowUpRight className="w-3 h-3" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 transition-all duration-500 md:hidden flex flex-col justify-center items-center gap-8 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-3 w-[80%] max-w-xs mt-8">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (isServicesActive) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                onBookCallClick();
              }
            }}
            className="w-full bg-cinematic-orange text-white py-4 rounded-full font-display font-bold tracking-widest text-xs hover:bg-cinematic-orange/95 transition-all flex items-center justify-center gap-2"
          >
            {isServicesActive ? 'BACK TO TOP' : 'VIEW SERVICES'}
          </button>
        </div>

        {/* Absolute top menu close button */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 p-3 text-white/60 hover:text-white"
        >
          <X className="w-7 h-7" />
        </button>
      </div>
    </>
  );
}
