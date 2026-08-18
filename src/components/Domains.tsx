import React from 'react';
import { Radio, Cpu, Layers, BrainCircuit, Wrench, Code2, ArrowUpRight } from 'lucide-react';

export const Domains: React.FC = () => {
  const domainCards = [
    {
      title: "RF & Microwave Engineering",
      subtitle: "Electromagnetic modeling, antenna design & CST Microwave Studio simulations.",
      icon: Radio,
      items: ["CST Studio Suite", "Microstrip Patch Antennas", "Radar Systems", "EM Field Simulation"]
    },
    {
      title: "Embedded Systems",
      subtitle: "Microcontroller hardware interfacing, firmware development & intelligent sensing.",
      icon: Cpu,
      items: ["Arduino IDE", "Embedded C", "Sensor Interfacing", "Hardware Interfacing"]
    },
    {
      title: "Signal Processing & Electronics",
      subtitle: "Signal transformation, Doppler/FMCW radar signal processing & circuit design.",
      icon: Layers,
      items: ["Signal Processing", "Radar Sensing", "Circuit Design", "LTSpice & MATLAB"]
    },
    {
      title: "AI & Machine Learning",
      subtitle: "Applying ML architectures and satellite spatiotemporal analytics for engineering.",
      icon: BrainCircuit,
      items: ["TensorFlow & Python", "Gemini & Imagen AI", "Spatiotemporal Models", "Data Analytics"]
    },
    {
      title: "Semiconductor & VLSI",
      subtitle: "Solid-state device physics, integrated circuits, and IEEE EDS chapter activities.",
      icon: Wrench,
      items: ["Semiconductor Devices", "VLSI Fundamentals", "IEEE EDS Member", "CASS Chapter"]
    },
    {
      title: "Operations & Technical Leadership",
      subtitle: "Project operations, humanitarian technology deployment, and telecom outreach.",
      icon: Code2,
      items: ["Operations Management", "IEEE SIGHT Lead", "Telecom Fraud Outreach", "Technical Reports"]
    }
  ];

  return (
    <section id="domains" className="py-16 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 pb-4 border-b border-slate-200/80 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="font-mono text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1">
              Engineering Disciplines
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Core Technical Domains
            </h2>
          </div>
          <p className="mt-2 md:mt-0 font-mono text-xs text-slate-600 max-w-md">
            Integrated engineering capabilities spanning high-frequency electromagnetics, hardware systems, and AI.
          </p>
        </div>

        {/* 6 Engineering Interest Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domainCards.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <div
                key={index}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-white/90 shadow-xs flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-blue-50/80 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors border border-blue-200/80">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[11px] text-slate-600 bg-white/80 px-2 py-0.5 rounded border border-slate-200/80">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>{domain.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </h3>

                  <p className="text-xs text-slate-700 font-sans mt-2 mb-4 leading-relaxed">
                    {domain.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/60">
                  {domain.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-white/80 text-[11px] font-mono text-slate-800 border border-slate-200/80"
                    >
                      {item}
                    </span>
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
