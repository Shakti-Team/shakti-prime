import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mic, 
  CheckCircle2, 
  Radio, 
  RefreshCw, 
  Phone, 
  Zap, 
  X,
  Flame
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LiveSafetySimulator() {
  const [activeSimulation, setActiveSimulation] = useState('sos'); // 'sos' | 'voice' | 'fakecall' | 'route'
  const [sosState, setSosState] = useState('idle'); // 'idle' | 'triggering' | 'active' | 'resolved'
  const [countdown, setCountdown] = useState(3);
  const [logs, setLogs] = useState([]);
  const [incomingCall, setIncomingCall] = useState(false);

  // Trigger SOS Simulation
  const handleTriggerSOS = () => {
    setSosState('triggering');
    setCountdown(3);
    setLogs([
      { time: '0.0s', msg: '🚨 SOS Manual Trigger Received: 3x Power-Click detected', level: 'alert' }
    ]);

    let count = 3;
    const timer = setInterval(() => {
      count -= 1;
      setCountdown(count);
      if (count <= 0) {
        clearInterval(timer);
        setSosState('active');
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.7 }
        });
        
        setLogs([
          { time: '0.0s', msg: '🚨 SOS Emergency Initiated', level: 'alert' },
          { time: '0.4s', msg: '📍 GPS Telemetry Locked: 28.6139° N, 77.2090° E (Accuracy ±3m)', level: 'info' },
          { time: '0.8s', msg: '📲 SMS broadcast dispatched to 3 Emergency Guardians', level: 'success' },
          { time: '1.2s', msg: '🎙️ Silent 30s background audio recording stream started', level: 'info' },
          { time: '1.8s', msg: '🚔 Automated Police Relay: 112 Control Room pinged', level: 'success' },
          { time: '2.1s', msg: '🛡️ Live Guardian Command link active with 256-bit encryption', level: 'success' }
        ]);
      }
    }, 700);
  };

  const handleReset = () => {
    setSosState('idle');
    setLogs([]);
    setIncomingCall(false);
  };

  const handleTriggerVoiceTest = () => {
    setLogs([
      { time: '0.0s', msg: '🎙️ Acoustic stream listening to sample phrase: "Help Shakti!"', level: 'info' },
      { time: '0.3s', msg: '🔍 On-Device Neural Model matched threshold: 99.4% Confidence', level: 'success' },
      { time: '0.7s', msg: '🚨 Autonomous Silent SOS Armed without waking phone screen', level: 'alert' }
    ]);
  };

  const handleTriggerFakeCall = () => {
    setIncomingCall(true);
    setLogs([
      { time: '0.0s', msg: '📞 Simulated Discrete Call Scheduled (Caller: "Papa")', level: 'info' },
      { time: '0.5s', msg: '🔔 Incoming Call Screen active with realistic ringtone & vibration', level: 'success' }
    ]);
  };

  return (
    <section id="simulator" className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-pink-100">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-rose-100/40 to-pink-100/30 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200/80 mb-3">
            <Radio className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
            <span>Interactive Live Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight">
            Test Shakti's Real-Time Engine in Action
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Experience how fast Shakti reacts when an emergency is detected. Run a live test of our instant SOS trigger, hands-free voice agent, and fake call generator.
          </p>

          {/* Selector Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => { setActiveSimulation('sos'); handleReset(); }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeSimulation === 'sos'
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/25'
                  : 'bg-pink-50 text-gray-700 hover:bg-pink-100'
              }`}
            >
              1-Tap SOS Emergency
            </button>
            <button
              onClick={() => { setActiveSimulation('voice'); handleReset(); }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeSimulation === 'voice'
                  ? 'bg-pink-600 text-white shadow-md shadow-pink-600/25'
                  : 'bg-pink-50 text-gray-700 hover:bg-pink-100'
              }`}
            >
              Voice Keyword Test
            </button>
            <button
              onClick={() => { setActiveSimulation('fakecall'); handleReset(); }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeSimulation === 'fakecall'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/25'
                  : 'bg-pink-50 text-gray-700 hover:bg-pink-100'
              }`}
            >
              Fake Incoming Call
            </button>
          </div>
        </div>

        {/* Main Simulator Console Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-pink-200 shadow-[0_20px_50px_rgba(244,63,94,0.1)] p-6 sm:p-8 overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Action Box */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-rose-50/70 via-pink-50/40 to-white rounded-2xl border border-pink-100 text-center">
              
              {activeSimulation === 'sos' && (
                <div className="space-y-4 w-full">
                  <div className="text-xs font-bold text-gray-600">Simulate Emergency Panic Button</div>

                  {sosState === 'idle' && (
                    <button
                      onClick={handleTriggerSOS}
                      className="w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-rose-600 via-pink-600 to-rose-700 text-white font-extrabold text-lg shadow-xl shadow-rose-600/30 hover:scale-105 active:scale-95 transition-all flex flex-col items-center justify-center space-y-1"
                    >
                      <Flame className="w-8 h-8" />
                      <span>SOS</span>
                    </button>
                  )}

                  {sosState === 'triggering' && (
                    <div className="w-32 h-32 mx-auto rounded-full bg-amber-500 text-white font-extrabold text-3xl shadow-xl flex flex-col items-center justify-center animate-pulse">
                      <span>{countdown}</span>
                      <span className="text-[10px] font-normal">Arming...</span>
                    </div>
                  )}

                  {sosState === 'active' && (
                    <div className="space-y-2">
                      <div className="w-32 h-32 mx-auto rounded-full bg-emerald-600 text-white font-extrabold text-base shadow-xl shadow-emerald-600/30 flex flex-col items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 mb-1" />
                        <span>DISPATCHED</span>
                      </div>
                      <button
                        onClick={handleReset}
                        className="text-xs text-gray-600 hover:text-gray-900 font-bold flex items-center justify-center space-x-1 mx-auto mt-2"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>Reset Simulation</span>
                      </button>
                    </div>
                  )}

                  <p className="text-[11px] text-gray-500">
                    Click to test sub-2s parallel telemetry dispatch
                  </p>
                </div>
              )}

              {activeSimulation === 'voice' && (
                <div className="space-y-4 w-full">
                  <div className="text-xs font-bold text-gray-600">Simulate Voice Phrase</div>
                  <button
                    onClick={handleTriggerVoiceTest}
                    className="w-28 h-28 mx-auto rounded-full bg-pink-600 hover:bg-pink-700 text-white font-bold text-sm shadow-lg shadow-pink-600/25 hover:scale-105 transition-all flex flex-col items-center justify-center space-y-1"
                  >
                    <Mic className="w-8 h-8" />
                    <span>Say Phrase</span>
                  </button>
                  <div className="text-xs font-mono text-pink-700 bg-pink-100/70 py-1.5 px-3 rounded-lg">
                    Phrase: "Help Shakti"
                  </div>
                </div>
              )}

              {activeSimulation === 'fakecall' && (
                <div className="space-y-4 w-full">
                  <div className="text-xs font-bold text-gray-600">Tactical Escape Call</div>
                  {!incomingCall ? (
                    <button
                      onClick={handleTriggerFakeCall}
                      className="w-28 h-28 mx-auto rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-lg shadow-amber-500/25 hover:scale-105 transition-all flex flex-col items-center justify-center space-y-1"
                    >
                      <PhoneCall className="w-8 h-8" />
                      <span>Ring Now</span>
                    </button>
                  ) : (
                    <div className="bg-gray-950 text-white p-4 rounded-2xl space-y-3 w-full animate-bounce">
                      <div className="text-xs text-gray-400">Incoming Call...</div>
                      <div className="text-base font-bold text-white">Papa Calling</div>
                      <div className="flex items-center justify-center space-x-4 pt-2">
                        <button onClick={handleReset} className="p-3 bg-red-600 rounded-full text-white">
                          <X className="w-4 h-4" />
                        </button>
                        <button onClick={handleReset} className="p-3 bg-emerald-600 rounded-full text-white">
                          <Phone className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                  <p className="text-[11px] text-gray-500">Realistic incoming phone call screen</p>
                </div>
              )}

            </div>

            {/* Right Real-Time Log Console */}
            <div className="md:col-span-7 bg-gray-950 rounded-2xl p-5 text-left font-mono text-xs text-gray-300 space-y-3 h-[280px] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-gray-800 pb-2 text-[11px] text-gray-500">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>SHAKTI TELEMETRY STREAM</span>
                </span>
                <span>LATENCY: 18ms</span>
              </div>

              {logs.length === 0 ? (
                <div className="h-40 flex flex-col items-center justify-center text-gray-600 space-y-2">
                  <Zap className="w-6 h-6 text-gray-700" />
                  <span>Click the button on the left to start live simulation</span>
                </div>
              ) : (
                <div className="space-y-2 pt-1">
                  {logs.map((log, index) => (
                    <div key={index} className="flex items-start space-x-2 animate-in fade-in">
                      <span className="text-gray-500 font-semibold">{log.time}</span>
                      <span className={
                        log.level === 'alert' ? 'text-rose-400 font-bold' :
                        log.level === 'success' ? 'text-emerald-400 font-medium' :
                        'text-blue-300'
                      }>
                        {log.msg}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
