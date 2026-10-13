import { 
  X, 
  Download, 
  QrCode, 
  Sparkles, 
  ExternalLink,
  Apple
} from 'lucide-react';

export default function DownloadModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Container */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden p-6 sm:p-8 text-gray-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Header with Logo */}
        <div className="flex items-center space-x-3.5 mb-4">
          <img 
            src="/app_logo.png" 
            alt="SHAKTI ONE" 
            className="w-12 h-12 object-contain drop-shadow-sm shrink-0" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/shield.svg';
            }}
          />
          <div>
            <div className="flex items-center space-x-1.5 text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200 w-fit mb-1">
              <Sparkles className="w-3 h-3" />
              <span>SHAKTI ONE v2.4.0</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-950 leading-tight">
              Get SHAKTI ONE Protection
            </h3>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-6">
          Scan the QR code or choose your mobile platform for instant free installation.
        </p>

        {/* QR Code & Scan Badge */}
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200/80 flex flex-col sm:flex-row items-center gap-6 mb-6">
          
          {/* Simulated High-Res QR Code Graphic */}
          <div className="w-32 h-32 bg-white p-2.5 rounded-xl border border-gray-300 shadow-sm flex items-center justify-center shrink-0 relative">
            <svg className="w-full h-full text-gray-900" viewBox="0 0 100 100" fill="currentColor">
              {/* Corner 1 */}
              <rect x="0" y="0" width="30" height="30" rx="4" fill="#000" />
              <rect x="5" y="5" width="20" height="20" rx="2" fill="#fff" />
              <rect x="10" y="10" width="10" height="10" rx="1" fill="#E50914" />
              
              {/* Corner 2 */}
              <rect x="70" y="0" width="30" height="30" rx="4" fill="#000" />
              <rect x="75" y="5" width="20" height="20" rx="2" fill="#fff" />
              <rect x="80" y="10" width="10" height="10" rx="1" fill="#E50914" />

              {/* Corner 3 */}
              <rect x="0" y="70" width="30" height="30" rx="4" fill="#000" />
              <rect x="5" y="75" width="20" height="20" rx="2" fill="#fff" />
              <rect x="10" y="80" width="10" height="10" rx="1" fill="#E50914" />

              {/* Data matrix dots */}
              <circle cx="45" cy="15" r="3" />
              <circle cx="55" cy="25" r="3" />
              <circle cx="40" cy="40" r="3" />
              <circle cx="50" cy="50" r="4" fill="#E50914" />
              <circle cx="60" cy="40" r="3" />
              <circle cx="45" cy="65" r="3" />
              <circle cx="55" cy="75" r="3" />
              <circle cx="85" cy="45" r="3" />
              <circle cx="85" cy="65" r="3" />
              <circle cx="15" cy="45" r="3" />
              <circle cx="25" cy="55" r="3" />
              <circle cx="75" cy="85" r="3" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center shadow-md p-0.5 border border-gray-200">
                <img src="/app_logo.png" alt="SHAKTI ONE" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          <div className="space-y-2 text-center sm:text-left">
            <div className="text-sm font-bold text-gray-900 flex items-center justify-center sm:justify-start space-x-1.5">
              <QrCode className="w-4 h-4 text-rose-600" />
              <span>Instant Camera Scan</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Open your phone camera to scan and auto-install SHAKTI ONE APK or App Store packages directly.
            </p>
            <div className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded inline-block">
              Auto-verified SHA256 Signature
            </div>
          </div>

        </div>

        {/* Direct Download Buttons */}
        <div className="space-y-3">
          
          <a
            href="#download"
            onClick={onClose}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-950 hover:bg-black text-white transition-all shadow-md group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-rose-600 flex items-center justify-center text-white font-bold">
                ▶
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-400 font-mono">GET IT ON</div>
                <div className="text-sm font-bold">Google Play Store</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
          </a>

          <a
            href="#download"
            onClick={onClose}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-950 hover:bg-black text-white transition-all shadow-md group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center text-white">
                <Apple className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-400 font-mono">DOWNLOAD ON THE</div>
                <div className="text-sm font-bold">Apple App Store</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
          </a>

          <a
            href="/shakti-release.apk"
            download="Shakti-Release.apk"
            onClick={onClose}
            className="w-full flex items-center justify-center space-x-2 py-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold font-mono transition-colors"
          >
            <Download className="w-4 h-4 text-gray-600" />
            <span>Direct APK Download (Shakti-Release.apk)</span>
          </a>

        </div>

        {/* Footer Guarantee */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span>Requires Android 8.0+ / iOS 15.0+</span>
          <span className="text-emerald-600 font-medium">100% Free Forever</span>
        </div>

      </div>

    </div>
  );
}
