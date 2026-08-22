import React, { useState } from 'react';
import { 
  GraduationCap, 
  Moon, 
  Compass, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Sparkles, 
  Smartphone 
} from 'lucide-react';

export default function UseCasesSection({ onOpenDownload }) {
  const [activeTab, setActiveTab] = useState('students');

  const useCases = [
    {
      id: 'students',
      label: 'College Students',
      icon: GraduationCap,
      title: 'Safe Campus Navigation & Late-Night Library Return Circles',
      description: 'College students walking between hostels, labs, and off-campus housing stay protected with automated peer-circles, live safe corridor alerts, and campus security SOS links.',
      metrics: [
        { label: 'Campus Response', value: '< 90s' },
        { label: 'Peer Groups', value: 'Unlimited' },
        { label: 'Battery Impact', value: '< 1.2% / hr' }
      ],
      highlights: [
        'Automatic arrival check-in notifications to roommates & family',
        'Direct link with university campus security dispatch',
        'Discreet simulated fake calls to evade awkward situations',
        'Geo-fenced safe route corridors on college pathways'
      ],
      badge: 'Campus Safety Verified'
    },
    {
      id: 'commuters',
      label: 'Late-Night Commuters',
      icon: Moon,
      title: 'Cab Ride Monitoring & Well-Lit Metro Transit Corridors',
      description: 'Whether booking rideshares, cabs, or walking from the metro after hours, AI Shield Guard dynamically analyzes route adherence and checks in during unexpected halts.',
      metrics: [
        { label: 'Route Deviation Alert', value: 'Instant' },
        { label: 'Safe Corridor Score', value: '98/100' },
        { label: 'Live Video Record', value: 'Auto-Encrypted' }
      ],
      highlights: [
        'Instant alerts if cab deviates from the GPS route',
        'Live journey sharing with real-time ETA and battery sync',
        'Silent hands-free voice trigger ("Help Shakti") in closed vehicles',
        'Pre-vetted brightly illuminated corridors and police check-points'
      ],
      badge: 'Commuter Shield'
    },
    {
      id: 'travelers',
      label: 'Solo Travelers',
      icon: Compass,
      title: 'Global Roaming Safety & Offline SOS Infrastructure',
      description: 'Solo travelers exploring new cities get offline emergency SMS gateways, local police helpline integration, and instant embassy coordination support.',
      metrics: [
        { label: 'Offline SMS Sync', value: '100% Guaranteed' },
        { label: 'Local Police Relay', value: '112/911 Enabled' },
        { label: 'Data Encryption', value: '256-bit AES' }
      ],
      highlights: [
        'Works seamlessly even in low or zero internet connectivity areas',
        'Zero-knowledge location logs (your privacy stays strictly yours)',
        'Automatic nearby 24/7 hospital, embassy, and police station locator',
        'Multi-lingual voice command recognition'
      ],
      badge: 'Explorer Protection'
    },
    {
      id: 'enterprise',
      label: 'Enterprise & Shift Workers',
      icon: Building2,
      title: 'Corporate Employee Safety & BPO Shift Mobility',
      description: 'Enterprises and organizations integrate Shakti to safeguard night-shift personnel, healthcare professionals, and remote field staff with central safety dashboards.',
      metrics: [
        { label: 'Enterprise Uptime', value: '99.99%' },
        { label: 'Audit Compliance', value: 'SOC-2 Ready' },
        { label: 'Escalation Speed', value: '< 2.0s' }
      ],
      highlights: [
        'Fleet and cab roster safety telemetry integration',
        'HR and security command desk centralized portal',
        'Automated geofence tracking around corporate zones',
        'Privacy-first employee opt-in and scheduled monitoring'
      ],
      badge: 'Enterprise Security'
    }
  ];

  const currentCase = useCases.find((c) => c.id === activeTab) || useCases[0];

  return (
    <section id="use-cases" className="py-24 sm:py-32 bg-gray-50/70 relative overflow-hidden border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-rose-600 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200 mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Tailored Protection Scenarios</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight">
            Designed for Real People in Real Situations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            From university campus walks to late night rideshares and solo expeditions, Shakti adapts to every lifestyle.
          </p>
        </div>

        {/* Tab Navigation Pill Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {useCases.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gray-900 text-white shadow-md scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200/90'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-rose-400' : 'text-gray-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Use Case Deep Dive Card */}
        <div className="bg-white rounded-3xl border border-gray-200/90 shadow-xl overflow-hidden p-8 sm:p-12 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentCase.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 leading-tight">
                {currentCase.title}
              </h3>

              <p className="text-base text-gray-600 leading-relaxed">
                {currentCase.description}
              </p>

              {/* Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {currentCase.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenDownload}
                  className="flex items-center space-x-2 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Get Protected Today</span>
                </button>

                <a
                  href="#simulator"
                  className="flex items-center space-x-1.5 text-sm font-semibold text-gray-700 hover:text-gray-950 transition-colors"
                >
                  <span>Test Emergency Protocol</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Metrics & Showcase Tile */}
            <div className="lg:col-span-5 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white rounded-2xl p-7 border border-gray-800 space-y-6">
              
              <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                <span className="text-xs font-mono text-gray-400">BENCHMARK PERFORMANCE</span>
                <span className="text-xs font-mono text-emerald-400 flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>100% Reliable</span>
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3">
                {currentCase.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-gray-800/70 rounded-xl p-3 text-center border border-gray-700/60">
                    <div className="text-lg sm:text-xl font-bold font-mono text-white">{metric.value}</div>
                    <div className="text-[11px] text-gray-400 mt-1 font-sans">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Live Protection Status Indicator */}
              <div className="bg-gray-800/40 rounded-xl p-4 border border-gray-700/40 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Protection Layer:</span>
                  <span className="text-white font-semibold">Autonomous Guard v2.4</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Response Speed:</span>
                  <span className="text-emerald-400 font-mono font-bold">&lt; 1.8s SOS Broadcast</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Encryption Standard:</span>
                  <span className="text-gray-300 font-mono">Zero-Knowledge E2EE</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
