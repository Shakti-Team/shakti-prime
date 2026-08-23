import {
  Smartphone,
  Sparkles,
  ArrowRight,
  Download,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function ProductsPage({ onOpenDownload, onNavigatePricing }) {

  const points = [
    '1-Tap & 3x hardware power-button emergency dispatch',
    'Hands-free Voice Sentinel listener ("Help Shakti" / "Bachao")',
    'Sub-2 second parallel relay to 112 Police & verified guardians',
    'Real-time GPS tracking with safe corridor geofencing',
    'Encrypted 256-bit background evidence audio recording',
    'Tactical AI fake incoming call generator'
  ];

  return (
    <div className="pt-24 sm:pt-32 pb-24 min-h-screen bg-gradient-to-b from-[#FAFAF9] via-pink-50/20 to-[#FAFAF9] animate-in fade-in duration-200">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-4 py-1.5 rounded-full border border-rose-200 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Official Shakti App</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-950 font-display tracking-tight">
            Shakti
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-3 leading-relaxed">
            The next-generation autonomous women safety & emergency dispatch platform.
          </p>
        </div>

        {/* Single Centered Product Card: Shakti */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-rose-200/90 shadow-[0_20px_50px_rgba(244,63,94,0.12)] space-y-8">
          
          {/* Card Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-pink-100">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-600 p-0.5 shadow-md flex items-center justify-center">
                <img 
                  src="/app_logo.png" 
                  alt="Shakti App" 
                  className="w-full h-full object-cover rounded-[14px] bg-white"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/shield.svg';
                  }}
                />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 font-display">Shakti</h2>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>
                <p className="text-xs text-gray-500 font-medium">Autonomous Protection & 112 Police Gateway</p>
              </div>
            </div>

            <span className="text-xs font-extrabold uppercase tracking-wider text-rose-700 bg-rose-50 px-3.5 py-1 rounded-full border border-rose-200">
              Free & Pro Available
            </span>
          </div>

          {/* Capabilities List */}
          <div className="space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-900 font-mono">
              Core All-in-One Safety Capabilities:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-gray-800">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-2xl bg-rose-50/50 border border-pink-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Row */}
          <div className="pt-4 border-t border-pink-100 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onOpenDownload}
              className="bg-gray-950 hover:bg-black text-white px-8 py-3.5 rounded-2xl font-bold text-sm shadow-md hover:scale-105 transition-all flex items-center space-x-2.5"
            >
              <Download className="w-4 h-4 text-gray-300" />
              <span>Download Shakti App</span>
            </button>

            <button
              onClick={onNavigatePricing}
              className="text-sm font-bold text-rose-600 hover:text-rose-700 flex items-center space-x-1.5"
            >
              <span>See Pricing (Free & ₹49/mo)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
