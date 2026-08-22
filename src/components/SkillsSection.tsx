import React, { useState } from 'react';
import { Cpu, Database, Globe, Cloud, Award, Users, CheckCircle } from 'lucide-react';
import { sfx } from '../utils/sfx';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const skillCategories = [
    {
      id: 'languages',
      name: 'Languages',
      icon: Cpu,
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
      bgGlow: 'bg-cyan-500/10',
      skills: [
        { name: 'Java 17 / Core Java', desc: 'Object-Oriented Programming, Multithreading, Spring Boot, Security' },
        { name: 'Python', desc: 'Scripting, Django, Location Intelligence, PyQt5' },
        { name: 'C++', desc: 'Data Structures, Memory Allocation, Algorithm Foundations' },
      ],
    },
    {
      id: 'databases',
      name: 'Databases',
      icon: Database,
      color: 'text-purple-400',
      borderColor: 'border-purple-500/30',
      bgGlow: 'bg-purple-500/10',
      skills: [
        { name: 'MySQL', desc: 'Relational Schemas, Indexing, Complex Queries, Workbench & CLI' },
        { name: 'MongoDB', desc: 'NoSQL Document Store, BSON Collections, Aggregations' },
      ],
    },
    {
      id: 'web',
      name: 'Web Technologies',
      icon: Globe,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
      bgGlow: 'bg-emerald-500/10',
      skills: [
        { name: 'HTML5 & CSS3', desc: 'Semantic Layouts, Responsive Design, CSS Grid & Flexbox' },
        { name: 'JavaScript (ES6+)', desc: 'Async/Await, DOM Operations, Fetch API, Event Loops' },
        { name: 'React.js', desc: 'JSX, Hooks, Component State Management, Dynamic UIs' },
        { name: 'Node.js', desc: 'REST API Servers, Package Management, Async Handlers' },
      ],
    },
    {
      id: 'cloud_tools',
      name: 'Cloud & Tools',
      icon: Cloud,
      color: 'text-yellow-400',
      borderColor: 'border-yellow-500/30',
      bgGlow: 'bg-yellow-500/10',
      skills: [
        { name: 'Git & GitHub', desc: 'Branching Strategy, Merging, Commits, Version Control' },
        { name: 'AWS (Basics)', desc: 'Cloud EC2 instance basics, S3 storage fundamentals' },
        { name: 'Development Tools', desc: 'VS Code, Eclipse, MySQL Workbench, Python IDLE' },
      ],
    },
  ];

  const softSkills = [
    'Project Management',
    'Time Management',
    'Adaptability',
    'Flexibility',
    'Team Collaboration',
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>TECHNICAL COMPETENCIES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white tracking-tight">
          SKILLS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">TECHNOLOGIES</span>
        </h2>
        <p className="max-w-2xl mx-auto text-slate-400 font-sans text-sm sm:text-base">
          Domain expertise across backend engineering, database management, web systems, and collaborative development tools.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 font-mono text-xs">
        <button
          onClick={() => {
            sfx.playClick();
            setActiveCategory('all');
          }}
          onMouseEnter={() => sfx.playHover()}
          className={`px-4 py-2 rounded-lg border transition-all ${
            activeCategory === 'all'
              ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
              : 'glass-panel text-slate-300 hover:text-white hover:border-slate-500'
          }`}
        >
          // ALL DOMAINS
        </button>

        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              sfx.playClick();
              setActiveCategory(cat.id);
            }}
            onMouseEnter={() => sfx.playHover()}
            className={`px-4 py-2 rounded-lg border transition-all flex items-center gap-1.5 ${
              activeCategory === cat.id
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                : 'glass-panel text-slate-300 hover:text-white hover:border-slate-500'
            }`}
          >
            <cat.icon className="w-3.5 h-3.5" />
            {cat.name.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {skillCategories
          .filter((cat) => activeCategory === 'all' || activeCategory === cat.id)
          .map((category) => (
            <div
              key={category.id}
              className={`glass-panel p-6 rounded-2xl border ${category.borderColor} space-y-5 relative overflow-hidden transition-all duration-300 hover:border-opacity-80`}
            >
              <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
                <div className={`p-2.5 rounded-xl ${category.bgGlow} ${category.color} border ${category.borderColor}`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-orbitron font-bold text-white tracking-wide">
                  {category.name}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-xl bg-[#090c13]/70 border border-slate-800/80 hover:border-slate-700/80 transition-all text-left space-y-1 group"
                  >
                    <div className="flex items-center space-x-2.5">
                      <span className={`w-2 h-2 rounded-full ${category.color} bg-current shadow-[0_0_8px_currentColor]`} />
                      <span className="text-sm font-orbitron font-bold text-slate-100 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-sans pl-4 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* Certification & Soft Skills Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
        {/* Soft Skills Telemetry */}
        <div className="lg:col-span-7 glass-panel p-6 rounded-2xl border border-cyan-500/20">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-orbitron font-bold text-white">SOFT SKILLS & COLLABORATION</h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs flex items-center gap-1.5"
              >
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications Card */}
        <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-yellow-500/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-orbitron font-bold text-white">CERTIFICATION</h3>
            </div>
            <div className="p-4 rounded-xl bg-[#0a0d14] border border-yellow-500/20">
              <div className="text-sm font-orbitron font-bold text-yellow-300">Big Data Computing</div>
              <div className="text-xs font-mono text-slate-400 mt-1">Issued by: NPTEL (National Programme on Technology Enhanced Learning)</div>
              <p className="text-xs text-slate-300 mt-2 font-sans">
                Comprehensive accreditation covering distributed computing, MapReduce paradigms, Hadoop ecosystem, and big data architecture fundamentals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
