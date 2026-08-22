import React, { useState } from 'react';
import {
  Building2,
  Megaphone,
  Sparkles,
  Laptop,
  CheckCircle2
} from 'lucide-react';

export default function EnterprisePage() {
  const [brandName, setBrandName] = useState('Uber Safety Shield');
  const [bannerTagline, setBannerTagline] = useState('Verified Women Drivers & In-Ride Telemetry Sync Available 24/7');
  const [requested, setRequested] = useState(false);

  return (
    <div className="pt-24 sm:pt-32 pb-20 animate-in fade-in duration-200">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3.5 py-1 rounded-full border border-rose-200 mb-3">
            <Building2 className="w-3.5 h-3.5 text-rose-600" />
            <span>Enterprise Suite & Ads</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-950 font-display tracking-tight">
            Corporate Safety & In-App Brand Sponsorships
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Duty-of-care transport fleet monitoring for women employees, and ethical in-app safety banner campaigns.
          </p>
        </div>

        {/* 2 Main Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          <div className="bg-white rounded-3xl p-7 border border-pink-200/80 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <Megaphone className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">In-App Brand Safety Banners</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Verified brands (transit, healthcare, wellness, self-defense) can run high-trust, contextual safety banners inside Shakti App.
            </p>
            <div className="space-y-2 text-xs text-gray-700 font-medium pt-2">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>3.8x higher CTR than generic display networks</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% brand-safe women empowerment audience</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-pink-200/80 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Laptop className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Corporate Employee Cab Fleet Suite</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Live transit dashboard for IT/BPO companies to monitor female employees' late-night cab commutes in real-time.
            </p>
            <div className="space-y-2 text-xs text-gray-700 font-medium pt-2">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Automated safe home arrival check-ins</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Duty-of-care audit reports for HR & security</span>
              </div>
            </div>
          </div>

        </div>

        {/* Live Banner Ad Simulator */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-pink-200 shadow-sm space-y-6">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-rose-600" />
            <h3 className="text-lg font-bold text-gray-900">Interactive Banner Ad Preview Simulator</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            {/* Form */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Company / Brand Name</label>
                <input
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-pink-50/40 border border-pink-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="e.g. Uber Safety, Apollo"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Safety Message Headline</label>
                <input
                  type="text"
                  value={bannerTagline}
                  onChange={(e) => setBannerTagline(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-pink-50/40 border border-pink-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="e.g. 24/7 Verified Safe Rides"
                />
              </div>

              <button
                onClick={() => setRequested(true)}
                className="w-full py-2.5 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-xl transition-all shadow"
              >
                {requested ? '✓ Request Received! We will contact you' : 'Request Campaign Placement'}
              </button>
            </div>

            {/* Live Rendered Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-50 via-pink-50 to-white border border-rose-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-900">{brandName || 'Brand Name'}</span>
                <span className="text-[9px] font-bold uppercase text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                  Sponsored
                </span>
              </div>
              <p className="text-xs text-gray-700 font-semibold">{bannerTagline || 'Safety message here'}</p>
              <div className="pt-2 flex items-center justify-between text-[10px] text-gray-500 border-t border-rose-100">
                <span>Verified Shakti Partner</span>
                <span className="text-rose-600 font-bold">Learn More ➔</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
