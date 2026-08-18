import React from 'react';
import { ArrowRight, Download, Send, Radio, Cpu, Layers, Zap, Eye, Github, Twitter } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';
import profileImg from '../assets/images/soham_profile.jpg';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="hero" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT COLUMN: Main Text & CTA */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status / Discipline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-blue-700 font-mono text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 inline-block animate-pulse" />
              <span>ECE Undergraduate • IEM Kolkata</span>
            </div>

            {/* Title & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-display leading-tight">
                Hi, I'm Soham Khan.
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-blue-600 font-display">
                Electronics & Communication Engineering Undergraduate
              </p>
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans max-w-2xl border-l-3 border-blue-600 pl-4 py-1">
              "ECE undergraduate exploring RF engineering, embedded systems, signal processing, semiconductor technologies and AI-driven engineering applications."
            </p>

            {/* Quick Domain Focus Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="flex items-center gap-2 p-2.5 rounded-xl glass-card border border-white/80 shadow-2xs">
                <Radio className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-mono text-slate-800 font-medium">RF & Microwave</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl glass-card border border-white/80 shadow-2xs">
                <Cpu className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-mono text-slate-800 font-medium">Embedded Systems</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl glass-card border border-white/80 shadow-2xs">
                <Layers className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-mono text-slate-800 font-medium">VLSI & Circuits</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all flex items-center gap-2 shadow-xs"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 glass-card hover:bg-white/90 transition-all flex items-center gap-2 shadow-2xs"
              >
                <Eye className="w-4 h-4 text-blue-600" />
                <span>View Resume</span>
              </a>

              <a
                href="/resume.pdf"
                download="Soham_Khan_Resume.pdf"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 glass-card hover:bg-white/90 transition-all flex items-center gap-2 shadow-2xs"
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>Download PDF</span>
              </a>

              <a
                href="#contact"
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1.5"
              >
                <span>Let's Connect</span>
                <Send className="w-4 h-4" />
              </a>

              {/* Small GitHub & Twitter / X profile icons */}
              <div className="flex items-center gap-1.5 pl-1 border-l border-slate-300/80">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-lg text-slate-700 hover:text-slate-900 glass-card hover:bg-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X / Twitter Profile"
                  className="p-2 rounded-lg text-slate-700 hover:text-sky-500 glass-card hover:bg-white transition-colors"
                >
                  <Twitter className="w-4 h-4 text-sky-500" />
                </a>
              </div>
            </div>

            {/* Subtle Academic Bar */}
            <div className="pt-2 text-xs font-mono text-slate-600 flex flex-wrap items-center gap-3 border-t border-slate-200/80">
              <span>Institution: <strong className="text-slate-900 font-semibold">IEM Saltlake</strong></span>
              <span>•</span>
              <span>Degree: <strong className="text-slate-900 font-semibold">B.Tech ECE (2024–2028)</strong></span>
              <span>•</span>
              <span>GPA: <strong className="text-blue-700 font-semibold">7.88</strong></span>
            </div>

          </div>

          {/* RIGHT COLUMN: Actual Uploaded Profile Photograph with Liquid Glass Halo */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Liquid Glass Glow Halo behind Profile Photo */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-200/50 via-cyan-100/60 to-purple-200/40 rounded-3xl blur-2xl animate-liquid-3 pointer-events-none" />
            
            <div className="w-full max-w-sm relative z-10">
              <div className="glass-card p-3.5 rounded-2xl border border-white/90 shadow-xl backdrop-blur-2xl">
                
                {/* Profile Photograph Container */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-white/80 bg-slate-100 shadow-inner">
                  <img
                    src="/soham_profile.jpg"
                    alt="Soham Khan - Electronics & Communication Engineering Undergraduate"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                  />
                  {/* Subtle Liquid Highlight Reflection on Photo Corner */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 pointer-events-none" />
                </div>

                {/* Professional Label under the image */}
                <div className="mt-3 text-center py-2 px-3 bg-white/80 border border-slate-200/80 rounded-xl shadow-2xs">
                  <div className="font-display font-bold text-sm text-slate-900 tracking-wide">SOHAM KHAN</div>
                  <div className="font-mono text-xs text-blue-600 font-semibold mt-0.5">
                    ECE • RF • Embedded Systems • AI
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Subtle Technical Flow Strip under Hero */}
        <div className="mt-12 p-4 glass-card rounded-2xl border border-white/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-700">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="font-bold text-slate-900">TECHNICAL DOMAINS:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-blue-50/80 text-blue-700 border border-blue-200/80 font-medium">Antennas & Microwave</span>
            <span className="text-slate-400">→</span>
            <span className="px-2.5 py-1 rounded-lg bg-white/80 text-slate-800 border border-slate-200/80 font-medium">Embedded Microcontrollers</span>
            <span className="text-slate-400">→</span>
            <span className="px-2.5 py-1 rounded-lg bg-white/80 text-slate-800 border border-slate-200/80 font-medium">Semiconductors & VLSI</span>
            <span className="text-slate-400">→</span>
            <span className="px-2.5 py-1 rounded-lg bg-blue-50/80 text-blue-700 border border-blue-200/80 font-medium">Intelligent AI Systems</span>
          </div>
        </div>

      </div>
    </section>
  );
};
