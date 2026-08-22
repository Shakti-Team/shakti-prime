import React, { useState } from 'react';
import {
  ChevronDown,
  Download,
  Menu,
  X,
  Smartphone,
  Mic,
  Radio,
  ArrowRight
} from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, onOpenDownload }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const navigateTo = (page, sectionId) => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);

    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    if (page === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentPage('home');
      return;
    }

    // Scroll to corresponding section on main page if present
    if (page === 'products') {
      const el = document.getElementById('shakti-2');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (page === 'pricing') {
      const el = document.getElementById('pricing');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (page === 'enterprise') {
      const el = document.getElementById('shakti-sdk');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
              <img 
                src="/app_logo.png" 
                alt="Shakti Logo" 
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain rounded-lg group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/shield.svg';
                }}
              />
              <span className="text-lg sm:text-xl font-bold tracking-tight text-gray-900 font-display flex items-center">
                Shakti
              </span>
            </button>

            {/* Desktop Navigation Items */}
            <nav className="hidden md:flex items-center space-x-1 sm:space-x-2 text-sm font-medium text-gray-700">
              
              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <button
                  onClick={() => navigateTo('products')}
                  className={`flex items-center space-x-1 px-3.5 py-1.5 rounded-full transition-colors ${
                    currentPage === 'products' || productsDropdownOpen
                      ? 'bg-gray-100 text-gray-950 font-semibold' 
                      : 'text-gray-700 hover:text-gray-950 hover:bg-gray-50'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${
                    productsDropdownOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                {productsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-[520px] bg-white rounded-3xl shadow-2xl border border-gray-200/90 p-6 animate-in fade-in slide-in-from-top-2 duration-150 z-50 text-left">
                    <div className="grid grid-cols-12 gap-5 items-start">
                      
                      {/* Left Side */}
                      <div className="col-span-5 space-y-3 border-r border-gray-100 pr-4">
                        <h4 className="text-lg font-bold text-gray-950 font-display leading-snug">
                          Shakti Safety Suite
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          Autonomous AI protection and instant emergency dispatch.
                        </p>
                        <button
                          onClick={() => navigateTo('products')}
                          className="inline-flex items-center space-x-1.5 text-xs font-bold text-gray-900 bg-gray-100 hover:bg-gray-200 px-3.5 py-1.5 rounded-full transition-colors"
                        >
                          <span>Explore all</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Right Side Items */}
                      <div className="col-span-7 space-y-2">
                        <button 
                          onClick={() => navigateTo('home', 'shakti-2')}
                          className="w-full text-left flex items-center space-x-3 p-2 rounded-xl hover:bg-rose-50/60 transition-colors group"
                        >
                          <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                            <Smartphone className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-900 group-hover:text-rose-600">Shakti Mobile 2.0</div>
                            <div className="text-[10px] text-gray-500">Autonomous SOS & Guard</div>
                          </div>
                        </button>

                        <button 
                          onClick={() => navigateTo('home', 'sentinel-ai')}
                          className="w-full text-left flex items-center space-x-3 p-2 rounded-xl hover:bg-pink-50/60 transition-colors group"
                        >
                          <div className="w-7 h-7 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                            <Mic className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-900 group-hover:text-pink-600">Voice Sentinel AI</div>
                            <div className="text-[10px] text-gray-500">Hands-Free Keyword Listener</div>
                          </div>
                        </button>

                        <button 
                          onClick={() => navigateTo('home', 'guardian-mesh')}
                          className="w-full text-left flex items-center space-x-3 p-2 rounded-xl hover:bg-blue-50/60 transition-colors group"
                        >
                          <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                            <Radio className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-900 group-hover:text-blue-600">Guardian Mesh</div>
                            <div className="text-[10px] text-gray-500">Offline SOS & Telemetry</div>
                          </div>
                        </button>
                      </div>

                    </div>
                  </div>
                )}
              </div>

              {/* Pricing Link */}
              <button
                onClick={() => navigateTo('home', 'pricing')}
                className="px-3.5 py-1.5 rounded-full transition-colors flex items-center space-x-1.5 text-gray-700 hover:text-gray-950 hover:bg-gray-50"
              >
                <span>Pricing</span>
                <span className="text-[10px] font-bold text-rose-600 bg-rose-100/80 px-1.5 py-0.2 rounded-full">
                  ₹49/mo
                </span>
              </button>

              {/* Enterprise Link */}
              <button
                onClick={() => navigateTo('home', 'shakti-sdk')}
                className="px-3.5 py-1.5 rounded-full transition-colors text-gray-700 hover:text-gray-950 hover:bg-gray-50"
              >
                SDK & Enterprise
              </button>
            </nav>
          </div>

          {/* Right Action: Download Pill */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenDownload}
              className="flex items-center space-x-1.5 bg-gray-900 hover:bg-black text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all hover:scale-105 active:scale-95"
            >
              <span>Download</span>
              <Download className="w-3.5 h-3.5" />
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
            Products
          </button>
          <button 
            onClick={() => navigateTo('pricing')}
            className={`w-full text-left px-3 py-2 rounded-xl flex items-center justify-between ${currentPage === 'pricing' ? 'bg-rose-50 text-rose-700 font-bold' : 'hover:bg-gray-50'}`}
          >
            <span>Pricing</span>
            <span className="text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full font-bold">₹49/mo</span>
          </button>
          <button 
            onClick={() => navigateTo('enterprise')}
            className={`w-full text-left px-3 py-2 rounded-xl ${currentPage === 'enterprise' ? 'bg-gray-100 font-bold' : 'hover:bg-gray-50'}`}
          >
            Enterprise & Ads
          </button>

          <div className="pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDownload(); }}
              className="w-full flex items-center justify-center space-x-2 bg-gray-900 text-white py-2.5 rounded-xl font-bold text-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download Shakti Free</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
