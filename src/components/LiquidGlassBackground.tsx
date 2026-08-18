import React, { useEffect, useState } from 'react';

export const LiquidGlassBackground: React.FC = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if touch device or small screen
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Subtle mouse move parallax
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 24; // max +-12px
      const y = (e.clientY / window.innerHeight - 0.5) * 24;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#F8FAFC]">
      
      {/* SVG Displacement Filter for Liquid Refraction */}
      <svg className="hidden">
        <defs>
          <filter id="liquid-refraction" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.015" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
        </defs>
      </svg>

      {/* Primary Liquid Blobs Layer with Mouse Parallax Shift */}
      <div 
        className="absolute inset-0 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
        }}
      >
        
        {/* Blob 1: Soft Liquid Blue (Top Left - Hero area) */}
        <div 
          className="absolute -top-20 -left-20 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] rounded-full opacity-60 mix-blend-multiply blur-3xl animate-liquid-1"
          style={{
            background: 'radial-gradient(circle, rgba(220, 235, 255, 0.85) 0%, rgba(223, 247, 250, 0.5) 50%, rgba(248, 250, 252, 0) 80%)',
          }}
        />

        {/* Blob 2: Subtle Cyan/Violet Refraction (Top Right) */}
        <div 
          className="absolute top-[15%] -right-28 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full opacity-55 mix-blend-multiply blur-3xl animate-liquid-2"
          style={{
            background: 'radial-gradient(circle, rgba(238, 233, 255, 0.8) 0%, rgba(220, 235, 255, 0.6) 45%, rgba(248, 250, 252, 0) 75%)',
          }}
        />

        {/* Blob 3: Mid-page Fluid Gradient (Center - Projects/Research) */}
        <div 
          className="absolute top-[40%] left-[10%] w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] rounded-full opacity-50 mix-blend-multiply blur-3xl animate-liquid-3"
          style={{
            background: 'radial-gradient(circle, rgba(223, 247, 250, 0.85) 0%, rgba(220, 235, 255, 0.5) 50%, rgba(248, 250, 252, 0) 80%)',
          }}
        />

        {/* Blob 4: Soft Deep Blue Accent (Lower-mid - Experience & Events) */}
        {!isMobile && (
          <div 
            className="absolute top-[65%] right-[5%] w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] rounded-full opacity-45 mix-blend-multiply blur-3xl animate-liquid-1"
            style={{
              background: 'radial-gradient(circle, rgba(220, 235, 255, 0.75) 0%, rgba(238, 233, 255, 0.45) 55%, rgba(248, 250, 252, 0) 80%)',
            }}
          />
        )}

        {/* Blob 5: Bottom Liquid Refraction (Contact & Footer) */}
        <div 
          className="absolute -bottom-20 left-[20%] w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full opacity-55 mix-blend-multiply blur-3xl animate-liquid-2"
          style={{
            background: 'radial-gradient(circle, rgba(220, 235, 255, 0.8) 0%, rgba(223, 247, 250, 0.5) 50%, rgba(248, 250, 252, 0) 85%)',
          }}
        />

      </div>

      {/* ECE Engineering Subtle Line Overlay (PCB Traces + RF Waves) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07] stroke-blue-600 fill-none" xmlns="http://www.w3.org/2000/svg">
        
        {/* PCB Trace Path 1 (Top Hero) */}
        <path d="M -50 150 H 250 L 320 220 H 600 L 680 140 H 1200" strokeWidth="1.5" strokeDasharray="6 6" />
        <circle cx="250" cy="150" r="3" className="fill-blue-600" />
        <circle cx="320" cy="220" r="3" className="fill-blue-600" />
        <circle cx="680" cy="140" r="3" className="fill-blue-600" />

        {/* PCB Trace Path 2 (Mid Page) */}
        <path d="M 100 800 H 450 L 520 870 H 900 L 980 790 H 1500" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="450" cy="800" r="3" className="fill-blue-600" />
        <circle cx="520" cy="870" r="3" className="fill-blue-600" />

        {/* RF Waveform 1 (Sinusoidal Signal Curve) */}
        <path 
          d="M 0 380 Q 75 320, 150 380 T 300 380 T 450 380 T 600 380 T 750 380 T 900 380 T 1050 380 T 1200 380 T 1350 380 T 1500 380" 
          strokeWidth="1" 
          className="animate-ece-wave"
        />

        {/* RF Antenna Polar Radiation Circles */}
        <circle cx="85%" cy="25%" r="80" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="85%" cy="25%" r="140" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="85%" cy="25%" r="200" strokeWidth="0.75" strokeDasharray="2 4" />

        {/* Antenna Beam Ray vectors */}
        <line x1="85%" y1="25%" x2="70%" y2="20%" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="85%" y1="25%" x2="75%" y2="35%" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="85%" y1="25%" x2="95%" y2="38%" strokeWidth="1" strokeDasharray="4 4" />

      </svg>

      {/* Subtle Liquid Glass Light Refraction Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/50 pointer-events-none"
      />

    </div>
  );
};
