import React from 'react';
import { X, Printer, Download } from 'lucide-react';
import { sfx } from '../utils/sfx';

interface ResumePrintViewProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumePrintView: React.FC<ResumePrintViewProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    sfx.playClick();
    window.print();
  };

  const handleDownloadPDF = () => {
    sfx.playSuccess();
    // Open print dialog which allows saving as PDF
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden text-left my-8 border border-slate-300 print:shadow-none print:border-none print:m-0 print:w-full print:max-w-none">
        {/* Top Control Bar (Hidden on print) */}
        <div className="bg-slate-900 px-6 py-4 border-b border-slate-700 flex items-center justify-between print:hidden">
          <div className="flex items-center space-x-2 text-white font-orbitron text-sm font-bold">
            <span>SANJAY_S_RESUME.pdf</span>
            <span className="text-xs font-mono font-normal text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">EXPORT MODE</span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleDownloadPDF}
              title="Save resume as PDF (use Print to PDF option)"
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-orbitron font-bold text-xs flex items-center gap-1.5 shadow-md"
            >
              <Download className="w-4 h-4" /> DOWNLOAD PDF
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-orbitron font-bold text-xs flex items-center gap-1.5 shadow-md"
            >
              <Printer className="w-4 h-4" /> PRINT
            </button>
            <button
              onClick={() => {
                sfx.playClick();
                onClose();
              }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-8 sm:p-12 font-sans leading-relaxed text-sm space-y-6 print:p-6">
          {/* Header */}
          <div className="text-center border-b border-slate-300 pb-6 space-y-2">
            <h1 className="text-3xl font-extrabold font-serif text-slate-900 tracking-wider">SANJAY S</h1>
            <div className="text-xs text-slate-600 font-mono flex flex-wrap justify-center gap-3">
              <span>sanjusan1506@gmail.com</span> | <span>+91 9361136053</span> | <span>Coimbatore, Tamil Nadu</span>
            </div>
            <div className="text-xs text-slate-700 font-mono flex flex-wrap justify-center gap-4">
              <span>linkedin.com/in/sanjay-s-b44539320</span> | <span>github.com/sanjayS1506</span>
            </div>
          </div>

          {/* Objective */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
              CAREER OBJECTIVE
            </h2>
            <p className="text-xs text-slate-800 leading-normal">
              Motivated B.Sc. Computer Science student with a strong foundation in Java, Python, and SQL. Seeking a Software Developer role to apply my programming and problem-solving skills while contributing to the development of efficient and reliable software solutions.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3">
              EDUCATION
            </h2>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between font-bold text-slate-900">
                <span>Bachelor of Computer Science</span>
                <span>2024 - Present</span>
              </div>
              <div className="text-slate-700">KG College of Arts and Science</div>

              <div className="flex justify-between font-bold text-slate-900 pt-1">
                <span>Higher Secondary Certificate (HSC)</span>
                <span>2023 - 2024</span>
              </div>
              <div className="text-slate-700">Ruby Matric Hr Sec School</div>

              <div className="flex justify-between font-bold text-slate-900 pt-1">
                <span>Secondary School Leaving Certificate (SSLC)</span>
                <span>2021 - 2022</span>
              </div>
              <div className="text-slate-700">Ruby Matric Hr Sec School</div>
            </div>
          </div>

          {/* Internship */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3">
              INTERNSHIP
            </h2>
            <div className="space-y-1.5 text-xs">
              <div className="font-bold text-slate-900 uppercase">JAVA DEVELOPER INTERN</div>
              <div className="font-semibold text-slate-700">AMDOX TECHNOLOGIES</div>
              <ul className="list-disc list-inside text-slate-800 space-y-1 pl-1">
                <li>Completed a 1-month internship in Java development.</li>
                <li>Assisted in developing and testing Java-based software modules.</li>
                <li>Gained hands-on experience in Core Java, MySQL, debugging, and software development practices.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3">
              PROJECTS
            </h2>
            <div className="space-y-4 text-xs">
              <div>
                <div className="font-bold text-slate-900">JWT AUTHENTICATION & USER MANAGEMENT SYSTEM</div>
                <div className="font-mono text-slate-700 mb-1">
                  <strong>Tech Stack:</strong> Java 17, Spring Boot, Spring Security, JWT, MySQL, Maven
                </div>
                <ul className="list-disc list-inside text-slate-800 space-y-1 pl-1">
                  <li>Developed a secure user authentication system using Spring Boot and JWT. Implemented role-based access, password encryption, and protected REST APIs with MySQL integration for user management.</li>
                </ul>
              </div>

              <div>
                <div className="font-bold text-slate-900">SMART TOURIST MANAGEMENT SYSTEM</div>
                <div className="font-mono text-slate-700 mb-1">
                  <strong>Tech Stack:</strong> Python, HTML, CSS, JavaScript, PyQt5, Django
                </div>
                <ul className="list-disc list-inside text-slate-800 space-y-1 pl-1">
                  <li>Developed and presented a Python-based Smart Tourist Management System to stakeholders to enhance traveler safety and navigation through real-time tracking and location intelligence.</li>
                  <li>Implemented geofencing to monitor tourist movement within designated zones and trigger automated alerts, collaborating with safety teams to build an SOS emergency system and backend services using Django.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-800">
              <div><strong>Programming Languages:</strong> Java, Python, C++</div>
              <div><strong>Database:</strong> MySQL, MongoDB</div>
              <div><strong>Web Technologies:</strong> HTML5, CSS3, JavaScript, React.js, Node.js</div>
              <div><strong>Cloud Platforms:</strong> AWS (Basics)</div>
              <div><strong>Version Control:</strong> Git</div>
              <div><strong>Tools:</strong> VS Code, Python IDLE, Eclipse, MySQL Workbench, MySQL CLI</div>
            </div>
          </div>

          {/* Soft Skills & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-bold font-mono tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
                SOFT SKILLS
              </h2>
              <div className="text-xs text-slate-800">
                Project Management | Time management | Adaptability | Flexibility | Team collaboration
              </div>
            </div>
            <div>
              <h2 className="text-xs font-bold font-mono tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
                CERTIFICATIONS
              </h2>
              <div className="text-xs text-slate-800">
                Big Data Computing - NPTEL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
