import React from 'react';
import { 
  Mic, 
  UserCheck, 
  Users, 
  Award, 
  CheckCircle2,
  ShieldAlert,
  MapPin,
  MessageSquare,
  Activity,
  Star
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
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
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
        <span className="text-[10px] font-bold tracking-wider uppercase">Shakti</span>
      </div>
    </div>
  );
}

export default function AntigravityProductShowcase() {
  return (
    <div id="shakti-features" className="relative z-10 w-full py-16 space-y-28 sm:space-y-36">
      
      {/* SECTION 1: Giant Manifesto Typography (Exact Match to Reference Screenshot 1) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-normal text-gray-950 tracking-tight leading-[1.14] font-sans">
            Shakti is our women safety and autonomous emergency response platform, allowing anyone to feel protected in the AI-first era.
            <span className="inline-block w-[3px] h-[0.9em] ml-2 align-middle bg-rose-500 animate-pulse rounded-full"></span>
          </h2>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          FEATURE 1 · Voice Control & AI Voice Sentinel
          Layout: Clean Text Left · Static Phone Right
      ─────────────────────────────────────────────────────────── */}
      <section id="voice-sentinel" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text (Clean, no extra pill badge, no download button) */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-950 tracking-tight font-display">
              Voice Control & Sentinel
            </h3>
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              Talk directly with Shakti's voice AI assistant or let acoustic listeners operate silently in the background. Speak <span className="font-semibold text-rose-600">"Help Shakti"</span> or <span className="font-semibold text-rose-600">"Bachao"</span> to trigger sub-2s emergency dispatch, even when your phone is locked inside your bag.
            </p>
            <div className="space-y-2.5 pt-2 text-xs sm:text-sm font-medium text-gray-700">
              {['On-device voice recognition (triggers offline without data)', 'Acoustic distress pitch & scream frequency detection', 'Sub-2 second emergency dispatch to police & guardians'].map((pt, i) => (
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
              <div className="flex-1 bg-gradient-to-b from-rose-50/50 via-white to-pink-50/40 p-4 pt-10 flex flex-col justify-between text-gray-900">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                  <div className="flex items-center space-x-1.5">
                    <Mic className="w-3.5 h-3.5 text-rose-600" />
                    <span className="text-xs font-semibold">Voice Sentinel</span>
                  </div>
                  <span className="text-[10px] bg-rose-50 text-rose-700 font-semibold px-2 py-0.5 rounded-full border border-rose-200/60">AI Listening</span>
                </div>

                {/* Waveform */}
                <div className="bg-white rounded-2xl p-3 border border-gray-100 space-y-2 text-center shadow-xs">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Listening: "Help Shakti"</span>
                  <div className="flex items-center justify-center space-x-1 h-10">
                    {[40, 70, 95, 60, 100, 85, 45, 90, 75, 50].map((h, i) => (
                      <div key={i} className="w-1.5 bg-gradient-to-t from-rose-400 to-pink-500 rounded-full" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                  <div className="text-[10px] font-semibold text-rose-600 flex items-center justify-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 inline-block"></span>
                    <span>Keyphrase → SOS Dispatching</span>
                  </div>
                </div>

                {/* Center Emblem */}
                <CenterEmblem icon={ShieldAlert} />

                {/* Footer */}
                <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100 text-[10px] text-gray-600 font-medium flex items-center justify-between">
                  <span>256-bit Encrypted Audio Vault</span>
                  <span className="text-emerald-600 font-semibold">Armed</span>
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
              Connect with ID-verified women, campus peers, and nearby safe havens. Coordinate walk-together group commutes, stay informed with neighborhood safety alerts, and chat in a 100% verified space.
            </p>
            <div className="space-y-2.5 pt-2 text-xs sm:text-sm font-medium text-gray-700">
              {['Aadhaar & ID-verified women safety community circles', 'Walk-with-me group commute organizer', 'Real-time neighborhood safety alerts & map pins'].map((pt, i) => (
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
                    <span className="text-xs font-semibold">Delhi Women Hub</span>
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
                    <p className="text-[11px] text-emerald-950 font-medium">I'm at Exit 2! Shakti Corridor Active ✓</p>
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
              Empower yourself every single day. Build safe local friendships, participate in women empowerment workshops, complete self-defense modules, and track your personal safety index.
            </p>
            <div className="space-y-2.5 pt-2 text-xs sm:text-sm font-medium text-gray-700">
              {['Interactive self-defense & crisis management courses', 'Personal Safety Readiness Score & daily check-ins', 'Verified local sisterhood circles & confidence workshops'].map((pt, i) => (
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
