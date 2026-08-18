import React, { useState, useEffect, useRef } from 'react';
import { Radio, HeartPulse, Activity, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { RESEARCH_EXPERIENCE } from '../data/resumeData';

export const Research: React.FC = () => {
  const [breathingRate, setBreathingRate] = useState<'normal' | 'deep' | 'rapid'>('normal');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Clean Doppler Respiration Waveform
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const render = () => {
      t += 0.04;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;

      // Draw Grid
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Base Frequency based on breathing state
      const rateMultiplier = breathingRate === 'normal' ? 1.0 : breathingRate === 'deep' ? 0.6 : 1.8;
      const baseBpm = breathingRate === 'normal' ? 14 : breathingRate === 'deep' ? 9 : 22;

      // Carrier wave
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < w; x += 2) {
        const carrier = Math.sin(x * 0.15 + t * 4);
        const chestMotion = Math.sin((x * 0.008 * rateMultiplier) - t * rateMultiplier);
        const y = h * 0.3 + carrier * (12 + chestMotion * 8);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Extracted Respiration Signal
      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let x = 0; x < w; x += 2) {
        const chestMotion = Math.sin((x * 0.008 * rateMultiplier) - t * rateMultiplier);
        const harmonic = Math.sin((x * 0.016 * rateMultiplier) - t * rateMultiplier * 2) * 0.2;
        const y = h * 0.7 + (chestMotion + harmonic) * 26;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Info Labels
      ctx.font = '11px "Fira Code", monospace';
      ctx.fillStyle = '#64748b';
      ctx.fillText('2.45 GHz ISM Carrier Signal (CST Studio Optimized)', 15, 22);

      ctx.fillStyle = '#1d4ed8';
      ctx.fillText(`DSP Demodulated Respiration Signal: ${baseBpm} BPM`, 15, h - 15);

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [breathingRate]);

  const blockDiagram = [
    { title: "Microstrip Patch Antenna", desc: "Designed in CST Studio Suite for 2.45 GHz ISM Band" },
    { title: "Doppler / FMCW Radar", desc: "Non-contact RF sensing of minute thoracic displacement" },
    { title: "Signal Processing (DSP)", desc: "Phase demodulation & filtering for respiration signals" },
    { title: "Respiration Monitoring", desc: "Real-time respiratory rate & vital health metrics extraction" }
  ];

  return (
    <section id="research" className="py-16 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 pb-4 border-b border-slate-200/80 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="font-mono text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Research & Technical Leadership</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Academic Research & Engineering Innovation
            </h2>
          </div>
          <div className="mt-2 md:mt-0 font-mono text-xs text-blue-700 bg-blue-50/80 border border-blue-200/80 px-3 py-1 rounded-md font-semibold">
            ISRO Hackathon & IEM Research
          </div>
        </div>

        {/* Featured Academic Research Card */}
        <div className="glass-card rounded-2xl border border-white/90 p-6 lg:p-8 space-y-8 shadow-xs">
          
          {/* Title & Metadata */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 border-b border-slate-200/80 pb-6">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-blue-700">
                <span className="px-2.5 py-0.5 rounded bg-blue-50/80 border border-blue-200/80 font-semibold">
                  {RESEARCH_EXPERIENCE.title}
                </span>
                <span>•</span>
                <span className="text-slate-800 font-semibold">{RESEARCH_EXPERIENCE.organization}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                {RESEARCH_EXPERIENCE.projectTopic}
              </h3>
            </div>

            <div className="flex flex-col items-start lg:items-end font-mono text-xs text-slate-600">
              <span className="px-3 py-1 rounded-md bg-white/80 text-slate-900 border border-slate-200/80 font-medium">
                {RESEARCH_EXPERIENCE.period}
              </span>
              <span className="text-blue-700 font-semibold pt-1">
                IEEE Humanitarian Technologies
              </span>
            </div>
          </div>

          {/* Academic Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RESEARCH_EXPERIENCE.highlights.map((item, idx) => (
              <div key={idx} className="bg-white/70 p-4 rounded-xl border border-slate-200/80 space-y-2">
                <div className="w-6 h-6 rounded bg-blue-100/80 text-blue-700 font-mono text-xs font-bold flex items-center justify-center">
                  0{idx + 1}
                </div>
                <p className="text-xs text-slate-800 leading-relaxed font-sans font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Clean Technical Block Diagram Flowchart */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-600" />
              <span>System Architecture & Signal Pipeline</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {blockDiagram.map((block, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200 relative">
                  <div className="text-[10px] font-mono text-blue-600 font-semibold mb-1">
                    STAGE 0{idx + 1}
                  </div>
                  <div className="font-display font-bold text-sm text-slate-900 mb-1">
                    {block.title}
                  </div>
                  <p className="text-[11px] text-slate-600 font-sans leading-snug">
                    {block.desc}
                  </p>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-blue-600">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Clean Radar Waveform Simulator */}
          <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-blue-600" />
                <span className="font-mono text-xs font-bold text-slate-900">
                  2.45 GHz Doppler Respiration Signal Demodulator
                </span>
              </div>

              {/* Patient State Switcher */}
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="text-slate-500">Patient State:</span>
                <button
                  onClick={() => setBreathingRate('normal')}
                  className={`px-2.5 py-1 rounded text-xs border ${
                    breathingRate === 'normal'
                      ? 'bg-blue-600 text-white border-blue-600 font-semibold'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  Normal (14 BPM)
                </button>
                <button
                  onClick={() => setBreathingRate('deep')}
                  className={`px-2.5 py-1 rounded text-xs border ${
                    breathingRate === 'deep'
                      ? 'bg-blue-600 text-white border-blue-600 font-semibold'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  Deep (9 BPM)
                </button>
                <button
                  onClick={() => setBreathingRate('rapid')}
                  className={`px-2.5 py-1 rounded text-xs border ${
                    breathingRate === 'rapid'
                      ? 'bg-blue-600 text-white border-blue-600 font-semibold'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  Rapid (22 BPM)
                </button>
              </div>
            </div>

            {/* Canvas */}
            <div className="w-full h-40 rounded bg-white border border-slate-200 relative overflow-hidden">
              <canvas ref={canvasRef} width={800} height={160} className="w-full h-full block" />
            </div>
          </div>

          {/* Research Toolchain Tech Stack */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200">
            <span className="font-mono text-xs text-slate-500">RESEARCH TOOLCHAIN:</span>
            {RESEARCH_EXPERIENCE.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-slate-100 text-xs font-mono text-slate-800 border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
