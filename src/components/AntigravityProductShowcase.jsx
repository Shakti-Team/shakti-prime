import React from 'react';
import { 
  Mic, 
  UserCheck, 
  Users, 
  Award, 
  Sparkles, 
  Download,
  CheckCircle2,
  ShieldAlert,
  MapPin,
  MessageSquare,
  Activity,
  Star
} from 'lucide-react';

// Reusable 3D Floating Phone Shell (No background box - transparent on page)
function PhoneShell({ accentColor = 'rose', dotColor = 'bg-rose-500', children }) {
  return (
    <div className="animate-float">
      {/* Soft floating under-shadow */}
      <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 w-52 h-8 bg-${accentColor}-950/10 blur-2xl rounded-full pointer-events-none`}></div>

      {/* Phone body - transparent bezel */}
      <div className={`animate-rotate3d relative bg-gray-950 rounded-[44px] p-3 border-4 border-gray-800 shadow-[0_30px_80px_rgba(0,0,0,0.28)] shadow-${accentColor}-500/10`}>
        
        {/* Dynamic Island */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30 flex items-center justify-between px-3">
          <div className="w-2 h-2 rounded-full bg-gray-800"></div>
          <div className={`w-2.5 h-2.5 rounded-full ${dotColor} animate-pulse`}></div>
        </div>

        {/* Screen content area */}
        <div className="relative rounded-[36px] overflow-hidden h-[500px] flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}

// Central 3D Spinning Icon Badge
function Spinning3DIcon({ icon: Icon, color }) {
  return (
    <div className="flex flex-col items-center justify-center py-4 my-auto">
      <div className={`relative w-28 h-28 rounded-full bg-gradient-to-tr from-${color}-600 to-${color}-400 text-white flex flex-col items-center justify-center shadow-2xl`}>
        <div className="animate-icon-pendulum flex flex-col items-center justify-center">
          <Icon className="w-9 h-9 mb-1 drop-shadow-lg" />
          <span className="text-[10px] font-extrabold tracking-widest uppercase">Shakti</span>
        </div>
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></span>
        <span className="absolute inset-[-8px] rounded-full border border-white/10 animate-ping" style={{animationDelay: '0.5s'}}></span>
      </div>
    </div>
  );
}

export default function AntigravityProductShowcase({ onOpenDownload }) {
  return (
    <div id="shakti-features" className="relative z-10 w-full py-16 space-y-32 sm:space-y-44">
      
      {/* Manifesto Headline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold text-rose-700 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Autonomous Safety Platform</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-medium text-gray-950 tracking-tight leading-[1.15] font-sans">
          Built for real-world confidence—empowering women, parents, and verified communities.
        </h2>
      </section>

      {/* ───────────────────────────────────────────────────────────
          FEATURE 1 · Voice Control & AI Voice Sentinel
          Layout: Text Left · Transparent 3D Phone Right
      ─────────────────────────────────────────────────────────── */}
      <section id="voice-sentinel" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-xs font-bold text-pink-700">
              <Mic className="w-3.5 h-3.5 text-pink-600" />
              <span>Voice Security</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight font-display">
              Voice Control & Sentinel
            </h3>
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              Talk directly with Shakti's voice AI assistant or let acoustic listeners operate silently in the background. Speak <span className="font-semibold text-rose-600">"Help Shakti"</span> or <span className="font-semibold text-rose-600">"Bachao"</span> to trigger sub-2s emergency dispatch, even when your phone is locked inside your bag.
            </p>
            <div className="space-y-2.5 pt-1 text-xs sm:text-sm font-semibold text-gray-800">
              {['On-device voice recognition (triggers offline without data)', 'Acoustic distress pitch & scream frequency detection', 'Sub-2 second emergency dispatch to police & guardians'].map((pt, i) => (
                <div key={i} className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
            <div className="pt-3">
              <button onClick={onOpenDownload} className="bg-gray-950 hover:bg-black text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-md hover:scale-105 transition-all flex items-center space-x-2">
                <Download className="w-4 h-4 text-gray-300" />
                <span>Download Shakti App</span>
              </button>
            </div>
          </div>

          {/* Right – Transparent 3D floating phone, NO background box */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[300px] sm:max-w-[320px]">
              <PhoneShell accentColor="rose" dotColor="bg-rose-500">
                {/* Screen background */}
                <div className="flex-1 bg-gradient-to-b from-rose-50 via-white to-pink-50 p-4 pt-10 flex flex-col justify-between text-gray-900">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-pink-100 pb-2.5">
                    <div className="flex items-center space-x-1.5">
                      <Mic className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
                      <span className="text-xs font-bold">Voice Sentinel</span>
                    </div>
                    <span className="text-[10px] bg-rose-100 text-rose-700 font-bold px-2 py-0.5 rounded-full">AI Listening</span>
                  </div>

                  {/* Waveform */}
                  <div className="bg-white rounded-2xl p-3 border border-pink-100 space-y-2 text-center">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Listening: "Help Shakti"</span>
                    <div className="flex items-center justify-center space-x-1 h-10">
                      {[40, 70, 95, 60, 100, 85, 45, 90, 75, 50].map((h, i) => (
                        <div key={i} className="w-1.5 bg-gradient-to-t from-pink-400 to-rose-600 rounded-full animate-pulse" style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }}></div>
                      ))}
                    </div>
                    <div className="text-[10px] font-bold text-rose-600 flex items-center justify-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping inline-block"></span>
                      <span>Keyphrase → SOS Dispatching</span>
                    </div>
                  </div>

                  {/* 3D Rotating Shakti Icon */}
                  <Spinning3DIcon icon={ShieldAlert} color="rose" />

                  {/* Footer */}
                  <div className="p-2.5 bg-rose-50/70 rounded-xl border border-rose-100 text-[10px] text-gray-700 font-semibold flex items-center justify-between">
                    <span>256-bit Encrypted Audio Vault</span>
                    <span className="text-emerald-600 font-bold">Armed</span>
                  </div>

                </div>
              </PhoneShell>
            </div>
          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          FEATURE 2 · Parenting Rules & Student Safety
          Layout: Transparent 3D Phone Left · Text Right (Shuffled)
      ─────────────────────────────────────────────────────────── */}
      <section id="parenting-suite" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left – Transparent 3D Floating Phone */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[300px] sm:max-w-[320px]">
              <PhoneShell accentColor="blue" dotColor="bg-blue-500">
                <div className="flex-1 bg-gradient-to-b from-blue-50 via-white to-sky-50 p-4 pt-10 flex flex-col justify-between text-gray-900">
                  
                  <div className="flex items-center justify-between border-b border-blue-100 pb-2.5">
                    <div className="flex items-center space-x-1.5">
                      <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                      <span className="text-xs font-bold">Parent Dashboard</span>
                    </div>
                    <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded-full">Live Sync</span>
                  </div>

                  <div className="bg-white rounded-2xl p-3 border border-blue-100 space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold text-gray-900">
                      <span>Ananya (College)</span>
                      <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full text-[10px]">In Safe Zone</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-gray-500 font-mono">
                      <span>Battery: 92%</span><span>Speed: 0 km/h</span>
                    </div>
                  </div>

                  {/* Live Map */}
                  <div className="relative h-24 bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:10px_10px]"></div>
                    <div className="flex flex-col items-center z-10">
                      <MapPin className="w-5 h-5 text-blue-600 animate-bounce" />
                      <span className="text-[10px] font-bold text-blue-900 bg-white/90 px-2 py-0.5 rounded-full mt-1">Campus Library</span>
                    </div>
                  </div>

                  {/* 3D Rotating icon */}
                  <Spinning3DIcon icon={UserCheck} color="blue" />

                </div>
              </PhoneShell>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 space-y-5 text-left order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
              <UserCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Parent Control</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight font-display">
              Parenting Rules & Student Safety
            </h3>
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              Parents get full real-time visibility to monitor student and child safety during travel. Set safe geofenced corridors, receive automated arrival updates, and monitor device telemetry directly from the Parent Dashboard.
            </p>
            <div className="space-y-2.5 pt-1 text-xs sm:text-sm font-semibold text-gray-800">
              {['Live student GPS location & Safe Corridor Geofencing', 'Real-time battery percentage & network telemetry sync', 'Curfew anomaly alerts & instant guardian call push'].map((pt, i) => (
                <div key={i} className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
            <div className="pt-3">
              <button onClick={onOpenDownload} className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-md hover:scale-105 transition-all flex items-center space-x-2">
                <Download className="w-4 h-4 text-blue-100" />
                <span>Download Parent App</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          FEATURE 3 · Safe Social Hub & Verified Community
          Layout: Text Left · Transparent 3D Phone Right
      ─────────────────────────────────────────────────────────── */}
      <section id="social-hub" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700">
              <Users className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Network</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight font-display">
              Safe Social Hub
            </h3>
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              Connect with ID-verified women, campus peers, and nearby safe havens. Coordinate walk-together group commutes, stay informed with neighborhood safety alerts, and chat in a 100% verified space.
            </p>
            <div className="space-y-2.5 pt-1 text-xs sm:text-sm font-semibold text-gray-800">
              {['Aadhaar & ID-verified women safety community circles', 'Walk-with-me group commute organizer', 'Real-time neighborhood safety alerts & map pins'].map((pt, i) => (
                <div key={i} className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
            <div className="pt-3">
              <button onClick={onOpenDownload} className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-md hover:scale-105 transition-all flex items-center space-x-2">
                <Download className="w-4 h-4 text-emerald-100" />
                <span>Join Social Hub</span>
              </button>
            </div>
          </div>

          {/* Right – Transparent 3D Floating Phone */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[300px] sm:max-w-[320px]">
              <PhoneShell accentColor="emerald" dotColor="bg-emerald-500">
                <div className="flex-1 bg-gradient-to-b from-emerald-50 via-white to-teal-50 p-4 pt-10 flex flex-col justify-between text-gray-900">
                  
                  <div className="flex items-center justify-between border-b border-emerald-100 pb-2.5">
                    <div className="flex items-center space-x-1.5">
                      <Users className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-xs font-bold">Delhi Women Hub</span>
                    </div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full">100% Verified</span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-2.5 bg-white rounded-xl border border-emerald-100 text-xs space-y-1">
                      <div className="flex items-center justify-between font-bold text-gray-900 text-[11px]">
                        <span>Neha (Verified)</span>
                        <span className="text-[9px] text-gray-400">10:42 PM</span>
                      </div>
                      <p className="text-[11px] text-gray-600">Reaching Metro Station. Anyone walking to Block C?</p>
                    </div>
                    <div className="p-2.5 bg-emerald-100/60 rounded-xl border border-emerald-200 text-xs space-y-1 ml-3">
                      <div className="flex items-center justify-between font-bold text-emerald-900 text-[11px]">
                        <span>Priya (Guardian)</span>
                        <span className="text-[9px] text-emerald-700">10:43 PM</span>
                      </div>
                      <p className="text-[11px] text-emerald-950 font-semibold">I'm at Exit 2! Shakti Corridor Active ✓</p>
                    </div>
                  </div>

                  {/* 3D Rotating Icon */}
                  <Spinning3DIcon icon={Users} color="emerald" />

                  <div className="p-2.5 bg-white rounded-xl border border-emerald-100 flex items-center justify-between text-xs text-gray-400">
                    <span>Ask for walk buddy...</span>
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                  </div>

                </div>
              </PhoneShell>
            </div>
          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          FEATURE 4 · Community, Friends & Self Improvement
          Layout: Transparent 3D Phone Left · Text Right (Shuffled)
      ─────────────────────────────────────────────────────────── */}
      <section id="empowerment-hub" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left – Transparent 3D Floating Phone */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[300px] sm:max-w-[320px]">
              <PhoneShell accentColor="purple" dotColor="bg-purple-500">
                <div className="flex-1 bg-gradient-to-b from-purple-50 via-white to-pink-50 p-4 pt-10 flex flex-col justify-between text-gray-900">
                  
                  <div className="flex items-center justify-between border-b border-purple-100 pb-2.5">
                    <div className="flex items-center space-x-1.5">
                      <Award className="w-3.5 h-3.5 text-purple-600" />
                      <span className="text-xs font-bold">Empowerment Hub</span>
                    </div>
                    <span className="text-[10px] bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded-full">Confidence</span>
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-purple-100 text-center space-y-2">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Personal Safety Index</span>
                    <div className="text-3xl font-extrabold text-purple-600 font-display flex items-center justify-center space-x-1">
                      <Activity className="w-6 h-6 text-purple-600 animate-pulse" />
                      <span>96 / 100</span>
                    </div>
                    <p className="text-[10px] font-bold text-emerald-600">Optimal Readiness</p>
                  </div>

                  {/* 3D Rotating Icon */}
                  <Spinning3DIcon icon={Star} color="purple" />

                  <div className="p-3 bg-purple-50 rounded-xl border border-purple-100 space-y-1">
                    <span className="text-[10px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">Active Module</span>
                    <h4 className="font-bold text-gray-900 text-xs">Tactical Situational Awareness 101</h4>
                    <div className="w-full bg-purple-200 h-1.5 rounded-full mt-1">
                      <div className="bg-purple-600 h-full w-[80%] rounded-full"></div>
                    </div>
                  </div>

                </div>
              </PhoneShell>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 space-y-5 text-left order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700">
              <Award className="w-3.5 h-3.5 text-purple-600" />
              <span>Self Improvement</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight font-display">
              Make Friends & Elevate Yourself
            </h3>
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              Empower yourself every single day. Build safe local friendships, participate in women empowerment workshops, complete self-defense modules, and track your personal safety index.
            </p>
            <div className="space-y-2.5 pt-1 text-xs sm:text-sm font-semibold text-gray-800">
              {['Interactive self-defense & crisis management courses', 'Personal Safety Readiness Score & daily check-ins', 'Verified local sisterhood circles & confidence workshops'].map((pt, i) => (
                <div key={i} className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
            <div className="pt-3">
              <button onClick={onOpenDownload} className="bg-purple-600 hover:bg-purple-700 text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-md hover:scale-105 transition-all flex items-center space-x-2">
                <Download className="w-4 h-4 text-purple-100" />
                <span>Start Self Improvement</span>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
