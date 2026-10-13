import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';

export default function PersonaVideoCarousel() {
  const scrollRef = useRef(null);

  /**
   * Team Members data
   * You can easily replace the images, names, and bio descriptions with your actual team members!
   */
  const teamMembers = [
    {
      id: 'samay',
      name: 'Samay Powade',
      role: 'Founder & Lead Architect',
      badge: 'Core Founder',
      subtitle: 'Building SHAKTI ONE from the ground up — leading full-stack mobile architecture, real-time messaging, location telemetry, and AI voice guardian systems.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      gradient: 'from-black/90 via-black/40 to-transparent'
    },
    {
      id: 'mobile-lead',
      name: 'Mobile Engineering Lead',
      role: 'Flutter & Real-Time Sync',
      badge: 'Engineering',
      subtitle: 'Crafting ultra-responsive friend chat, live location sharing, background sensor services, and hyper-local community messaging.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      gradient: 'from-black/90 via-black/40 to-transparent'
    },
    {
      id: 'ai-lead',
      name: 'AI Sentinel Systems',
      role: 'Voice & Anomaly Detection',
      badge: 'AI & Intelligence',
      subtitle: 'Architecting hands-free voice trigger models, simulated smart emergency calls, journey deviation guards, and swift incident dispatch.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      gradient: 'from-black/90 via-black/40 to-transparent'
    },
    {
      id: 'design-lead',
      name: 'Product Design & UI/UX',
      role: 'Design & Social Experience',
      badge: 'Design & UX',
      subtitle: 'Creating intuitive chat layouts, localized community discovery rooms, fluid micro-animations, and calming user-centric ergonomics.',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
      gradient: 'from-black/90 via-black/40 to-transparent'
    }
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -440 : 440;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="meet-team" className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-gray-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Split - Same Google Antigravity Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12 sm:mb-16">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-rose-600" />
              <span>Meet Our Team</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-gray-950 tracking-tight leading-[1.18] font-sans break-words">
              The passionate minds building SHAKTI ONE
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
              We are a dedicated team of creators, developers, and visionaries bringing private friend chat, hyper-local community rooms, live location sharing, and smart guardian protection into one unified platform.
            </p>
          </div>

        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Scrollable Track */}
          <div 
            ref={scrollRef}
            className="flex items-stretch space-x-6 overflow-x-auto scrollbar-none pb-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="shrink-0 w-[300px] sm:w-[420px] md:w-[460px] snap-start flex flex-col justify-between group"
              >
                {/* Large Rounded Image Card */}
                <div 
                  className="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-gray-900 shadow-md group-hover:shadow-2xl transition-all duration-300 mb-5"
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  />
                  
                  {/* Dark subtle gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient}`}></div>

                  {/* Top Badge Overlay */}
                  <div className="absolute top-6 left-6">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold tracking-wide">
                      {member.badge}
                    </span>
                  </div>

                  {/* Name & Title Overlay in Card matching reference UI */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight font-display drop-shadow-md">
                      {member.name}
                    </h3>
                    <p className="text-sm sm:text-base text-rose-300 font-medium tracking-tight mt-0.5">
                      {member.role}
                    </p>
                  </div>

                </div>

                {/* Bottom Card Subtext & Details */}
                <div className="space-y-2 px-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-gray-900">{member.name}</h4>
                    <span className="text-[11px] font-semibold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-100">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {member.subtitle}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Right Carousel Navigation Arrows */}
          <div className="flex items-center justify-end space-x-2 pt-4">
            <button
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full bg-[#F1F3F4] hover:bg-[#E8EAED] text-gray-800 flex items-center justify-center transition-colors shadow-2xs cursor-pointer active:scale-95"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full bg-[#F1F3F4] hover:bg-[#E8EAED] text-gray-800 flex items-center justify-center transition-colors shadow-2xs cursor-pointer active:scale-95"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
