import React from 'react';
import { X, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-slate-50">
          <div>
            <span className="px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 font-mono text-xs border border-blue-200 font-medium">
              {project.eventOrContext}
            </span>
            <h3 className="font-display font-extrabold text-xl text-slate-900 mt-2">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Summary */}
          <div>
            <h4 className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider mb-2">
              Project Overview
            </h4>
            <p className="text-slate-800 text-sm leading-relaxed font-sans">
              {project.summary}
            </p>
          </div>

          {/* Key Contributions */}
          <div>
            <h4 className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider mb-3">
              Key Contributions & Technical Achievements
            </h4>
            <div className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-sans text-slate-800 leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pipeline */}
          {project.pipeline && (
            <div>
              <h4 className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider mb-3">
                Architectural Data Pipeline
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.pipeline.map((step, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-[10px] font-mono text-blue-600 font-bold">STEP 0{idx + 1}</div>
                    <div className="font-mono font-bold text-xs text-slate-900 my-0.5">{step.title}</div>
                    <div className="text-[11px] text-slate-600 font-sans">{step.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider mb-3">
              Confirmed Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
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

        {/* Modal Footer Links */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="text-xs font-mono text-slate-500">
            TIMELINE: <strong className="text-slate-800">{project.period}</strong>
          </div>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white text-xs font-mono text-slate-800 border border-slate-300">
                <Github className="w-3.5 h-3.5 text-blue-600" />
                <span>Devfolio</span>
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
