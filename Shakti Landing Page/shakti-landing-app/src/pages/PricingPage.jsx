import React, { useState } from 'react';
import {
  Check,
  Sparkles,
  Crown,
  Download
} from 'lucide-react';

export default function PricingPage({ onOpenDownload }) {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const freeFeatures = [
    '1-Tap Emergency SOS Trigger',
    'Up to 3 Family Emergency Guardians',
    'Real-time GPS Location SMS Broadcast',
    'Standard Voice Keyword Listener ("Help Shakti")',
    'AI Fake Incoming Call Generator',
    'Direct 112 Police Emergency Dialing'
  ];

  const proFeatures = [
    'Everything in Free Included',
    '24/7 Priority Emergency Police & Ambulance Gateway',
    'Advanced Acoustic AI Voice Distress Sentinel',
    'Encrypted Cloud Evidence Vault (Auto 30s Recording)',
    'Offline Bluetooth & Wi-Fi Direct Mesh SOS Network',
    'Unlimited Guardian Circle & Loud Siren Push Override',
    'Stealth Camouflage Mode (Calculator Disguise)',
    '100% Ad-Free Priority Experience'
  ];

  return (
    <div className="pt-24 sm:pt-32 pb-20 animate-in fade-in duration-200">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3.5 py-1 rounded-full border border-rose-200 mb-3">
            <Crown className="w-3.5 h-3.5 text-rose-600" />
            <span>Dedicated Pricing Plans</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-950 font-display tracking-tight">
            Pocket-Friendly Safety for Everyone
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Essential life-saving protection is 100% free forever. Upgrade to Pro for autonomous AI protection for just ₹49.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-6 inline-flex items-center p-1 rounded-full bg-pink-50 border border-pink-200">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                billingCycle === 'monthly' ? 'bg-white text-rose-600 shadow-xs' : 'text-gray-600'
              }`}
            >
              Monthly (₹49/mo)
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`flex items-center space-x-1.5 px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                billingCycle === 'yearly' ? 'bg-rose-600 text-white shadow-xs' : 'text-gray-600'
              }`}
            >
              <span>Annual (₹399/yr)</span>
              <span className="text-[10px] bg-amber-300 text-gray-900 px-1.5 py-0.2 rounded-full font-extrabold">Save 32%</span>
            </button>
          </div>
        </div>

        {/* 2 Plans Grid Only */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch mb-14">
          
          {/* Free Plan */}
          <div className="rounded-3xl p-7 sm:p-9 bg-white border border-pink-200/80 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-extrabold text-gray-900 font-display">Shakti Free</h3>
                <span className="text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  ₹0 Forever
                </span>
              </div>
              <p className="text-xs text-gray-500 font-medium mb-6">Essential Emergency Protection</p>

              <div className="flex items-baseline space-x-2 mb-6 pb-6 border-b border-pink-100">
                <span className="text-4xl sm:text-5xl font-extrabold text-gray-950 font-display">₹0</span>
                <span className="text-xs text-gray-500 font-semibold">free forever</span>
              </div>

              <div className="space-y-3 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-900">
                  Included Features:
                </div>
                {freeFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenDownload}
              className="w-full py-3.5 rounded-2xl font-bold text-sm bg-gray-900 hover:bg-black text-white transition-all shadow hover:scale-[1.02] flex items-center justify-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Free</span>
            </button>
          </div>

          {/* Pro Plan (₹49) */}
          <div className="relative rounded-3xl p-7 sm:p-9 bg-white border-2 border-rose-500 shadow-[0_20px_50px_rgba(244,63,94,0.15)] scale-[1.02] z-20 flex flex-col justify-between">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-600 to-pink-600 text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Recommended Pro</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-extrabold text-gray-900 font-display">Shakti Pro</h3>
                <span className="text-xs font-bold text-rose-700 bg-rose-100 px-3 py-1 rounded-full">
                  Only ₹49 / mo
                </span>
              </div>
              <p className="text-xs text-rose-600 font-medium mb-6">Autonomous AI Sentinel & Vault</p>

              <div className="flex items-baseline space-x-2 mb-6 pb-6 border-b border-pink-100">
                <span className="text-4xl sm:text-5xl font-extrabold text-gray-950 font-display">
                  {billingCycle === 'yearly' ? '₹399' : '₹49'}
                </span>
                <span className="text-xs text-gray-500 font-semibold">
                  {billingCycle === 'yearly' ? '/ year (₹33/mo)' : '/ month'}
                </span>
              </div>

              <div className="space-y-3 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-900">
                  All Pro Capabilities:
                </div>
                {proFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-900 font-semibold">
                    <div className="w-4 h-4 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenDownload}
              className="w-full py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white transition-all shadow-lg shadow-rose-600/30 hover:scale-[1.02] flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Shakti Pro (₹49)</span>
            </button>
          </div>

        </div>

        {/* Commitment Badge */}
        <div className="bg-pink-50/70 rounded-2xl p-4 border border-pink-200 text-center text-xs text-gray-600 max-w-xl mx-auto">
          🔒 <strong>100% Commitment:</strong> Emergency 1-Tap SOS will always remain free for every woman. No payment required for core safety.
        </div>

      </div>

    </div>
  );
}
