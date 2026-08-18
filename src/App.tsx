import React, { useState } from 'react';
import { LiquidGlassBackground } from './components/LiquidGlassBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Domains } from './components/Domains';
import { Research } from './components/Research';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { EventsSection } from './components/EventsSection';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { ExploringInterests } from './components/ExploringInterests';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Liquid Glass Dynamic Background */}
      <LiquidGlassBackground />

      {/* Navigation */}
      <div className="relative z-20">
        <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />
      </div>

      {/* Main Page Sections */}
      <main className="relative z-10">
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />
        <About />
        <Domains />
        <Research />
        <Projects />
        <Experience />
        <EventsSection />
        <Skills />
        <Certifications />
        <ExploringInterests />
        <ResumeSection
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
          onOpen={() => setResumeModalOpen(true)}
        />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10">
        <Footer />
      </footer>
    </div>
  );
}

