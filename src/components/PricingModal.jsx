import React, { useState } from 'react';
import { 
  X, 
  Check, 
  Crown 
} from 'lucide-react';

export default function PricingModal({ isOpen, onClose, onOpenDownload }) {
  const [billingCycle, setBillingCycle] = useState('monthly');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-4xl bg-white rounded-3xl border border-pink-100 shadow-2xl overflow-hidden p-6 sm:p-10 text-gray-900 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200/80 mb-3">
            <Crown className="w-3.5 h-3.5 text-rose-600" />
            <span>Dedicated Pricing Plans</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-gray-950 font-display">
            Transparent & Pocket-Friendly
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Safety that every single woman and family can easily afford.
          </p>

          {/* Toggle */}
          <div className="mt-5 inline-flex items-center p-1 rounded-full bg-pink-50 border border-pink-200 text-xs font-bold">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-full transition-all ${
                billingCycle === 'monthly' ? 'bg-white text-rose-600 shadow-xs' : 'text-gray-600'
              }`}
            >
              Monthly (₹49)
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-1.5 rounded-full transition-all ${
                billingCycle === 'yearly' ? 'bg-rose-600 text-white shadow-xs' : 'text-gray-600'
              }`}
            >
              Annual (₹399 / Save 32%)
            </button>
          </div>
        </div>

        {/* 2 Plans Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Free Plan */}
          <div className="rounded-2xl p-6 bg-gray-50 border border-gray-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xl font-bold text-gray-900">Shakti Free</h4>
                <span className="text-xs font-bold text-gray-600 bg-gray-200 px-2.5 py-0.5 rounded-full">₹0</span>
              </div>
              <p className="text-xs text-gray-500 mb-4">Core Emergency Protection</p>

              <div className="space-y-2.5 text-xs text-gray-700 mb-6">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-gray-900" />
                  <span>1-Tap SOS Button Trigger</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-gray-900" />
                  <span>3 Emergency Guardians SMS Link</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-gray-900" />
                  <span>Real-time GPS coordinates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-gray-900" />
                  <span>Fake incoming call generator</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => { onClose(); onOpenDownload(); }}
              className="w-full py-3 bg-gray-900 hover:bg-black text-white rounded-xl font-bold text-xs shadow transition-all"
            >
              Get Free
            </button>
          </div>

          {/* Pro Plan */}
          <div className="rounded-2xl p-6 bg-white border-2 border-rose-500 shadow-lg shadow-rose-500/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xl font-bold text-gray-900">Shakti Pro</h4>
                <span className="text-xs font-bold text-rose-700 bg-rose-100 px-2.5 py-0.5 rounded-full">
                  {billingCycle === 'yearly' ? '₹399/yr' : '₹49/mo'}
                </span>
              </div>
              <p className="text-xs text-rose-600 font-medium mb-4">Autonomous AI Sentinel & Vault</p>

              <div className="space-y-2.5 text-xs text-gray-900 font-medium mb-6">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-rose-600" />
                  <span>24/7 Priority 112 Police Gateway</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-rose-600" />
                  <span>Acoustic AI Voice Sentinel ("Help Shakti")</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-rose-600" />
                  <span>Encrypted Cloud Audio/Video Evidence</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-rose-600" />
                  <span>Offline Bluetooth Mesh Relay Network</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-rose-600" />
                  <span>Unlimited Guardians & Siren Override</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => { onClose(); onOpenDownload(); }}
              className="w-full py-3 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white rounded-xl font-bold text-xs shadow-md shadow-rose-600/30 transition-all"
            >
              Get Shakti Pro (₹49)
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
