import React from 'react';
import {
  TrendingUp,
  ShieldAlert,
  Users,
  Building2,
  Megaphone,
  Landmark,
  Repeat,
  CheckCircle2
} from 'lucide-react';

export default function BusinessModelSection() {
  const revenueStreams = [
    {
      title: 'B2C Pro Subscriptions',
      share: '45% Projected Revenue',
      price: '₹99 / Mo or ₹799 / Yr',
      icon: Users,
      color: 'rose',
      description:
        'Recurring consumer SaaS from advanced AI acoustic sentinel, cloud encrypted evidence vault, offline mesh relay, and multi-guardian circles.',
      metrics: 'High Margin (85%+ Gross Margin), predictable ARR growth.'
    },
    {
      title: 'B2B Corporate & Campus Safety SaaS',
      share: '30% Projected Revenue',
      price: '₹49 / Seat / Mo (Annual Contracts)',
      icon: Building2,
      color: 'blue',
      description:
        'Enterprise fleet dashboard for IT, BPO, healthcare, and universities to monitor late-night cab commutes and ensure safety duty-of-care compliance.',
      metrics: 'High ACV (Annual Contract Value), low enterprise churn.'
    },
    {
      title: 'In-App Brand Safety Banners',
      share: '15% Projected Revenue',
      price: '₹4,999+ / Campaign (CPC/CPM)',
      icon: Megaphone,
      color: 'pink',
      description:
        'Contextual, brand-safe marketing banners for verified transit, healthcare, insurance, and women-centric wellness companies in the mobile app.',
      metrics: 'High CTR (3.8x industry average) due to targeted trust audience.'
    },
    {
      title: 'Smart City & Government Grants',
      share: '10% Projected Revenue',
      price: 'Public Safety Grants & 112 Tenders',
      icon: Landmark,
      color: 'emerald',
      description:
        'Municipal police control room integrations, smart transit safety tenders, and women safety impact grants from public welfare funds.',
      metrics: 'Long-term defensibility and government-backed distribution.'
    }
  ];

  return (
    <section id="business-model" className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-pink-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200/80 mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-rose-600" />
            <span>Sustainable Growth & Economics</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight">
            How Shakti Sustains & Scales Its Mission
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            A resilient multi-tiered business model designed to keep life-saving protection universally accessible while building a highly profitable, scalable enterprise.
          </p>
        </div>

        {/* Problem vs Solution High-Level Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          
          {/* Problem Card */}
          <div className="bg-rose-50/60 rounded-3xl p-7 border border-rose-100 space-y-4">
            <div className="flex items-center space-x-2 text-rose-700 font-extrabold text-xs uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4" />
              <span>The Critical Problem</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Women Safety Gaps in Real-World Crises
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-rose-600 font-bold">✕</span>
                <span>Traditional apps require unlocking the phone, typing contacts, or having 4G/5G data.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-rose-600 font-bold">✕</span>
                <span>Emergency contacts often miss silent notifications or delayed SMS text messages.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-rose-600 font-bold">✕</span>
                <span>Corporations lack real-time visibility into night-shift employee cab transit safety.</span>
              </li>
            </ul>
          </div>

          {/* Solution Card */}
          <div className="bg-emerald-50/60 rounded-3xl p-7 border border-emerald-100 space-y-4">
            <div className="flex items-center space-x-2 text-emerald-700 font-extrabold text-xs uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Shakti Solution</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Autonomous & Zero-Friction Emergency Grid
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Hands-free voice detection ("Help Shakti") + Triple power-click works even when locked.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Sub-2s loud siren push override, live battery & route telemetry, and offline mesh relay.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Enterprise SaaS dashboard + in-app verified brand sponsor banners fund ongoing innovation.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 4 Revenue Streams Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {revenueStreams.map((stream, idx) => {
            const Icon = stream.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-pink-200/80 shadow-sm hover:shadow-xl hover:border-pink-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200/60">
                      {stream.share}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-gray-900 mb-1">
                    {stream.title}
                  </h4>
                  <div className="text-xs font-bold text-rose-600 mb-3">
                    {stream.price}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {stream.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-pink-100 text-[11px] font-semibold text-gray-500">
                  {stream.metrics}
                </div>
              </div>
            );
          })}
        </div>

        {/* Organic Growth Flywheel Box */}
        <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 rounded-3xl p-8 sm:p-10 text-white shadow-xl shadow-rose-600/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-white bg-white/20 px-3 py-1 rounded-full backdrop-blur-xs">
                <Repeat className="w-3.5 h-3.5" />
                <span>Zero CAC Viral Flywheel</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Every Active User Brings 3 to 5 Guardians Into the Ecosystem
              </h3>
              <p className="text-xs sm:text-sm text-pink-100 leading-relaxed">
                When a user registers her emergency circle, each guardian installs Shakti to monitor live telemetry. This organic, trust-based referral loop creates negative customer acquisition costs (CAC &lt; ₹0) and rapid brand expansion.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center">
                <div className="text-2xl font-extrabold">3.8x</div>
                <div className="text-[11px] text-pink-100 font-medium">Guardian Viral Factor (K-Factor)</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center">
                <div className="text-2xl font-extrabold">&lt; 1.8s</div>
                <div className="text-[11px] text-pink-100 font-medium">Average SOS Dispatch Latency</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
