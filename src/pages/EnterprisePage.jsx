import React from 'react';
import {
  Store,
  Megaphone,
  MapPin,
  CheckCircle2,
  Mail,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function EnterprisePage() {
  return (
    <div className="pt-24 sm:pt-32 pb-24 min-h-screen bg-[#FAFAF9] text-gray-900 animate-in fade-in duration-200">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-4 py-1.5 rounded-full border border-rose-200 mb-4 shadow-xs">
            <Store className="w-4 h-4 text-rose-600" />
            <span>Dedicated Merchant, Brand & Enterprise Hub</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-950 font-display tracking-tight">
            Shop Promotions, Community Posts & Enterprise Safety
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
            Local boutiques, restaurants, brands, and corporate fleets can partner with Shakti to list shops, publish deal posts with direct WhatsApp orders, offer Safe Havens, and launch city-wide spotlight banners.
          </p>
        </div>

        {/* 2 Main Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-gray-200/90 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200 mb-6">
                <Store className="w-6 h-6" />
              </div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 mb-2">
                <Sparkles className="w-3 h-3 text-amber-600" />
                <span>Prime Merchant Hub</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-950 font-display">Shakti Prime Partner for Shops & Cafes</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                List your clothing boutique, salon, cafe, or store on the Shakti Community Hub. Post daily product offers with discount badges and let customers order with 1-tap WhatsApp chat.
              </p>
              <div className="space-y-2 text-xs text-gray-700 font-semibold">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Gold Verified Shop Badge & direct "Order on WhatsApp" CTA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Post unlimited product deal cards, prices & redeem Shakti Coins</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Safe Haven Partner Commitment to protect women & students in distress</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-amber-50/60 rounded-2xl border border-amber-200/80 flex items-center justify-between text-xs mt-4">
              <span className="font-bold text-amber-900">Prime Merchant Onboarding:</span>
              <span className="text-amber-700 font-extrabold text-sm">30-Day Free Trial Available</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-gray-200/90 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 mb-6">
                <Megaphone className="w-6 h-6" />
              </div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 mb-2">
                <MapPin className="w-3 h-3 text-blue-600" />
                <span>Sponsored Ads & Duty of Care</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-950 font-display">Community Spotlight Banners & Corporate Fleet</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Publish high-impact community spotlight banners across city feeds, configure hyper-local GPS safe-zone perks, or equip late-shift female employees with real-time cab commute monitoring.
              </p>
              <div className="space-y-2 text-xs text-gray-700 font-semibold">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Sponsored community spotlight banners across verified city feeds</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Hyper-local GPS safe-zone perks (100m to 2000m radius targeting)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Corporate late-shift employee duty-of-care & live cab dashboard</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-blue-50/60 rounded-2xl border border-blue-200/80 flex items-center justify-between text-xs mt-4">
              <span className="font-bold text-blue-900">Campaigns & Fleet SaaS:</span>
              <span className="text-blue-700 font-extrabold text-sm">Custom Enterprise SLA</span>
            </div>
          </div>

        </div>

        {/* Clean, Elegant Contact Company Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/90 shadow-xl text-center max-w-4xl mx-auto space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto border border-rose-100">
            <Mail className="w-7 h-7" />
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-gray-950 font-display">
            Partner with Shakti as a Merchant or Sponsor
          </h3>

          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Interested in listing your shop, posting WhatsApp-enabled deals, registering as a Safe Haven, or launching enterprise campaigns? Reach out directly to our partner onboarding desk.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:enterprise@shaktiapp.in?subject=Shakti%20Prime%20Merchant%20%26%20Partnership%20Inquiry"
              className="bg-gray-950 hover:bg-black text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base shadow-md hover:scale-105 transition-all flex items-center space-x-2.5"
            >
              <Mail className="w-4.5 h-4.5 text-gray-300" />
              <span>Contact Partner Desk (enterprise@shaktiapp.in)</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </a>
          </div>

          <div className="pt-2 text-xs text-gray-500 font-mono flex items-center justify-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Our merchant & enterprise onboarding team responds within 24 hours</span>
          </div>
        </div>

      </div>

    </div>
  );
}
