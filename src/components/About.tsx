import React from 'react';
import { GraduationCap, Target, Cpu, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_LIST } from '../data/resumeData';

export const About: React.FC = () => {
  const coreInterests = [
    "RF Engineering & Microwave Systems",
    "Microstrip Patch Antenna Design",
    "Embedded Systems & Sensors",
    "Semiconductor Devices & VLSI",
    "Doppler / FMCW Radar Sensing",
    "AI & Machine Learning for Engineering"
  ];

  return (
    <section id="about" className="py-16 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="mb-10 pb-4 border-b border-slate-200/80 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="font-mono text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1">
              About Me
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Academic & Professional Background
            </h2>
          </div>
          <div className="mt-2 md:mt-0 font-mono text-xs text-slate-600">
            ECE UNDERGRADUATE • IEM SALTLAKE
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Short Professional Introduction */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Introduction Box */}
            <div className="glass-card p-6 rounded-2xl border border-white/90 shadow-xs space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-blue-700 font-semibold uppercase">
                <Target className="w-4 h-4 text-blue-600" />
                <span>Professional Summary & Objectives</span>
              </div>
              <p className="text-slate-800 text-base leading-relaxed font-sans">
                {PERSONAL_INFO.objective}
              </p>
            </div>

            {/* Core Technical Focus Grid */}
            <div className="glass-card p-6 rounded-2xl border border-white/90 shadow-xs">
              <h3 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-600" />
                <span>Key Engineering Specializations</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coreInterests.map((interest, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/70 border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-xs font-mono text-slate-800 font-medium">{interest}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-blue-700 font-semibold uppercase mb-1">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>Education Credentials</span>
            </div>

            {EDUCATION_LIST.map((edu, idx) => (
              <div
                key={idx}
                className="glass-card p-5 rounded-2xl border border-white/90 shadow-xs space-y-2 hover:border-blue-400/80 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900">
                      {edu.institution}
                    </h3>
                    <p className="text-xs font-mono text-blue-600 font-semibold mt-0.5">
                      {edu.degree}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-white/80 text-slate-800 text-[11px] font-mono border border-slate-200/80 whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-slate-200/60 text-slate-600">
                  <span>Location: <strong className="text-slate-900">{edu.location}</strong></span>
                  {edu.gpa && (
                    <span className="text-blue-700 font-semibold bg-blue-50/80 border border-blue-200/80 px-2 py-0.5 rounded">
                      GPA: {edu.gpa}
                    </span>
                  )}
                </div>

                {edu.details && (
                  <p className="text-xs text-slate-700 leading-relaxed font-sans pt-1">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
