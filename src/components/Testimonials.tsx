import { TESTIMONIALS } from '../data';
import { Testimonial } from '../types';
import { Quote, MessageSquareQuote, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="proof" className="py-24 md:py-36 bg-black relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-cinematic-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px]">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="font-display text-xs md:text-sm font-semibold text-cinematic-orange tracking-[0.35em] mb-4 block uppercase">
            PROOF
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            The Verdict
          </h2>
          <p className="text-sm md:text-base text-white/50 max-w-md mx-auto mt-4 font-light">
            Real feedback from high-tier executives and founders who scaled their digital visual pipeline with Reelio.
          </p>
        </div>

        {/* Testimonials Masonry/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t: Testimonial, index) => (
            <div
              key={t.id}
              className="glass-panel p-8 rounded-2xl relative flex flex-col justify-between group overflow-hidden transition-all duration-300 hover:border-cinematic-orange/30 hover:bg-white/4 hover:translate-y-[-4px]"
            >
              {/* Giant elegant background quote symbol */}
              <div className="absolute top-6 right-6 text-cinematic-orange/10 group-hover:text-cinematic-orange/20 transition-colors duration-300">
                <Quote className="w-12 h-12 stroke-[1.5px] fill-transparent" />
              </div>

              {/* Quote narrative */}
              <p className="text-sm md:text-base text-white/80 font-light italic mb-10 leading-relaxed z-10 relative">
                "{t.quote}"
              </p>

              {/* Author Card Info */}
              <div className="flex items-center gap-4 z-10 relative">
                <div className="w-11 h-11 rounded-full bg-cinematic-orange/10 border border-cinematic-orange/20 flex items-center justify-center text-cinematic-orange text-xs font-display font-black">
                  {t.avatarInitial}
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-white tracking-wide">
                    {t.author}
                  </h4>
                  <p className="font-display text-[9px] text-white/45 tracking-widest uppercase mt-0.5 flex items-center gap-1">
                    <span>{t.role}</span>
                    <span>-</span>
                    <span className="text-white/60">{t.company}</span>
                  </p>
                </div>
              </div>
              
              {/* Subtle visual seal */}
              <div className="absolute bottom-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-cinematic-orange/0 to-transparent group-hover:via-cinematic-orange/30 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Corporate Trust Banner */}
        <div className="mt-20 border border-white/5 bg-[#0A0A0A]/60 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-cinematic-orange" />
            <p className="text-xs md:text-sm text-white/70 font-light">
              All client metrics have been authenticated via direct third-party performance analytics reviews.
            </p>
          </div>
          <span className="px-3 py-1 bg-white/5 rounded-md text-[9px] font-mono tracking-widest text-white/40 uppercase">
            SECURE AUDIT ACTIVE
          </span>
        </div>

      </div>
    </section>
  );
}
