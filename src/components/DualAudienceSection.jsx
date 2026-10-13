import React, { useEffect, useRef } from 'react';
import { Download, ShieldCheck } from 'lucide-react';

/**
 * DualAudienceSection
 * Replicates Image 1 from Antigravity:
 * - Left: "For individuals / Feel protected anywhere"
 * - Right: "For organizations / Level up your entire team"
 * - Interactive swirling particle vortices canvas background
 */
export default function DualAudienceSection({ onOpenDownload, onNavigateEnterprise }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Swirling circular dot clusters matching Image 1
    const vortices = [
      { x: width * 0.15, y: height * 0.35, radius: 140, dots: 110, speed: 0.003, color: '#3B82F6' },
      { x: width * 0.55, y: height * 0.25, radius: 160, dots: 130, speed: -0.0025, color: '#2563EB' },
      { x: width * 0.88, y: height * 0.3, radius: 150, dots: 120, speed: 0.0028, color: '#1D4ED8' },
      { x: width * 0.25, y: height * 0.75, radius: 170, dots: 140, speed: -0.002, color: '#3B82F6' },
      { x: width * 0.7, y: height * 0.8, radius: 180, dots: 150, speed: 0.0022, color: '#2563EB' },
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

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let angle = 0;

    const render = () => {
      ctx.globalAlpha = 1.0;
      ctx.clearRect(0, 0, width, height);
      angle = (angle + 0.008) % (Math.PI * 2);

      vortices.forEach((vortex, vIdx) => {
        for (let i = 0; i < vortex.dots; i++) {
          const dotAngle = (i / vortex.dots) * Math.PI * 2 + angle * (vIdx % 2 === 0 ? 1 : -1);
          const rOffset = Math.sin(angle * 2 + i) * 15;
          const currentRadius = vortex.radius + rOffset;

          let px = vortex.x + Math.cos(dotAngle) * currentRadius;
          let py = vortex.y + Math.sin(dotAngle) * currentRadius;

          // Mouse warp effect
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
          ctx.globalAlpha = 0.55 + Math.sin(i + angle) * 0.35;
          ctx.beginPath();
          ctx.arc(px, py, 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      ctx.globalAlpha = 1.0;

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative w-full py-20 sm:py-28 overflow-hidden bg-white border-y border-gray-100">
      
      {/* Background Interactive Swirling Particle Vortex Field */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto opacity-75 z-0"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* For Citizens & Guardians Card */}
        <div className="flex flex-col items-center justify-center p-8 sm:p-14 rounded-3xl bg-white/75 backdrop-blur-sm border border-gray-100/80 shadow-xs hover:bg-white/95 transition-all text-center">
          
          {/* Emblem */}
          <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-2xl bg-gray-950 text-white shadow-md">
            <ShieldCheck className="w-7 h-7 text-white" />
          </div>

          {/* Pill Badge */}
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-gray-50 border border-gray-200/80 text-xs font-medium text-gray-700 mb-6 shadow-2xs">
            <span>Universal Protection</span>
          </div>

          {/* Title */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-950 tracking-tight font-display mb-3 leading-tight">
            Chat, Connect & Protect Together
          </h3>
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-normal text-gray-600 tracking-tight font-display mb-8 max-w-2xl">
            Private friend chats, local community channels, live location sharing & autonomous protection for everyone
          </h4>

          {/* Action Pill */}
          <button
            onClick={onOpenDownload}
            className="bg-gray-950 hover:bg-black text-white px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center space-x-2"
          >
            <Download className="w-4 h-4 text-gray-300" />
            <span>Download Free</span>
          </button>

        </div>

      </div>

    </section>
  );
}
