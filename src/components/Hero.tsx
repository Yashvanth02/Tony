import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Globe, Phone, Mail, MessageSquare, Sparkles } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
  onViewWorkClick: () => void;
}

export default function Hero({ onContactClick, onViewWorkClick }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedMood, setSelectedMood] = useState<'cinematic' | 'noir' | 'intense'>('cinematic');

  // Interactive mood colors that change the ambient shader's blending
  const moodSettings = {
    cinematic: {
      label: 'Warm Cinematic',
      color1: 'vec3(0.01, 0.01, 0.01)',
      color2: 'vec3(0.12, 0.05, 0.04)', // warm crimson/mahogany undertone
      tag: 'Classic Reelio Aesthetic'
    },
    noir: {
      label: 'Cosmic Noir',
      color1: 'vec3(0.005, 0.005, 0.01)',
      color2: 'vec3(0.04, 0.05, 0.08)', // cool cobalt/slate blue undertone
      tag: 'Sleek Technical Precision'
    },
    intense: {
      label: 'Molten Amber',
      color1: 'vec3(0.02, 0.01, 0.0)',
      color2: 'vec3(0.18, 0.06, 0.02)', // fiery orange-bronze undertone
      tag: 'High Impact Power'
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    let animationFrameId: number;

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Dynamic fragment shader based on selected mood colors
    const getFsSource = (c1: string, c2: string) => `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying vec2 v_texCoord;

      void main() {
        vec2 uv = v_texCoord;
        
        // Dynamic noise centered on mouse influence
        vec2 normMouse = u_mouse / u_resolution;
        float distToMouse = distance(uv, normMouse);
        float mouseGlow = smoothstep(0.4, 0.0, distToMouse) * 0.4;
        
        float noise = sin(uv.x * 2.5 + u_time * 0.15) * cos(uv.y * 2.5 + u_time * 0.15);
        noise += sin(uv.x * 4.0 - u_time * 0.25) * cos(uv.y * 4.0 - u_time * 0.25) * 0.5;
        
        vec3 color1 = ${c1};
        vec3 color2 = ${c2};
        
        vec3 finalColor = mix(color1, color2, noise * 0.5 + 0.5);
        
        // Add subtle mouse-driven glow
        finalColor += vec3(0.9, 0.27, 0.17) * mouseGlow;
        
        // Ambient vignette
        float vignette = length(uv - 0.5);
        finalColor *= 1.0 - vignette * 0.6;
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    let prog = gl.createProgram();
    
    const initShader = () => {
      if (!gl || !prog) return;
      
      const currentMood = moodSettings[selectedMood];
      const fs = getFsSource(currentMood.color1, currentMood.color2);

      const compileShader = (type: number, src: string) => {
        const s = gl.createShader(type);
        if (!s) return null;
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
      };

      const vsShader = compileShader(gl.VERTEX_SHADER, vs);
      const fsShader = compileShader(gl.FRAGMENT_SHADER, fs);

      if (!vsShader || !fsShader) return;

      // Clean old program if active
      gl.useProgram(null);
      
      prog = gl.createProgram();
      if (!prog) return;
      gl.attachShader(prog, vsShader);
      gl.attachShader(prog, fsShader);
      gl.linkProgram(prog);
      gl.useProgram(prog);

      // Buffer data
      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
      
      const pos = gl.getAttribLocation(prog, 'a_position');
      gl.enableVertexAttribArray(pos);
      gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
    };

    initShader();

    // Resize sync
    const syncSize = () => {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };
    
    syncSize();
    window.addEventListener('resize', syncSize);

    // Mouse tracker
    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = (t: number) => {
      if (!gl || !prog) return;
      gl.viewport(0, 0, canvas.width, canvas.height);
      
      const uTime = gl.getUniformLocation(prog, 'u_time');
      const uRes = gl.getUniformLocation(prog, 'u_resolution');
      const uMouse = gl.getUniformLocation(prog, 'u_mouse');

      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', syncSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [selectedMood]);

  return (
    <section id="hero" className="relative min-h-[92vh] w-full flex flex-col items-center justify-center overflow-hidden bg-black select-none">
      <div className="absolute inset-0 w-full h-full opacity-65 pointer-events-none">
        <canvas ref={canvasRef} className="block w-full h-full" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-[1200px] flex flex-col items-center justify-center pt-28 pb-6 md:pt-24 md:pb-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 mb-5 rounded-full border border-cinematic-orange/30 bg-cinematic-orange/10 px-4 py-2 shadow-[0_0_25px_rgba(255,77,49,0.12)]"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-cinematic-orange shadow-[0_0_10px_rgba(255,77,49,0.7)]" />
          <span className="font-display text-[11px] md:text-sm font-semibold text-cinematic-orange tracking-[0.35em] uppercase">
            FOUNDER • CREATIVE DIRECTOR
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.6rem] font-extrabold text-white mb-3 tracking-[-0.04em] leading-none"
        >
          BENN TONY
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-wrap justify-center items-center gap-3 mb-5"
        >
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] md:text-xs font-display font-semibold uppercase tracking-[0.3em] text-white/80">
            REELIO
          </div>
          <div className="rounded-full border border-cinematic-orange/20 bg-cinematic-orange/10 px-4 py-2 text-[10px] md:text-xs font-display font-semibold uppercase tracking-[0.3em] text-cinematic-orange">
            Creative Studio
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-6 font-sans font-light leading-relaxed tracking-wide"
        >
          I create cinematic brand stories, premium content systems, and launch-ready digital experiences for founders and modern businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="grid gap-3 md:grid-cols-2 max-w-3xl w-full mb-6"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cinematic-orange/20 bg-cinematic-orange/10 text-cinematic-orange">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] font-display font-semibold uppercase tracking-[0.3em] text-white/40">Phone</p>
                <a href="tel:+916385666442" className="text-sm font-medium text-white hover:text-cinematic-orange transition-colors">
                  +91 63856 66442
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cinematic-orange/20 bg-cinematic-orange/10 text-cinematic-orange">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] font-display font-semibold uppercase tracking-[0.3em] text-white/40">Business Email</p>
                <a href="mailto:letstalk@reelio.co.in" className="text-sm font-medium text-white hover:text-cinematic-orange transition-colors">
                  letstalk@reelio.co.in
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-xl">
            <div className="flex flex-col gap-3">
              <a href="https://www.instagram.com/reelio_official/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-white/80 transition-all hover:border-pink-500/40 hover:text-white">
                <Instagram className="h-4 w-4 text-pink-500" />
                Instagram
              </a>
              <a href="https://www.linkedin.com/in/benn-tony-7268542b3/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-white/80 transition-all hover:border-sky-500/40 hover:text-white">
                <Linkedin className="h-4 w-4 text-sky-500" />
                LinkedIn
              </a>
              <a href="https://www.reelio.co.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-white/80 transition-all hover:border-cinematic-orange/40 hover:text-white">
                <Globe className="h-4 w-4 text-cinematic-orange" />
                Website
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
        >
          <a
            href="https://wa.me/916385666442"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-cinematic-orange text-white px-10 py-4 rounded-full font-display text-xs md:text-sm font-bold tracking-widest hover:scale-105 hover:shadow-[0_0_25px_rgba(255,77,49,0.5)] active:scale-95 transition-all duration-300 cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <MessageSquare className="h-4 w-4" />
            WHATSAPP ME
          </a>
          <button
            onClick={onViewWorkClick}
            className="w-full sm:w-auto rounded-full border border-white/20 bg-white/5 px-8 py-4 text-white font-display text-xs md:text-sm font-bold tracking-widest transition-all duration-300 hover:bg-white/10 active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <Sparkles className="h-4 w-4 text-cinematic-orange" />
            VIEW SERVICES
          </button>
        </motion.div>
      </div>
    </section>
  );
}
