import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Mic,
  Radio,
  Sparkles,
  Lock,
  Flame,
  Maximize2
} from 'lucide-react';

export default function HeroVideoScrollShowcase({ onOpenVideo }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const [sosFired, setSosFired] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through this section (0 to 1)
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.15;
      const current = rect.top;
      
      const rawProgress = (start - current) / (start - end);
      const clamped = Math.min(Math.max(rawProgress, 0), 1);
      
      // Apply smooth ease-out curve
      const eased = Math.sin((clamped * Math.PI) / 2);
      setScrollProgress(eased);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTestSOS = () => {
    setSosFired(true);
    setTimeout(() => setSosFired(false), 4000);
  };

  // Dynamic Scale and Border Radius based on scroll progress:
  // Starts small (scale ~0.65, borderRadius ~36px) and grows to full big screen (scale 1.0, max-w-6xl)
  const dynamicScale = 0.65 + scrollProgress * 0.35;
  const dynamicOpacity = 0.75 + scrollProgress * 0.25;

  return (
    <div ref={containerRef} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      
      {/* Scroll indicator tag */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-rose-600 bg-pink-50 border border-pink-200/80 px-4 py-1.5 rounded-full shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Scroll to Expand Cinema Video & App Showcase</span>
        </div>
      </div>

      {/* Outer Scalable Showcase Wrapper */}
      <div 
        className="relative mx-auto transition-transform duration-300 ease-out origin-center"
        style={{
          transform: `scale(${dynamicScale}) translateY(${Math.max(0, (1 - scrollProgress) * 30)}px)`,
          opacity: dynamicOpacity,
          maxWidth: `${700 + scrollProgress * 450}px`
        }}
      >
        {/* Glow behind video frame */}
        <div 
          className="absolute -inset-4 bg-gradient-to-r from-rose-500/20 via-pink-400/20 to-rose-600/20 rounded-[40px] blur-2xl transition-opacity duration-500"
          style={{ opacity: 0.3 + scrollProgress * 0.7 }}
        ></div>

        {/* Main Cinema Device Bezel */}
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-gray-950 p-2.5 sm:p-4 border-2 border-gray-800 shadow-2xl overflow-hidden">
          
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-gray-800 mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/90"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/90"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90"></div>
              <span className="text-[11px] font-mono text-gray-400 ml-2">Shakti OS Autonomous Core v2.4</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">24/7 LIVE STREAM</span>
            </div>
          </div>

          {/* Interactive Screen Container */}
          <div className="relative rounded-[22px] sm:rounded-[28px] bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0B0F19] overflow-hidden text-white min-h-[380px] sm:min-h-[500px] flex flex-col justify-between p-4 sm:p-8">
            
            {/* Background Map Grid Graphic */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

            {/* Video Play Overlay Button */}
            <div className="relative z-10 flex flex-col items-center justify-center my-auto py-6 text-center">
              <button
                onClick={onOpenVideo}
                className="group relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-rose-600 to-pink-500 hover:from-rose-500 hover:to-pink-400 text-white flex items-center justify-center shadow-[0_0_50px_rgba(244,63,94,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 mb-4"
              >
                <span className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping"></span>
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
              </button>

              <h4 className="text-lg sm:text-2xl font-extrabold text-white font-display mb-1">
                Watch Shakti in Action (2-Min Demo)
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto mb-4">
                See sub-2s SOS dispatch, on-device voice trigger, and live guardian map telemetry.
              </p>

              {/* Instant SOS Interactive Simulation Button */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handleTestSOS}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center space-x-2 ${
                    sosFired 
                      ? 'bg-emerald-600 text-white shadow-lg animate-pulse'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5 text-rose-400" />
                  <span>{sosFired ? '🚨 Beacon Sent to 3 Guardians!' : 'Test Emergency 1-Tap SOS'}</span>
                </button>

                <button
                  onClick={onOpenVideo}
                  className="px-4 py-2.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shadow-md transition-all flex items-center space-x-1.5"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Fullscreen Video Tour</span>
                </button>
              </div>
            </div>

            {/* Bottom Floating Telemetry Strip */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 bg-black/60 backdrop-blur-md rounded-2xl p-3 border border-gray-800 text-[11px] font-mono">
              <div className="flex items-center space-x-2 text-gray-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Relay: 112 Ready</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mic className="w-3.5 h-3.5 text-pink-400" />
                <span>Voice: "Help Shakti"</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Radio className="w-3.5 h-3.5 text-blue-400" />
                <span>Guardians: 3 Online</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Lock className="w-3.5 h-3.5 text-purple-400" />
                <span>256-bit Encrypted</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
