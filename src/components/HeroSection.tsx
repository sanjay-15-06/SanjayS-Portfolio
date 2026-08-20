import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Mail, Code2, Sparkles, ChevronRight, Play } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { sfx } from '../utils/sfx';

interface HeroSectionProps {
  onOpenTerminal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTerminal }) => {
  const titles = [
    'SOFTWARE DEVELOPER',
    'JAVA & SPRING BOOT SPECIALIST',
    'PYTHON & DJANGO ENTHUSIAST',
    'B.SC. COMPUTER SCIENCE STUDENT',
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullTitle = titles[currentTitleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullTitle.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex]);

  return (
    <section id="about" className="relative pt-8 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Information & Actions */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Top Tech Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>AVAILABLE FOR SOFTWARE DEVELOPER ROLES</span>
          </div>

          {/* Main Title & Typewriter */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-orbitron font-black tracking-tight text-white leading-none">
              HI, I'M <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500">SANJAY S</span>
            </h1>
            <div className="h-10 text-xl sm:text-2xl font-mono text-cyan-400 font-bold flex items-center">
              <span className="text-purple-400 mr-2 font-orbitron">&gt;</span>
              <span>{displayText}</span>
              <span className="inline-block w-2.5 h-6 bg-cyan-400 ml-1 animate-pulse"></span>
            </div>
          </div>

          {/* Objective Narrative Card */}
          <div className="glass-panel p-6 rounded-xl relative overflow-hidden border border-cyan-500/20 shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <p className="text-slate-300 text-base leading-relaxed font-sans">
              Motivated <strong className="text-cyan-300 font-semibold">B.Sc. Computer Science</strong> student at KG College of Arts and Science with a strong foundation in <span className="text-purple-300 font-mono">Java 17, Python, Spring Boot, and SQL</span>. Experienced in engineering secure user authentication protocols, real-time geofencing SOS alert systems, and RESTful web microservices.
            </p>

            {/* Sub Contact Badges */}
            <div className="mt-5 pt-5 border-t border-slate-800 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <a 
                href="mailto:sanjusan1506@gmail.com" 
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                onMouseEnter={() => sfx.playHover()}
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                sanjusan1506@gmail.com
              </a>
              <span className="text-slate-700">•</span>
              <a 
                href="https://linkedin.com/in/sanjay-s-b44539320" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                onMouseEnter={() => sfx.playHover()}
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                LinkedIn
              </a>
              <span className="text-slate-700">•</span>
              <a 
                href="https://github.com/sanjayS1506" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                onMouseEnter={() => sfx.playHover()}
              >
                <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                sanjayS1506
              </a>
            </div>
          </div>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              onMouseEnter={() => sfx.playHover()}
              onClick={() => sfx.playClick()}
              className="px-6 py-3 rounded-lg font-orbitron font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.7)] transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Code2 className="w-4 h-4" />
              VIEW PROJECTS
              <ChevronRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                sfx.playClick();
                onOpenTerminal();
              }}
              onMouseEnter={() => sfx.playHover()}
              className="px-6 py-3 rounded-lg font-orbitron font-bold text-sm bg-purple-950/60 hover:bg-purple-900/80 text-purple-300 border border-purple-500/50 hover:border-purple-400 shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Terminal className="w-4 h-4 text-purple-400" />
              LAUNCH CLI MODE
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Cyber Terminal Preview Box */}
        <div className="lg:col-span-5">
          <div className="relative group">
            {/* Glow Behind Box */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000"></div>

            {/* Terminal Mock Container */}
            <div className="relative rounded-xl border border-cyan-500/30 bg-[#0b0e17] overflow-hidden shadow-2xl">
              {/* Window Title Bar */}
              <div className="bg-[#111625] px-4 py-3 flex items-center justify-between border-b border-cyan-500/20">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs font-mono text-cyan-400/80 font-medium flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-cyan-400" />
                  Sanjay_Developer_Core.java
                </div>
                <div className="text-[10px] font-mono text-slate-500">UTF-8</div>
              </div>

              {/* Code Editor Body */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-left space-y-2">
                <div className="text-slate-500">// @Author: Sanjay S (Coimbatore, India)</div>
                <div className="text-purple-400">
                  <span className="text-cyan-400">package</span> com.sanjay.portfolio.core;
                </div>
                <br />
                <div>
                  <span className="text-cyan-400">@SpringBootApplication</span>
                </div>
                <div>
                  <span className="text-cyan-400">public class</span> <span className="text-yellow-300">DeveloperProfile</span> {'{'}
                </div>

                <div className="pl-4">
                  <span className="text-cyan-400">private final</span> String name = <span className="text-emerald-300">"SANJAY S"</span>;
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">private final</span> String degree = <span className="text-emerald-300">"B.Sc. Computer Science"</span>;
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">private final</span> String intern = <span className="text-emerald-300">"AMDOX Technologies"</span>;
                </div>

                <br />
                <div className="pl-4 text-slate-500">// Technical Competencies</div>
                <div className="pl-4">
                  <span className="text-cyan-400">public</span> String[] getSkills() {'{'}
                </div>
                <div className="pl-8 text-cyan-300">
                  return new String[] {'{'}
                </div>
                <div className="pl-12 text-emerald-300">
                  "Java 17", "Spring Boot", "Security JWT",
                </div>
                <div className="pl-12 text-emerald-300">
                  "Python", "Django", "MySQL", "MongoDB"
                </div>
                <div className="pl-8 text-cyan-300">{'}'};</div>
                <div className="pl-4">{'}'}</div>
                <div>{'}'}</div>
              </div>

              {/* Live Execution Bar */}
              <div className="bg-[#0f1422] px-4 py-2.5 border-t border-cyan-500/20 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center text-emerald-400 gap-1.5">
                  <Play className="w-3 h-3 fill-emerald-400" />
                  <span>SPRING BOOT SERVER READY</span>
                </div>
                <div className="text-cyan-400/80">BUILD: SUCCESS</div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar Below Terminal */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="glass-panel p-3 rounded-lg text-center border border-cyan-500/20">
              <div className="text-xl font-orbitron font-bold text-cyan-400">02+</div>
              <div className="text-[11px] font-mono text-slate-400">FULL PROJECTS</div>
            </div>
            <div className="glass-panel p-3 rounded-lg text-center border border-purple-500/20">
              <div className="text-xl font-orbitron font-bold text-purple-400">01</div>
              <div className="text-[11px] font-mono text-slate-400">INTERNSHIP</div>
            </div>
            <div className="glass-panel p-3 rounded-lg text-center border border-emerald-500/20">
              <div className="text-xl font-orbitron font-bold text-emerald-400">2024</div>
              <div className="text-[11px] font-mono text-slate-400">KG CAS B.SC.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
