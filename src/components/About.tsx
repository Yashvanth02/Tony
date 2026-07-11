import { useState } from 'react';
import { motion } from 'motion/react';
import { BENN_PORTRAIT } from '../data';
import { Award, Zap, Camera, ShieldCheck, Heart } from 'lucide-react';

export default function About() {
  const [activePillar, setActivePillar] = useState<'cinematic' | 'strategic' | 'relentless'>('cinematic');

  const pillars = {
    cinematic: {
      title: 'Cinematic Depth',
      icon: <Camera className="w-5 h-5" />,
      content: 'We use professional lighting setups, custom anamorphic lens calibration, and a meticulous grading index to make commercial projects feel like major motion pictures.',
      quote: '"If a frame doesn’t look like it belongs on an IMAX screen, we don’t export it."'
    },
    strategic: {
      title: 'Growth-Minded Storytelling',
      icon: <Zap className="w-5 h-5" />,
      content: 'Every camera shift and audio transition is mapped to audience psychological cues. Beautiful artwork must lead directly to pipeline scale.',
      quote: '"We bridge the gap between creative visual poetry and cold, hard performance metrics."'
    },
    relentless: {
      title: 'Premium Quality Assurance',
      icon: <ShieldCheck className="w-5 h-5" />,
      content: 'Our work undergoes double-blind quality passes for color accuracy, multi-device playback synchronization, and sound engineering standards before final signoff.',
      quote: '"Consistency builds trust. We establish continuous content loops that preserve premium fidelity."'
    }
  };

  return (
    <section id="about" className="py-24 md:py-36 bg-black relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-cinematic-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Column 1: Image container */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-cinematic-orange/10 rounded-2xl blur-2xl group-hover:bg-cinematic-orange/15 transition-all duration-500" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 aspect-[4/5] bg-neutral-900">
              <img
                src={BENN_PORTRAIT}
                alt="Benn Tony, Founder of Reelio"
                className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              
              {/* Dynamic Overlay Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-4 flex justify-between items-center">
                <div>
                  <p className="text-[10px] font-display text-cinematic-orange tracking-widest font-bold uppercase">FOUNDER PROFILE</p>
                  <p className="text-sm font-display font-semibold text-white">Benn Tony</p>
                </div>
                <div className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-display tracking-wider text-white">
                  Chennai, IN
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Narrative details */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-display text-xs md:text-sm font-semibold text-cinematic-orange tracking-[0.35em] mb-4 uppercase">
              THE FOUNDER
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Architect of Visual Narrative
            </h2>
            
            <p className="text-base md:text-lg text-white/80 font-light mb-5 leading-relaxed">
              Benn Tony is the visionary founder of <span className="text-white font-semibold">Reelio</span>, an agency dedicated to transforming how brands communicate in the digital era. With a deep-rooted belief that every brand has a story worth telling, Benn blends cinematic artistry with strategic marketing.
            </p>
            
            <p className="text-sm md:text-base text-white/60 mb-8 leading-relaxed">
              His approach isn't just about making things look beautiful—it's about driving measurable scale. Reelio has become a powerhouse in short-form and high-production content, turning inconsistent uploads into predictable inbound engines for global clients.
            </p>

            {/* Interactive Pillar Tabs */}
            <div className="mb-8 border-b border-white/10 pb-4">
              <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                {(Object.keys(pillars) as Array<keyof typeof pillars>).map((pillarKey) => (
                  <button
                    key={pillarKey}
                    onClick={() => setActivePillar(pillarKey)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-display tracking-wider font-semibold uppercase transition-all duration-300 cursor-pointer ${
                      activePillar === pillarKey
                        ? 'bg-white/10 text-cinematic-orange border border-cinematic-orange/20'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {pillars[pillarKey].icon}
                    {pillars[pillarKey].title}
                  </button>
                ))}
              </div>
              <div className="min-h-[110px]">
                <p className="text-sm text-white/70 leading-relaxed mb-2 transition-all duration-300">
                  {pillars[activePillar].content}
                </p>
                <p className="text-xs italic text-cinematic-orange font-light">
                  {pillars[activePillar].quote}
                </p>
              </div>
            </div>

            {/* Metrics cards */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10">
              <div>
                <p className="text-3xl md:text-4xl font-display font-extrabold text-white">90+</p>
                <p className="font-display text-[9px] md:text-[10px] text-white/50 tracking-widest uppercase mt-1">
                  Days to Impact
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-extrabold text-white">500+</p>
                <p className="font-display text-[9px] md:text-[10px] text-white/50 tracking-widest uppercase mt-1">
                  Creations Delivered
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-extrabold text-white">94%</p>
                <p className="font-display text-[9px] md:text-[10px] text-white/50 tracking-widest uppercase mt-1">
                  Retention Lift
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
