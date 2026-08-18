import React from 'react';
import { TIMELINE_MILESTONES } from '../data/resumeData';

export const JourneyTimeline: React.FC = () => {
  return (
    <section id="journey" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 pb-4 border-b border-slate-200 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="font-mono text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1">
              Academic & Research Chronology
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Chronological Engineering Journey
            </h2>
          </div>
          <div className="mt-2 md:mt-0 font-mono text-xs text-slate-500">
            2024 – 2028 MILESTONES
          </div>
        </div>

        {/* Vertical Timeline Path */}
        <div className="relative border-l-2 border-slate-300 ml-4 lg:ml-32 space-y-6 pl-6 lg:pl-8">
          {TIMELINE_MILESTONES.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] lg:-left-[39px] top-2 w-4 h-4 rounded-full bg-white border-2 border-blue-600 group-hover:bg-blue-600 transition-colors shadow-xs" />

              {/* Date Desktop Left */}
              <div className="hidden lg:block absolute -left-36 top-1.5 font-mono text-xs text-blue-700 font-semibold bg-white px-2.5 py-1 rounded border border-slate-200 w-28 text-center shadow-2xs">
                {item.period}
              </div>

              {/* Content Card */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:border-blue-300 transition-colors space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="lg:hidden font-mono text-xs text-blue-700 font-semibold px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                      {item.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-xs border border-slate-200 font-medium">
                      {item.type}
                    </span>
                  </div>

                  <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[11px] font-mono border border-blue-200">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
