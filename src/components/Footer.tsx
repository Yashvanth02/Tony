import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [subbed, setSubbed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubbed(true);
      setEmail('');
    }
  };

  const socials = [
    { label: 'Instagram', href: 'https://www.instagram.com/reelio_official/' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'Dribbble', href: '#' }
  ];

  return (
    <footer className="bg-[#050505] py-20 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Newsletter & Info Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5 mb-12">
          
          {/* Logo & Manifesto */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-display text-2xl font-extrabold text-white tracking-tighter">
              REELIO
            </h3>
            <p className="text-xs md:text-sm text-white/50 font-light leading-relaxed max-w-sm">
              We operate at the nexus of cinema and conversion. Making sure every frame captures attention, builds prestige, and scales revenue loops.
            </p>
          </div>

          {/* Interactive footer micro-feature */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {subbed ? (
              <div className="bg-white/3 border border-white/5 rounded-2xl p-6 flex items-center gap-4 max-w-md">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Subscribed Successfully</p>
                  <p className="text-[10px] text-white/45">You're locked into Benn's private newsletter pool.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-md w-full">
                <label className="block text-[9px] font-display font-bold text-white/45 tracking-widest uppercase mb-3">
                  STORYBOARDING SECRETS INBOX FEED
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="e.g. director@cinema.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/3 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-xs text-white focus:outline-none focus:border-cinematic-orange transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-cinematic-orange hover:bg-cinematic-orange/90 text-white rounded-lg transition-colors cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Lower footer row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Branding */}
          <div className="font-display text-2xl font-black text-white tracking-tighter">
            REELIO
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href !== '#' ? '_blank' : undefined}
                rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                className="font-display text-[10px] md:text-xs font-bold text-white/45 tracking-widest uppercase hover:text-cinematic-orange transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-display text-[10px] md:text-xs text-white/45 tracking-wider">
            © {new Date().getFullYear()} Reelio. Crafted for Excellence.
          </p>
        </div>

      </div>
    </footer>
  );
}
