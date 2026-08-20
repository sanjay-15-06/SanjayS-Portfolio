import React, { useState, useEffect } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { TerminalModal } from './components/TerminalModal';
import { ResumePrintView } from './components/ResumePrintView';
import { Terminal, Shield, ArrowUp } from 'lucide-react';
import { sfx } from './utils/sfx';

export const App: React.FC = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumePrintOpen, setResumePrintOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const scrollToTop = () => {
    sfx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 relative selection:bg-cyan-500 selection:text-slate-950 font-sans">
      {/* Background Interactive Particle Grid */}
      <BackgroundCanvas />

      {/* Main HUD Header */}
      <Header
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResumePrint={() => setResumePrintOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-8">
        <HeroSection onOpenTerminal={() => setTerminalOpen(true)} />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyan-500/20 bg-[#06080d] py-12 px-4 text-center">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="font-orbitron font-extrabold text-lg tracking-wider text-slate-200 flex items-center justify-center gap-2">
            <Shield className="w-5 h-5 text-cyan-400" />
            SANJAY S <span className="text-xs font-mono text-cyan-400 font-normal px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">NEXUS-OS</span>
          </div>

          <p className="text-xs font-mono text-slate-400 max-w-xl mx-auto">
            Engineered with React 19, TypeScript, Vite, Web Audio API, and Cyber CSS Design Tokens. Tailored for Sanjay S - Java & Python Developer.
          </p>

          <div className="text-[11px] font-mono text-slate-500 pt-4 border-t border-slate-800/80">
            © {new Date().getFullYear()} SANJAY S. COIMBATORE, INDIA. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

      {/* Floating Scroll Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          onMouseEnter={() => sfx.playHover()}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all transform hover:scale-110 active:scale-95"
          title="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5 font-bold" />
        </button>
      )}

      {/* Floating CLI Keyboard Hint (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-30 hidden lg:flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-purple-500/30 text-purple-300 font-mono text-xs shadow-lg backdrop-blur-sm">
        <Terminal className="w-3.5 h-3.5 text-purple-400" />
        <span>Press <kbd className="px-1.5 py-0.5 rounded bg-purple-950 border border-purple-500/50 text-purple-200">Ctrl + K</kbd> for CLI</span>
      </div>

      {/* Interactive Modals */}
      <TerminalModal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
      <ResumePrintView isOpen={resumePrintOpen} onClose={() => setResumePrintOpen(false)} />
    </div>
  );
};

export default App;
