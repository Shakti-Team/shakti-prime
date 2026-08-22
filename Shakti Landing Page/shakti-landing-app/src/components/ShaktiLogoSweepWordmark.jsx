import React from 'react';

/**
 * ShaktiWordmark
 * Reference: Google Antigravity ultra-clean, giant geometric static typography
 * - Pure, static, razor-sharp black wordmark
 * - Responsive viewport-width typography
 * - Clean spacing, zero distracting animations
 */
export default function ShaktiLogoSweepWordmark() {
  return (
    <div className="relative w-full select-none pt-12 pb-8 sm:pt-16 sm:pb-12 text-center overflow-hidden">
      {/* Giant Static Wordmark matching the reference image */}
      <div className="w-full flex items-center justify-center">
        <h2 
          className="text-[17vw] sm:text-[16vw] md:text-[15vw] lg:text-[14.5vw] font-extrabold tracking-[-0.04em] text-[#111827] leading-[0.88] font-display pointer-events-none select-none transition-colors duration-200"
          style={{ letterSpacing: '-0.045em' }}
        >
          Shakti
        </h2>
      </div>
    </div>
  );
}

