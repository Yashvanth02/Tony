import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [showOfferings, setShowOfferings] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleViewServicesClick = () => {
    setShowOfferings(true);
    scrollToSection('services');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#fbdcd6] font-sans antialiased overflow-x-hidden">
      
      {/* Premium Floating Header */}
      <Header
        activeSection={activeSection}
        onContactClick={() => scrollToSection('services')}
        onBookCallClick={() => scrollToSection('hero')}
      />

      {/* Main Sections */}
      <Hero
        onContactClick={() => scrollToSection('services')}
        onViewWorkClick={handleViewServicesClick}
      />

      <Services showOfferings={showOfferings} />

    </div>
  );
}
