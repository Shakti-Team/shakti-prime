import React from 'react';
import { Phone, Shield, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import ShaktiLogoSweepWordmark from './ShaktiLogoSweepWordmark';

export default function Footer({ onOpenPrivacy, onOpenDownload, onNavigatePage }) {
  const scrollTo = (sectionId) => {
    if (onNavigatePage) {
      onNavigatePage('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <footer className="relative z-10 bg-white border-t border-gray-200/80 pt-16 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Multi-column Quick Links - Clean, authentic essentials only */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 text-sm text-gray-600">
          
          {/* Column 1: Core App Features */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-gray-950 uppercase tracking-wider flex items-center space-x-1.5">
              <Shield className="w-3.5 h-3.5 text-rose-600" />
              <span>Features</span>
            </div>
            <div className="space-y-2 flex flex-col">
              <button onClick={() => scrollTo('sos-dispatch')} className="hover:text-rose-600 transition-colors text-left">
                Emergency SOS (112)
              </button>
              <button onClick={() => scrollTo('fake-call')} className="hover:text-rose-600 transition-colors text-left">
                AI Guard & Fake Call
              </button>
              <button onClick={() => scrollTo('city-hub')} className="hover:text-rose-600 transition-colors text-left">
                City Safe Hub
              </button>
              <button onClick={() => scrollTo('parenting-suite')} className="hover:text-rose-600 transition-colors text-left">
                Parent Mode & Geofence
              </button>
            </div>
          </div>

          {/* Column 2: Emergency Helplines */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-gray-950 uppercase tracking-wider flex items-center space-x-1.5">
              <Phone className="w-3.5 h-3.5 text-rose-600" />
              <span>Emergency</span>
            </div>
            <div className="space-y-2 flex flex-col">
              <a href="tel:112" className="text-rose-600 hover:text-rose-700 font-semibold transition-colors flex items-center space-x-1.5">
                <span>112 National Police</span>
              </a>
              <a href="tel:1091" className="text-gray-700 hover:text-gray-950 font-medium transition-colors flex items-center space-x-1.5">
                <span>1091 Women Helpline</span>
              </a>
              <a href="tel:181" className="text-gray-700 hover:text-gray-950 font-medium transition-colors flex items-center space-x-1.5">
                <span>181 Women in Distress</span>
              </a>
            </div>
          </div>

          {/* Column 3: Trust & Legal */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-gray-950 uppercase tracking-wider flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Trust & Safety</span>
            </div>
            <div className="space-y-2 flex flex-col">
              <button onClick={onOpenPrivacy} className="hover:text-gray-950 transition-colors text-left">
                Privacy Policy
              </button>
              <button onClick={onOpenPrivacy} className="hover:text-gray-950 transition-colors text-left">
                Terms of Service
              </button>
              <a href="mailto:support@shaktiapp.in" className="hover:text-gray-950 transition-colors text-left">
                Contact & Support
              </a>
            </div>
          </div>

          {/* Column 4: Download */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-gray-950 uppercase tracking-wider flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Get SHAKTI ONE</span>
            </div>
            <div className="space-y-3">
              <button 
                onClick={onOpenDownload}
                className="w-full inline-flex items-center justify-center space-x-2 bg-gray-950 hover:bg-black text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs"
              >
                <span>Download App</span>
              </button>
              <div className="text-xs text-gray-500 font-medium flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Next-Gen Public Safety • Zero Ads</span>
              </div>
            </div>
          </div>

        </div>

        {/* Clean, Giant Static Wordmark */}
        <ShaktiLogoSweepWordmark />

        {/* Bottom Minimal Navigation Row */}
        <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          
          {/* Left: Shakti Logo & Tagline */}
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 rounded-lg bg-gray-950 flex items-center justify-center text-white shadow-xs">
              <Shield className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-gray-950 tracking-tight text-sm font-display">
                SHAKTI ONE
              </span>
              <span className="text-gray-400">
                • Safety for Everyone.
              </span>
            </div>
          </div>

          {/* Right: Copyright & Simple Links */}
          <div className="flex items-center space-x-6 text-xs text-gray-500 font-medium">
            <button onClick={onOpenPrivacy} className="hover:text-gray-950 transition-colors">
              Privacy
            </button>
            <button onClick={onOpenPrivacy} className="hover:text-gray-950 transition-colors">
              Terms
            </button>
            <span>
              © {new Date().getFullYear()} SHAKTI ONE
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}

