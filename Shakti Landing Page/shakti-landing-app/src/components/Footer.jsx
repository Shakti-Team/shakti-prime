import React from 'react';
import { Phone } from 'lucide-react';
import ShaktiLogoSweepWordmark from './ShaktiLogoSweepWordmark';

export default function Footer({ onOpenPrivacy, onOpenDownload, onNavigatePage }) {
  return (
    <footer className="relative z-10 bg-white border-t border-gray-200/80 pt-16 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Emergency Helplines Callout */}
        <div className="mb-14 bg-rose-50/70 border border-rose-200/80 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900">National Emergency Helplines (24/7 Direct Relay)</h4>
              <p className="text-[11px] text-gray-600">Immediate access for distress & safety</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-xs font-bold">
            <a href="tel:112" className="bg-white text-rose-700 px-3 py-1 rounded-lg border border-rose-200 shadow-2xs hover:bg-rose-50 transition-colors">
              🚨 112
            </a>
            <a href="tel:1091" className="bg-white text-rose-700 px-3 py-1 rounded-lg border border-rose-200 shadow-2xs hover:bg-rose-50 transition-colors">
              🛡️ 1091
            </a>
            <a href="tel:1090" className="bg-white text-rose-700 px-3 py-1 rounded-lg border border-rose-200 shadow-2xs hover:bg-rose-50 transition-colors">
              📞 1090
            </a>
          </div>
        </div>

        {/* Multi-column Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pb-12 text-sm font-medium text-gray-600">
          <div className="space-y-3">
            <div className="text-xs font-bold text-gray-900 uppercase tracking-wider">Product</div>
            <div><button onClick={() => onNavigatePage && onNavigatePage('products')} className="hover:text-gray-950 transition-colors">Shakti Mobile 2.0</button></div>
            <div><button onClick={() => onNavigatePage && onNavigatePage('products')} className="hover:text-gray-950 transition-colors">Voice Sentinel AI</button></div>
            <div><button onClick={() => onNavigatePage && onNavigatePage('products')} className="hover:text-gray-950 transition-colors">Guardian Mesh</button></div>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-bold text-gray-900 uppercase tracking-wider">Plans & Access</div>
            <div><button onClick={() => onNavigatePage && onNavigatePage('pricing')} className="hover:text-gray-950 transition-colors">Pricing (Free & ₹49)</button></div>
            <div><button onClick={onOpenDownload} className="hover:text-gray-950 transition-colors">Download App</button></div>
            <div><button onClick={() => onNavigatePage && onNavigatePage('enterprise')} className="hover:text-gray-950 transition-colors">Enterprise Suite</button></div>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-bold text-gray-900 uppercase tracking-wider">Safety & Privacy</div>
            <div><button onClick={onOpenPrivacy} className="hover:text-gray-950 transition-colors">Zero-Knowledge Security</button></div>
            <div><button onClick={onOpenPrivacy} className="hover:text-gray-950 transition-colors">Privacy Policy</button></div>
            <div><a href="mailto:security@shaktiapp.in" className="hover:text-gray-950 transition-colors">Security Disclosure</a></div>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-bold text-gray-900 uppercase tracking-wider">Ecosystem</div>
            <div><button onClick={() => onNavigatePage && onNavigatePage('enterprise')} className="hover:text-gray-950 transition-colors">Brand Safety Banners</button></div>
            <div><button onClick={() => onNavigatePage && onNavigatePage('enterprise')} className="hover:text-gray-950 transition-colors">Campus Safe Zones</button></div>
            <div><a href="tel:112" className="hover:text-rose-600 transition-colors">112 Police Gateway</a></div>
          </div>
        </div>

        {/* Clean, Giant Static Wordmark matching reference image */}
        <ShaktiLogoSweepWordmark />

        {/* Bottom Google-style footer row matching reference image exactly */}
        <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-gray-600 gap-4">
          
          {/* Left: Normal Shakti Logo & Brand Name */}
          <div className="flex items-center space-x-2.5">
            <img 
              src="/app_logo.png" 
              alt="Shakti" 
              className="w-6 h-6 object-contain rounded-md"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/shield.svg';
              }}
            />
            <span className="font-semibold text-gray-900 tracking-tight text-base font-display">
              Shakti
            </span>
          </div>

          {/* Right: Clean Minimal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 font-medium">
            <button 
              onClick={onOpenPrivacy} 
              className="text-gray-600 hover:text-gray-950 transition-colors"
            >
              About Shakti
            </button>
            <button 
              onClick={() => onNavigatePage && onNavigatePage('products')} 
              className="text-gray-600 hover:text-gray-950 transition-colors"
            >
              Shakti Products
            </button>
            <button 
              onClick={onOpenPrivacy} 
              className="text-gray-600 hover:text-gray-950 transition-colors"
            >
              Privacy
            </button>
            <button 
              onClick={onOpenPrivacy} 
              className="text-gray-600 hover:text-gray-950 transition-colors"
            >
              Terms
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}

