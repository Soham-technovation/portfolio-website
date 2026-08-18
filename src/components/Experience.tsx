import React from 'react';
import { ShieldCheck, CheckCircle2, MapPin, Linkedin, ExternalLink, Briefcase } from 'lucide-react';
import { WORK_EXPERIENCES } from '../data/resumeData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 pb-4 border-b border-slate-200/80 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="font-mono text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1">
              Work Experience
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Positions & Responsibilities
            </h2>
          </div>
          <div className="mt-2 md:mt-0 font-mono text-xs text-slate-600 font-medium">
            DEPARTMENT OF TELECOMMUNICATIONS & IEEE
          </div>
        </div>

        {/* Clean Experience List Cards */}
        <div className="space-y-6">
          {WORK_EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl border border-white/90 p-6 shadow-xs hover:border-blue-400/80 transition-colors space-y-4"
            >
              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-slate-200/60 pb-4">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-50/80 text-blue-700 font-mono text-xs font-semibold border border-blue-200/80">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                      <span>{exp.organization}</span>
                    </div>

                    {(exp.isCurrent || exp.period.includes('Present')) && (
                      <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-2xs">
                        CURRENT
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-display">
                    {exp.role}
                  </h3>

                  {(exp.location || exp.workMode || exp.employmentType) && (
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-600 pt-0.5">
                      {exp.location && (
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-blue-600" />
                          <span>{exp.location}</span>
                        </span>
                      )}
                      {exp.workMode && (
                        <span>· {exp.workMode}</span>
                      )}
                      {exp.employmentType && (
                        <span>· {exp.employmentType}</span>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:items-end gap-2">
                  <div className="font-mono text-xs text-slate-800 bg-white/80 px-3 py-1 rounded-md border border-slate-200/80 font-semibold self-start sm:self-auto whitespace-nowrap shadow-2xs">
                    {exp.period}
                  </div>

                  {exp.linkedInUrl && (
                    <a
                      href={exp.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/80 hover:bg-white text-blue-700 hover:text-blue-800 text-xs font-mono border border-blue-200/80 transition-colors shadow-2xs"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                      <span>LinkedIn Profile</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  )}
                </div>
              </div>

              {/* Scope & Highlights (rendered only if highlights exist) */}
              {exp.highlights && exp.highlights.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                    Scope & Accomplishments
                  </h4>
                  <div className="space-y-2">
                    {exp.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/70 border border-slate-200/80">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs font-sans text-slate-800 leading-relaxed font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {exp.keywords && exp.keywords.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/60">
                  <span className="font-mono text-[11px] text-slate-600 font-medium">Key Competencies:</span>
                  {exp.keywords.map((kw, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md bg-white/80 text-xs font-mono text-slate-800 border border-slate-200/80 font-medium"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
