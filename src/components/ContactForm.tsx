import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Instagram, 
  Globe, 
  Send, 
  Sparkles, 
  CheckCircle2,
  DollarSign,
  Linkedin
} from 'lucide-react';

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('video-production');
  const [budget, setBudget] = useState(5000);
  const [brief, setBrief] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setFormSubmitted(true);
  };

  const categories = [
    { label: 'Video Production', id: 'video-production' },
    { label: 'Commercial Ads', id: 'commercial-ads' },
    { label: 'Brand Film', id: 'brand-film' },
    { label: 'Social Strategy', id: 'social-strategy' }
  ];

  return (
    <section id="contact" className="py-24 md:py-36 bg-obsidian relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="glass-panel max-w-5xl mx-auto rounded-3xl p-8 md:p-16 relative overflow-hidden">
          
          {/* Subtle glowing corner */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cinematic-orange/10 blur-[120px]" />

          {/* Contact Section Header */}
          <div className="relative z-10 text-center mb-16">
            <span className="font-display text-xs md:text-sm font-semibold text-cinematic-orange tracking-[0.35em] mb-4 block uppercase">
              GET IN TOUCH
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Start the Project
            </h2>
            <p className="text-sm md:text-base text-white/50 max-w-md mx-auto font-light">
              Ready to reel in your audience? Build your project brief below or reach out directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 relative z-10">
            
            {/* Left 5 Columns: Direct Contact details & Hotlinks */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-12">
              
              {/* Direct channels */}
              <div className="space-y-8">
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cinematic-orange/10 group-hover:border-cinematic-orange/30 transition-all duration-300">
                    <Phone className="w-5 h-5 text-cinematic-orange" />
                  </div>
                  <div>
                    <p className="font-display text-[9px] text-white/40 tracking-widest uppercase">Phone</p>
                    <a href="tel:+916385666442" className="text-white hover:text-cinematic-orange transition-colors font-medium text-sm md:text-base">
                      +91 63856 66442
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cinematic-orange/10 group-hover:border-cinematic-orange/30 transition-all duration-300">
                    <Mail className="w-5 h-5 text-cinematic-orange" />
                  </div>
                  <div>
                    <p className="font-display text-[9px] text-white/40 tracking-widest uppercase">Email</p>
                    <a href="mailto:letstalk@reelio.co.in" className="text-white hover:text-cinematic-orange transition-colors font-medium text-sm md:text-base">
                      letstalk@reelio.co.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cinematic-orange/10 group-hover:border-cinematic-orange/30 transition-all duration-300">
                    <MapPin className="w-5 h-5 text-cinematic-orange" />
                  </div>
                  <div>
                    <p className="font-display text-[9px] text-white/40 tracking-widest uppercase">Location</p>
                    <p className="text-white font-medium text-sm md:text-base">Chennai, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cinematic-orange/10 group-hover:border-cinematic-orange/30 transition-all duration-300">
                    <Globe className="w-5 h-5 text-cinematic-orange" />
                  </div>
                  <div>
                    <p className="font-display text-[9px] text-white/40 tracking-widest uppercase">Website</p>
                    <a
                      href="https://www.reelio.co.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-cinematic-orange transition-colors font-medium text-sm md:text-base"
                    >
                      www.reelio.co.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cinematic-orange/10 group-hover:border-cinematic-orange/30 transition-all duration-300">
                    <Linkedin className="w-5 h-5 text-cinematic-orange" />
                  </div>
                  <div>
                    <p className="font-display text-[9px] text-white/40 tracking-widest uppercase">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/company/reelio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-cinematic-orange transition-colors font-medium text-sm md:text-base"
                    >
                      linkedin.com/company/reelio
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Hotlinks buttons */}
              <div className="flex flex-col gap-3.5 w-full">
                <a
                  href="https://wa.me/916385666442"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl border border-white/10 bg-white/3 flex items-center justify-center gap-3 text-xs md:text-sm font-bold tracking-widest hover:bg-green-500/10 hover:border-green-500/40 text-white/90 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-green-500 fill-green-500/20" />
                  MESSAGE ON WHATSAPP
                </a>

                <a
                  href="https://www.instagram.com/reelio_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl border border-white/10 bg-white/3 flex items-center justify-center gap-3 text-xs md:text-sm font-bold tracking-widest hover:bg-pink-500/10 hover:border-pink-500/40 text-white/90 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <Instagram className="w-4 h-4 text-pink-500" />
                  FOLLOW ON INSTAGRAM
                </a>

                <a
                  href="https://www.reelio.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl border border-white/10 bg-white/3 flex items-center justify-center gap-3 text-xs md:text-sm font-bold tracking-widest hover:bg-blue-400/10 hover:border-blue-400/40 text-white/90 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <Globe className="w-4 h-4 text-blue-400" />
                  VISIT WEBSITE
                </a>

                <a
                  href="https://www.linkedin.com/company/reelio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl border border-white/10 bg-white/3 flex items-center justify-center gap-3 text-xs md:text-sm font-bold tracking-widest hover:bg-sky-500/10 hover:border-sky-500/40 text-white/90 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 text-sky-500" />
                  CONNECT ON LINKEDIN
                </a>
              </div>

            </div>

            {/* Right 7 Columns: Interactive onboarding brief builder */}
            <div className="lg:col-span-7 bg-white/3 border border-white/5 rounded-2xl p-6 md:p-8 relative">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16 h-full">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-xl md:text-2xl font-extrabold text-white mb-2">
                    Project Brief Received!
                  </h4>
                  <p className="text-xs md:text-sm text-white/60 font-light max-w-sm mb-6">
                    Thank you {name}. Benn Tony and the Reelio team will review your scope requirements and reach out to establish a continuous storyboard concept.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setName('');
                      setEmail('');
                      setBrief('');
                    }}
                    className="text-xs font-display font-bold text-cinematic-orange border border-cinematic-orange/20 hover:bg-cinematic-orange/10 px-6 py-2.5 rounded-full transition-all duration-300 cursor-pointer"
                  >
                    BUILD ANOTHER BRIEF
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center gap-2 pb-3 border-b border-white/5">
                    <Sparkles className="w-4 h-4 text-cinematic-orange" />
                    <span className="text-[10px] font-display font-bold text-white/55 tracking-widest uppercase">
                      CINEMATIC BRIEF ESTIMATOR
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] font-display font-bold text-white/45 tracking-widest uppercase mb-2">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Marcus Sterling"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cinematic-orange transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-display font-bold text-white/45 tracking-widest uppercase mb-2">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. marcus@agency.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cinematic-orange transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Categories Radio Tabs */}
                  <div>
                    <label className="block text-[9px] font-display font-bold text-white/45 tracking-widest uppercase mb-2">
                      CREATIVE FOCUS
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setCategory(cat.id)}
                          className={`px-4 py-3 rounded-xl text-left text-xs transition-all border duration-300 flex flex-col justify-between cursor-pointer ${
                            category === cat.id
                              ? 'bg-cinematic-orange/15 border-cinematic-orange/50 text-white font-bold'
                              : 'bg-black/20 border-white/5 text-white/60 hover:border-white/15'
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Range budget slider */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-[9px] font-display font-bold text-white/45 tracking-widest uppercase">
                        TARGET BUDGET
                      </label>
                      <span className="text-xs font-mono font-bold text-cinematic-orange flex items-center">
                        <DollarSign className="w-3.5 h-3.5" />
                        {budget.toLocaleString()} USD
                      </span>
                    </div>
                    <input
                      type="range"
                      min={2000}
                      max={50000}
                      step={2000}
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cinematic-orange"
                    />
                    <div className="flex justify-between text-[9px] text-white/30 font-mono mt-1">
                      <span>$2,000</span>
                      <span>$50,000+</span>
                    </div>
                  </div>

                  {/* Project Message Brief */}
                  <div>
                    <label className="block text-[9px] font-display font-bold text-white/45 tracking-widest uppercase mb-2">
                      BRIEF / VISUAL SCOPE NOTES
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Explain the narrative concept, required runtime, or specific distribution challenges..."
                      value={brief}
                      onChange={(e) => setBrief(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cinematic-orange transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-cinematic-orange text-white text-xs font-display font-bold tracking-widest flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(255,77,49,0.35)] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    SUBMIT BRIEF & SCHEDULE ONBOARDING
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Bottom attribution card */}
          <div className="pt-12 border-t border-white/10 text-center relative z-10">
            <p className="font-display text-sm font-bold text-white tracking-widest mb-1">
              BENN TONY
            </p>
            <p className="text-[10px] text-white/40 tracking-[0.3em] uppercase font-light">
              Founder & Creative Director • Reelio
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
