import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { 
  X, 
  Tv, 
  Calendar, 
  User, 
  Clock, 
  Crop, 
  Camera, 
  Award, 
  Play, 
  TrendingUp, 
  SlidersHorizontal 
} from 'lucide-react';

interface DetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function DetailModal({ project, onClose }: DetailModalProps) {
  // Prevent background scrolling when open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        id="detail-modal-root"
        className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-2xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 150 }}
          className="w-full max-w-[1100px] bg-[#0A0A0A] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.8)] relative max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button top right */}
          <button
            onClick={onClose}
            id="modal-close-btn"
            className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2.5 bg-black/50 hover:bg-cinematic-orange hover:text-white rounded-full text-white/70 border border-white/10 transition-all duration-300 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal scrollable body */}
          <div className="overflow-y-auto p-6 md:p-10 flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Left Column: Visuals & Metrics */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                
                {/* Image / Simulated Play Frame */}
                <div className="relative rounded-2xl overflow-hidden group aspect-[16/9] border border-white/10 bg-neutral-900 shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-all flex items-center justify-center">
                    {/* Simulated pulse play button */}
                    <div className="w-16 h-16 rounded-full bg-cinematic-orange/90 text-white flex items-center justify-center border border-white/20 shadow-lg relative group-hover:scale-110 transition-transform duration-300">
                      <span className="absolute -inset-2 rounded-full border border-cinematic-orange/40 animate-ping opacity-60" />
                      <Play className="w-6 h-6 fill-white ml-1" />
                    </div>
                  </div>
                  
                  {/* Subtle technical overlay */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md rounded-md text-[9px] font-mono text-white/70 tracking-widest uppercase">
                    SIMULATED MASTER REEL
                  </div>
                </div>

                {/* Performance Metrics Cards */}
                <div>
                  <h4 className="text-[10px] font-display font-bold text-cinematic-orange tracking-[0.25em] mb-3 uppercase flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    DISTRIBUTION METRICS
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {project.metrics?.map((metric) => (
                      <div key={metric.label} className="bg-white/3 border border-white/5 rounded-xl p-3.5 text-center">
                        <p className="text-xl md:text-2xl font-display font-black text-white">{metric.value}</p>
                        <p className="text-[9px] text-white/40 font-display tracking-wider uppercase mt-1 leading-snug">
                          {metric.label}
                        </p>
                      </div>
                    )) || (
                      <div className="col-span-3 text-center py-4 text-xs text-white/45 italic">
                        Metrics pending active audit cycle.
                      </div>
                    )}
                  </div>
                </div>

                {/* Production gear used */}
                {project.equipment && (
                  <div>
                    <h4 className="text-[10px] font-display font-bold text-cinematic-orange tracking-[0.25em] mb-2.5 uppercase flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5" />
                      CAMERA & RIGGING METRIC
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.equipment.map((item) => (
                        <span key={item} className="px-3 py-1.5 bg-white/5 border border-white/5 text-[10px] font-mono text-white/80 rounded-md tracking-wide">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Case Story & Details */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  {/* Meta tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cinematic-orange/20 bg-cinematic-orange/5 text-cinematic-orange text-[9px] font-display font-bold tracking-widest uppercase mb-4">
                    {project.categoryLabel}
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm md:text-base text-white/80 font-light leading-relaxed mb-6">
                    {project.longDescription}
                  </p>

                  {/* Context parameters */}
                  <div className="grid grid-cols-2 gap-4 border-y border-white/10 py-5 mb-6">
                    <div className="flex items-center gap-3">
                      <Tv className="w-4 h-4 text-white/40 flex-shrink-0" />
                      <div>
                        <p className="text-[9px] font-display text-white/35 tracking-wider uppercase">CLIENT</p>
                        <p className="text-xs text-white/90 font-medium">{project.client}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-white/40 flex-shrink-0" />
                      <div>
                        <p className="text-[9px] font-display text-white/35 tracking-wider uppercase">RELEASE YEAR</p>
                        <p className="text-xs text-white/90 font-medium">{project.year}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-white/40 flex-shrink-0" />
                      <div>
                        <p className="text-[9px] font-display text-white/35 tracking-wider uppercase">RUNTIME</p>
                        <p className="text-xs text-white/90 font-medium">{project.runtime || 'N/A'}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Crop className="w-4 h-4 text-white/40 flex-shrink-0" />
                      <div>
                        <p className="text-[9px] font-display text-white/35 tracking-wider uppercase">ASPECT RATIO</p>
                        <p className="text-xs text-white/90 font-medium">{project.aspectRatio || 'N/A'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Creative Team Credits */}
                {project.credits && (
                  <div className="pt-2">
                    <h4 className="text-[10px] font-display font-bold text-cinematic-orange tracking-[0.25em] mb-3 uppercase flex items-center gap-1.5">
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                      CREATIVE CREDITS
                    </h4>
                    <div className="bg-[#121212] border border-white/5 rounded-xl p-4 grid grid-cols-2 gap-3.5">
                      {project.credits.map((credit) => (
                        <div key={credit.role} className="flex flex-col">
                          <span className="text-[9px] font-display text-white/40 tracking-wider uppercase">{credit.role}</span>
                          <span className="text-xs text-white/90 font-semibold">{credit.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
