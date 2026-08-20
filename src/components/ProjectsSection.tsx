import React, { useState } from 'react';
import { Radio, Layers, Check, Play, Lock, Compass } from 'lucide-react';
import { JwtSimulatorModal } from './JwtSimulatorModal';
import { TouristRadarModal } from './TouristRadarModal';
import { sfx } from '../utils/sfx';

export const ProjectsSection: React.FC = () => {
  const [jwtModalOpen, setJwtModalOpen] = useState(false);
  const [radarModalOpen, setRadarModalOpen] = useState(false);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>PORTFOLIO SHOWCASE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white tracking-tight">
          HIGH-IMPACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">PROJECTS</span>
        </h2>
        <p className="max-w-2xl mx-auto text-slate-400 font-sans text-sm sm:text-base">
          Interactive full-stack software applications engineered with robust security protocols, real-time tracking, and production-ready architecture.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Project 1: JWT Auth & User Management System */}
        <div className="glass-panel rounded-2xl p-8 border border-cyan-500/30 glass-panel-hover flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all"></div>

          <div>
            {/* Top Badge & Icon */}
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                JAVA / SPRING BOOT
              </span>
            </div>

            {/* Title & Tech Stack */}
            <h3 className="text-2xl font-orbitron font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
              JWT AUTHENTICATION & USER MANAGEMENT SYSTEM
            </h3>

            <div className="flex flex-wrap gap-2 mb-4 font-mono text-xs text-purple-300">
              {['Java 17', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Maven', 'REST APIs'].map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded bg-purple-950/50 border border-purple-500/30">
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
              Engineered a enterprise-grade user authentication and access control backend using Spring Boot 3 and JSON Web Tokens. Features encrypted password handling, role-based authorization rules (USER / ADMIN), stateless session management, and protected REST endpoint filters backed by MySQL integration.
            </p>

            {/* Feature Highlights List */}
            <div className="space-y-2 mb-8 font-sans text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Stateless JWT Bearer token generation & verification pipeline.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>BCrypt password hashing and custom Spring Security filter chains.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Relational MySQL schema for user accounts and permission grants.</span>
              </div>
            </div>
          </div>

          {/* Interactive Trigger Button */}
          <button
            onClick={() => {
              sfx.playClick();
              setJwtModalOpen(true);
            }}
            onMouseEnter={() => sfx.playHover()}
            className="w-full py-3.5 rounded-xl font-orbitron font-bold text-xs bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            LAUNCH INTERACTIVE JWT SANDBOX
          </button>
        </div>

        {/* Project 2: Smart Tourist Management System */}
        <div className="glass-panel rounded-2xl p-8 border border-purple-500/30 glass-panel-hover flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-all"></div>

          <div>
            {/* Top Badge & Icon */}
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-950/80 text-purple-300 border border-purple-500/30">
                PYTHON / DJANGO
              </span>
            </div>

            {/* Title & Tech Stack */}
            <h3 className="text-2xl font-orbitron font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
              SMART TOURIST MANAGEMENT SYSTEM
            </h3>

            <div className="flex flex-wrap gap-2 mb-4 font-mono text-xs text-cyan-300">
              {['Python', 'Django', 'PyQt5', 'Geofencing', 'HTML5/CSS3', 'JavaScript', 'SOS Alert'].map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded bg-cyan-950/50 border border-cyan-500/30">
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
              Developed an intelligent location-based safety management system designed to enhance traveler security. Integrates geofencing zone monitoring, live location tracking, automated boundary alerts, and an emergency SOS dispatch system built with Django backend services and a PyQt5 Desktop UI.
            </p>

            {/* Feature Highlights List */}
            <div className="space-y-2 mb-8 font-sans text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Geofencing boundary detection triggering instant automated warnings.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Integrated Emergency SOS system relaying coordinates to safety teams.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Django REST API backend providing real-time location telemetry.</span>
              </div>
            </div>
          </div>

          {/* Interactive Trigger Button */}
          <button
            onClick={() => {
              sfx.playClick();
              setRadarModalOpen(true);
            }}
            onMouseEnter={() => sfx.playHover()}
            className="w-full py-3.5 rounded-xl font-orbitron font-bold text-xs bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all flex items-center justify-center gap-2"
          >
            <Radio className="w-4 h-4 text-white" />
            LAUNCH GEOFENCE & SOS RADAR SIMULATOR
          </button>
        </div>
      </div>

      {/* Modals */}
      <JwtSimulatorModal isOpen={jwtModalOpen} onClose={() => setJwtModalOpen(false)} />
      <TouristRadarModal isOpen={radarModalOpen} onClose={() => setRadarModalOpen(false)} />
    </section>
  );
};
