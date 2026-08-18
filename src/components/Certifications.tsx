import React from 'react';
import { Award, ShieldCheck, ExternalLink, Star } from 'lucide-react';
import { CERTIFICATIONS_LIST } from '../data/resumeData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 pb-4 border-b border-slate-200/80 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="font-mono text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Verified Credentials & Honors</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Certifications & Major Academic Training
            </h2>
          </div>
          <div className="mt-2 md:mt-0 font-mono text-xs text-slate-600 font-medium">
            IISc BANGALORE, NPTEL, UC SAN DIEGO, MCKINSEY & GOOGLE CLOUD
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_LIST.map((cert, idx) => {
            const isMajor = cert.issuer.includes('MAJOR CERTIFICATION') || cert.title.includes('Semiconductor Devices') || cert.issuer.includes('IISc');

            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between space-y-4 group relative overflow-hidden glass-card glass-card-hover ${
                  isMajor
                    ? 'border-blue-400/90 shadow-sm ring-1 ring-blue-400/30 bg-gradient-to-br from-blue-50/80 via-white/80 to-indigo-50/60'
                    : 'border-white/90 shadow-xs hover:border-blue-400/80'
                }`}
              >
                {isMajor && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-mono font-bold px-3 py-1 rounded-bl-lg shadow-xs flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                    <span>MAJOR CERTIFICATION</span>
                  </div>
                )}

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${
                      isMajor ? 'bg-blue-600 text-white border-blue-700' : 'bg-blue-50 border-blue-200 text-blue-600'
                    }`}>
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-mono border border-slate-200 font-medium">
                      {cert.date}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className={`text-xs font-mono font-semibold mt-1.5 ${isMajor ? 'text-blue-800' : 'text-blue-700'}`}>
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-1 text-emerald-700 text-[11px] font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isMajor ? 'NATIONAL EXCELLENCE CERTIFICATE' : 'VERIFIED CREDENTIAL'}</span>
                  </div>
                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 font-semibold"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
