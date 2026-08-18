import React, { useState } from 'react';
import { FileText, Download, Copy, Check, Eye, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface ResumeSectionProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ isOpen, onClose, onOpen }) => {
  const [copied, setCopied] = useState(false);

  const resumeText = `SOHAM KHAN
+91 9933637166 | Soham.khan.dgp@gmail.com | LinkedIn | GitHub: https://github.com/Soham-technovation | X: https://x.com/Soham_eleven

CARRIER OBJECTIVE
Electronics and Communication Engineering undergraduate with a strong foundation in circuit design, RF engineering, and embedded systems. Aspiring to build a career in RF technologies integrated with VLSI and semiconductor systems, leveraging research, innovation, and engineering expertise to develop next-generation wireless and integrated circuit solutions.

EDUCATION
Institute of Engineering and Management, Salt Lake
Bachelor of Technology, Electronics and Communications Engineering (Jul 2024 - Jun 2028)
Kolkata, India | GPA: 7.88

Hem Sheela Model School
Senior Secondary, Science (PCMB) (Apr 2019 - May 2023)
Durgapur, India

SKILLS SUMMARY
• Programming & Development: Python, C, APIs, Arduino IDE, Java
• Domain Knowledge: RF Engineering, Embedded Systems, PCB Design, Circuit Design, Electromagnetic Simulation, Semiconductor Devices & VLSI Fundamentals
• Design & Simulation Tools: Altium Designer, LTSpice, MATLAB, Simulink, CST Studio Suite, ANSYS HFSS
• Platforms: PyCharm, Jupyter Notebook, Visual Studio Code
• Professional Skills: Technical Documentation, Experimental Analysis, Technical Report Writing

WORK EXPERIENCE
Sanchar Mitra (Internship)
Department of Telecommunications ( DOT ) | Sep 2025 - Present
• Telecom awareness & outreach, cybersecurity awareness, community engagement
• Developed skills in telecom fraud prevention, mobile security, and cybersecurity awareness.
• Gained experience in grassroots outreach and community engagement by working with local communities, NGOs, WB LSA and authorities; enhanced coordination and report-building skills for addressing telecom-related issues.

EVENTS & HACKATHONS
• Build with AI Bootcamp – Kolkata (GDG TIU | August 2026)
• Running Local AI Models on Android and iOS (GDG IEM KOLKATA | August 2026)
• HACKSTORM WINNER (ECE Dept, IEM Saltlake Kolkata | May 2026)
• Stellar Bootcamp Day - Kolkata by Rise (GDG IEM Kolkata | April 2026)
• Recognised as a Sanchar Mitra by Department of Telecommunications (DoT) (15th October 2025)
• PHYCATHON WINNER (BSH Dept, IEM Saltlake Kolkata | February 2025)
• GOOGLE SOLUTION CHALLENGE Hackathon (GDG Heritage Kolkata | August 2024)

PROJECTS
• AI-Based Surface AQI & HCHO Hotspot Identification using Satellite Data (ISRO Bharatiya Antariksh Hackathon 2026 | May 2026 - Jul 2026)
  Built an AI-powered framework for high-resolution AQI prediction and HCHO hotspot identification using multi-source satellite data. Developed a CNN–LSTM with Attention model integrating INSAT-3D, Sentinel-5P, CPCB, MODIS, and ERA5 datasets for spatiotemporal environmental analysis.
  Tech Stack: Python, TensorFlow, Google Earth Engine, Streamlit, GitHub

• AI Powered Soil Health Monitoring System (Google Solution Challenge 2025 | Dec 2024 - Feb 2025)
  Achieved a 96% accuracy rate in forecasting performance by developing and deploying a machine learning model. Managed data integrity by handling missing values and encoding categorical variables, enhancing data quality by 33%. Conducted experiments with both classification and regression algorithms to identify the most suitable approach.
  Tech Stack: Python, TensorFlow, Machine Learning, Data Analytics

• Bi-Directional Gate Counter using Arduino UNO (Jul 2024 - Sep 2024)
  Developed a bi-directional visitor counter system using Arduino Uno and IR sensors to track people entering and exiting a space. Designed and programmed the system in Embedded C/Arduino IDE, optimizing sensor accuracy and response time. Demonstrated applications in classrooms, offices, and public halls for efficient resource utilization, crowd management, and energy savings.
  Tech Stack: Arduino UNO, Embedded C, Arduino IDE, IR Sensors

CERTIFICATES
• Fundamentals of Semiconductor Devices, NPTEL, IISc Bangalore (April 2026) — [MAJOR CERTIFICATION]
• Internet of Things and AI Cloud Specialization - University of California San Diego (October 2025)
• McKinsey.org Forward Program: Issued by McKinsey & Company (July 2025)
• Postman API Fundamentals Student Expert by Postman (March 2025)
• Programming with Generative AI - IIT Guwahati (December 2024)
• MATLAB Onramp by MathWorks (October 2024)
• Build Real World AI Applications with Gemini and Imagen Skill Badge (Google Cloud)`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadFile = () => {
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Soham_Khan_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* Resume CTA Section Banner */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mx-auto">
            <FileText className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            Curriculum Vitae & Professional Credentials
          </h2>

          <p className="text-base text-slate-600 max-w-2xl mx-auto font-sans leading-relaxed">
            Explore my experience, projects, technical skills, and academic background in detail. Download or view the full curriculum vitae.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all flex items-center gap-2 shadow-xs"
            >
              <Eye className="w-4 h-4" />
              <span>View Resume</span>
            </a>

            <a
              href="/resume.pdf"
              download="Soham_Khan_Resume.pdf"
              className="px-6 py-3 rounded-lg text-sm font-medium text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 transition-all flex items-center gap-2 shadow-xs"
            >
              <Download className="w-4 h-4 text-blue-600" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onOpen}
              className="px-5 py-3 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Read Web Version</span>
            </button>
          </div>

          <p className="text-xs font-mono text-slate-500 pt-1">
            VERIFIED CV • SOHAM KHAN (ECE UNDERGRADUATE @ IEM SALTLAKE)
          </p>
        </div>
      </section>

      {/* Modal Popup for Resume */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Soham Khan — Official Curriculum Vitae
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Actions Bar */}
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-slate-600 font-medium">
                FORMAT: <strong className="text-blue-700">TEXT & VERIFIED CV DATA</strong>
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyText}
                  className="px-3 py-1.5 rounded bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 flex items-center gap-1.5 transition-colors font-medium"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-blue-600" />}
                  <span>{copied ? 'Copied CV!' : 'Copy CV Text'}</span>
                </button>

                <a
                  href="/resume.pdf"
                  download="Soham_Khan_Resume.pdf"
                  className="px-3.5 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            {/* Resume Text Content View */}
            <div className="p-6 overflow-y-auto bg-slate-50 font-mono text-xs text-slate-800 leading-relaxed space-y-4">
              <pre className="whitespace-pre-wrap font-mono text-xs text-slate-800">
                {resumeText}
              </pre>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>SOHAM KHAN • IEM SALTLAKE ECE</span>
              <button onClick={onClose} className="text-blue-600 font-semibold hover:underline">
                Close Viewer
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
