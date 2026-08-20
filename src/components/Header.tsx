import React, { useState, useEffect } from 'react';
import { Terminal, Volume2, VolumeX, Download, Cpu, MapPin } from 'lucide-react';
import { sfx } from '../utils/sfx';

interface HeaderProps {
  onOpenTerminal: () => void;
  onOpenResumePrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTerminal, onOpenResumePrint }) => {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [time, setTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTime(now.toLocaleTimeString('en-US', options) + ' IST');
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleAudio = () => {
    const newState = sfx.toggleSound();
    setSoundEnabled(newState);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-cyan-500/20 bg-[#07090e]/85 backdrop-blur-md transition-all duration-300">
      {/* Top Telemetry Ticker Line */}
      <div className="hidden md:flex items-center justify-between px-6 py-1 text-[11px] font-mono text-cyan-400/70 border-b border-cyan-500/10 bg-cyan-950/20">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            CORE: ONLINE
          </span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-cyan-400" />
            COIMBATORE, TN (11.0168° N, 76.9558° E)
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-slate-400">{time}</span>
          <span className="text-slate-600">|</span>
          <span className="text-cyan-300/80 font-semibold">B.SC. COMPUTER SCIENCE</span>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#about"
          onMouseEnter={() => sfx.playHover()}
          onClick={() => sfx.playClick()}
          className="flex items-center space-x-3 group"
        >
          <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
            <Cpu className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
          </div>
          <div>
            <div className="font-orbitron font-extrabold text-base tracking-wider text-slate-100 flex items-center gap-1.5">
              SANJAY S <span className="text-xs px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono font-normal">DEV</span>
            </div>
            <div className="text-[10px] font-mono text-cyan-400/80 tracking-widest uppercase">
              SOFTWARE DEVELOPER
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 font-mono text-sm">
          {[
            { name: '// 01. ABOUT', href: '#about' },
            { name: '// 02. SKILLS', href: '#skills' },
            { name: '// 03. PROJECTS', href: '#projects' },
            { name: '// 04. EXPERIENCE', href: '#experience' },
            { name: '// 05. CONTACT', href: '#contact' },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              onMouseEnter={() => sfx.playHover()}
              onClick={() => sfx.playClick()}
              className="px-3 py-1.5 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded border border-transparent hover:border-cyan-500/30 transition-all"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-2.5">
          {/* Audio SFX Switch */}
          <button
            onClick={toggleAudio}
            onMouseEnter={() => sfx.playHover()}
            title={soundEnabled ? 'Disable Tech Audio SFX' : 'Enable Tech Audio SFX'}
            className={`p-2 rounded-md border transition-all ${
              soundEnabled
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                : 'bg-slate-900/60 border-slate-700/60 text-slate-400 hover:text-slate-200 hover:border-slate-500'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Terminal Quick Switch */}
          <button
            onClick={() => {
              sfx.playClick();
              onOpenTerminal();
            }}
            onMouseEnter={() => sfx.playHover()}
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono bg-purple-950/40 hover:bg-purple-900/60 text-purple-300 border border-purple-500/40 rounded-md shadow-[0_0_12px_rgba(139,92,246,0.25)] hover:border-purple-400 transition-all"
          >
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span>CLI MODAL</span>
          </button>

          {/* Download Resume / Print Button */}
          <button
            onClick={() => {
              sfx.playSuccess();
              onOpenResumePrint();
            }}
            onMouseEnter={() => sfx.playHover()}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-orbitron font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-md shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all transform hover:scale-105 active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-cyan-400"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-cyan-400"></span>
              <span className="w-full h-0.5 bg-cyan-400"></span>
              <span className="w-full h-0.5 bg-cyan-400"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-cyan-500/20 bg-[#0d111a] px-4 pt-3 pb-4 space-y-2 font-mono text-sm">
          {[
            { name: '// 01. ABOUT', href: '#about' },
            { name: '// 02. SKILLS', href: '#skills' },
            { name: '// 03. PROJECTS', href: '#projects' },
            { name: '// 04. EXPERIENCE', href: '#experience' },
            { name: '// 05. CONTACT', href: '#contact' },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => {
                sfx.playClick();
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2 text-slate-200 hover:text-cyan-400 hover:bg-cyan-500/10 rounded"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTerminal();
            }}
            className="w-full text-left px-3 py-2 text-purple-300 bg-purple-950/40 rounded border border-purple-500/30 flex items-center gap-2"
          >
            <Terminal className="w-4 h-4" /> Open Command Line Interface
          </button>
        </div>
      )}
    </header>
  );
};
