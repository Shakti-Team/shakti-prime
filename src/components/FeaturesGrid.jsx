import React from 'react';
import { 
  Mic, 
  Radio, 
  MapPin, 
  PhoneCall, 
  Lock, 
  Sparkles,
  ArrowUpRight,
  Bluetooth,
  Volume2
} from 'lucide-react';

export default function FeaturesGrid({ onTestFakeCall }) {

  return (
    <section id="features" className="py-20 sm:py-28 bg-gradient-to-b from-white via-pink-50/20 to-white relative overflow-hidden border-t border-pink-100">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-rose-100/30 via-pink-50/30 to-amber-50/20 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200/80 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Autonomous Safety Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight">
            Engineered with Precision for Rapid Protection
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Every module in Shakti is engineered to eliminate delay when seconds matter most—from hands-free acoustic voice analysis to automated multi-guardian mesh dispatch.
          </p>
        </div>

        {/* Bento Grid: 6 Comprehensive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Shakti Command Center */}
          <div 
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-pink-200/80 shadow-sm hover:shadow-xl hover:border-pink-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-6 group-hover:scale-110 transition-transform">
                <Radio className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-rose-600 mb-1">
                <span>PARALLEL GUARDIAN MESH</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Shakti Command Center
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Manage live location broadcasting, trusted emergency circles, battery telemetry, and safe arrival pings in parallel without draining device resources.
              </p>

              {/* Micro UI Widget */}
              <div className="bg-pink-50/50 rounded-2xl p-4 border border-pink-100 space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between text-gray-700">
                  <span className="flex items-center space-x-1.5 font-sans font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>3 Guardians Synced</span>
                  </span>
                  <span className="text-emerald-600 font-bold">24ms Latency</span>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-rose-500 to-pink-500 h-full w-[94%]"></div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-gray-500">
                  <span>Battery Telemetry Sync</span>
                  <span>98% High Precision</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-pink-100 flex items-center justify-between text-sm font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
              <span>Explore Command Center</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 2: AI Voice Sentinel Agent */}
          <div 
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-pink-200/80 shadow-sm hover:shadow-xl hover:border-pink-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
                <Mic className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-pink-600 mb-1">
                <span>ON-DEVICE ACOUSTIC AI</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Hands-Free Voice SOS
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Trigger emergency protocols without unlocking your device. Custom keyword matching runs privately on-device with zero cloud eavesdropping.
              </p>

              {/* Dynamic Audio Visualizer */}
              <div className="bg-pink-50/50 rounded-2xl p-4 border border-pink-100 space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-600 font-mono">
                  <span className="flex items-center space-x-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-pink-600" />
                    <span>Trigger: "Help Shakti"</span>
                  </span>
                  <span className="text-pink-600 font-bold">Armed</span>
                </div>
                <div className="flex items-center justify-center space-x-1 h-8">
                  {[30, 60, 45, 80, 100, 75, 40, 90, 65, 35, 55, 85, 50, 70].map((val, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-gradient-to-t from-pink-400 to-rose-600 rounded-full transition-all duration-300"
                      style={{ height: `${val}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-pink-100 flex items-center justify-between text-sm font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
              <span>Voice Setup Guide</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3: Safe Route Geo-Corridor */}
          <div 
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-pink-200/80 shadow-sm hover:shadow-xl hover:border-pink-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-emerald-600 mb-1">
                <span>AUTONOMOUS CORRIDOR GAUNTLET</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Safe Route Anomaly Guard
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Active geofencing monitors your late-night cab and walking routes. Automatically escalates alarms if suspicious route divergence or unprompted halts occur.
              </p>

              {/* Geo Corridor Widget */}
              <div className="bg-emerald-50/50 rounded-2xl p-4 border border-emerald-100 space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between text-gray-700">
                  <span>Deviation Detection</span>
                  <span className="text-emerald-600 font-bold">&lt; 30m Sensitivity</span>
                </div>
                <div className="flex items-center justify-between text-gray-700">
                  <span>Transit Route Score</span>
                  <span className="text-emerald-700 font-bold">98/100 Safe</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-pink-100 flex items-center justify-between text-sm font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
              <span>View Route Engine</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 4: Fake Incoming Call Generator */}
          <div 
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-pink-200/80 shadow-sm hover:shadow-xl hover:border-pink-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-amber-600 mb-1">
                <span>TACTICAL ESCAPE ESCORT</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                AI Fake Call Escort
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Feel uneasy in an elevator or cab? Trigger an instant simulated incoming call with realistic voice dialog to politely exit uncomfortable scenarios.
              </p>

              <button
                onClick={onTestFakeCall}
                className="w-full py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 rounded-xl text-xs font-bold transition-colors flex items-center justify-center space-x-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Test Fake Call in Simulator</span>
              </button>
            </div>

            <div className="pt-6 mt-6 border-t border-pink-100 flex items-center justify-between text-sm font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
              <span>Configure Caller ID</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 5: Offline Mesh Network */}
          <div 
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-pink-200/80 shadow-sm hover:shadow-xl hover:border-pink-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <Bluetooth className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-blue-600 mb-1">
                <span>ZERO DATA RESILIENCE</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Offline Bluetooth Mesh SOS
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                No 4G or 5G cellular reception? Shakti relays encrypted distress tokens peer-to-peer via Bluetooth Low Energy mesh nodes until an active gateway is found.
              </p>

              <div className="bg-blue-50/50 rounded-2xl p-3 border border-blue-100 text-xs font-mono text-gray-700 flex items-center justify-between">
                <span>Mesh Hop Radius</span>
                <span className="text-blue-700 font-bold">120m Peer-to-Peer</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-pink-100 flex items-center justify-between text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              <span>Mesh Protocols</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 6: Encrypted Evidence Vault */}
          <div 
            onMouseEnter={() => setHoveredCard(6)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-pink-200/80 shadow-sm hover:shadow-xl hover:border-pink-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-purple-600 mb-1">
                <span>TAMPER-PROOF AUDIT</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Cloud Evidence Vault
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Upon SOS trigger, audio and video recordings are encrypted client-side with AES-256 and synchronized directly to immutable secure cloud storage for legal evidence.
              </p>

              <div className="bg-purple-50/50 rounded-2xl p-3 border border-purple-100 text-xs font-mono text-gray-700 flex items-center justify-between">
                <span>Encryption Standard</span>
                <span className="text-purple-700 font-bold">256-bit AES + E2EE</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-pink-100 flex items-center justify-between text-sm font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
              <span>Security Whitepaper</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
