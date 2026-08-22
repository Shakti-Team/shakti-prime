import React, { useState } from 'react';
import {
  Building2,
  Megaphone,
  Sparkles,
  CheckCircle2,
  Laptop
} from 'lucide-react';

export default function EnterpriseAdsSection() {
  // Interactive Banner Simulator State
  const [brandName, setBrandName] = useState('Urban Safety Cab');
  const [bannerTagline, setBannerTagline] = useState('Verified Women Drivers Available 24/7 - Book Safe Ride');
  const [_bannerCategory, setBannerCategory] = useState('Transit');
  const [submitted, setSubmitted] = useState(false);

  const presetBanners = [
    {
      brand: 'CityCabs Safety Shield',
      tagline: 'Verified Drivers & In-App Telemetry Sync. 100% Monitored Rides.',
      category: 'Transit',
      badge: 'Safe Travel Partner',
      cta: 'Book Safe Ride'
    },
    {
      brand: 'Apollo 24/7 Women Health',
      tagline: 'Instant 15-Minute Emergency Medical & Doctor Teleconsultation.',
      category: 'Healthcare',
      badge: 'Emergency Health',
      cta: 'Get First Aid Help'
    },
    {
      brand: 'Kavach Self-Defense Academy',
      tagline: 'Free Weekend Krav Maga & Personal Safety Workshops for Women.',
      category: 'Education',
      badge: 'Empowerment Partner',
      cta: 'Join Free Class'
    }
  ];

  return (
    <section id="enterprise" className="py-20 sm:py-28 bg-gradient-to-b from-white via-pink-50/40 to-white relative overflow-hidden border-t border-pink-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200/80 mb-3">
            <Building2 className="w-3.5 h-3.5 text-rose-600" />
            <span>Enterprise & Brand Monetization</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight">
            Corporate Safety Suite & In-App Brand Sponsorships
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Empower your female workforce with enterprise duty-of-care, or launch verified contextual safety awareness campaigns that reach hundreds of thousands of active users.
          </p>
        </div>

        {/* 2 Main Enterprise Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Pillar 1: In-App Brand Safety Banners */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-pink-200/80 shadow-[0_10px_30px_rgb(244,63,94,0.08)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-6">
                <Megaphone className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-1">
                Monetization Stream #1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Verified In-App Safety Sponsor Banners
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Businesses, ride-hailing services, women-centric brands, and healthcare providers can promote their safety-aligned services via high-trust, non-intrusive in-app banner placements.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Strict verification to ensure 100% ethical, user-friendly campaigns</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Contextual triggers: Safe commute banners shown during travel hours</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>High engagement & brand recall for women empowerment initiatives</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-rose-50/70 rounded-2xl border border-pink-100 flex items-center justify-between text-xs">
              <span className="font-bold text-gray-800">Self-Serve Ad Manager Starting at:</span>
              <span className="text-rose-600 font-extrabold text-sm">₹4,999 / Campaign</span>
            </div>
          </div>

          {/* Pillar 2: Corporate Employee Night Shift Safety Suite */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-pink-200/80 shadow-[0_10px_30px_rgb(244,63,94,0.08)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6">
                <Laptop className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
                Monetization Stream #2 (B2B SaaS)
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Corporate Employee Safety & Cab Fleet Suite
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Dedicated enterprise portal for IT, BPO, hospital, and retail companies to monitor the safety of female employees during night shift commutes with compliance tracking.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Centralized live fleet & cab commute dashboard for HR/Security</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Automated safe home check-ins with tamper-proof audit trails</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Instant escalation to company emergency response team</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50/70 rounded-2xl border border-blue-100 flex items-center justify-between text-xs">
              <span className="font-bold text-gray-800">Enterprise SaaS Per-Seat Licensing:</span>
              <span className="text-blue-700 font-extrabold text-sm">₹49 / Employee / Mo</span>
            </div>
          </div>

        </div>

        {/* Interactive In-App Ad Banner Preview Simulator */}
        <div className="bg-gradient-to-br from-rose-50/90 via-white to-pink-50/80 rounded-3xl border border-pink-200 p-6 sm:p-10 shadow-[0_20px_45px_rgba(244,63,94,0.1)]">
          
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-rose-600 bg-white px-3 py-1 rounded-full border border-pink-200 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Ad Simulator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
              Preview Your Brand's Safety Banner in Shakti App
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Test how your organization’s safety banner or campaign appears to Shakti users inside the mobile app.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Brand or Organization Name
                </label>
                <input
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-pink-200 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="e.g. Uber Safety, Apollo Clinic"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Campaign Headline / Safety Message
                </label>
                <input
                  type="text"
                  value={bannerTagline}
                  onChange={(e) => setBannerTagline(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-pink-200 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="e.g. 24/7 Verified Women Drivers Available"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Quick Presets:
                </label>
                <div className="flex flex-wrap gap-2">
                  {presetBanners.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setBrandName(p.brand);
                        setBannerTagline(p.tagline);
                        setBannerCategory(p.category);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-white hover:bg-rose-50 border border-pink-200 text-xs font-semibold text-gray-700 hover:text-rose-600 transition-colors"
                    >
                      {p.category}: {p.brand.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setSubmitted(true)}
                  className="w-full py-3 bg-gray-900 hover:bg-black text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <Megaphone className="w-4 h-4 text-rose-400" />
                  <span>Request Enterprise Partner Access</span>
                </button>
                {submitted && (
                  <p className="text-xs text-emerald-700 font-semibold mt-2 text-center">
                    ✓ Request logged! Our enterprise partnership team will contact you within 24 hours.
                  </p>
                )}
              </div>
            </div>

            {/* Simulated Live Mobile Banner Container */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-5 border border-pink-200 shadow-md space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 border-b border-gray-100 pb-2">
                <span>SHAKTI IN-APP FEED PREVIEW</span>
                <span className="text-rose-600 font-bold">LIVE AD RENDER</span>
              </div>

              {/* The Live Rendered Banner Card inside app */}
              <div className="relative rounded-2xl bg-gradient-to-r from-rose-50 via-pink-50 to-white p-4 border border-rose-200/90 shadow-sm overflow-hidden group">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-lg bg-rose-600 text-white font-bold flex items-center justify-center text-xs shadow-xs">
                      {brandName.charAt(0) || 'S'}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900">{brandName || 'Your Brand Here'}</div>
                      <div className="text-[10px] text-gray-500 flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span>Verified Safety Sponsor</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                    Sponsored
                  </span>
                </div>

                <p className="text-xs font-semibold text-gray-800 leading-snug my-2">
                  {bannerTagline || 'Your compelling safety announcement goes here.'}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-rose-100 text-[11px]">
                  <span className="text-[10px] text-gray-500 font-medium">Safe & Privacy Verified by Shakti</span>
                  <button className="px-3 py-1 bg-rose-600 text-white rounded-lg font-bold text-[11px] hover:bg-rose-700 transition-colors">
                    Learn More ➔
                  </button>
                </div>
              </div>

              <div className="text-center text-[11px] text-gray-500">
                100% targeted to women commuters, college students, and solo travelers.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
