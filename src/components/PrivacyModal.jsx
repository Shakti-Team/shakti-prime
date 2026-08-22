import { 
  X, 
  Lock, 
  ShieldCheck, 
  EyeOff, 
  Key, 
  ServerOff 
} from 'lucide-react';

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden flex flex-col max-h-[85vh] text-gray-900">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 bg-gray-50/80">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold font-display">Shakti Privacy & Zero-Knowledge Trust Policy</h3>
              <p className="text-xs text-gray-500">Last updated: February 2026 • Verified Compliance</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Policy Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-gray-600 leading-relaxed">
          
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-start space-x-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs text-emerald-900">
              <strong className="block text-sm font-semibold mb-1">Our Immutable Privacy Promise:</strong>
              We never sell your location telemetry, personal contacts, voice audio, or activity records to third-party ad networks or brokers. Your safety is our only purpose.
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center space-x-2">
              <Key className="w-4 h-4 text-rose-600" />
              <span>1. Zero-Knowledge Location Encryption</span>
            </h4>
            <p>
              When active journey sharing or emergency SOS is triggered, your GPS coordinates are encrypted on-device with an ephemeral 256-bit AES key. Only trusted guardians possessing your paired session token can decrypt the live tracking feed.
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center space-x-2">
              <EyeOff className="w-4 h-4 text-purple-600" />
              <span>2. Acoustic Voice Model & Microphone Access</span>
            </h4>
            <p>
              Shakti runs a lightweight neural keyword detector directly on your device NPU. No ambient audio is recorded, buffered, or transmitted to cloud servers during standby. Audio recording is initiated solely when an active SOS protocol is verified.
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center space-x-2">
              <ServerOff className="w-4 h-4 text-blue-600" />
              <span>3. Automatic Data Expiration</span>
            </h4>
            <p>
              Emergency session breadcrumbs and temporary audio evidence caches are automatically purged from secure relay buffers 7 days after an incident is resolved, unless exported directly by the verified user.
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-gray-900 mb-2">
              4. Contact and Emergency Relay Permissions
            </h4>
            <p>
              Phone contacts are accessed solely to allow you to configure your Trusted Safety Circle and send instant SMS dispatches.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-xs">
          <span className="text-gray-500">Contact: privacy@teamsamay.com</span>
          <button
            onClick={onClose}
            className="bg-gray-900 hover:bg-black text-white px-5 py-2 rounded-full font-semibold transition-colors"
          >
            I Understand
          </button>
        </div>

      </div>

    </div>
  );
}
