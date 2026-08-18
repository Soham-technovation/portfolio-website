import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, RefreshCw, Radio } from 'lucide-react';

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [freqHz, setFreqHz] = useState(2.45);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      if (isPlaying) {
        time += 0.03;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;
      const centerX = w * 0.25;
      const centerY = h * 0.5;

      // Draw engineering grid background
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw 2.45 GHz Microstrip Patch Antenna geometry representation
      ctx.save();
      ctx.translate(centerX, centerY);

      // Ground Plane
      ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
      ctx.strokeStyle = '#0284c7';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.rect(-60, -70, 120, 140);
      ctx.fill();
      ctx.stroke();

      // Substrate FR4
      ctx.fillStyle = 'rgba(12, 74, 110, 0.4)';
      ctx.beginPath();
      ctx.rect(-50, -60, 100, 120);
      ctx.fill();

      // Patch Conductor
      ctx.fillStyle = 'rgba(251, 191, 36, 0.85)'; // Copper/Amber
      ctx.strokeStyle = '#f59e0b';
      ctx.beginPath();
      ctx.rect(-35, -45, 70, 90);
      ctx.fill();
      ctx.stroke();

      // Microstrip Feed Line
      ctx.fillStyle = 'rgba(251, 191, 36, 0.9)';
      ctx.beginPath();
      ctx.rect(-8, 45, 16, 35);
      ctx.fill();

      // Antenna Labels
      ctx.font = '10px "Fira Code", monospace';
      ctx.fillStyle = '#38bdf8';
      ctx.fillText('PATCH 2.45GHz', -40, -52);
      ctx.fillStyle = '#fbbf24';
      ctx.fillText('FR-4 SUBSTRATE', -42, 72);

      ctx.restore();

      // Radiating Wavefronts (RF Wave propagation)
      const numWaves = 6;
      for (let i = 0; i < numWaves; i++) {
        const radius = ((time * 40 + i * 50) % 300) + 60;
        const opacity = Math.max(0, 1 - radius / 320);

        ctx.strokeStyle = `rgba(0, 212, 255, ${opacity * 0.6})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX + 35, centerY, radius, -Math.PI * 0.45, Math.PI * 0.45);
        ctx.stroke();
      }

      // Sine Wave Signal Pipeline across screen
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      const waveStartX = centerX + 80;
      const waveLength = w - waveStartX - 40;

      for (let x = 0; x < waveLength; x += 3) {
        const posX = waveStartX + x;
        const norm = x / waveLength;
        const waveAmp = 25 * Math.sin(norm * Math.PI);
        const posY =
          centerY +
          Math.sin(x * 0.04 * freqHz - time * 3) * waveAmp +
          Math.cos(x * 0.02 - time * 2) * 5;

        if (x === 0) {
          ctx.moveTo(posX, posY);
        } else {
          ctx.lineTo(posX, posY);
        }
      }
      ctx.stroke();

      // Radar Target Sweep & Reflection Node
      const targetX = w * 0.8;
      const targetY = centerY + Math.sin(time * 2) * 20;

      // Target marker
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(targetX, targetY, 18, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = 'rgba(245, 158, 11, 0.3)';
      ctx.beginPath();
      ctx.arc(targetX, targetY, 8, 0, Math.PI * 2);
      ctx.fill();

      // Echo reflection back to antenna
      const echoRadius = ((time * 30) % 180) + 10;
      ctx.strokeStyle = 'rgba(245, 158, 11, ' + Math.max(0, 1 - echoRadius / 180) + ')';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(targetX, targetY, echoRadius, Math.PI * 0.55, Math.PI * 1.45);
      ctx.stroke();
      ctx.setLineDash([]);

      // Radar Sweep Line
      const sweepAngle = (time * 1.5) % (Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.15)';
      ctx.fillStyle = 'rgba(0, 212, 255, 0.03)';
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, 280, sweepAngle, sweepAngle + 0.35);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Coordinate HUD overlay
      ctx.font = '10px "Fira Code", monospace';
      ctx.fillStyle = 'rgba(148, 163, 184, 0.7)';
      ctx.fillText(`RF FREQ: ${freqHz.toFixed(2)} GHz [ISM BAND]`, 15, h - 35);
      ctx.fillText(`RADAR STATUS: ACTIVE TRANSMIT / DOPPLER REC`, 15, h - 18);
      ctx.fillText(`ANTENNA: MICROSTRIP PATCH S11 < -15dB`, w - 240, h - 18);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isPlaying, freqHz]);

  return (
    <div className="relative w-full h-full min-h-[380px] bg-slate-950/80 rounded-xl border border-cyan-500/30 overflow-hidden shadow-2xl pcb-border group">
      <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />

      {/* Control Buttons HUD Overlay */}
      <div className="absolute top-3 right-3 flex items-center gap-2 bg-slate-900/90 backdrop-blur border border-slate-800 p-1.5 rounded-lg z-10">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-1.5 rounded text-xs font-mono text-cyan-400 hover:bg-cyan-950/60 transition-colors flex items-center gap-1"
          title={isPlaying ? 'Pause Signal' : 'Play Signal'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">{isPlaying ? 'PAUSE' : 'RUN'}</span>
        </button>

        <button
          onClick={() => setFreqHz((prev) => (prev === 2.45 ? 5.8 : prev === 5.8 ? 0.915 : 2.45))}
          className="p-1.5 rounded text-xs font-mono text-amber-400 hover:bg-amber-950/60 transition-colors flex items-center gap-1"
          title="Toggle Frequency Band"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>{freqHz} GHz</span>
        </button>
      </div>

      {/* Top Left Title Badge */}
      <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur border border-cyan-500/40 px-2.5 py-1 rounded text-[11px] font-mono text-cyan-300 flex items-center gap-2">
        <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
        <span>RF SIMULATION • 2.45 GHz ISM RADAR</span>
      </div>
    </div>
  );
};
