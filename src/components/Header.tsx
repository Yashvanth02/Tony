import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data';

interface HeaderProps {
  onViewServicesClick: () => void;
}

export default function Header({ onViewServicesClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <a href="#" className="flex items-center hover:opacity-90 transition-opacity">
          <img src="/reeliologoo.PNG" alt="Reelio logo" className="h-8 md:h-9 w-auto object-contain" />
        </a>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/916385666442"
            target="_blank"
            rel="noopener noreferrer"
            id="header-cta"
            className="bg-cinematic-orange text-white text-[10px] md:text-xs px-4 md:px-5 py-2 rounded-full font-display font-bold hover:shadow-[0_0_16px_rgba(255,77,49,0.35)] transition-all duration-300 active:scale-95 flex items-center gap-1.5"
          >
            LET'S TALK
            <ArrowUpRight className="w-3 h-3" />
          </a>

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
        <div className="flex flex-col gap-4 w-[80%] max-w-xs mt-8">
          <a
            href="https://wa.me/916385666442"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-cinematic-orange text-white py-4 rounded-full font-display font-bold tracking-widest text-xs hover:bg-cinematic-orange/95 transition-all flex items-center justify-center gap-2"
          >
            LET'S TALK
          </a>

          <div className="grid gap-3">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onViewServicesClick();
                }}
                className="w-full rounded-full border border-white/10 bg-white/5 py-3 px-4 text-left text-sm text-white transition-all hover:border-cinematic-orange/20 hover:bg-white/10"
              >
                {service.title}
              </button>
            ))}
          </div>
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
