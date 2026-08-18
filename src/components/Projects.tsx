import React, { useState } from 'react';
import { Cpu, Plus, Minus, Eye, ArrowRight } from 'lucide-react';
import { PROJECTS_LIST } from '../data/resumeData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  // Interactive Arduino Bi-Directional IR Gate Counter State
  const [occupancyCount, setOccupancyCount] = useState<number>(14);
  const [irSensorA, setIrSensorA] = useState<boolean>(false);
  const [irSensorB, setIrSensorB] = useState<boolean>(false);
  const [relayState, setRelayState] = useState<boolean>(true);

  const categories = ['All', 'AI & Environmental', 'Embedded Systems'];

  const filteredProjects = PROJECTS_LIST.filter(p => 
    activeCategory === 'All' ? true : p.category === activeCategory
  );

  const triggerPersonEnter = () => {
    setIrSensorA(true);
    setTimeout(() => {
      setIrSensorB(true);
      setOccupancyCount(prev => {
        const next = prev + 1;
        setRelayState(next > 0);
        return next;
      });
      setTimeout(() => {
        setIrSensorA(false);
        setIrSensorB(false);
      }, 300);
    }, 200);
  };

  const triggerPersonExit = () => {
    setIrSensorB(true);
    setTimeout(() => {
      setIrSensorA(true);
      setOccupancyCount(prev => {
        const next = Math.max(0, prev - 1);
        setRelayState(next > 0);
        return next;
      });
      setTimeout(() => {
        setIrSensorA(false);
        setIrSensorB(false);
      }, 300);
    }, 200);
  };

  return (
    <section id="projects" className="py-16 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 pb-4 border-b border-slate-200/80 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="font-mono text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1">
              Engineering Work
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Projects & Technical Development
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="mt-4 md:mt-0 flex items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white font-semibold shadow-xs'
                    : 'glass-card text-slate-700 border-white/80 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Card Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl border border-white/90 p-6 flex flex-col justify-between shadow-xs group"
            >
              <div>
                {/* Header Context */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-blue-50/80 text-blue-700 font-mono text-[11px] border border-blue-200/80 font-semibold">
                    {project.eventOrContext}
                  </span>
                  <span className="font-mono text-[11px] text-slate-600 font-medium">
                    {project.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-slate-700 font-sans leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Technical Bullet Highlights */}
                <div className="space-y-2 mb-5">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                      <span className="text-blue-600 font-mono font-bold">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Technical Diagram Flowchart */}
                {project.pipeline && (
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 mb-5">
                    <div className="text-[10px] font-mono text-blue-700 font-bold uppercase mb-1.5">TECHNICAL FLOW DIAGRAM:</div>
                    <div className="flex items-center gap-1 overflow-x-auto text-[10px] font-mono text-slate-700 pb-1">
                      {project.pipeline.map((step, idx) => (
                        <React.Fragment key={idx}>
                          <span className="px-2 py-0.5 rounded bg-white border border-slate-200 whitespace-nowrap shadow-2xs">
                            {step.title}
                          </span>
                          {idx < project.pipeline!.length - 1 && <span className="text-blue-600 font-bold">→</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-500">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project Details</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    Devfolio Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Hardware Simulator */}
        <div className="mt-12 bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 mb-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-blue-700 font-bold uppercase">
                <Cpu className="w-4 h-4 text-blue-600" />
                <span>HARDWARE DEMO • ARDUINO UNO & DUAL IR BEAM SENSORS</span>
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mt-0.5">
                Bi-Directional Visitor Counter Interactive State Machine
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={triggerPersonEnter}
                className="px-3.5 py-1.5 rounded-md text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all flex items-center gap-1.5 shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Simulate Person Entry (A → B)</span>
              </button>
              <button
                onClick={triggerPersonExit}
                className="px-3.5 py-1.5 rounded-md text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all flex items-center gap-1.5"
              >
                <Minus className="w-3.5 h-3.5" />
                <span>Simulate Person Exit (B → A)</span>
              </button>
            </div>
          </div>

          {/* Interactive Hardware Schematic */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center text-center">
            
            {/* IR Sensor A */}
            <div className={`p-4 rounded-lg border transition-all ${
              irSensorA ? 'bg-blue-50 border-blue-400 text-blue-900' : 'bg-slate-50 border-slate-200 text-slate-600'
            }`}>
              <div className="font-mono text-xs font-bold uppercase mb-1">IR SENSOR A (ENTRY)</div>
              <div className="text-xl font-mono font-bold my-1">
                {irSensorA ? 'BEAM BROKEN [1]' : 'IDLE [0]'}
              </div>
              <div className="text-[10px] font-mono text-slate-500">DIGITAL PIN D2</div>
            </div>

            {/* MCU Arduino UNO */}
            <div className="p-4 rounded-lg bg-blue-600 text-white border border-blue-700 shadow-xs">
              <div className="font-mono text-xs font-semibold uppercase mb-1">ARDUINO UNO MCU</div>
              <div className="text-3xl font-mono font-extrabold my-1">
                {occupancyCount}
              </div>
              <div className="text-[10px] font-mono text-blue-100">
                ACTIVE OCCUPANCY COUNT
              </div>
            </div>

            {/* IR Sensor B */}
            <div className={`p-4 rounded-lg border transition-all ${
              irSensorB ? 'bg-blue-50 border-blue-400 text-blue-900' : 'bg-slate-50 border-slate-200 text-slate-600'
            }`}>
              <div className="font-mono text-xs font-bold uppercase mb-1">IR SENSOR B (EXIT)</div>
              <div className="text-xl font-mono font-bold my-1">
                {irSensorB ? 'BEAM BROKEN [1]' : 'IDLE [0]'}
              </div>
              <div className="text-[10px] font-mono text-slate-500">DIGITAL PIN D3</div>
            </div>

            {/* Relay */}
            <div className={`p-4 rounded-lg border ${
              relayState ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-slate-100 border-slate-300 text-slate-500'
            }`}>
              <div className="font-mono text-xs font-bold uppercase mb-1">AUTOMATION RELAY</div>
              <div className="text-base font-mono font-bold my-1">
                {relayState ? 'POWER ON (ROOM ACTIVE)' : 'POWER OFF (SAVER)'}
              </div>
              <div className="text-[10px] font-mono">AUTOMATED LIGHTS CONTROL</div>
            </div>

          </div>
        </div>

      </div>

      {/* Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
