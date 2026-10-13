import React, { useState } from 'react';
import {
  ChevronDown,
  Download,
  Menu,
  X,
  Smartphone,
  Radio,
  ArrowRight,
  UserCheck,
  Users,
  ShieldAlert,
  MessageCircle,
  PhoneCall,
  Sparkles,
  MapPin,
  CheckCircle2
} from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, onOpenDownload }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);

  const navigateTo = (page, sectionId) => {
    setMobileMenuOpen(false);
    setFeaturesDropdownOpen(false);

    if (sectionId && currentPage === 'home') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Nav Bar */}
      <div className="w-full bg-white/95 backdrop-blur-md border-b border-gray-200/80 py-2.5 sm:py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Brand Logo & Links */}
          <div className="flex items-center space-x-6 sm:space-x-8">
            
            {/* Shakti Logo & Name */}
            <button 
              onClick={() => navigateTo('home')} 
              className="flex items-center space-x-2.5 group focus:outline-none"
            >
              <div className="relative flex items-center justify-center">
                <img 
                  src="/app_logo.png" 
                  alt="SHAKTI ONE Logo" 
                  className="w-10 h-10 sm:w-11 sm:h-11 object-contain drop-shadow-xs group-hover:scale-105 transition-transform duration-200"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/shield.svg';
                  }}
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-950 font-display">
                SHAKTI ONE
              </span>
            </button>

            {/* Desktop Navigation Items */}
            <nav className="hidden md:flex items-center space-x-1 sm:space-x-2 text-sm font-medium text-gray-700">
              
              {/* Features Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setFeaturesDropdownOpen(true)}
                onMouseLeave={() => setFeaturesDropdownOpen(false)}
              >
                <button
                  onClick={() => navigateTo('products')}
                  className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full transition-all ${
                    currentPage === 'products' || featuresDropdownOpen
                      ? 'bg-rose-50 text-rose-700 font-semibold' 
                      : 'text-gray-700 hover:text-gray-950 hover:bg-gray-100'
                  }`}
                >
                  <span>App Features</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${
                    featuresDropdownOpen ? 'rotate-180 text-rose-600' : ''
                  }`} />
                </button>

                {/* Rich Glassmorphic Feature Dropdown Menu */}
                {featuresDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1.5 w-[580px] bg-white rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] border border-gray-200/90 p-5 animate-in fade-in slide-in-from-top-2 duration-150 z-50 text-left">
                    <div className="grid grid-cols-12 gap-5 items-stretch">
                      
                      {/* Left Side: Summary Card */}
                      <div className="col-span-5 bg-gradient-to-br from-rose-50/70 via-pink-50/40 to-white rounded-2xl p-4 flex flex-col justify-between border border-rose-100/80">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <img src="/app_logo.png" alt="SHAKTI ONE" className="w-8 h-8 object-contain drop-shadow-xs" />
                            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-white border border-rose-200/80 text-[10px] font-bold text-rose-700 shadow-2xs">
                              <Sparkles className="w-3 h-3 text-rose-500" />
                              <span>Free App</span>
                            </div>
                          </div>
                          <h4 className="text-base font-bold text-gray-950 font-display leading-tight">
                            SHAKTI ONE Platform
                          </h4>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            Personal protection for all, verified community circles, encrypted chatting & guardian sentinel inside one seamless app.
                          </p>
                        </div>

                        <div className="pt-3">
                          <button
                            onClick={() => navigateTo('products')}
                            className="w-full inline-flex items-center justify-center space-x-1.5 text-xs font-bold text-white bg-gray-950 hover:bg-black px-3.5 py-2 rounded-xl transition-all shadow-xs"
                          >
                            <span>Explore Full App</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* Right Side: Feature Items */}
                      <div className="col-span-7 space-y-1.5">
                        
                        {/* 1. Emergency War Room & SOS */}
                        <button 
                          onClick={() => navigateTo('home', 'sos-dispatch')}
                          className="w-full text-left flex items-start space-x-3 p-2 rounded-xl hover:bg-rose-50/70 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                            <ShieldAlert className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-900 group-hover:text-rose-600 flex items-center space-x-1.5">
                              <span>Emergency SOS & 112 Gateway</span>
                              <span className="text-[9px] bg-rose-100 text-rose-700 px-1.5 py-0.2 rounded font-mono font-bold">Sub-2s</span>
                            </div>
                            <div className="text-[11px] text-gray-500 line-clamp-1">3x Hardware click trigger & offline SMS relay</div>
                          </div>
                        </button>

                        {/* 2. City Hub */}
                        <button 
                          onClick={() => navigateTo('home', 'city-hub')}
                          className="w-full text-left flex items-start space-x-3 p-2 rounded-xl hover:bg-emerald-50/70 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                            <Users className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-900 group-hover:text-emerald-600">
                              City Hub & Safe Feed
                            </div>
                            <div className="text-[11px] text-gray-500 line-clamp-1">Verified community circles, verified safe havens & neighborhood alerts</div>
                          </div>
                        </button>

                        {/* 3. Encrypted Local Chatting */}
                        <button 
                          onClick={() => navigateTo('home', 'local-chat')}
                          className="w-full text-left flex items-start space-x-3 p-2 rounded-xl hover:bg-violet-50/70 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                            <MessageCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-900 group-hover:text-violet-600">
                              Encrypted Chat & Trust Circle
                            </div>
                            <div className="text-[11px] text-gray-500 line-clamp-1">Secure local messaging, friends & walk buddies</div>
                          </div>
                        </button>

                        {/* 4. Parent Mode */}
                        <button 
                          onClick={() => navigateTo('home', 'parenting-suite')}
                          className="w-full text-left flex items-start space-x-3 p-2 rounded-xl hover:bg-blue-50/70 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                            <UserCheck className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-900 group-hover:text-blue-600">
                              Parent Mode & Student Sentinel
                            </div>
                            <div className="text-[11px] text-gray-500 line-clamp-1">Guardian dashboard, geofence corridors & telemetry</div>
                          </div>
                        </button>

                        {/* 5. AI Guard & Smart Fake Call */}
                        <button 
                          onClick={() => navigateTo('home', 'fake-call')}
                          className="w-full text-left flex items-start space-x-3 p-2 rounded-xl hover:bg-amber-50/70 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                            <PhoneCall className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-900 group-hover:text-amber-700">
                              AI Guard & Smart Fake Call
                            </div>
                            <div className="text-[11px] text-gray-500 line-clamp-1">Night escape call companion & live journey GPS tracking</div>
                          </div>
                        </button>

                      </div>

                    </div>
                  </div>
                )}
              </div>

              {/* Meet Our Team Navigation Item */}
              <button
                onClick={() => navigateTo('home', 'meet-team')}
                className="px-3.5 py-1.5 rounded-full text-gray-700 hover:text-gray-950 hover:bg-gray-100 transition-all text-sm font-medium"
              >
                Team
              </button>

            </nav>
          </div>

          {/* Right Action: Download Pill */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenDownload}
              className="flex items-center space-x-2 bg-gradient-to-r from-gray-900 via-gray-950 to-black hover:from-rose-600 hover:to-rose-700 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download App</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg text-gray-700 hover:bg-gray-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-4 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200 text-sm font-medium">
          <button 
            onClick={() => navigateTo('home')}
            className={`w-full text-left px-3 py-2 rounded-xl ${currentPage === 'home' ? 'bg-gray-100 font-bold' : 'hover:bg-gray-50'}`}
          >
            Home
          </button>
          <button 
            onClick={() => navigateTo('products')}
            className={`w-full text-left px-3 py-2 rounded-xl ${currentPage === 'products' ? 'bg-gray-100 font-bold' : 'hover:bg-gray-50'}`}
          >
            App Features
          </button>
          <button 
            onClick={() => navigateTo('home', 'meet-team')}
            className="w-full text-left px-3 py-2 rounded-xl hover:bg-gray-50"
          >
            Meet the Team
          </button>

          <div className="pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDownload(); }}
              className="w-full flex items-center justify-center space-x-2 bg-gray-950 text-white py-2.5 rounded-xl font-bold text-sm shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download App</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
