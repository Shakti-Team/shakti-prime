import React from 'react';
import {
  Building2,
  Megaphone,
  MapPin,
  CheckCircle2,
  Mail,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function EnterprisePage() {
  return (
    <div className="pt-24 sm:pt-32 pb-24 min-h-screen bg-[#FAFAF9] text-gray-900 animate-in fade-in duration-200">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-4 py-1.5 rounded-full border border-rose-200 mb-4 shadow-xs">
            <Building2 className="w-4 h-4 text-rose-600" />
            <span>Dedicated Enterprise & Brand Monetization Hub</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-950 font-display tracking-tight">
            Enterprise Safety & Brand Partnerships
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
            Verified companies, restaurants, transport fleets, and brands can partner with Shakti to showcase sponsored safety banners, posters, and geo-targeted safe zone perks directly inside the Shakti App.
          </p>
        </div>

        {/* 2 Main Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-gray-200/90 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100 mb-6">
                <Megaphone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-950 font-display">In-App Verified Brand Banners</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Run targeted, contextual safety awareness banners and promotional campaigns inside Shakti App feed.
              </p>
              <div className="space-y-2 text-xs text-gray-700 font-semibold">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>High engagement with 100% verified women audience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Contextual placement during travel & commute hours</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-gray-200/90 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-950 font-display">Geo-Fenced Safe Zone Perks</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Register your restaurant or boutique as a verified Shakti safe haven. Automatically notify nearby Shakti users of exclusive safe-zone perks!
              </p>
              <div className="space-y-2 text-xs text-gray-700 font-semibold">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Hyper-local GPS radius targeting (100m to 2000m)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Verified Safe Haven badge for your establishment</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Clean, Elegant Contact Company Card (White background, Dark CTA button, No heavy pink!) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/90 shadow-xl text-center max-w-4xl mx-auto space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto border border-rose-100">
            <Mail className="w-7 h-7" />
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-gray-950 font-display">
            Partner with Shakti Enterprise
          </h3>

          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Interested in launching brand safety banners, registering your store as a safe haven, or acquiring enterprise safety licensing? Reach out directly to our partnerships team.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:enterprise@shaktiapp.in?subject=Shakti%20Enterprise%20Partnership%20Inquiry"
              className="bg-gray-950 hover:bg-black text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base shadow-md hover:scale-105 transition-all flex items-center space-x-2.5"
            >
              <Mail className="w-4.5 h-4.5 text-gray-300" />
              <span>Contact Shakti Team (enterprise@shaktiapp.in)</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </a>
          </div>

          <div className="pt-2 text-xs text-gray-500 font-mono flex items-center justify-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Our enterprise partnership team responds within 24 hours</span>
          </div>
        </div>

      </div>

    </div>
  );
}
