import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import { Service } from '../types';
import { 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Radio,
  ScanSearch,
  Mic,
  BarChart3,
  WandSparkles,
  UserRoundSearch
} from 'lucide-react';

interface ServicesProps {
  showOfferings: boolean;
}

export default function Services({ showOfferings }: ServicesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'pulse':
        return <Radio className="w-8 h-8 text-cinematic-orange" />;
      case 'feature':
        return <ScanSearch className="w-8 h-8 text-cinematic-orange" />;
      case 'voice':
        return <Mic className="w-8 h-8 text-cinematic-orange" />;
      case 'insights':
        return <BarChart3 className="w-8 h-8 text-cinematic-orange" />;
      case 'catalyst':
        return <WandSparkles className="w-8 h-8 text-cinematic-orange" />;
      case 'persona':
        return <UserRoundSearch className="w-8 h-8 text-cinematic-orange" />;
      default:
        return <Sparkles className="w-8 h-8 text-cinematic-orange" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-obsidian relative overflow-hidden">
      {/* Absolute top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-[1200px]">
        <AnimatePresence initial={false}>
          {showOfferings && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {SERVICES.map((service: Service) => {
                const isExpanded = expandedId === service.id;
                return (
                  <div
                    key={service.id}
                    onClick={() => toggleExpand(service.id)}
                    className={`glass-panel p-8 rounded-2xl cursor-pointer transition-all duration-300 relative group flex flex-col justify-between ${
                      isExpanded ? 'border-cinematic-orange/40 bg-white/5 shadow-[0_10px_30px_rgba(255,77,49,0.1)]' : 'hover:border-cinematic-orange/20 hover:bg-white/4'
                    }`}
                  >
                    <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-cinematic-orange/5 blur-xl group-hover:bg-cinematic-orange/15 transition-all duration-300" />
                    
                    <div>
                      <div className="mb-6 p-3 bg-white/5 rounded-xl inline-block border border-white/5 group-hover:border-cinematic-orange/30 transition-colors duration-300">
                        {getIconComponent(service.icon)}
                      </div>

                      <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-cinematic-orange transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-sm text-white/60 leading-relaxed font-light mb-4">
                        {service.description}
                      </p>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35 }}
                            className="overflow-hidden"
                          >
                            <p className="text-xs text-white/50 border-t border-white/10 pt-4 mt-2 leading-relaxed">
                              {service.extendedDescription}
                            </p>
                            
                            <div className="mt-4">
                              <p className="text-[10px] font-display font-semibold text-cinematic-orange tracking-widest uppercase mb-2">
                                WHAT WE DELIVER:
                              </p>
                              <ul className="space-y-1.5">
                                {service.deliverables.map((del) => (
                                  <li key={del} className="flex items-center gap-2 text-xs text-white/70">
                                    <Check className="w-3.5 h-3.5 text-cinematic-orange flex-shrink-0" />
                                    <span>{del}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-display font-bold tracking-widest text-white/45 group-hover:text-white/70 transition-colors">
                      <span>{isExpanded ? 'COLLAPSE DETAILS' : 'EXPAND DELIVERABLES'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5 text-cinematic-orange" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 group-hover:text-cinematic-orange transition-colors" />
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
