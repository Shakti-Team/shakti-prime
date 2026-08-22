import { 
  Folder, 
  ChevronDown, 
  Mic, 
  GitBranch, 
  Monitor, 
  FileCode, 
  FileText 
} from 'lucide-react';

export default function AntigravityProductShowcase({ onOpenDownload }) {

  return (
    <div className="relative z-10 w-full py-16 space-y-28 sm:space-y-36">
      
      {/* SECTION 1: Giant Manifesto Typography (Exact match to Reference Image 1) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium text-gray-950 tracking-tight leading-[1.14] font-sans">
            Shakti is our women safety and autonomous emergency response platform, allowing anyone to feel protected in the AI-first era.
            <span className="inline-block w-[3px] h-[0.9em] ml-2 align-middle bg-gradient-to-b from-rose-500 to-pink-600 animate-pulse rounded-full"></span>
          </h2>
        </div>
      </section>

      {/* SECTION 2: Shakti 2.0 (Exact match to Reference Image 2) */}
      <section id="shakti-2" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Description */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-950 tracking-tight font-display">
              Shakti 2.0
            </h3>
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              Your command center to manage personal safety and real-time guardian mesh in parallel. Group contacts into Safe Circles, operate across multi-zone geofences, and automate routine safety checks with scheduled beacons.
            </p>
          </div>

          {/* Right: Soft Glowing Container with Floating Command Console Card */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-[36px] bg-gradient-to-br from-blue-50/70 via-rose-50/40 to-amber-50/50 p-6 sm:p-10 flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100/80 overflow-hidden group">
              
              {/* Subtle ambient aura */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.18),transparent_65%)] pointer-events-none"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(244,63,94,0.15),transparent_60%)] pointer-events-none"></div>

              {/* Floating UI Card mimicking Image 2 */}
              <div className="relative z-10 w-full bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-gray-200/90 space-y-4">
                
                {/* Project / Safe Circle Selector */}
                <div className="flex items-center space-x-2 text-xs font-semibold text-gray-700">
                  <Folder className="w-3.5 h-3.5 text-gray-500" />
                  <span>safe-circle-family</span>
                  <ChevronDown className="w-3 h-3 text-gray-400" />
                </div>

                {/* Input Prompt Box */}
                <div className="bg-[#F8F9FA] rounded-xl p-3.5 border border-gray-200/70 space-y-3">
                  <div className="text-xs sm:text-sm text-gray-400 font-normal">
                    Ask anything, @ to mention, / for actions
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    {/* Engine Pill */}
                    <div className="inline-flex items-center space-x-1.5 bg-white px-2.5 py-1 rounded-lg border border-gray-200 shadow-2xs text-[11px] font-medium text-gray-800">
                      <span className="text-rose-600 font-bold">+</span>
                      <span>Shakti Sentinel AI</span>
                      <ChevronDown className="w-3 h-3 text-gray-400" />
                    </div>

                    <div className="w-6 h-6 rounded-full bg-gray-200/80 flex items-center justify-center text-gray-600">
                      <Mic className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Worktree / Guardian Mesh Selector Row */}
                <div className="flex items-center space-x-4 text-xs font-medium text-gray-600 pt-1">
                  <div className="flex items-center space-x-1.5 cursor-pointer hover:text-gray-900">
                    <GitBranch className="w-3.5 h-3.5 text-gray-500" />
                    <span>Guardian Mesh</span>
                    <ChevronDown className="w-3 h-3 text-gray-400" />
                  </div>
                  <div className="flex items-center space-x-1.5 cursor-pointer hover:text-gray-900">
                    <GitBranch className="w-3.5 h-3.5 text-gray-500" />
                    <span>Live Telemetry</span>
                    <ChevronDown className="w-3 h-3 text-gray-400" />
                  </div>
                </div>

                {/* Simulated Dropdown Popover */}
                <div className="w-40 bg-white rounded-xl shadow-lg border border-gray-200/90 p-1.5 space-y-1 text-xs text-gray-700 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="flex items-center space-x-2 px-2.5 py-1.5 rounded-lg bg-gray-50 font-medium text-gray-950">
                    <Monitor className="w-3.5 h-3.5 text-gray-600" />
                    <span>Local Device</span>
                  </div>
                  <div className="flex items-center space-x-2 px-2.5 py-1.5 rounded-lg hover:bg-gray-50 text-gray-600">
                    <GitBranch className="w-3.5 h-3.5 text-rose-500" />
                    <span>Peer Mesh</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: Voice Sentinel AI / IDE (Exact match to Reference Image 3) */}
      <section id="sentinel-ai" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Description & Action Pill */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-950 tracking-tight font-display">
              Voice Sentinel AI
            </h3>
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              The fully-featured, autonomous safety engine. Complete with acoustic distress listener, encrypted evidence recordings, and a deep understanding of your surrounding environment.
            </p>
            <div>
              <button 
                onClick={onOpenDownload}
                className="inline-flex items-center space-x-2 bg-[#F1F3F4] hover:bg-[#E8EAED] text-gray-900 px-6 py-3 rounded-full text-sm font-medium transition-all hover:scale-105 active:scale-95 shadow-2xs"
              >
                <span>Explore Product</span>
              </button>
            </div>
          </div>

          {/* Right: Code Console with Multi-Color Gradient Glow Border */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[620px] rounded-[32px] p-[2px] bg-gradient-to-tr from-rose-400 via-amber-300 to-cyan-400 shadow-[0_20px_50px_rgba(244,63,94,0.12)]">
              
              {/* Inner IDE Window */}
              <div className="bg-white rounded-[30px] overflow-hidden p-4 sm:p-6 text-xs sm:text-sm font-mono text-gray-800 shadow-inner">
                
                {/* IDE Window Tabs */}
                <div className="flex items-center space-x-4 border-b border-gray-100 pb-3 mb-4 text-xs font-sans text-gray-500">
                  <div className="flex items-center space-x-1.5 cursor-pointer hover:text-gray-900">
                    <FileText className="w-3.5 h-3.5 text-gray-400" />
                    <span>EmergencyPlan.md</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-rose-600 font-semibold border-b-2 border-rose-500 pb-1">
                    <FileCode className="w-3.5 h-3.5" />
                    <span>VoiceSentinel.ts 1</span>
                  </div>
                </div>

                {/* Breadcrumb */}
                <div className="text-[11px] text-gray-400 mb-3 font-sans flex items-center space-x-1">
                  <span>shakti</span>
                  <span>&gt;</span>
                  <span>sentinel</span>
                  <span>&gt;</span>
                  <span className="text-gray-700 font-medium">VoiceSentinel.ts</span>
                </div>

                {/* Code Editor Body */}
                <div className="space-y-1.5 leading-relaxed text-[11px] sm:text-xs">
                  <div className="flex space-x-3 text-gray-400">
                    <span className="w-5 select-none text-right text-gray-300">1</span>
                    <span className="text-purple-600 font-semibold">import</span>
                    <span className="text-blue-600">AutonomousRelay</span>
                    <span className="text-purple-600">from</span>
                    <span className="text-rose-600">'@shakti/sentinel'</span>;
                  </div>

                  <div className="flex space-x-3">
                    <span className="w-5 select-none text-right text-gray-300">2</span>
                    <span></span>
                  </div>

                  <div className="flex space-x-3">
                    <span className="w-5 select-none text-right text-gray-300">3</span>
                    <span>
                      <span className="text-purple-600 font-semibold">export default function </span>
                      <span className="text-blue-600 font-semibold">EmergencyDispatcher</span>():
                      <span className="text-amber-600"> SafetyAction</span> &#123;
                    </span>
                  </div>

                  <div className="flex space-x-3">
                    <span className="w-5 select-none text-right text-gray-300">4</span>
                    <span className="pl-4">
                      <span className="text-purple-600 font-semibold">return </span>(
                    </span>
                  </div>

                  <div className="flex space-x-3 bg-rose-50/60 -mx-4 px-4 py-0.5 rounded">
                    <span className="w-5 select-none text-right text-gray-300">5</span>
                    <span className="pl-8 text-gray-800">
                      &lt;<span className="text-rose-600 font-bold">GuardianMesh</span>
                    </span>
                  </div>

                  <div className="flex space-x-3">
                    <span className="w-5 select-none text-right text-gray-300">6</span>
                    <span className="pl-12">
                      <span className="text-red-500">trigger</span>=<span className="text-rose-600">"voice_anomaly_detected"</span>
                    </span>
                  </div>

                  <div className="flex space-x-3">
                    <span className="w-5 select-none text-right text-gray-300">7</span>
                    <span className="pl-12">
                      <span className="text-red-500">className</span>=<span className="text-rose-600">"dispatch-priority-immediate"</span>
                    </span>
                  </div>

                  <div className="flex space-x-3">
                    <span className="w-5 select-none text-right text-gray-300">8</span>
                    <span className="pl-12">
                      <span className="text-red-500">onDistress</span>=&#123;() =&gt; broadcast112Police(&#123;
                    </span>
                  </div>

                  <div className="flex space-x-3">
                    <span className="w-5 select-none text-right text-gray-300">9</span>
                    <span className="pl-16 text-gray-600">
                      gps: telemetry.coordinates, audioVault: AES256.latest()
                    </span>
                  </div>

                  <div className="flex space-x-3">
                    <span className="w-5 select-none text-right text-gray-300">10</span>
                    <span className="pl-12">&#125;)&#125;</span>
                  </div>

                  <div className="flex space-x-3">
                    <span className="w-5 select-none text-right text-gray-300">11</span>
                    <span className="pl-8 text-gray-800">/&gt;</span>
                  </div>

                  <div className="flex space-x-3">
                    <span className="w-5 select-none text-right text-gray-300">12</span>
                    <span className="pl-4">);</span>
                  </div>

                  <div className="flex space-x-3">
                    <span className="w-5 select-none text-right text-gray-300">13</span>
                    <span>&#125;</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: Guardian Mesh & CLI (Exact match to Reference Image 4) */}
      <section id="guardian-mesh" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Description */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-950 tracking-tight font-display">
              Guardian Mesh & CLI
            </h3>
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              The lightweight, fast, terminal-first surface to coordinate emergency responders and family mesh. Broadcast encrypted distress beacons over local mesh without cellular connectivity, track real-time telemetry, and dispatch 112 directly.
            </p>
          </div>

          {/* Right: Deep Dark Space Container with Terminal Window */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[580px] rounded-[36px] bg-[#050811] p-6 sm:p-8 border border-gray-800/80 shadow-2xl overflow-hidden text-gray-300 font-mono text-xs sm:text-sm">
              
              {/* Starfield Particles */}
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px]"></div>

              {/* Terminal Window */}
              <div className="relative z-10 rounded-2xl bg-[#0B101D]/90 border border-gray-800 p-4 sm:p-5 shadow-2xl space-y-4 backdrop-blur-sm">
                
                {/* 3 Mac Dots */}
                <div className="flex items-center space-x-1.5 pb-2 border-b border-gray-800/70">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/90"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90"></div>
                  <span className="text-[10px] text-gray-500 pl-2 font-sans">shakti-mesh-gateway — zsh</span>
                </div>

                {/* Pixel Graphic + Welcome */}
                <div className="flex items-center space-x-3 pt-1">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-rose-500 via-pink-500 to-indigo-500 flex items-center justify-center font-bold text-white shadow-xs">
                    ▲
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Welcome to Shakti Mesh Gateway!</div>
                    <div className="text-[10px] text-gray-400">Autonomous Sentinel v2.4.0 Online</div>
                  </div>
                </div>

                {/* Terminal Content Split */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 pt-2">
                  
                  {/* Left: Mode Selector */}
                  <div className="sm:col-span-5 space-y-1.5 text-[11px] text-gray-400 border-r border-gray-800/80 pr-2">
                    <div className="text-gray-300 font-semibold mb-1">Choose protocol:</div>
                    <div className="cursor-pointer hover:text-white">  offline bluetooth</div>
                    <div className="cursor-pointer hover:text-white">  encrypted sms mesh</div>
                    <div className="text-emerald-400 font-bold bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-800/50">
                      &gt; direct 112 gateway
                    </div>
                    <div className="cursor-pointer hover:text-white">  stealth silent guard</div>
                    
                    <div className="pt-2 text-[10px] text-gray-500">
                      [Next] &gt;
                    </div>
                  </div>

                  {/* Right: Live Log Output */}
                  <div className="sm:col-span-7 space-y-1 text-[11px] font-mono leading-relaxed">
                    <div className="text-gray-400">&gt; you: arm autonomous guardian</div>
                    <div className="text-emerald-400 font-semibold">SHAKTI: Distress verified. Relaying to 4 guardians...</div>
                    <div className="text-gray-500 pt-1">1  // Emergency Telemetry</div>
                    <div className="text-gray-500">2  // Battery 94% • GPS Lat/Lng 19.07, 72.87</div>
                    <div className="text-rose-400 font-semibold bg-rose-950/40 px-1 py-0.5 rounded">
                      - status: IDLE
                    </div>
                    <div className="text-emerald-300 font-semibold bg-emerald-950/40 px-1 py-0.5 rounded">
                      + status: ACTIVE_SENTINEL
                    </div>
                    <div className="text-cyan-400 pt-1">
                      dispatchReady("112 Police Gateway", true)
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: Shakti SDK (Exact match to Reference Image 5) */}
      <section id="shakti-sdk" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Description */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-950 tracking-tight font-display">
              Shakti SDK
            </h3>
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              Prototype custom safety agents leveraging Shakti's harness with minimal code. Simple Python and Flutter scripts to iterate on safety applications, automate transport check-ins, and run evaluations on top of the Shakti emergency harness.
            </p>
          </div>

          {/* Right: Dark Container with Luminous Blue Concentric Aura Portal */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[560px] aspect-square rounded-[40px] bg-[#030712] p-8 flex items-center justify-center shadow-2xl border border-gray-800/90 overflow-hidden group">
              
              {/* Radiant concentric glowing aura portal matching Image 5 */}
              <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 animate-pulse"></div>
              
              {/* Outer halo ring */}
              <div className="absolute w-72 h-72 sm:w-84 sm:h-84 rounded-full border border-blue-400/20 shadow-[0_0_80px_rgba(59,130,246,0.3)]"></div>
              
              {/* Middle glowing aura */}
              <div className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-b from-blue-900/60 to-black border border-blue-500/40 shadow-[0_0_50px_rgba(96,165,250,0.4)] flex items-center justify-center">
                
                {/* Center Glowing Title matching Image 5 */}
                <h4 className="text-2xl sm:text-3xl font-medium text-white font-display tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] select-none">
                  Shakti SDK
                </h4>

              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
