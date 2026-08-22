import React, { useState } from 'react';
import {
  Users,
  Shield,
  Heart,
  Building2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  UserCheck
} from 'lucide-react';

export default function RolesSection({ onOpenDownload }) {
  const [activeRole, setActiveRole] = useState(0);

  const roles = [
    {
      id: 'women',
      title: 'Women & Commuters',
      subtitle: 'Primary User Protection',
      badge: 'Core Platform',
      icon: Heart,
      color: 'rose',
      description:
        'Equipped with instant 1-tap SOS, discreet hardware power-button trigger, background voice detection keyword ("Help Shakti"), fake call escort, and safe route corridor monitoring.',
      features: [
        '1-Tap & 3x Power Button SOS Trigger',
        'Hands-Free Acoustic Keyword Detection',
        'AI Fake Call generator to exit uncomfortable situations',
        'Zero-knowledge encrypted cloud evidence backup'
      ],
      quote: '"I feel secure walking back from the metro at night knowing my guardians and emergency services have my back in under 2 seconds."'
    },
    {
      id: 'guardians',
      title: 'Parents & Family Guardians',
      subtitle: 'Real-Time Family Circle',
      badge: 'Guardian Network',
      icon: Users,
      color: 'pink',
      description:
        'Stay connected without invasive tracking. Receive instant high-priority siren push alerts when SOS is triggered, along with live moving GPS coordinates, device battery health, and safe arrival pings.',
      features: [
        'Live Real-Time Telemetry & Battery Level Sync',
        'Instant Override Loud Siren even in Silent Mode',
        'Automated Safe Zone Arrival & Departure Notifications',
        'Shared Multi-Guardian Family Command Center'
      ],
      quote: '"As a parent, the automated safe-arrival notifications and instant SOS loud alert give us complete peace of mind every single day."'
    },
    {
      id: 'responders',
      title: 'Community Responders & Police',
      subtitle: 'Rapid Emergency Dispatch',
      badge: '112 / Police Gateway',
      icon: Shield,
      color: 'emerald',
      description:
        'When an emergency occurs, Shakti immediately relays precise GPS coordinates and emergency voice beacons to the nearest verified community volunteers and police control rooms.',
      features: [
        'Sub-2s Direct Dispatch to Local Emergency 112 Gateway',
        'Nearby Verified Citizen Volunteer Mesh Response',
        'Live Audio Clip & Exact Pinpoint Location Relay',
        'Offline SMS & Bluetooth Beacon Fallback'
      ],
      quote: '"Shakti provides first responders with verified location and vital context before reaching the scene, saving crucial minutes."'
    },
    {
      id: 'enterprises',
      title: 'Campuses & Corporate Enterprises',
      subtitle: 'Institutional Safety & Brand Ads',
      badge: 'B2B Enterprise',
      icon: Building2,
      color: 'blue',
      description:
        'Companies and universities deploy Shakti for late-night female employee cab transport safety and campus safe walks, while verified partner brands can run contextual safety awareness banners.',
      features: [
        'Corporate Fleet & Cab Commute Real-Time Dashboard',
        'Campus Geo-Fenced Safe Zones for Students & Faculty',
        'Verified In-App Safety Sponsor Banner Marketplace',
        'Compliance & Safety Duty of Care Auditing'
      ],
      quote: '"We integrated Shakti for all our late-shift employees. It increased safety compliance and gave our team immense confidence."'
    }
  ];

  const current = roles[activeRole];

  return (
    <section id="roles" className="py-20 sm:py-28 bg-gradient-to-b from-white via-pink-50/30 to-white relative overflow-hidden border-t border-pink-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200/80 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connected Safety Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight">
            How Every Role Connects in Shakti
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            A cohesive 360-degree network bringing together women, family guardians, first responders, and enterprise organizations in real-time.
          </p>
        </div>

        {/* Role Selectors Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-5xl mx-auto">
          {roles.map((role, idx) => {
            const Icon = role.icon;
            const isSelected = activeRole === idx;
            return (
              <button
                key={role.id}
                onClick={() => setActiveRole(idx)}
                className={`p-4 rounded-3xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-rose-300 shadow-[0_10px_25px_rgb(244,63,94,0.12)] scale-[1.02]'
                    : 'bg-white/60 hover:bg-white border-pink-100/80 hover:border-pink-200 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                    isSelected ? 'bg-rose-600 text-white shadow-sm' : 'bg-pink-50 text-rose-600'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping"></span>
                  )}
                </div>
                <div>
                  <div className={`text-xs font-bold ${isSelected ? 'text-rose-600' : 'text-gray-500'}`}>
                    {role.subtitle}
                  </div>
                  <div className="text-sm font-extrabold text-gray-900 mt-0.5">
                    {role.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Role Detailed Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-pink-200/80 shadow-[0_15px_35px_rgba(244,63,94,0.08)] p-6 sm:p-10 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="flex items-center space-x-2.5">
                <span className="text-xs font-extrabold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
                  {current.badge}
                </span>
                <span className="text-xs text-gray-500 font-medium">Role Profile #{activeRole + 1}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {current.description}
              </p>

              <div className="space-y-2.5 pt-2">
                {current.features.map((feat, i) => (
                  <div key={i} className="flex items-start space-x-3 text-xs sm:text-sm font-semibold text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-pink-100 flex items-center justify-between">
                <button
                  onClick={onOpenDownload}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-md hover:shadow-rose-500/25 transition-all hover:scale-105"
                >
                  <span>Experience this in Shakti App</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Testimonial & Visual Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-rose-50 via-pink-50/60 to-white rounded-2xl p-6 border border-pink-100/90 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-pink-100 p-1 flex items-center justify-center">
                  <img 
                    src="/app_logo.png" 
                    alt="Shakti" 
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/shield.svg';
                    }}
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Verified Impact</div>
                  <div className="text-xs text-rose-600 font-medium">Real-World Protection Flow</div>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
                {current.quote}
              </blockquote>

              <div className="pt-3 border-t border-pink-200/60 flex items-center justify-between text-[11px] font-semibold text-gray-500">
                <span className="flex items-center space-x-1 text-emerald-700">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Zero Setup Complexity</span>
                </span>
                <span>Active 24/7</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
