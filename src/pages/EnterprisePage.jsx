import React from 'react';
import {
  ShieldAlert,
  Building2,
  MapPin,
  CheckCircle2,
  Mail,
  ArrowRight,
  ShieldCheck,
  Users
} from 'lucide-react';

export default function EnterprisePage() {
  return (
    <div className="pt-24 sm:pt-32 pb-24 min-h-screen bg-[#FAFAF9] text-gray-900 animate-in fade-in duration-200">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-4 py-1.5 rounded-full border border-rose-200 mb-4 shadow-xs">
            <Building2 className="w-4 h-4 text-rose-600" />
            <span>Campus, Community & Institutional Safety</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-950 font-display tracking-tight">
            Safety Sentinel for Campuses, Fleets & Communities
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
            Equip universities, student hostels, residential communities, and workforce teams with autonomous emergency dispatch, real-time commute monitoring, and centralized safety telemetry.
          </p>
        </div>

        {/* 2 Main Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          
          {/* Pillar 1: Campus & Community Safety */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-gray-200/90 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-200 mb-6">
                <Users className="w-6 h-6" />
              </div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200 mb-2">
                <ShieldCheck className="w-3 h-3 text-rose-600" />
                <span>Campus & Hostels</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-950 font-display">Campus & Student Safety Corridors</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Deploy smart geofenced safe routes for students, library late-nighters, and campus commuters with verified guardian networks and instant on-campus emergency response.
              </p>
              <div className="space-y-2 text-xs text-gray-700 font-semibold">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Campus-wide verified safety network & trusted student corridors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Autonomous journey check-ins for evening classes & hostel transit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Direct integration with campus security desks & 112 emergency services</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-rose-50/60 rounded-2xl border border-rose-200/80 flex items-center justify-between text-xs mt-4">
              <span className="font-bold text-rose-900">Academic & Community Partnership:</span>
              <span className="text-rose-700 font-extrabold text-sm">Free for Educational Institutions</span>
            </div>
          </div>

          {/* Pillar 2: Workforce & Fleet Commute Monitoring */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-gray-200/90 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 mb-6">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 mb-2">
                <MapPin className="w-3 h-3 text-blue-600" />
                <span>Duty of Care</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-950 font-display">Workforce & Late-Shift Commute Safety</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Protect night-shift employees, solo field workers, and corporate cab commuters with automated route anomaly alerts and instant dispatch telemetry.
              </p>
              <div className="space-y-2 text-xs text-gray-700 font-semibold">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Corporate late-shift employee duty-of-care & live cab transit tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Route diversion detection with automated escalation protocols</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Zero-delay SOS integration with company response teams & 112 gateway</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-blue-50/60 rounded-2xl border border-blue-200/80 flex items-center justify-between text-xs mt-4">
              <span className="font-bold text-blue-900">Institutional Safety Suite:</span>
              <span className="text-blue-700 font-extrabold text-sm">Enterprise SLA & Custom Onboarding</span>
            </div>
          </div>

        </div>

        {/* Clean, Elegant Contact Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/90 shadow-xl text-center max-w-4xl mx-auto space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto border border-rose-100">
            <Mail className="w-7 h-7" />
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-gray-950 font-display">
            Partner with SHAKTI ONE for Campus & Institutional Safety
          </h3>

          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Interested in deploying campus safe corridors, residential safety mesh, or workforce duty-of-care protocols? Reach out directly to our institutional team.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:support@shaktiapp.in?subject=SHAKTI%20ONE%20Institutional%20%26%20Campus%20Safety%20Inquiry"
              className="bg-gray-950 hover:bg-black text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base shadow-md hover:scale-105 transition-all flex items-center space-x-2.5"
            >
              <Mail className="w-4.5 h-4.5 text-gray-300" />
              <span>Contact Safety Desk (support@shaktiapp.in)</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </a>
          </div>

          <div className="pt-2 text-xs text-gray-500 font-mono flex items-center justify-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Our institutional safety team responds within 24 hours</span>
          </div>
        </div>

      </div>

    </div>
  );
}
