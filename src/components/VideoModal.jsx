import React, { useState, useEffect } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Radio, 
  MapPin, 
  Mic, 
  Camera 
} from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(15);
  const [videoStep, setVideoStep] = useState(1);

  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        const next = prev + 1.2;
        if (next < 25) setVideoStep(1);
        else if (next < 50) setVideoStep(2);
        else if (next < 75) setVideoStep(3);
        else setVideoStep(4);
        return next;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#080C14] rounded-3xl border border-gray-800 shadow-2xl overflow-hidden text-white">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#0B101D]">
          <div className="flex items-center space-x-2.5">
            <div className="w-7 h-7 rounded-lg bg-rose-600 flex items-center justify-center text-white">
              <Play className="w-3.5 h-3.5 fill-current" />
            </div>
            <div>
              <h3 className="text-sm font-bold font-display">Shakti Autonomous Sentinel — Emergency Protocol Walkthrough</h3>
              <p className="text-xs text-gray-400">Live operational demo & background telemetry showcase</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Simulation Canvas / Player Screen */}
        <div className="relative aspect-video bg-[#04060A] overflow-hidden flex items-center justify-center p-6 sm:p-10">
          
          {/* Animated Background HUD Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>

          {/* Dynamic Scene Stage */}
          <div className="relative z-10 w-full max-w-2xl bg-[#0F172A]/90 rounded-2xl border border-gray-700/80 p-6 shadow-2xl space-y-6">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between text-xs font-mono border-b border-gray-800 pb-3">
              <span className="text-rose-400 font-bold flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                <span>STEP {videoStep} OF 4</span>
              </span>
              <span className="text-gray-400">
                {videoStep === 1 && "Hands-free Acoustic Voice Trigger Detection"}
                {videoStep === 2 && "Autonomous GPS Geo-Lock & Route Deviation"}
                {videoStep === 3 && "Parallel Guardian Dispatch & Police Relay (<1.8s)"}
                {videoStep === 4 && "Discreet Background Audio & Video Encrypted Stream"}
              </span>
            </div>

            {/* Visual Screen Animation */}
            {videoStep === 1 && (
              <div className="space-y-3 animate-in fade-in">
                <div className="flex items-center justify-between bg-purple-950/40 border border-purple-800/40 p-4 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Mic className="w-6 h-6 text-purple-400 animate-pulse" />
                    <div>
                      <div className="text-xs font-mono text-purple-300 font-bold">ACOUSTIC MODEL MATCHED</div>
                      <div className="text-sm font-semibold text-white">Trigger Keyword: "Help Shakti" (99.8% Match)</div>
                    </div>
                  </div>
                  <span className="text-xs bg-purple-600 text-white font-mono px-2 py-1 rounded">TRIGGERED</span>
                </div>
                <p className="text-xs text-gray-400 font-mono">
                  &gt; Model executed on-device NPU in 18ms. No audio ever leaves user device without active emergency protocol.
                </p>
              </div>
            )}

            {videoStep === 2 && (
              <div className="space-y-3 animate-in fade-in">
                <div className="flex items-center justify-between bg-emerald-950/40 border border-emerald-800/40 p-4 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-emerald-400 animate-bounce" />
                    <div>
                      <div className="text-xs font-mono text-emerald-300 font-bold">GPS GEOLOCATION LOCKED</div>
                      <div className="text-sm font-semibold text-white">28.6139° N, 77.2090° E • Safe Route Score: 96/100</div>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-600 text-white font-mono px-2 py-1 rounded">ACCURATE ±2m</span>
                </div>
                <p className="text-xs text-gray-400 font-mono">
                  &gt; Real-time coordinates synced with dual OSRM navigation matrix and street illumination analyzer.
                </p>
              </div>
            )}

            {videoStep === 3 && (
              <div className="space-y-3 animate-in fade-in">
                <div className="flex items-center justify-between bg-rose-950/40 border border-rose-800/40 p-4 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Radio className="w-6 h-6 text-rose-400 animate-pulse" />
                    <div>
                      <div className="text-xs font-mono text-rose-300 font-bold">EMERGENCY BROADCAST ACTIVE</div>
                      <div className="text-sm font-semibold text-white">3 Guardians Notified via Live Web Telemetry</div>
                    </div>
                  </div>
                  <span className="text-xs bg-rose-600 text-white font-mono px-2 py-1 rounded">SUB-2s DISPATCH</span>
                </div>
                <p className="text-xs text-gray-400 font-mono">
                  &gt; Police patrol PCR #14 dispatched with direct ETA route mapping.
                </p>
              </div>
            )}

            {videoStep === 4 && (
              <div className="space-y-3 animate-in fade-in">
                <div className="flex items-center justify-between bg-blue-950/40 border border-blue-800/40 p-4 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Camera className="w-6 h-6 text-blue-400 animate-pulse" />
                    <div>
                      <div className="text-xs font-mono text-blue-300 font-bold">STEALTH EVIDENCE RECORDING</div>
                      <div className="text-sm font-semibold text-white">30s Dual Audio/Video Buffering (AES-256 Encrypted)</div>
                    </div>
                  </div>
                  <span className="text-xs bg-blue-600 text-white font-mono px-2 py-1 rounded">RECORDING</span>
                </div>
                <p className="text-xs text-gray-400 font-mono">
                  &gt; Evidence sealed cryptographically for emergency law enforcement chain-of-custody.
                </p>
              </div>
            )}

          </div>

        </div>

        {/* Video Player Bottom Controls */}
        <div className="px-6 py-4 bg-[#0B101D] border-t border-gray-800 flex flex-col space-y-2">
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden cursor-pointer">
            <div 
              className="bg-gradient-to-r from-red-600 via-rose-500 to-amber-400 h-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex items-center justify-between pt-1 text-xs">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>

              <button 
                onClick={() => setIsMuted(!isMuted)}
                className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <span className="font-mono text-gray-400">
                0:{Math.floor(progress * 0.6).toString().padStart(2, '0')} / 1:00
              </span>
            </div>

            <span className="font-mono text-emerald-400 text-xs font-semibold">
              HD 60FPS • Simulated Telemetry
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}
