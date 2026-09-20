import React, { useRef } from 'react';
import { Play, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function PersonaVideoCarousel({ onOpenVideo }) {
  const scrollRef = useRef(null);

  const personas = [
    {
      id: 'student',
      title: 'College Student',
      subtitle: 'Build daily safety habits with autonomous voice keyword detection and hands-free anomaly alerts during campus and metro commutes.',
      roleTag: 'Women & Commuters',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      gradient: 'from-black/80 via-black/30 to-transparent'
    },
    {
      id: 'guardian',
      title: 'Father & Family Guardian',
      subtitle: 'Real-time telemetry mesh syncs battery, speed, and live location with loud SOS sirens that override phone silent mode.',
      roleTag: 'Parents & Guardians',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      gradient: 'from-black/80 via-black/30 to-transparent'
    },
    {
      id: 'merchant',
      title: 'Local Shop & Cafe Partner',
      subtitle: 'Post daily product offers with 1-tap WhatsApp orders, earn verified gold badges, and provide Safe Haven shelter for nearby citizens.',
      roleTag: 'Shakti Prime Merchant',
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
      gradient: 'from-black/80 via-black/30 to-transparent'
    },
    {
      id: 'admin',
      title: 'Corporate & Campus Lead',
      subtitle: 'Deploy corporate cab commute tracking, geo-fenced safe zones, and rapid 112 police gateway dispatch across organizations.',
      roleTag: 'Enterprise Administrator',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      gradient: 'from-black/80 via-black/30 to-transparent'
    }
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-gray-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12 sm:mb-16">
          
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-gray-950 tracking-tight leading-[1.18] font-sans break-words">
              Built for women, guardians & local businesses in the AI era
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
              Shakti connects all stakeholders in one trusted ecosystem — protecting women commuters, empowering family guardians with live telemetry, and helping local shops post verified deals and offer Safe Havens.
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
            {personas.map((item) => (
              <div 
                key={item.id}
                className="shrink-0 w-[300px] sm:w-[420px] md:w-[460px] snap-start flex flex-col justify-between group"
              >
                {/* Large Rounded Image Card with Play Button */}
                <div 
                  onClick={onOpenVideo}
                  className="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-gray-900 shadow-md group-hover:shadow-2xl transition-all duration-300 cursor-pointer mb-5"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  />
                  
                  {/* Dark subtle gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient}`}></div>

                  {/* Title Overlay in Card matching Image 3 */}
                  <div className="absolute top-8 left-8 right-8">
                    <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight font-display drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-lg group-hover:scale-115 group-hover:bg-rose-600 transition-all duration-300">
                      <Play className="w-5 h-5 fill-current translate-x-0.5" />
                    </div>
                  </div>

                </div>

                {/* Bottom Card Subtext & Link matching Image 4 */}
                <div className="space-y-2 px-1">
                  <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {item.subtitle}
                  </p>
                  <button 
                    onClick={onOpenVideo}
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-gray-900 hover:text-rose-600 pt-1 group-hover:translate-x-1 transition-all"
                  >
                    <span>View case</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Right Carousel Navigation Arrows matching Image 4 */}
          <div className="flex items-center justify-end space-x-2 pt-4">
            <button
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full bg-[#F1F3F4] hover:bg-[#E8EAED] text-gray-800 flex items-center justify-center transition-colors shadow-2xs"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full bg-[#F1F3F4] hover:bg-[#E8EAED] text-gray-800 flex items-center justify-center transition-colors shadow-2xs"
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
