import React from 'react';
import {
  Store,
  Megaphone,
  MapPin,
  CheckCircle2,
  Mail,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
  Sparkles,
  ShoppingBag
} from 'lucide-react';

export default function EnterpriseAdsSection() {
  return (
    <section id="enterprise" className="py-20 sm:py-28 bg-gradient-to-b from-white via-pink-50/40 to-white text-gray-900 relative overflow-hidden border-t border-pink-100">
      
      {/* Background Soft Aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-rose-100/50 via-pink-100/40 to-blue-100/30 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-4 py-1.5 rounded-full border border-rose-200 mb-4 shadow-xs">
            <Store className="w-3.5 h-3.5 text-rose-600" />
            <span>Shakti Prime Partner & Enterprise</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight font-display">
            Shop Promotions, Community Posts & Enterprise Safety
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Local boutiques, restaurants, brands, and corporate fleets can partner with Shakti to list shops, publish deal posts with direct WhatsApp orders, offer Safe Havens, and launch city-wide spotlight banners.
          </p>
        </div>

        {/* 2 Main Enterprise Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Pillar 1: Shakti Prime Partner for Local Shops */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-pink-200/90 shadow-[0_10px_30px_rgb(244,63,94,0.08)] flex flex-col justify-between group hover:border-rose-400 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                <Store className="w-6 h-6" />
              </div>

              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 mb-2">
                <Sparkles className="w-3 h-3 text-amber-600" />
                <span>Prime Merchant Hub</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">
                Shakti Prime Partner for Shops & Cafes
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                List your clothing boutique, salon, cafe, or store on the Shakti Community Hub. Post daily product offers with discount badges and let customers order with 1-tap WhatsApp chat.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Gold Verified Shop Badge & direct "Order on WhatsApp" CTA</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Post unlimited product deal cards, prices & redeem Shakti Coins</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Safe Haven Partner Commitment to protect women & students in distress</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-amber-50/60 rounded-2xl border border-amber-200/80 flex items-center justify-between text-xs">
              <span className="font-bold text-amber-900">Prime Merchant Onboarding:</span>
              <span className="text-amber-700 font-extrabold text-sm">30-Day Free Trial Available</span>
            </div>
          </div>

          {/* Pillar 2: Feed Banners & Enterprise Fleet Safety */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-pink-200/90 shadow-[0_10px_30px_rgb(244,63,94,0.08)] flex flex-col justify-between group hover:border-blue-400 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <Megaphone className="w-6 h-6" />
              </div>

              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 mb-2">
                <MapPin className="w-3 h-3 text-blue-600" />
                <span>Sponsored Ads & Duty of Care</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">
                Community Spotlight Banners & Corporate Fleet
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Publish high-impact community spotlight banners across city feeds, configure hyper-local GPS safe-zone perks, or equip late-shift female employees with real-time cab commute monitoring.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Sponsored community spotlight banners across verified city feeds</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Hyper-local GPS safe-zone perks (100m to 2000m radius targeting)</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Corporate late-shift employee duty-of-care & live cab dashboard</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-blue-50/60 rounded-2xl border border-blue-200/80 flex items-center justify-between text-xs">
              <span className="font-bold text-blue-900">Campaigns & Fleet SaaS:</span>
              <span className="text-blue-700 font-extrabold text-sm">Custom Enterprise SLA</span>
            </div>
          </div>

        </div>

        {/* Clean Contact Company Callout Box */}
        <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center max-w-4xl mx-auto space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto border border-white/30">
            <Mail className="w-7 h-7 text-white" />
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold font-display">
            Partner with Shakti as a Merchant or Sponsor
          </h3>

          <p className="text-sm sm:text-base text-pink-100 max-w-xl mx-auto leading-relaxed">
            Interested in listing your shop, posting WhatsApp-enabled deals, registering as a Safe Haven, or launching enterprise campaigns? Contact our partner onboarding desk.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:enterprise@shaktiapp.in?subject=Shakti%20Prime%20Merchant%20%26%20Partnership%20Inquiry"
              className="bg-white text-rose-700 hover:bg-rose-50 px-8 py-4 rounded-full font-bold text-sm sm:text-base shadow-md hover:scale-105 transition-all flex items-center space-x-2.5"
            >
              <Mail className="w-4.5 h-4.5" />
              <span>Contact Partner Desk (enterprise@shaktiapp.in)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-2 text-xs text-pink-200 font-mono flex items-center justify-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-pink-200" />
            <span>Our merchant & enterprise onboarding team responds within 24 hours</span>
          </div>
        </div>

      </div>
    </section>
  );
}
