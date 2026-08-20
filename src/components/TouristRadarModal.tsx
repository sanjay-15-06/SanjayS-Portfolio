import React, { useState, useEffect, useRef } from 'react';
import { X, ShieldAlert, Radio, CheckCircle2 } from 'lucide-react';
import { sfx } from '../utils/sfx';

interface TouristRadarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TouristRadarModal: React.FC<TouristRadarModalProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [sosActive, setSosActive] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    '[SYSTEM INIT] Django Geofencing Engine v2.1 Ready',
    '[GPS RECV] Connected to Location Intelligence Server',
    '[ZONE VERIFY] Tourist ID #TR-942 inside Safe Green Zone',
  ]);
  const [touristStatus, setTouristStatus] = useState<'SAFE' | 'WARNING' | 'SOS_EMERGENCY'>('SAFE');

  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let angle = 0;
    let touristX = 150;
    let touristY = 150;
    let touristSpeedX = 0.5;
    let touristSpeedY = 0.3;

    const centerX = 200;
    const centerY = 200;

    const render = () => {
      ctx.clearRect(0, 0, 400, 400);

      // Radar background circles
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.2)';
      ctx.lineWidth = 1;
      [50, 100, 150, 190].forEach((r) => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Geofence Zone Boundaries
      // Safe Zone (Green)
      ctx.fillStyle = 'rgba(16, 185, 129, 0.08)';
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 100, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Restricted Zone (Red ring outer)
      ctx.fillStyle = 'rgba(239, 68, 68, 0.05)';
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.3)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 190, 0, Math.PI * 2);
      ctx.stroke();

      // Radar Sweep Line
      angle += 0.02;
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(190, 0);
      const gradient = ctx.createLinearGradient(0, 0, 190, 0);
      gradient.addColorStop(0, 'rgba(0, 240, 255, 0.8)');
      gradient.addColorStop(1, 'transparent');
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

      // Move Tourist Marker
      touristX += touristSpeedX;
      touristY += touristSpeedY;

      const dist = Math.sqrt(Math.pow(touristX - centerX, 2) + Math.pow(touristY - centerY, 2));

      if (dist > 180) {
        touristSpeedX *= -1;
        touristSpeedY *= -1;
      }

      // Draw Tourist Marker
      ctx.beginPath();
      ctx.arc(touristX, touristY, 7, 0, Math.PI * 2);

      if (sosActive) {
        ctx.fillStyle = '#ef4444';
        ctx.shadowColor = '#ef4444';
        ctx.shadowBlur = 20;
      } else if (dist > 100) {
        ctx.fillStyle = '#f59e0b';
        ctx.shadowColor = '#f59e0b';
        ctx.shadowBlur = 10;
      } else {
        ctx.fillStyle = '#10b981';
        ctx.shadowColor = '#10b981';
        ctx.shadowBlur = 10;
      }
      ctx.fill();
      ctx.shadowBlur = 0;

      animFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animFrame);
    };
  }, [isOpen, sosActive]);

  if (!isOpen) return null;

  const triggerSOS = () => {
    sfx.playBeep(900, 'sawtooth', 0.2, 0.1);
    setSosActive(true);
    setTouristStatus('SOS_EMERGENCY');

    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [
      `[ALERT ${timestamp}] !!! EMERGENCY SOS SIGNAL BROADCAST !!!`,
      `[GEOFENCE] Tourist coordinates lat: 11.0182, lng: 76.9580`,
      `[DJANGO BACKEND] Automated Emergency Dispatch sent to Coimbatore Safety Team`,
      ...prev,
    ]);
  };

  const resetSOS = () => {
    sfx.playClick();
    setSosActive(false);
    setTouristStatus('SAFE');
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [`[RESET ${timestamp}] SOS Cleared. Tourist restored to Safe Tracking.`, ...prev]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl glass-panel border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden text-left animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#0f1523] px-6 py-4 border-b border-cyan-500/30 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="font-orbitron font-bold text-white text-base flex items-center gap-2">
                Smart Tourist Geofencing & SOS Emergency Radar
                <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">PYTHON & DJANGO</span>
              </h3>
              <p className="text-xs font-mono text-slate-400">Real-Time Location Intelligence & Safety Dispatch System</p>
            </div>
          </div>
          <button
            onClick={() => {
              sfx.playClick();
              onClose();
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Radar Body Grid */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Radar Canvas Box */}
          <div className="md:col-span-6 flex flex-col items-center justify-center bg-[#07090e] p-4 rounded-xl border border-cyan-500/20 relative">
            <canvas ref={canvasRef} width={400} height={400} className="w-full max-w-[320px] aspect-square" />

            <div className="mt-3 flex items-center justify-center gap-4 text-[11px] font-mono">
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span> Safe Zone
              </span>
              <span className="flex items-center gap-1 text-yellow-400">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></span> Boundary
              </span>
              <span className="flex items-center gap-1 text-red-400">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span> Restricted
              </span>
            </div>
          </div>

          {/* Controls & Log Dashboard */}
          <div className="md:col-span-6 space-y-4 flex flex-col justify-between">
            {/* Status Card */}
            <div
              className={`p-4 rounded-xl border transition-all ${
                sosActive
                  ? 'bg-red-950/40 border-red-500/60 text-red-300 shadow-[0_0_20px_rgba(239,68,68,0.4)]'
                  : 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold uppercase">GEOFENCE TELEMETRY STATUS</span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-mono font-extrabold ${
                    sosActive ? 'bg-red-500 text-slate-950 animate-bounce' : 'bg-emerald-500/20 text-emerald-300'
                  }`}
                >
                  {touristStatus}
                </span>
              </div>
              <div className="text-sm font-orbitron font-semibold">
                {sosActive
                  ? 'CRITICAL SOS ALERT BROADCAST ACTIVE'
                  : 'MONITORING TOURIST ID #TR-942 IN DESIGNATED ZONE'}
              </div>
            </div>

            {/* Action SOS Trigger */}
            <div className="space-y-2">
              {!sosActive ? (
                <button
                  onClick={triggerSOS}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-orbitron font-extrabold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all transform hover:scale-[1.02] active:scale-98"
                >
                  <ShieldAlert className="w-5 h-5 animate-pulse" />
                  SIMULATE TOURIST EMERGENCY SOS TRIGGER
                </button>
              ) : (
                <button
                  onClick={resetSOS}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-orbitron font-extrabold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  RESOLVE EMERGENCY & RESET RADAR
                </button>
              )}
            </div>

            {/* Django Server Event Stream Log */}
            <div className="bg-[#07090e] p-3.5 rounded-xl border border-slate-800 space-y-1.5">
              <div className="text-xs font-mono text-cyan-400 font-bold flex items-center justify-between">
                <span>DJANGO BACKEND EVENT STREAM</span>
                <span className="text-[10px] text-slate-500">REALTIME WS</span>
              </div>
              <div className="h-32 overflow-y-auto font-mono text-[11px] space-y-1 text-slate-300">
                {logs.map((log, idx) => (
                  <div
                    key={idx}
                    className={`leading-tight ${log.includes('EMERGENCY') ? 'text-red-400 font-bold' : log.includes('RESET') ? 'text-emerald-400' : 'text-slate-400'}`}
                  >
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
