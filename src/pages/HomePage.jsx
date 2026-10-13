import React from 'react';
import { Smartphone } from 'lucide-react';
import KineticGridCanvas from '../components/KineticGridCanvas';
import HeroAppShowcase from '../components/HeroAppShowcase';
import DualAudienceSection from '../components/DualAudienceSection';
import AntigravityProductShowcase from '../components/AntigravityProductShowcase';
import PersonaVideoCarousel from '../components/PersonaVideoCarousel';

export default function HomePage({ onOpenDownload, onOpenVideo, onOpenPrivacy, onNavigateEnterprise }) {
  
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pb-16 space-y-24 sm:space-y-32">
      
      {/* Front Page Hero Section - ONLY place with Kinetic Grid Background */}
      <div className="relative overflow-hidden pt-24 sm:pt-32 pb-4">
        
        {/* Kinetic Grid strictly confined to front page / hero header */}
        <KineticGridCanvas themeMode="shakti" className="absolute inset-0 w-full h-full" />

        {/* Centered Hero Header */}
        <section className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium text-gray-950 tracking-tight leading-[1.08] mb-6 font-sans">
            Chat with friends, connect locally & stay protected together
          </h1>

          {/* Subtitle highlighting Friend Chat, Local Chat & Live Location */}
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
            Private friend chats, hyper-local community rooms, real-time live location sharing, and smart guardian protection — seamlessly united in one modern app.
          </p>

          {/* Dual Iconic Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
            <button
              onClick={onOpenDownload}
              className="group flex items-center space-x-2.5 bg-gray-950 hover:bg-black text-white px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Smartphone className="w-4 h-4 text-gray-300" />
              <span>Download for Android / iOS</span>
            </button>

            <button
              onClick={() => scrollToSection('shakti-features')}
              className="flex items-center space-x-2 bg-gray-50/90 hover:bg-gray-100 text-gray-800 px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base border border-gray-200/80 shadow-xs hover:shadow transition-all"
            >
              <span>Explore features</span>
            </button>
          </div>

        </section>

        {/* Embedded Showcase Console Container with Video tour trigger */}
        <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroAppShowcase onOpenVideo={onOpenVideo} />
        </section>

      </div>

      {/* Dual Audience Section */}
      <DualAudienceSection 
        onOpenDownload={onOpenDownload}
        onNavigateEnterprise={onNavigateEnterprise}
      />

      {/* The 4 Real Shakti Feature Showcase Sections (All with Text Left & Phone Right) */}
      <AntigravityProductShowcase 
        onOpenDownload={onOpenDownload}
        onOpenVideo={onOpenVideo}
      />

      {/* Persona Video Stories Carousel */}
      <PersonaVideoCarousel onOpenVideo={onOpenVideo} />

    </div>
  );
}
