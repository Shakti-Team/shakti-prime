import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  ShieldAlert,
  Mic,
  Radio,
  Navigation,
  PhoneCall,
  MapPin,
  Battery,
  Wifi,
  Users,
  Flame
} from 'lucide-react';

export default function HeroAppShowcase({ onOpenVideo }) {
  const [activeTab, setActiveTab] = useState('sos'); // 'sos' | 'voice' | 'telemetry' | 'route'
  const [dbLevel, setDbLevel] = useState(42);
  const [sosFired, setSosFired] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  // Dynamic scroll-driven scale animation hook
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Triggers as soon as top enters 95% of window down to 18%
      const start = windowHeight * 0.95;
      const end = windowHeight * 0.18;
      const current = rect.top;
      
      const rawProgress = (start - current) / (start - end);
      const clamped = Math.min(Math.max(rawProgress, 0), 1);
      
      // Silky smooth cubic ease-out progression curve
      const eased = 1 - Math.pow(1 - clamped, 3);
      setScrollProgress(eased);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic waveform simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setDbLevel(Math.floor(36 + Math.random() * 28));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const handleTestSOS = () => {
    setSosFired(true);
    setTimeout(() => {
      setSosFired(false);
    }, 4500);
  };

  // Starts from a noticeably smaller size (scale 0.65) and expands smoothly to 1.0
  const dynamicScale = 0.65 + scrollProgress * 0.35;
  const dynamicOpacity = 0.65 + scrollProgress * 0.35;
  const dynamicTranslate = Math.max(0, (1 - scrollProgress) * 45);

  return (
    <div ref={containerRef} className="relative mx-auto max-w-6xl w-full">
      
      {/* Outer Scalable Container with Ultra-Smooth Scroll Effect */}
      <div 
        className="relative transition-all duration-300 ease-out origin-center"
        style={{
          transform: `scale(${dynamicScale}) translateY(${dynamicTranslate}px)`,
          opacity: dynamicOpacity
        }}
      >
        
        {/* Floating Video Trigger Pill */}
        <div className="relative z-20 flex justify-center -mb-5">
          <button
            onClick={onOpenVideo}
            className="group flex items-center space-x-2.5 bg-white text-gray-900 hover:text-rose-600 px-6 py-2.5 rounded-full font-bold text-sm shadow-[0_10px_25px_rgb(244,63,94,0.15)] border border-pink-200 hover:border-pink-300 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-rose-600 to-pink-500 text-white flex items-center justify-center shadow-xs">
              <Play className="w-3 h-3 fill-current translate-x-0.5" />
            </div>
            <span className="font-display tracking-tight">Watch Shakti Video Overview</span>
            <span className="text-[11px] bg-rose-50 text-rose-700 px-2 py-0.5 rounded-full font-mono font-bold border border-rose-200/60">2:15 Tour</span>
          </button>
        </div>

        {/* Main Showcase Card Container */}
        <div className="relative rounded-3xl bg-white border border-pink-200/90 shadow-[0_20px_50px_rgba(244,63,94,0.12)] overflow-hidden pt-8 pb-6 px-4 sm:px-8">
          
          {/* Top Control Bar with Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-pink-100 pb-5 mb-6">
            
            {/* Status Label & Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-pink-500 to-rose-600 p-0.5 shadow-sm flex items-center justify-center">
                <img 
                  src="/app_logo.png" 
                  alt="Shakti App" 
                  className="w-full h-full object-cover rounded-[10px] bg-white"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/shield.svg';
                  }}
                />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-bold text-gray-900">Shakti Mobile Active Defense</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>
                <p className="text-[11px] text-gray-500 font-mono">Live WebSocket & SMS Mesh Engine Online</p>
              </div>
            </div>

            {/* Tab Selector */}
            <div className="flex flex-wrap items-center gap-1.5 bg-pink-50/70 p-1.5 rounded-2xl border border-pink-100 text-xs font-bold">
              <button
                onClick={() => setActiveTab('sos')}
                className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl transition-all ${
                  activeTab === 'sos'
                    ? 'bg-rose-600 text-white shadow-sm shadow-rose-600/30'
                    : 'text-gray-600 hover:text-rose-600 hover:bg-white/60'
                }`}
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>One-Tap SOS</span>
              </button>

              <button
                onClick={() => setActiveTab('voice')}
                className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl transition-all ${
                  activeTab === 'voice'
                    ? 'bg-rose-600 text-white shadow-sm shadow-rose-600/30'
                    : 'text-gray-600 hover:text-rose-600 hover:bg-white/60'
                }`}
              >
                <Mic className="w-3.5 h-3.5" />
                <span>Voice Keyphrase</span>
              </button>

              <button
                onClick={() => setActiveTab('telemetry')}
                className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl transition-all ${
                  activeTab === 'telemetry'
                    ? 'bg-rose-600 text-white shadow-sm shadow-rose-600/30'
                    : 'text-gray-600 hover:text-rose-600 hover:bg-white/60'
                }`}
              >
                <Radio className="w-3.5 h-3.5" />
                <span>Guardian Mesh</span>
              </button>

              <button
                onClick={() => setActiveTab('route')}
                className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl transition-all ${
                  activeTab === 'route'
                    ? 'bg-rose-600 text-white shadow-sm shadow-rose-600/30'
                    : 'text-gray-600 hover:text-rose-600 hover:bg-white/60'
                }`}
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Safe Corridor</span>
              </button>
            </div>

          </div>

          {/* Dynamic Interactive App Interface Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: Feature Deep Dive Card */}
            <div className="lg:col-span-5 space-y-4 text-left">
              
              {activeTab === 'sos' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold text-rose-700">
                    <Flame className="w-3.5 h-3.5 text-rose-600" />
                    <span>Sub-2 Second Emergency Dispatch</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Instant One-Tap & Hardware Triple-Click Trigger
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    In distress, tap the SOS button or press your phone’s power button 3 times. Shakti instantly broadcasts live encrypted GPS coordinates, starts continuous audio recording, and alerts police & verified guardians simultaneously.
                  </p>

                  <div className="bg-rose-50/60 rounded-2xl p-4 border border-rose-100 space-y-2 text-xs">
                    <div className="flex items-center justify-between font-semibold text-gray-800">
                      <span>Emergency Relay Status:</span>
                      <span className="text-rose-600 font-bold">112 Police Gateway Ready</span>
                    </div>
                    <div className="flex items-center justify-between font-semibold text-gray-800">
                      <span>Offline SMS Fallback:</span>
                      <span className="text-emerald-600 font-bold">Armed (Zero Data Needed)</span>
                    </div>
                  </div>

                  <button
                    onClick={handleTestSOS}
                    className={`w-full py-3.5 rounded-2xl font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2 ${
                      sosFired 
                        ? 'bg-emerald-600 text-white animate-pulse'
                        : 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-600/25 hover:scale-[1.02]'
                    }`}
                  >
                    <ShieldAlert className="w-4 h-4" />
                    <span>{sosFired ? 'SOS Triggered! Live Beacon Sent to 3 Guardians' : 'Simulate Instant SOS Trigger'}</span>
                  </button>
                </div>
              )}

              {activeTab === 'voice' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-xs font-bold text-pink-700">
                    <Mic className="w-3.5 h-3.5 text-pink-600" />
                    <span>Hands-Free Acoustic Sentinel</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    AI Voice Keyword Distress Trigger
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Locked phone in your bag or pocket? Simply say your custom emergency phrase (e.g. <span className="font-semibold text-rose-600">"Help Shakti"</span> or <span className="font-semibold text-rose-600 font-hindi">"Bachao"</span>). On-device acoustic AI identifies distress pitch and triggers silent alerts without unlocking the screen.
                  </p>

                  <div className="bg-pink-50/50 rounded-2xl p-4 border border-pink-100 space-y-2 text-xs">
                    <div className="flex items-center justify-between font-semibold text-gray-800">
                      <span>Acoustic Sensitivity:</span>
                      <span className="text-pink-600 font-bold">{dbLevel} dB (Optimal)</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      {[40, 65, 80, 50, 95, 70, 30, 85, 60, 45, 90, 55, 75, 40].map((h, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-gradient-to-t from-pink-400 to-rose-600 rounded-full transition-all duration-300"
                          style={{ height: `${(h * dbLevel) / 100}px` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'telemetry' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
                    <Radio className="w-3.5 h-3.5 text-blue-600" />
                    <span>Real-Time Multi-Guardian Sync</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Parallel Guardian Mesh & Battery Telemetry
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Guardians and family members receive continuous updates on device battery percentage, live moving speed, safe zone status, and emergency sirens with 24ms ultra-low latency.
                  </p>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="font-semibold text-gray-800">Mom & Dad (Primary Circle)</span>
                      <span className="text-emerald-600 font-bold flex items-center space-x-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span>Connected (98% Batt)</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="font-semibold text-gray-800">College Campus Peer Guard</span>
                      <span className="text-blue-600 font-bold">4 Peers in 500m</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'route' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700">
                    <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                    <span>AI Safe Route Escort</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Corridor Geo-Fencing & Deviation Alert
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Travelling late in a cab or walking through isolated areas? Shakti locks onto your scheduled transit corridor. If your cab deviates from the route or stops unexpectedly for &gt;2 minutes, automated check-ins trigger immediately.
                  </p>

                  <div className="bg-emerald-50/60 rounded-2xl p-3.5 border border-emerald-100 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between font-semibold text-gray-800">
                      <span>Route Safety Index:</span>
                      <span className="text-emerald-700 font-bold">98/100 (Well-Lit & Monitored)</span>
                    </div>
                    <div className="flex items-center justify-between font-semibold text-gray-800">
                      <span>Auto Anomaly Check-in:</span>
                      <span className="text-gray-600">Active (120s timer)</span>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Realistic 3D Floating Phone Mockup UI */}
            <div className="lg:col-span-7 flex justify-center">
              
              <div className="animate-float">
              <div className="animate-rotate3d relative w-full max-w-[340px] sm:max-w-[360px] bg-gray-950 rounded-[44px] p-3.5 shadow-2xl border-4 border-gray-900 shadow-rose-500/15">
                
                {/* Phone Speaker / Dynamic Island Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30 flex items-center justify-between px-3">
                  <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 animate-pulse"></div>
                </div>

                {/* Phone Screen */}
                <div className="relative rounded-[36px] bg-gradient-to-b from-rose-50 via-white to-pink-50/80 overflow-hidden border border-pink-100 h-[580px] flex flex-col justify-between p-4 pt-10 text-gray-900">
                  
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-pink-100">
                    <div className="flex items-center space-x-2">
                      <img 
                        src="/app_logo.png" 
                        alt="Shakti App" 
                        className="w-7 h-7 rounded-lg object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/shield.svg';
                        }}
                      />
                      <div>
                        <div className="text-xs font-bold text-gray-900">Shakti Mobile</div>
                        <div className="text-[10px] text-emerald-600 font-semibold flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          <span>AI Protection Active</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1.5 text-[10px] font-mono text-gray-500">
                      <Wifi className="w-3 h-3 text-emerald-600" />
                      <span>5G</span>
                      <Battery className="w-3 h-3 text-emerald-600 ml-1" />
                      <span>94%</span>
                    </div>
                  </div>

                  {/* Simulated Live Map / Route Card */}
                  <div className="relative rounded-2xl bg-white border border-pink-100 p-3 shadow-sm space-y-2 overflow-hidden">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-gray-800 flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-rose-600" />
                        <span>Cyber Hub ➔ MG Road Corridor</span>
                      </span>
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">Safe Route</span>
                    </div>
                    
                    {/* Visual simulated path */}
                    <div className="relative h-20 bg-pink-50/60 rounded-xl overflow-hidden border border-pink-100 flex items-center justify-center">
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:12px_12px]"></div>
                      <div className="relative flex items-center space-x-8 z-10">
                        <div className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px] font-bold shadow-sm">
                          You
                        </div>
                        <div className="w-16 h-1 bg-gradient-to-r from-rose-500 via-pink-400 to-emerald-500 rounded-full animate-pulse"></div>
                        <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold shadow-sm">
                          Home
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-gray-500">
                      <span>Speed: 32 km/h</span>
                      <span>ETA: 14 mins</span>
                      <span className="text-rose-600 font-semibold">Deviations: 0</span>
                    </div>
                  </div>

                  {/* Center Big SOS Push Button */}
                  <div className="flex flex-col items-center justify-center my-auto py-2">
                    <button
                      onClick={handleTestSOS}
                      className={`relative w-28 h-28 rounded-full flex flex-col items-center justify-center text-white font-extrabold shadow-2xl transition-all active:scale-95 ${
                        sosFired 
                          ? 'bg-gradient-to-tr from-emerald-600 to-teal-500 shadow-emerald-500/50 scale-105'
                          : 'bg-gradient-to-tr from-rose-600 via-pink-600 to-rose-700 shadow-rose-600/40 hover:scale-105'
                      }`}
                    >
                      <span className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping"></span>
                      <ShieldAlert className="w-8 h-8 mb-1" />
                      <span className="text-sm tracking-wider">{sosFired ? 'ALERTED' : 'SOS'}</span>
                      <span className="text-[9px] font-medium text-pink-100">{sosFired ? 'Responders Notified' : 'Tap or 3x Power'}</span>
                    </button>
                    <p className="text-[11px] text-gray-500 mt-2 font-medium text-center">
                      {sosFired ? 'Dispatched GPS to Police & 3 Guardians' : 'Hold 1.5s for Stealth Silent Alarm'}
                    </p>
                  </div>

                  {/* Bottom Quick Feature Dock */}
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold text-gray-700 pt-2 border-t border-pink-100">
                    <div className="p-2 bg-white rounded-xl border border-pink-100/80 shadow-xs flex flex-col items-center">
                      <PhoneCall className="w-4 h-4 text-rose-600 mb-1" />
                      <span>Fake Call</span>
                    </div>
                    <div className="p-2 bg-white rounded-xl border border-pink-100/80 shadow-xs flex flex-col items-center">
                      <Mic className="w-4 h-4 text-pink-600 mb-1" />
                      <span>Voice Sentinel</span>
                    </div>
                    <div className="p-2 bg-white rounded-xl border border-pink-100/80 shadow-xs flex flex-col items-center">
                      <Users className="w-4 h-4 text-blue-600 mb-1" />
                      <span>Guardian Live</span>
                    </div>
                  </div>

                </div>

              </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
