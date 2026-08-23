import React, { useState } from 'react';
import {
  Check,
  Sparkles,
  Crown,
  Download,
  Smartphone,
  ShieldAlert,
  ShieldCheck
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
    <div className="pt-24 sm:pt-32 pb-24 min-h-screen bg-gradient-to-b from-[#FAFAF9] via-pink-50/20 to-[#FAFAF9] animate-in fade-in duration-200">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-4 py-1.5 rounded-full border border-rose-200 mb-4 shadow-2xs">
            <Crown className="w-4 h-4 text-rose-600" />
            <span>Dedicated Pricing & App Downloads</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-950 font-display tracking-tight">
            Pocket-Friendly Safety for Everyone
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
            Essential life-saving protection is 100% free forever for every woman. Upgrade to Shakti Pro for just ₹49/month for autonomous AI sentinel and cloud evidence vault.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-white border border-pink-200 shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                billingCycle === 'monthly' ? 'bg-rose-600 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly (₹49/mo)
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                billingCycle === 'yearly' ? 'bg-rose-600 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span>Annual (₹399/yr)</span>
              <span className="text-[10px] bg-amber-300 text-gray-900 px-2 py-0.5 rounded-full font-extrabold">Save 32%</span>
            </button>
          </div>
        </div>

        {/* 2 Plans Grid: Free vs Pro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch mb-16">
          
          {/* Plan 1: Shakti Free */}
          <div className="relative rounded-3xl p-7 sm:p-9 bg-white border border-pink-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-extrabold text-gray-900 font-display">Shakti Free</h3>
                <span className="text-xs font-bold text-gray-700 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                  Forever Free
                </span>
              </div>
              <p className="text-xs text-gray-500 font-medium mb-6">Essential Emergency Protection for Every Woman</p>

              <div className="flex items-baseline space-x-2 mb-6 pb-6 border-b border-pink-100">
                <span className="text-5xl font-extrabold text-gray-950 font-display">₹0</span>
                <span className="text-xs text-gray-500 font-semibold">free forever</span>
              </div>

              <div className="space-y-3 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-900 font-mono">
                  Included Free Features:
                </div>
                {freeFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                    <div className="w-4.5 h-4.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenDownload}
              className="w-full py-4 rounded-2xl font-bold text-sm bg-gray-950 hover:bg-black text-white transition-all shadow-md hover:scale-[1.02] active:scale-95 flex items-center justify-center space-x-2.5"
            >
              <Download className="w-4 h-4 text-gray-300" />
              <span>Download Free App (Android / iOS)</span>
            </button>
          </div>

          {/* Plan 2: Shakti Pro */}
          <div className="relative rounded-3xl p-7 sm:p-9 bg-white border-2 border-rose-500 shadow-[0_20px_50px_rgba(244,63,94,0.2)] scale-[1.02] z-20 flex flex-col justify-between">
            {/* Top Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-600 to-pink-600 text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Recommended Pro Sentinel</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-extrabold text-gray-900 font-display">Shakti Pro</h3>
                <span className="text-xs font-bold text-rose-700 bg-rose-100 px-3 py-1 rounded-full border border-rose-200">
                  Only ₹49 / mo
                </span>
              </div>
              <p className="text-xs text-rose-600 font-medium mb-6">Complete Autonomous AI Sentinel & Cloud Vault</p>

              <div className="flex items-baseline space-x-2 mb-6 pb-6 border-b border-pink-100">
                <span className="text-5xl font-extrabold text-gray-950 font-display">
                  {billingCycle === 'yearly' ? '₹399' : '₹49'}
                </span>
                <span className="text-xs text-gray-500 font-semibold">
                  {billingCycle === 'yearly' ? '/ year (₹33/mo)' : '/ month'}
                </span>
              </div>

              <div className="space-y-3 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-900 font-mono">
                  All Pro Capabilities:
                </div>
                {proFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-900 font-semibold">
                    <div className="w-4.5 h-4.5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenDownload}
              className="w-full py-4 rounded-2xl font-bold text-sm bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white transition-all shadow-lg shadow-rose-600/30 hover:scale-[1.02] active:scale-95 flex items-center justify-center space-x-2.5"
            >
              <Smartphone className="w-4 h-4" />
              <span>Download Pro App & Upgrade (₹49)</span>
            </button>
          </div>

        </div>

        {/* Lifetime Commitment Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-pink-200 shadow-sm text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Core Safety Guarantee</span>
          </div>
          <h4 className="text-lg font-bold text-gray-900 font-display">1-Tap Emergency SOS Will Always Remain Free</h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            No woman will ever be denied immediate police relay, emergency contact SMS broadcast, or GPS tracking due to lack of payment.
          </p>
        </div>

      </div>

    </div>
  );
}
