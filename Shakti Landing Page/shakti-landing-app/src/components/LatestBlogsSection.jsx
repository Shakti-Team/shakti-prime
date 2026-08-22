import { ArrowRight, Sparkles } from 'lucide-react';

export default function LatestBlogsSection({ onOpenPrivacy }) {
  const blogs = [
    {
      id: 1,
      title: 'Shakti Anywhere with Remote Guardian Control',
      date: 'Aug 21, 2026',
      tag: 'Product',
      mockupType: 'phone',
      subtext: 'Remote Control'
    },
    {
      id: 2,
      title: 'Bringing Shakti to Gemini Enterprise: Agentic safety workflows for every campus',
      date: 'Aug 20, 2026',
      tag: 'Enterprise',
      mockupType: 'enterprise',
      subtext: 'Shakti in Gemini Enterprise'
    },
    {
      id: 3,
      title: 'Introducing Shakti IDE & Autonomous Sentinel Extensions',
      date: 'Aug 18, 2026',
      tag: 'Product',
      mockupType: 'extension',
      subtext: 'Shakti Extensions'
    },
    {
      id: 4,
      title: 'Gemini 3.7 Flash in Shakti Autonomous Telemetry Platform',
      date: 'Aug 13, 2026',
      tag: 'Model',
      mockupType: 'model',
      subtext: 'Gemini 3.7 Flash'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF9] relative overflow-hidden border-t border-gray-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row matching Image 2 */}
        <div className="flex items-center justify-between mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-950 tracking-tight font-display">
            Latest Blogs
          </h2>

          <button
            onClick={onOpenPrivacy}
            className="bg-[#F1F3F4] hover:bg-[#E8EAED] text-gray-900 px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all shadow-2xs hover:scale-105 active:scale-95"
          >
            View blog
          </button>
        </div>

        {/* 4 Cards Grid matching Image 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div 
              key={blog.id}
              className="flex flex-col justify-between group cursor-pointer"
              onClick={onOpenPrivacy}
            >
              {/* Top Dark Mockup Box matching Image 2 */}
              <div className="relative aspect-square rounded-3xl bg-[#090D16] p-6 mb-4 flex flex-col items-center justify-center overflow-hidden border border-gray-800 shadow-md group-hover:shadow-xl group-hover:border-gray-700 transition-all duration-300">
                
                {/* Mockup Variations */}
                {blog.mockupType === 'phone' && (
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="w-16 h-28 rounded-2xl bg-white/90 p-1.5 shadow-lg border border-gray-300 flex flex-col justify-between">
                      <div className="w-6 h-1 bg-gray-300 rounded-full mx-auto"></div>
                      <div className="text-[6px] text-gray-700 font-mono text-center">🚨 112 Ready</div>
                      <div className="w-full h-1 bg-rose-500 rounded-full"></div>
                    </div>
                    <span className="text-xs font-medium text-gray-300 tracking-tight">{blog.subtext}</span>
                  </div>
                )}

                {blog.mockupType === 'enterprise' && (
                  <div className="flex flex-col items-center justify-center space-y-3 text-center">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-rose-500 to-indigo-500 flex items-center justify-center text-white font-bold shadow-lg">
                      ▲
                    </div>
                    <span className="text-xs font-semibold text-white tracking-tight">{blog.subtext}</span>
                  </div>
                )}

                {blog.mockupType === 'extension' && (
                  <div className="flex flex-col items-center justify-center space-y-3 text-center w-full px-2">
                    <span className="text-xs font-medium text-gray-300 tracking-tight">{blog.subtext}</span>
                    <div className="w-full bg-[#161F30] rounded-lg p-2 border border-gray-700 text-[9px] text-gray-300 font-mono text-left">
                      <span className="text-rose-400">⚡ Shakti 2.0 Mesh</span>
                    </div>
                  </div>
                )}

                {blog.mockupType === 'model' && (
                  <div className="relative flex flex-col items-center justify-center space-y-3">
                    <div className="absolute w-24 h-24 rounded-full bg-blue-500/20 blur-xl"></div>
                    <div className="relative flex items-center space-x-1.5">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm font-semibold text-white tracking-tight">{blog.subtext}</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Card Meta & Title matching Image 2 */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-medium text-gray-950 leading-snug group-hover:text-rose-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.tag}</span>
                </div>

                <div className="pt-1">
                  <span className="inline-flex items-center space-x-1 text-xs font-semibold text-gray-800 group-hover:text-rose-600 transition-colors">
                    <span>Read blog</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
