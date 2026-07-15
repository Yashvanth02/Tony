import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';

export default function App() {
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

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#fbdcd6] font-sans antialiased overflow-x-hidden">
      
      {/* Premium Floating Header */}
      <Header onViewServicesClick={handleViewServicesClick} />

      {/* Main Sections */}
      <Hero onViewWorkClick={handleViewServicesClick} />

      {showOfferings && <Services showOfferings={showOfferings} />}

    </div>
  );
}
