import { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { Play, Sparkles, Plus, Calendar, Film } from 'lucide-react';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

export default function Portfolio({ onSelectProject }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { label: 'All', id: 'all' },
    { label: 'Commercial', id: 'commercial' },
    { label: 'Brand Films', id: 'brand_film' },
    { label: 'Products', id: 'product' },
    { label: 'Digital Content', id: 'digital_content' }
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  // Since filtering changes length, we want a nice responsive layout. We can assign specific classes dynamically
  // or layout them beautifully.
  // In our static layout, the grid occupies 12 columns total:
  // Item 1: Col-7, Item 2: Col-5, Item 3: Col-4, Item 4: Col-8
  // Let's preserve that layout, or fall back to beautiful responsive sizing if filtered list changes length.
  const getBentoClasses = (projectId: string, index: number) => {
    if (activeFilter !== 'all') {
      // Balanced standard grid when filtered
      return 'col-span-12 md:col-span-6 h-[400px]';
    }
    // Static premium bento alignment for 'all' as requested
    switch (projectId) {
      case 'essence-of-time':
        return 'col-span-12 md:col-span-7 h-[500px]';
      case 'minimal-workspace':
        return 'col-span-12 md:col-span-5 h-[500px]';
      case 'urban-motion':
        return 'col-span-12 md:col-span-4 h-[400px]';
      case 'architectural-legacy':
        return 'col-span-12 md:col-span-8 h-[400px]';
      default:
        return 'col-span-12 md:col-span-6 h-[400px]';
    }
  };

  return (
    <section id="work" className="py-24 md:py-36 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="font-display text-xs md:text-sm font-semibold text-cinematic-orange tracking-[0.35em] mb-4 block uppercase">
              OUR CREATIONS
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Selected Works
            </h2>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-white/5 pb-2 w-full md:w-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 text-[10px] md:text-xs font-display tracking-[0.15em] uppercase font-bold transition-all duration-300 border-b-2 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'text-cinematic-orange border-cinematic-orange'
                    : 'text-white/40 hover:text-white border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {filteredProjects.map((project: Project, index) => {
            const bentoClasses = getBentoClasses(project.id, index);
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`${bentoClasses} relative group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 cursor-pointer shadow-lg transition-transform duration-300 hover:border-cinematic-orange/30`}
              >
                {/* Background Image with Zoom */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-75 group-hover:opacity-85 transition-opacity" />

                {/* Interactive corner indicator */}
                <div className="absolute top-4 right-4 bg-black/45 backdrop-blur-md p-2.5 rounded-full border border-white/10 text-white opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-350">
                  <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                </div>

                {/* Project Brief Info */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-display text-[9px] md:text-[10px] font-bold text-cinematic-orange mb-2 tracking-[0.25em] uppercase flex items-center gap-1.5">
                    <Film className="w-3.5 h-3.5" />
                    {project.categoryLabel}
                  </span>
                  
                  <h4 className="font-display text-xl md:text-2xl font-extrabold text-white mb-2 leading-tight">
                    {project.title}
                  </h4>
                  
                  <p className="text-xs text-white/60 font-light line-clamp-2 mb-3 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 text-[10px] text-white/40 font-mono tracking-wider">
                    <span>CLIENT: {project.client}</span>
                    <span>•</span>
                    <span>YEAR: {project.year}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
