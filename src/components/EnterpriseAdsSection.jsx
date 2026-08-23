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

export default function EnterpriseAdsSection() {
  return (
    <section id="enterprise" className="py-20 sm:py-28 bg-gradient-to-b from-white via-pink-50/40 to-white text-gray-900 relative overflow-hidden border-t border-pink-100">
      
      {/* Background Soft Aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-rose-100/50 via-pink-100/40 to-blue-100/30 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-4 py-1.5 rounded-full border border-rose-200 mb-4 shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-rose-600" />
            <span>Enterprise & Brand Partnerships</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight font-display">
            Corporate Safety Suite & Brand Sponsorships
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Verified companies, restaurants, ride services, and brands can partner with Shakti to publish sponsored safety banners, posters, and geo-targeted safe zone perks inside the Shakti App.
          </p>
        </div>

        {/* 2 Main Enterprise Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Pillar 1: Verified Brand Ad Banners */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-pink-200/90 shadow-[0_10px_30px_rgb(244,63,94,0.08)] flex flex-col justify-between group hover:border-rose-400 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-6 group-hover:scale-110 transition-transform">
                <Megaphone className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">
                In-App Verified Brand Banners
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Verified enterprises can publish sponsored safety announcements, wellness initiatives, and safe-travel banners into the Shakti app feed targeting active women commuters.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Strict brand verification ensuring 100% safe, high-trust campaigns</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Contextual placement during commute hours & safe transit routes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: Geo-Fenced Safe Zone Perks */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-pink-200/90 shadow-[0_10px_30px_rgb(244,63,94,0.08)] flex flex-col justify-between group hover:border-blue-400 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">
                Geo-Targeted Safe Zone Perks
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Restaurants, cafes, and verified retail hubs set their GPS location radius. When a Shakti user walks into range, Shakti automatically triggers an attractive safe-zone perk notification!
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Hyper-local GPS radius targeting (100m to 2000m geofence)</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Verified Safe Haven badge for your business</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Clean Contact Company Callout Box */}
        <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center max-w-4xl mx-auto space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto border border-white/30">
            <Mail className="w-7 h-7 text-white" />
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold font-display">
            Partner with Shakti Enterprise
          </h3>

          <p className="text-sm sm:text-base text-pink-100 max-w-xl mx-auto leading-relaxed">
            Interested in launching brand safety banners, registering your store as a safe haven, or acquiring enterprise safety licensing? Reach out directly to our partnerships team.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:enterprise@shaktiapp.in?subject=Shakti%20Enterprise%20Partnership%20Inquiry"
              className="bg-white text-rose-700 hover:bg-rose-50 px-8 py-4 rounded-full font-bold text-sm sm:text-base shadow-md hover:scale-105 transition-all flex items-center space-x-2.5"
            >
              <Mail className="w-4.5 h-4.5" />
              <span>Contact Shakti Team (enterprise@shaktiapp.in)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-2 text-xs text-pink-200 font-mono flex items-center justify-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-pink-200" />
            <span>Our enterprise partnership team responds within 24 hours</span>
          </div>
        </div>

      </div>
    </section>
  );
}
