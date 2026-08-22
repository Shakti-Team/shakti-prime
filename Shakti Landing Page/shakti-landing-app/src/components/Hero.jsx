import {
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Play,
  Zap,
  Lock,
  Heart
} from 'lucide-react';
import HeroVideoScrollShowcase from './HeroVideoScrollShowcase';

export default function Hero({ onOpenDownload, onOpenVideo, onOpenPricing }) {
  return (
    <section className="relative pt-24 sm:pt-32 pb-8 overflow-hidden">
      
      {/* Centered Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Top Product Badge */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white border border-pink-200/80 shadow-[0_2px_12px_rgb(244,63,94,0.08)] mb-6 hover:border-pink-300 transition-all hover:scale-105">
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-pink-500 to-rose-500 flex items-center justify-center text-white shadow-xs">
            <Heart className="w-3 h-3 fill-current text-white" />
          </div>
          <span className="text-xs font-bold text-gray-800 tracking-tight font-display">Shakti Safety & Emergency Platform</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs text-rose-600 font-semibold">Pro starting ₹49/mo</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-950 tracking-tight leading-[1.08] mb-6">
          Empowering Every Woman with{' '}
          <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 bg-clip-text text-transparent">
            Shakti
          </span>
          <span className="block mt-2 font-bold text-gray-900 text-3xl sm:text-5xl lg:text-6xl">
            Autonomous Safety & Emergency Protection.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 font-normal leading-relaxed mb-8">
          Sub-2s emergency SOS, hands-free acoustic voice keyword detection, live guardian telemetry, and safe route corridor navigation.
        </p>

        {/* Dual Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <button
            onClick={onOpenDownload}
            className="group flex items-center space-x-2.5 bg-gray-900 hover:bg-black text-white px-7 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" />
            <span>Download Shakti Free</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenVideo}
            className="group flex items-center space-x-2.5 bg-white hover:bg-pink-50/60 text-gray-900 hover:text-rose-600 px-6 py-3.5 rounded-full font-bold text-sm sm:text-base border border-pink-200 shadow-xs hover:border-pink-300 transition-all"
          >
            <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 group-hover:bg-rose-600 group-hover:text-white flex items-center justify-center transition-colors">
              <Play className="w-3 h-3 fill-current translate-x-0.5" />
            </div>
            <span>Watch Demo Video</span>
          </button>

          <button
            onClick={onOpenPricing}
            className="flex items-center space-x-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 px-5 py-3.5 rounded-full font-bold text-sm border border-rose-200 transition-all"
          >
            <span>Shakti Pro (₹49/mo)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-gray-600 mb-6">
          <div className="flex items-center space-x-2 bg-white/80 px-3.5 py-1.5 rounded-full border border-pink-100 shadow-xs">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Sub-2s Emergency Alert Dispatch</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 px-3.5 py-1.5 rounded-full border border-pink-100 shadow-xs">
            <Lock className="w-4 h-4 text-emerald-600" />
            <span>256-bit AES End-to-End Encrypted</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 px-3.5 py-1.5 rounded-full border border-pink-100 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-rose-600" />
            <span>Zero-Knowledge Privacy</span>
          </div>
        </div>

      </div>

      {/* Scroll-Driven Scaling Video Showcase */}
      <HeroVideoScrollShowcase onOpenVideo={onOpenVideo} />

    </section>
  );
}
