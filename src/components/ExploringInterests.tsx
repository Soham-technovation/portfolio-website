import React from 'react';
import { Radio, Cpu, Layers, BrainCircuit, Radar, Compass } from 'lucide-react';
import { CURRENTLY_EXPLORING } from '../data/resumeData';

export const ExploringInterests: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Radio':
        return <Radio className="w-5 h-5 text-blue-600" />;
      case 'Radar':
        return <Radar className="w-5 h-5 text-blue-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-600" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-blue-600" />;
      default:
        return <Compass className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="exploring" className="py-16 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 pb-4 border-b border-slate-200/80 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="font-mono text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1 flex items-center gap-2">
              <Compass className="w-4 h-4 text-blue-600" />
              <span>Future Research Directions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Currently Exploring
            </h2>
          </div>
          <div className="mt-2 md:mt-0 font-mono text-xs text-slate-600 font-medium">
            ADVANCED ENGINEERING DIRECTIONS
          </div>
        </div>

        {/* 5 Exploring Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURRENTLY_EXPLORING.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-white/90 shadow-xs space-y-3 group"
            >
              <div className="p-2.5 w-fit rounded-xl bg-white/80 border border-slate-200/80 group-hover:border-blue-400/80 transition-colors shadow-2xs">
                {getIcon(item.icon)}
              </div>

              <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-slate-700 font-sans leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
