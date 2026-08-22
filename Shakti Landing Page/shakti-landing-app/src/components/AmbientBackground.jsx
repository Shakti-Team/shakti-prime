import React from 'react';

/**
 * AmbientBackground
 * Ultra-clean light-pink & white modern aesthetic background with soft radial glows
 * Replaces the multi-color particle canvas with a sleek, distraction-free safety theme.
 */
export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#FAFAF9]">
      {/* Top Center Soft Pink Aura */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-rose-200/50 via-pink-100/30 to-transparent blur-3xl rounded-full"></div>
      
      {/* Top Left Rose Glow */}
      <div className="absolute top-20 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-pink-200/35 via-rose-100/25 to-transparent blur-3xl rounded-full"></div>

      {/* Mid Right Warm Glow */}
      <div className="absolute top-[40%] -right-20 w-[600px] h-[600px] bg-gradient-to-tl from-rose-100/40 via-pink-50/30 to-transparent blur-3xl rounded-full"></div>

      {/* Bottom Center Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-pink-100/40 to-transparent blur-3xl rounded-full"></div>

      {/* Subtle Dot Grid for modern tech depth */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#E11D48 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      ></div>
    </div>
  );
}
