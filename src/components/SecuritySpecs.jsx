import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Server, 
  WifiOff, 
  Bluetooth, 
  FileCheck 
} from 'lucide-react';

export default function SecuritySpecs() {
  const specs = [
    {
      icon: Lock,
      title: 'Zero-Knowledge Cryptography',
      desc: 'Location telemetry is encrypted with ephemeral keys on device. Not even Shakti servers can decrypt your live GPS stream without explicit guardian key handshake.'
    },
    {
      icon: WifiOff,
      title: 'Dual-Channel Offline Failover',
      desc: 'In zero-connectivity or network jamming zones, Shakti automatically packages compressed GPS distress payloads over encrypted GSM cellular SMS.'
    },
    {
      icon: Bluetooth,
      title: 'BLE Wearable SDK & Trigger Mesh',
      desc: 'Seamlessly pair smart rings, discreet keyfobs, and smartwatches. A discrete quadruple-tap or squeeze triggers instant silent SOS escalation.'
    },
    {
      icon: Server,
      title: 'OSRM + Google Maps Redundancy',
      desc: 'Engineered with zero-downtime routing failover. If standard map APIs encounter network latency, local open-source routing matrices take over instantly.'
    }
  ];

  return (
    <section id="safety-sdk" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Enterprise Security & Hardware Specs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight">
            Security That Never Compromises Privacy
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Built from the ground up with military-grade encryption, offline resilience, and hardware-level panic button integrations.
          </p>
        </div>

        {/* 4 Feature Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-gray-50/70 rounded-3xl p-7 border border-gray-200/80 hover:border-gray-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-900 mb-5">
                    <Icon className="w-6 h-6 text-rose-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center space-x-1.5 text-xs font-semibold text-emerald-700">
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>Audited & Certified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration Code / Hardware SDK Preview Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#0B0F19] to-[#121927] rounded-3xl p-8 sm:p-10 border border-gray-800 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="text-xs font-mono text-rose-400 font-semibold uppercase tracking-wider">
              Open Safety SDK for IoT & Wearables
            </div>
            <h4 className="text-2xl font-bold font-display">
              Integrate Shakti Panic Triggers into Hardware Devices
            </h4>
            <p className="text-sm text-gray-400">
              Build smart jewelry, campus beacons, or automotive panic triggers using our lightweight C++ and React Native SDK.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:developer@teamsamay.com"
              className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-full text-sm font-semibold shadow-md transition-all"
            >
              Request SDK Docs
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
