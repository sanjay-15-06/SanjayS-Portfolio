import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { sfx } from '../utils/sfx';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
          <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
          <span>CAREER TIMELINE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white tracking-tight">
          EXPERIENCE & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">ACADEMICS</span>
        </h2>
        <p className="max-w-2xl mx-auto text-slate-400 font-sans text-sm sm:text-base">
          Industrial internship hands-on exposure and formal academic milestone trajectory.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        {/* Left Column: Industrial Internship */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-orbitron font-bold text-white">INTERNSHIP EXPERIENCE</h3>
              <p className="text-xs font-mono text-cyan-400">PRACTICAL INDUSTRY ENGINEERING</p>
            </div>
          </div>

          {/* Internship Card */}
          <div
            onMouseEnter={() => sfx.playHover()}
            className="glass-panel p-6 rounded-2xl border border-cyan-500/30 glass-panel-hover relative space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
              <div>
                <h4 className="text-xl font-orbitron font-bold text-white text-cyan-300">JAVA DEVELOPER INTERN</h4>
                <div className="text-sm font-mono text-purple-300 font-semibold mt-0.5">AMDOX TECHNOLOGIES</div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                1-MONTH INTENSIVE
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              Completed an intensive 1-month developer internship specializing in Core Java engineering, database integration with MySQL, and software quality assurance.
            </p>

            {/* Internship Bullet Highlights */}
            <div className="space-y-2.5 pt-2 font-sans text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Assisted in developing and testing Java-based software modules and backend utilities.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Gained hands-on practical experience in Core Java syntax, OOP design principles, and debugging techniques.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Executed relational database queries in MySQL for software data validation and CRUD operations.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Academic Timeline */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-orbitron font-bold text-white">EDUCATION TIMELINE</h3>
              <p className="text-xs font-mono text-purple-400">ACADEMIC DEGREES & QUALIFICATIONS</p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Degree 1 */}
            <div
              onMouseEnter={() => sfx.playHover()}
              className="glass-panel p-5 rounded-2xl border border-purple-500/30 glass-panel-hover space-y-2"
            >
              <div className="flex flex-wrap justify-between items-start gap-2">
                <div>
                  <h4 className="text-lg font-orbitron font-bold text-white">BACHELOR OF COMPUTER SCIENCE</h4>
                  <div className="text-sm font-mono text-cyan-300">KG College of Arts and Science</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold">
                  2024 - PRESENT
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Coimbatore, Tamil Nadu
              </div>
              <p className="text-xs text-slate-300 font-sans pt-1">
                Pursuing comprehensive computer science curriculum covering Data Structures, OOP with Java, Database Management Systems (SQL), Web Technologies, and Software Engineering.
              </p>
            </div>

            {/* Degree 2 */}
            <div
              onMouseEnter={() => sfx.playHover()}
              className="glass-panel p-5 rounded-2xl border border-slate-800 glass-panel-hover space-y-2"
            >
              <div className="flex flex-wrap justify-between items-start gap-2">
                <div>
                  <h4 className="text-base font-orbitron font-bold text-white">HIGHER SECONDARY CERTIFICATE (HSC)</h4>
                  <div className="text-sm font-mono text-slate-300">Ruby Matric. Hr. Sec. School</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono">
                  2023 - 2024
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans">
                Completed Higher Secondary education with core focus on Mathematics and Computer Science foundations.
              </p>
            </div>

            {/* Degree 3 */}
            <div
              onMouseEnter={() => sfx.playHover()}
              className="glass-panel p-5 rounded-2xl border border-slate-800 glass-panel-hover space-y-2"
            >
              <div className="flex flex-wrap justify-between items-start gap-2">
                <div>
                  <h4 className="text-base font-orbitron font-bold text-white">SECONDARY SCHOOL LEAVING CERTIFICATE (SSLC)</h4>
                  <div className="text-sm font-mono text-slate-300">Ruby Matric. Hr. Sec. School</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono">
                  2021 - 2022
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans">
                Secondary school education with high academic distinction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
