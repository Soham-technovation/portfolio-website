import React from 'react';
import { Trophy, Award, Calendar, MapPin, Star, Sparkles, CheckCircle2 } from 'lucide-react';

interface EventItem {
  id: string;
  year: string;
  month: string;
  dateStr: string;
  title: string;
  organization: string;
  location?: string;
  badge?: string;
  badgeType?: 'winner' | 'recognition' | 'event';
}

const EVENTS_TIMELINE: EventItem[] = [
  {
    id: "event-1",
    year: "2026",
    month: "AUG",
    dateStr: "August 2026",
    title: "Build with AI Bootcamp – Kolkata",
    organization: "GDG TIU",
    badgeType: "event"
  },
  {
    id: "event-2",
    year: "2026",
    month: "AUG",
    dateStr: "August 2026",
    title: "Running Local AI Models on Android and iOS",
    organization: "GDG IEM Kolkata",
    badgeType: "event"
  },
  {
    id: "event-3",
    year: "2026",
    month: "MAY",
    dateStr: "May 2026",
    title: "HACKSTORM",
    organization: "ECE Department, IEM Salt Lake, Kolkata",
    badge: "WINNER",
    badgeType: "winner"
  },
  {
    id: "event-4",
    year: "2026",
    month: "APR",
    dateStr: "April 2026",
    title: "Stellar Bootcamp Day – Kolkata",
    organization: "RiseIn × GDG IEM Kolkata",
    badgeType: "event"
  },
  {
    id: "event-5",
    year: "2025",
    month: "OCT",
    dateStr: "15 October 2025",
    title: "Recognised as a Sanchar Mitra",
    organization: "Department of Telecommunications (DoT)",
    badge: "Recognition / Achievement",
    badgeType: "recognition"
  },
  {
    id: "event-6",
    year: "2025",
    month: "FEB",
    dateStr: "February 2025",
    title: "PHYCATHON",
    organization: "BSH Department, IEM Salt Lake, Kolkata",
    badge: "WINNER",
    badgeType: "winner"
  },
  {
    id: "event-7",
    year: "2024",
    month: "AUG",
    dateStr: "August 2024",
    title: "Google Solution Challenge — Hackathon",
    organization: "GDG Heritage Kolkata",
    badgeType: "event"
  }
];

export const EventsSection: React.FC = () => {
  // Group events by Year for clear vertical timeline structure
  const years = Array.from(new Set(EVENTS_TIMELINE.map(e => e.year)));

  return (
    <section id="events" className="py-16 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-4 border-b border-slate-200/80 flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <div className="font-mono text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-blue-600" />
              <span>Participation & Accomplishments</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Events & Hackathons
            </h2>
          </div>
          <div className="font-mono text-xs text-slate-600 font-medium">
            STRICT REVERSE CHRONOLOGICAL TIMELINE
          </div>
        </div>

        {/* Clean Vertical Timeline */}
        <div className="relative pl-3 sm:pl-6 border-l-2 border-blue-200/80 space-y-12 ml-2 sm:ml-4">
          
          {years.map((year) => {
            const eventsInYear = EVENTS_TIMELINE.filter(e => e.year === year);

            return (
              <div key={year} className="relative space-y-6">
                
                {/* Year Marker Badge */}
                <div className="absolute -left-[27px] sm:-left-[39px] -top-1 flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-600 text-white font-mono font-bold text-xs sm:text-sm flex items-center justify-center shadow-xs border-2 border-white">
                    {year}
                  </div>
                </div>

                <div className="pt-2 pl-6 sm:pl-8 space-y-4">
                  {eventsInYear.map((event) => (
                    <div
                      key={event.id}
                      className={`relative p-5 rounded-xl border transition-all duration-200 bg-white ${
                        event.badgeType === 'winner'
                          ? 'border-blue-400 shadow-xs ring-1 ring-blue-300/50 bg-gradient-to-r from-blue-50/50 via-white to-white'
                          : event.badgeType === 'recognition'
                          ? 'border-indigo-300 shadow-xs bg-gradient-to-r from-slate-50 via-white to-white'
                          : 'border-slate-200 hover:border-blue-300 hover:shadow-2xs'
                      }`}
                    >
                      {/* Left Dot Node on vertical line */}
                      <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-3 h-3 rounded-full bg-blue-600 border-2 border-white ring-2 ring-blue-100" />

                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        
                        {/* Event Content */}
                        <div className="space-y-1.5 max-w-3xl">
                          <div className="flex flex-wrap items-center gap-2">
                            {/* Month Badge */}
                            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[11px] font-bold border border-slate-200">
                              {event.month}
                            </span>

                            {/* Title */}
                            <h3 className="font-display font-bold text-base sm:text-lg text-slate-900">
                              {event.title}
                            </h3>

                            {/* Winner Badge */}
                            {event.badgeType === 'winner' && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-mono text-xs font-bold">
                                🏆 WINNER
                              </span>
                            )}

                            {/* Recognition Badge */}
                            {event.badgeType === 'recognition' && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-900 border border-blue-300 font-mono text-xs font-bold">
                                🎖️ Recognition / Achievement
                              </span>
                            )}
                          </div>

                          {/* Organization / Dept */}
                          <div className="font-mono text-xs text-slate-600 flex flex-wrap items-center gap-2 pt-0.5">
                            <span className="font-semibold text-slate-800">{event.organization}</span>
                            {event.location && (
                              <>
                                <span className="text-slate-300">•</span>
                                <span className="text-slate-500">{event.location}</span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Date string pill on right */}
                        <div className="flex-shrink-0 self-start sm:self-auto">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-700 font-mono text-xs font-medium border border-slate-200">
                            <Calendar className="w-3.5 h-3.5 text-blue-600" />
                            <span>{event.dateStr}</span>
                          </span>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
