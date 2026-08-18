import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Github, Twitter } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'domains', 'research', 'projects', 'experience', 'events', 'skills', 'certifications', 'exploring', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Interests', href: '#domains', id: 'domains' },
    { label: 'Research', href: '#research', id: 'research' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Events & Hackathons', href: '#events', id: 'events' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/75 backdrop-blur-2xl border-b border-white/80 py-3 shadow-xs'
          : 'bg-white/50 backdrop-blur-xl py-4 border-b border-white/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Name */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="font-display font-extrabold text-lg text-slate-900 tracking-tight flex items-center gap-2">
            <span>SOHAM KHAN</span>
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" title="Electronics Engineer" />
          </div>
          <span className="hidden sm:inline-block font-mono text-xs text-slate-500 border-l border-slate-300 pl-2.5">
            ECE Undergraduate
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1 rounded-lg border border-slate-200">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeSection === link.id
                  ? 'bg-white text-blue-600 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition-all shadow-xs"
          >
            <Github className="w-3.5 h-3.5" />
          </a>

          <a
            href={PERSONAL_INFO.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X Profile"
            className="p-1.5 text-slate-700 hover:text-sky-500 bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition-all shadow-xs"
          >
            <Twitter className="w-3.5 h-3.5 text-sky-500" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition-all shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span>View Resume</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-all shadow-xs"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Connect</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenResumeModal}
            className="p-2 text-slate-700 bg-white border border-slate-300 rounded-md text-xs font-medium flex items-center gap-1"
            title="Resume"
          >
            <FileText className="w-4 h-4 text-blue-600" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-3 shadow-md">
          <div className="grid grid-cols-2 gap-1.5 pb-3 border-b border-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-1 flex items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-slate-100 border border-slate-300 rounded-md"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-blue-600 rounded-md"
            >
              <Send className="w-4 h-4" />
              <span>Connect</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
