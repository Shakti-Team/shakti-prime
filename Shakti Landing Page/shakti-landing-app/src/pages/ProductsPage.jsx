import {
  Smartphone,
  Mic,
  Radio,
  Lock,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function ProductsPage({ onOpenDownload, onNavigatePricing }) {

  const products = [
    {
      title: 'Shakti Mobile 2.0',
      subtitle: 'Autonomous Women Safety & Emergency SOS App',
      icon: Smartphone,
      color: 'rose',
      tag: 'Core Mobile App',
      points: [
        '1-Tap and 3x hardware power-click emergency trigger',
        'Sub-2 second parallel dispatch to 112 police gateway & guardians',
        'Real-time live GPS telemetry broadcast with battery status sync',
        'Tactical AI fake call generator to exit uncomfortable situations'
      ]
    },
    {
      title: 'Voice Sentinel AI',
      subtitle: 'Hands-Free Acoustic Keyword Listener',
      icon: Mic,
      color: 'pink',
      tag: 'On-Device AI',
      points: [
        'Recognizes emergency distress phrases like "Help Shakti" or "Bachao"',
        'Runs privately on-device even when phone is locked inside purse/pocket',
        'Distress pitch and acoustic anomaly sentiment detection',
        'Zero cloud audio snooping or battery drain'
      ]
    },
    {
      title: 'Guardian Mesh Network',
      subtitle: 'Zero-Data Bluetooth & Peer Telemetry Relay',
      icon: Radio,
      color: 'blue',
      tag: 'Offline Resilience',
      points: [
        'Relays encrypted SOS tokens peer-to-peer without active mobile data',
        'Parallel multi-guardian telemetry sync with ultra-low latency',
        'Loud siren push notification overrides phone silent mode',
        'Safe zone geofencing (college, office, home arrival check-ins)'
      ]
    },
    {
      title: 'Cloud Evidence Vault',
      subtitle: 'Tamper-Proof 256-bit Encrypted Incident Backup',
      icon: Lock,
      color: 'purple',
      tag: 'Security & Legal',
      points: [
        'Auto 30s background audio and video recording upon SOS trigger',
        'Client-side AES-256 encryption with zero-knowledge keys',
        'Immutable cloud evidence vault for first responders and legal protection',
        'Stealth camouflage mode (app disguised as calculator/notes icon)'
      ]
    }
  ];

  return (
    <div className="pt-24 sm:pt-32 pb-20 animate-in fade-in duration-200">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3.5 py-1 rounded-full border border-rose-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Product Suite</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-950 font-display tracking-tight">
            Explore the Shakti Safety Stack
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Engineered with on-device acoustic intelligence, offline mesh networks, and instant emergency dispatch.
          </p>
        </div>

        {/* 4 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {products.map((prod, idx) => {
            const Icon = prod.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-7 border border-pink-200/80 shadow-xs hover:shadow-xl hover:border-pink-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200/60">
                      {prod.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">{prod.title}</h3>
                  <p className="text-xs text-gray-500 font-medium mb-4">{prod.subtitle}</p>

                  <ul className="space-y-2.5 text-xs text-gray-700 font-medium mb-6">
                    {prod.points.map((pt, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-rose-600 font-bold mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-pink-100 flex items-center justify-between">
                  <button
                    onClick={onOpenDownload}
                    className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center space-x-1"
                  >
                    <span>Get on Mobile</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <button
                    onClick={onNavigatePricing}
                    className="text-xs font-bold text-gray-700 hover:text-gray-900"
                  >
                    See Pricing (₹49)
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
