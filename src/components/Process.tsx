import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROCESS_STEPS } from '../data';
import { ProcessStep } from '../types';
import { 
  Search, 
  Compass, 
  Video, 
  Sliders, 
  CheckCircle, 
  TrendingUp, 
  ChevronRight, 
  HelpCircle 
} from 'lucide-react';

export default function Process() {
  const [selectedStepId, setSelectedStepId] = useState<number>(1);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'search':
        return <Search className="w-6 h-6 text-cinematic-orange" />;
      case 'architecture':
        return <Compass className="w-6 h-6 text-cinematic-orange" />;
      case 'videocam':
      case 'videocam_off':
        return <Video className="w-6 h-6 text-cinematic-orange" />;
      case 'movie_edit':
        return <Sliders className="w-6 h-6 text-cinematic-orange" />;
      case 'check_circle':
        return <CheckCircle className="w-6 h-6 text-cinematic-orange" />;
      case 'trending_up':
        return <TrendingUp className="w-6 h-6 text-cinematic-orange" />;
      default:
        return <HelpCircle className="w-6 h-6 text-cinematic-orange" />;
    }
  };

  const selectedStep = PROCESS_STEPS.find((s) => s.id === selectedStepId) || PROCESS_STEPS[0];

  return (
    <section id="process" className="py-24 md:py-36 bg-obsidian overflow-hidden relative">
      {/* Background connecting timeline line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="font-display text-xs md:text-sm font-semibold text-cinematic-orange tracking-[0.35em] mb-4 block uppercase">
            THE JOURNEY
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Blueprint to Impact
          </h2>
          <p className="text-sm md:text-base text-white/50 max-w-md mx-auto mt-4 font-light">
            A highly structured, repeatable roadmap designed to take visual concepts from blank page to massive audience scale.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative mb-16">
          {/* Horizontal line on desktop */}
          <div className="absolute top-[32px] left-8 right-8 h-[2px] bg-white/10 hidden lg:block" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {PROCESS_STEPS.map((step: ProcessStep) => {
              const isSelected = selectedStepId === step.id;
              return (
                <div
                  key={step.id}
                  onClick={() => setSelectedStepId(step.id)}
                  className={`text-center group cursor-pointer p-4 rounded-xl transition-all duration-300 ${
                    isSelected ? 'bg-white/5' : 'hover:bg-white/3'
                  }`}
                >
                  {/* Step bubble */}
                  <div
                    className={`w-16 h-16 rounded-full border flex items-center justify-center mx-auto mb-5 transition-all duration-300 relative ${
                      isSelected
                        ? 'bg-neutral-900 border-cinematic-orange shadow-[0_0_15px_rgba(255,77,49,0.25)]'
                        : 'bg-neutral-950 border-white/10 group-hover:border-cinematic-orange/50'
                    }`}
                  >
                    {getIconComponent(step.icon)}
                    
                    {/* Badge number */}
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-[9px] font-mono font-bold text-white/60">
                      {step.id}
                    </span>
                  </div>

                  <h5 className="font-display text-xs md:text-sm font-bold text-white tracking-wider uppercase mb-1">
                    {step.title}
                  </h5>
                  <p className="text-[11px] text-white/45 tracking-wide leading-tight">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Step Detail Drawer */}
        <div className="glass-panel p-8 md:p-12 rounded-2xl max-w-3xl mx-auto border border-white/15 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cinematic-orange/5 blur-[45px]" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStepId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-display font-black text-cinematic-orange/25">
                  0{selectedStep.id}
                </span>
                <div className="w-1.5 h-6 bg-cinematic-orange rounded-full" />
                <h4 className="font-display text-xl md:text-2xl font-extrabold text-white">
                  {selectedStep.title} Phase
                </h4>
              </div>

              <p className="text-sm md:text-base text-white/80 font-light leading-relaxed mb-6">
                {selectedStep.details}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-xs text-white/45 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cinematic-orange" />
                  <span>PHASE OUTCOME: Predictable Asset Growth</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cinematic-orange" />
                  <span>LEAD TIME: ~5-10 Days</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
