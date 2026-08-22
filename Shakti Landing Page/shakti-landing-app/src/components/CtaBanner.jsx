import { 
  Download, 
  CheckCircle2, 
  Sparkles, 
  QrCode, 
  Zap, 
  Lock 
} from 'lucide-react';

export default function CtaBanner({ onOpenDownload }) {
  return (
    <section id="download" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Glowing Gradient Card */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 p-8 sm:p-14 lg:p-16 text-center overflow-hidden shadow-2xl shadow-rose-600/25 text-white">
          
          {/* Subtle glowing radial background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/10 blur-3xl pointer-events-none rounded-full"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            {/* Top Pill */}
            <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-white bg-white/20 px-4 py-1.5 rounded-full border border-white/30 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Download • Android & iOS</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-display">
              Empower Your Safety & Peace of Mind Today.
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-pink-100 max-w-2xl mx-auto leading-relaxed">
              Join thousands of students, working professionals, and solo travelers who trust Shakti for intelligent safe navigation, voice SOS triggers, and autonomous guardian response.
            </p>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenDownload}
                className="group flex items-center space-x-3 bg-white hover:bg-rose-50 text-gray-950 px-8 py-4 rounded-full font-extrabold text-base shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Download className="w-5 h-5 text-rose-600" />
                <span>Get Shakti App Free</span>
              </button>

              <button
                onClick={onOpenDownload}
                className="flex items-center space-x-2 bg-white/15 hover:bg-white/25 text-white px-6 py-4 rounded-full font-bold text-base border border-white/30 shadow-md hover:shadow-lg backdrop-blur-xs transition-all"
              >
                <QrCode className="w-5 h-5 text-pink-200" />
                <span>Scan QR Code</span>
              </button>
            </div>

            {/* Security Guarantee List */}
            <div className="pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-pink-100">
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>100% Free Core Emergency SOS</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Lock className="w-4 h-4 text-emerald-300" />
                <span>Zero-Knowledge Data Logs</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Zap className="w-4 h-4 text-amber-300" />
                <span>Sub-2s Real-Time Dispatch</span>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
