import React, { useState } from 'react';
import { Mail, Linkedin, Github, Twitter, Send, CheckCircle2, Copy, Check, MessageSquare, Sparkles, User, AtSign, MapPin, Download, Eye, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reasonCategory: 'Research Collaboration',
    reasonDetails: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const reasonCategories = [
    'Research Collaboration',
    'Internship / Career Role',
    'Hardware & AI Project',
    'Technical Networking',
    'General Inquiry'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.reasonDetails) return;
    setSubmitted(true);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      reasonCategory: 'Research Collaboration',
      reasonDetails: ''
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 pb-4 border-b border-slate-200/80 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="font-mono text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1">
              Contact & Outreach
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Let's Connect
            </h2>
          </div>
          <div className="mt-2 md:mt-0 font-mono text-xs text-slate-600 font-medium">
            OPEN TO INTERNSHIPS, RESEARCH & COLLABORATION
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Outreach Info */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-slate-800 text-base leading-relaxed font-sans font-medium">
              Open to engineering internships, research opportunities, technical collaborations and meaningful projects in RF engineering, embedded systems, semiconductor technologies, and AI applications.
            </p>

            {/* Direct Communication Cards */}
            <div className="space-y-3 pt-1">
              
              {/* Email Card */}
              <div className="glass-card p-4 rounded-2xl border border-white/90 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-center text-blue-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">DIRECT EMAIL</div>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-mono font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white/80 text-slate-700 hover:bg-white transition-colors border border-slate-200/80"
                  title="Copy Email Address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-blue-600" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="glass-card p-4 rounded-2xl border border-white/90 flex items-center gap-3 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-center text-blue-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">LOCATION BASE</div>
                  <div className="text-xs sm:text-sm font-mono font-bold text-slate-900">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>

              {/* Professional Social Links */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl glass-card border border-white/90 hover:border-blue-400/80 flex items-center gap-2 font-mono text-xs text-slate-900 hover:text-blue-600 transition-all shadow-xs group font-semibold"
                >
                  <Linkedin className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl glass-card border border-white/90 hover:border-blue-400/80 flex items-center gap-2 font-mono text-xs text-slate-900 hover:text-blue-600 transition-all shadow-xs group font-semibold"
                >
                  <Github className="w-4 h-4 text-slate-900 group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl glass-card border border-white/90 hover:border-blue-400/80 flex items-center gap-2 font-mono text-xs text-slate-900 hover:text-blue-600 transition-all shadow-xs group font-semibold"
                >
                  <Twitter className="w-4 h-4 text-sky-500 group-hover:scale-110 transition-transform" />
                  <span>X / Twitter</span>
                </a>

                <a
                  href={PERSONAL_INFO.devfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl glass-card border border-white/90 hover:border-blue-400/80 flex items-center gap-2 font-mono text-xs text-slate-900 hover:text-blue-600 transition-all shadow-xs group font-semibold"
                >
                  <Globe className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                  <span>Devfolio</span>
                </a>
              </div>

              {/* Direct View & Download Resume Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-1.5 font-mono text-xs font-bold transition-all shadow-xs"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Resume</span>
                </a>

                <a
                  href="/resume.pdf"
                  download="Soham_Khan_Resume.pdf"
                  className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center gap-1.5 font-mono text-xs font-bold transition-all shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-white/90 shadow-xs">
            
            <div className="flex items-center gap-2 mb-1">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              <h3 className="font-display font-bold text-xl text-slate-900">
                Send a Message
              </h3>
            </div>
            <p className="text-xs font-mono text-slate-500 mb-6">
              Fill out the form below to reach out directly.
            </p>

            {submitted ? (
              <div className="p-6 sm:p-8 rounded-xl bg-blue-50/50 border border-blue-200 text-left space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-blue-200">
                  <CheckCircle2 className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-display font-bold text-lg text-slate-900">
                      Message Transmitted!
                    </h4>
                    <span className="text-xs font-mono text-blue-700">
                      ROUTED TO SOHAM KHAN
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-mono text-slate-700 bg-white p-4 rounded-lg border border-slate-200">
                  <div>
                    <span className="text-slate-500 uppercase">SENDER:</span>{' '}
                    <strong className="text-slate-900">{formData.name}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 uppercase">EMAIL:</span>{' '}
                    <strong className="text-blue-700">{formData.email}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 uppercase">CATEGORY:</span>{' '}
                    <strong className="text-slate-900">{formData.reasonCategory}</strong>
                  </div>
                  <div className="pt-2 border-t border-slate-200 text-slate-800 leading-relaxed font-sans text-xs">
                    "{formData.reasonDetails}"
                  </div>
                </div>

                <p className="text-xs text-slate-600">
                  Thank you for reaching out! Soham will review your inquiry and get back to you promptly.
                </p>

                <button
                  onClick={handleResetForm}
                  className="px-4 py-2 rounded-lg bg-white hover:bg-slate-100 text-xs font-mono font-medium text-slate-800 border border-slate-300 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono text-slate-700 font-medium mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-blue-600" />
                    <span>YOUR NAME / INSTITUTION *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Aris Thorne / IEM Kolkata"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm font-mono text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 placeholder:text-slate-400"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono text-slate-700 font-medium mb-1 flex items-center gap-1.5">
                    <AtSign className="w-3.5 h-3.5 text-blue-600" />
                    <span>YOUR EMAIL ADDRESS *</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. name@organization.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm font-mono text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 placeholder:text-slate-400"
                  />
                </div>

                {/* Reason Category Pills */}
                <div>
                  <label className="block text-xs font-mono text-slate-700 font-medium mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>PURPOSE OF OUTREACH *</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {reasonCategories.map((cat) => (
                      <button
                        type="button"
                        key={cat}
                        onClick={() => setFormData({ ...formData, reasonCategory: cat })}
                        className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                          formData.reasonCategory === cat
                            ? 'bg-blue-600 text-white font-semibold'
                            : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div>
                  <label className="block text-xs font-mono text-slate-700 font-medium mb-1 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                    <span>MESSAGE DETAILS *</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.reasonDetails}
                    onChange={(e) => setFormData({ ...formData, reasonDetails: e.target.value })}
                    placeholder={`Please elaborate on your inquiry (${formData.reasonCategory.toLowerCase()})...`}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm font-mono text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 placeholder:text-slate-400"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg text-sm font-mono font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
