import React, { useEffect, useRef } from 'react';
import { ArrowRight, Download, Play, ShieldCheck, HeartHandshake, Film } from 'lucide-react';

export default function DualAudienceSection({ onOpenDownload, onOpenVideo, onNavigateEnterprise }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Swirling circular dot clusters
    const vortices = [
      { x: width * 0.15, y: height * 0.35, radius: 140, dots: 110, speed: 0.003, color: '#F43F5E' },
      { x: width * 0.55, y: height * 0.25, radius: 160, dots: 130, speed: -0.0025, color: '#EC4899' },
      { x: width * 0.88, y: height * 0.3, radius: 150, dots: 120, speed: 0.0028, color: '#3B82F6' },
      { x: width * 0.25, y: height * 0.75, radius: 170, dots: 140, speed: -0.002, color: '#F43F5E' },
      { x: width * 0.7, y: height * 0.8, radius: 180, dots: 150, speed: 0.0022, color: '#8B5CF6' },
    ];

    let mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    });

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      angle += 0.008;

      vortices.forEach((vortex, vIdx) => {
        for (let i = 0; i < vortex.dots; i++) {
          const dotAngle = (i / vortex.dots) * Math.PI * 2 + angle * (vIdx % 2 === 0 ? 1 : -1);
          const rOffset = Math.sin(angle * 2 + i) * 15;
          const currentRadius = vortex.radius + rOffset;

          let px = vortex.x + Math.cos(dotAngle) * currentRadius;
          let py = vortex.y + Math.sin(dotAngle) * currentRadius;

          if (mouse.active) {
            const dx = px - mouse.x;
            const dy = py - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 140 && dist > 0) {
              const force = (1 - dist / 140) * 20;
              px += (dx / dist) * force;
              py += (dy / dist) * force;
            }
          }

          ctx.fillStyle = vortex.color;
          ctx.globalAlpha = 0.45 + Math.sin(i + angle) * 0.35;
          ctx.beginPath();
          ctx.arc(px, py, 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative w-full py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-white via-pink-50/20 to-white border-y border-gray-100">
      
      {/* Background Swirling Particle Vortex Field */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto opacity-70 z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold text-rose-700 mb-3 shadow-2xs">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Built for Women & Guardians</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight font-display">
            Personal Security & Parent Protection in Parallel
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Whether you are a solo traveler needing 1-tap emergency dispatch, or a parent monitoring student safety on campus—Shakti provides total peace of mind.
          </p>
        </div>

        {/* 2 Main Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-stretch mb-16">
          
          {/* Left Column: For Women & Individuals */}
          <div className="flex flex-col justify-between p-8 sm:p-12 rounded-3xl bg-white/80 backdrop-blur-sm border border-pink-200/80 shadow-md hover:shadow-xl transition-all duration-300">
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold text-rose-700 mb-6">
                <span>Free Forever for Individuals</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-gray-950 tracking-tight font-display mb-2">
                For Women & Individuals
              </h3>
              <h4 className="text-xl sm:text-2xl font-medium text-rose-600 mb-4 font-display">
                Feel protected anywhere, 24/7
              </h4>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Instant sub-2s SOS dispatch, acoustic voice keyword trigger ("Help Shakti"), fake call generator, and encrypted audio recording vault whenever you commute or travel solo.
              </p>
            </div>

            <button
              onClick={onOpenDownload}
              className="bg-gray-950 hover:bg-black text-white px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center space-x-2 w-full"
            >
              <Download className="w-4 h-4 text-gray-300" />
              <span>Download App Free</span>
            </button>
          </div>

          {/* Right Column: For Parents & Guardians */}
          <div className="flex flex-col justify-between p-8 sm:p-12 rounded-3xl bg-white/80 backdrop-blur-sm border border-blue-200/80 shadow-md hover:shadow-xl transition-all duration-300">
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-6">
                <span>Guardian & Parent Dashboard</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-gray-950 tracking-tight font-display mb-2">
                For Parents & Guardians
              </h3>
              <h4 className="text-xl sm:text-2xl font-medium text-blue-600 mb-4 font-display">
                Monitor student safety & safe corridors
              </h4>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Parents get access to monitor children’s live GPS coordinates, battery level telemetry, safe campus geofences, automated curfew alerts, and instant emergency override alarms.
              </p>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('parenting-suite');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else if (onNavigateEnterprise) onNavigateEnterprise();
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center space-x-2 w-full"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Explore Parent Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Video Overview Suggestions Banner */}
        <div className="bg-gradient-to-r from-gray-950 via-slate-900 to-gray-950 rounded-3xl p-6 sm:p-8 text-white border border-gray-800 shadow-xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-600 text-white flex items-center justify-center font-bold">
                <Film className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Suggested Product Videos & Ad Showcase</h4>
                <p className="text-xs text-gray-400">Watch live demonstrations of Shakti safety features & parent controls</p>
              </div>
            </div>

            <span className="text-xs font-mono bg-rose-950 text-rose-300 px-3 py-1 rounded-full border border-rose-800">
              3 Video Tours Available
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold">
            
            <button
              onClick={onOpenVideo}
              className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-rose-400 font-mono font-bold">VIDEO TOUR #1</span>
                <Play className="w-4 h-4 text-rose-400 group-hover:scale-125 transition-transform" />
              </div>
              <div className="text-sm font-bold text-white">Shakti Active Defense (2:15)</div>
              <p className="text-gray-400 text-[11px]">Sub-2s SOS, acoustic voice sentinel & SMS mesh overview.</p>
            </button>

            <button
              onClick={onOpenVideo}
              className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-blue-400 font-mono font-bold">VIDEO TOUR #2</span>
                <Play className="w-4 h-4 text-blue-400 group-hover:scale-125 transition-transform" />
              </div>
              <div className="text-sm font-bold text-white">Parent Control & Student Safety</div>
              <p className="text-gray-400 text-[11px]">How parents set geofences & receive live student updates.</p>
            </button>

            <button
              onClick={onOpenVideo}
              className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-emerald-400 font-mono font-bold">VIDEO TOUR #3</span>
                <Play className="w-4 h-4 text-emerald-400 group-hover:scale-125 transition-transform" />
              </div>
              <div className="text-sm font-bold text-white">In-App Brand & Safe Zones</div>
              <p className="text-gray-400 text-[11px]">Verified partner safe havens & geo-notification perks.</p>
            </button>

          </div>
        </div>

      </div>

    </section>
  );
}
