import React from 'react';
import { Zap, Terminal, Sliders, FileCheck } from 'lucide-react';
import { SKILLS_CATEGORIES } from '../data/resumeData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 pb-4 border-b border-slate-200/80 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="font-mono text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1">
              Technical Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Skills & Tooling Matrix
            </h2>
          </div>
          <div className="mt-2 md:mt-0 font-mono text-xs text-slate-600 font-medium">
            VERIFIED COMPETENCIES
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-white/90 shadow-xs space-y-4 hover:border-blue-400/80 transition-colors"
            >
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200/60">
                <div className="p-2 rounded-lg bg-blue-100/80 text-blue-700 font-mono text-xs font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-display font-bold text-base text-slate-900">
                  {cat.categoryName}
                </h3>
              </div>

              {/* Pill-shaped Badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-full bg-white/80 text-slate-900 text-xs font-mono font-semibold border border-slate-200/80 shadow-2xs hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
