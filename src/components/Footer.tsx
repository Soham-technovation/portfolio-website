import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Interests', href: '#domains' },
    { label: 'Research', href: '#research' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Events & Hackathons', href: '#events' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-slate-200/60 text-slate-700 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200/80">
          
          {/* Brand */}
          <div className="space-y-1">
            <div className="font-display font-extrabold text-lg text-slate-900 tracking-tight">
              {PERSONAL_INFO.name}
            </div>
            <div className="font-mono text-xs text-blue-700 font-medium">
              Electronics & Communication Engineering • IEM Saltlake
            </div>
            <p className="text-xs text-slate-500 font-sans">
              RF & Microwave • Embedded Systems • Semiconductor & VLSI • AI
            </p>
          </div>

          {/* Quick Nav */}
          <nav className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-slate-600">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

        </div>

        {/* Connect with me Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-slate-600 pt-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-slate-900 mr-1">Connect with me:</span>
            
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors border border-slate-200 font-medium"
            >
              <Github className="w-3.5 h-3.5 text-slate-900" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors border border-blue-200 font-medium"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-600" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors border border-slate-200 font-medium"
            >
              <Twitter className="w-3.5 h-3.5 text-sky-500" />
              <span>X</span>
            </a>
          </div>

          <div className="text-slate-500">
            © {currentYear} {PERSONAL_INFO.name}. All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
