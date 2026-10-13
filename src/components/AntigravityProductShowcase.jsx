import React from 'react';
import { 
  PhoneCall,
  PhoneIncoming,
  Navigation,
  Shield,
  ShieldCheck,
  Volume2,
  UserCheck, 
  Users, 
  Award, 
  CheckCircle2,
  ShieldAlert,
  MapPin,
  MessageSquare,
  Activity,
  Star,
  Sparkles
} from 'lucide-react';

// Static, Clean Phone Shell without 3D rotation or floating movement
function StaticPhoneShell({ children }) {
  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
      {/* Phone body with clean dark bezel */}
      <div className="relative bg-gray-950 rounded-[44px] p-3.5 border-4 border-gray-900 shadow-xl">
        
        {/* Dynamic Island Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30 flex items-center justify-between px-3">
          <div className="w-2 h-2 rounded-full bg-gray-800"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
        </div>

        {/* Screen content area */}
        <div className="relative rounded-[36px] overflow-hidden h-[490px] flex flex-col bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}

// Clean Center Emblem
function CenterEmblem({ icon: Icon }) {
  return (
    <div className="flex flex-col items-center justify-center py-4 my-auto">
      <div className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-rose-500 to-pink-500 text-white flex flex-col items-center justify-center shadow-lg">
        <Icon className="w-8 h-8 mb-0.5" />
        <span className="text-[10px] font-bold tracking-wider uppercase">SHAKTI ONE</span>
      </div>
    </div>
  );
}

export default function AntigravityProductShowcase() {
  return (
    <div id="shakti-features" className="relative z-10 w-full py-16 space-y-28 sm:space-y-36">
      
      {/* SECTION 1: Giant Manifesto Typography */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-normal text-gray-950 tracking-tight leading-[1.14] font-sans">
            SHAKTI ONE is our universal safety, guardian network & community platform — protecting every citizen, connecting families, and empowering individuals.
            <span className="inline-block w-[3px] h-[0.9em] ml-2 align-middle bg-rose-500 animate-pulse rounded-full"></span>
          </h2>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          FEATURE 1 · AI Guard & Smart Fake Call + Live Tracking
          Layout: Clean Text Left · Static Phone Right
      ─────────────────────────────────────────────────────────── */}
      <section id="fake-call" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-950 tracking-tight font-display">
              AI Guard & Smart Fake Call
            </h3>
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              Walking alone at night or feeling unsafe in a cab? SHAKTI ONE's AI Night Guard triggers realistic incoming calls with interactive human voice conversation so you never appear alone. Simultaneously, AI Journey Tracking watches your route in real-time, alerts on unexpected diversions, and keeps guardians notified.
            </p>
            <div className="space-y-2.5 pt-2 text-xs sm:text-sm font-medium text-gray-700">
              {[
                'Realistic AI incoming call with natural 2-way voice conversation',
                'Live GPS route tracking with automatic anomaly & deviation alerts',
                'Discreet 1-tap emergency dispatch to family & 112 police gateway'
              ].map((pt, i) => (
                <div key={i} className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Clean Static Phone Screen */}
          <div className="lg:col-span-6 flex justify-center">
            <StaticPhoneShell>
              <div className="flex-1 bg-gradient-to-b from-rose-50/40 via-white to-amber-50/30 p-4 pt-10 flex flex-col justify-between text-gray-900">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                  <div className="flex items-center space-x-1.5">
                    <PhoneIncoming className="w-3.5 h-3.5 text-rose-600" />
                    <span className="text-xs font-semibold">AI Night Guard</span>
                  </div>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded-full border border-emerald-200/60 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Call Connected (01:24)</span>
                  </span>
                </div>

                {/* Call Simulation Card */}
                <div className="bg-white rounded-2xl p-3 border border-gray-100 space-y-2 shadow-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-amber-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                        P
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-bold text-gray-950">Papa (Dad)</div>
                        <div className="text-[10px] text-gray-500">SHAKTI ONE AI Voice Companion</div>
                      </div>
                    </div>
                    <Volume2 className="w-4 h-4 text-rose-600 animate-pulse" />
                  </div>

                  {/* AI Dialogue speech bubble */}
                  <div className="bg-rose-50/80 rounded-xl p-2.5 text-[11px] text-gray-700 leading-snug border border-rose-100/60">
                    <span className="font-semibold text-rose-700">AI: </span>
                    "Haan beta, I'm waiting at the main gate. How far is your cab right now?"
                  </div>

                  {/* Voice waveform */}
                  <div className="flex items-center justify-center space-x-1 h-5 pt-0.5">
                    {[35, 65, 90, 50, 100, 75, 45, 80, 60, 30].map((h, i) => (
                      <div key={i} className="w-1 bg-gradient-to-t from-rose-500 to-amber-500 rounded-full" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>

                {/* Live Journey Location Tracker Card */}
                <div className="bg-white rounded-2xl p-3 border border-gray-100 space-y-2 shadow-xs text-left">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-1.5 font-bold text-gray-900">
                      <Navigation className="w-3.5 h-3.5 text-blue-600" />
                      <span>Live Journey Tracking</span>
                    </div>
                    <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-mono font-medium">Safe Route</span>
                  </div>

                  {/* Route visual snippet */}
                  <div className="relative bg-slate-50 rounded-xl p-2.5 border border-slate-100 flex items-center justify-between text-[11px]">
                    <div className="space-y-0.5">
                      <div className="flex items-center space-x-1.5 font-medium text-gray-800">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span>Metro Station → Home</span>
                      </div>
                      <div className="text-[10px] text-gray-500 pl-3.5">
                        ETA 6 min • Speed: 32 km/h
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                        GPS Locked
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100 text-[10px] text-gray-600 font-medium flex items-center justify-between">
                  <span className="flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Route Deviation Guard: Armed</span>
                  </span>
                  <span className="text-rose-600 font-semibold cursor-pointer">Stealth SOS</span>
                </div>

              </div>
            </StaticPhoneShell>
          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          FEATURE 2 · Parenting Rules & Student Safety
          Layout: Clean Text Left · Static Phone Right
      ─────────────────────────────────────────────────────────── */}
      <section id="parenting-suite" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-950 tracking-tight font-display">
              Parenting Rules & Student Safety
            </h3>
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              Parents get full real-time visibility to monitor student and child safety during travel. Set safe geofenced corridors, receive automated arrival updates, and monitor device telemetry directly from the Parent Dashboard.
            </p>
            <div className="space-y-2.5 pt-2 text-xs sm:text-sm font-medium text-gray-700">
              {['Live student GPS location & Safe Corridor Geofencing', 'Real-time battery percentage & network telemetry sync', 'Curfew anomaly alerts & instant guardian call push'].map((pt, i) => (
                <div key={i} className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Clean Static Phone Screen */}
          <div className="lg:col-span-6 flex justify-center">
            <StaticPhoneShell>
              <div className="flex-1 bg-gradient-to-b from-blue-50/40 via-white to-sky-50/30 p-4 pt-10 flex flex-col justify-between text-gray-900">
                
                <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                  <div className="flex items-center space-x-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-xs font-semibold">Parent Dashboard</span>
                  </div>
                  <span className="text-[10px] bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full border border-blue-200/60">Live Sync</span>
                </div>

                <div className="bg-white rounded-2xl p-3 border border-gray-100 space-y-1.5 shadow-xs">
                  <div className="flex items-center justify-between text-xs font-semibold text-gray-900">
                    <span>Ananya (College)</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full text-[10px] font-medium">In Safe Zone</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-gray-500 font-mono">
                    <span>Battery: 92%</span><span>Speed: 0 km/h</span>
                  </div>
                </div>

                {/* Live Map */}
                <div className="relative h-24 bg-blue-50/60 rounded-2xl border border-blue-100 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:10px_10px]"></div>
                  <div className="flex flex-col items-center z-10">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-[10px] font-medium text-blue-900 bg-white/95 px-2 py-0.5 rounded-full mt-1 border border-blue-100">Campus Library</span>
                  </div>
                </div>

                {/* Center Emblem */}
                <CenterEmblem icon={UserCheck} />

              </div>
            </StaticPhoneShell>
          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          FEATURE 3 · Safe Social Hub & Verified Community
          Layout: Clean Text Left · Static Phone Right
      ─────────────────────────────────────────────────────────── */}
      <section id="social-hub" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-950 tracking-tight font-display">
              Safe Social Hub
            </h3>
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              Connect with ID-verified citizens, students, night commuters, and nearby safe havens. Coordinate walk-together group commutes, stay informed with neighborhood safety alerts, and chat in a 100% verified space.
            </p>
            <div className="space-y-2.5 pt-2 text-xs sm:text-sm font-medium text-gray-700">
              {['Aadhaar & ID-verified community safety circles', 'Walk-with-me group commute organizer', 'Real-time neighborhood safety alerts & map pins'].map((pt, i) => (
                <div key={i} className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Clean Static Phone Screen */}
          <div className="lg:col-span-6 flex justify-center">
            <StaticPhoneShell>
              <div className="flex-1 bg-gradient-to-b from-emerald-50/30 via-white to-teal-50/20 p-4 pt-10 flex flex-col justify-between text-gray-900">
                
                <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                  <div className="flex items-center space-x-1.5">
                    <Users className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-xs font-semibold">Delhi Safe Hub</span>
                  </div>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded-full border border-emerald-200/60">100% Verified</span>
                </div>

                <div className="space-y-2">
                  <div className="p-2.5 bg-white rounded-xl border border-gray-100 text-xs space-y-1 shadow-xs">
                    <div className="flex items-center justify-between font-semibold text-gray-900 text-[11px]">
                      <span>Neha (Verified)</span>
                      <span className="text-[9px] text-gray-400">10:42 PM</span>
                    </div>
                    <p className="text-[11px] text-gray-600">Reaching Metro Station. Anyone walking to Block C?</p>
                  </div>
                  <div className="p-2.5 bg-emerald-50/80 rounded-xl border border-emerald-100 text-xs space-y-1 ml-3">
                    <div className="flex items-center justify-between font-semibold text-emerald-900 text-[11px]">
                      <span>Priya (Guardian)</span>
                      <span className="text-[9px] text-emerald-700">10:43 PM</span>
                    </div>
                    <p className="text-[11px] text-emerald-950 font-medium">I'm at Exit 2! SHAKTI ONE Corridor Active ✓</p>
                  </div>
                </div>

                {/* Center Emblem */}
                <CenterEmblem icon={Users} />

                <div className="p-2.5 bg-white rounded-xl border border-gray-100 flex items-center justify-between text-xs text-gray-400 shadow-xs">
                  <span>Ask for walk buddy...</span>
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                </div>

              </div>
            </StaticPhoneShell>
          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          FEATURE 4 · Community, Friends & Self Improvement
          Layout: Clean Text Left · Static Phone Right
      ─────────────────────────────────────────────────────────── */}
      <section id="empowerment-hub" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-950 tracking-tight font-display">
              Make Friends & Elevate Yourself
            </h3>
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              Empower yourself every single day. Build safe local friendships, participate in safety and situational awareness workshops, complete self-defense modules, and track your personal safety index.
            </p>
            <div className="space-y-2.5 pt-2 text-xs sm:text-sm font-medium text-gray-700">
              {['Interactive self-defense & crisis management courses', 'Personal Safety Readiness Score & daily check-ins', 'Verified local community circles & awareness workshops'].map((pt, i) => (
                <div key={i} className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Clean Static Phone Screen */}
          <div className="lg:col-span-6 flex justify-center">
            <StaticPhoneShell>
              <div className="flex-1 bg-gradient-to-b from-purple-50/30 via-white to-pink-50/20 p-4 pt-10 flex flex-col justify-between text-gray-900">
                
                <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                  <div className="flex items-center space-x-1.5">
                    <Award className="w-3.5 h-3.5 text-purple-600" />
                    <span className="text-xs font-semibold">Empowerment Hub</span>
                  </div>
                  <span className="text-[10px] bg-purple-50 text-purple-700 font-semibold px-2 py-0.5 rounded-full border border-purple-200/60">Confidence</span>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-gray-100 text-center space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Personal Safety Index</span>
                  <div className="text-3xl font-extrabold text-purple-600 font-display flex items-center justify-center space-x-1">
                    <Activity className="w-6 h-6 text-purple-600" />
                    <span>96 / 100</span>
                  </div>
                  <p className="text-[10px] font-semibold text-emerald-600">Optimal Readiness</p>
                </div>

                {/* Center Emblem */}
                <CenterEmblem icon={Star} />

                <div className="p-3 bg-purple-50/50 rounded-xl border border-purple-100 space-y-1">
                  <span className="text-[10px] font-semibold text-purple-700 bg-purple-100/70 px-2 py-0.5 rounded">Active Module</span>
                  <h4 className="font-semibold text-gray-900 text-xs">Tactical Situational Awareness 101</h4>
                  <div className="w-full bg-purple-200/80 h-1.5 rounded-full mt-1">
                    <div className="bg-purple-600 h-full w-[80%] rounded-full"></div>
                  </div>
                </div>

              </div>
            </StaticPhoneShell>
          </div>

        </div>
      </section>

    </div>
  );
}
